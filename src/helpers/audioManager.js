export default {
  name: 'AudioManager',
  sounds: [
    {
      src_boy: '5_how-do-we-stop-cavity-monsters.mp3',
      src_girl: 'stop-the-cavity-monster_how-do-we.mp3',
      id: 'first_question_for_icons'
    },
    {
      src_boy: '5_yeah-your-fighting-the-cavity-monster.mp3',
      src_girl: 'stop-the-cavity-monster_yeah.mp3',
      id: 'icons_select_correct'
    },
    {
      src_boy: '5_uh-oh-cavity-monsters-coming.mp3',
      src_girl: 'stop-the-cavity-uh-oh.mp3',
      id: 'icons_select_wrong'
    },
    {
      src_boy: '7_good-for-me-or-good-for-cavity-monsters.mp3',
      src_girl: 'good-for-me-or-good-for-cavity-monsters.mp3',
      id: 'first_question_for_cards'
    },
    {
      src_boy: '8_cavity-math_lets-see-how.mp3',
      src_girl: 'cavity-math_lets-see-how.mp3',
      id: 'first_question_for_calc'
    },
    {
      src_boy: '9_good-job.mp3',
      src_girl: 'good-job.mp3',
      id: 'good_job'
    },
    {
      src_boy: '9_unlocked-new-badge.mp3',
      src_girl: 'unlocked-new-badge.mp3',
      id: 'unlocked_badge'
    },
    {
      src_boy: '8_cavity-math_thats-right.mp3',
      src_girl: 'cavity-math_thats-right.mp3',
      id: 'calc_question_1'
    },
    {
      src_boy: '8_cavity-math_oh-no.mp3',
      src_girl: 'cavity-math_oh-no.mp3',
      id: 'calc_question_2'
    },
    {
      src_boy: '8_cavity-math_remember.mp3',
      src_girl: 'cavity-math_remember.mp3',
      id: 'calc_question_3_4'
    },
    {
      src_boy: '5_how-do-we-stop-cavity-monsters.mp3',
      src_girl: 'stop-the-cavity-monster_how-do-we.mp3',
      id: 'first_question_for_icons_ES'
    },
    {
      src_boy: '5_yeah-your-fighting-the-cavity-monster.mp3',
      src_girl: 'stop-the-cavity-monster_yeah.mp3',
      id: 'icons_select_correct_ES'
    },
    {
      src_boy: '5_uh-oh-cavity-monsters-coming.mp3',
      src_girl: 'stop-the-cavity-uh-oh.mp3',
      id: 'icons_select_wrong_ES'
    },
    {
      src_boy: '7_good-for-me-or-good-for-cavity-monsters.mp3',
      src_girl: 'good-for-me-or-good-for-cavity-monsters.mp3',
      id: 'first_question_for_cards_ES'
    },
    {
      src_boy: '8_cavity-math_lets-see-how.mp3',
      src_girl: 'cavity-math_lets-see-how.mp3',
      id: 'first_question_for_calc_ES'
    },
    {
      src_boy: '9_good-job.mp3',
      src_girl: 'good-job.mp3',
      id: 'good_job_ES'
    },
    {
      src_boy: '9_unlocked-new-badge.mp3',
      src_girl: 'unlocked-new-badge.mp3',
      id: 'unlocked_badge_ES'
    },
    {
      src_boy: '8_cavity-math_thats-right.mp3',
      src_girl: 'cavity-math_thats-right.mp3',
      id: 'calc_question_1_ES'
    },
    {
      src_boy: '8_cavity-math_oh-no.mp3',
      src_girl: 'cavity-math_oh-no.mp3',
      id: 'calc_question_2_ES'
    },
    {
      src_boy: '8_cavity-math_remember.mp3',
      src_girl: 'cavity-math_remember.mp3',
      id: 'calc_question_3_4_ES'
    },
  ],

  playAudio (id, gender, callback) {
    this.sounds.map((sound) => {
      if (sound.id === id) {
        var audio;
        if (gender === 'boy') {
          audio = new Audio(require('@/assets/audio/' + sound.src_boy));
        } else {
          audio = new Audio(require('@/assets/audio/' + sound.src_girl));
        }

        audio.onended = function() {
          if (callback) {
            callback()
          }
        };

        audio.play();
        return
      }
    })
  }
}
