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
        label: 'Include Planeswalkers',
        desc: 'Return planeswalkers in the result set.',
        value: 'includePlaneswalkers'
      },
      {
        label: 'Exclude Vanilla/French-Vanilla',
        desc: 'Exclude creatures that don\'t have abilities or only have evergreen abilities such as Flying or Trample.',
        value: 'excludeVanilla'
      },
      {
        label: 'Include Banned Commanders',
        desc: 'Includes legendary creatures that appear on the official Commander ban list.',
        value: 'includeBanned'
      },
      {
        label: 'Exclude Silver Border',
        desc: 'Excludes legendary creatures and/or planeswalkers from silver-bordered sets.',
        value: 'excludeSilveBorder'
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
