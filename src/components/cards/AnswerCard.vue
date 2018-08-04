<template>
  <div class="answer-container" @click="$emit('click')">
    <transition name="rotateCard">
      <div class="answer-wrapper" key="question" v-if="!selected" >
        <div class="image">
          <img :src="image" alt="">
        </div>
        <div class="text">{{answer.text}}</div>
      </div>

      <div v-else key="answer" class="answer-wrapper" :class="{'correct': answer.answerData.isCorrect, 'not-correct': !answer.answerData.isCorrect}">
        <div class="image">
          <img :src="image" alt="">
        </div>
        <div class="text">{{answer.answerData.text}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseCard from './BaseCard'

export default {
  name: 'ReviewCard',

  props: ['answer', 'selected'],
  components: {
    BaseCard
  },

  methods: {
    getButtonClassName (number) {
      return ['card', number === this.selected ? 'card--selected' : '']
    }
  },

  computed: {
    image () {
      return typeof this.answer.image === 'undefined' || this.answer.image.length === 0
              ? require('../../assets/answer-img.svg')
              : require(`../../assets/${this.answer.image}`)
    }
  }
}
</script>

<style>
.rotateCard-enter-active, .rotateCard-leave-active {
  transition: transform 1s ease-in-out, opacity 0s ease .5s;
}
.rotateCard-enter {
  transform: rotateY(-180deg);
  opacity: 0;
}

.rotateCard-enter-to {
  transform: rotateY(0);
  opacity: 1;
}

.rotateCard-leave {
  transform: rotateY(0);
  opacity: 1;
}

.rotateCard-leave-to {
  transform: rotateY(-180deg);
  opacity: 0;
}

</style>

<style scoped lang="scss">
.image {
  background-color: #3FC9DD;
  img {
    width: 100%;
    max-width: 130px;
    max-height: 150px;
    margin: 0 auto;
    display: inherit;
    padding: 20px 0;
  }
}
.text {
  /* Exercise: */
  font-family: 'Zilla Slab';
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;

  padding: 16px 0px;
}

.answer-wrapper {
  border: 10px solid rgba(0,0,0,0);
  background: rgba(39,138,181,0.60);
  background: rgba(39,138,181,0.25);
  background: rgba(46,74,110,0.60);
  box-shadow: 0 2px 3px 0 rgba(31,49,74,0.10);
  border-radius: 10px;

  position: absolute;
  width: 100%;
  max-width: 250px;
}

.answer-container {
  width: 250px;
  height: 250px;
}

.correct {
  background-color: #32BEA6;
  box-shadow: 0 2px 3px 0 rgba(31,49,74,0.10);
  border-radius: 10px;
}

.not-correct {
  background-color: #AB4852;
  box-shadow: 0 2px 3px 0 rgba(31,49,74,0.10);
  border-radius: 10px;
}

</style>
