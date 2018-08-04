<template>
  <NavigationLayout :back="true" :menu="true">
    <h1> Age Group </h1>
    <div class="content">
      <div
        class="avatar"
        :style="{ backgroundImage: `url(${$store.state.character})` }"
      >
      </div>
      <div class="age-buttons">
        <div
          :class="getButtonClassName(1)"
          @click="handleButtonClick(1)"
        >
          I am 8 or younger
        </div>
        <div
          :class="getButtonClassName(2)"
          @click="handleButtonClick(2)"
        >
          I am 9 or older
        </div>
      </div>
      <ComponentButton @click="$router.push('/select-team')">Continue </ComponentButton>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import ComponentButton from '@/components/Button'

export default {
  data () {
    return {
      selected: null
    }
  },
  methods: {
    getButtonClassName (number) {
      return ['age-button', number === this.selected ? 'age-button--selected' : '']
    },
     handleButtonClick (number) {
       this.selected = number
     }
  },
  components: {
    NavigationLayout,
    ComponentButton
  },

  mounted() {
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.avatar {
  margin: 30px 0;
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.12 ) 0 0 0 8px;
  width: 130px;
  height: 130px;
  background-position: 50% 15px;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #FFEBAE;
}

.age-buttons {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.age-button {
  font-family: 'Zilla Slab', sans-serif;
  background-color: #278AB5;
  border-radius: 50px;
  padding: 18px 22px 18px 22px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  color: #FFFFFF;
  font-size: 19px;
  letter-spacing: 0.94px;
  box-shadow: 0px 30px 29px -22px rgba(0, 0, 0, 0.39)
}

.age-button--selected {
  background-color: #32BEA6;
}
</style>
