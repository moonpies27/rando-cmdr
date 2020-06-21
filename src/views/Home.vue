<template>
  <div>
    <div class="flex flex-col min-h-screen flex-grow -mb-10">
      <Welcome />
      <Controls />
      <Results />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import Controls from '@/components/Controls.vue'
import Results from '@/components/Results.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Welcome,
    Controls,
    Results,
    Footer
  }
}
</script>
