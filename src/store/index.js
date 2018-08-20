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
    character: null,
    age: null,
    team: null,
    points: 0,
    topic: 0,
    question: 0,
    achievements: [
      {
        id: 1,
        name: 'Profile Completed',
        goal: 'Completing Profile',
        image: 'achieve_img_1.svg',
        badge_image: 'achieve_img_1_badge.svg',
        completed: false
      },
      {
        id: 2,
        name: 'Cavity Monster Hero',
        goal: 'Completing Cavity Prevention',
        image: 'achieve_img_1.svg',
        badge_image: 'achieve_img_1_badge.svg',
        completed: false
      },
      {
        id: 3,
        name: 'I Know My Teeth',
        goal: 'Completing Baby Teeth',
        image: 'achieve_img_2.svg',
        badge_image: 'achieve_img_2_badge.svg',
        completed: false
      },
      {
        id: 4,
        name: 'Brushing Selfie',
        goal: 'Take a selfie',
        image: 'achieve_img_3.svg',
        badge_image: 'achieve_img_3_badge.svg',
        completed: false
      },
      {
        id: 5,
        name: 'The Achiever',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg',
        badge_image: 'achieve_img_4_badge.svg',
        completed: false
      },
      {
        id: 6,
        name: 'Cavity Math',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg',
        badge_image: 'achieve_img_1_badge.svg',
        completed: false
      },
      {
        id: 7,
        name: 'Sugar',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg',
        badge_image: 'achieve_img_2_badge.svg',
        completed: false
      },
      {
        id: 8,
        name: 'Memory',
        goal: 'Logged in everyday for a month',
        image: 'achieve_img_4.svg',
        badge_image: 'achieve_img_3_badge.svg',
        completed: false
      },
      {
        id: 9,
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
        disabled_image: require('@/assets/cavity-prevention.svg'),
        id: 1,
        url_prefix: 'cavity-prevention',
        active: true,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Baby Teeth',
        image: require('@/assets/baby-teeth.svg'),
        disabled_image: require('@/assets/baby-teeth_disabled.svg'),
        id: 2,
        url_prefix: 'baby-teeth',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Proper Brushing',
        image: require('@/assets/proper-brushing.svg'),
        disabled_image: require('@/assets/proper-brushing_disabled.svg'),
        id: 3,
        url_prefix: 'proper-brushing',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Prenatal Oral Care',
        image: require('@/assets/prenatal.svg'),
        disabled_image: require('@/assets/prenatal_disabled.svg'),
        id: 4,
        url_prefix: 'prenatal-oral-care',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Cavity Math',
        image: require('@/assets/cavity-math.svg'),
        disabled_image: require('@/assets/cavity-math_disabled.svg'),
        id: 5,
        url_prefix: 'cavity-math',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Sugar',
        image: require('@/assets/sugar.svg'),
        disabled_image: require('@/assets/sugar_disabled.svg'),
        id: 6,
        url_prefix: 'sugar',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Memory',
        image: require('@/assets/memory.svg'),
        disabled_image: require('@/assets/memory_disabled.svg'),
        id: 7,
        url_prefix: 'memory',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Matching',
        image: require('@/assets/matching.svg'),
        disabled_image: require('@/assets/matching_disabled.svg'),
        id: 8,
        url_prefix: 'matching',
        active: false,
        progress: 0,
        active_page: 0
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

    setAge(state, age) {
      state.age = age
    },

    setTeam(state, team) {
      state.team = team
    },

    setTopic(state, topic) {
      state.topic = topic
    },

    addPoints(state, point) {
      state.points += point
    },

    updateCoursePage(state, payload) {
      const { id, page } = payload
      state.courses.find(item => item.id === +id).active_page = page
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
