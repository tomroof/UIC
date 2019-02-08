import { i18n } from '@/lang'

export default () => {
 return {
  onboarding: {
    description:  i18n.t("message.AFunNewWayToLearn"),
    cookie: i18n.t("message.ThisWebsiteUsesCookiesTo"),
    getStarted: i18n.t("message.GetStarted"),
  },

  selectCharacter: {
    title: i18n.t("message.SelectCoach"),
  },

  selectAge: {
    title: i18n.t("message.AgeGroup"),
    yangerText: i18n.t("message.Iam8or"),
    olderText: i18n.t("message.Iam9or")
  },

  congrats: {
    title: i18n.t("message.Congratulations"),
    unlocked: i18n.t("message.YouunlockedBadge"),
    points: i18n.t("message.points"),
    profileCompleted: i18n.t("message.ProfileCompleted"),
    cavityMonsterHero: i18n.t("message.cavityMonsterHero")
  },

  menu: {
    topics: i18n.t("message.Topics"),
    brushTimer: i18n.t("message.BrushTimer"),
    profile: i18n.t("message.Profile"),
    about: i18n.t("message.About")
  },

  popups: {
    happyMouth: i18n.t("message.HappyMouth"),
    playNext: i18n.t("message.PlayNext"),
    yeah: i18n.t("message.YeahYourefightingmonsters"),
    points: i18n.t("message.points"),
    cavityMonsters: i18n.t("message.CavityMonsters"),
    uhoh: i18n.t("message.UhThecavitymonstersArecoming"),
    tryAgain: i18n.t("message.Tryagain"),
    leave: i18n.t("message.Areyouureyouwantleave"),
    yes: i18n.t("message.yes"),
    no: i18n.t("message.no"),
    ErrorMessage: i18n.t("message.ErrorMessage"),
    back: i18n.t("message.back")
  },

  profile: [
    {
      name: i18n.t("message.General"),
      items: [
        {
          name: i18n.t("message.Achievements"),
          icon: 'achievements-icon.svg',
          link: '/achievements'
        },
        {
          name: i18n.t("message.MyCourses"),
          icon: 'fav-courses-icon.svg',
          link: '/courses'
        },
        {
          name: i18n.t("message.MyDentalOffice"),
          icon: 'my-friends-icon.svg',
          link: '/team',
          count: '50',
        }
      ]
    },
    {
      name: i18n.t("message.Settings"),
      items: [
        {
          name: i18n.t("message.EditLoginDetails"),
          icon: 'edit-login-details-icon.svg',
          link: '/select-character'
        },
        // {
        //   name: i18n.t("message.UpdateInterests"),
        //   icon: 'update-interests-icon.svg',
        //   link: '/code'
        // },
        // {
        //   name: i18n.t("message.BlockedUsers"),
        //   icon: 'block-users-icon.svg',
        //   link: '/code'
        // }
      ]
    }
  ],

  team: {
    university: i18n.t("message.UniversitySchoolofDentistry"),
    contact: i18n.t("message.CONTACT"),
    address: i18n.t("message.ChicagoIL60612"),
    website: i18n.t("message.Website")
  },

  code: {
    title: i18n.t("message.EnterCode"),
    description: i18n.t("message.Pleaseenterthecode"),
    placeholder: i18n.t("message.code"),
    enter: i18n.t("message.Enter")
  },

  login: {
    password: i18n.t("message.password"),
    email: i18n.t("message.email"),
    forgot: i18n.t("message.Forgot"),
    enter: i18n.t("message.Enter")
  },

  goodJob: {
    goodJob: i18n.t("message.GoodJob"),
    complete: i18n.t("message.Youcompletedamodule"),
    points: i18n.t("message.points")
  },

  topics: i18n.t("message.Topics"),
  continue: i18n.t("message.Continue"),
  MyDentalOffice: i18n.t("message.MyDentalOffice"),
  learnHowToStop: i18n.t("message.Learnhowtostop"),
  SwipeUp: i18n.t("message.Swipeuptoseecoursecontents"),
  nextUp: i18n.t("message.NextUp"),
  workingOnIt: i18n.t("message.Wereworkingonit"),
  aсhievements: i18n.t("message.Aсhievements"),
  view: i18n.t("message.View"),
  watchAgain: i18n.t('message.watchAgain'),
  watchMe: i18n.t('message.watchMe')
}
}
