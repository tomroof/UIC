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
  props: ['question', 'index', 'openPopupFalse', 'openPopupTrue', 'openFailedPopup', 'openSuccessPopup', 'selectAnswer'],

  components: {
    BaseQuestion,
    AnswerSelectCard,
    Popup
  },

  data () {
    return {
      questionCard: this.question || {},
      selected: [],
      correctOptions: this.question.options.filter(option => {
        option.selected = false
        return option.isCorrect === true
      }) || [],
      incorrectOptions: this.question.options.filter(option => {
        option.selected = false
        return option.isCorrect === false
      }) || []
    }
  },

  mounted(){
    this.$emit('isQuestionHandler', false, 'Next');
  },

  methods: {
    updateSelectedValue(options, cardIndex) {
      const indexOption = options.findIndex((option) => {
        return option.value === this.question.options[cardIndex].value
      })
      options[indexOption].selected = options[indexOption].selected === false
    },

    selectCard(cardIndex) {
      if (this.question.options[cardIndex].isCorrect) {
        this.updateSelectedValue(this.correctOptions, cardIndex)
      } else {
        this.updateSelectedValue(this.incorrectOptions, cardIndex)
      }

      const isCorrect = this.correctOptions.every(option => option.selected === true) &&
        this.incorrectOptions.every(option => option.selected === false)

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
