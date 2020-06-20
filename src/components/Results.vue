<template>
  <div>
    <div v-if="players.length == 0" class="mt-6 text-base text-gray-500">
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
    }
  }
}
</script>
