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
    <div class="cookie-bar" v-if="showCookieBar">
      <div>
        This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our <a href="/terms">Cookie Policy</a>
      </div>
      <div class="close-button">
        <img src="@/assets/close-white.svg" @click="closeCookieBar">
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
  data () {
    return {
      showCookieBar: true,
    }
  },
  methods: {
    navigateToSelectCharacter () {
      this.$router.push('/select-character')
    },

    closeCookieBar () {
      this.showCookieBar = false
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  margin-bottom: 100px;
}
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

.cookie-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  font-size: 12px;
  background-color: rgba(10, 30, 30, 0.9);
  color: white;
  padding: 15px;
  font-weight: 300;

  a {
    color: white;
  }

  .close-button {
    padding: 10px 0px 10px 10px;
  }
}

</style>
