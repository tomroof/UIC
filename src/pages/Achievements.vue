<template>
  <NavigationLayout :back="true" :menu="true">
    <h1>Aсhievements</h1>
    <Switcher :menuNames='menuNames'/>
    <AchievementsList :achievements="achievements" />
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import Switcher from '@/components/CoursesSwitcher'
import AchievementsList from '@/components/achievements/AchievementsList'

// data
import achievements from '@/data/achievements'

export default {
  components: {
    NavigationLayout,
    Switcher,
    AchievementsList
  },

  data () {
    return {
      achievements,
      menuNames: [
        {name: 'Badges', active: true},
        {name: 'Leaderboard'}
        ]
    }
  }

}
</script>

<style scoped lang="scss">
ul {
  margin-top: 40px;
}
</style>
