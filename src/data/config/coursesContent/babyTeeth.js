import { i18n } from '@/lang'
import audio from '@/data/config/audio'

let getAudio = audio();

export default () => {
 return {
  name: i18n.t("message.BabyTeeth"),
  questions: [
    {
      text: i18n.t("message.BabyTeethThingTeethFor"),
      id: '1',
      type: 'select',
      url_prefix: 'which-of-these-things',
      options: [
        {
          value: i18n.t('message.talking'),
          image: 'talking.svg',
          isCorrect: true
        },
        {
          value: i18n.t('message.eating'),
          image: 'eating.svg',
          isCorrect: true
        },
        {
          value: i18n.t('message.kickingBall'),
          image: 'kick-ball.svg',
          isCorrect: false
        },
        {
          value: i18n.t('message.smiling'),
          image: 'smile.svg',
          isCorrect: true
        },
        {
          value: i18n.t('message.singing'),
          image: 'sing.svg',
          isCorrect: true
        },
        {
          value: i18n.t('message.wearingHat'),
          image: 'hat.svg',
          isCorrect: false
        },
        {
          value: i18n.t('message.chewingFood'),
          image: 'chew.svg',
          isCorrect: true
        },
        {
          value: i18n.t('message.huggingCrocodile'),
          image: 'crocodile.svg',
          isCorrect: false
        }
      ]
    },
    {
      text: i18n.t('message.whyNeedTeeth'),
      id: '2',
      type: 'video',
      url_prefix: 'why-do-we-need-teeth',
      boy_video_link: i18n.t("message.babyteethvideo1"),
      boy_video_poster: 'babyteeth_module1-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo1"),
      girl_video_poster: 'babyteeth_module1-cover.jpg'
    },
    {
      text: i18n.t('message.chantFull'),
      desc: '',
      id: 3,
      type: 'go',
      url_prefix: 'thirty-three-thirsty-thieves',
      audioHooks: {
        "goClicked": getAudio.audio_babyteeth_module3_audio,
      },
      timeInterval: 2000,
      answers: [i18n.t('message.chant1'), i18n.t('message.chant2'), i18n.t('message.chant3'), i18n.t('message.chant4')]
    },
    {
      text: i18n.t('message.babyTeeth'),
      id: '4',
      type: 'video',
      url_prefix: 'baby-teeth',
      boy_video_link: i18n.t("message.babyteethvideo2"),
      boy_video_poster: 'babyteeth_module2-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo2"),
      girl_video_poster: 'babyteeth_module2-cover.jpg'
    },
    {
      text: i18n.t('message.babyTeething'),
      id: '5',
      type: 'video',
      url_prefix: 'baby-teething',
      boy_video_link: i18n.t("message.babyteethvideo3"),
      boy_video_poster: 'babyteeth_module3-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo3"),
      girl_video_poster: 'babyteeth_module3-cover.jpg'
    },
    {
      text: i18n.t('message.brushingBabyTeeth'),
      id: '6',
      type: 'video',
      url_prefix: 'brushing-baby-teeth',
      boy_video_link: i18n.t("message.babyteethvideo4"),
      boy_video_poster: 'babyteeth_module4-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo4"),
      girl_video_poster: 'babyteeth_module4-cover.jpg'
    },
    {
      text: i18n.t('message.readyToTime'),
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
      type: 'iconsSimple',
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
      text: i18n.t('message.bottlesSippy'),
      id: '9',
      type: 'video',
      url_prefix: 'bottles-and-sippy-cups',
      boy_video_link: i18n.t("message.babyteethvideo5"),
      boy_video_poster: 'babyteeth_module5-cover.jpg',
      girl_video_link: i18n.t("message.babyteethvideo5"),
      girl_video_poster: 'babyteeth_module5-cover.jpg'
    },
    {
      text: i18n.t('message.babyFirstDental'),
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
