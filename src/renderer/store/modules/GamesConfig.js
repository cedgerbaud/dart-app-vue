import * as games from '../../../../config/games-config.json'

const state = {
  games: games.default
}

const mutations = {
  initGames (state, config) {
    state.config = config
  }
}

const actions = {
  initGames (context, config) {
    context.commit('initGames', config)
  }
}

export default {
  state,
  mutations,
  actions
}
