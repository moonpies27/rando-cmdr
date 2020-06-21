<template>
  <div>
    <div class="text-center text-gray-800 text-3xl font-semibold mt-12">
      <h1>Welcome to the...</h1>
      <h1>{{ chosenTitle }}</h1>
    </div>
    <div>
      <p class="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-center">
        Inspired by the <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSNNRrpJjhf1WrwwuZqUcg0K" class="no-underline hover:underline text-blue-500">Commander Vs. Series</a>, this is a simple app to allow you to choose random Commanders for yourself and your playgroup.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Welcome',
  data: () => {
    return {
      titles: [
        'Arena of the Arbitrary',
        'Susan Surandom',
        'Coliseum of Randomness',
        'Randomonium',
        'Randharmonicon'
      ],
      chosenTitle: 'Radomonium'
    }
  },
  methods: {
    chooseTitle () {
      this.chosenTitle = this.titles[Math.floor(Math.random() * this.titles.length) + 0]
    }
  },
  mounted () {
    window.setInterval(this.chooseTitle, 3000)
  }
}
</script>
