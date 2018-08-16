<template>
  <NavigationLayout :back="true" :menu="true">
    <h1>Select Coach</h1>
    <div class="character-box">
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
            @click="selectCard(card.value, card.sex)"
            :src="card.src"
            :text="card.text"
          />
        </div>
      </div>
    </div>
    <div class="continue-button">
      <ComponentButton @click="buttonHandler" :disabled="!selectedCard">Continue</ComponentButton>
    </div>
  </NavigationLayout>
</template>

<script>
import { isFinite, chunk } from 'lodash'
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
      selectedCard: false,
      selectedGender: null,
      value: {
        gender: null,
        character: null
      },
      cards: {
        gender: [
          {
            value: '1',
            sex: 'girl',
            src: require('@/assets/characters/character-girl-1.png')
          }, {
            value: '2',
            sex: 'boy',
            src: require('@/assets/characters/character-boy-1.png')
          },
          {
            value: '3',
            sex: 'girl',
            src: require('@/assets/characters/character-girl-2.png'),
          },
          {
            value: '4',
            sex: 'boy',
            src: require('@/assets/characters/character-boy-3.png'),
          },
          {
            value: '5',
            sex: 'girl',
            src: require('@/assets/characters/character-girl-3.png'),
          },
          {
            value: '6',
            sex: 'boy',
            src: require('@/assets/characters/character-boy-4.png'),
          },
          {
            value: '7',
            sex: 'girl',
            src: require('@/assets/characters/character-girl-4.png'),
          },
          {
            value: '8',
            sex: 'boy',
            src: require('@/assets/characters/character-boy-2.png'),
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
    selectCard (value, sex) {
      this.selectedCard = true      
      this.character = value
      this.selectedGender = sex

      if (this.step === 1) {
        this.value.gender = value
      } else if (this.step === 2) {
        return this.value.character = value
      }
    },
    buttonHandler(value) {
      if (!this.selectedCard) return
      this.cards.gender.map((element) => {
        if (element.value === this.character) {
          this.$store.commit('setCharacter', element.src)
        }
      })

      this.$store.commit('setGender', this.selectedGender)
      this.$router.push('/select-age')
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

  .character-box {
    margin-bottom: 120px;
  }

  .continue-button {
    width: 300px;
    margin: auto;
    position: fixed;
    bottom: 0px;
    margin-left: 18px;
  }
</style>
