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
      return this.$t("message.restText")
    }
  },

  mounted() {
    switch (parseInt(this.id)) {
      case 1:
        this.rewardTitle = this.$t("message.restText.congrats.profileCompleted")
        this.rewardPoint = 100
        break;

      case 2:
        this.rewardTitle = this.$t("message.restText.congrats.cavityMonsterHero")
        this.rewardPoint = 100
        break;
    }
    this.$store.commit('addPoints', this.rewardPoint)
    if (!this.isMobile) {
      AudioManager.playAudio('unlocked_badge', this.$store.state.gender, this.finishedCompleteAudio)
    }
  },

  methods: {
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
    }
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
  // background-image: url('../assets/confetti.png');

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
    line-height: 20px;
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
