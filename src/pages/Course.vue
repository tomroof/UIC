<template>
  <div>
    <NavigationLayout :closeCourseButton="true" :menu="true">
      <CourseContainer :curseId="$route.params.id || 0" @moduleCompleted="moduleCompleted"></CourseContainer>
    </NavigationLayout>
    <RewardCard v-if="showRewardCard" @continue="rewardContinue"></RewardCard>
  </div>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import CourseContainer from '@/containers/Course'
import RewardCard from '@/components/cards/RewardCard'

export default {
  name: 'CoursePage',

  data () {
    return {
      showRewardCard: false
    }
  },

  components: {
    NavigationLayout,
    CourseContainer,
    RewardCard
  },

  methods: {
    moduleCompleted () {
      this.showRewardCard = true
    },
    rewardContinue () {
      this.showRewardCard = false
    }
  }
}
</script>

<style scoped lang="scss">
  .next-btn {
    background: #278AB5;
    box-shadow: 0 -1px 22px 0 rgba(52,84,122,0.08);
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 20;
  }
</style>
