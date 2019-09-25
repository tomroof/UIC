let currentAudio = null;
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
      src_boy: 'stop-the-cavity-monster_how-do-we-es.mp3',
      src_girl: 'stop-the-cavity-monster_how-do-we-es.mp3',
      id: 'first_question_for_icons_ES'
    },
    {
      src_boy: 'stop-the-cavity_yeah-es.mp3',
      src_girl: 'stop-the-cavity_yeah-es.mp3',
      id: 'icons_select_correct_ES'
    },
    {
      src_boy: 'stop-the-cavity-uh-oh-es.mp3',
      src_girl: 'stop-the-cavity-uh-oh-es.mp3',
      id: 'icons_select_wrong_ES'
    },
    {
      src_boy: 'good-for-me-or-good-for-cavity-monsters-es.mp3',
      src_girl: 'good-for-me-or-good-for-cavity-monsters-es.mp3',
      id: 'first_question_for_cards_ES'
    },
    {
      src_boy: 'cavity-math_lets-see-how-es.mp3',
      src_girl: 'cavity-math_lets-see-how-es.mp3',
      id: 'first_question_for_calc_ES'
    },
    {
      src_boy: 'good-job-es.mp3',
      src_girl: 'good-job-es.mp3',
      id: 'good_job_ES'
    },
    {
      src_boy: 'unlocked-new-badge-es.mp3',
      src_girl: 'unlocked-new-badge-es.mp3',
      id: 'unlocked_badge_ES'
    },
    {
      src_boy: 'cavity-math_thats-right-es.mp3',
      src_girl: 'cavity-math_thats-right-es.mp3',
      id: 'calc_question_1_ES'
    },
    {
      src_boy: 'cavity-math_oh-no-es.mp3',
      src_girl: 'cavity-math_oh-no-es.mp3',
      id: 'calc_question_2_ES'
    },
    {
      src_boy: 'cavity-math_remember-es.mp3',
      src_girl: 'cavity-math_remember-es.mp3',
      id: 'calc_question_3_4_ES'
    },
    {
      src_boy: 'babyteeth_module3-audio.mp3',
      src_girl: 'babyteeth_module3-audio.mp3',
      id: 'babyteeth_module3_audio'
    },
    {
      src_boy: 'thats-right-for-children-under-three.mp3',
      src_girl: 'thats-right-for-children-under-three.mp3',
      id: 'thats_right_for_children_under_three_audio'
    },
    {
      src_boy: 'remember-for-children-under-three.mp3',
      src_girl: 'remember-for-children-under-three.mp3',
      id: 'remember_for_children_under_three_audio'
    },
    {
      src_boy: 'thats-right-for-children-three-to-six.mp3',
      src_girl: 'thats-right-for-children-three-to-six.mp3',
      id: 'thats_right_for_children_three_to_six_audio'
    },
    {
      src_boy: 'remember-for-children-three-to-six.mp3',
      src_girl: 'remember-for-children-three-to-six.mp3',
      id: 'remember_for_children_three_to_six_audio'
    },
    {
      src_boy: 'thats-right-fluoride.mp3',
      src_girl: 'thats-right-fluoride.mp3',
      id: 'thats_right_fluoride_audio'
    },
    {
      src_boy: 'remember-fluoride.mp3',
      src_girl: 'remember-fluoride.mp3',
      id: 'remember_fluoride_audio'
    },
    {
      src_boy: 'esp-how-we-use-our-teeth-1.mp3',
      src_girl: 'esp-how-we-use-our-teeth-1.mp3',
      id: 'babyteeth_module3_audio_esp'
    },
    {
      src_boy: 'esp-how-much-toothpaste-1.mp3',
      src_girl: 'esp-how-much-toothpaste-1.mp3',
      id: 'thats_right_for_children_under_three_audio_esp'
    },
    {
      src_boy: 'esp-how-much-toothpaste-2.mp3',
      src_girl: 'esp-how-much-toothpaste-2.mp3',
      id: 'remember_for_children_under_three_audio_esp'
    },
    {
      src_boy: 'esp-how-much-toothpaste-3.mp3',
      src_girl: 'esp-how-much-toothpaste-3.mp3',
      id: 'thats_right_for_children_three_to_six_audio_esp'
    },
    {
      src_boy: 'esp-how-much-toothpaste-4.mp3',
      src_girl: 'esp-how-much-toothpaste-4.mp3',
      id: 'remember_for_children_three_to_six_audio_esp'
    },
    {
      src_boy: 'esp-how-much-toothpaste-5.mp3',
      src_girl: 'esp-how-much-toothpaste-5.mp3',
      id: 'thats_right_fluoride_audio_esp'
    },
    {
      src_boy: 'esp-how-much-toothpaste-6.mp3',
      src_girl: 'esp-how-much-toothpaste-6.mp3',
      id: 'remember_fluoride_audio_esp'
    },
  ],



  playAudio (id, gender, callback) {
    if(currentAudio){
      currentAudio.pause();
    }

    let sound = this.sounds.find((s)=>s.id === id)
    if(!sound){
      console.log("could not find sound by id: ",id)
      if(callback)
        return callback();
      return;
    }
    var audio;
    if (gender === 'boy') {
      audio = new Audio(require('@/assets/audio/' + sound.src_boy));
    } else {
      audio = new Audio(require('@/assets/audio/' + sound.src_girl));
    }
    audio.addEventListener("loadedmetadata", function() {

      var promise = audio.play();
      if (promise !== undefined) {
          promise.then(_ => {
              console.log("Now playing: ", id, " from ", audio.currentSrc);
              currentAudio = audio;
            }).catch(error => {
              console.log(error, "can't play audio until user interacts with the page");
              // we should promt user with "Play audio on this page? Yes. No."
            }).finally(()=>{
                callback();
            });
      }
    }, { once: true });
  }
}
