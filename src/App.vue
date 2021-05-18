<template>
  <section class="content">
    <Header :loaded="this.loaded" />
    <router-view></router-view>
    <p>Last update on: 18/05/2021</p>
  </section>
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    setTimeout(() => (this.loaded = true), 300);
  }
};
</script>

<style lang="scss"></style>
