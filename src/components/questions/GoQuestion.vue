<template>
  <div>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <button v-if="!isAudioEnd" class="go-button" @click="playAudio">GO</button>
      <div v-else class="text">
        {{ `"${text}"` }}
      </div>
    </div>
  </BaseQuestion>
  <VueButton class="continue-button" :disabled="!continueEnabled"  @click="continueClicked" >
    Continue
  </VueButton>

</div>
</template>

<script>
import BaseQuestion from '@/components/questions/BaseQuestion'
import AudioManager from '@/helpers/audioManager'
import VueButton from '@/components/Button'
import config from '@/data/config/index'

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
      timeInterval: 200
    }
  },

  computed: {
    getI18nAudio() {
      return config().audio
    },

    text() {
      return this.questionCard.answers[this.textIndex]
    }
  },

  mounted() {
  },

  methods: {
    endedAudio() {
      this.isAudioEnd = true
      this.questionCard.text = ''
      const answerLength = this.questionCard.answers.length

      const indexInterval = setInterval(() => {
        if (this.textIndex < answerLength-1) {
          this.textIndex = this.textIndex + 1
        } else {
          this.textIndex = 0
        }
      }, this.timeInterval)

      const playTime = answerLength * (this.timeInterval * 2) - 1

      setTimeout(() => {
        clearInterval(indexInterval)
        this.continueEnabled = true;
      }, playTime)

    },

    playAudio() {
      AudioManager.playAudio(this.getI18nAudio.audio_first_question_for_icons, this.$store.state.gender, this.endedAudio)
    },
    continueClicked(){
      if(this.contineEnabled)
        this.$emit("nextQuestion");
    }
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
  font-family: 'Zilla Slab';
  font-size: 15px;
  color: #FFFFFF;
  letter-spacing: 0.5px;
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
</style>
