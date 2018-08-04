<template>
  <NavigationLayout :back="true" :menu="true">
    <h1>Introduction</h1>
    <div class="text">
      <p>A number of “dangerous drugs” have been in the news recently. These reports started to surface when Congress was having hearings about the painkiller, Vioxx.</p>
      <p>A Food and Drug Administration staff member testified in front of Congress that there are safety concerns about several medications.</p>
    </div>
  </NavigationLayout>
</template>

<script>
import NavigationLayout from '@/layouts/NavigationLayout'

export default {
  name: 'Account',

  components: {
    NavigationLayout
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
.text {
  font-family: 'Zilla Slab';
  font-size: 19px;
  color: rgba(255,255,255,0.7);
  line-height: 30px;
}
</style>
