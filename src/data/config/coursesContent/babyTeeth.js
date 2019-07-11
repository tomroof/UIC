import { i18n } from '@/lang'

export default () => {
 return {
  name: i18n.t("message.BabyTeeth"),
  questions: [
    {
      text: i18n.t("message.Whatinsideyourmouth"),
      id: '1',
      type: 'video',
      url_prefix: 'what-is-inside-your-mouth',
      boy_video_link: i18n.t("message.video1"),
      boy_video_poster: 'module1-cover.jpg',
      girl_video_link: i18n.t("message.video2"),
      girl_video_poster: 'module1-cover.jpg'
    },
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
      text: i18n.t("message.CavityMath"),
      desc: i18n.t("message.Letslearnsomecavitymath"),
      id: '27',
      type: 'calc',
      url_prefix: 'cavity-math',
      isCorrect: true,
      customPopup: {
        message: i18n.t("message.YeahYourefightingmonsters"),
        buttonText: i18n.t("message.NextUp"),
        handlerType: 'nextSlide',
        messageType: 'positive'
      },
      answers: [
        {
          text: i18n.t("message.Brushingtwiceaday"),
          value: 'clock',
          image: 'brush-twice.svg'
        },
        {
          text: i18n.t("message.Healthysnacks"),
          value: 'tooth',
          image: 'broccoli.svg'
        }
      ]
    },
    {
      text: i18n.t("message.HappyMouth"),
      desc: i18n.t("message.Dragthefoodsto"),
      id: '31',
      type: 'mouth',
      url_prefix: 'happy-mouth',
      variants: [
        {
          value: 'soda',
          image: 'soda.svg',
          isCorrect: false
        },
        {
          value: 'apple',
          image: 'apple.svg',
          isCorrect: true
        },
      ]
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
      text: 'THIRTY-THREE THIRSTY THIEVES!',
      desc: '',
      id: 4,
      type: 'go',
      url_prefix: 'where-do-cavities-come-from',
      answer: ['THIRTY', 'THREE', 'THIRSTY', 'THIEVES']
    },
    {
      text: 'Ready to time your brushing?',
      desc: '',
      id: 5,
      type: 'brush',
      image: 'brush-twice.svg',
      url_prefix: 'where-do-cavities-come-from',
      time: 2
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
