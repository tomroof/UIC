<template>
  <NavigationLayout :back="true" :menu="true">
    <AccountHeader :user="user"></AccountHeader>
    <!-- <button @click="changeLang">
      lang
    </button> -->


    <MenuList
      v-for="(menu, index) in getI18n"
      :key="index"
      :name="menu.name"
      :items="menu.items"
    ></MenuList>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import MenuList from '@/components/shared/MenuList'
import AccountHeader from '@/components/AccountHeader'
import config from '@/data/config'

import { i18n } from '@/lang'

export default {
  name: 'Account',

  components: {
    NavigationLayout,
    MenuList,
    AccountHeader
  },

  data () {
    return {
      user: {
        avatar: 'account-img.jpg',
        points: this.$store.state.points
      }
    }
  },

  computed: {
    getI18n() {
      return config().restText.profile
    }
  },

  methods: {
    changeLang() {
     i18n.locale = i18n.locale === 'en' ? 'es' : 'en'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 40px 0;
}
</style>
