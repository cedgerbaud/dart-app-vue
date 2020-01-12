import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game-selector',
      component: require('@/components/GameSelector').default
    },
    {
      path: '/nb-players',
      component: require('@/components/NbPlayers').default
    },
    {
      path: '/around-the-world',
      name: 'around-the-world'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
