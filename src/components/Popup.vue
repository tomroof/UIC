<template>
  <div>
    <div class="popup" v-if="openPopupTrue">
      <div v-if="type==='mouth'">
        <div class="mouth-container">
          <div class="title">
            <div class="img-mouth__true">
            </div>
            <div class="title-text">
              Happy Mouth
            </div>
            <component-button :popup="true" @click="toNextSlide">
              Play Again
            </component-button>
          </div>
        </div>
      </div>        
      <div v-else>
        <div class="container">
          <div class="title">
            <div class="img-wrapper img-wrapper__true">
              <div class="img__true">
              </div>
            </div>
            <div class="title-text">
              You are correct!
            </div>
          </div>
          <div class="description">
            Brushing your teeth twice a day is the best way to stop those nasty cavity monsters.
          </div>
          <component-button :popup="true" @click="toNextSlide">
            Continue
          </component-button>
        </div>
      </div>
    </div>
    <div class="popup" v-if="openPopupFalse">
      <div class="container">
        <div class="title">
          <div class="img-wrapper img-wrapper__false">
            <div class="img__false">
            </div>
          </div>
          <div class="title-text">
            Uh-oh! <br />
            The cavity monsters <br />
            are coming!
          </div>
        </div>
        <component-button :popup="true" @click="toThisSlide">
          Try again
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
          <div class="title-text">
            Are you sure you <br />
            want to leave?
          </div>
        </div>
        <div class="buttons-wrapper">
          <component-button :popup="true" @click="exitCourse">
              yes
          </component-button>
          <component-button :popup="true" @click="closePopup">
              no
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
    props: {
      type: String,
      openPopupTrue: Boolean,
      openPopupFalse: Boolean,
      popupBack: Boolean,
      closePopup: Function,
      exitCourse: Function
    },

    components: {
      ComponentButton
    },

    methods: {
      toNextSlide() {
        events.$emit('nextSlide');
      },

      toThisSlide() {
        events.$emit('dropAnswer')
        events.$emit('thisSlide');
      }
    }
  }
</script>

<style scoped>
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

.img-mouth__true {
  overflow: hidden;
  width: 270px;
  height: 215px;
  margin: 0 auto;
  margin-bottom: 20px;
  background: url('../assets/apple-answer.svg') no-repeat bottom/contain;
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
