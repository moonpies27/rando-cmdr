<template>
  <div>
    <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div class="rounded-md shadow">
        <button @click="assignCommanders" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Spin the Wheel!
        </button>
      </div>
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <button @click="editPlayers" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Edit Player List
        </button>
      </div>
    </div>
    <div v-if="showEdit" class="mt-10 text-gray-700 text-center">
      <h2 class="mb-6">Current Player List</h2>
      <ul>
        <li v-for="(p, idx) in players" :key=idx>{{ p }} <button @click="removePlayer(idx)" class="bg-red-400 px-1 text-xs text-white rounded-md">X</button></li>
      </ul>
      <div class="w-64 mx-auto">
        <div class="mt-6 flex rounded-md shadow-sm">
          <div class="relative flex-grow focus-within:z-10">
            <input id="addPlayer" class="form-input block w-full h-full border border-gray-300 rounded-none rounded-l-md pl-4 transition ease-in-out duration-150 sm:text-sm sm:leading-5" placeholder="Teferi" />
          </div>
          <button @click="addPlayer" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
            <span class="ml-2">Add</span>
          </button>
        </div>
      </div>
    </div>
    <div v-if="pListLength == 0" class="mt-6 text-base text-gray-500">
      Your player list is empty. Add some players!
    </div>
    <div v-else class="mt-12 max-w-md mx-auto">
      <table class="table-auto">
        <thead class="text-gray-600">
          <th class="px-4 py-2">Player</th>
          <th class="px-4 py-2">Commander</th>
        </thead>
        <tbody class="text-gray-700">
          <tr v-for="(p, idx) in players" :key=idx>
            <td class="px-10">{{ p }}</td>
            <td>
              <p>
                <img :src="imgSrc(idx)" class="w-40" />
                <a :href="scryfallURI(idx)" target="_blank" class="underline">{{ cardTitle(idx) }}</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const ax = axios.create({
  baseURL: 'https://api.scryfall.com',
  timeout: 2000,
  headers: {
    Accept: 'application/json'
  }
})

export default {
  data: () => {
    return {
      showEdit: false,
      cards: [],
      players: []
    }
  },
  computed: {
    pListLength () {
      return this.players.length
    }
  },
  methods: {
    cardTitle (idx) {
      if (this.cards[idx] && this.cards[idx].name) {
        return this.cards[idx].name
      } else {
        return 'Waiting to spin!'
      }
    },
    imgSrc (idx) {
      if (this.cards[idx]) {
        return this.cards[idx].image_uris.normal
      } else {
        return ''
      }
    },
    scryfallURI (idx) {
      if (this.cards[idx]) {
        return this.cards[idx].scryfall_uri
      } else {
        return ''
      }
    },
    async assignCommanders () {
      try {
        const searchURL = '/cards/random?q=is%3Acommander+f%3Acommander'
        const responses = []
        this.players.map(async () => {
          try {
            const response = await ax.get(searchURL)
            responses.push(response.data)
          } catch (err) {
            console.error(err)
          }
        })
        this.cards = responses
      } catch (err) {
        console.error(err)
      }
    },
    editPlayers () {
      this.showEdit = true
    },
    removePlayer (idx) {
      this.players.splice(idx, 1)
    },
    addPlayer () {
      const newPlayer = document.getElementById('addPlayer').value
      if (newPlayer.length > 0) {
        this.players.push(newPlayer)
        document.getElementById('addPlayer').value = ''
      }
    }
  }
}
</script>
