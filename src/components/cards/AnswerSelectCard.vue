<template>
  <div :class="{card: true, 'is-active': isActive}" @click="handleCard">
    <img class="image" :src="require(`../../assets/${option.image}`)" alt="">
    <div class="letter">
      {{ index + 1 }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['option', 'index', 'selectCard'],

  data() {
    return {
      isActive: false,
    }
  },

  methods: {
    handleCard() {
      this.isActive = !this.isActive
      this.selectCard(this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-flow: column nowrap;

  width: calc(25% - 10px);
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;

  background: rgba(46,74,110,.6);
  border-radius: 10px;

  cursor: pointer;
}

.card:nth-child(4n) {
  margin-right: 0;
}

.image {
  display: block;
  width: 80%;
  margin: 0 auto;
}

.letter {
  margin-top: auto;

  color: #ffffff;
}

.is-active {
  background: #32BEA6;
}
</style>
