<template>
  <NavigationLayout :back="true" :menu="true">
    <AccountHeader :user="user"></AccountHeader>
    <MenuList
      v-for="(menu, index) in menus"
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
      },
      menus: [
        {
          name: 'General',
          items: [
            {
              name: 'Favorite Courses',
              icon: 'fav-courses-icon.svg',
              link: '/courses'
            },
            {
              name: 'My Friends',
              icon: 'my-friends-icon.svg',
              link: '/team',
              count: '50',
            },
            {
              name: 'Achievements',
              icon: 'achievements-icon.svg',
              link: '/achievements'
            }
          ]
        },
        {
          name: 'Settings',
          items: [
            {
              name: 'Edit Login Details',
              icon: 'edit-login-details-icon.svg',
              link: '/select-character'
            },
            {
              name: 'Update Interests',
              icon: 'update-interests-icon.svg',
              link: '/code'
            }, 
            {
              name: 'Blocked Users',
              icon: 'block-users-icon.svg',
              link: '/code'
            }                       
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 40px 0;
}
</style>
