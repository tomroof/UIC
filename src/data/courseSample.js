export default {
  name: 'Cavity Prevention',
  questions: [
    {
      text: 'What’s inside your mouth?',
      id: '1',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'How to stop the cavity monsters.',
      id: '2',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Brushing away the cavity monsters!',
      id: '3',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Cavity Math instructions.',
      id: '4',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Stop the cavity monster.',
      desc: 'How do we stop the cavity monsters?',
      id: '5',
      type: 'icons',
      answers: [
        {
          text: 'Never brush my teeth',
          image: 'not-brushing.svg',
          isCorrect: false
        },
        {
          text: 'Brush twice a day',
          image: 'brush-twice.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: 'Stop the cavity monster.',
      desc: 'How do we stop the cavity monsters?',
      id: '6',
      type: 'icons',
      answers: [
        {
          text: 'Wait until tomorrow',
          image: 'wait.svg',
          isCorrect: false
        },
        {
          text: 'Brush after a snack',
          image: 'brushing-after-meal.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: 'Stop the cavity monster.',
      desc: 'How do we stop the cavity monsters?',
      id: '7',
      type: 'icons',
      answers: [
        {
          text: 'Brush for 2 minutes',
          image: 'clock.svg',
          isCorrect: true
        },
        {
          text: 'Brush for 1 minute',
          image: 'clock.svg',
          isCorrect: false
        },
      ]
    },
    {
      text: 'Stop the cavity monster.',
      desc: 'How do we stop the cavity monsters?',
      id: '8',
      type: 'icons',
      answers: [
        {
          text: 'Brush once a day',
          image: 'brush.svg',
          isCorrect: false
        },
        {
          text: 'Brush twice a day',
          image: 'brush-twice.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: 'What snacks do my teeth love?',
      id: '9',
      type: 'video',
      link: 'https://www.youtube.com/embed/zGoBFU1q4g0'
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '10',
      type: 'cards',
      answers: [
        {
          text: 'Apple',
          image: 'apple.svg',

          answerData: {
            text: 'Good for me!',
            image: 'apple.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '11',
      type: 'cards',
      answers: [
        {
          text: 'Carrots',
          image: 'carrot.svg',

          answerData: {
            text: 'Good for me!',
            image: 'carrot.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '12',
      type: 'cards',
      answers: [
        {
          text: 'Candy',
          image: 'chocolate.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'chocolate.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '13',
      type: 'cards',
      answers: [
        {
          text: 'Peanuts',
          image: 'peanut.svg',

          answerData: {
            text: 'Good for me!',
            image: 'peanut.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '14',
      type: 'cards',
      answers: [
        {
          text: 'Chips',
          image: 'chips.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'chips.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '15',
      type: 'cards',
      answers: [
        {
          text: 'Ice Cream',
          image: 'ice-cream.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'ice-cream.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '16',
      type: 'cards',
      answers: [
        {
          text: 'Milk',
          image: 'milk.svg',

          answerData: {
            text: 'Good for me!',
            image: 'milk.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '17',
      type: 'cards',
      answers: [
        {
          text: 'Cheese',
          image: 'cheese.svg',

          answerData: {
            text: 'Good for me!',
            image: 'cheese.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '18',
      type: 'cards',
      answers: [
        {
          text: 'Eggs',
          image: 'egg.svg',

          answerData: {
            text: 'Good for me!',
            image: 'egg.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '19',
      type: 'cards',
      answers: [
        {
          text: 'Cookie',
          image: 'cookie.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'cookie.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '20',
      type: 'cards',
      answers: [
        {
          text: 'Water',
          image: 'water.svg',

          answerData: {
            text: 'Good for me!',
            image: 'water.svg',
            isCorrect: true
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '21',
      type: 'cards',
      answers: [
        {
          text: 'Soda',
          image: 'soda.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'soda.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '22',
      type: 'cards',
      answers: [
        {
          text: 'Juice',
          image: 'orange-juice.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'orange-juice.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Good for me or good for cavity monsters?',
      desc: 'Click to find out.',
      id: '23',
      type: 'cards',
      answers: [
        {
          text: 'Sweetened Drinks',
          image: 'soda-bottle.svg',

          answerData: {
            text: 'Cavity Monster!',
            image: 'soda-bottle.svg',
            isCorrect: false
          }
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '24',
      type: 'calc',
      answers: [
        {
          text: 'Brushing twice a day',
          value: 'clock',
          image: 'brush-twice.svg'
        },
        {
          text: 'Healthy snacks',
          value: 'tooth',
          image: 'broccoli.svg'
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '25',
      type: 'calc',
      answers: [
        {
          text: 'Sugary snacks',
          value: 'candy',
          image: 'candy.svg'
        },
        {
          text: 'Not brushing',
          value: 'not-brushing',
          image: 'not-brushing.svg'
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '26',
      type: 'calc',
      answers: [
        {
          text: 'Brushing after each meal',
          value: 'brushing-after-meal',
          image: 'brushing-after-meal.svg'
        },
        {
          text: 'Sugary snacks',
          value: 'candy',
          image: 'candy.svg'
        }
      ]
    },
    {
      text: 'Cavity Math',
      desc: 'Arrange the icons to find the answer.',
      id: '27',
      type: 'calc',
      answers: [
        {
          text: 'Healthy snacks',
          value: 'broccoli',
          image: 'broccoli.svg'
        },
        {
          text: 'Not brushing',
          value: 'not-brushing',
          image: 'not-brushing.svg'
        }
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '28',
      type: 'mouth',
      variants: [
        {
          value: 'soda',
          image: 'soda.svg'
        },
        {
          value: 'apple',
          image: 'apple.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '29',
      type: 'mouth',
      variants: [
        {
          value: 'brush',
          image: 'brush.svg',
          isCorrect: true
        },
        {
          value: 'donut',
          image: 'donut.svg'
        },
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '30',
      type: 'mouth',
      variants: [
        {
          value: 'chocolate',
          image: 'chocolate.svg'
        },
        {
          value: 'water',
          image: 'water.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '31',
      type: 'mouth',
      variants: [
        {
          value: 'floss',
          image: 'dental-floss.svg',
          isCorrect: true
        },
        {
          value: 'cookie',
          image: 'cookie.svg'
        },
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '32',
      type: 'mouth',
      variants: [
        {
          value: 'toothpaste',
          image: 'toothpaste.svg',
          isCorrect: true
        },
        {
          value: 'chips',
          image: 'chips.svg'
        },
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '33',
      type: 'mouth',
      variants: [
        {
          value: 'candy',
          image: 'candy.svg'
        },
        {
          value: 'grapes',
          image: 'grapes.svg',
          isCorrect: true
        },
      ]
    },
    {
      text: 'Happy Mouth',
      desc: 'Drag the icons to the mouth to find the answer.',
      id: '34',
      type: 'mouth',
      variants: [
        {
          value: 'ice-cream',
          image: 'ice-cream.svg'
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
