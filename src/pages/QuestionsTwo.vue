<template>
  <NavigationLayout :close="true" :steps="steps" :menu="true">
    <div class="question"><h2>How do we get cavaties?</h2></div>
    <div class='embed-container'><iframe src='https://www.youtube.com/embed/zGoBFU1q4g0' frameborder='0' allowfullscreen></iframe></div>
    <div class="next-btn" @click="$router.push('/questionsthree')">Next</div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import Question from '@/components/Question'

export default {
  name: 'QuestionsPage',
  components: {
    NavigationLayout,
    Question
  },

  data () {
    return {
      showNextBtn: false
    }
  },

  computed: {
    question () {
      return {
        text: 'What will you do to prevent the cavity monsters?',
        answers: [
          {
            text: 'Brush Teeth',
            image: 'answer-img.svg'
          },
          {
            text: 'Eat Candy',
            image: 'answer-img_1.svg'
          },
          {
            text: 'Exercise',
            image: 'answer-img_2.svg'
          },
          {
            text: 'Watch TV',
            image: 'answer-img_3.svg'
          }
        ]
      }
    },
    steps () {
      // replace with actual data from vuex
      return [0,1,2,3,4,5].map((q, index) => {
        return index === 0 ? {active: true} : {active: false}
      })
    }
  },

  methods: {
    handelAnswerSelect () {
      this.showNextBtn = true
    }
  }
}
</script>

<style scoped lang="scss">
  .next-btn {
    background: #278AB5;
    box-shadow: 0 -1px 22px 0 rgba(52,84,122,0.08);
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 20;
  }
  h2 {
    font-family: 'Zilla Slab';
    font-weight: 300;
    font-size: 33px;
    color: #FFFFFF;
    letter-spacing: 0.7px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 40px;
    margin-bottom: 60px;
  }
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    margin-top: 50px;
  }
  .embed-container iframe, .embed-container object, .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
