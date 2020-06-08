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
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Spin the Wheel!
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Edit Player List
              </a>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data: () => {
    return {
      titles: [
        'Arena of the Arbitrary',
        'Susan Surandom',
        'Coliseum of Randomness',
        'Randomonium',
        'Randharmonicon'
      ],
      players: [
        'Johnathon',
        'Mike',
        'Rutledge',
        'Roger',
        'Josh'
      ],
      cards: []
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
