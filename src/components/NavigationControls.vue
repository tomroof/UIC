<template>
  <div class="navigation">
    <img @click="$router.go(-1)" v-if="back" src="@/assets/back.png" alt="">
    <img @click="$router.go(-1)" v-if="close" src="@/assets/close.svg" alt="">
    <div class="steps">
      <div v-for="(step, index) in steps" :key="index">
        <img v-if="step && step.active" class='step-img' src="@/assets/active-step-dash.svg" alt="">
        <img v-else class='step-img' src="@/assets/step-dash.svg" alt="">
      </div>
    </div>
    <img v-if="menu" @click="$router.push('/menu')" src="@/assets/big_dots.png" alt="">
    <img v-if="closemenu" @click="$router.go(-1)" src="@/assets/close.svg" alt="">
  </div>
</template>

<script>
export default {
  props: ['back', 'menu', 'steps', 'close', 'closemenu']
}
</script>

<style scoped lang='scss'>
  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img.step-img {
      width: 25px;
      height: 6px;
      margin: 0 5px;
    }
  }

  .navigation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-top: 40px;
    img {
      height: 17px;
      width: auto;
    }
  }
</style>
