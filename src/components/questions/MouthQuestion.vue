<template>
  <div>
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
          </div>
  </BaseQuestion>
  <popup :answers="fields[2]" :type="question.type" :openPopupFalse="openPopupFalse" :openPopupTrue="openPopupTrue"  @closePopup="onClosePopup" @nextQuestion="onNextPage"/>
  <Button class="continue-button" :disabled="!continueEnabled"  >
    {{getI18n.continue}}
  </Button>
</div>
</template>


<script>
  import * as bodymovin from '@/data/bodymovin.js';
  import { events } from '@/helpers/events'
  import AnswerMouthCard from '@/components/cards/AnswerMouthCard'
  import BaseQuestion from '@/components/questions/BaseQuestion'
  import Popup from '@/components/Popup'
  import draggable from 'vuedraggable'
  import Button from '@/components/Button'
  import config from '@/data/config'

  export default {
    props: ['question'],
    components: {
      AnswerMouthCard,
      BaseQuestion,
      draggable,
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
          variants: this.question.variants.map((a) => {
            return {
              ...a,
              selected: false
            }
          })
        },
        variants: this.question.variants.map((a) => {
          return {
            ...a,
            selected: false
          }
        }),
        fields: {
          0: [],
          1: [],
          2: []
        },
        initialQuestionCard: {}
      }
    },

    mounted () {
      this.loadMouthAnimation()
    },

    computed:{
      getI18n() {
        return config().restText
      },

      getI18nAudio() {
        return config().audio
      },
    },

    watch: {
    },

    methods: {
      handleDragChange (e) {
        if (e.added.element.isCorrect) {
          this.playSmileAnimation()
        }
        else {
          this.playSadAnimation()
          this.question.variants = [...this.question.variants, e.added.element]
        }
      },
      handleAnswerClick (answer) {
        this.questionCard.answers.forEach( (a) => a.selected = false);
        this.questionCard.answers.find((a) => a.text === answer.text).selected = true
      },

       loadMouthAnimation() {
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
        anim.addEventListener('complete', this.completedSmileAnim);
     },

     playSmileAnimation() {
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
        anim.addEventListener('complete', this.completedSmileAnim);
      },

       completedSmileAnim() {
        this.openPopupTrue = true;
      },

       playSadAnimation() {
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
        anim.addEventListener('complete', this.completedSadAnim);
      },

       completedSadAnim() {
         this.openPopupFalse = true;
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
.continue-button{
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 370px;
  font-family: 'Zilla Slab';
  font-size: 15px;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  text-align: center;
}

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
