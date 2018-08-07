<template>
  <div class="curse-container">
    <div class="progress-bar">
      <div class="progress-background-bar"></div>
      <div class="progress-active-bar" :style="{ width: `${currentProgress}%` }"></div>
    </div>
    <vue-good-wizard
      ref="wizard"
      :steps="steps"
      :finalStepLabel="buttonText"
      :nextStepLabel="buttonText"
      :onNext="nextClicked"
    >

      <div :slot="question.id" :key="question.id" v-for="(question, index) in curse.questions">
        <CardsQuestion
          v-if="question.type === 'cards'"
          :question="question"
          :index="index"
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
          @selectAnswer="handelAnswerSelect"
          @selectContinue="handelContinue"
          :openPopupFalse="openPopupFalse"
          :openPopupTrue="openPopupTrue"
          @isQuestionHandler="isQuestionHandler" />

        <CalcQuestion
          v-if="question.type === 'calc'"
          :question="question"
          @selectAnswer='handelAnswerSelect' />

        <MouthQuestion
          v-if="question.type === 'mouth'"
          :question="question"
          :openPopupFalse="openPopupFalse"
          :openPopupTrue="openPopupTrue"
          :openSuccessPopup="openSuccessPopup"
          :openFailedPopup="openFailedPopup"
          @selectAnswer='handelAnswerSelect' />

        <span v-if="steps[index].nextLabel" class="next-label">Next Up: {{steps[index].nextLabel}}</span>
      </div>
    </vue-good-wizard>
  </div>
</template>

<script>
import CardsQuestion from '@/components/questions/CardsQuestion'
import VideoQuestion from '@/components/questions/VideoQuestion'
import IconsQuestion from '@/components/questions/IconsQuestion'
import CalcQuestion from '@/components/questions/CalcQuestion'
import MouthQuestion from '@/components/questions/MouthQuestion'
// data
import CourseData from '@/data/courseSample'
// events
import { events } from '@/helpers/events'

export default {
  name: 'CourseContainer',

  props: {
    curseId: String
  },

  components: {
    CardsQuestion,
    IconsQuestion,
    VideoQuestion,
    CalcQuestion,
    MouthQuestion
  },

  data () {
    return {
      currentQuestionType: null,
      isAnswerCorrect: null,
      openPopupFalse: false,
      openPopupTrue: false,
      isQuestion: false,
      currentProgress: 0,
      buttonText: 'Continue'
    }
  },

  mounted() {
    events.$on('nextSlide', () => {
      this.currentQuestionType = null;
      this.isQuestion = true;
      this.isAnswerCorrect = null;
      this.$refs.wizard.goNext(true);
      this.openPopupFalse = false;
      this.openPopupTrue = false;
    })

    events.$on('thisSlide', () => {
      this.isQuestion = true;
      this.currentQuestionType = null;
      this.isAnswerCorrect = null;
      this.openPopupFalse = false;
      this.openPopupTrue = false;
    })
  },

  computed: {
    // TODO get curse by prop Id
    curse () {
      return CourseData
    },

    steps () {
      return this.curse.questions.map((q, index) => {
        return {
          label: q.text,
          slot: q.id,
          type: this.curse.questions[index].type,
          options: {nextDisabled: this.curse.questions[index] ? (this.curse.questions[index].type === 'icons' || this.curse.questions[index].type === 'cards'): false},
          nextLabel: this.curse.questions[index + 1] ? this.curse.questions[index + 1].text : null
        }
      })
    }
  },

  methods: {
    nextClicked (currentPage) {
      if (this.isQuestion) return false
      if (this.isAnswerCorrect !== null) {
        if (!this.checkAnswer()) {
          this.openPopupFalse = true
          return false
        }
        else {
          if (this.currentQuestionType === 'icons') {
            this.openPopupTrue = true
            this.$store.commit('updateCourseProgress', { id: this.$route.params.id, currentProgress: currentPage + 1 })
            this.calcProgress(currentPage)
            return false
          }
        }
      }

      this.$store.commit('updateCourseProgress', { id: this.$route.params.id, currentProgress: currentPage + 1 })
      this.calcProgress(currentPage)
      if (this.steps.length - 1 === currentPage) {

        this.$router.push('/congrats/1')
      } else {
        return true //return false if you want to prevent moving to next page
      }
    },

    calcProgress (currentPage) {
      var progress = ((currentPage + 1) / this.steps.length) * 100
      if (progress > 100) {
        progress = 100
      } 
      this.currentProgress = progress
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
      this.currentQuestionType = this.steps[data.index].type
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
        bottom: 0;
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
  bottom: 15%;
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
