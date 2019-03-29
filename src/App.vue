<template>
  <section class="box">
    <div class="header" :class="{'active': loaded}">
      <h1 class="big-title" @click="$router.push('/')">ANTOINE CARAT</h1>
      <div class="contacts">
        <span>Mail</span> — <span>LinkedIn</span> — <span>Github</span> — <span>Twitter</span> — <span>Medium</span> — <span>StackOverflow</span>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>

export default {
  name: 'App',
  data () {
    return { 
      loaded: false
    }
  },
  mounted() {
    setTimeout( () => this.loaded = true, 500);
  }
}
</script>

<style lang="scss">
  .box {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    .header {
      width: 75%;
      text-align: center;
      position: relative;
      top: -25%;
      opacity: 0;
      transition: 300ms;

      &.active {
        top: 0;
        opacity: 100;
      }

      .big-title {
        color: #008cb4;
        font-family: 'Tahoma', 'Myriad', 'Adora', 'Avenir', 'sans-serif';
        font-size: 500%;
        font-weight: 100;
        letter-spacing: .2rem;
        margin: 1rem 0 .5rem 0;
        cursor: pointer;
        &:hover {
          color: darken($color: #008cb4, $amount: 5)
        }
      }

      .contacts {
        width: 100%;
        padding: .5rem 0;
        color: #008cb4;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;

        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
</style>
