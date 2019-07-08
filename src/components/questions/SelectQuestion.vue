<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <AnswerSelectCard  v-for="(option, index) in question.options" :option="option" :index="index" :selectCard="selectCard" :key="option.value"/>
    </div>
  </BaseQuestion>
</template>

<script>
import BaseQuestion from '@/components/questions/BaseQuestion'
import AnswerSelectCard from '@/components/cards/AnswerSelectCard'

export default {
  props: ['question', 'index', 'openPopupFalse', 'openPopupTrue', 'isQuestion', 'enabledSelection'],

  components: {
    BaseQuestion,
    AnswerSelectCard
  },

  data () {
    return {
      questionCard: this.question || {},
      selected: []
    }
  },

  methods: {
    selectCard(cardIndex) {
      if (this.selected.includes(cardIndex)) {
        this.selected.splice(1, this.selected.indexOf(cardIndex))
        console.log('this.selected', this.selected)
        return
      }

        this.selected.push(cardIndex)
        console.log('aaaaaa', this.selected)
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
