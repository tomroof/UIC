<template>
  <div class="mobile-dialog">
    <div class="content">
      <div class="header">
        <div class="top">
          <img :src="$store.state.character">
        </div>
      </div>

      <div class="section">
        <div class="title">{{title}}</div>
      </div>

      <div class="play-button" @click="playModule">
        <img :src="require('../../assets/play.png')">
      </div>
    </div>
  </div>
</template>

<script>

import AudioManager from '@/helpers/audioManager'

export default {
  name: 'ModuleStartDialog',
  props: ['title', 'audio'],
  components: {
    AudioManager
  },

  data () {
    return {
      rewardTitle: '',
      rewardPoint: 0
    }
  },

  methods: {
    playModule () {
      this.$emit('hide')
      AudioManager.playAudio(this.audio, this.$store.state.gender, this.endedIntroAudio)
    },

    endedIntroAudio () {
      this.$emit('endedAudio')
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.top {
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.12 ) 0 0 0 4px;
  width: 100px;
  height: 100px;
  background-position: 50% 5px;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: #FFEBAE;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.content {
  text-align: center;
  position: relative;
  width: calc(100% - 40px);
  height: 350px;
  margin-top: 120px;
  margin-left: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #26606b;
  .header {
    padding-top: 30px;
  }

  .title {
    font-weight: 600;
    font-size: 24px;
    margin-top: 20px;
    color: white;
  }
}


.header {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  align-content: center;
  align-items: center;

  padding-top: 60px;
  padding-bottom: 40px;
}

.section {
  text-align: center;
}

.play-button {
  pointer: cursor;
  position: absolute;
  left: calc(50% - 40px);
  bottom: -30px;
  background-color: #278ab4;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
  img {
    margin: auto;
    margin-left: 8px;
    margin-top: 22px;
    width: 20px;
  }
}


</style>
