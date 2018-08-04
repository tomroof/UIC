<template>
  <NavigationLayout :back="true" :menu="true">
    <h1>Cavity Prevention</h1>
    <TabsSwitcher :tabs="tabs">
      <div class="cards" slot="form_0">
        <div>
            <v-touch v-on:swipeleft="goToNextCard" v-on:swiperight="goToPrevCard" >
              <div class="card"
                    :key="index"
                    :class="{main: card == activeCard, prev: checkIsPrev(card), next: checkIsNext(card)}"
                    v-for="(card, index) in cards" >
                <img  src='@/assets/card.png' class="card">
                <div class="content">
                  <div class="title">{{card.name}}</div>
                  <div class="article">{{card.type}}</div>
                  <div class="text">Lorem ipsum dolor sit amet,consectetur adipiscing elit sed eiusmod tempor</div>

                  <ComponentButton
                          type="submit"
                          @click="$router.push('/course/1')"
                    >
                    Start
                  </ComponentButton>
                </div>
              </div>
            </v-touch>
        </div>
      </div>

      <div slot="form_1" class='reviews'>
        <ReviewCard v-if="review && review.author" v-for="(review, index) in reviews" :key="index" :review="review" />
      </div>
    </TabsSwitcher>
  </NavigationLayout>
</template>


<script>
import NavigationLayout from '@/layouts/NavigationLayout'
import TabsSwitcher from '@/components/shared/TabsSwitcher'
import ReviewCard from '@/components/cards/ReviewCard'

import ComponentButton from '@/components/Button'

// data
import reviews from '@/data/reviews'

export default {
  data: () => ({
    tabs: ['Lessons', 'Review', 'About'],
    activeCard: null,
    reviews
  }),
  components: {
    ReviewCard,
    TabsSwitcher,
    NavigationLayout,
    ComponentButton
  },

  computed: {
    cards () {
      return [0,1,2,3,4].map((e, i) => {
        return {
          name: 'Introduction ' + i,
          type: 'Article',
          desc: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit sed eiusmod tempor'
        }
      })
    }
  },

  mounted () {
    this.activeCard = this.cards[0]
  },

  methods: {
    goToNextCard () {
      let index = this.cards.indexOf(this.activeCard)
      this.activeCard = this.cards[index + 1]
    },

    goToPrevCard () {
      let index = this.cards.indexOf(this.activeCard)
      this.activeCard = this.cards[index - 1]
    },

    checkIsNext (card) {
      return !(this.activeCard == card) && !this.checkIsPrev(card)
    },

    checkIsPrev (card) {
      return this.cards.indexOf(card) < this.cards.indexOf(this.activeCard)
    }
  }
}
</script>

<style scoped lang='scss'>
.flip-list-move {
  transition: transform 1s;
}


  .navigation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-top: 40px;
    img {
      height: 17px;
      width: auto;
    }
  }

  h1 {
    margin-top: 20px;
    margin-bottom: 60px;
    color: #fff;
  }

  .cards .card {
    position: absolute;
    height: auto;
    width: 274px;
    box-shadow: 0 27px 36px 0 rgba(0,14,31,0.54);
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    transform: translateX(0px);

    &.main {
      z-index: 5;
    }

    &.next {
      z-index: 4;
      transform: translateX(20%) translateY(20px) scale(0.9);
    }

    &.prev {
      z-index: 4;
      transform: translateX(-20%) translateY(20px) scale(0.9);
    }

    &.one {
      right: 5px;
      z-index: 4;
      transform: scale(0.9);
      box-shadow: 0 27px 36px 0 rgba(0,14,31,0.54);
    }

    &.two {
      right: -25px;
      z-index: 3;
      transform: scale(0.8);
      box-shadow: 0 27px 36px 0 rgba(0,14,31,0.54);
    }

    &.three {
      right: -53px;
      z-index: 2;
      transform: scale(0.7);
      box-shadow: 0 27px 36px 0 rgba(0,14,31,0.54);
    }
  }

  .cards {
    position: relative;
    margin-top: 40px;
    width: 100%;
  }

  .content {
    z-index: 6;
    position: absolute;
    top: 115px;
    left: 28px;
    color: #fff;
    font-size: 18px;
    text-align: center;

  }
  .title {
    font-family: 'Zilla Slab';
    font-weight: normal;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    margin-top: 20px;
  }

  .article {
    font-family: 'Lato';
    font-weight: 300;
    opacity: 0.6;
    margin-bottom: 20px;
  }

  .text {
    font-family: 'Lato';
    font-weight: 300;
    opacity: 0.8;
    width: 220px;
    opacity: 0.7;
    font-size: 17px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 25px;
  }


  .reviews {
    margin-top: 60px;

    .card {
      margin-bottom: 15px;
    }
  }

</style>
