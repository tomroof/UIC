<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <div class="answer" v-for="(answer, index) in questionCard.answers" :key="index">
          <AnswerIconCard
            :answer="answer"
            :selected="answer.selected"
            @click="handleAnswerClick(answer, question)"/>
        </div>
      </div>
      <popup :openPopupFalse="openPopupFalse" :openPopupTrue="openPopupTrue"/>
    </div>
  </BaseQuestion>
</template>

<script>
import AnswerIconCard from '@/components/cards/AnswerIconCard'
import BaseQuestion from '@/components/questions/BaseQuestion'
import Popup from '@/components/Popup'

import { events } from '@/helpers/events'
import AudioManager from '@/helpers/audioManager'

  export default {
    props: ['question', 'index', 'openPopupFalse', 'openPopupTrue', 'isQuestion'],
    components: {
      BaseQuestion,
      AnswerIconCard,
      Popup
    },

    data () {
      return {
        questionCard: this.question || {},
      }
    },

    watch: {
      question:{
        handler: function (newVal) {
          this.questionCard = newVal
        },
        immediate: true
      }
    },

    mounted() {
      this.$emit('isQuestionHandler', true, 'Check');
      events.$on('dropAnswer', this.dropActiveAnswers)
    },

    updated() {
      this.$emit('isQuestionHandler', false, 'Check');
    },

    methods: {
      dropActiveAnswers () {
        this.$set(this, 'questionCard', {
          text: this.question.text,
          desc: this.question.desc,
          answers: this.question.answers.map((a) => {
            return {
              image: a.image,
              text: a.text,
              isCorrect: a.isCorrect,
              selected: false
            }
          })
        })
      },

      handleAnswerClick (answer) {
        this.$emit('isQuestionHandler', false)
        this.dropActiveAnswers()
        this.questionCard.answers.find((a) => a.text === answer.text).selected = true
        this.$emit('selectAnswer', {isCorrect: answer.isCorrect, index: this.index})

        if (answer.isCorrect) {
          AudioManager.playAudio('icons_select_correct')
        } else {
          AudioManager.playAudio('icons_select_wrong')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.answers {
  .card {
    border: none;
  }
}

.answer {
  &:not(:last-child) {
    &::after {
      content: 'or';
      width: 100%;
      text-align: center;
      display: block;
      margin: 21px 0;
      font-family: ZillaSlab-Bold;
      font-size: 26px;
      color: #FFFFFF;
      letter-spacing: 0;
    }

    /deep/ .image {
      background: #FF6D7F;
    }
  }

  &:last-child {
    /deep/ .image {
      background: #278AB5;
    }
  }

}
</style>
