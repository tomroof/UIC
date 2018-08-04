<template>
  <div class="question">
    <div class="question-header">
      <h2 v-if="questionCard.text">{{questionCard.text}}</h2>
      <h4 v-if="questionCard.desc">{{questionCard.desc}}</h4>
    </div>

    <slot name="questionContent"></slot>
  </div>

</template>

<script>
export default {
  name: 'BaseQuestion',

  props: {
    questionCard: Object
  }
}
</script>

<style lang="scss" scoped>
  .question-header {
    margin-bottom: 45px ;
  }

  h2 {
    font-family: 'Zilla Slab';
    font-weight: 300;
    font-size: 33px;
    color: #FFFFFF;
    letter-spacing: 0.7px;
    margin-top: 40px;
    margin-bottom: 15px;
  }

  h4 {
    /* Arrange the icons to: */
    opacity: 0.9;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 24px;
  }
</style>
