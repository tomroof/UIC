import achievements from '@/data/config/achievements'
import courses from '@/data/config/courses'
import courseSample from '@/data/config/courseSample'
import selectATeam from '@/data/config/selectATeam'
import reviews from '@/data/config/reviews'
import restText from '@/data/config/restText'
import about from '@/data/config/about'
import terms from '@/data/config/terms'

export default () => {
  return {
    achievements: achievements(),
    courses: courses(),
    courseSample: courseSample(),
    selectATeam: selectATeam(),
    reviews: reviews(),
    restText: restText(),
    about: about(),
    terms: terms()
  }
}
