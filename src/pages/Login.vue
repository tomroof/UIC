<template>
  <NavigationLayout :back="true">
    <LoginForm @submitForm="handleLogin" />
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'

// forms
import LoginForm from '@/forms/LoginForm'

export default {
  name: 'LoginPage',
  components: {
    NavigationLayout,
    LoginForm
  },

  methods: {
    handleLogin (e) {
      this.$router.push('/achievements')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
