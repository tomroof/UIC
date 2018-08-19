import Vue from 'vue'
import Router from 'vue-router'
import Onboarding from '@/pages/Onboarding'
import Courses from '@/pages/Courses'
import Details from '@/pages/Details'
import Cards from '@/pages/Cards'
import Login from '@/pages/Login'
import SelectCharacter from '@/pages/SelectCharacter'
import SelectAge from '@/pages/SelectAge'
import SelectTeam from '@/pages/SelectTeam'
import Achievements from '@/pages/Achievements'
import Congrats from '@/pages/Congrats'
import Questions from '@/pages/Questions'
import Account from '@/pages/Account'
import  Course from '@/pages/Course'
import About from '@/pages/About'
import Brush from '@/pages/Brush'
import Team from '@/pages/Team'
import Article from '@/pages/Article'
import Code from '@/pages/Code'
import Terms from '@/pages/Terms'

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
      path: '/details/:url_prefix',
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
      path: '/select-team',
      name: 'SelectTeam',
      component: SelectTeam
    },
    {
      path: '/achievements',
      name: 'Achievements',
      component: Achievements
    },
    {
      path: '/congrats/:id',
      name: 'Congrats',
      component: Congrats
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/brush',
      name: 'Brush',
      component: Brush
    },
    {
      path: '/course/:url_prefix',
      name: 'Course',
      component: Course
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    }
  ]
})
