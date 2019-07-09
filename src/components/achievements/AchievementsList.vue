<template>
  <ul>
    <AchievementsListItem v-for="(achieve, index) in achievements" :key="index" :achieve="achieve" :index="index" />
  </ul>
</template>

<script>
import AchievementsListItem from './AchievementsListItem'

export default {
  name: 'AchivementsList',
  props: ['achievements'],
  components: {AchievementsListItem}
}
</script>

<style scoped lang="scss">

</style>
