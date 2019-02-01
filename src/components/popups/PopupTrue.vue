<template>
  <div class="popup">
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
    <div class="popup" v-else-if="customPopup">
      <div class="container">
        <div class="title">
          <div  v-if="customPopup.messageType==='positive'" class="img-wrapper img-wrapper__true">
            <div class="img-char" :style="{background: `url(${$store.state.character}) no-repeat center / contain`}">
            </div>
          </div>
          <div v-else class="img-wrapper img-wrapper__false">
            <div class="img__false">
            </div>
          </div>
          <div class="title-text" v-html="customPopup.message">
          </div>
          <div class="points-text">
            +{{points}} <span>{{ getI18n.points }}</span>
          </div>
        </div>
        <div class="buttons-wrapper">
          <component-button :popup="true" @click="toNextSlide">
            {{ customPopup.buttonText }}
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
          +{{points}} <span>{{ getI18n.points }}</span>
        </div>
      </div>
      <component-button :popup="true" @click="toNextSlide">
        {{ getI18n.playNext }}
      </component-button>
    </div>
  </div>
</template>

<script>
  import config from '@/data/config'
  import ComponentButton from '@/components/Button'

  export default {
    name: 'PopupTrue',
    props: {
      type: String,
      toNextSlide: Function,
      customPopup: Object,
      points: Number,
      avatarImage: String
    },
    components: {
      ComponentButton
    },

    computed: {
      getI18n() {
        return config().restText.popups
      }
    }
  }
</script>

<style scoped>
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

.img-wrapper__true {
  background: #87DBA2;
}
</style>
