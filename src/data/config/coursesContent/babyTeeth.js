import { i18n } from '@/lang'

export default () => {
 return {
  name: i18n.t("message.BabyTeeth"),
  questions: [
    {
      text: "Which of these things do you need teeth for?",
      id: '1',
      type: 'select',
      url_prefix: 'Which-of-these-things',
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
      text: i18n.t("message.Whatinsideyourmouth"),
      id: '2',
      type: 'video',
      url_prefix: 'what-is-inside-your-mouth',
      boy_video_link: i18n.t("message.video1"),
      boy_video_poster: 'module1-cover.jpg',
      girl_video_link: i18n.t("message.video2"),
      girl_video_poster: 'module1-cover.jpg'
    },
    {
      text: 'THIRTY-THREE THIRSTY THIEVES!',
      desc: '',
      id: '3',
      type: 'go',
      url_prefix: 'where-do-cavities-come-from',
      answer: ['THIRTY', 'THREE', 'THIRSTY', 'THIEVES']
    },
    {
      text: "test",
      id: '4',
      type: 'video',
      url_prefix: 'what-is-inside-your-mouth',
      boy_video_link: i18n.t("message.video1"),
      boy_video_poster: 'module1-cover.jpg',
      girl_video_link: i18n.t("message.video2"),
      girl_video_poster: 'module1-cover.jpg'
    },
    {
      text: "test",
      id: '5',
      type: 'video',
      url_prefix: 'what-is-inside-your-mouth',
      boy_video_link: i18n.t("message.video1"),
      boy_video_poster: 'module1-cover.jpg',
      girl_video_link: i18n.t("message.video2"),
      girl_video_poster: 'module1-cover.jpg'
    },
    {
      text: "test",
      id: '6',
      type: 'video',
      url_prefix: 'what-is-inside-your-mouth',
      boy_video_link: i18n.t("message.video1"),
      boy_video_poster: 'module1-cover.jpg',
      girl_video_link: i18n.t("message.video2"),
      girl_video_poster: 'module1-cover.jpg'
    },
    {
      text: 'Ready to time your brushing?',
      desc: '',
      id: '7',
      type: 'brush',
      image: 'brush-twice.svg',
      url_prefix: 'where-do-cavities-come-from',
      time: 2
    },
    {
      text: i18n.t("message.Wheredocavities"),
      desc: '',
      id: '8',
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
      text: "test",
      id: '9',
      type: 'video',
      url_prefix: 'what-is-inside-your-mouth',
      boy_video_link: i18n.t("message.video1"),
      boy_video_poster: 'module1-cover.jpg',
      girl_video_link: i18n.t("message.video2"),
      girl_video_poster: 'module1-cover.jpg'
    },
    {
      text: "test",
      id: '10',
      type: 'video',
      url_prefix: 'what-is-inside-your-mouth',
      boy_video_link: i18n.t("message.video1"),
      boy_video_poster: 'module1-cover.jpg',
      girl_video_link: i18n.t("message.video2"),
      girl_video_poster: 'module1-cover.jpg'
    }
  ]
}
}
