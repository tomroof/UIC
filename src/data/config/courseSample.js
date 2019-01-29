import { i18n } from '@/lang'

export default () => {
 return {
  name: i18n.t("message.CavityPrevention"),
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
      text: i18n.t("message.Whatinsideyourmouth"),
      id: '38',
      type: 'video',
      url_prefix: 'what-is-inside-your-mouth',
      boy_video_link: i18n.t("message.video1"),
      boy_video_poster: 'module1-cover.jpg',
      girl_video_link: i18n.t("message.video2"),
      girl_video_poster: 'module1-cover.jpg'
    },
    {
      text: i18n.t("message.Wheredocavities"),
      desc: '',
      id: '2',
      type: 'icons',
      url_prefix: 'where-do-cavities-come-from',
      answers: [
        {
          text: i18n.t("message.Sugaryfoods"),
          image: 'cookie.svg',
          isCorrect: true
        },
        {
          text: i18n.t("message.Goingtothezoo"),
          image: 'elephant.svg',
          isCorrect: false
        },
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
      text: i18n.t("message.Wheredocavities"),
      desc: '',
      id: '4',
      type: 'icons',
      url_prefix: 'where-do-cavities-come-from',
      answers: [
        {
          text: i18n.t("message.Dancing"),
          image: 'dancing.svg',
          isCorrect: false
        },
        {
          text: i18n.t("message.Sugarydrinks"),
          image: 'soda.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: i18n.t("message.Howtostopthecavitymonsters"),
      id: '5',
      type: 'video',
      url_prefix: 'how-to-stop-the-cavity-monsters',
      boy_video_link: i18n.t("message.video3"),
      boy_video_poster: 'module3-cover.jpg',
      girl_video_link: i18n.t("message.video4"),
      girl_video_poster: 'module3-cover.jpg'
    },
    {
      text: i18n.t("message.Brushingawaythecavitymonsters"),
      id: '6',
      type: 'video',
      url_prefix: 'brushing-away-the-cavity-monsters',
      boy_video_link: i18n.t("message.video5"),
      boy_video_poster: 'module4-cover.jpg',
      girl_video_link: i18n.t("message.video6"),
      girl_video_poster: 'module4-cover.jpg'
    },
    {
      text: i18n.t("message.CavityMathinstructions"),
      id: '7',
      type: 'video',
      url_prefix: 'cavity-math-instructions',
      boy_video_link: i18n.t("message.video7"),
      boy_video_poster: 'module5-cover.jpg',
      girl_video_link: i18n.t("message.video8"),
      girl_video_poster: 'module5-cover.jpg'
    },
    {
      text: i18n.t("message.Howdowestopthecavitymonsters"),
      desc: '',
      id: '8',
      type: 'icons',
      url_prefix: 'how-do-we-stop-the-cavity-monsters',
      answers: [
        {
          text: i18n.t("message.Neverbrushmyteeth"),
          image: 'not-brushing.svg',
          isCorrect: false
        },
        {
          text: i18n.t("message.Brushtwiceaday"),
          image: 'brush-twice.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: i18n.t("message.Howdowestopthecavitymonsters"),
      desc: '',
      id: '9',
      type: 'icons',
      url_prefix: 'how-do-we-stop-the-cavity-monsters',
      answers: [
        {
          text: i18n.t("message.Waituntiltomorrow"),
          image: 'wait.svg',
          isCorrect: false
        },
        {
          text: i18n.t("message.Brushafterasnack"),
          image: 'brushing-after-meal.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: i18n.t("message.Howdowestopthecavitymonsters"),
      desc: '',
      id: '10',
      type: 'icons',
      url_prefix: 'how-do-we-stop-the-cavity-monsters',
      answers: [
        {
          text: i18n.t("message.Brushfor2minutes"),
          image: 'clock.svg',
          isCorrect: true
        },
        {
          text: i18n.t("message.Brushfor1minute"),
          image: 'clock.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: i18n.t("message.Howdowestopthecavitymonsters"),
      desc: '',
      id: '11',
      type: 'icons',
      url_prefix: 'how-do-we-stop-the-cavity-monsters',
      answers: [
        {
          text: i18n.t("message.Brushonceaday"),
          image: 'brush.svg',
          isCorrect: false
        },
        {
          text: i18n.t("message.Brushtwiceaday"),
          image: 'brush-twice.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: i18n.t("message.Whatsnacksdomyteethlove"),
      id: '12',
      type: 'video',
      url_prefix: 'what-snacks-do-my-teeth-love',
      boy_video_link: i18n.t("message.video9"),
      boy_video_poster: 'module6-cover.jpg',
      girl_video_link: i18n.t("message.video10"),
      girl_video_poster: 'module6-cover.jpg'
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
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '18',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.IceCream"),
          image: 'ice-cream.svg',

          answerData: {
            text: i18n.t("message.CavityMonster"),
            image: 'ice-cream.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '19',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Milk"),
          image: 'milk.svg',

          answerData: {
            text: i18n.t("message.Goodforme"),
            image: 'milk.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '20',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Cheese"),
          image: 'cheese.svg',

          answerData: {
            text: i18n.t("message.Goodforme"),
            image: 'cheese.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '21',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Eggs"),
          image: 'egg.svg',

          answerData: {
            text: i18n.t("message.Goodforme"),
            image: 'egg.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '22',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Cookie"),
          image: 'cookie.svg',

          answerData: {
            text: i18n.t("message.CavityMonster"),
            image: 'cookie.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '23',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Water"),
          image: 'water.svg',

          answerData: {
            text: i18n.t("message.Goodforme"),
            image: 'water.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '24',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Soda"),
          image: 'soda.svg',

          answerData: {
            text: i18n.t("message.CavityMonster"),
            image: 'soda.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '25',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.Juice"),
          image: 'orange-juice.svg',

          answerData: {
            text: i18n.t("message.CavityMonster"),
            image: 'orange-juice.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: i18n.t("message.Goodformeorgoodforcavity"),
      desc: i18n.t("message.Clicktofindout"),
      id: '26',
      type: 'cards',
      url_prefix: 'good-for-me',
      answers: [
        {
          text: i18n.t("message.SweetenedDrinks"),
          image: 'soda-bottle.svg',

          answerData: {
            text: i18n.t("message.CavityMonster"),
            image: 'soda-bottle.svg',
            isCorrect: false
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
      text: i18n.t("message.CavityMath"),
      desc: i18n.t("message.Letslearnsomecavitymath"),
      id: '28',
      type: 'calc',
      url_prefix: 'cavity-math',
      isCorrect: true,
      customPopup: {
        message: i18n.t("message.UhThecavitymonstersArecoming"),
        buttonText: i18n.t("message.NextUp"),
        handlerType: 'nextSlide',
        messageType: 'negative'
      },
      answers: [
        {
          text: i18n.t("message.Sugarysnacks"),
          value: 'candy',
          image: 'candy.svg'
        },
        {
          text: i18n.t("message.Notbrushing"),
          value: 'not-brushing',
          image: 'not-brushing.svg'
        }
      ]
    },
    {
      text: i18n.t("message.CavityMath"),
      desc: i18n.t("message.Letslearnsomecavitymath"),
      id: '29',
      type: 'calc',
      customPopup: {
        message: i18n.t("message.becareful"),
        buttonText: i18n.t("message.NextUp"),
        handlerType: 'nextSlide',
        messageType: 'both'
      },
      url_prefix: 'cavity-math',
      isCorrect: true,
      answers: [
        {
          text: i18n.t("message.Brushingaftereachmeal"),
          value: 'brushing-after-meal',
          image: 'brushing-after-meal.svg'
        },
        {
          text: i18n.t("message.Sugarysnacks"),
          value: 'candy',
          image: 'candy.svg'
        }
      ]
    },
    {
      text: i18n.t("message.CavityMath"),
      desc: i18n.t("message.Letslearnsomecavitymath"),
      id: '30',
      type: 'calc',
      customPopup: {
        message: i18n.t("message.becareful"),
        buttonText: i18n.t("message.NextUp"),
        handlerType: 'nextSlide',
        messageType: 'both'
      },
      url_prefix: 'cavity-math',
      isCorrect: true,
      answers: [
        {
          text: i18n.t("message.Healthysnacks"),
          value: 'broccoli',
          image: 'broccoli.svg'
        },
        {
          text: i18n.t("message.Notbrushing"),
          value: 'not-brushing',
          image: 'not-brushing.svg'
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
      text: i18n.t("message.HappyMouth"),
      desc: i18n.t("message.Dragthefoodsto"),
      id: '32',
      type: 'mouth',
      url_prefix: 'happy-mouth',
      variants: [
        {
          value: 'brush',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          value: 'donut',
          image: 'donut.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: i18n.t("message.HappyMouth"),
      desc: i18n.t("message.Dragthefoodsto"),
      id: '33',
      type: 'mouth',
      url_prefix: 'happy-mouth',
      variants: [
        {
          value: 'chocolate',
          image: 'chocolate.svg',
          isCorrect: false
        },
        {
          value: 'water',
          image: 'water.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: i18n.t("message.HappyMouth"),
      desc: i18n.t("message.Dragthefoodsto"),
      id: '34',
      type: 'mouth',
      url_prefix: 'happy-mouth',
      variants: [
        {
          value: 'floss',
          image: 'dental-floss.svg',
          isCorrect: true
        },
        {
          value: 'cookie',
          image: 'cookie.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: i18n.t("message.HappyMouth"),
      desc: i18n.t("message.Dragthefoodsto"),
      id: '35',
      type: 'mouth',
      url_prefix: 'happy-mouth',
      variants: [
        {
          value: 'toothpaste',
          image: 'toothpaste.svg',
          isCorrect: true
        },
        {
          value: 'chips',
          image: 'chips.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: i18n.t("message.HappyMouth"),
      desc: i18n.t("message.Dragthefoodsto"),
      id: '36',
      type: 'mouth',
      url_prefix: 'happy-mouth',
      variants: [
        {
          value: 'candy',
          image: 'candy.svg',
          isCorrect: false
        },
        {
          value: 'grapes',
          image: 'grapes.svg',
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
