<template>
  <div class="relative bg-gray-50 overflow-hidden">
    <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center">
          <h2 class="text-5xl tracking-tight leading-10 font-extrabold text-gray-900">
            Welcome to the {{chooseTitle()}}
          </h2>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Inspired by the <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSNNRrpJjhf1WrwwuZqUcg0K" class="no-underline hover:underline text-blue-500">Commander Vs. Series</a>, this is a simple app to allow you to choose random Commanders for your playgroup.
          </p>
          <Results />
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Results from '@/components/Results.vue'

export default {
  components: {
    Results
  },
  data: () => {
    return {
      titles: [
        'Arena of the Arbitrary',
        'Susan Surandom',
        'Coliseum of Randomness',
        'Randomonium',
        'Randharmonicon'
      ]
    }
  },
  methods: {
    chooseTitle () {
      return this.titles[Math.floor(Math.random() * this.titles.length) + 0]
    }
  }
  // async mounted () {
  //   const ax = axios.create({
  //     baseURL: 'https://api.scryfall.com',
  //     timeout: 2000,
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   try {
  //     const searchURL = '/cards/random?q=is%3Acommander+f%3Acommander'
  //     const responses = []
  //     this.players.map(async () => {
  //       try {
  //         const response = await ax.get(searchURL)
  //         responses.push(response)
  //       } catch (err) {
  //         console.error(err)
  //       }
  //     })
  //     this.cards = responses
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
}
</script>

<style>

</style>
