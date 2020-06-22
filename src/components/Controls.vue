<template>
  <div>
    <div class="mt-5 max-w-2xl mx-auto sm:flex sm:justify-center md:mt-8">
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
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <button @click="changeFilters" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Change Filters
        </button>
      </div>
    </div>
    <div v-if="showEdit" class="mt-10 text-gray-700 text-center">
      <h2 class="mb-6">Current Player List</h2>
      <ul>
        <li v-for="(p, idx) in players" :key=idx class="flex items-center justify-center">
          {{ p }}
          <button @click="removeExistingPlayer(idx)" class="bg-red-400 px-1 text-xs text-white rounded-md ml-2">X</button></li>
      </ul>
      <div class="w-64 mx-auto">
        <div class="mt-6 flex rounded-md shadow-sm">
          <div class="relative flex-grow focus-within:z-10">
            <input id="addNewPlayerInput" class="form-input block w-full h-full border border-gray-300 rounded-none rounded-l-md pl-4 transition ease-in-out duration-150 sm:text-sm sm:leading-5" placeholder="Teferi" />
          </div>
          <button @click="addNewPlayer" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
            <span class="ml-2">Add</span>
          </button>
        </div>
      </div>
    </div>
    <div v-if="showFilters" class="mt-6 mb-4 grid grid-cols-2 gap-4 max-w-3xl mx-auto">
      <div v-for="filter in filters" :key="filter.value" class="flex items-start">
        <div class="mr-2 mt-1">
          <input :id="filter.value" type="checkbox" :value="filter.value" v-model="checkedFilters" class="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out">
        </div>
        <div>
          <label :for="filter.value" class="font-medium text-gray-700">
            {{ filter.label }}
          </label>
          <p class="text-gray-500 text-sm max-w-sm">{{ filter.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

const ax = axios.create({
  baseURL: 'https://api.scryfall.com',
  timeout: 20000,
  headers: {
    Accept: 'application/json'
  }
})

export default {
  data () {
    return {
      showEdit: false,
      showFilters: false,
      checkedFilters: []
    }
  },
  computed: {
    ...mapState([
      'players',
      'cards',
      'filters'
    ])
  },
  methods: {
    ...mapMutations([
      'addPlayer',
      'removePlayer',
      'setCards'
    ]),
    editPlayers () {
      this.showFilters = false
      this.showEdit = !this.showEdit
    },
    removeExistingPlayer (idx) {
      this.removePlayer(idx)
    },
    addNewPlayer () {
      const newPlayer = document.getElementById('addNewPlayerInput').value
      if (newPlayer.length > 0) {
        this.addPlayer(newPlayer)
        document.getElementById('addNewPlayerInput').value = ''
      }
    },
    changeFilters () {
      this.showEdit = false
      this.showFilters = !this.showFilters
    },
    async assignCommanders () {
      this.showEdit = false
      this.showFilters = false
      try {
        const searchUrl = this.determineUrl(this.checkedFilters)
        const responses = []
        this.players.map(async () => {
          try {
            const response = await ax.get(searchUrl)
            responses.push(response.data)
          } catch (err) {
            console.error(err)
          }
        })
        this.setCards(responses)
      } catch (err) {
        console.error(err)
      }
    },
    determineUrl (filters) {
      let baseUrl = '/cards/random?q=t%3Alegendary+'
      if (!filters.length) {
        baseUrl += 'is%3Acommander+f%3Acommander'
        return baseUrl
      } else {
        const params = []
        if (!filters.includes('includeVanilla')) {
          params.push('-is%3Avanilla')
        }
        if (!filters.includes('includeFrenchVanilla')) {
          params.push('-is%3Afrenchvanilla')
        }
        if (!filters.includes('includeBanned')) {
          params.push('-banned%3Acommander')
        }
        if (!filters.includes('includeFlip')) {
          params.push('-is%3Aflip')
        }
        if (!filters.includes('includeSilverBorder')) {
          params.push('-border%3Asilver')
        }
        if (filters.includes('includePlaneswalkers')) {
          params.push('t%3Acreature+or+t%3Aplaneswalker')
        } else {
          params.push('t%3Acreature')
        }
        const finalUrl = baseUrl + params.join('+')
        return finalUrl
      }
    }
  }
}
</script>
