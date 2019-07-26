<template>
  <div :class="{card: true, 'is-active': isActive}" @click="handleCard">
    <img class="image" :src="require(`../../assets/${option.image}`)" alt="">
    <div class="letter">
      {{ option.value }}
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
      this.selectCard(this.index, this.isActive)
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
  padding: 7px;

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
  margin-top: 10px;

  font-size: 13px;
  color: #ffffff;
}

.is-active {
  background: #32BEA6;
}
</style>
