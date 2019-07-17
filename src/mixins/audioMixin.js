
import AudioManager from '@/helpers/audioManager'

export default {
  playAudio(HookName,callback){
    let audioHooks=this.question.audioHooks;
    if(!audioHooks)
     return;
    let to_play = audioHooks[HookName];
    if(!to_play)
     return;
    let contEnabler = this.continueEnabled;
    let beforeState = contEnabler;
    contEnabler = false;
    AudioManager.playAudio(to_play, this.$store.state.gender,
    function(){
      contEnabler = beforeState;
      if(callback)
        callback();
    })
  }
}
