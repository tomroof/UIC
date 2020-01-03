<template>
  <div class="menu">
    <div class="container">
      <NavigationControls
        :back="false"
        :close="true"
        @closeClick="$emit('closeClick')"
      />
      <base-card @click="goToRoute('/courses')">
        <img class="card-photo" src="@/assets/courses-img.jpg" />
        <div class="text">{{ getI18n.topics }}</div>
      </base-card>

      <base-card @click="goToRoute('/brush')">
        <img class="card-photo" src="@/assets/brush-timer-img.jpg" />
        <div class="text">{{ getI18n.brushTimer }}</div>
      </base-card>

      <div class="cards-row">
        <base-card @click="goToRoute('/account')">
          <div
            class="avatar-menu"
            :style="{ backgroundImage: `url(${$store.state.character})` }"
          ></div>
          <div class="text">{{ getI18n.profile }}</div>
        </base-card>

        <base-card @click="goToRoute('/about')">
          <img class="card-photo about-menu" src="@/assets/logo.svg" />
          <div class="text">{{ getI18n.about }}</div>
        </base-card>
      </div>
    </div>
    <span class="copyright"
      >©Copyright 2019 The Board of Trustees of the University of Illinois</span
    >
  </div>
</template>

<script>
import BaseCard from "@/components/cards/BaseCard";
import NavigationControls from "@/components/NavigationControls";
import config from "@/data/config";

export default {
  name: "Menu",

  components: {
    BaseCard,
    NavigationControls
  },

  computed: {
    getI18n() {
      return config().restText.menu;
    }
  },

  methods: {
    goToRoute(route) {
      this.$emit("closeClick");
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  background-image: linear-gradient(19deg, #5ea58e 10%, #0a6d60 81%);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  height: 100%;
}
.copyright {
  padding: 5px;
  margin: auto auto 0;
  font-family: "Zilla Slab";
  font-size: 15px;
  color: #ffffff;
}

.card {
  margin-bottom: 15px;
  overflow: hidden;
  margin: 7.5px;
  cursor: pointer;

  .text {
    font-family: "Zilla Slab";
    font-size: 18px;
    color: #ffffff;
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
  background-color: #ffebae;
}
.about-menu {
  height: 86px;
  background-position: 50% 5px;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #83b9d1;
  padding: 5px;
}
</style>
