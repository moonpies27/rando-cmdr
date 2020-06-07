<template>
  <div>
      <h1>Results:</h1>
      <div>
        Players:
        <ul v-for="(player, index) in players" :key=index>
          <li>{{player}}</li>
        </ul>
        <br>
        Cards:
        <ul v-for="card in cards" :key=card.data.id>
          <li>{{card.data.name}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
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
  async mounted () {
    const ax = axios.create({
      baseURL: 'https://api.scryfall.com',
      timeout: 2000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    try {
      const searchURL = '/cards/random?q=is%3Acommander+f%3Acommander'
      const responses = []
      this.players.map(async () => {
        try {
          const response = await ax.get(searchURL)
          responses.push(response)
        } catch (err) {
          console.error(err)
        }
      })
      this.cards = responses
    } catch (err) {
      console.error(err)
    }
  }

}
</script>

<style>

</style>
