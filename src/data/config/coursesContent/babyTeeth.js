import { i18n } from '@/lang'

export default () => {
 return {
  name: i18n.t("message.BabyTeeth"),
  questions: [
    {
      text: "test",
      id: '1',
      type: 'video',
      url_prefix: 'what-is-inside-your-mouth',
      boy_video_link: i18n.t("message.video1"),
      boy_video_poster: 'module1-cover.jpg',
      girl_video_link: i18n.t("message.video2"),
      girl_video_poster: 'module1-cover.jpg'
    },
    {
      text: "Which of these things do you need teeth for?",
      id: '2',
      type: 'select',
      url_prefix: 'which-of-these-need-teeth-for',
      options: [
        {
          value: 'ice-cream1',
          image: 'ice-cream.svg',
          isCorrect: false
        },
        {
          value: 'ice-cream2',
          image: 'ice-cream.svg',
          isCorrect: true
        },
        {
          value: 'ice-cream3',
          image: 'ice-cream.svg',
          isCorrect: true
        },
        {
          value: 'ice-cream4',
          image: 'ice-cream.svg',
          isCorrect: false
        },
        {
          value: 'ice-cream5',
          image: 'ice-cream.svg',
          isCorrect: false
        },
        {
          value: 'ice-cream6',
          image: 'ice-cream.svg',
          isCorrect: false
        },
        {
          value: 'ice-cream7',
          image: 'ice-cream.svg',
          isCorrect: true
        },
        {
          value: 'ice-cream8',
          image: 'bacteria.svg',
          isCorrect: false
        }
      ]
    },
    {
      text: i18n.t("message.Wheredocavities"),
      desc: '',
      id: '3',
      type: 'icons',
      url_prefix: 'where-do-cavities-come-from',
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
    {
      text: i18n.t("message.HappyMouth"),
      desc: i18n.t("message.Dragthefoodsto"),
      id: '37',
      type: 'mouth',
      url_prefix: 'happy-mouth',
      variants: [
        {
          value: 'ice-cream',
          image: 'ice-cream.svg',
          isCorrect: false
        },
        {
          value: 'brush-twice',
          image: 'brush-twice.svg',
          isCorrect: true
        },
      ]
    }
  ]
}
}
