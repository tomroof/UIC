<template>
  <NavigationLayout :back="true">
    <h1>{{ getI18n.aсhievements }}</h1>
    <div :class="{'badge-button': layout === 'badge', 'list-button': layout === 'list'}" @click="selectLayout()">{{ getI18n.view }}</div>
    <div class="badge-layout" v-if="layout === 'badge'">
      <div
        v-for="(row, index) in rows"
        :key="index"
        class="badge-row"
      >
        <div
          v-for="card in row"
          :key="card.id"
          class="badge-card-wrapper"
        >
          <img :src="getBadgeImage(card.image)" alt="" :title="card.name">
        </div>
      </div>
    </div>

    <div class="list-layout" v-else>
      <AchievementsList :achievements="getAchievements" />
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import Switcher from '@/components/CoursesSwitcher'
import AchievementsList from '@/components/achievements/AchievementsList'

// data
import achievements from '@/data/en-config/achievements'
import { mapGetters } from 'vuex'
import { chunk } from 'lodash'

export default {
  components: {
    NavigationLayout,
    Switcher,
    AchievementsList
  },

  computed: {
    ...mapGetters(['getAchievements']),
    rows () {
      var res = []
      var index = 0
      for (var i = 0; i < this.getAchievements.length; i++) {
        console.log('getAchievements', this.getAchievements)
        if (this.getAchievements[i].completed) {
          res[index] = this.getAchievements[i]
          index ++
        }
      }
      return chunk(res, 3)
    },

    getI18n() {
      return this.$t("message.restText")
    }
  },

  data () {
    return {
      layout: 'badge',
      menuNames: [
        {name: 'Badges', active: true},
        {name: 'Leaderboard'}
        ]
    }
  },

  methods: {
    selectLayout () {
      if (this.layout === "badge") {
        this.layout = "list"
      } else {
        this.layout = "badge"
      }
    },

    getBadgeImage (name) {
      return name.length ? require(`../assets/${name}`) : require(`../assets/account-img.jpg`)
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  margin-top: 20px;
}

.badge-button {
  color: rgba(255, 255, 255, 0.3);
  font-size: 20px;
  cursor: pointer;
}

.list-button {
  color: rgba(255, 109, 127, 1.0);
  font-size: 20px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 109, 127, 1.0);
  width: 43px;
}

.badge-layout {
  margin-top: 20px;
}
.badge-row {
  display: flex;
  margin-bottom: 15px;
}

.badge-card-wrapper {
  margin-right: 35px;
  margin-bottom: 20px;

  img {
    width: 100px;
  }
}

@media screen and (max-width : 414px) {
  .badge-card-wrapper {
    img {
      width: 88px;
    }
  }
}

@media screen and (max-width : 360px) {
  .badge-card-wrapper {
    img {
      width: 83px;
    }
  }
}

@media screen and (max-width : 320px) {
  .badge-card-wrapper {
    img {
      width: 70px;
    }
  }
}

</style>
