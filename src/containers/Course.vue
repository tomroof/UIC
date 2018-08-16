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
          :index="index"
          :question="question"
          :openPopupTrue="openPopupTrue"
          @selectAnswer='handelAnswerSelect' 
          @isQuestionHandler="isQuestionHandler" />

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
import AudioManager from '@/helpers/audioManager'

export default {
  name: 'CourseContainer',

  props: {
    curseId: Number,
    clickRewardContinue: Boolean
  },

  watch: {
    clickRewardContinue:{
      handler: function (newVal) {
        if (newVal === true) {
          this.checkNextPageAudio()
        }
      },
      immediate: true
    }
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
      previousQuestionType: null,
      isAnswerCorrect: null,
      openPopupFalse: false,
      openPopupTrue: false,
      isQuestion: false,
      currentProgress: 0,
      buttonText: 'Continue'
    }
  },

  mounted() {
    this.$store.commit('setTopic', this.curseId)

    events.$on('nextSlide', () => {
      this.checkModuleComplete()
      this.isQuestion = true;
      this.isAnswerCorrect = null;
      this.openPopupFalse = false;
      this.openPopupTrue = false;
      this.checkCompleteCourse()

      if (this.$refs.wizard) {
        this.$refs.wizard.goNext(true);  
      }      
    })

    events.$on('thisSlide', () => {
      this.isQuestion = true;
      this.previousQuestionType = null;
      this.isAnswerCorrect = null;
      this.openPopupFalse = false;
      this.openPopupTrue = false;
    })

    events.$on('openSuccessPopup', () => {
      this.openSuccessPopup();
    })

    events.$on('openFailedPopup', () => {
      this.openFailedPopup();
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
          options: {nextDisabled: this.curse.questions[index] ? (this.curse.questions[index].type === 'icons' || this.curse.questions[index].type === 'cards' || this.curse.questions[index].type === 'calc'): false},
          nextLabel: this.curse.questions[index + 1] ? this.curse.questions[index + 1].text : null
        }
      })
    }
  },

  methods: {
    checkModuleComplete () {
      if (this.$refs.wizard != null) {
        let page = this.$refs.wizard.currentStep
        if (page < this.steps.length - 1 && this.steps[page].type !== null) {
          let currentQuestionType = this.steps[page].type
          let nextQuestionType = this.steps[page + 1].type
          if (currentQuestionType != null && nextQuestionType != currentQuestionType) {
            if (currentQuestionType === "icons" || currentQuestionType === "cards" || currentQuestionType === "calc") { 
              this.$emit('moduleCompleted')
              return
            }        
          }
          this.checkAudioPlay(page)        
        }        
      }      
    },

    checkNextPageAudio () {
      if (this.$refs.wizard !== null) {
        let page = this.$refs.wizard.currentStep
        let currentQuestionType = this.steps[page].type

        if (currentQuestionType === "calc") {
          AudioManager.playAudio('first_question_for_calc')
        }
      }      
    },
  
    checkAudioPlay (page) {
      if (page < this.steps.length - 1) {
        let nextPage = page + 1
        let currentQuestionType = this.steps[page].type
        let nextQuestionType = this.steps[nextPage].type

        if (currentQuestionType === nextQuestionType) {
          return
        }

        if (nextQuestionType === "icons") {
          AudioManager.playAudio('first_question_for_icons')
        } else if (nextQuestionType === "cards") {
          AudioManager.playAudio('first_question_for_cards')
        } 
      }
    },

    nextClicked (currentPage) {
      if (this.isQuestion) return false
      if (this.isAnswerCorrect !== null) {

        let page = this.$refs.wizard.currentStep
        let currentQuestionType = this.steps[page].type
        let currentQuestionSlot = this.steps[page].slot

        // Play correct sound for only icons
        if (currentQuestionType === 'icons') {
          if (this.isAnswerCorrect === true) {
            AudioManager.playAudio('icons_select_correct')
          } else {
            AudioManager.playAudio('icons_select_wrong')
          }
        }
        else if (currentQuestionType === 'calc') {
          if (currentQuestionSlot === '24') {
            AudioManager.playAudio('calc_question_1')
          } else if (currentQuestionSlot === '25') {
            AudioManager.playAudio('calc_question_2')
          } else if (currentQuestionSlot === '26' || currentQuestionSlot === '27') {
            AudioManager.playAudio('calc_question_3_4')
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
        this.$router.push('/congrats/1')
      } else {
        return true //return false if you want to prevent moving to next page
      }
    },

    checkCompleteCourse () {
      if (this.$refs.wizard != null) {
        let currentPage = this.$refs.wizard.currentStep
        this.calcProgress(currentPage)
        
        if (this.steps.length - 1 === currentPage) {
          this.checkAchievement()
          this.$router.push('/congrats/1')
        }
      }
    },

    checkAchievement () {
      switch (this.curseId) {
        case 1:
          this.$store.commit('completeArchievement', 1)
          break;

        case 2:
          this.$store.commit('completeArchievement', 2)
          break;

        case 3:
          this.$store.commit('completeArchievement', 3)
          break;

        case 4:
          this.$store.commit('completeArchievement', 4)
          break;

        case 5:
          this.$store.commit('completeArchievement', 5)
          break;

        case 6:
          this.$store.commit('completeArchievement', 6)
          break;

        case 7:
          this.$store.commit('completeArchievement', 7)
          break;

        case 8:
          this.$store.commit('completeArchievement', 8)
          break;
      }
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
