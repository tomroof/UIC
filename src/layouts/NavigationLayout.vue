<template>
  <div class="container" >
    <NavigationControls
      :back="back"
      :menu="menu"
      :steps='steps'
      :close='close'
      :topImage="topImage"
      :closeCourseButton="closeCourseButton"
      @menuClick="showMenu = !showMenu"/>
    <slot />
    <transition name="slide-fade">
      <Menu v-show="showMenu" @closeClick="showMenu = !showMenu" />
    </transition>
  </div>
</template>

<script>

import NavigationControls from '@/components/NavigationControls'
import Menu from '@/components/shared/Menu'

export default {
  props: ['topImage', 'back', 'menu', 'steps', 'close', 'closeCourseButton'],

  name: 'NavigationLayout',

  components: {
    NavigationControls,
    Menu
  },

  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100vw);
  opacity: 0;
}

.menu {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
}

.container {
  position: relative;
  padding-bottom: 30px;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 13px;
  }
}
</style>
