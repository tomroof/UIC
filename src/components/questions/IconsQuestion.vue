<template>
  <div>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <div class="answer" v-for="(answer, index) in questionCard.answers" :key="index">
          <AnswerIconCard
            :answer="answer"
            :selected="answer.selected"
            @click="handleAnswerClick(answer, question)"/>
        </div>
      </div>
    </div>
  </BaseQuestion>
  <Button class="continue-button" :disabled="!continueEnabled"  @click="continueClicked" >
    {{getI18n.continue}}
  </Button>
  <popup :type="question.type" :openPopupFalse="openPopupFalse" :openPopupTrue="openPopupTrue" @closePopup="onClosePopup" @nextQuestion="onNextPage" />
  </div>
</template>

<script>
import AnswerIconCard from '@/components/cards/AnswerIconCard'
import BaseQuestion from '@/components/questions/BaseQuestion'
import Popup from '@/components/Popup'
import Button from '@/components/Button'
import config from '@/data/config'
import { events } from '@/helpers/events'
import AudioManager from '@/helpers/audioManager'

  export default {
    props: ['question'],
    components: {
      BaseQuestion,
      AnswerIconCard,
      Popup,
      Button
    },

    data () {
      return {
        openPopupFalse: false,
        openPopupTrue: false,
        continueEnabled: false,
        questionCard: {
          text: this.question.text,
          desc: this.question.desc,
          answers: this.question.answers.map((a) => {
            return {
              image: a.image,
              text: a.text,
              isCorrect: a.isCorrect,
              selected: false
            }
          })
        } || {},
      }
    },

    watch: {
    },

    mounted() {
      this.playAudio("questionLoaded");
    },

    updated() {
    },

    computed:{
      getI18n() {
        return config().restText
      },

      getI18nAudio() {
        return config().audio
      },
    },

    methods: {
      handleAnswerClick (answer) {
        this.continueEnabled = true;
        this.questionCard.answers.forEach( (a) => a.selected = false);
        this.questionCard.answers.find((a) => a.text === answer.text).selected = true;

      },

      continueClicked(){
        const isCorrect = Boolean(this.questionCard.answers.find( (a) => a.selected && a.isCorrect));
        if(isCorrect){
          this.openPopupTrue = true;
          this.playAudio("questionRight");
        }
        else{
          this.openPopupFalse = true;
          this.playAudio("questionWrong");
        }
      },

      onClosePopup(){
        this.openPopupFalse = false;
        this.openPopupTrue = false;
      },

      onNextPage(){
        this.$emit("nextQuestion");
      },

      playAudio(HookName){
        let audioHooks=this.question.audioHooks;
        if(!audioHooks)
         return;
        let to_play = audioHooks[HookName];
        if(!to_play)
         return;
        let contEnabler = this.continueEnabled;
        contEnabler = false;
        AudioManager.playAudio(to_play, this.$store.state.gender,
        function(){
          contEnabler = true;
        })
      }

    }
  }
</script>

<style lang="scss" scoped>
.answers {
  .card {
    border: none;
  }
}

.continue-button{
 position: fixed;
 bottom: 20px;
 left: 50%;
 transform: translateX(-50%);
 max-width: 370px;
 text-align: center;
}

.answer {
  &:not(:last-child) {
    &::after {
      content: 'or';
      width: 100%;
      text-align: center;
      display: block;
      margin: 21px 0;
      font-family: ZillaSlab-Bold;
      font-size: 26px;
      color: #FFFFFF;
      letter-spacing: 0;
    }

    /deep/ .image {
      background: #FF6D7F;
    }
  }

  &:last-child {
    /deep/ .image {
      background: #278AB5;
    }
  }

}
</style>
