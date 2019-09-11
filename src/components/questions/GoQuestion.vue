<template>
  <div>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <button v-show="!isAudioEnd" class="go-button" @click="clickGo">{{getI18n.questions.Go}}</button>
        <div v-show="isAudioEnd" :class="{'text-wrapper': true, 'appear': isAudioEnd}">
          <transition name="fade" mode="out-in">
            <div class="text" :key="textIndex">
              {{ text }}
            </div>
          </transition>
        </div>
    </div>
  </BaseQuestion>
  <VueButton class="continue-button" :disabled="!continueEnabled"  @click="continueClicked" >
    {{getI18n.continue}}
  </VueButton>

</div>
</template>

<script>
import BaseQuestion from '@/components/questions/BaseQuestion'
import AudioManager from '@/helpers/audioManager'
import VueButton from '@/components/Button'
import config from '@/data/config/index'
import AudioMixin from '@/mixins/audioMixin'

export default {
  name: 'GoQuestion',

  props: ['question'],

  components: {
    BaseQuestion,
    VueButton
  },

  data() {
    return {
      continueEnabled: false,
      questionCard:  {
        ...this.question,
        answers: [...this.question.answers]
      },
      textIndex: 0,
      isAudioEnd: false,
      isGoActive: false,
    }
  },

  computed: {
    getI18nAudio() {
      return config().audio
    },

    text() {
      return this.questionCard.answers[this.textIndex]
    },

    getI18n() {
      return config().restText
    },


    timeInterval(){
      return this.questionCard.timeInterval
    }

  },

  mounted() {
    this.playAudio('questionLoaded')
  },

  methods: {
    ...AudioMixin,

    clickGo(){
      if(this.isGoActive)
        return;
      this.isGoActive = true;
      this.playAudio('goClicked', this.endedAudio);
    },

    endedAudio() {
      console.log('endedAudio')
      this.isAudioEnd = true
      this.questionCard.text = ''
      const answerLength = this.questionCard.answers.length

      const indexInterval = setInterval(() => {
        if (this.textIndex < answerLength - 1) {
          this.textIndex = this.textIndex + 1
        } else {
          this.textIndex = 0
        }
      }, this.timeInterval)

      const playTime = answerLength * this.timeInterval  - 1

      setTimeout(() => {
        clearInterval(indexInterval)
        this.continueEnabled = true;
        this.isGoActive = false;
      }, playTime)

    },

    continueClicked() {
      this.continueEnabled = false;
      this.$emit("nextQuestion");
    },
  }
}
</script>

<style lang="scss" scoped>

.continue-button{
 position: fixed;
 bottom: 20px;
 left: 50%;
 transform: translateX(-50%);
 max-width: 370px;
 text-align: center;
}

  .go-button {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    display: block;

    color: #ffffff;
    font-size: 50px;

    background: #87daa2;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 0px 46px -12px rgba(0,0,0,0.5);
    outline: none;

    cursor: pointer;
  }

  .text {
    padding-top: 80px;

    font-size: 50px;
    color: #ffffff;
    text-align: center;
  }

  .text-wrapper {
    transform: scale(0);
    transition: transform .5s;
  }

  .text-wrapper.appear {
    transform: scale(1);
  }

  .fade-enter-active, .fade-leave-active {
    transform: scale(1);
    transition: opacity .5s, transform .5s;
  }
  .fade-enter {
    transform: scale(0);
    opacity: 0;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>
