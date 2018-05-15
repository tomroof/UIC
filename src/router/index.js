import Vue from 'vue'
import Router from 'vue-router'
import Onboarding from '@/pages/Onboarding'
import Courses from '@/pages/Courses'
import Details from '@/pages/Details'
import Cards from '@/pages/Cards'
import Login from '@/pages/Login'
import SelectCharacter from '@/pages/SelectCharacter'
import SelectAge from '@/pages/SelectAge'
import Achievements from '@/pages/Achievements'
import Congrats from '@/pages/Congrats'
import Questions from '@/pages/Questions'
import QuestionsOne from '@/pages/QuestionsOne'
import QuestionsTwo from '@/pages/QuestionsTwo'
import QuestionsThree from '@/pages/QuestionsThree'
import QuestionsFour from '@/pages/QuestionsFour'
import QuestionsFive from '@/pages/QuestionsFive'
import QuestionsSix from '@/pages/QuestionsSix'
import Menu from '@/pages/Menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Onboarding',
      component: Onboarding
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/select-character',
      name: 'SelectCharacter',
      component: SelectCharacter
    },
    {
      path: '/select-age',
      name: 'SelectAge',
      component: SelectAge
    },
    {
      path: '/achievements',
      name: 'Achievements',
      component: Achievements
    },
    {
      path: '/congrats',
      name: 'Congrats',
      component: Congrats
    },
    {
      path: '/questionsone',
      name: 'Questions One',
      component: QuestionsOne
    },
    {
      path: '/questionstwo',
      name: 'Questions Two',
      component: QuestionsTwo
    },
    {
      path: '/questionsthree',
      name: 'Questions Three',
      component: QuestionsThree
    },
    {
      path: '/questionsfour',
      name: 'Questions Four',
      component: QuestionsFour
    },
    {
      path: '/questionsfive',
      name: 'Questions Five',
      component: QuestionsFive
    },
    {
      path: '/questionssix',
      name: 'Questions Six',
      component: QuestionsSix
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
