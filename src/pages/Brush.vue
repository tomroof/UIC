<template>
  <NavigationLayout :back="true" :menu="true">
    <h4>We're working on it!</h4>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'

export default {
  name: 'Account',

  components: {
    NavigationLayout
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 90%;
  }
  h4 {
    color: #ffffff;
    font-weight: 300;
    letter-spacing: 0.5px;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }
</style>
