<template>
  <div :class="{'congrats-page': true, 'mobile-dialog': isMobile}">
    <div v-if="isMobile" class="content">
      <div class="header">
        <img src="@/assets/congrats-img.svg" alt="">
      </div>

      <div class="section">
        <div class="congratulation-title">{{ getI18n.congrats.title }}</div>
        <div class="sub-title">{{ getI18n.congrats.unlocked }}</div>
        <div class="archievement-title">{{rewardTitle}}</div>
        <div class="points">+{{rewardPoint}} <span>{{ getI18n.congrats.points }}</span></div>
        <ComponentButton type="submit" @click="onContinue" :disabled="disableContinue">
          Continue
        </ComponentButton>
      </div>
    </div>

    <div v-else>
      <div class="header">
        <img src="@/assets/congrats-img.svg" alt="">
        <h1>{{rewardTitle}}</h1>
        <h3>+{{rewardPoint}} <span>{{ getI18n.congrats.points }}</span></h3>
      </div>

      <div class="section">
        <h1>{{ getI18n.congrats.title }}</h1>
        <div class="subheading">
          {{ getI18n.congrats.unlocked }}
        </div>
        <ComponentButton type="submit" @click="moveToCourses" :disabled="disableContinue">
         {{getI18n.continue}}
        </ComponentButton>
      </div>

      <div class="footer">
        <div class="icon"><img src="@/assets/user_icon.svg" alt="share"></div>
        <div class="icon" @click="$router.push('/achievements')"><img src="@/assets/achievments-icon.svg" alt="achievements"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentButton from '@/components/Button'
import AudioManager from '@/helpers/audioManager'
import config from '@/data/config'
import { mapActions } from 'vuex'

export default {
  name: 'CongratsDialog',
  props: ['id', 'isMobile', 'audioFinished'],
  components: {
    ComponentButton
  },

  data () {
    return {
      rewardTitle: '',
      rewardPoint: 0,
      desktopAudioFinished: false,
    }
  },

  computed: {
    disableContinue () {
      if (this.isMobile) {
        return !this.audioFinished
      }
      return !this.desktopAudioFinished
    },

    getI18n() {
      return config().restText
    },

    getI18nAudio() {
      return config().audio
    }
  },

  mounted() {
    const id = parseInt(this.id)

    switch (id) {
      case 1:
        this.rewardTitle = config().restText.congrats.profileCompleted
        this.rewardPoint = 100
        break;

      case 2:
        this.rewardTitle = config().restText.congrats.cavityMonsterHero
        this.rewardPoint = 100
        break;
    }

    if (id === 1) {
      const payload = {
        id: id,
        date: this.getCurrentDate()
      }
      this.$store.commit('completeArchievement', payload)
      this.$store.commit('addPoints', this.rewardPoint)
    }
    if ((id !== 1) && (this.$store.state.achievements[this.id - 1].completed !== true)) {
      this.putPoints(this.rewardPoint)
      this.addAchievement()
    }

    if (!this.isMobile) {
      AudioManager.playAudio(this.getI18nAudio.audio_unlocked_badge, this.$store.state.gender, this.finishedCompleteAudio)
    }
  },

  methods: {
    ...mapActions([
      'putPoints',
      'putBadge'
    ]),

    onContinue () {
      if (!this.disableContinue) {
        this.$emit('continue')
      }
    },

    moveToCourses () {
      if (!this.disableContinue) {
        this.$router.push('/courses')
      }
    },

    finishedCompleteAudio () {
      this.desktopAudioFinished = true
    },

    getCurrentDate() {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!

      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      today = dd + '/' + mm + '/' + yyyy;
      return today
    },

    addAchievement() {
      const id = parseInt(this.id)
      const payload = {
        id: id,
        date: this.getCurrentDate()
      }
      this.putBadge(payload)
    },
  }
}
</script>

<style scoped lang="scss">
.mobile-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content {
  border-radius: 10px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #26606b;
  width: calc(100% - 40px);
  height: calc(100% - 60px);
  margin-top: 55px;
  margin-left: 20px;

  .header {
    padding-top: 30px;
  }

  .congratulation-title {
    font-weight: 300;
    font-size: 24px;
    margin-top: -20px;
    color: white;
  }

  .sub-title {
    opacity: 0.5;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 12px;
    color: #FFFFFF;
    text-align: center;
  }

  .archievement-title {
    font-weight: 600;
    font-size: 28px;
    margin-top: 30px;
    color: white;
  }

  .points {
    font-weight: 300;
    font-size: 20px;
    margin-top: 10px;
    color: white;
  }
}

.header {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  align-content: center;
  align-items: center;

  padding-top: 60px;
  padding-bottom: 40px;
  h1 {
    font-weight: 300;
    font-size: 30px;
    margin: 1rem 0 0.5rem 0;
  }
  h3 {
    font-size: 27px;
    font-weight: 100;
    color: #FFFFFF;
    font-weight: normal;
    span {
      font-size: 16px;
    }
  }
}

.section {
  text-align: center;

  h1 {
    text-align: center;
    /* Congrats!: */
    font-family: 'Zilla Slab';
    font-size: 40px;
    font-weight: normal;
    color: #FFFFFF;
    text-align: center;
    line-height: 40px;
    margin: 1rem 0;
  }

  .subheading {
    opacity: 0.5;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
  }

  .button {
    margin-top: 50px;
    position: relative;
    z-index: 11;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  z-index: 10;
  .icon {
    padding: 0px 20px 0px 20px;
  }
}

</style>
