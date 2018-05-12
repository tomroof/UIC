<template>
  <div @click="$emit('click')" class="button">
    <slot></slot>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  font-family: 'Zilla Slab';
  font-weight: 500;
  font-size: 19px;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0.94px;

  background-color: #278ab5;
  border-radius: 100px;
  padding: 18px 22px 18px 22px;
  width: 190px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  color: #FFFFFF;
  box-shadow: 0px 30px 29px -22px rgba(0, 0, 0, 0.39)
}
</style>
