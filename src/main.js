// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueTouch from 'vue-touch'
import Vuelidate from 'vuelidate'
import VueGoodWizard from 'vue-good-wizard'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueVideoPlayer from 'vue-video-player'
import VueAnalytics from 'vue-analytics'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import VueI18n from 'vue-i18n'

Vue.use(VueVideoPlayer, { global: true, playsinline: true,componentId: "video-player" })

Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-139547318-1'
})
Vue.use(VueGoodWizard);
Vue.use(Vuelidate)
Vue.use(VueI18n)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube" })

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
