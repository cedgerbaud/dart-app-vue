<template>
  <div class="nb-players">
    {{ nbPlayers }}
  </div>
</template>

<script>

export default {
  name: 'nb-players',
  data: function () {
    return {
      nbPlayers: this.$store.state.GamesConfig.games[this.gameModeName].minPlayers
    }
  },
  props: ['gameModeName']
}
</script>