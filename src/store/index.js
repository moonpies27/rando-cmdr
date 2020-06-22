import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    cards: [],
    filters: [
      {
        label: 'Include Vanilla',
        desc: 'Include creatures that don\'t have abilities.',
        value: 'includeVanilla'
      },
      {
        label: 'Include French-Vanilla',
        desc: 'Include creatures that only have evergreen abilities such as Flying, Trample, or Morph.',
        value: 'includeFrenchVanilla'
      },
      {
        label: 'Include Planeswalkers',
        desc: 'Include all planeswalkers in the result set.',
        value: 'includePlaneswalkers'
      },
      {
        label: 'Include Banned Commanders',
        desc: 'Include legendary creatures that appear on the official Commander ban list.',
        value: 'includeBanned'
      },
      {
        label: 'Include Silver Border',
        desc: 'Include legendary creatures and/or planeswalkers from silver-bordered sets.',
        value: 'includeSilveBorder'
      },
      {
        label: 'Include Flip Cards',
        desc: 'Include the Flip cards from Kamigawa block.',
        value: 'includeFip'
      }
    ]
  },
  mutations: {
    addPlayer (state, newPlayer) {
      state.players.push(newPlayer)
    },
    removePlayer (state, playerIndex) {
      state.players.splice(playerIndex, 1)
    },
    setCards (state, newCards) {
      state.cards = newCards
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['players']
  })]
})
