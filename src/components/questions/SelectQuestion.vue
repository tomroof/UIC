<template>
  <div>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <AnswerSelectCard  v-for="(option, index) in question.options" :option="option" :index="index" :selectCard="selectCard" :key="option.value"/>
    </div>

  </BaseQuestion>
  <Button class="continue-button" :disabled="!continueEnabled"  @click="continueClicked" >
    {{getI18n.continue}}
  </Button>
  <popup :type="question.type" :openPopupFalse="openPopupFalse" :openPopupTrue="openPopupTrue" @closePopup="onClosePopup" @nextQuestion="onNextPage" />
</div>
</template>

<script>
import BaseQuestion from '@/components/questions/BaseQuestion'
import AnswerSelectCard from '@/components/cards/AnswerSelectCard'
import Popup from '@/components/Popup'
import { events } from '@/helpers/events'
import Button from '@/components/Button'
import config from '@/data/config'
import AudioMixin from '@/mixins/audioMixin'

export default {
  props: ['question'],

  components: {
    BaseQuestion,
    AnswerSelectCard,
    Popup,
    Button
  },

  data () {
    return {

      openPopupFalse: false,
      openPopupTrue: false,
      continueEnabled: false,
      questionCard: this.question || {},
      selected: [],
      correctOptions: this.question.options.filter(option => {
        option.selected = false
        return option.isCorrect === true
      }) || [],
      incorrectOptions: this.question.options.filter(option => {
        option.selected = false
        return option.isCorrect === false
      }) || []
    }
  },

  mounted(){
    this.playAudio('questionLoaded')
  },

  computed:{
    getI18n() {
      return config().restText
    },

    getI18nAudio() {
      return config().audio
    },
  },

  beforeDestroy(){
  },

  methods: {

    ...AudioMixin,

    updateSelectedValue(options, cardIndex) {
      const indexOption = options.findIndex((option) => {
        return option.value === this.question.options[cardIndex].value
      })
      options[indexOption].selected = options[indexOption].selected === false
    },

    selectCard(cardIndex) {
      if (this.question.options[cardIndex].isCorrect) {
        this.updateSelectedValue(this.correctOptions, cardIndex)
      } else {
        this.updateSelectedValue(this.incorrectOptions, cardIndex)
      }
      const noSelected  = this.correctOptions.every(option => option.selected === false) &&
          this.incorrectOptions.every(option => option.selected === false);
      this.continueEnabled = !noSelected;
    },



    continueClicked(){
      const isCorrect = this.correctOptions.every(option => option.selected === true) &&
        this.incorrectOptions.every(option => option.selected === false);
      if(isCorrect)
        this.openPopupTrue = true;
      else
        this.openPopupFalse = true;
    },

    onClosePopup(){
      this.openPopupFalse = false;
      this.openPopupTrue = false;
    },

    onNextPage(){
      this.$emit("nextQuestion");
    },


  }
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
  .question-content {
    display: flex;
    flex-flow: row wrap;
  }
</style>
