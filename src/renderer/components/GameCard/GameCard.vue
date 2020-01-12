<template>
  <div class="card game-card" :class="{active: isActive }">
    <div class="card-header">
      <h1> {{ name }} </h1>
    </div>
    <div class="card-content">
      <figure class="image is-1by1">
        <img src="https://previews.123rf.com/images/igormalovic/igormalovic1604/igormalovic160400660/55349733-target-with-darts-cartoon-doodle.jpg" alt="">
      </figure>
    </div>
    <!-- <div class="card-content">
      <div class="content">

      </div>
    </div> -->
    <div class="card-footer">
      <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <div class="tags has-addons">
                <span class="tag mdi mdi-account-multiple" aria-hidden="true"></span>
                <span class="tag is-primary">{{ nbPlayers }}</span>
              </div>
            </a>
            <a class="level-item" aria-label="retweet">
              <div class="tags has-addons">
                <span class="tag mdi mdi-timer" aria-hidden="true"></span>
                <span class="tag is-primary">{{ timedValue }}</span>
              </div>
            </a>
          </div>
        </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: 'game-card',
  // data: function () {
  //   return {
  //     isActive: false
  //   }
  // },
  props: ['name', 'maxPlayers', 'minPlayers', 'timed', 'description', 'isActive'],
  computed: {
    nbPlayers: function () {
      if (this.maxPlayers === 1) {
        return '1'
      } else if (this.maxPlayers) {
        return `${this.minPlayers} - ${this.maxPlayers}`
      } else {
        return `From ${this.minPlayers}`
      }
    },

    timedValue: function () {
      let val = this.timed ? 'Yes' : 'No'
      return val
    }
  }
}
</script>

<style lang="scss">
  .game-card {
    margin: 20px 5%;
    // width: 100p;
    // height: 200px;
  }

  .mdi {
    color: black;
  }

  .card-header, .card-content, .card-footer {
    background-color: #fff !important;
  }

    .active {
      animation: selectedFrame 0.4s steps(100) infinite alternate;
  }


  @keyframes selectedFrame {
    from { background-color: red; }
    to { background-color: pink; }
}
</style>