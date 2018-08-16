import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'topics',
  storage: localStorage
})


export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    gender: null,
    character: '/static/img/character-girl-4.0b3adca.png',
    points: 0,
    topic: 0,
    achievements: [
      {
        id: 1,
        name: 'Cavity Monster Hero',
        goal: 'Completing Cavity Prevention',
        image: 'achieve_img_1.svg',
        badge_image: 'achieve_img_1_badge.svg',
        completed: false
      },
      {
        id: 2,
        name: 'I Know My Teeth',
        goal: 'Completing Baby Teeth',
        image: 'achieve_img_2.svg',
        badge_image: 'achieve_img_2_badge.svg',
        completed: false
      },
      {
        id: 3,
        name: 'Brushing Selfie',
        goal: 'Take a selfie',
        image: 'achieve_img_3.svg',
        badge_image: 'achieve_img_3_badge.svg',
        completed: false
      },
      {
        id: 4,
        name: 'The Achiever',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg',
        badge_image: 'achieve_img_4_badge.svg',
        completed: false
      },
      {
        id: 5,
        name: 'Cavity Math',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg',
        badge_image: 'achieve_img_1_badge.svg',
        completed: false
      },
      {
        id: 6,
        name: 'Sugar',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg',
        badge_image: 'achieve_img_2_badge.svg',
        completed: false
      },
      {
        id: 7,
        name: 'Memory',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg',
        badge_image: 'achieve_img_3_badge.svg',
        completed: false
      },
      {
        id: 8,
        name: 'Matching',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg',
        badge_image: 'achieve_img_4_badge.svg',
        completed: false
      }
    ],

    courses: [
      {
        name: 'Cavity Prevention',
        image: require('@/assets/cavity-prevention.svg'),
        id: 1,
        url_prefix: 'cavity-prevention',
        progress: 0
      },
      {
        name: 'Baby Teeth',
        image: require('@/assets/baby-teeth.svg'),
        id: 2,
        url_prefix: 'baby-teeth',
        progress: 0
      },
      {
        name: 'Proper Brushing',
        image: require('@/assets/proper-brushing.svg'),
        id: 3,
        url_prefix: 'proper-brushing',
        progress: 0
      },
      {
        name: 'Prenatal Oral Care',
        image: require('@/assets/prenatal.svg'),
        id: 4,
        url_prefix: 'prenatal-oral-care',
        progress: 0
      },
      {
        name: 'Cavity Math',
        image: require('@/assets/cavity-math.svg'),
        id: 5,
        url_prefix: 'cavity-math',
        progress: 0
      },
      {
        name: 'Sugar',
        image: require('@/assets/sugar.svg'),
        id: 6,
        url_prefix: 'sugar',
        progress: 0
      },
      {
        name: 'Memory',
        image: require('@/assets/memory.svg'),
        id: 7,
        url_prefix: 'memory',
        progress: 0
      },
      {
        name: 'Matching',
        image: require('@/assets/matching.svg'),
        id: 8,
        url_prefix: 'matching',
        progress: 0
      }
    ]
  },

  mutations: {
    setCharacter(state, char) {
      state.character = char
    },

    setGender(state, gender) {
      state.gender = gender
    },

    setTopic(state, topic) {
      state.topic = topic
    },

    addPoints(state, point) {
      state.points += point
    },

    updateCourseProgress(state, payload) {
      const { id, currentProgress } = payload
      state.courses.find(item => item.id === +id).progress = currentProgress
    },

    completeArchievement(state, id) {
      state.achievements.find(item => item.id === +id).completed = true
    }
  },

  getters: {
    getCourses: (state) => state.courses,
    getAchievements: (state) => state.achievements
  }
})
