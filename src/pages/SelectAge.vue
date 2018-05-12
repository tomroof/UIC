<template>
  <NavigationLayout :back="true" :menu="true">
    <h1> Age Group </h1>
    <div class="content">
      <div
        class="avatar"
        :style="{ backgroundImage: `url(${require('@/assets/characters/character-girl-3.png')}` }"
      >
      </div>
      <div class="age-buttons">
        <div
          :class="getButtonClassName(1)"
          @click="handleButtonClick(1)"
        >
          3-5 years
        </div>
        <div
          :class="getButtonClassName(2)"
          @click="handleButtonClick(2)"
        >
          5-7 years
        </div>
        <div
          :class="getButtonClassName(3)"
          @click="handleButtonClick(3)"
        >
          7-10 years
        </div>
        <div
          :class="getButtonClassName(4)"
          @click="handleButtonClick(4)"
        >
          10+ years
        </div>
      </div>
      <ComponentButton @click="$router.push('/courses')">Continue </ComponentButton>
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
  }
}
</script>

<style>
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
  font-family: 'Gotham';
  text-transform: uppercase;
  background-color: #2E4A6E;
  border-radius: 50px;
  padding: 29px 22px 18px 22px;
  width: 150px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  color: #FFFFFF;
}

.age-button--selected {
  background-color: #278ab5;
}
</style>
