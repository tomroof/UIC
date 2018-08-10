export default {
  name: 'AudioManager',
  sounds: [
    {
      src: 'stop-the-cavity-monster_how-do-we.mp3',
      id: 'first_question_for_icons'
    },
    {
      src: 'stop-the-cavity-monster_yeah.mp3',
      id: 'icons_select_correct'
    },
    {
      src: 'stop-the-cavity-uh-oh.mp3',
      id: 'icons_select_wrong'
    },
    {
      src: 'good-for-me-or-good-for-cavity-monsters.mp3',
      id: 'first_question_for_cards'
    },
    {
      src: 'cavity-math_lets-see-how.mp3',
      id: 'first_question_for_calc'
    },    
    {
      src: 'good-job.mp3',
      id: 'good_job'
    },
    {
      src: 'unlocked-new-badge.mp3',
      id: 'unlocked_badge'
    },
    {
      src: 'cavity-math_thats-right.mp3',
      id: 'calc_question_1'
    },
    {
      src: 'cavity-math_oh-no.mp3',
      id: 'calc_question_2'
    },
    {
      src: 'cavity-math_remember.mp3',
      id: 'calc_question_3_4'
    },
  ],

  playAudio (id) {
    this.sounds.map((sound) => {
      if (sound.id === id) {
        var audio = new Audio(require('@/assets/audio/' + sound.src));
        audio.play();    
        return
      }
    })
    
  }
}
