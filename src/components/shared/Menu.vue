<template>
  <div class="menu">
    <div class="container">
      <NavigationControls
        :back="false"
        :close='true'
        @closeClick="$emit('closeClick')"/>
      <base-card @click="goToRoute('/courses')">
        <img class="card-photo" src="@/assets/curses-img.jpg" />
        <div class="text">Topics</div>
      </base-card>

      <base-card @click="goToRoute('/brush')">
        <img class="card-photo" src="@/assets/brush-timer-img.jpg" />
        <div class="text">Brush Timer</div>
      </base-card>

      <div class="cards-row">
        <base-card @click="goToRoute('/account')">
          <div class="avatar-menu"
            :style="{ backgroundImage: `url(${$store.state.character})` }"
          >
          </div>
          <div class="text">Profile</div>
        </base-card>

        <base-card @click="goToRoute('/about')">
          <img class="card-photo about-menu" src="@/assets/logo.svg" />
          <div class="text">About</div>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from '@/components/cards/BaseCard'
import NavigationControls from '@/components/NavigationControls'

export default {
  name: 'Menu',

  components: {
    BaseCard,
    NavigationControls
  },

  methods: {
    goToRoute (route) {
      this.$emit('closeClick')
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  background-image: linear-gradient(19deg, #5EA58E 10%, #0A6D60 81%);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  height: 100%;
}

.card {
  margin-bottom: 15px;
  overflow: hidden;
  margin: 7.5px;
  cursor: pointer;

  .text {
    font-family: 'Zilla Slab';
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    padding: 5px;
  }
}

.cards-row {
  display: flex;

  .card {
    flex: 1 1 50%;

    img {
      width: 100%;
    }
  }
}
.avatar-menu {
  height: 90px;
  background-position: 50% 5px;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #FFEBAE;
}
.about-menu {
  height: 86px;
  background-position: 50% 5px;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #83B9D1;
  padding: 5px;
}
</style>
