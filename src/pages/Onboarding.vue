<template>
  <div class="container">
    <div>
      <div class="cards" :style="{background: `url(${require('@/assets/artwork.svg')}) no-repeat center 15px / contain`}">
        <img src="@/assets/logo.svg">
      </div>

      <div class="content">
        <p>{{getI18n.description}}</p>
        <button-language/>
        <div class="button-wrapper">
          <ComponentButton @click="navigateToSelectCharacter">{{getI18n.getStarted}}</ComponentButton>
        </div>
      </div>
    </div>
    <div class="cookie-bar" v-if="showCookieBar">
      <div class="cookie-bar-content" v-html="getI18n.cookie">
      </div>
      <div class="close-button">
        <img src="@/assets/close-white.svg" @click="closeCookieBar">
      </div>
    </div>
  </div>
</template>


<script>
import ComponentButton from '@/components/Button'
import ButtonLanguage from '@/components/ButtonLanguage'
import config from '@/data/config'

export default {
  components: {
    ComponentButton,
    ButtonLanguage
  },

  mounted () {
    console.log('mountedddd', character)
    let character = this.$store.state.character
    let age = this.$store.state.age
    let team = this.$store.state.team

    if (character !== null && age !== null && team !== null) {
      this.$router.push('/courses')
    }
  },

  data () {
    return {
      showCookieBar: false,
    }
  },

  computed: {
    getI18n() {
      return config().restText.onboarding
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

  .cookie-bar-content {
    width: calc(100% - 50px);
  }
  .close-button {
    width: 50px;
    position: relative;

    img {
      position: absolute;
      right: 10px;
      top: 0px;
    }
  }
}


@media screen and (max-width : 768px) {
    .cookie-bar .close-button img {
      top: 5px;
    }
}

@media screen and (max-width : 480px) {
    .cookie-bar .close-button img {
      top: 10px;
    }
}


@media screen and (max-width : 320px) {
    .cookie-bar .close-button img {
      top: 15px;
    }
}

</style>
