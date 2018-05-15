<template>
  <BaseCard @click="$emit('click')" :selected="selected">
    <img :src="image" alt="">
    <div class="info">
      <div class="text">{{answer.text}}</div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from './BaseCard'

export default {
  name: 'ReviewCard',

  props: ['answer', 'selected'],
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
img {
  width: 100%;
}
.text {
  /* Exercise: */
  font-family: 'Zilla Slab';
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;

  padding: 16px 0px;
}
.trio {
  .text {
    padding: 0 16px 16px 16px;
  }
}
.no-text {
  .text {
    display: none;
  }
}
</style>
