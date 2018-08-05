<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <AnswerCard
          v-for="(answer, index) in questionCard.answers"
          :answer="answer"
          :key="index"
          :selected="answer.selected"
          @click="handleAnswerClick(answer)"/>
      </div>
    </div>
  </BaseQuestion>
</template>

<script>
import AnswerCard from '@/components/cards/AnswerCard'
import BaseQuestion from '@/components/questions/BaseQuestion'

  export default {
    props: ['question', 'index'],
    components: {
      BaseQuestion,
      AnswerCard
    },

    data () {
      return {
        questionCard: this.question || {}
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

    methods: {
    dropActiveAnswers () {
      this.$set(this, 'questionCard', {
        text: this.question.text,
        answers: this.question.answers.map((a) => {
          return {
            ...a,
            selected: false
          }
        })
      })
    },
    handleAnswerClick (answer) {
        this.dropActiveAnswers()
        this.questionCard.answers.find((a) => a.text === answer.text).selected = true
        this.$emit('selectAnswer', {isCorrect: true, index: this.index})
      }
    }
  }
</script>

<style lang="scss" scoped>
.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    overflow: hidden;
    margin-bottom: 15px;
    min-width: 250px;
    cursor: pointer;
    border: 10px solid rgba(0, 0, 0, 0);
  }
}
</style>
