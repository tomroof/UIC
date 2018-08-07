<template>
  <div class="header">
    <div class="avatar-holder">
      <img class="avatar-image" :src='avatarImage'>
      <div class="avatar"
        :style="{ backgroundImage: `url(${$store.state.character})` }"
      >
      </div>
    </div>

    <div class="info">
      <div class="name">{{user.name}}</div>
      <div class="points">{{user.points}} points</div>
      <div class="badges">
        <span class="badge"
          v-for="(badge, index) in user.badges"
          :key="index">
          <img :src="getAvatar(badge.image)" alt="" :title="badge.name">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountHeader',
  props: ['user'],

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
}

.info {
  padding: 10px 0 0 20px;
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
