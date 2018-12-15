<template>
  <NavigationLayout :back="true" :menu="true">
 <!-- v-html="getI18n" -->
    <div class="inner terms" v-html="getI18n">

    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'

export default {
  name: 'Account',

  components: {
    NavigationLayout
  },

  computed: {
    getI18n() {
      return this.$t("message.terms")
    }
  }
}
</script>

<style>
  .terms p {
    padding: 10px 0;
    color: #ffffff;
  }

  .terms a {
    color: #ffffff;
  }
</style>

<style lang="scss" scoped>
.header {
  margin-bottom: 40px;
}
.contacts {
  font-family: 'Zilla Slab';
  font-size: 19px;
  color: rgba(255,255,255,0.7);
  line-height: 30px;
}

.image {
  position: fixed;
  top: -20px;
  left: 0;
  width: 100%;
  padding-bottom: 20px;

  img {
    display: block;
    width: 100%;
  }
}

.inner {
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;

  h1 {
    margin-top: 220px;
    font-family: 'Lato', sans-serif;
    font-size: 25px;
    color: #FFFFFF;
    letter-spacing: 0;
    max-width: 80%;
    font-weight: 300;
  }
  h4 {
    padding: 10px 0;
    color: #ffffff;
  }
  p {
    padding: 10px 0;
    color: #ffffff;
  }
  a {
    color: #ffffff;
    &:hover {
      text-decoration: none;
    }
  }
}

.title {
  opacity: 0.3;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 0.5px;
}

.item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  &:not(:first-child) {
    .info, .arrow {
      border-top: 1px solid rgba(255,255,255,0.05);
    }
  }
}

.items {
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.icon {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}

.info {
  font-family: 'Lato', sans-serif;
  padding: 10px 0;
  font-weight: 300;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  flex: 1 1 auto;
}

.arrow {
  width: 6px;
  height: 10px;
}
</style>
