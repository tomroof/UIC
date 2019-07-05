<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answer" v-for="(option, index) in question.options" :index="index" :key="option.value">
        <AnswerSelectCard />
      </div>
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
    }
  },

  mounted() {
    console.log('aaaaaa', this.question)
  }
}
</script>

<style lang="scss" scoped>

</style>
