<template>
  <li>
    <img :src="image" alt="">
    <div class="body">
      <div class="name">{{achieve.name}}</div>
      <div class="goal">{{achieve.goal}}</div>
    </div>
  </li>
</template>

<script>
import AchievementsListItem from './AchievementsListItem'

export default {
  name: 'AchivementsListItem',
  props: ['achieve'],

  computed: {
    image () {
      return typeof this.achieve.image === 'undefined' || this.achieve.image.length === 0 || this.achieve.completed === false
              ? require('../../assets/achieve_lock_img.png')
              : require(`../../assets/${this.achieve.image}`)
    }
  }
}
</script>

<style scoped lang="scss">
li {
  display: flex;
  margin-bottom: 25px;
}

img {
  margin-right: 25px;
  width: 50px;
  height: auto;
}

.name {
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  margin-bottom: 5px;
}

.goal {
  opacity: 0.6;
  font-family: 'Lato';
  font-weight: 300;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
}
</style>
