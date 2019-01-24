import { i18n } from '@/lang'

export default () => {
  return [
    {
      rate: 5,
      text: i18n.t("message.Trulyamazingcourse"),
      author: {
        image: 'user_review.svg',
        name: i18n.t("message.HannaMarin"),
        desc: i18n.t("message.Student")
      }
    },
    {
      rate: 4,
      text: i18n.t("message.Trulyamazingcourse"),
      author: {
        image: 'user_review_1.svg',
        name: i18n.t("message.JakeWinston"),
        desc: i18n.t("message.Student")
      }
    }
  ]
}
