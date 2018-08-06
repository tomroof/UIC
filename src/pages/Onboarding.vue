<template>
  <div class="container">
    <div>
      <div class="cards" :style="{background: `url(${require('@/assets/artwork.svg')}) no-repeat center 15px / contain`}">
        <img src="@/assets/logo.svg">
      </div>

      <div class="content">
        <h1>Welcome</h1>
        <p>University of Illinois at Chicago College of Dentistry presents a game for you to learn better oral hygiene.</p>
        <div class="button-wrapper">
          <ComponentButton @click="navigateToSelectCharacter">Get Started</ComponentButton>
        </div>
      </div>
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
    width: 200px;
    height: auto;
    margin: 0 auto;
    display: inherit;
  }
}

h1 {
  font-size: 30px;
  text-align: center;
  font-family: 'Zilla Slab', serif;
  color: rgba(255,255,255,1);
  margin: 1rem 0;
  font-weight: 300;
}

p {
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 19px;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.2px;
  line-height: 28px;
  max-width: 300px;
  margin: 0 auto;
}

.login {
  font-family: 'Gotham';
  text-decoration: underline;
  font-size: 18px;
  color: rgba(255,255,255,0.7);
  text-align: center;
  margin-top: 20px;
  display: inline-block;
  line-height: 25px;

}

.content {
  margin-top: 60px;
}

.button-wrapper {
  width: 216px;
  margin: 0 auto;
  margin-top: 50px;
}

.login-wrapper {
  text-align: center;
}
</style>
