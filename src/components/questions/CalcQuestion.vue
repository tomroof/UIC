<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="answers">
        <draggable
          v-model="answers"
          class="dragArea"
          :options="{group:'answers', disabled: !enabledSelection}">
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
          <draggable v-model="fields[0]" :options="{group:'answers', disabled: !enabledSelection}" class="dragArea" @change="handleDragChange">
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
          <draggable v-model="fields[1]" :options="{group:'answers', disabled: !enabledSelection}" class="dragArea" @change="handleDragChange">
            <AnswerCalcCard
              v-for="(variant, i) in fields[1]"
              :answer="variant"
              :key="i"
              :selected="variant.selected"
              :result="true"
              @click="handleAnswerClick(answer, question)"/>
          </draggable>
        </div>
        <!-- <div class="row-gap">
          <img src="@/assets/eq-icon.png" alt="">
        </div>

        <div class="field">
          <draggable v-model="fields[2]" :options="{group:'answers'}" class="dragArea" @change="handleDragChange">
            <AnswerCalcCard
              v-for="(variant, i) in fields[2]"
              :answer="variant"
              :key="i"
              :selected="variant.selected"
              @click="handleAnswerClick(answer, question)"/>
          </draggable>
        </div> -->

      </div>
      <popup :openPopupTrue="openPopupTrue"/>
    </div>
  </BaseQuestion>
</template>

<script>
  import AnswerCalcCard from '@/components/cards/AnswerCalcCard'
  import BaseQuestion from '@/components/questions/BaseQuestion'
  import Popup from '@/components/Popup'
  import { events } from '@/helpers/events'

  import draggable from 'vuedraggable'

  export default {
    props: ['question', 'index', 'openPopupTrue', 'enabledSelection'],
    components: {
      AnswerCalcCard,
      BaseQuestion,
      Popup,
      draggable
    },

    mounted() {
      this.$emit('isQuestionHandler', true, 'Play Next');
      events.$on('dropAnswer', this.dropActiveAnswers)
    },

    updated() {
      this.$emit('isQuestionHandler', false, 'Play Next');
    },

    data () {
      return {
        addedCareNumber: 0,
        questionCard: this.question || {},
        answers: [],
        fields: {
          0: [],
          1: [],
          2: []
        }
      }
    },

    watch: {
      question:{
        handler: function (newVal) {
          this.questionCard = newVal
          this.answers = newVal.answers
        },
        immediate: true
      }
    },

    methods: {
      handleDragChange (e) {
        if (e.added != null) {
          this.addedCareNumber ++
        } else {
          this.addedCareNumber --
        }
        if (this.addedCareNumber >= 2) {
          this.$emit('isQuestionHandler', false)
          this.dropActiveAnswers()
          this.$emit('selectAnswer', {isCorrect: true, index: this.index})
        }
      },
      dropActiveAnswers () {
        this.$set(this, 'questionCard', {
          text: this.question.text,
          desc: this.question.desc,
          answers: this.question.answers.map((a) => {
            return {
              image: a.image,
              text: a.text,
              value: a.value,
              selected: false
            }
          })
        })
      },
      handleAnswerClick (answer) {
        this.dropActiveAnswers()
        this.questionCard.answers.find((a) => a.text === answer.text).selected = true
        this.$emit('selectAnswer')
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
