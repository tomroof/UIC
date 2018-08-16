<template>
  <nav>
    <h2>{{name}}</h2>
    <ul class="menu-list">
      <li v-for="(item, index) in items" :key="index" @click="goToRoute(item.link)">
        <div class="col">
          <img  class="icon" :src="getAvatar(item.icon)" alt="">
          <div class="title">{{item.name}}</div>
        </div>
        <div class="col">
          <div class="count" v-if="item.count">{{item.count}}+</div>
          <div class="next-btn"><img src="@/assets/arrow-right.svg" alt=""></div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    'name': String,
    'items': Array
  },

  methods: {
    getAvatar (name) {
      return name.length ? require(`../../assets/${name}`) : require(`../../assets/fav-courses-icon.svg`)
    },

    goToRoute (link) {
      link ? this.$router.push(link) : null
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  margin-top: 10px;
  margin-bottom: 40px;
}

li {
  display: flex;
  justify-content: space-between;

  cursor: pointer;
  list-style: none;
  font-family: 'Lato';
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.05);
    position: absolute;
    bottom: 0;
    left: 40px;
  }

  .col {
    display: flex;
    align-items: center;
  }

  .icon {
    margin: 15px;
    margin-left: 0;
  }

  .title {
    font-family: 'Lato';
    font-weight: 300;
  }

  .count {
    font-family: 'Lato';
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;

    background: #278AB5;
    border-radius: 100px;
    padding: 4px 10px;

    margin-right: 10px;
  }
}

h2 {
  opacity: 0.3;
  font-family: 'Lato';
  font-size: 12px;
  font-weight: 300;
  color: #FFFFFF;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}
</style>
