import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import config from '@/data/config/index'
import { i18n } from '@/lang'

import {
  postNewUser,
  postNewAnswer,
  putNewBadge,
  putNewAPoints
} from '@/utils/requests'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'topics',
  storage: localStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    gender: null,
    character: null,
    characterNumber: null,
    age: null,
    team: null,
    teamName: null,
    points: 0,
    topic: 0,
    question: 0,
    lang: 'en',
    uuid: null,
    achievements: config().achievements,
    finishedVideos: {},
    courses: config().courses
  },

  mutations: {
    isMobile () {
      var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile']
      for (var i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true
      return false
    },

    setCharacter(state, char) {
      state.character = char.src
      state.characterNumber = char.number
    },

    setGender(state, gender) {
      state.gender = gender
    },

    setAge(state, age) {
      state.age = age
    },

    setTeam(state, team) {
      state.team = team.id
      state.teamName = team.name
    },

    setTopic(state, topic) {
      state.topic = topic
    },

    setLang(state, lang) {
      state.lang = lang
    },

    updateCoursCurrentStep(state, page) {
      state.coursCurrentStep = page
    },

    addPoints(state, point) {
      state.points = point
    },

    updateCoursePage(state, payload) {
      const { id, page } = payload
      state.courses.find(item => item.id === +id).active_page = page
    },

    updateCourseProgress(state, payload) {
      const { id, currentProgress } = payload
      state.courses.find(item => item.id === +id).progress = currentProgress
    },

    completeArchievement(state, payload) {
      const {id, date} = payload
      const achivement = state.achievements.find(item => item.id === +id)
      achivement.completed = true
      achivement.date = date
    },

    setUuid(state, id) {
      state.uuid = id
    },

    markWatched(state,url){
      state.finishedVideos[url] = true;
    }
  },

  actions: {
    postUuid({ commit, state }) {
      const character = state.gender + '_' + state.characterNumber
      return postNewUser(character, state.age, state.gender, state.teamName).then((data) => {
        commit('setUuid', data.uuid)
        return data
      })
    },

    postAnswer({ commit, state }, payload) {
      const isCorrect = payload.isCorrect === null ? true : payload.isCorrect
      return postNewAnswer(state.uuid, payload.courseId, Number(payload.question.id), payload.question.type, isCorrect)
      .then((data) => data)
    },

    putPoints({ commit, state }, payload) {
      return putNewAPoints(state.uuid, payload).then(data => {
        commit('addPoints', data.points)
        return data
      })
    },

    putBadge({ commit, state }, payload) {
      const { id } = payload
      commit('completeArchievement', payload)
      const badgeName = state.achievements.find(item => item.id === +id).name
      return putNewBadge(state.uuid, badgeName)
      .then(data => data)
    },
  },

  getters: {
    getCourses: (state) => state.courses,
    getAchievements: (state) => state.achievements,
    getLang: (state) => state.lang
  }
})
