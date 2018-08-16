<template>
  <div>
    <NavigationLayout :closeCourseButton="true" :menu="true">
      <CourseContainer :curseId="curseId" :clickRewardContinue="clickRewardContinue" @moduleCompleted="moduleCompleted"></CourseContainer>
    </NavigationLayout>
    <RewardCard v-if="showRewardCard" @continue="rewardContinue"></RewardCard>
  </div>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import CourseContainer from '@/containers/Course'
import RewardCard from '@/components/cards/RewardCard'
import AudioManager from '@/helpers/audioManager'
import { mapGetters } from 'vuex'

export default {
  name: 'CoursePage',

  data () {
    return {
      showRewardCard: false,
      clickRewardContinue: false
    }
  },

  components: {
    NavigationLayout,
    CourseContainer,
    RewardCard
  },

  computed: {
    ...mapGetters(['getCourses']),
    curseId () {
      if (this.$route.params.url_prefix === null || this.$route.params.url_prefix.length === 0) {
        return 0
      } 

      for (var i = 0; i < this.getCourses.length; i++) {
        var q = this.getCourses[i];
        if (q.url_prefix === this.$route.params.url_prefix) {
          return q.id
        }
      }
    }
  },

  methods: {
    moduleCompleted () {
      this.showRewardCard = true
      this.clickRewardContinue = false
      AudioManager.playAudio('good_job')
    },
    rewardContinue () {
      this.showRewardCard = false
      this.clickRewardContinue = true
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
