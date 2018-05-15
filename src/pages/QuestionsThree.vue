<template>
  <NavigationLayout :close="true" :steps="steps" :menu="true">
    <div class="trio">
      <Question :question="question" @selectAnswer='handelAnswerSelect'/>
      <div class="next-btn" v-if="showNextBtn" @click="$router.push('/questionsfour')">Next</div>
    </div>
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
        text: 'How do we stop bacteria monsters?',
        answers: [
          {
            text: 'Brush Teeth',
            image: 'tooth-brush.svg'
          },
          {
            text: 'Eat Candy',
            image: 'candy-blank.svg'
          },
          {
            text: 'Floss Daily',
            image: 'floss.svg'
          },
          {
            text: 'Drink Water',
            image: 'water.svg'
          },
          {
            text: 'Visit Dentist',
            image: 'dentist.svg'
          },
          {
            text: 'Bedtime Snacks',
            image: 'bedtime.svg'
          },
          {
            text: 'Sugary Foods',
            image: 'beverage.svg'
          },
          {
            text: 'Get Exercise',
            image: 'exercise.svg'
          },
          {
            text: 'Brush 2 Minutes',
            image: 'clock.svg'
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
</style>
