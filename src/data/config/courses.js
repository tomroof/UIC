import { i18n } from '@/lang'
import BabyTeethCourse from '@/data/config/coursesContent/BabyTeeth'


export default () => {
  return [
    {
      name: i18n.t("message.FightingCavities"),
      image: require('@/assets/cavity-prevention.svg'),
      disabled_image: require('@/assets/cavity-prevention.svg'),
      id: 1,
      url_prefix: 'fighting-cavities',
      active: true,
      progress: 0,
      active_page: 0
    },
    {
      name: i18n.t("message.BrushSelfie"),
      image: require('@/assets/memory.svg'),
      disabled_image: require('@/assets/memory_disabled.svg'),
      id: 2,
      url_prefix: 'brush-selfie',
      active: false,
      progress: 0,
      active_page: 0
    },
    {
      name: i18n.t("message.BrushTimer"),
      image: require('@/assets/matching.svg'),
      disabled_image: require('@/assets/matching_disabled.svg'),
      id: 3,
      url_prefix: 'brush-timer',
      active: false,
      progress: 0,
      active_page: 0
    },
    {
      name: i18n.t("message.BabyTeeth"),
      image: require('@/assets/baby-teeth.svg'),
      disabled_image: require('@/assets/baby-teeth_disabled.svg'),
      id: 4,
      url_prefix: 'baby-teeth',
      active: true,
      progress: 0,
      active_page: 0,
      content: BabyTeethCourse()
    },
    {
      name: i18n.t("message.BrushingandFlossing"),
      image: require('@/assets/proper-brushing.svg'),
      disabled_image: require('@/assets/proper-brushing_disabled.svg'),
      id: 5,
      url_prefix: 'brushing-and-flossing',
      active: false,
      progress: 0,
      active_page: 0
    },
    {
      name: i18n.t("message.BeforeBaby"),
      image: require('@/assets/prenatal.svg'),
      disabled_image: require('@/assets/prenatal_disabled.svg'),
      id: 6,
      url_prefix: 'before-baby',
      active: false,
      progress: 0,
      active_page: 0
    },
    {
      name: i18n.t("message.CavityMath"),
      image: require('@/assets/cavity-math.svg'),
      disabled_image: require('@/assets/cavity-math_disabled.svg'),
      id: 7,
      url_prefix: 'cavity-math',
      active: false,
      progress: 0,
      active_page: 0
    },
    {
      name: i18n.t("message.HealthyFoodsandTeeth"),
      image: require('@/assets/sugar.svg'),
      disabled_image: require('@/assets/sugar_disabled.svg'),
      id: 8,
      url_prefix: 'healthy-foods-and-teeth',
      active: false,
      progress: 0,
      active_page: 0
    }
  ]
}
