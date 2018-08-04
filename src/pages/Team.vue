<template>
  <NavigationHeaderImageLayout :back="true" :menu="true">
    <div class="image">
      <img src="@/assets/uic-school-front.jpg" alt="">
    </div>

    <div class="inner">
      <h1>University of Illinois School of Dentistry</h1>
    
      <div class="contacts">
        <div class="title">CONTACT</div>
        <div class="items">
          <div class="item">
            <div class="icon" :style="{background: `url(${require('@/assets/address.png')}) no-repeat center / contain`}" />
            <div class="info">801 S Paulina St, Chicago, IL 60612</div>
            <div class="arrow" :style="{background: `url(${require('@/assets/arrow-contacts.svg')}) no-repeat center / contain`}"/>
          </div>
          <div class="item">
            <div class="icon" :style="{background: `url(${require('@/assets/phone.png')}) no-repeat center / contain`}" />
            <div class="info">(312) 996-7555</div>
            <div class="arrow" :style="{background: `url(${require('@/assets/arrow-contacts.svg')}) no-repeat center / contain`}"/>
          </div>
          <div class="item">
            <div class="icon" :style="{background: `url(${require('@/assets/website.png')}) no-repeat center / contain`}" />
            <div class="info">Website</div>
            <div class="arrow" :style="{background: `url(${require('@/assets/arrow-contacts.svg')}) no-repeat center / contain`}"/>
          </div>
        </div>
      </div>
    </div>
  </NavigationHeaderImageLayout>
</template>

<script>
import NavigationHeaderImageLayout from '@/layouts/NavigationHeaderImageLayout'

export default {
  name: 'Account',

  components: {
    NavigationHeaderImageLayout
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 40px;
}
p {
  padding: 10px 0;
}
.contacts {
  font-family: 'Zilla Slab';
  font-size: 19px;
  color: rgba(255,255,255,0.7);
  line-height: 30px;
}

.image {
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;

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
