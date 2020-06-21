<template>
  <div class="mb-12">
    <div class='flex items-center justify-center'>
      <div v-if="players.length == 0" class="mt-6 text-base text-gray-500">
        Your player list is empty. Add some players!
      </div>
    </div>
    <div class="flex items-center justify-center mt-6 text-center space-x-4 flex-shrink-0 flex-wrap text-gray-700">
      <div v-for="(player, index) in players" :key="index">
        <h2 class="font-medium mb-4">{{ player }}</h2>
        <img v-if="imgSrc(index)" :src="imgSrc(index)" class="w-40 h-56 mx-auto"/>
        <svg v-else class="fill-current" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
        </svg>
        <a :href="scryfallURI(index)" target="_blank" class="underline">{{ cardTitle(index) }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => {
    return {
      showEdit: false
    }
  },
  computed: {
    ...mapState(['players', 'cards'])
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
        return this.cards[idx].image_uris.border_crop
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
    }
  }
}
</script>
