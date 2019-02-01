<template>
  <div class="curse-container">
    <div class="progress-bar">
      <div class="progress-background-bar"></div>
      <div class="progress-active-bar" :style="{ width: `${currentProgress}%` }"></div>
    </div>
    <vue-good-wizard
      ref="wizard"
      :steps="steps"
      :finalStepLabel="getI18n.continue"
      :nextStepLabel="getI18n.continue"
      :onNext="nextClicked"
    >

      <div :slot="question.id" :key="question.id" v-for="(question, index) in curse.questions">
        <CardsQuestion
          v-if="question.type === 'cards'"
          :question="question"
          :index="index"
          :enabledSelection="enabledSelection"
          @selectAnswer='handelAnswerSelect'
          @isQuestionHandler="isQuestionHandler" />

        <VideoQuestion
          v-if="question.type === 'video'"
          :question="question"
          @selectAnswer='handelAnswerSelect'
          @isQuestionHandler="isQuestionHandler" />

        <IconsQuestion
          v-if="question.type === 'icons'"
          :question="question"
          :index="index"
          :enabledSelection="enabledSelection"
          @selectAnswer="handelAnswerSelect"
          @selectContinue="handelContinue"
          :openPopupFalse="openPopupFalse"
          :openPopupTrue="openPopupTrue"
          @isQuestionHandler="isQuestionHandler" />

        <CalcQuestion
          v-if="question.type === 'calc'"
          :index="index"
          :question="question"
          :enabledSelection="enabledSelection"
          :openPopupFalse="openPopupFalse"
          :openPopupTrue="openPopupTrue"
          @selectAnswer='handelAnswerSelect'
          @isQuestionHandler="isQuestionHandler" />

        <MouthQuestion
          v-if="question.type === 'mouth'"
          :question="question"
          :enabledSelection="enabledSelection"
          :openPopupFalse="openPopupFalse"
          :openPopupTrue="openPopupTrue"
          :openSuccessPopup="openSuccessPopup"
          :openFailedPopup="openFailedPopup"
          @selectAnswer='handelAnswerSelect'
          @isQuestionHandler="isQuestionHandler" />

        <span v-if="steps[index].nextType != 'cards' && steps[index].nextLabel" class="next-label">{{ getI18n.nextUp }}: {{steps[index].nextLabel}}</span>
      </div>
    </vue-good-wizard>
    <ModuleStartDialog v-if="showModuleStartDialog" :title="moduleStartTitle" :audio="moduleStartAudio" @endedAudio="endedIntroAudio" @hide="hideModuleStartDialog"></ModuleStartDialog>
  </div>
</template>

<script>
import CardsQuestion from '@/components/questions/CardsQuestion'
import VideoQuestion from '@/components/questions/VideoQuestion'
import IconsQuestion from '@/components/questions/IconsQuestion'
import CalcQuestion from '@/components/questions/CalcQuestion'
import MouthQuestion from '@/components/questions/MouthQuestion'
import ModuleStartDialog from '@/components/dialogs/ModuleStartDialog'
import { mapActions, mapGetters } from 'vuex'

// data
import config from '@/data/config'

// events
import { events } from '@/helpers/events'
import AudioManager from '@/helpers/audioManager'
import DeviceManager from '@/helpers/deviceManager'

export default {
  name: 'CourseContainer',

  props: {
    curseId: Number,
    clickRewardContinue: Boolean
  },

  data () {
    return {
      enabledSelection: false,
      showRewardCard: false,
      previousQuestionType: null,
      isAnswerCorrect: null,
      openPopupFalse: false,
      openPopupTrue: false,
      isQuestion: false,
      currentProgress: 0,
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
      this.initPage()
      let page = parseInt(this.$route.params.id)

      this.$store.commit('updateCoursePage', { id: this.curseId, page: page})
      if (!this.showRewardCard) {
        this.checkAudioPlay(page)
      }
    }
  },

  components: {
    CardsQuestion,
    IconsQuestion,
    VideoQuestion,
    CalcQuestion,
    MouthQuestion,
    ModuleStartDialog
  },

  mounted() {
    let first_page = parseInt(this.$route.params.id)
    this.$store.commit('setTopic', this.curseId)

    if (this.$refs.wizard !== null) {
      this.$refs.wizard.goTo(first_page)
      if (first_page > 0) {
        this.checkAudioPlay(first_page)
        this.calcProgress(first_page)
      }
    }

    events.$on('nextSlide', this.nextSlideHandler)
    events.$on('thisSlide', this.thisSlideHandler)
    events.$on('openSuccessPopup', this.openSuccessPopupHandler)
    events.$on('openFailedPopup', this.openFailedPopupHandler)
  },

  computed: {
    // TODO get curse by prop Id
    curse () {
      return config().courseSample
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

    steps () {
      return this.curse.questions.map((q, index) => {
        return {
          label: q.text,
          slot: q.id,
          url_prefix: q.url_prefix,
          type: this.curse.questions[index].type,
          options: {nextDisabled: this.curse.questions[index] ? (this.curse.questions[index].type === 'icons' || this.curse.questions[index].type === 'cards' || this.curse.questions[index].type === 'calc' || this.curse.questions[index].type === 'mouth'): false},
          nextLabel: this.curse.questions[index + 1] ? this.curse.questions[index + 1].text : null,
          nextType: this.curse.questions[index + 1] ? this.curse.questions[index + 1].type : null,
        }
      })
    }
  },

  beforeDestroy() {
    events.$off('thisSlide', this.thisSlideHandler)
    events.$off('nextSlide', this.nextSlideHandler)
    events.$off('openSuccessPopup', this.openSuccessPopupHandler)
    events.$off('openFailedPopup', this.openFailedPopupHandler)
  },

  methods: {
    ...mapActions([
      'postAnswer'
    ]),

    thisSlideHandler(isCorrect) {
      const page = this.$refs.wizard.currentStep
      this.steps[page].options.nextDisabled = true
      if (typeof(isCorrect) === 'boolean') this.isAnswerCorrect = isCorrect

      this.sendAnswer(page)

      this.isQuestion = true;
      this.previousQuestionType = null;
      this.isAnswerCorrect = null;
      this.openPopupFalse = false;
      this.openPopupTrue = false;
    },

    nextSlideHandler(isCorrect) {
      const page = this.$refs.wizard.currentStep
      if (typeof(isCorrect) === 'boolean') this.isAnswerCorrect = isCorrect
      this.calcProgress(page)
      this.sendAnswer(page)

      this.checkModuleComplete()
      this.enableSelected = false
      this.isQuestion = true;
      this.isAnswerCorrect = null;
      this.openPopupFalse = false;
      this.openPopupTrue = false;

      if (this.$refs.wizard) {
        if (this.steps.length - 1 === page) {
          this.topicComplete()
        }
        else {
          this.movePage(page + 1)
          this.initPage()
        }
      }
    },

    openFailedPopupHandler() {
      this.openFailedPopup();
    },

    openSuccessPopupHandler() {
      this.openSuccessPopup();
    },

    initPage () {
      this.isQuestion = true;
      this.previousQuestionType = null;
      this.isAnswerCorrect = null;
      this.openPopupFalse = false;
      this.openPopupTrue = false;
      if (this.$refs.wizard !== null) {
        this.$refs.wizard.goTo(parseInt(this.$route.params.id))
      }
    },

    checkModuleComplete () {
      let page = parseInt(this.$route.params.id)

      // Check last page.
      // PAGE !=== needs refactoring
      if (page < this.steps.length - 1 && this.steps[page].type !== null && page !== 1) {
        let currentQuestionType = this.steps[page].type
        let nextQuestionType = this.steps[page + 1].type
        if (currentQuestionType != null && nextQuestionType != currentQuestionType) {
          if (currentQuestionType === "icons" || currentQuestionType === "cards" || currentQuestionType === "calc") {
            this.showRewardCard = true
            this.$emit('moduleCompleted')
            return
          }
        }
        this.showRewardCard = false

        // Save completed question id in global.
        this.$store.commit('updateCoursePage', { id: this.curseId, page: (page + 1)})
        // this.checkAudioPlay(page)
      }
    },

    checkAudioPlay (page) {
      if (page > 0 && page < this.steps.length - 1) {
        let prevPage = page - 1
        let prevType = this.steps[prevPage].type
        let currentType = this.steps[page].type

        this.enabledSelection = true
        if (currentType === null || prevType === currentType) {
          return
        }

        if (DeviceManager.isMobile()) {
          if (currentType === "icons") {
            this.showModuleStartDialog = true
            this.moduleStartTitle = this.steps[page].nextLabel
            this.moduleStartAudio = this.getI18nAudio.audio_first_question_for_icons
          } else if (currentType === "cards") {
            this.showModuleStartDialog = true
            this.moduleStartTitle = this.steps[page].nextLabel
            this.moduleStartAudio = this.getI18nAudio.audio_first_question_for_cards
          } else if (currentType === "calc") {
            this.showModuleStartDialog = true
            this.moduleStartTitle = this.steps[page].nextLabel
            this.moduleStartAudio = this.getI18nAudio.audio_first_question_for_calc
          }
        }
        else {
          if (currentType === "icons") {
            this.enabledSelection = false
            AudioManager.playAudio(this.getI18nAudio.audio_first_question_for_icons, this.$store.state.gender, this.endedIntroAudio)
          } else if (currentType === "cards") {
            this.enabledSelection = false
            AudioManager.playAudio(this.getI18nAudio.audio_first_question_for_cards, this.$store.state.gender, this.endedIntroAudio)
          } else if (currentType === "calc") {
            this.enabledSelection = false
            AudioManager.playAudio(this.getI18nAudio.audio_first_question_for_calc, this.$store.state.gender, this.endedIntroAudio)
          }
        }
      }
    },

    hideModuleStartDialog () {
      this.showModuleStartDialog = false
    },

    endedIntroAudio () {
      this.enabledSelection = true
    },

    sendAnswer(currentPage) {
      const postAnswerData = {question: this.curse.questions[currentPage], curseId: this.curseId, isCorrect: this.isAnswerCorrect}
      this.postAnswer(postAnswerData)
    },

    nextClicked (currentPage) {
      if (this.isQuestion) return false
      if (this.steps[currentPage].options.nextDisabled) return false
      let page = this.$refs.wizard.currentStep
      let currentQuestionType = this.steps[page].type
      let currentQuestionSlot = this.steps[page].slot
      this.$store.commit('updateCoursCurrentStep', page)

      if (!((currentQuestionType === 'icons') || (currentQuestionType === 'calc'))) {
        this.sendAnswer(currentPage)
      }

      if (this.isAnswerCorrect !== null) {
        // Play correct sound for only icons
        if (currentQuestionType === 'icons') {
          if (this.isAnswerCorrect === true) {
            AudioManager.playAudio(this.getI18nAudio.audio_icons_select_correct, this.$store.state.gender)
          } else {
            AudioManager.playAudio(this.getI18nAudio.audio_icons_select_wrong, this.$store.state.gender)
          }
        }
        else if (currentQuestionType === 'calc') {
          if (currentQuestionSlot === '27') {
            AudioManager.playAudio(this.getI18nAudio.audio_calc_question_1, this.$store.state.gender)
          } else if (currentQuestionSlot === '28') {
            AudioManager.playAudio(this.getI18nAudio.audio_calc_question_2, this.$store.state.gender)
          } else if (currentQuestionSlot === '29' || currentQuestionSlot === '30') {
            AudioManager.playAudio(this.getI18nAudio.audio_calc_question_3_4, this.$store.state.gender)
          }
        }

        if (!this.checkAnswer()) {
          this.openPopupFalse = true
          return false
        }
        else {
          if (currentQuestionType === 'icons' || currentQuestionType === 'calc') {
            this.openPopupTrue = true
            this.calcProgress(currentPage)
            return false
          }
        }
      }
      this.checkModuleComplete()

      this.calcProgress(currentPage)
      if (this.steps.length - 1 === currentPage) {
        this.topicComplete()
      } else {
        this.movePage(currentPage + 1)
        return true //return false if you want to prevent moving to next page
      }
    },

    checkCompleteCourse () {
      let currentPage = parseInt(this.$route.params.id)
      this.calcProgress(currentPage)

      if (this.steps.length - 1 === currentPage) {
        this.topicComplete()
      }
    },

    topicComplete () {
      // this.checkAchievement()
      this.$store.commit('updateCoursePage', { id: this.curseId, page: 0})
      this.$store.commit('updateCourseProgress', { id: this.curseId, currentProgress: 100 })
      this.$router.push('/congrats/2')
    },

    movePage (page) {
      let questionTitle = this.steps[page].url_prefix
      this.$router.push('/course/' + this.$route.params.url_prefix + "/" + questionTitle +  "/" + page)
    },

    calcProgress (currentPage) {
      var progress = ((currentPage + 1) / this.steps.length) * 100
      if (progress > 100) {
        progress = 100
      }
      this.currentProgress = progress
      this.$store.commit('updateCourseProgress', { id: this.curseId, currentProgress: progress })
    },

    openSuccessPopup () {
      this.openPopupTrue = true
      this.openPopupFalse = false
    },

    openFailedPopup () {
      this.openPopupTrue = false
      this.openPopupFalse = true
    },

    closePopups () {
      this.openPopupTrue = false
      this.openPopupFalse = false
    },

    checkAnswer () {
      if (this.isAnswerCorrect) {
        this.isAnswerCorrect = null
        return true
      }
      else {
        this.isAnswerCorrect = null
        return false
      }
    },

    handelContinue () {
      this.isQuestion = true;
      this.isAnswerCorrect = null;
      this.openPopupFalse = false;
      this.openPopupTrue = false;
      this.$refs.wizard.goNext(true);
    },

    handelAnswerSelect (data) {
      this.steps[data.index].options.nextDisabled = false
      this.isAnswerCorrect = data.isCorrect
    },

    isQuestionHandler(bool, buttonText) {
      this.isQuestion = bool
      this.buttonText = buttonText
    }
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

.curse-container {
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
  width: 90%;
  font-family: 'Zilla Slab';
  font-size: 15px;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  text-align: center;
}
</style>
