<template>
  <div @click="$emit('click')" :class="['card', selected ? 'card--selected': '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['selected'],
  name: 'BaseCard'
}
</script>

<style scoped lang="scss">
  .card {
    border: 2px solid rgba(0, 0, 0, 0);
    height: auto;
    background: rgba(46, 74, 110, 0.5);
    border-radius: 10px;
    box-shadow: 0 4px 6px 0 rgba(33,73,95,0.06);
  }
  .card--selected {
    background: #32BEA6;
    border: 2px solid #259A86;
    box-shadow: 0 2px 3px 0 rgba(31,49,74,0.10);
  }

  .image-1 {
    background: #FF6D7F;
  }

  .image-2 {
    background: #278AB5;
  }

  .image-3 {
    background: #87DBA2;
  }

  .image-4 {
    background: #FFEBAE;
  }

  .image-5 {
    background: #32BEA6;
  }
</style>
