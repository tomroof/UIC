<template>
  <div class="popup">
    <div class="container">
      <div class="title">
        <div class="title-text">
          {{ getI18n.ErrorMessage }}
        </div>
      </div>
      <div class="buttons-wrapper">
        <component-button :popup="true" @click="exitCourse">
          {{ getI18n.back }}
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
      exitCourse: Function
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
