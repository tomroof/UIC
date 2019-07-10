<template>
  <div>
    <PopupTrue
      v-if="openPopupTrue"
      :type="type"
      :toNextSlide="toNextSlide"
      :customPopup="customPopup"
      :points="points"
      :avatarImage="avatarImage"
    />
    <PopupFalse
      v-if="openPopupFalse"
      :type="type"
      :toThisSlide="toThisSlide"
      :points="points"
      :avatarImage="avatarImage"
    />
    <PopupBack
      v-if="popupBack"
      :exitCourse="exitCourse"
      :closePopup="closePopup"
    />

    <PopupError
      v-if="popupError"
      :exitCourse="exitCourse"
    />
  </div>
</template>

<script>
import ComponentButton from '@/components/Button'
import PopupTrue from '@/components/popups/PopupTrue'
import PopupFalse from '@/components/popups/PopupFalse'
import PopupBack from '@/components/popups/PopupBack'
import PopupError from '@/components/popups/PopupError'

import config from '@/data/config'
import { events } from '@/helpers/events'
import { mapActions } from 'vuex'

  export default {
    props: [
      'type',
      'answers',
      'openPopupTrue',
      'openPopupFalse',
      'popupBack',
      'closePopup',
      'exitCourse',
      'popupError',
      'customPopup'
    ],
    components: {
      ComponentButton,
      PopupTrue,
      PopupFalse,
      PopupBack,
      PopupError
    },

    data () {
      return {
        avatarImage: null,
        points: 20
      }
    },

    watch: {
      answers:{
        handler: function (newVal) {
          const newValLength = newVal.length - 1
          this.avatarImage = require('@/assets/' + newVal[newValLength].image)
        }
      }
    },

    computed: {
      getI18n() {
        return config().restText.popups
      }
    },

    methods: {
      ...mapActions([
        'putPoints'
      ]),

      selectPopupHandler(type) {
        switch (true) {
          case type === 'nextSlide':
            this.toNextSlide()
            break;

          default:
            break;
        }
      },

      toNextSlide() {
        if (this.type === 'icons') {
          this.putPoints(this.points)
        }
        this.$emit('nextQuestion');
      },

      toThisSlide() {
        this.$emit('closePopup');
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
/deep/ .img-char {
  width: 50px;
  height: 50px;
}
/deep/ .popup {
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

/deep/ .mouth-container {
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

/deep/ .avatar-image {
  margin-top: 80px;
  margin-left: 20px;
}

/deep/ .avatar {
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

/deep/ .title-text-mouth {
  margin-top: 25px;
  margin-bottom: 25px;

  font-size: 23px;
  text-align: center;
}

.refresh-icon {
  margin-left: 5px;
  margin-right: 15px;
}

/deep/ .container {
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

/deep/ .img-wrapper {
  width: 50px;
  height: 50px;
  margin: 0 auto;

  border-radius: 50%;
}

/deep/ .img-wrapper__false {
  background: #FF6D7F;
}

.img__true {
  overflow: hidden;
  width: 34px;
  height: 50px;
  margin: 0 auto;

  background: url('../assets/avatar.png') no-repeat bottom/contain;
}

/deep/ .img__false {
  overflow: hidden;
  width: 34px;
  height: 50px;
  margin: 0 auto;

  background: url('../assets/monster.png') no-repeat bottom/contain;
}

/deep/ .title-text {
  margin-top: 30px;
  margin-bottom: 48px;

  font-size: 23px;
  text-align: center;
}

/deep/ .points-text {
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

/deep/ .buttons-wrapper {
  display: flex;
  flex-flow: row nowrap;
}

/deep/ .popup .button {
  max-width: 165px;
  padding: 8px 10px 8px 10px;
  margin: 0 auto 0 auto;

  font-size: 18px;
}

/deep/ .popup-back .button:first-child {
  margin-right: 10px;
}
</style>
