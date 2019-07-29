import { i18n } from '@/lang'
import audio from '@/data/config/audio'

let getAudio = audio();

export default () => {
 return {
  name: i18n.t("message.BabyTeeth"),
  questions: [
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
        text: 'How many teeth do you have?',
        desc: 'Count your teeth and enter the number below',
        id: '3',
        type: 'teeth',
        url_prefix: 'how-many-teeth',
    }
  ]
}
}
