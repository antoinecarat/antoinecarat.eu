<template>
  <section class="container">
    <navbar />
    <router-view></router-view>
    <flat-footer />
  </section>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FlatFooter from './components/FlatFooter.vue';

export default {
  name: 'App',
  components: {
    navbar: Navbar,
    'flat-footer': FlatFooter
  },
  data () {
    return {
      wip: false,
      showBurgerMenu: false
    }
  },
  methods: {
    isCurrentPath(path) {
      return this.$route.path == path;
    }
  }
}
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
</style>
