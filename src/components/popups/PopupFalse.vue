<template>
  <div class="popup">
    <div v-if="type==='mouth'">
      <div class="mouth-container-false">
        <div class="title">
          <div class="img-mouth__false">
            <img class="avatar-image" :src='avatarImage'>
          </div>
          <div class="title-text-mouth">
            {{ getI18n.cavityMonsters }}
          </div>
          <component-button :popup="true" @click="toThisSlide">
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
</template>

<script>
  import config from '@/data/config'
  import ComponentButton from '@/components/Button'

  export default {
    name: 'PopupTrue',
    props: {
      type: String,
      toThisSlide: Function,
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

.img-mouth__false {
  overflow: hidden;
  width: 270px;
  height: 215px;
  margin: 0 auto;

  background: url('../../assets/donut-answer.svg') no-repeat bottom/contain;
}
</style>
