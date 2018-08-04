<template>
  <NavigationLayout :back="true">
    <div class='container'>
      <div>
        <h1>Enter Code</h1>
        <div class="text">Please enter the code provider by your care giver</div>
        <CodeForm @submitForm="handleLogin" />
      </div>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'

// forms
import CodeForm from '@/forms/CodeForm'

export default {
  name: 'CodePage',
  components: {
    NavigationLayout,
    CodeForm
  },

  methods: {
    handleLogin (e) {
      this.$router.push('/account')
    }
  }
}
</script>

<style scoped lang="scss">
  .text {
    font-family: 'Zilla Slab';
    font-size: 19px;
    color: rgba(255,255,255,0.7);
    line-height: 30px;
    padding-bottom: 20px;
  }
</style>
