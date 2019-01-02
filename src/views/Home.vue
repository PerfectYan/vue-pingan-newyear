<template>
  <div class="home">
    <Header :hasLatch="hasLatch"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  },
  data() {
    return {
      hasLatch: false
    }
  }
}
</script>
