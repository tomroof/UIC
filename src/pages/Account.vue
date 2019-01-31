<template>
  <NavigationLayout :back="true" :menu="true">
    <AccountHeader :user="user"></AccountHeader>
    <MenuList
      v-for="(menu, index) in getI18n"
      :key="index"
      :name="menu.name"
      :items="menu.items"
    ></MenuList>
    <ButtonLanguage />
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import MenuList from '@/components/shared/MenuList'
import AccountHeader from '@/components/AccountHeader'
import ButtonLanguage from '@/components/ButtonLanguage'
import config from '@/data/config'

import { i18n } from '@/lang'

export default {
  name: 'Account',

  components: {
    NavigationLayout,
    MenuList,
    AccountHeader,
    ButtonLanguage
  },

  data () {
    return {
      user: {
        avatar: 'account-img.jpg',
        points: this.$store.state.points,
        id: this.$store.state.uuid
      }
    }
  },

  computed: {
    getI18n() {
      return config().restText.profile
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 40px 0;
}
</style>
