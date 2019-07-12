import { i18n } from '@/lang'

export default () => {
 return {
  name: i18n.t("message.BabyTeeth"),
  questions: [


    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '13',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Apple"),
          image: 'apple.svg',

          answerData: {
            text: i18n.t("message.Goodforme"),
            image: 'apple.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '14',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Carrots"),
          image: 'carrot.svg',

          answerData: {
            text: i18n.t("message.Goodforme"),
            image: 'carrot.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '15',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Candy"),
          image: 'chocolate.svg',

          answerData: {
            text: i18n.t("message.CavityMonster"),
            image: 'chocolate.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '16',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Peanuts"),
          image: 'peanut.svg',

          answerData: {
            text: i18n.t("message.Goodforme"),
            image: 'peanut.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '17',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Chips"),
          image: 'chips.svg',

          answerData: {
            text: i18n.t("message.CavityMonster"),
            image: 'chips.svg',
            isCorrect: false
          }
        }
      ]
    },

  ]
}
}
