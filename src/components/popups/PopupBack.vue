<template>
  <div class="popup popup-back">
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
</template>

<script>
  import config from '@/data/config'
  import ComponentButton from '@/components/Button'

  export default {
    props: {
      exitCourse: Function,
      closePopup: Function
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

</style>
