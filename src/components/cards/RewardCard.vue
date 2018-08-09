<template>
  <div class="main">
    <div class="container">
      <div class="content-box">
        <div class="header">
          <div class="avatar"
            :style="{ backgroundImage: `url(${$store.state.character})` }"
          >
          </div>
        </div>

        <div class="content">
          <h1>Good Job!</h1>
          <h3 class='description-text'>You completed a module.</h3>
          <h3 class='point-text'><span>+40 </span>points</h3>
        </div>

        <ComponentButton class="continue-button" @click="continueButtonClick">Continue </ComponentButton>
      </div>
    </div>
  </div>
</template>

<script>

import ComponentButton from '@/components/Button'

export default {
  name: 'RewardCard',

  props: {
  },

  components: {
    ComponentButton
  },

  methods: {
    continueButtonClick () {
      this.$emit('continue')
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  background-image: linear-gradient(19deg, #5EA58E 10%, #0A6D60 81%);
}

.content-box {
  position: relative;
  height: 100%;
  padding-top: 100px;
}

.header {
  z-index: 2;
  width: 100%;
  text-align: center;

  .avatar {
    overflow: hidden;
    width: 100px;
    height: 100px;
    margin: auto;

    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: rgba(255, 255, 255, 0.12 ) 0 0 0 8px;
    width: 130px;
    height: 130px;
    background-color: #FFEBAE;
  }
}

.content {
  margin: 17px;
  text-align: center;
  height: 100%;

  h1 {
    font-weight: 300;
    margin-top: 30px;
    margin-bottom: 5px;
  }

  h3.description-text {
    margin-top: 0px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6)
  }

  h3.point-text {
    margin-top: 40px;
    font-size: 18px;
    font-weight: 300;
    color: white;

    span {
      font-size: 28px;
    }
  }
}

.continue-button {
  position: fixed;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    font-family: 'Zilla Slab';
    font-weight: 300;
    font-size: 19px;
    height: 50px;
    text-align: center;
    letter-spacing: 0.94px;
    background-color: #278ab5;
    border-radius: 100px;
    margin: 30px auto;
    color: #FFFFFF;
    -webkit-box-shadow: 0px 30px 29px -22px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 30px 29px -22px rgba(0, 0, 0, 0.39);
    width: 300px !important;
    padding: 14px 22px 18px 22px;
}
</style>
