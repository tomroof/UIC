<template>
  <div class="header">
    <div class="avatar-holder">
      <div class="avatar"
        :style="{ backgroundImage: `url(${$store.state.character})` }"
      >
      </div>
    </div>

    <div class="info">
      <div class="name">{{user.name}}</div>
      <div class="points">{{user.points}} Points</div>
      <div class="badges">
        <span class="badge"
          v-for="(badge, index) in badges"
          :key="index">
          <img :src="getAvatar(badge.badge_image)" alt="" :title="badge.name">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AccountHeader',
  props: ['user'],

  computed: {
    ...mapGetters(['getAchievements']),
    badges () {
      var results = []
      var index = 0
      for (var i = 0; i < this.getAchievements.length; i++) {
        var item = this.getAchievements[i]
        if (item.completed) {
          results[index] = item
          index ++
        }
      }
      return results
    }
  },

  methods: {
    getAvatar (name) {
      return name.length ? require(`../assets/${name}`) : require(`../assets/account-img.jpg`)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin: 20px 0 40px 0;
}

.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin: 0;

  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.12 ) 0 0 0 8px;
  background-color: #FFEBAE;
}

.info {
  padding: 15px 0 0 25px;
}

.name {
  font-family: 'Lato';
  font-size: 25px;
  color: #FFFFFF;
  letter-spacing: 0;
}

.points {
  opacity: 0.5;
  font-family: 'Lato';
  font-weight: 300;
  font-size: 17px;
  color: #FFFFFF;
  letter-spacing: 0;
  padding-top: 4px;
}

.badges {
  display: flex;
  padding-top: 8px;
}

.badge {
  width: 30px;
  height: 30px;
  margin-right: 5px;

  img {
    width: 100%;
  }
}


</style>
