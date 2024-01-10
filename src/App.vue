<script>
import AppHeader from './components/AppHeader.vue'
import { store } from './store.js';
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      store
    }
  }
}
</script>
<template lang="">
  <AppHeader />
</template>
<style lang="scss" scoped>
  
</style>