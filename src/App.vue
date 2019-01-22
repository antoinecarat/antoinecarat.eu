<template>
  <section class="box">
    <navbar title="Antoine Carat"
            subtitle="One more software engineer"
    />
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
    'navbar': Navbar,
    'flat-footer': FlatFooter
  },
  data () {
    return {
      
    }
  },
  methods: {
    
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
