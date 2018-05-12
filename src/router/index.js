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
      path: '/questions',
      name: 'Questions',
      component: Questions
    }
  ]
})
