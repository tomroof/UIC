<template>
  <BaseCard @click="$emit('click')">
    <div class="card-content review-card" v-if="review && review.author">
      <div class="header">
        <img :src="image" alt="reviewer avatar">
        <div class="info">
          <div class="name">{{review.author.name}}</div>
          <div class="desc">{{review.author.desc}}</div>
        </div>
      </div>

      <div class="content">
        <div class="rate">
          <div v-for="(star, index) in review.rate" :key="index"><img src="@/assets/star-icon.svg" alt="star"></div>
        </div>
        <div class="text">{{review.text}}</div>
      </div>

    </div>
  </BaseCard>
</template>

<script>
import BaseCard from './BaseCard'

export default {
  name: 'ReviewCard',

  props: {
    review: {
      type: [Object, Array],
      default: () => {}
    }
  },
  components: {
    BaseCard
  },

  computed: {
    image () {
      return typeof this.review.author.image === 'undefined' || this.review.author.image.length === 0
              ? require('../../assets/ach_locked.svg')
              : require(`../../assets/${this.review.author.image}`)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin: 0 17px;
  margin-bottom: 17px;

  img {
    padding: 17px;
    padding-left: 0;
  }

  .info {
    padding: 17px 0;
  }

  .name {
    opacity: 0.9;
    font-family: 'Lato';
    font-weight: normal;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0.4px;
    margin-bottom: 6px;
  }

  .desc {
    opacity: 0.7;
    font-family: 'Lato';
    font-weight: normal;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.3px;
  }
}

.rate {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 17px;
}

.content {
  margin: 17px;

  .text {
    opacity: 0.9;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.3px;
    line-height: 24px;
  }
}
</style>
