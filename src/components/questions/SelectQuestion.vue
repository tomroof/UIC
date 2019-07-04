<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div>Aaaaaaaa</div>
    </div>
  </BaseQuestion>
</template>

<script>
import BaseQuestion from '@/components/questions/BaseQuestion'

export default {
  props: ['question', 'index', 'openPopupFalse', 'openPopupTrue', 'isQuestion', 'enabledSelection'],

  components: {
    BaseQuestion
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
