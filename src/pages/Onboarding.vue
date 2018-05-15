<template>
  <div class="container">
    <div>
      <div class="cards">
        <img src="@/assets/main_bg.png">
      </div>
      <div>
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing</p>
        <ComponentButton @click="navigateToSelectCharacter">Get Started</ComponentButton>
      </div>
      <router-link to="/login" class="login">Log In</router-link>
    </div>
  </div>
</template>


<script>
import ComponentButton from '@/components/Button'
export default {
  components: {
    ComponentButton
  },
  methods: {
    navigateToSelectCharacter () {
      this.$router.push('/select-character')
    }
  }
}
</script>

<style lang="scss" scoped>

.cards {
  padding-top: 35px;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}

h1 {
  font-size: 30px;
  text-align: center;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  margin: 1rem 0;
  font-weight: 600;
}

p {
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 19px;
  color: rgba(255,255,255,0.7);
  font-weight: 300;
  width: 90%;
  margin: 0 auto;
}

.login {
  font-family: 'Lato';
  text-decoration: underline;
  font-size: 18px;
  text-decoration: underline;
  color: rgba(255,255,255,0.7);
  display: inherit;
  text-align: center;
  margin-top: 50px;
}
</style>
