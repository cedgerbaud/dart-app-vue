const state = {
  gameName: null,
  nbPlayers: null,
  players: []
}

const mutations = {
  setName (state, name) {
    state.gameName = name
  }
}

const actions = {
  testAction (context) {
    console.log('testaction')
  }
}

export default {
  state,
  mutations,
  actions
}
