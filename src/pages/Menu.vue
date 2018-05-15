<template>
  <NavigationLayout :close="false" :menu="false" :closemenu="true">
    <div class="courses_wrapper">
      <div @click="$router.push('/courses')" class="menu">
        <div class="course_top">
          <img class="icon" src="@/assets/courses.svg" alt="">
          <div class="text">Courses</div>
        </div>
      </div>
      <div @click="$router.push('/menu')" class="menu">
        <div class="course_top">
          <img class="icon" src="@/assets/brush-timer.svg" alt="">
          <div class="text">Brush Timer</div>
        </div>
      </div>
      <div @click="$router.push('/menu')" class="menu">
        <div class="course_top">
          <img class="icon" src="@/assets/articles.svg" alt="">
          <div class="text">Articles</div>
        </div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img class="icon" src="@/assets/account.svg" alt="">
          <div class="text">Account</div>
        </div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img class="icon" src="@/assets/about.svg" alt="">
          <div class="text">About</div>
        </div>
      </div>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import Switcher from '@/components/CoursesSwitcher'

  export default {
    data: () => ({
      menuNames: [
        {name: 'All', active: true},
        {name: 'Ongoing'},
        {name: 'Completed'}
      ]
    }),
    methods: {
      navigateToCourse() {
        this.$router.push('/details')
      }
    },
    components: {
      NavigationLayout,
      Switcher
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


.courses_wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

}

.menu {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;

  width: 100%;
  margin-bottom: 10px;
  background-color: rgba(46, 74, 110, .5) !important;
  border-radius: 10px;
  font-size: 18px;
  box-shadow: none;
  padding: 5px;
  color: #fff;

  .icon {
    width: 100%;
  }

  .text {
    text-align: center;
  }
}


.course {
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

  .icon {
    width: 100%
  }

  .text {
    text-align: center;
  }
}

.card__text {
  font-size: 18px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  font-weight: 700;
}
</style>
