<template>
  <NavigationLayout :back="true"  :menu="true" :topImage="$store.state.character">
    <div class="congrats-page">
      <div class="header">
        <img src="@/assets/congrats-img.svg" alt="">
        <h1>{{rewardTitle}}</h1>
        <h3>+{{rewardPoint}} <span>points</span></h3>
      </div>

      <div class="section">
        <h1>Congrats!</h1>
        <div class="subheading">
          You unlocked a new badge!
        </div>
        <ComponentButton type="submit" @click="$router.push('/courses')">
          Continue
        </ComponentButton>
      </div>

      <div class="footer">
        <div class="icon"><img src="@/assets/user_icon.svg" alt="share"></div>
        <div class="icon" @click="$router.push('/achievements')"><img src="@/assets/achievments-icon.svg" alt="achievements"></div>
      </div>
    </div>
  </NavigationLayout>
</template>

<script>
import ComponentButton from '@/components/Button'
import NavigationLayout from '@/layouts/NavigationLayout'
import AudioManager from '@/helpers/audioManager'

export default {
  name: 'CongratsPage',
  components: {
    ComponentButton,
    NavigationLayout
  },
  mounted() {
    switch (parseInt(this.$route.params.id)) {
      case 1: 
        this.rewardTitle = 'Profile Completed'
        this.rewardPoint = 100
        break;

      case 2:
        this.rewardTitle = 'Cavity Monster Hero'
        this.rewardPoint = 100
        break;
    }

    AudioManager.playAudio('unlocked_badge')
  },
  data () {
    return {
      rewardTitle: '',
      rewardPoint: 0
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  // background-image: url('../assets/confetti.png');

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  align-content: center;
  align-items: center;

  padding-top: 60px;
  padding-bottom: 40px;
  h1 {
    font-weight: 300;
    font-size: 30px;
    margin: 1rem 0 0.5rem 0;
  }
  h3 {
    font-size: 27px;
    font-weight: 100;
    color: #FFFFFF;
    font-weight: normal;
    span {
      font-size: 16px;
    }
  }
}

.section {
  text-align: center;

  h1 {
    text-align: center;
    /* Congrats!: */
    font-family: 'Zilla Slab';
    font-size: 40px;
    font-weight: normal;
    color: #FFFFFF;
    text-align: center;
    line-height: 20px;
    margin: 1rem 0;
  }

  .subheading {
    opacity: 0.5;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
  }

  .button {
    margin-top: 50px;
    position: relative;
    z-index: 11;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  z-index: 10;
  .icon {
    padding: 25px;
  }
}

</style>
