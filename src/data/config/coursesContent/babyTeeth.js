import { i18n } from '@/lang'
import audio from '@/data/config/audio'

let getAudio = audio();

export default () => {
 return {
  name: i18n.t("message.BabyTeeth"),
  questions: [
    {
      text: "Which of these things do you need teeth for?",
      id: '1',
      type: 'select',
      url_prefix: 'which-of-these-things',
      options: [
        {
          value: 'Talking',
          image: 'talking.svg',
          isCorrect: true
        },
        {
          value: 'Eating',
          image: 'eating.svg',
          isCorrect: true
        },
        {
          value: 'Kicking a Ball',
          image: 'kick-ball.svg',
          isCorrect: false
        },
        {
          value: 'Smiling',
          image: 'smile.svg',
          isCorrect: true
        },
        {
          value: 'Singing',
          image: 'sing.svg',
          isCorrect: true
        },
        {
          value: 'Wearing a Hat',
          image: 'hat.svg',
          isCorrect: false
        },
        {
          value: 'Chewing Food',
          image: 'chew.svg',
          isCorrect: true
        },
        {
          value: 'Hugging a Crocodile',
          image: 'crocodile.svg',
          isCorrect: false
        }
      ]
    },
    {
      text: "Why do we need teeth?",
      id: '2',
      type: 'video',
      url_prefix: 'why-do-we-need-teeth',
      boy_video_link: i18n.t("message.babyteethvideo1"),
      boy_video_poster: 'babyteeth_module1-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo1"),
      girl_video_poster: 'babyteeth_module1-cover.jpg'
    },
    {
      text: 'THIRTY-THREE THIRSTY THIEVES!',
      desc: '',
      id: 3,
      type: 'go',
      url_prefix: 'thirty-three-thirsty-thieves',
      audioHooks: {
        "goClicked": getAudio.audio_babyteeth_module3_audio,
      },
      timeInterval: 2000,
      answers: ['THIRTY', 'THREE', 'THIRSTY', 'THIEVES']
    },
    {
      text: "Baby Teeth",
      id: '4',
      type: 'video',
      url_prefix: 'baby-teeth',
      boy_video_link: i18n.t("message.babyteethvideo2"),
      boy_video_poster: 'babyteeth_module2-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo2"),
      girl_video_poster: 'babyteeth_module2-cover.jpg'
    },
    {
      text: "Baby Teething",
      id: '5',
      type: 'video',
      url_prefix: 'baby-teething',
      boy_video_link: i18n.t("message.babyteethvideo3"),
      boy_video_poster: 'babyteeth_module3-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo3"),
      girl_video_poster: 'babyteeth_module3-cover.jpg'
    },
    {
      text: "Brushing Baby Teeth",
      id: '6',
      type: 'video',
      url_prefix: 'brushing-baby-teeth',
      boy_video_link: i18n.t("message.babyteethvideo4"),
      boy_video_poster: 'babyteeth_module4-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo4"),
      girl_video_poster: 'babyteeth_module4-cover.jpg'
    },
    {
      text: 'Ready to time your brushing?',
      desc: '',
      id: 7,
      type: 'brush',
      image: 'brush-twice.svg',
      url_prefix: 'ready-to-time-your-brushing',
      time: 120
    },
    {
      text: i18n.t("message.HowMuchToothPaste"),
      desc: '',
      id: '8',
      type: 'iconSimple',
      url_prefix: 'how-much-toothpaste',
      audioHooks:{
        "questionRight":getAudio.thats_right_for_children_under_three_audio,
        "questionWrong":getAudio.remember_for_children_under_three_audio,
      },
      answers: [
        {
          image: 'book.svg',
          isCorrect: false
        },
        {
          image: 'monster.png',
          isCorrect: true
        },
      ]
    },
    {
      text: i18n.t("message.HowMuchToothPaste"),
      desc: '',
      id: '11',
      type: 'iconsSimple',
      url_prefix: 'how-much-toothpaste',
      audioHooks:{
        "questionRight":getAudio.thats_right_for_children_three_to_six_audio,
        "questionWrong":getAudio.remember_for_children_three_to_six_audio,
      },
      answers: [
        {
          image: 'book.svg',
          isCorrect: false
        },
        {
          image: 'monster.png',
          isCorrect: true
        },
      ]
    },
    {
      text: i18n.t("message.HowMuchToothPaste"),
      desc: '',
      id: '12',
      type: 'iconsSimple',
      url_prefix: 'how-much-toothpaste',
      audioHooks:{
        "questionRight":getAudio.thats_right_flouride_audio,
        "questionWrong":getAudio.remember_flouride_audio,
      },
      answers: [
        {
          image: 'book.svg',
          isCorrect: false
        },
        {
          image: 'monster.png',
          isCorrect: true
        },
      ]
    },
    {
      text: "Bottles and Sippy Cups",
      id: '9',
      type: 'video',
      url_prefix: 'bottles-and-sippy-cups',
      boy_video_link: i18n.t("message.babyteethvideo5"),
      boy_video_poster: 'babyteeth_module5-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo5"),
      girl_video_poster: 'babyteeth_module5-cover.jpg'
    },
    {
      text: "Baby’s First Dental Visit",
      id: '10',
      type: 'video',
      url_prefix: 'babys-first-dental-visit',
      boy_video_link: i18n.t("message.babyteethvideo6"),
      boy_video_poster: 'babyteeth_module6-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo6"),
      girl_video_poster: 'babyteeth_module6-cover.jpg'
    }
  ]
}
}
