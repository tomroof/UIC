<template>
  <NavigationLayout :back="true">
    <div class="container">
      <div class="course_wrapper">
        <img src='@/assets/course_detail.png' class="background">
        <img src="@/assets/heart.png" class="heart">
        <h1>Cavity Prevention</h1>
        <div class="lvl">LVL 1</div>
        <div class="stats_wrapper">
          <div class="stats">
            <img class="icon" src="@/assets/students.png" alt="students">
            <div class="count">5.8k</div>
            <div class="name">Students</div>
          </div>
          <div class="stats">
            <img class="icon" src="@/assets/raiting.png" alt="rating">
            <div class="count">5.0</div>
            <div class="name">Rating</div>
          </div>
          <div class="stats">
            <img class="icon" src="@/assets/lessons.png" alt="lessons">
            <div class="count">11</div>
            <div class="name">Lessons</div>
          </div>
        </div>
        <img @click="$router.push('/cards')" class="download" src="@/assets/download_btn.png" alt="btn">
      </div>
      <v-touch @swipeup="handleSwipeTop">
        <div class="swipe_up">
          <img class="arrow" src="@/assets/swipe_arrow.png" />
          <p>Swipe up to see course contents</p>
        </div>
      </v-touch>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'

export default {
  methods: {
    handleSwipeTop () {
      this.$router.push('/cards')
    }
  },
  components: {
    NavigationLayout
  }
}
</script>

<style scoped lang="scss">
  .course_wrapper {
    margin-top: 20px;
    position: relative;
    background: #25606B;
    border-radius: 10px;
    height: 480px;
    width: 100%;
  }

  .background {
    height: 150px;
    width: 100%;
  }

  .heart {
    position: absolute;
    width: 30px;
    height: auto;
    top: 15px;
    right: 15px;
  }

  h1 {
    max-width: 160px;
    color: #fff;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
  }

  .lvl {
    width: 65px;
    border-radius: 4px;
    background: #87DBA2;
    color: #1F314A;
    font-size: 16px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    padding: 5px 0;
  }

  .stats_wrapper {
    display: flex;
    justify-content: space-between;
  }

  .stats {
    width: 33%;
    text-align: center;
    margin-top: 38px;

    .icon {
      height: 25px;
      width: auto;
    }

    .count {
      font-family: 'Gotham';
      font-weight: bold;
      margin-top: 20px;
      color: #fff;
    }

    .name {
      color: rgba(255, 255, 255, 0.4);
      font-family: sans-serif;
      font-weight: 300;
      margin-top: 10px;

    }
  }

  .download {
    position: absolute;
    width: 70px;
    height: auto;
    bottom: -35px;
    left: 39%;
  }

  .swipe_up {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 60px;

    .arrow {
      width: 13px;
      height: auto;
      margin-bottom: 10px;
    }

    p {
      text-align: center;
      opacity: 0.5;
      font-size: 15px;
      color: #FFFFFF;
    }
  }
</style>
