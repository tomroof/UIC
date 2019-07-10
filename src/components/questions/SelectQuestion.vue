<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <AnswerSelectCard  v-for="(option, index) in question.options" :option="option" :index="index" :selectCard="selectCard" :key="option.value"/>
      <popup :type="question.type" :openPopupFalse="openPopupFalse" :openPopupTrue="openPopupTrue"/>
    </div>
  </BaseQuestion>
</template>

<script>
import BaseQuestion from '@/components/questions/BaseQuestion'
import AnswerSelectCard from '@/components/cards/AnswerSelectCard'
import Popup from '@/components/Popup'

export default {
  props: ['question', 'index', 'openPopupFalse', 'openPopupTrue', 'selectAnswer', 'isQuestionHandler'],

  components: {
    BaseQuestion,
    AnswerSelectCard,
    Popup
  },

  data () {
    return {
      questionCard: this.question || {},
      selected: [],
      options: this.question.options.map(option => {
        return {...option, selected: false}
      })
    }
  },

  mounted() {
    this.$emit('isQuestionHandler', false, 'Check');
  },

  updated() {
    this.$emit('isQuestionHandler', false, 'Check');
  },

  methods: {
    selectCard(cardIndex, status) {
      this.options[cardIndex].selected = status

      const isCorrect = this.options.filter(option => option.isCorrect)
      .every(option => option.selected === true) &&
        this.options.filter(option => !option.isCorrect)
      .every(option => option.selected === false)

      this.$emit('selectAnswer', {isCorrect: isCorrect, index: this.index})
    }
  }
}
</script>

<style lang="scss" scoped>
  .question-content {
    display: flex;
    flex-flow: row wrap;
  }
</style>
