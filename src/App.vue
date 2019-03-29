<template>
  <section class="box">
    <Header :loaded=this.loaded />
    <router-view></router-view>
  </section>
</template>

<script>
import Header from './components/Header/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
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
  }
</style>
