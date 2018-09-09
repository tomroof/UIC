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
        name: 'Fighting Cavities',
        image: require('@/assets/cavity-prevention.svg'),
        disabled_image: require('@/assets/cavity-prevention.svg'),
        id: 1,
        url_prefix: 'fighting-cavities',
        active: true,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Brush Selfie',
        image: require('@/assets/memory.svg'),
        disabled_image: require('@/assets/memory_disabled.svg'),
        id: 2,
        url_prefix: 'brush-selfie',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Brush Timer',
        image: require('@/assets/matching.svg'),
        disabled_image: require('@/assets/matching_disabled.svg'),
        id: 3,
        url_prefix: 'brush-timer',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Baby Teeth',
        image: require('@/assets/baby-teeth.svg'),
        disabled_image: require('@/assets/baby-teeth_disabled.svg'),
        id: 4,
        url_prefix: 'baby-teeth',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Brushing and Flossing',
        image: require('@/assets/proper-brushing.svg'),
        disabled_image: require('@/assets/proper-brushing_disabled.svg'),
        id: 5,
        url_prefix: 'brushing-and-flossing',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Before Baby',
        image: require('@/assets/prenatal.svg'),
        disabled_image: require('@/assets/prenatal_disabled.svg'),
        id: 6,
        url_prefix: 'before-baby',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Cavity Math',
        image: require('@/assets/cavity-math.svg'),
        disabled_image: require('@/assets/cavity-math_disabled.svg'),
        id: 7,
        url_prefix: 'cavity-math',
        active: false,
        progress: 0,
        active_page: 0
      },
      {
        name: 'Healthy Foods and Teeth',
        image: require('@/assets/sugar.svg'),
        disabled_image: require('@/assets/sugar_disabled.svg'),
        id: 8,
        url_prefix: 'healthy-foods-and-teeth',
        active: false,
        progress: 0,
        active_page: 0
      }
    ]
  },

  mutations: {
        isMobile () {
      var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile']
      for (var i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true
      return false
    },
      
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
