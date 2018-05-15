<template>
  <NavigationLayout :close="true" :steps="steps" :menu="true">
    <div class="quatro no-text">
      <Question :question="question" @selectAnswer='handelAnswerSelect'/>
      <div class="next-btn" v-if="showNextBtn" @click="$router.push('/questionsfive')">Next</div>
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
        text: 'Cavity Math',
        desc: 'Arrange the icons to find the answer.',
        answers: [
          {
            image: 'clock.svg'
          },
          {
            image: 'tooth.svg'
          },
          {
            image: 'popcorn.svg'
          },
          {
            image: 'bacteria.svg'
          },
          {
            image: 'cavity.svg'
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
</style>
