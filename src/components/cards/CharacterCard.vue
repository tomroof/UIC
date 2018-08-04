<template>
  <BaseCard @click="$emit('click')" :selected="selected">
    <div class="card-content">
      <img class="character-photo" :src="src" />
      <div v-if="text" class="text">{{text}}</div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from './BaseCard'

export default {
  props: ['src', 'text', 'selected'],
  components: {
    BaseCard
  }
}
</script>

<style scoped lang="scss">
  .card-content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 15px;
  }

  .character-photo {
    width: 80px;
  }

  .text {
    margin-top: 10px;
    font-weight: 600;
    font-size: 18px;
    font-family: 'Zilla Slab', serif;
    color: rgba(255,255,255,1);
  }
</style>
