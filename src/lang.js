import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store'
import en from '@/data/translation/en'
import es from '@/data/translation/es'

Vue.use(VueI18n)

const messages = {
  en: {
    message: en
  },
  es: {
   message: es
  }
}

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en', // set locale
  debug: true,
  messages
})
