<template>
  <NavigationLayout :back="true" :menu="true" :topImage="$store.state.character">
    <div class="container">
      <div class="course_wrapper">
        <img src='@/assets/course_detail.png' class="background">
        <img src="@/assets/heart.png" class="heart">
        <h1>{{ course.name }}</h1>
        <div class="learn-title"> {{getI18n.learnHowToStop}} </div>
        <div class="progress-bar">
          <div class="progress-background-bar"></div>
          <div class="progress-active-bar" :style="{ width: `${currentProgress}%` }"></div>
        </div>
        <!-- <div class="lvl">LVL 4</div>
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
        </div> -->
        <img @click="playCourse" class="download" src="@/assets/download_btn.png" alt="btn">
      </div>
      <v-touch @swipeup="handleSwipeTop">
        <div class="swipe_up">
          <img class="arrow" src="@/assets/swipe_arrow.png" />
          <p>{{ getI18n.SwipeUp }}</p>
        </div>
      </v-touch>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import { mapGetters } from 'vuex'
import AudioManager from '@/helpers/audioManager'
import config from '@/data/config'

export default {
  computed: {
    ...mapGetters(['getCourses']),
    course () {
      for (var i = 0; i < this.getCourses.length; i++) {
        var q = this.getCourses[i];
        if (q.url_prefix === this.$route.params.url_prefix) {
          return q
        }
      }
    },

    getI18n() {
      return config().restText
    },
    currentProgress() {
      return course.progress;
    },
  },

  methods: {
    handleSwipeTop () {
      this.$router.push('/cards')
    },

    playCourse () {
      let questionTitle = config().courseSample.questions[this.course.active_page].url_prefix
      this.$router.push('/course/' + this.$route.params.url_prefix + "/" + questionTitle + "/" + this.course.active_page)
    }
  },
  components: {
    NavigationLayout
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
  .course_wrapper {
    margin-top: 40px;
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

  .learn-title {
    margin-top: 5px;
    text-align: center;
    opacity: 0.5;
    font-size: 14px;
    color: #FFFFFF;
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
    width: 90px;
    height: auto;
    bottom: -47px;
    left: 35%;
  }

  .swipe_up {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 40px;

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
  .progress-bar {
    position: absolute;
    width: calc(100% - 120px);
    height: 10px;
    margin-top: 20px;
    left: 60px;
  }

  .progress-background-bar {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    background-color: #217b71;
    border-radius: 4px;
  }

  .progress-active-bar {
    left: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    background-color: #87daa2;
    border-radius: 4px;
  }
</style>
