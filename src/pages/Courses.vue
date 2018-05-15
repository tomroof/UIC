<template>
  <NavigationLayout :back="true" :menu="true">
    <div>
      <h1>My Courses</h1>
    </div>
    <Switcher :menuNames="menuNames" />
    <div class="courses_wrapper">
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img class="icon" src="@/assets/Courses/1.png" alt="">
          <img class="dotts" src="@/assets/Courses/dotts.png" alt="">
          <div class="px-0">Cavity Prevention</div>
        </div>
        <div class="progress_bar"></div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img class="icon" src="@/assets/Courses/2.png" alt="">
          <img class="dotts" src="@/assets/Courses/dotts.png" alt="">
          <div class="px-0">Baby Teeth</div>
        </div>
        <div class="progress_bar"></div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img class="icon" src="@/assets/Courses/3.png" alt="">
          <img class="dotts" src="@/assets/Courses/dotts.png" alt="">
          <div class="px-0">Proper Brushing</div>
        </div>
        <div class="progress_bar"></div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img class="icon" src="@/assets/Courses/4.png" alt="">
          <img class="dotts" src="@/assets/Courses/dotts.png" alt="">
          <div class="px-0">Prenatal Oral Care</div>
        </div>
        <div class="progress_bar"></div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img class="icon" src="@/assets/Courses/5.png" alt="">
          <img class="dotts" src="@/assets/Courses/dotts.png" alt="">
          <div class="px-0">Sugary Sweets</div>
        </div>
        <div class="complete">Complete</div>
      </div>
      <div @click="navigateToCourse" class="course">
        <div class="course_top">
          <img class="icon" src="@/assets/Courses/6.png" alt="">
          <img class="dotts" src="@/assets/Courses/dotts.png" alt="">
          <div class="px-0">Home Dental Care</div>
        </div>
        <div class="complete">Complete</div>
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

}

.course {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;

  width: calc(50% - 10px);
  min-height: 157px;
  margin-bottom: 20px;
  background-color: rgba(46, 74, 110, .5) !important;
  border-radius: 10px;
  font-size: 18px;
  box-shadow: none;
  padding: 15px;
  color: #fff;

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

.card__text {
  font-size: 18px;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  font-weight: 700;
}
</style>
