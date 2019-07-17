import { i18n } from '@/lang'
import audio from '@/data/config/audio'

let getAudio = audio();

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
      audioHooks:{
        "questionLoaded": getAudio.audio_first_question_for_cards
      },
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
      text: i18n.t("message.Wheredocavities"),
      desc: '',
      id: '3',
      type: 'icons',
      url_prefix: 'where-do-cavities-come-from',
      audioHooks:{
        "questionLoaded": getAudio.audio_first_question_for_icons,
        "questionRight":getAudio.audio_icons_select_correct,
        "questionWrong":getAudio.audio_icons_select_wrong,
      },
      answers: [
        {
          text: i18n.t("message.Readingabook"),
          image: 'book.svg',
          isCorrect: false
        },
        {
          text: i18n.t("message.CavityMonsters"),
          image: 'monster.png',
          isCorrect: true
        },
      ]
    },

  ]
}
}
