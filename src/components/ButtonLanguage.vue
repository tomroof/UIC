<template>
  <div  :class="languageClasses">
    <div class="language-text">
      English
    </div>
      <div class="toggle" @click="changeLanguige">
        <div class="circle">
        </div>
      </div>
    <div class="language-text">
      Español
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
}

.language-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  letter-spacing: 0.2px;
}

.toggle {
  position: relative;

  width: 76px;
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
  background: #447565;

  border-radius: 16px;

  cursor: pointer;
}

.circle {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  width: 40px;
  height: 40px;

  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.3);

  transition: left 0.1s linear;
}

.es .circle {
  left: 35px;
}

</style>
