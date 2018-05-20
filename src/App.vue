<template>
  <section class="section" id="app">
    <div id="header">
      <div class="has-text-centered is-hidden-touch" @click="genkeywordID">
        <p class="title">Antoine Carat - {{keyword}}</p>
        <nav class="level">
          <router-link id="router-link" class="level-item" to="/aboutme" active-class="is-active">About me</router-link>
          <router-link id="router-link" class="level-item" to="/skills" active-class="is-active">Skills</router-link>
          <router-link id="router-link" class="level-item" to="/career" active-class="is-active">Career</router-link>
          <router-link id="router-link" class="level-item" to="/projects" active-class="is-active">Projects</router-link>
        </nav>
      </div>
      <div class="is-hidden-desktop" @click="genkeywordID">
        <p class="title">Antoine Carat</p>
        <p class="subtitle">{{keyword}}</p>
        <div class="dropdown" :class="{'is-active': showBurger}"  @click="showBurger=!showBurger">
          <div class="dropdown-trigger">
            <button class="button">
              {{currentTab}} &ensp; <i class="fas fa-bars"></i>
            </button>
          </div>
          <div class="dropdown-menu">
            <div class="dropdown-content">
              <router-link id="router-link" class="dropdown-item" to="/aboutme" active-class="is-active">About me</router-link>
              <router-link id="router-link" class="dropdown-item" to="/skills" active-class="is-active">Skills</router-link>
              <router-link id="router-link" class="dropdown-item" to="/career" active-class="is-active">Career</router-link>
              <router-link id="router-link" class="dropdown-item" to="/projects" active-class="is-active">Projects</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <router-view></router-view>
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
      keywordID: 0,
      showBurger: false
    }
  },
  computed: {
    keyword () { return this.keywords[this.keywordID] },
    currentTab () { return this.$route.name }
  },
  methods: {
    switchTab (tab) {
      this.$store.commit('switchTab', tab)
    },
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

#router-link .router-link-active {
  background-color: black;
}

</style>
