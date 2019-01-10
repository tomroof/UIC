<template>
  <div class="wrapper">
    <div class="items" :class="{active: menu.active }" @click="handleMenuSwitch(menu)" :key="index" v-for="(menu, index) in menuList">
      {{ menu.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['menuNames'],

  data: () => ({
    currentMenu: 'All',
    menuList: this.menuNames || []
  }),

  watch: {
    menuNames:{
      handler: function (newVal) {
        this.menuList = newVal
      },
      immediate: true
    }
  },

  methods: {
    dropActiveTab () {
      this.$set(this, 'menuList', this.menuNames.map((m) => {
        return {
          name: m.name,
          active: false
        }
      }))
    },
    handleMenuSwitch (picked) {
      this.dropActiveTab()
      this.menuList.find((m) => m.name === picked.name).active = true
    }
  }
}
</script>


<style lang="scss" scoped>
  .wrapper {
    display: flex;
    margin: 20px 0;
  }

  .items {
    font-weight: 500;
    opacity: 0.6;
    font-size: 20px;
    color: #FFFFFF;
    line-height: 10px;
    margin-right: 22px;
    cursor: pointer;
    font-family: 'Zilla Slab';
    font-weight: 600;
    letter-spacing: 0.3px;

    &.active {
      color: #FF6D7F;
      text-decoration: underline;
    }
  }
</style>
