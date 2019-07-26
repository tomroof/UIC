<template>
  <div>
  <BaseQuestion :questionCard="questionCard">
  </BaseQuestion>
  <div class="question-content">
    <img class="mouth-image" src="@/assets/mouth.svg" alt="">
    <div class="input-container">
        <input v-model="teethNumber" min="0" max="25" class="number-input" type="number"/>
        <span class="teeth-label">teeth</span>
    </div>
    <button  class="go-button" :disabled="!continueEnabled"  @click="continueClicked">GO</button>
  </div>
</div>
</template>

<script>
import BaseQuestion from '@/components/questions/BaseQuestion'
import AudioManager from '@/helpers/audioManager'
import VueButton from '@/components/Button'
import config from '@/data/config/index'
import AudioMixin from '@/mixins/audioMixin'

export default {
  name: 'TeethQuestion',

  props: ['question'],

  components: {
    BaseQuestion,
    VueButton
  },

  data() {
    return {
      continueEnabled: false,
      questionCard:  {
        ...this.question,
      },
      textIndex: 0,
      isAudioEnd: false,
      teethNumber: ""
    }
  },

  computed: {
    getI18nAudio() {
      return config().audio
    },


      getI18n() {
        return config().restText
      },

      getI18nAudio() {
        return config().audio
      },

  },
  watch:{
    teethNumber(newVal){
      if(newVal && this.isAudioEnd)
        this.continueEnabled = true;
    }
  },

  mounted() {
    this.playAudio('questionLoaded',this.audio1finished)
  },

  methods: {
    ...AudioMixin,

    continueClicked(){
      this.playAudio('goClicked',this.audio2Finished);
    },

    audio1finished(){
      this.isAudioEnd=true;
    },

    audio2Finished(){
      this.$emit('nextQuestion');
    }


  }
}
</script>

<style lang="scss" scoped>

.mouth-image{
  width:70%;
  margin: 20px auto;
}

.question-content{
  display:flex;
  flex-direction: column;
  align-items: center;
      margin-top: -20px;
}

.input-container{
  margin: 10px;
}

.teeth-label{
  margin-left: 10px;
  font-family: 'Zilla Slab';
  font-size: 22pt;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  text-align: center;
}

.number-input{
  width: 50px;
  height: 50px;
  border-radius: 13px;
  text-align: center;
  font-size: 25pt;
}

input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}


.continue-button{
 position: fixed;
 bottom: 20px;
 left: 50%;
 transform: translateX(-50%);
 max-width: 370px;
 text-align: center;
}

  .go-button {
    width: 150px;
    height: 150px;
    margin: 10px auto;
    color: #ffffff;
    font-size: 50px;

    background: #87daa2;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 0px 46px -12px rgba(0,0,0,0.5);
    outline: none;

    cursor: pointer;

    &:disabled{
      opacity: 0.6;
    }
  }




</style>
