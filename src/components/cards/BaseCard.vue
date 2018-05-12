<template>
  <div @click="$emit('click')" :class="['card', selected ? 'card--selected': '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['selected']
}
</script>

<style scoped lang="scss">
  .card {
    border: 2px solid rgba(0, 0, 0, 0);
    height: 100%;
    background: #25606B;
    border-radius: 10px;
    box-shadow: rgba(33, 73, 95, 0.06) 0 4px 6px;
  }
  .card--selected {
    background:linear-gradient(rgba(39, 138, 181, 0.55), rgba(39, 138, 181, 0.8));
    border: 2px solid #278AB5;
  }
</style>
