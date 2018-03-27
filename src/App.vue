<template>
  <section class="section" id="app">
    <div id="header">
      <header class="title has-text-centered" @click="genkeywordID">Antoine Carat - {{keyword}}</header>
      <nav class="level">
        <router-link class="level-item is-active" to="/aboutme">About me</router-link>
        <router-link class="level-item" to="/career">Career</router-link>
        <router-link class="level-item" to="/projects">Projects</router-link>
      </nav>
    </div>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <div class="is-hidden">
      <h2>Icons</h2>
      <i class="fas fa-home"></i>
      <i class="fas fa-envelope"></i>
      <i class="fas fa-quote-left"></i>
      <i class="fas fa-quote-right"></i>
      <i class="fas fa-info-circle"></i>
      <i class="fas fa-graduation-cap"></i>
      <i class="fas fa-comments"></i>
      <i class="fas fa-cogs"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fas fa-code-branch"></i>
      <i class="fas fa-upload"></i>
      <i class="fas fa-question-circle"></i>
      <i class="fas fa-code"></i>
      <i class="fas fa-check"></i>
      <i class="fas fa-toggle-on"></i>
      <i class="fas fa-toggle-off"></i>
      <i class="fab fa-aws"></i>
      <i class="fab fa-vuejs"></i>
      <i class="fab fa-react"></i>
      <i class="fab fa-python"></i>
      <i class="fab fa-js-square"></i>
      <i class="fab fa-node-js"></i>
      <i class="fab fa-linux"></i>
      <i class="fab fa-html5"></i>
      <i class="fab fa-firefox"></i>
      <i class="fab fa-docker"></i>
      <i class="fas fa-database"></i>
      <i class="fab fa-css3-alt"></i>
      <i class="fab fa-chrome"></i>
      <i class="fab fa-angular"></i>
      <i class="fab fa-android"></i>
      <i class="fab fa-wordpress"></i>
      <i class="fab fa-laravel"></i>
      <i class="fas fa-copyright"></i>
    </div>
    <footer class="footer has-text-centered" style="margin-top: 30px">
      <div>
        <div class="has-text-centered is-italic">I built up this website as a showcase, to make you travel through my universe so you can understand who I am and what I'm able to do.</div>
        <i class="far fa-copyright"></i> Antoine Carat 2018.
      </div>
    </footer>
  </section>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      keywords: ['Graduated developer', 'DevOps believer', 'Cloud lover', 'Open-source enthusiatic', 'Human being'],
      keywordID: 0
    }
  },
  computed: {
    keyword () { return this.keywords[this.keywordID] }
  },
  methods: {
    genkeywordID () {
      this.keywordID = Math.floor(Math.random() * this.keywords.length)
    }
  }
}
</script>

<style>
#header {
  padding-top: 1%;
  padding-bottom: 1%;
  margin-bottom: 1%;
  border-bottom-style: inset;
}
</style>
