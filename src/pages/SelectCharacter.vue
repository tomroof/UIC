<template>
  <NavigationLayout :back="true" :menu="true">
    <h1>Select A Character</h1>
    <div>
      <div
        v-for="(row, index) in rows"
        :key="index"
        class="characters-row"
      >
        <div
          v-for="card in row"
          :key="card.value"
          class="character-card-wrapper"
        >
          <CharacterCard
            :selected="isCardSelected(card.value)"
            @click="selectCard(card.value)"
            :src="card.src"
            :text="card.text"
          />
        </div>
      </div>
    </div>
    <div class="continue-button">
      <ComponentButton @click="nextStep" >Continue</ComponentButton>
    </div>
  </NavigationLayout>
</template>

<script>
import { isFinite, inRange, chunk } from 'lodash'
import NavigationLayout from '@/layouts/NavigationLayout'

import CharacterCard from '@/components/cards/CharacterCard'
import ComponentButton from '@/components/Button'

export default {
  beforeRouteEnter (to, from, next) {
    const { step } = to.query
    if (!isFinite(step) || step !== 1) {
      return next({ path: to.path, query: { step: 1 } })
    }
    next()
  },
  data () {
    return {
      value: {
        gender: null,
        character: null
      },
      cards: {
        gender: [
          {
            value: 'girl',
            src: require('@/assets/characters/character-girl-1.png'),
            text: "Girl"
          }, {
            value: 'boy',
            src: require('@/assets/characters/character-boy-1.png'),
            text: "Boy"
          }
        ],
        boys: [
          {
            value: '1',
            src: require('@/assets/characters/character-boy-1.png'),
          },
          {
            value: '2',
            src: require('@/assets/characters/character-boy-2.png'),
          },
          {
            value: '3',
            src: require('@/assets/characters/character-boy-3.png'),
          },
          {
            value: '4',
            src: require('@/assets/characters/character-boy-4.png'),
          },
        ],
        girls: [
          {
            value: '1',
            src: require('@/assets/characters/character-girl-1.png'),
          },
          {
            value: '2',
            src: require('@/assets/characters/character-girl-2.png'),
          },
          {
            value: '3',
            src: require('@/assets/characters/character-girl-3.png'),
          },
          {
            value: '4',
            src: require('@/assets/characters/character-girl-4.png'),
          },
        ]
      }
    }
  },
  components: {
    NavigationLayout,
    CharacterCard,
    ComponentButton
  },
  computed: {
    step () {
      return Number(this.$route.query.step)
    },
    rows () {
      let res = []
      if (this.step === 1) {
        res = this.cards.gender
      } else if (this.step === 2 && this.value.gender === 'boy') {
        res = this.cards.boys
      } else if (this.step === 2 && this.value.gender === 'girl') {
        res = this.cards.girls
      }
      return chunk(res, 2)
    }
  },
  methods: {
    isCardSelected (value) {
      if (this.step === 1) {
        return this.value.gender === value
      } else if (this.step === 2) {
        return this.value.character === value
      }
    },
    selectCard (value) {
      if (this.step === 1) {
        this.value.gender = value
      } else if (this.step === 2) {
        return this.value.character = value
      }
    },
    nextStep() {
      if (this.value.gender) {
        const { currentRoute } = this.$router
        if (this.step === 1) {
          this.step = 2
          this.$router.push({ path: currentRoute.path, query: { step: 2 } })
        } else {
          this.$router.push('/select-age')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .characters-row {
    display: flex;
    margin-bottom: 15px;
  }

  .character-card-wrapper {
    flex: 1;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .continue-button {
    margin-top: 100px;
  }
</style>
