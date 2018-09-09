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
    <CongratsDialog v-if="showCongrateDialog" :id="1" isMobile="true" :audioFinished="audioFinished" @continue="nextPage"></CongratsDialog>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import ComponentButton from '@/components/Button'
import BaseCard from '@/components/cards/BaseCard'
import selectATeam from '@/data/selectATeam'
import CongratsDialog from '@/components/dialogs/CongratsDialog'
import DeviceManager from '@/helpers/deviceManager'
import AudioManager from '@/helpers/audioManager'

export default {
  components: {
    BaseCard,
    NavigationLayout,
    ComponentButton,
    CongratsDialog
  },

  data () {
    return {
      selected: null,
      showCongrateDialog: false,
      audioFinished: false
    }
  },

  computed: {
    team() {
      return selectATeam
    }
  },

  methods: {
    getButtonClassName (number) {
      return ['card', number === this.selected ? 'card--selected' : '']
    },

    handleButtonClick (number) {
     this.selected = number
    },

    nextPage () {
      this.$router.push('/courses')
    },

    finishedCompleteAudio () {
      this.audioFinished = true
    },

    continueButtonClick () {
      if (this.selected === null) return
      this.$store.commit('setTeam', this.selected)
      this.$store.commit('completeArchievement', 1)

      if (DeviceManager.isMobile()) {
        AudioManager.playAudio('unlocked_badge', this.$store.state.gender, this.finishedCompleteAudio)        
        this.showCongrateDialog = true
      }
      else {
        this.$router.push('/congrats/1')
      }
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
    display: flex;
    align-items: center;

    .image {
      width: 100px;
    }

    img {
      &.card-team-photo {
        display: block;
        object-fit: cover;
        height: auto;
        max-width: 100px;
        max-height: 100%;
      }
    }
    .title {
      width: calc(100% - 100px);
      font-family: 'Zilla Slab';
      font-weight: 300;
      font-size: 15px;
      color: #FFFFFF;
      letter-spacing: 1px;
      padding: 10px;
    }
  }
}
</style>
