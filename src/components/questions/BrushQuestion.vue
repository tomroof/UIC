<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="content" v-if="!isStartTimer">
        <img class="image" :src="require(`../../assets/${questionCard.image}`)" alt="brush">
        <button class="button" @click="startTimer">Start Brush Timer</button>
      </div>
      <div class="timer" v-else>
        <span class="minutes">
          {{ minutes }} :
        </span>
        <span class="seconds">
          {{ seconds }}
        </span>
      </div>
    </div>
  </BaseQuestion>
</template>
<script>
  import BaseQuestion from '@/components/questions/BaseQuestion'

export default {
  props: ['question', 'index', 'selectAnswer', 'isQuestionHandler'],

  components: {
    BaseQuestion
  },

  data() {
    return {
      questionCard: this.question || {},
      timer: null,
      isStartTimer: false,
      time: this.question.time * 60,
      minutes: '',
      seconds: ''
    }
  },

  mounted() {
    this.$emit('isQuestionHandler', false, 'Check')
    this.getCountdown()
  },

  methods: {
     startTimer() {
      this.isStartTimer = true
      this.timer = setInterval(() => {
        this.getCountdown()
      }, 1000);
    },

    getCountdown() {
      this.minutes = this.pad( parseInt(this.time / 60) );
      this.seconds = this.pad( parseInt(this.time % 60) );

      if (this.time <= 0) {
        this.$emit('selectAnswer', {isCorrect: true, index: this.index})
        clearInterval(this.timer)
      }
      --this.time
    },

    pad(n) {
      return (n < 10 ? '0' : '') + n;
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  z-index: 20;
  height: 50px;
  width: 100%;
  font-size: 19px;

  border-radius: 30px;
  border: none;
  box-shadow: 0 -1px 22px 0 rgba(52,84,122,0.08);
  text-align: center;
  color: #fff;
  background: #278AB5;
  line-height: 50px;
  cursor: pointer;
}

.image {
  display: block;
  width: 200px;
  margin: 0 auto 40px auto;
}

.timer {
  font-size: 50px;
  color: #ffffff;
  text-align: center;
}
</style>
