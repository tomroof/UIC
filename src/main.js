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


Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

Vue.use(VueGoodWizard);
Vue.use(Vuelidate)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube" })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
