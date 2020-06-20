<template>
  <div class="home">
    <Welcome />
    <Results />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import Results from '@/components/Results.vue'

export default {
  components: {
    Welcome,
    Results
  }
}
</script>
