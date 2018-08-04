<template>
  <BaseCard @click="$emit('click')" :selected="selected" class="answer-card">
    <div class="image">
      <img class="card-photo" :src="image" />
    </div>
    <div class="title">{{ answer.text }}</div>
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
.answer-card {
  display: flex;
  flex-flow: row nowrap;

  margin-bottom: 15px;
  overflow: hidden;
  margin: 7.5px 0 !important;
  cursor: pointer;
  width: 100%;

  .image {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100px;
    padding: 12px;
    justify-content: center;
  }

  .card-photo {
    display: block;
    width: 40px;
    height: 40px;
  }
  .title {
    padding-left: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    font-family: 'Zilla Slab';
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: left;

    padding-bottom: 0;
  }
}
</style>
