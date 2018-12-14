<template>
  <NavigationLayout :back="true" :menu="true">
    <AccountHeader :user="user"></AccountHeader>
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
      return this.$t("message.restText.profile")
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 40px 0;
}
</style>
