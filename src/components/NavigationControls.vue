<template>
  <div class="wrapper">
    <div class="navigation" :style="{minHeight: topImage ? '25px' : 'initial'}">
      <img @click="$router.go(-1)" v-if="back && !white" src="@/assets/back.png" alt="">
      <img @click="$router.go(-1)" v-if="back && white" src="@/assets/back-white.png" alt="">
      <img v-if="closeCourseButton" src="@/assets/close-icon.svg" alt="" @click="closeCourse">
      <div
        class="top"
        v-if="topImage"
      >
        <img :src="topImage">
      </div>

      <img v-if="menu && !white" src="@/assets/big_dots.png" alt="" @click="$emit('menuClick')">
      <img class="share-img" v-if="white" src="@/assets/share.png" alt="">
      <img v-if="close" src="@/assets/close-icon.svg" alt="" @click="$emit('closeClick')">
    </div>

    <popup :popupBack="isPopupVisible" :closePopup="closePopup" :exitCourse="exitCourse" />
  </div>
</template>

<script>
import Popup from '@/components/Popup'

export default {
  name: 'NavigationControls',
  components: {
    Popup
  },
  props: {
    'back': Boolean,
    'menu': Boolean,
    'steps': [Array, Object],
    'close': {
      default: false
    },
    'closeCourseButton': Boolean,
    'topImage': String,
    'white': Boolean
  },
  data() {
    return {
      isPopupVisible: false
    }
  },
  methods: {
    closeCourse () {
      this.isPopupVisible = true
    },

    exitCourse () {
      this.isPopupVisible = false
      this.$router.push('/courses/')
    },

    closePopup () {
      this.isPopupVisible = false
    }
  }

}
</script>

<style scoped lang='scss'>

.wrapper {
  z-index: 10;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img.step-img {
    width: 25px;
    height: 6px;
    margin: 0 5px;
  }
}

.navigation {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
  z-index: 1;
  img {
    height: 17px;
    width: auto;
  }

  .share-img {
    width: 17px;
    height: 22px;
  }
}

.top {
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.12 ) 0 0 0 4px;
  width: 40px;
  height: 40px;
  background-position: 50% 5px;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #FFEBAE;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -25%);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}


</style>
