<template>
  <div class="course-container">
    <div class="progress-bar">
      <div class="progress-background-bar"></div>
      <div class="progress-active-bar" :style="{ width: `${currentProgress}%` }"></div>
    </div>
    <div class="question-container">
      <div>

        <component v-bind:is="currentQuestionComponent"
                  :question="currentQuestion"
                  @nextQuestion="nextPage"
                  :key = "currentPage"
        />

        <span v-if="currentStep.nextType != 'cards' && currentStep.nextLabel" class="next-label">{{ getI18n.nextUp }}: {{currentStep.nextLabel}}</span>
      </div>
    </div>
    <RewardCard v-if="showRewardCard" @continue="nextPage"></RewardCard>
    <ModuleStartDialog v-if="showModuleStartDialog" :title="moduleStartTitle" :audio="moduleStartAudio" @endedAudio="endedIntroAudio" @hide="hideModuleStartDialog"></ModuleStartDialog>
  </div>
</template>

<script>
// questions
import CardsQuestion from '@/components/questions/CardsQuestion'
import VideoQuestion from '@/components/questions/VideoQuestion'
import IconsQuestion from '@/components/questions/IconsQuestion'
import CalcQuestion from '@/components/questions/CalcQuestion'
import MouthQuestion from '@/components/questions/MouthQuestion'
import SelectQuestion from '@/components/questions/SelectQuestion'
import GoQuestion from '@/components/questions/GoQuestion'
import BrushQuestion from '@/components/questions/BrushQuestion'

// popups
import RewardCard from '@/components/cards/RewardCard'
import ModuleStartDialog from '@/components/dialogs/ModuleStartDialog'
import { mapActions, mapGetters } from 'vuex'

// data
import config from '@/data/config/index'

// events
import { events } from '@/helpers/events'
import AudioManager from '@/helpers/audioManager'
import DeviceManager from '@/helpers/deviceManager'

export default {
  name: 'CourseContainer',

  props: {
    courseId: Number,
    clickRewardContinue: Boolean
  },

  data () {
    return {
      showModuleStartDialog: false,
      showRewardCard: false,
      moduleStartTitle: '',
      moduleStartAudio: null
    }
  },

  watch: {
    '$route' (to, from) {
      let page = parseInt(this.$route.params.id)
      this.$store.commit('updateCoursePage', { id: this.courseId, page: page})
    }
  },

  components: {
    CardsQuestion,
    IconsQuestion,
    VideoQuestion,
    CalcQuestion,
    MouthQuestion,
    SelectQuestion,
    ModuleStartDialog,
    GoQuestion,
    BrushQuestion,
    RewardCard
  },

  mounted() {
    let first_page = parseInt(this.$route.params.id)
    this.$store.commit('setTopic', this.courseId)
  },

  computed: {

    currentPage(){
      return  parseInt(this.$route.params.id)
    },

    currentQuestionComponent(){
      switch(this.currentQuestion.type){
        case "cards":
          return "CardsQuestion";
        case "select":
          return "SelectQuestion";
        case "icons":
            return "IconsQuestion";
        case "calc":
              return "CalcQuestion";
        case "mouth":
              return "MouthQuestion";
        case "video":
              return "VideoQuestion";
        case "go":
              return "GoQuestion";
        case "brush":
              return "BrushQuestion";
      }
    },

    currentQuestion(){
       return this.course.questions[this.currentPage];
    },

    currentProgress(){
      var progress = ((this.currentPage + 1) / this.steps.length) * 100
      if (progress > 100) {
        progress = 100
      }
      this.$store.commit('updateCourseProgress', { id: this.courseId, currentProgress: progress })
      return progress;
    },

    course () {
      let course = config().courses.find( (c)=> c.id===this.courseId);
      if(this.courseId && course && course.content)
        return course.content;
    },

    getI18n() {
      return config().restText
    },

    getUuid() {
      return this.$store.state.uuid
    },

    getI18nAudio() {
      return config().audio
    },

    currentStep(){
      return this.steps[this.currentPage];
    },

    steps () {
      return this.course.questions.map((q, index) => {
        return {
          label: q.text,
          slot: q.id,
          url_prefix: q.url_prefix,
          type: this.course.questions[index].type,
          options: {nextDisabled: this.course.questions[index] ?
            (this.course.questions[index].type === 'icons' ||
              this.course.questions[index].type === 'cards' ||
              this.course.questions[index].type === 'calc' ||
              this.course.questions[index].type === 'mouth' ||
              this.course.questions[index].type === 'select'):
                false},
          nextLabel: this.course.questions[index + 1] ? this.course.questions[index + 1].text : null,
          nextType: this.course.questions[index + 1] ? this.course.questions[index + 1].type : null,
        }
      })
    }
  },

  beforeDestroy() {
  },

  methods: {
    ...mapActions([
      'postAnswer'
    ]),


    nextPage() {
      console.log('this.currentQuestion', this.currentQuestion)
      // end of module case --- show reward card and wait for it to call agian
      if (this.currentQuestion.endOfModule) {
        if (this.showRewardCard) {
          this.showRewardCard = false;
        } else {
          this.showRewardCard = true;
          return;
        }
      }
      // next page case
      if (this.currentPage < this.steps.length-1) {
        this.movePage(this.currentPage + 1);
        /// end of course case
      } else {
        this.$store.commit('updateCoursePage', { id: this.courseId, page: 0})
        this.$store.commit('updateCourseProgress', { id: this.courseId, currentProgress: 100 })
        this.$router.push('/congrats/2')
      }
    },


    hideModuleStartDialog () {
      this.showModuleStartDialog = false
    },

    sendAnswer(currentPage) {
      const postAnswerData = {question: this.course.questions[currentPage], courseId: this.courseId, isCorrect: this.isAnswerCorrect}
      this.postAnswer(postAnswerData)
    },

      movePage (page) {
      let questionTitle = this.steps[page].url_prefix
      this.$router.push('/course/' + this.$route.params.url_prefix + "/" + questionTitle +  "/" + page)
    },

  }
}
</script>

<style lang="scss" scoped>

.progress-bar {
  position: absolute;
  width: calc(100% - 120px);
  height: 8px;
  top: 5px;
  left: 60px;
}

.progress-background-bar {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background-color: #217b71;
  border-radius: 4px;
}

.progress-active-bar {
  left: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background-color: #87daa2;
  border-radius: 4px;
}


.next-label {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  font-family: 'Zilla Slab';
  font-size: 15px;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  text-align: center;
}
</style>
