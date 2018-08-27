<template>
  <NavigationLayout :back="true"  :menu="true" :topImage="$store.state.character">
    <CongratsDialog :id="$route.params.id" :isMobile="false"></CongratsDialog>
  </NavigationLayout>
</template>

<script>
import ComponentButton from '@/components/Button'
import CongratsDialog from '@/components/dialogs/CongratsDialog'
import NavigationLayout from '@/layouts/NavigationLayout'

export default {
  name: 'CongratsPage',
  components: {
    ComponentButton,
    NavigationLayout,
    CongratsDialog
  },
}
</script>

