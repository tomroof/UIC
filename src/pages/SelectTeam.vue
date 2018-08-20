<template>
  <NavigationLayout :back="true" :menu="true" :topImage="$store.state.character">
    <h1>My Dental Office</h1>
    <div class="content team">
      <base-card v-for="(item, index) in team" :key="item.title"
        :class="getButtonClassName(item.id)"
        @click="handleButtonClick(item.id)">
        <div :class="'image image-' + (index+1)">
          <img class="card-team-photo" :src="require(`@/assets/${item.img}`)" />
        </div>
        <div class="title">{{ item.title }}</div>
      </base-card>
      <div class="continue-button">
        <ComponentButton @click="continueButtonClick" :disabled="selected === null">Continue </ComponentButton>
      </div>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import ComponentButton from '@/components/Button'
import BaseCard from '@/components/cards/BaseCard'
import selectATeam from '@/data/selectATeam'

export default {
  data () {
    return {
      selected: null,
    }
  },
  methods: {
    getButtonClassName (number) {
      return ['card', number === this.selected ? 'card--selected' : '']
    },
    handleButtonClick (number) {
     this.selected = number
    },
    continueButtonClick () {
      if (this.selected === null) return
      this.$store.commit('setTeam', this.selected)

      this.$store.commit('completeArchievement', 1)
      this.$router.push('/congrats/1')
    }
  },
  components: {
    BaseCard,
    NavigationLayout,
    ComponentButton
  },
  computed: {
    team() {
      return selectATeam
    }
  }
}
</script>

<style lang="scss">
.continue-button {
  width: 300px;
  margin: auto;
  position: fixed;
  bottom: 0px;
  margin-left: 0px;
}
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
}
.team {
  .card {
    display: flex;
    flex-flow: row nowrap;

    margin-bottom: 15px;
    overflow: hidden;
    margin: 7.5px;
    cursor: pointer;
    width: 100%;

    .image {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }

    img {
      &.card-team-photo {
        display: block;
        width: 100px;
        height: 60px;
      }
    }
    .title {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      font-family: 'Zilla Slab';
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 0;
      padding: 10px;
    }
  }
}
</style>
