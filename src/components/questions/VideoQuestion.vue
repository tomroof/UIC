<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <div class="player">
          <video-player class="vjs-custom-skin"
           ref="player"
           :options="playerOptions"
           @play="onPlayerPlay($event)"
           @pause="onPlayerPause($event)"
           @ended="onPlayerEnded($event)"
           >
          </video-player>
          <ComponentButton v-if="showPlayButton" class="watch-button" @click="playVideo"><img :src="image">{{buttonTitle}}</ComponentButton>
        </div>
      </div>
    </div>
  </BaseQuestion>
</template>

<script>
import AnswerCard from '@/components/cards/AnswerCard'
import BaseQuestion from '@/components/questions/BaseQuestion'
import ComponentButton from '@/components/Button'
import config from '@/data/config'

export default {
  props: ['question'],
  components: {
    BaseQuestion,
    AnswerCard,
    ComponentButton
  },

  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  computed: {
    image () {
      return this.finishedVideoPlaying === true
              ? require('../../assets/refresh.svg')
              : require('../../assets/play.png')
    },

    getI18n() {
      return config().restText.popups
    },

    buttonTitle () {
      return this.finishedVideoPlaying === true
              ? config().restText.watchAgain
              : config().restText.watchMe
    }
  },

  data () {
    return {
      window: {
        width: 0,
        height: 0
      },
      questionCard: this.question || {},
      showPlayButton: true,
      finishedVideoPlaying: false,
      playerOptions: {
        width: 375,
        sources: [{
          type: "video/mp4",
          src: this.$store.state.gender === 'boy' ? require('../../assets/video/' + this.question.boy_video_link) : require('../../assets/video/' + this.question.girl_video_link)
        }],
        poster: this.$store.state.gender === 'boy' ? require('../../assets/video/' + this.question.boy_video_poster) : require('../../assets/video/' + this.question.girl_video_poster)
      }
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
    playVideo () {
      this.finishedVideoPlaying = false
      this.showPlayButton = false
      this.$refs.player.player.play()
    },

    onPlayerPlay (player) {
      this.finishedVideoPlaying = false
      this.showPlayButton = false
      player.play()

      player.controlBar.show();
      player.bigPlayButton.hide();
    },

    onPlayerPause (player) {
      this.showPlayButton = true
    },

    onPlayerEnded (player) {
      this.finishedVideoPlaying = true
      this.showPlayButton = true

      player.currentTime(0);
      player.controlBar.hide();
      player.bigPlayButton.show();
    },

    handleResize () {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;

      if (this.window.width <= 375) {
        this.playerOptions.width = this.window.width
      }
    },

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
    }
  },

  mounted() {
    this.$emit('isQuestionHandler', false, 'Continue')
  }
}
</script>

<style>
  .vjs-ended .vjs-poster {
    display: inline-block;
  }


  .vjs-custom-skin > .video-js .vjs-big-play-button {
    top: 50%;
    left: 50%;
    margin-left: -1.5em;
    margin-top: -1em;
    visibility: hidden;
  }
</style>

<style lang="scss" scoped>
.watch-button {
  width: 200px !important;
  img {
    margin-right: 10px;
    width: 15px;
  }
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
