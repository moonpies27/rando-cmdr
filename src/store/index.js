import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    cards: []
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
