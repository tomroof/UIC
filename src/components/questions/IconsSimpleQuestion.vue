<template>
  <div>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <div class="answer" v-for="(answer, index) in questionCard.answers" :key="index">
          <AnswerMouthCard
            :answer="answer"
            :selected="selected === index"
            @click="handleAnswerClick(answer,index)"/>
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
import AnswerMouthCard from '@/components/cards/AnswerMouthCard'
import BaseQuestion from '@/components/questions/BaseQuestion'
import Popup from '@/components/Popup'
import Button from '@/components/Button'
import config from '@/data/config'
import { events } from '@/helpers/events'
import AudioManager from '@/helpers/audioManager'
import AudioMixin from '@/mixins/audioMixin'

  export default {
    props: ['question'],
    components: {
      BaseQuestion,
      Popup,
      Button,
      AnswerMouthCard
    },

    data () {
      return {
        openPopupFalse: false,
        openPopupTrue: false,
        continueEnabled: false,
        selected: -1,
        questionCard: {
          ...this.question,
          answers: this.question.answers.map((a) => {
            return {
              ...a
            }
          })
        },
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
      handleAnswerClick (answer,index) {
        this.continueEnabled = true;
        this.selected = index;
        this.questionCard.answers[index].selected = true;
      },

      continueClicked(){
        const isCorrect = Boolean(this.questionCard.answers.find( (a) => a.selected && a.isCorrect));
        if (isCorrect) {
          this.openPopupTrue = true;
          this.playAudio("questionRight");
        } else {
          this.openPopupFalse = true;
          this.playAudio("questionWrong");
        }
      },

      onClosePopup() {
        this.openPopupFalse = false;
        this.openPopupTrue = false;
      },

      onNextPage() {
        this.$emit("nextQuestion");
      },

      ...AudioMixin
    }
  }
</script>

<style lang="scss" scoped>
.answers {
  .card {
    border: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-around;

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
  .card {
    overflow: hidden;
    margin-bottom: 15px;
    cursor: pointer;
    margin: 4px;
    text-align: center;
    width: 110px !important;
    height: 110px !important;
    max-width: initial !important;
    justify-content: center;

    &:not(:first-child) {
      margin-left: 35px !important;
    }

    /deep/ .info {
      display: none;
    }

    /deep/ img {
      // padding: 17px 0px;
      width: 60px !important;
      height: 60px !important;
    }

    /deep/ .image {
      width: 100%;
      justify-content: center;
    }

    /deep/ .title {
      display: none !important;
    }
  }


}
</style>
