<template>
  <div>
    <NavigationLayout :closeCourseButton="true" :menu="true">
      <CourseContainer :courseId="courseId" :clickRewardContinue="clickRewardContinue" @refreshPage="refreshPage" @moduleCompleted="moduleCompleted"></CourseContainer>
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

import config from '@/data/config'

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
    courseId () {
      if (this.$route.params.url_prefix === null || this.$route.params.url_prefix.length === 0) {
        return 0
      }

      for (var i = 0; i < this.getCourses.length; i++) {
        var q = this.getCourses[i];
        if (q.url_prefix === this.$route.params.url_prefix) {
          return q.id
        }
      }
    },

    getI18nAudio() {
      return config().audio
    },
  },

  methods: {
    refreshPage () {
      this.showRewardCard = false
      this.clickRewardContinue = false
    },

    moduleCompleted () {
      this.showRewardCard = true
      this.clickRewardContinue = false
      AudioManager.playAudio(this.getI18nAudio.audio_good_job, this.$store.state.gender)
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
