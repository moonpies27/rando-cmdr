<template>
  <div class="home">
    <Welcome />
    <Controls />
    <Results />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import Controls from '@/components/Controls.vue'
import Results from '@/components/Results.vue'

export default {
  components: {
    Welcome,
    Controls,
    Results
  }
}
</script>
