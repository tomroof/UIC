<template>
  <NavigationLayout :back="true" :menu="true" :topImage="$store.state.character">
    <h1>{{ getI18n.rest.topics }}</h1>
    <div class="courses_wrapper">
      <div v-for="(course, index) in getCourses" class="course" :key="course.id" @click="navigateToCourse(course)">
        <radial-progress-bar
          :diameter="145"
          :totalSteps="100"
          :completedSteps="course.progress"
          :startColor="'#87DBA2'"
          :stopColor="'#87DBA2'"
          :innerStrokeColor="'#2E5C69'"
        >
          <div class="course_top" :style="{ background: course.active ? `url(${course.image}) no-repeat center / cover` : `url(${course.disabled_image}) no-repeat center / cover` }" />
        </radial-progress-bar>
        <div class="course_bottom">{{ getI18n.courses[index].name }}</div>
      </div>
    </div>
    <popup :popupError="errorRequest" :exitCourse="goToSelectTeam"/>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import Switcher from '@/components/CoursesSwitcher'
import RadialProgressBar from 'vue-radial-progress'
import Popup from '@/components/Popup'
import config from '@/data/config'
import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      menuNames: [
        {name: 'All', active: true},
        {name: 'Ongoing'},
        {name: 'Completed'}
      ],
      errorRequest: false
    }),
    methods: {
      navigateToCourse(course) {
        if (course.active) {
          this.$router.push('/details/' + course.url_prefix)
        }
      },

      goToSelectTeam() {
        this.$router.push({path: '/select-team'})
      }
    },
    computed: {
      ...mapGetters(['getCourses']),

      getI18n() {
        return {
          rest: config().restText,
          courses: config().courses
        }
      }
    },

    mounted() {
      if (!this.$store.state.uuid) {
        this.errorRequest = true
      }
    },

    components: {
      Switcher,
      NavigationLayout,
      RadialProgressBar,
      Popup
    }
  }
</script>

<style lang="scss" scoped>

h1 {
  font-size: 30px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  margin: 1rem 0;
  font-weight: 700;
}

h2 {
  font-size: 18px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  font-weight: 700;
}
h3 {
  font-size: 20px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  font-weight: 700;
  padding: 20px 0;
}

.courses_wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
}

.disable-course-overlay {
  background-color: gray;
  opacity: 0.5;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0px;
  top: 0px;
}

.course {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 50%;
  margin-bottom: 20px;
  border-radius: 10px;
  font-size: 18px;
  box-shadow: none;
  padding: 5px;
  color: #fff;

  &:first-child,
  &:last-child {
    width: 100%;
  }

  .icon {
    width: 40px;
    height: auto;
  }

  .dotts {
    position: absolute;
    top: 15px;
    right: 15px;
    width: auto;
    height: 16px;
  }
  .title {
    text-align: center;
    padding: 5px;
  }

.complete {
  font-family: sans-serif;
  opacity: 0.4;
  font-size: 14px;
  color: #1F314A;
}

  .progress_bar {
    width: 100%;
    height: 4px;
    border-radius: 50px;
    background: #152233;
    overflow: hidden;

    &::before {
      content: '';
      display: block;
      border-radius: 50px;
      width: 100%;
      height: 100%;
      transform: translateX(-50%);
      background: #87DBA2;
    }
  }
}

.game {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;

  width: calc(50% - 10px);
  margin-bottom: 20px;
  background-color: rgba(46, 74, 110, .5) !important;
  border-radius: 10px;
  font-size: 18px;
  box-shadow: none;
  padding: 5px;
  color: #fff;

  img {
    width: 100%;
  }
  .title {
    text-align: center;
  }
}

.card__text {
  font-size: 18px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  font-weight: 700;
}

.course_top {
  border-radius: 50%;
  overflow: hidden;
  width: 116px;
  height: 116px;
  position: relative;
  align-self: center;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.course_bottom {
  text-align: center;
  margin-top: 10px;
  font-family: 'Zilla Slab', serif;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0;
}
</style>
