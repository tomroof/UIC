<template>
  <div :class="{'answer-wrapper': true, 'answer-result-wrapper': result}">
    <div class="image">
      <img :src="image" alt="">
    </div>
    <div class="text">{{answer.text}}</div>
  </div>
</template>

<script>
import BaseCard from './BaseCard'

export default {
  name: 'ReviewCard',

  props: ['answer', 'selected', 'result'],
  components: {
    BaseCard
  },

  computed: {
    image () {
      return typeof this.answer.image === 'undefined' || this.answer.image.length === 0
              ? require('../../assets/answer-img.svg')
              : require(`../../assets/${this.answer.image}`)
    }
  }
}
</script>

<style scoped lang="scss">
.answer-wrapper {
  border: 10px solid rgba(0,0,0,0);
  background: rgba(39,138,181,0.60);
  background: rgba(39,138,181,0.25);
  background: rgba(46,74,110,0.60);
  box-shadow: 0 2px 3px 0 rgba(31,49,74,0.10);
  border-radius: 10px;
  width: 120px;
  margin: 7.5px 30px !important;
  cursor: pointer;
}

.answer-result-wrapper {
  width: 110px;
  margin: 0 0 20px 0 !important;  
}

.answer-container {
  display: flex;
  flex-flow: row wrap;

  width: 150px;
  height: 150px;
}

.image {
  background-color: #3FC9DD;
  img {
    width: 100%;
    max-width: 60px;
    max-height: 90px;
    margin: 0 auto;
    display: inherit;
    padding: 20px 0;
  }
}
.text {
  font-family: 'Zilla Slab';
  font-size: 13px;
  color: #FFFFFF;
  letter-spacing: 0.64px;
  text-align: center;

  padding: 16px 0px;
}
</style>
