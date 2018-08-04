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
        name: 'Nimasha Perera',
        points: '550',
        badges: [
          {
            name: 'badge name',
            image: 'achieve_img_3.svg'
          },
          {
            name: 'badge name 1',
            image: 'achieve_img_2.svg'
          },
          {
            name: 'badge name 1',
            image: 'achieve_img_1.svg'
          },
          {
            name: 'badge name 1',
            image: 'achieve_img_4.svg'
          }
        ]
      },
      menus: [
        {
          name: 'General',
          items: [
            {
              name: 'Achievements',
              icon: 'achievements-icon.svg',
              count: '50',
              link: '/achievements'
            },
            {
              name: 'Favorite Courses',
              icon: 'fav-courses-icon.svg',
              link: '/courses'
            },
            {
              name: 'My Team',
              icon: 'my-friends-icon.svg',
              link: '/team'
            }
          ]
        },
        {
          name: 'Settings',
          items: [
            {
              name: 'Add Code',
              icon: 'edit-login-details-icon.svg',
              link: '/code'
            },
            {
              name: 'Edit Profile',
              icon: 'update-interests-icon.svg'
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
