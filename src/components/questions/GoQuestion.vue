<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <button v-if="!isAudioEnd" class="button" @click="playAudio">GO</button>
      <div v-else class="text">
        {{ `"${text}"` }}
      </div>
    </div>
  </BaseQuestion>
</template>

<script>
import BaseQuestion from '@/components/questions/BaseQuestion'
import AudioManager from '@/helpers/audioManager'

import config from '@/data/config/index'

export default {
  name: 'GoQuestion',

  props: ['question', 'index', 'selectAnswer', 'isQuestionHandler'],

  components: {
    BaseQuestion
  },

  data() {
    return {
      questionCard: this.question || {},
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
      return this.questionCard.answer[this.textIndex]
    }
  },

  mounted() {
    this.$emit('isQuestionHandler', false, 'Check');
  },

  methods: {
    endedAudio() {
      this.isAudioEnd = true
      this.questionCard.text = ''
      const answerLength = this.questionCard.answer.length

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
        this.$emit('selectAnswer', {isCorrect: true, index: this.index})
      }, playTime)

    },

    playAudio() {
      AudioManager.playAudio(this.getI18nAudio.audio_first_question_for_icons, this.$store.state.gender, this.endedAudio)
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
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
