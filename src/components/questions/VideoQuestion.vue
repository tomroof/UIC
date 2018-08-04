<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <!-- <object class="video" :data="question.link"></object> -->

        <div class="player">
          <youtube
            :video-id="videoId"
            player-width="100%"
            player-height="100%"
            @ready="onVideoReady"
            @buffering="onVideoStarts"
            @ended="onVideoEnded"
            ref="player"
          >
          </youtube>
          <div v-if="isStartButtonVisible" @click="restartVideo" class="button">
            <div class="icon" :style="{background: `url(${require('@/assets/play.png')}) no-repeat center / contain`}" />
            <div class="text">{{ buttonText }}</div>
          </div>
        </div>
      </div>
    </div>
  </BaseQuestion>
</template>

<script>
import AnswerCard from '@/components/cards/AnswerCard'
import BaseQuestion from '@/components/questions/BaseQuestion'
import { getIdFromURL } from 'vue-youtube-embed'


export default {
  props: ['question'],
  components: {
    BaseQuestion,
    AnswerCard
  },

  data () {
    return {
      questionCard: this.question || {},
      videoId: this.$youtube.getIdFromURL(this.question.link),
      isStartButtonVisible: false,
      buttonText: 'Watch Me'
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
        answers: this.question.answers.map((a) => {
          return {
            image: a.image,
            text: a.text,
            selected: false
          }
        })
      })
    },
    handleAnswerClick (answer) {
      this.dropActiveAnswers()
      this.questionCard.answers.find((a) => a.text === answer.text).selected = true
      this.$emit('selectAnswer')
    },
    onVideoReady (event) {
      this.isStartButtonVisible = true
    },
    onVideoStarts () {
      this.isStartButtonVisible = false
    },
    onVideoEnded() {
      this.buttonText = 'Watch Again'
      this.onVideoReady()
    },
    restartVideo() {
        this.$refs.player.player.loadVideoByUrl({
        mediaContentUrl: this.question.link,
        startSeconds: 0
      })
    }
  },

  mounted() {
    this.$emit('isQuestionHandler', false, 'Continue')
  }
}
</script>

<style lang="scss" scoped>

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

.video {
  position: absolute;
  top: 40%;
  left: -20px;
  width: calc(100% + 40px);
  min-height: 200px;
}

.button {
  cursor: pointer;
  font-family: 'Zilla Slab';
  font-weight: 500;
  font-size: 19px;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0.94px;
  height: 50px !important;

  background-color: #278ab5;
  border-radius: 100px;
  padding: 18px 22px 18px 22px;
  text-align: center;
  width: 200px;
  margin: 30px auto;
  color: #FFFFFF;
  box-shadow: 0px 30px 29px -22px rgba(0, 0, 0, 0.39);
  position: absolute;
  z-index: 10;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  .icon {
    width: 20px;
    height: 20px;
  }
}

.player {
  position: absolute;
  left: -20px;
  width: calc(100% + 40px);
  top: 50%;
  transform: translateY(-30%);
  height: 200px;

  div {
    height: 100%;
  }
}

.text {
  height: initial !important;
  margin-left: 10px;
}
</style>
