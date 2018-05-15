<template>
  <div class="tabs-switcher">
    <div class="tabs">
      <div class="tab"
        v-for="(tab, index) in tabs"
        :key="tab"
        :class="{active: index == activeTab}"
        @click="activeTab = index">
        {{tab}}
      </div>
    </div>
    <div class="tabs-content">
      <slot v-for="(tab, index) in tabs" :name="'form_' + index" v-if="activeTab == index" />
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs-switcher",

  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      activeTab: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs-switcher {
    border-top: 0;
  }

  .tabs {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    border: 0;

    .tab {
      transition: all 0.2s ease;
      font-weight: 500;
      opacity: 0.6;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 10px;
      margin-right: 22px;
      cursor: pointer;
      font-family: 'Zilla Slab';
      font-weight: 600;
      letter-spacing: 1px;

      &.active {
        opacity: 1;
        color: #FF6D7F;
        text-decoration: underline;
      }
    }
  }

</style>
