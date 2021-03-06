<template>
  <div>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="content" v-if="!isStartTimer">
        <img class="image" :src="require(`../../assets/${questionCard.image}`)" alt="brush">
        <button class="go-button" @click="startTimer">{{getI18n.questions.StartBrushTimer}}</button>
      </div>
      <RadialProgressBar v-else
                     class="radial-timer"
                     :diameter="200"
                     :completed-steps="timePassed"
                     :total-steps="this.questionCard.time"
                     :startColor="'#87DBA2'"
                     :stopColor="'#87DBA2'"
                     :innerStrokeColor="'#2E5C69'">
      <div class="timer" >
        <span class="minutes">
          {{ minutes }} :
        </span>
        <span class="seconds">
          {{ seconds }}
        </span>
      </div>
      </RadialProgressBar>
    </div>
  </BaseQuestion>
  <VueButton class="continue-button" :disabled="!continueEnabled"  @click="continueClicked" >
    {{getI18n.continue}}
  </VueButton>
</div>
</template>
<script>
import BaseQuestion from '@/components/questions/BaseQuestion'
import VueButton from '@/components/Button'
import config from '@/data/config'
import AudioMixin from '@/mixins/audioMixin'
import RadialProgressBar from 'vue-radial-progress'

export default {
  props: ['question'],

  components: {
    BaseQuestion,
    VueButton,
    RadialProgressBar
  },

  data() {
    return {
      continueEnabled:true,
      questionCard: {...this.question},
      timer: null,
      isStartTimer: false,
      time: this.question.time,
      minutes: '',
      seconds: ''
    }
  },

  mounted() {
    this.playAudio('questionLoaded')
    this.getCountdown()
  },

  computed:{
    getI18n() {
      return config().restText
    },

    getI18nAudio() {
      return config().audio
    },

    timePassed(){
      return this.questionCard.time-this.time
    }
  },

  methods: {
    ...AudioMixin,

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
        clearInterval(this.timer);
      }
      --this.time
    },

    pad(n) {
      return (n < 10 ? '0' : '') + n;
    },

    continueClicked(){
      this.continueEnabled=false;
      this.$emit("nextQuestion");
    },


  }
}
</script>

<style lang="scss" scoped>
.continue-button{
 position: fixed;
 bottom: 20px;
 left: 50%;
 transform: translateX(-50%);
 max-width: 370px;
 text-align: center;
}

.radial-timer{
  margin: auto;
}

.go-button {
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
