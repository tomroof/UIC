import { i18n } from '@/lang'

export default () => {
 return {
  name: i18n.t("message.BabyTeeth"),
  questions: [


    {
      text: 'THIRTY-THREE THIRSTY THIEVES!',
      desc: '',
      id: 4,
      type: 'go',
      url_prefix: 'where-do-cavities-come-from',
      answers: ['THIRTY', 'THREE', 'THIRSTY', 'THIEVES']
    },
    {
      text: 'Ready to time your brushing?',
      desc: '',
      id: 5,
      type: 'brush',
      image: 'brush-twice.svg',
      url_prefix: 'where-do-cavities-come-from',
      time: 15
    },

  ]
}
}
