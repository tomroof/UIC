<template>
  <div  :class="languageClasses" @click="changeLanguige">
    <div class="language-text">
      English
    </div>
      <div class="toggle">
        <div class="circle">
        </div>
      </div>
    <div class="language-text">
      Española
    </div>
  </div>
</template>

<script>
  import { i18n } from '@/lang'

  export default {
    computed: {
      languageClasses() {
        return [
          'language',
          i18n.locale === 'en' ? 'en' : 'es'
        ]
      }
    },

    methods: {
      changeLanguige () {
        i18n.locale = i18n.locale === 'en' ? 'es' : 'en'
        localStorage.setItem('lang', i18n.locale)
        this.$store.commit('setLang', i18n.locale)
      }
    }
  }
</script>

<style scoped>
.language {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  margin: 30px auto 0;
  width: 100%;

  cursor: pointer;
}

.language-text {
  color: #ffffff;
  font-size: 26px;
}

.toggle {
  position: relative;

  width: 32px;
  height: 10px;
  margin-left: 14px;
  margin-right: 14px;
  background: #447565;

  border-radius: 4px;

  cursor: pointer;
}

.circle {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  width: 16px;
  height: 16px;

  background: #ffffff;
  border-radius: 50%;

  transition: left 0.1s linear;
}

.es .circle {
  left: 16px;
}

</style>
