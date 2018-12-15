<template>
  <div>
    <div class="popup" v-if="openPopupTrue">
      <div v-if="type==='mouth'">
        <div class="mouth-container">
          <div class="title">
            <div class="img-mouth__true">
              <img class="avatar-image" :src='avatarImage'>
              <div class="avatar"
                :style="{ backgroundImage: `url(${$store.state.character})` }"
              >
              </div>
            </div>
            <div class="title-text-mouth">
              {{ getI18n.happyMouth }}
            </div>
            <component-button :popup="true" @click="toNextSlide">
              <img src='@/assets/refresh.svg' class="refresh-icon">{{ getI18n.playNext }}
            </component-button>
          </div>
        </div>
      </div>
      <div class="container" v-else>
        <div class="title">
          <div class="img-wrapper img-wrapper__true">
            <div class="img-char" :style="{background: `url(${$store.state.character}) no-repeat center / contain`}">
            </div>
          </div>
          <div class="title-text" v-html="getI18n.yeah">
          </div>
          <div class="points-text">
            +20 <span>{{ getI18n.points }}</span>
          </div>
        </div>
        <component-button :popup="true" @click="toNextSlide">
          {{ getI18n.playNext }}
        </component-button>
      </div>
    </div>
    <div class="popup" v-if="openPopupFalse">
      <div v-if="type==='mouth'">
        <div class="mouth-container-false">
          <div class="title">
            <div class="img-mouth__false">
              <img class="avatar-image" :src='avatarImage'>
            </div>
            <div class="title-text-mouth">
              {{ getI18n.cavityMonsters }}
            </div>
            <component-button :popup="true" @click="toNextSlide">
              <img src='@/assets/refresh.svg' class="refresh-icon"> {{ getI18n.playNext }}
            </component-button>
          </div>
        </div>
      </div>

      <div class="container" v-else>
        <div class="title">
          <div class="img-wrapper img-wrapper__false">
            <div class="img__false">
            </div>
          </div>
          <div class="title-text" v-html="getI18n.uhoh">
          </div>
        </div>
        <component-button :popup="true" @click="toThisSlide">
          {{ getI18n.tryAgain }}
        </component-button>
      </div>
    </div>
    <div class="popup popup-back" v-if="popupBack">
      <div class="container">
        <div class="title">
          <div class="img-wrapper img-back">
            <div class="img-char" :style="{background: `url(${$store.state.character}) no-repeat center / contain`}">
            </div>
          </div>
          <div class="title-text" v-html="getI18n.leave">
          </div>
        </div>
        <div class="buttons-wrapper">
          <component-button :popup="true" @click="exitCourse">
              {{ getI18n.yes }}
          </component-button>
          <component-button :popup="true" @click="closePopup">
              {{ getI18n.no }}
          </component-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentButton from '@/components/Button'
import { events } from '@/helpers/events'

  export default {
    props: ['type', 'answers', 'openPopupTrue', 'openPopupFalse', 'popupBack', 'closePopup', 'exitCourse'],
    components: {
      ComponentButton
    },

    data () {
      return {
        avatarImage: null
      }
    },

    watch: {
      answers:{
        handler: function (newVal) {
          this.avatarImage = require('@/assets/' + newVal[0].image)
        }
      }
    },

    methods: {
      toNextSlide() {
        events.$emit('nextSlide');
      },

      toThisSlide() {
        events.$emit('dropAnswer')
        events.$emit('thisSlide');
      }
    },

    computed: {
      getI18n() {
        return this.$t("message.restText.popups")
      }
    }
  }
</script>

<style scoped lang="scss">
.img-back {
  background: #87DBA2;
  width: 60px !important;
  height: 60px !important;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
}
.img-char {
  width: 50px;
  height: 50px;
}
.popup {
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  padding: 13px;
  color: #ffffff;
  overflow-y: auto;

  background: rgba(11, 30, 38, 0.5);
}

.mouth-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 295px;
  width: 100%;
  padding: 9px 9px 20px 9px;

  background: #2e7a6e;
  border-radius: 10px;
}

.mouth-container-false {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 295px;
  width: 100%;
  padding: 9px 9px 20px 9px;

  background: #ac4852;
  border-radius: 10px;
}

.avatar-image {
  margin-top: 80px;
  margin-left: 20px;
}

.img-mouth__true {
  overflow: hidden;
  width: 270px;
  height: 215px;
  margin: 0 auto;
  background-color: #3ec9dc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
}

.avatar {
  position: absolute;
  width: 129px;
  height: 180px;
  right: 20px;
  bottom: -40px;
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: none !important;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none;
}

.img-mouth__false {
  overflow: hidden;
  width: 270px;
  height: 215px;
  margin: 0 auto;

  background: url('../assets/donut-answer.svg') no-repeat bottom/contain;
}

.title-text-mouth {
  margin-top: 25px;
  margin-bottom: 25px;

  font-size: 23px;
  text-align: center;
}

.refresh-icon {
  margin-left: 5px;
  margin-right: 15px;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 295px;
  width: 100%;
  padding: 23px;

  background: #25606B;
  border-radius: 10px;
}

.img-wrapper {
  width: 50px;
  height: 50px;
  margin: 0 auto;

  border-radius: 50%;
}

.img-wrapper__true {
  background: #87DBA2;
}

.img-wrapper__false {
  background: #FF6D7F;
}

.img__true {
  overflow: hidden;
  width: 34px;
  height: 50px;
  margin: 0 auto;

  background: url('../assets/avatar.png') no-repeat bottom/contain;
}

.img__false {
  overflow: hidden;
  width: 34px;
  height: 50px;
  margin: 0 auto;

  background: url('../assets/monster.png') no-repeat bottom/contain;
}

.title-text {
  margin-top: 30px;
  margin-bottom: 48px;

  font-size: 23px;
  text-align: center;
}

.points-text {
  margin-top: -20px;
  margin-bottom: 30px;

  font-size: 30px;
  text-align: center;
  span {
    font-size: 20px;
    font-weight: 300;
  }
}
.description {
  margin-bottom: 53px;

  font-family: 'Lato';
  font-weight: 300;
  text-align: center;
  line-height: 20px;
}

.buttons-wrapper {
  display: flex;
  flex-flow: row nowrap;
}

.popup .button {
  max-width: 165px;
  padding: 8px 10px 8px 10px;
  margin: 0 auto 0 auto;

  font-size: 18px;
}

.popup-back .button:first-child {
  margin-right: 10px;
}
</style>
