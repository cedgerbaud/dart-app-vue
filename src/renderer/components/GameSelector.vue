<template>
  <div class="games-wrapper">
    <div class="modes-wrapper">
      <div class="gameTitle"> {{ activeGameName }} </div>
      <div class="columns" v-for="(row, index) in gameRows" :key="index">
        <game-card
          class="column" 
          v-for="(gameName, gameIndex) in row"
          :key=gameIndex
          :name="games[gameName].name"
          :description="games[gameName].description"
          :timed="games[gameName].timed"
          :minPlayers="games[gameName].minPlayers"
          :maxPlayers="games[gameName].maxPlayers"
          :isActive="gameIndex + (index * nbGamesPerRow) === activeIndexMode"
        />
      </div>
    </div>
    <background/>
  </div>
</template>

<script>
  import GameCard from './GameCard/GameCard.vue'
  import Background from './Background.vue'
  // import * as gamesConfig from '../../../config/games-config.json'

  export default {
    name: 'game-selector',
    components: { GameCard, Background },
    data: function () {
      return {
        games: this.$store.state.GamesConfig.games,
        nbGamesPerRow: 3,
        activeIndexMode: 0
      }
    },
    computed: {
      gamesList: function () {
        return Object.keys(this.$store.state.GamesConfig.games)
      },
      gameRows: function () {
        let rows = []
        let nbRows = null

        if (this.gamesList.length % this.nbGamesPerRow === 0) {
          nbRows = this.gamesList.length / 3
        } else {
          nbRows = Math.ceil(this.gamesList.length / this.nbGamesPerRow)
        }

        for (let i = 0; i < nbRows; i++) {
          rows.push(this.gamesList.slice(i * this.nbGamesPerRow, i * this.nbGamesPerRow + this.nbGamesPerRow))
        }
        return rows
      },
      activeGameName: function () {
        return this.games[this.gamesList[this.activeIndexMode]].name
      },
      activeGame: function () {
        return this.games[this.gamesList[this.activeIndexMode]]
      }
    },
    methods: {
      moveCursor (key) {
        const arrows = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp']
        if (arrows.includes(key)) {
          switch (key) {
            case 'ArrowRight':
              if (this.activeIndexMode + 1 < this.gamesList.length) {
                this.activeIndexMode++
              }
              break
            case 'ArrowLeft':
              if (this.activeIndexMode > 0) {
                this.activeIndexMode--
              }
              break
            case 'ArrowDown':
              if (this.activeIndexMode + this.nbGamesPerRow < this.gamesList.length) {
                this.activeIndexMode += this.nbGamesPerRow
              }
              break
            case 'ArrowUp':
              if (this.activeIndexMode - this.nbGamesPerRow >= 0) {
                this.activeIndexMode -= this.nbGamesPerRow
              }
          }
        } else if (key === 'Enter' || key === 'Space') {
          this.$store.dispatch('testAction')
          this.$store.dispatch('setName', this.activeGameName)
          console.log(this.$store.state.MainGame.gameName)
        }
      }
    },
    mounted () {
      window.addEventListener('keydown', (e) => {
        this.moveCursor(e.code)
      })
    },
    destroyed () {
      window.removeEventListener('keydown', (e) => {
        this.moveCursor(e.code)
      })
    }
  }
</script>


<style lang="scss" scoped>
  .modes-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 10% 10%;
  }
</style>