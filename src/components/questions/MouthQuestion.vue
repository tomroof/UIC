<template>
  <BaseQuestion :questionCard="questionCard">
    <div class="question-content" slot="questionContent">
      <div class="variants">
        <draggable
          v-model="variants"
          class="dragArea"
          :options="{group:'variants'}">
          <AnswerMouthCard
            v-for="(variant, index) in variants"
            :answer="variant"
            :key="index"
          />
        </draggable>
      </div>

      <div class="answers">
        <div class="field">
          <draggable v-model="fields[2]" :options="{group:'variants'}" class="dragArea" @change="handleDragChange">
            <AnswerMouthCard
              v-for="(variant, i) in fields[2]"
              :answer="variant"
              :key="i"
            />
            <div id="bodymovin"></div>
          </draggable>
        </div>
      </div>
      <popup :answers="fields[2]" :type="question.type" :openPopupFalse="openPopupFalse" :openPopupTrue="openPopupTrue" />
    </div>
  </BaseQuestion>
</template>


<script>
  import * as bodymovin from '@/data/bodymovin.js';
  import { events } from '@/helpers/events'
  import AnswerMouthCard from '@/components/cards/AnswerMouthCard'
  import BaseQuestion from '@/components/questions/BaseQuestion'
  import Popup from '@/components/Popup'
  import draggable from 'vuedraggable'

  function loadMouthAnimation() {
    var anim;
    var animData = {
        container: document.getElementById('bodymovin'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },
        path:'/static/mouth-smile.json'
    };
    anim = bodymovin.loadAnimation(animData);
    anim.setSpeed(1);
    anim.addEventListener('complete', completedSmileAnim);
 }

  function playSmileAnimation() {
    bodymovin.destroy();
    var anim;
    var animData = {
        container: document.getElementById('bodymovin'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path:'/static/mouth-smile.json'
    };
    anim = bodymovin.loadAnimation(animData);
    anim.setSpeed(1);
    anim.addEventListener('complete', completedSmileAnim);
  }

  function completedSmileAnim() {
    events.$emit('openSuccessPopup');
  }

  function playSadAnimation() {
    bodymovin.destroy();
    var anim;
    var animData = {
        container: document.getElementById('bodymovin'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path:'/static/mouth-sad.json'
    };
    anim = bodymovin.loadAnimation(animData);
    anim.setSpeed(1);
    anim.addEventListener('complete', completedSadAnim);
  }

  function completedSadAnim() {
    events.$emit('openFailedPopup');
  }

  export default {
    props: ['question', 'openPopupTrue', 'openPopupFalse', 'openSuccessPopup', 'openFailedPopup'],
    components: {
      AnswerMouthCard,
      BaseQuestion,
      draggable,
      Popup
    },

    data () {
      return {
        questionCard: this.question || {},
        variants: [],
        fields: {
          0: [],
          1: [],
          2: []
        },
        initialQuestionCard: {}
      }
    },

    mounted () {
      loadMouthAnimation()
      this.$emit('isQuestionHandler', true, 'Play Next');
    },

    computed: {
      // TODO get course by prop Id
      // TODO learn how to spell course
      course () {
        return animationData
      },
    },

    watch: {
      question:{
        handler: function (newVal) {
          this.questionCard = newVal
          this.variants = newVal.variants
        },
        immediate: true
      }
    },

    methods: {
      handleDragChange (e) {
        if (e.added.element.isCorrect) {
          playSmileAnimation()
        }
        else {
          playSadAnimation()
          this.question.variants = [...this.question.variants, e.added.element]
        }
      },
      dropActiveAnswers () {
        this.$set(this, 'questionCard', {
          text: this.question.text,
          desc: this.question.desc,
          answers: this.question.answers.map((a) => {
            return {
              ...a,
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
  min-height: 66px;
  padding: 0 10px;
  width: calc(100% - 10px);
  margin-top: 8px;

  .field-content {
    display: flex;
    justify-content: space-around;
  }

  .answer-card {
    display: none;
  }

  #bodymovin {
    width: 325px;
    height: 153px;
  }
}

.variants {
  min-height: 78px;
}

.answers {
  margin-top: 40px;
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

@media screen and (max-width : 360px) {
    .answers {
      margin-top: 0px;
    }
}

</style>
