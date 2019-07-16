<template>
  <div class="course-container">
    <div class="progress-bar">
      <div class="progress-background-bar"></div>
      <div class="progress-active-bar" :style="{ width: `${currentProgress}%` }"></div>
    </div>
    <div class="question-container">
      <div>

        <CardsQuestion
          v-if="currentQuestion.type === 'cards'"
          :question="currentQuestion"
          @nextQuestion="nextPage"
          :key = "currentPage"
          />

        <SelectQuestion
          v-if="currentQuestion.type === 'select'"
          :question="currentQuestion"
          @nextQuestion="nextPage"
                  :key = "currentPage"
        />

        <IconsQuestion
          v-if="currentQuestion.type === 'icons'"
          :question="currentQuestion"
          @nextQuestion="nextPage"
                  :key = "currentPage"
           />

        <CalcQuestion
             v-if="currentQuestion.type === 'calc'"
             :question="currentQuestion"
             @nextQuestion="nextPage"
             :key = "currentPage"
             />

        <MouthQuestion
             v-if="currentQuestion.type === 'mouth'"
             :question="currentQuestion"
             @nextQuestion="nextPage"
                     :key = "currentPage"
             />

        <VideoQuestion
               v-if="currentQuestion.type === 'video'"
               :question="currentQuestion"
               @nextQuestion="nextPage"
                       :key = "currentPage"
              />

              <GoQuestion
                v-if="currentQuestion.type === 'go'"
                :question="currentQuestion"
                @nextQuestion="nextPage"
                        :key = "currentPage"
              />

              <BrushQuestion
                v-if="currentQuestion.type === 'brush'"
                :question="currentQuestion"
                @nextQuestion="nextPage"
                :key = "currentPage"
              />


        <span v-if="currentStep.nextType != 'cards' && currentStep.nextLabel" class="next-label">{{ getI18n.nextUp }}: {{currentStep.nextLabel}}</span>
      </div>
    </div>
    <ModuleStartDialog v-if="showModuleStartDialog" :title="moduleStartTitle" :audio="moduleStartAudio" @endedAudio="endedIntroAudio" @hide="hideModuleStartDialog"></ModuleStartDialog>
  </div>
</template>

<script>
import CardsQuestion from '@/components/questions/CardsQuestion'
import VideoQuestion from '@/components/questions/VideoQuestion'
import IconsQuestion from '@/components/questions/IconsQuestion'
import CalcQuestion from '@/components/questions/CalcQuestion'
import MouthQuestion from '@/components/questions/MouthQuestion'
import SelectQuestion from '@/components/questions/SelectQuestionNew'
import ModuleStartDialog from '@/components/dialogs/ModuleStartDialog'
import GoQuestion from '@/components/questions/GoQuestion'
import BrushQuestion from '@/components/questions/BrushQuestion'
import { mapActions, mapGetters } from 'vuex'


// data
import config from '@/data/config/index'

// events
import { events } from '@/helpers/events'
import AudioManager from '@/helpers/audioManager'
import DeviceManager from '@/helpers/deviceManager'

export default {
  name: 'CourseContainerNew',

  props: {
    courseId: Number,
    clickRewardContinue: Boolean
  },

  data () {
    return {
      showModuleStartDialog: false,
      moduleStartTitle: '',
      moduleStartAudio: null
    }
  },

  watch: {
    clickRewardContinue:{
      handler: function (newVal) {
        if (newVal === true) {
          let page = parseInt(this.$route.params.id)
          let currentQuestionType = this.steps[page].type
          if (currentQuestionType === 'calc') {
            this.checkAudioPlay(page)
          }
        }
      },
      immediate: true
    },
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
    BrushQuestion
  },

  mounted() {
    let first_page = parseInt(this.$route.params.id)
    this.$store.commit('setTopic', this.courseId)
  },

  computed: {

    currentPage(){
      return  parseInt(this.$route.params.id)
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
      let course = config().courses[this.courseId-1];
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


    nextPage(){
      if(this.currentPage<this.steps.length-1)
        this.movePage(this.currentPage+1);
      else{
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

.course-container {
  /deep/ .wizard__steps {
    height: auto;
    display: none;
    justify-content: center;
    max-width: calc(100% - 40px);
  }

  /deep/ .wizard__step {
    height: auto;
    width: auto !important;
    min-width: 25px;
    margin-left: 5px;
    margin-right: 5px;

    &.active {
      .wizard__step__indicator {
        background-color: #87DBA2;
        opacity: 1;
      }
    }

    .wizard__step__indicator {
      border: none;
      margin-left: auto;
      width: 25px;
      height: 6px;
      border-radius: 5px;
      background-color: #87DBA2;
      opacity: 0.2;
    }

    .wizard__step__line,
    .wizard__step__label {
      display: none;
    }
  }

  /deep/ .wizard__arrow {
    display: none;
  }

  /deep/ .wizard__body {
    margin: 0;
    background-color: transparent;
    border: none;

    .wizard__body__step {
      padding: 0;
    }

    .wizard__body__actions {
      background-color: transparent;
      border: none;
      display: flex;
      justify-content: center;

      .wizard__next,
      .final-step {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Zilla Slab';
        font-weight: 300;
        font-size: 19px;
        height: 50px;
        text-align: center;
        letter-spacing: 0.94px;

        background-color: #278ab5;
        border-radius: 100px;
        margin: 30px auto;
        color: #FFFFFF;
        box-shadow: 0px 30px 29px -22px rgba(0, 0, 0, 0.39);
        width: 300px;
      }

      .pull-left {
        display: none;
      }

      .wizard__next .vgw-icon {
        display: none;
      }
    }
  }
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
