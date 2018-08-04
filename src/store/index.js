import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    character: '/static/img/character-girl-4.0b3adca.png',
    courses: [
      {
        name: 'Cavity Prevention',
        image: require('@/assets/cavity-prevention.svg'),
        id: 1,
        progress: 0
      },
      {
        name: 'Baby Teeth',
        image: require('@/assets/baby-teeth.svg'),
        id: 2,
        progress: 0
      },
      {
        name: 'Proper Brushing',
        image: require('@/assets/proper-brushing.svg'),
        id: 3,
        progress: 0
      },
      {
        name: 'Prenatal Oral Care',
        image: require('@/assets/prenatal.svg'),
        id: 4,
        progress: 0
      },
      {
        name: 'Cavity Math',
        image: require('@/assets/cavity-math.svg'),
        id: 5,
        progress: 0
      },
      {
        name: 'Sugar',
        image: require('@/assets/sugar.svg'),
        id: 6,
        progress: 0
      },
      {
        name: 'Memory',
        image: require('@/assets/memory.svg'),
        id: 7,
        progress: 0
      },
      {
        name: 'Matching',
        image: require('@/assets/matching.svg'),
        id: 8,
        progress: 0
      }
    ]
  },

  mutations: {
    setCharacter(state, char) {
      state.character = char
    },

    updateCourseProgress(state, payload) {
      const { id, currentProgress } = payload
      state.courses.find(item => item.id === +id).progress = currentProgress
    }
  },

  getters: {
    getCourses: (state) => state.courses
  }
})
