<template>
  <div>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <AnswerCard
          v-for="(answer, index) in questionCard.answers"
          :answer="answer"
          :key="index"
          :selected="answer.selected"
          @click="handleAnswerClick(answer)"
          @completed="handleAnswerCompleted(answer)"
          />
      </div>
    </div>
  </BaseQuestion>
  <Button class="continue-button" :disabled="!continueEnabled" @click="continueClicked">
    {{getI18n.continue}}
  </Button>
</div>
</template>

<script>
import AnswerCard from '@/components/cards/AnswerCard'
import BaseQuestion from '@/components/questions/BaseQuestion'
import Button from '@/components/Button'
import config from '@/data/config'

  export default {
    props: ['question'],
    components: {
      BaseQuestion,
      AnswerCard,
      Button
    },

    data () {
      return {
        continueEnabled: false,
        questionCard: {
          text: this.question.text,
          desc: this.question.desc,
          answers: this.question.answers.map((a) => {
            return {
              ...a,
              selected: false
            }
          })
        }
    }
  },

    mounted() {
      playAudio("questionLoaded");
    },

    watch:{
      question (newVal){
        this.continueEnabled = false;
        this.questionCard =  {
          text: newVal.text,
          desc: newVal.desc,
          answers: newVal.answers.map((a) => {
            return {
              ...a,
              selected: false
            }
          })
        }
      }
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
        this.questionCard.answers.forEach((a) => a.selected = false)
        this.questionCard.answers.find((a) => a.text === answer.text).selected = true
      },
      handleAnswerCompleted (answer) {
         this.continueEnabled = true;
      },

     continueClicked(){
       if(!this.continueEnabled)
        return;
       this.continueEnabled=false;
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

  },
}
</script>

<style lang="scss" scoped>
.continue-button{
 position: fixed;
 bottom: 20px;
 left: 50%;
 transform: translateX(-50%);
 max-width: 370px;
 text-align: center;
}

.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    overflow: hidden;
    margin-bottom: 15px;
    min-width: 250px;
    cursor: pointer;
    border: 10px solid rgba(0, 0, 0, 0);
  }
}
</style>
