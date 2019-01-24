<template>
  <div  :class="languageClasses">
    <div class="language-en" />
      <div class="toggle" @click="changeLanguige">
        <div class="circle">
        </div>
      </div>
     <div class="language-es" />
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
  justify-content: space-between;
  align-items: center;

  margin: 30px auto 0;
  max-width: 158px;
  width: 100%;
}

.language-en {
  width: 50px;
  height: 50px;

  background: url('../assets/icon-en.svg') no-repeat center/contain;
}

.language-es {
  width: 50px;
  height: 50px;

  background: url('../assets/icon-es.svg') no-repeat center/contain;
}

.toggle {
  position: relative;

  width: 32px;
  height: 10px;
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
