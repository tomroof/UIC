<template>
  <div class="question">
    <h2>{{questionCard.text}}</h2>
    <p>{{questionCard.desc}}</p>
    <div class="answers">
      <AnswerCard
        v-for="(answer, index) in questionCard.answers"
        :answer="answer"
        :key="index"
        :selected="answer.selected"
        @click="handleAnswerClick(answer)"/>
    </div>
  </div>
</template>

<script>
import AnswerCard from '@/components/cards/AnswerCard'

  export default {
    props: ['question'],
    components: { AnswerCard },

    data () {
      return {
        questionCard: this.question || {}
      }
    },

  watch: {
    question:{
      handler: function (newVal) {
        this.questionCard = newVal
      },
      immediate: true
    }
  },

    methods: {
    dropActiveAnswers () {
      this.$set(this, 'questionCard', {
        text: this.question.text,
        desc: this.question.desc,
        answers: this.question.answers.map((a) => {
          return {
            image: a.image,
            text: a.text,
            desc: a.desc,
            selected: false
          }
        })
      })
    },
      handleAnswerClick (answer) {
        this.dropActiveAnswers()
        this.questionCard.answers.find((a) => a.text === answer.text).selected = true
        this.$emit('selectAnswer')
      }
    }
  }
</script>

<style lang="scss" scoped>
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
.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    overflow: hidden;
    margin-bottom: 15px;
    min-width: 145px;
    cursor: pointer;
  }
}
.single {
  .card {
    overflow: hidden;
    margin-bottom: 15px;
    width: 100%;
    cursor: pointer;
    min-width: auto;
  }
}
.trio {
  .card {
    overflow: hidden;
    margin-bottom: 15px;
    width: 100px;
    cursor: pointer;
    min-width: auto;
  }
}
.quatro {
  .card {
    overflow: hidden;
    margin-bottom: 15px;
    width: 58px;
    cursor: pointer;
    min-width: auto;
  }
}
p {
  font-family: 'Lato';
  font-weight: 300;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 24px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -40px;
  margin-bottom: 20px;
}
</style>
