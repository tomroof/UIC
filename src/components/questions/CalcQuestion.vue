<template>
  <div>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <draggable
          v-model="answers"
          class="dragArea"
          :options="{group:'answers'}">
          <AnswerCalcCard
            v-for="(variant, index) in answers"
            :answer="variant"
            :key="index"
            :selected="variant.selected"
            :result="false"
            @click="handleAnswerClick(answer, question)"/>
        </draggable>
      </div>

      <div class="answers">
        <div class="field">
          <draggable v-model="fields[0]" :options="{group:'answers'}" class="dragArea" @change="handleDragChange">
            <AnswerCalcCard
              v-for="(variant, i) in fields[0]"
              :answer="variant"
              :key="i"
              :selected="variant.selected"
              :result="true"
              @click="handleAnswerClick(answer, question)"/>
          </draggable>
        </div>

        <div class="gap">
          <img src="@/assets/plus.svg" alt="">
        </div>

        <div class="field">
          <draggable v-model="fields[1]" :options="{group:'answers'}" class="dragArea" @change="handleDragChange">
            <AnswerCalcCard
              v-for="(variant, i) in fields[1]"
              :answer="variant"
              :key="i"
              :selected="variant.selected"
              :result="true"
              @click="handleAnswerClick(answer, question)"/>
          </draggable>
        </div>
      </div>
    </div>
  </BaseQuestion>
  <popup :customPopup="question.customPopup" :openPopupTrue="openPopupTrue" @closePopup="onClosePopup" @nextQuestion="onNextPage"/>
  <Button class="continue-button" :disabled="!continueEnabled" @click="continueClicked">
  {{getI18n.continue}}
  </Button>
</div>
</template>

<script>
  import AnswerCalcCard from '@/components/cards/AnswerCalcCard'
  import BaseQuestion from '@/components/questions/BaseQuestion'
  import Popup from '@/components/Popup'
  import { events } from '@/helpers/events'
  import Button from '@/components/Button'
  import config from '@/data/config'
  import draggable from 'vuedraggable'

  export default {
    props: ['question'],
    components: {
      AnswerCalcCard,
      BaseQuestion,
      Popup,
      draggable,
      Button
    },

    mounted() {

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

    data () {
      return {
        openPopupFalse: false,
        openPopupTrue: false,
        continueEnabled: false,
        addedCareNumber: 0,
        isCorrect: false,
        questionCard: {
          text: this.question.text,
          desc: this.question.desc,
          answers: this.question.answers.map((a) => {
            return {
              ...a,
              selected: false
            }
          })
        } || {},
        answers: this.question.answers.map((a) => {
          return {
            ...a,
            selected: false
          }
        }),
        fields: {
          0: [],
          1: [],
          2: []
        }
      }
    },

    watch: {
    },

    methods: {
      handleDragChange (e) {
        this.isCorrect = this.fields[0].length == 1 && this.fields[1].length == 1;
        this.continueEnabled = this.fields[0].length == 1 && this.fields[1].length == 1;
      },

      dropActiveAnswers () {
        this.questionCard.answers.forEach((a) => a.selected = false)
      },

      handleAnswerClick (answer) {
        this.dropActiveAnswers()
        this.questionCard.answers.find((a) => a.text === answer.text).selected = true;
      },

      continueClicked(){
          this.openPopupTrue = true;
      },


      onClosePopup(){
        this.openPopupFalse = false;
        this.openPopupTrue = false;
      },

      onNextPage(){
        this.$emit("nextQuestion");
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }


  .continue-button{
   position: fixed;
   bottom: 20px;
   left: 50%;
   transform: translateX(-50%);
   max-width: 370px;
   text-align: center;
  }

.dragArea {
  min-height: 66px;
  width: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
}

.gap {
  flex: 1 1 21px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.row-gap {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1 1 100%;
  width: 100%;

  margin-top: 55px;
}

/deep/ .question-header {
  margin-bottom: 27px;
}

.field {
  border-bottom: 1px solid #fff;
  min-height: 66px;
  padding: 0 10px;
  width: calc(40% - 10px);
  margin-top: 8px;

  .field-content {
    display: flex;
    justify-content: space-around;
  }
}

.answers {
  min-height: 78px;
}

.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  overflow: hidden;
  margin-bottom: 15px;
  cursor: pointer;
  margin: 4px;
  text-align: center;
  min-width: 155px;
  max-width: 115px;
  height: 132px;

  /deep/ .info {
    display: none;
  }

  /deep/ img {
    padding: 17px 0px;
    width: 30px;
  }

  /deep/ .image img {
    height: auto;
    width: auto;
  }
}
</style>
