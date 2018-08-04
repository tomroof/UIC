<template>
  <div class="congrats-page">
    <div class="header">
      <img src="@/assets/congrats-img.svg" alt="">
      <h1>I Know My Teeth</h1>
      <h3>+100 <span>points</span></h3>
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
      <div class="icon"><img src="@/assets/share-icon.svg" alt="share"></div>
      <div class="icon" @click="$router.push('/achievements')"><img src="@/assets/achievments-icon.svg" alt="achievements"></div>
    </div>
  </div>
</template>

<script>
import ComponentButton from '@/components/Button'

export default {
  components: {
    ComponentButton
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
    font-size: 25px;
    margin: 1rem 0 0.5rem 0;
  }
  h3 {
    font-family: 'Zilla Slab';
    font-size: 22px;
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
  position: absolute;
  z-index: 10;
  width: 100%;
  bottom: 0;

  .icon {
    padding: 25px;
  }
}

</style>
