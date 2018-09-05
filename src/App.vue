<template>
  <section class="hero is-info is-fullheight" id="app">
    <transition name="fade">
        <nav class="navbar">
          <div class="container">
              <div class="navbar-brand">
                <span class="navbar-item">
                  <a class="" @click="$router.push('/')">
                      <span class="title">Antoine Carat</span>
                  </a>
                </span>
                <span class="navbar-burger burger" :class="{'is-active': showBurgerMenu}" data-target="navbarMenu" @click="toggleBurgerMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
              </div>
              <div id="navbarMenu" class="navbar-menu">
                  <div class="navbar-end">
                      <span class="navbar-item">
                          <a class="button is-white is-outlined" @click="$router.push('/skills')">
                              <span class="icon">
                                  <font-awesome-icon icon='seedling' />
                              </span>
                              <span>Skills</span>
                          </a>
                      </span>
                      <span class="navbar-item">
                          <a class="button is-white is-outlined" @click="$router.push('/career')">
                              <span class="icon">
                                  <font-awesome-icon icon='shoe-prints' />
                              </span>
                              <span>Career</span>
                          </a>
                      </span>
                      <span class="navbar-item">
                          <a class="button is-white is-outlined" @click="$router.push('/projects')">
                              <span class="icon">
                                  <font-awesome-icon icon='vial' />
                              </span>
                              <span>Projects</span>
                          </a>
                      </span>
                  </div>
              </div>
          </div>
          <div id="burgerMenu" class="navbar has-text-centered" v-show="showBurgerMenu">
            <p><a @click="switchTab('/skills')">Skills</a></p>
            <p><a @click="switchTab('/career')">Career</a></p>
            <p><a @click="switchTab('/projects')">Projects</a></p>
          </div>
        </nav>
    </transition>
    <div class="hero-body" v-if="wip">
      <div class="container has-text-centered" >
        <h1 class="title">Coming soon</h1>
        <h2 class="subtitle">I'm currently undergoing a design restructuration of this website. Stay tuned!</h2>
      </div>  
    </div>
    <transition name="fade" v-else>
      <router-view></router-view>
    </transition>
    <footer class="has-text-centered">
      Thanks for your visit. <br> <a href="mailto:antoine.carat@protonmail.com">Contact me</a>
    </footer>
  </section>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      wip: false,
      showBurgerMenu: false
    }
  },
  methods: {
    toggleBurgerMenu() {
      this.showBurgerMenu = !this.showBurgerMenu;
    },
    switchTab(path) {
      this.$router.push(path);
      this.toggleBurgerMenu();
    }
  },
  mounted: function () {

  }
}
</script>

<style>
#app {
  background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url('../static/wip.jpg') no-repeat center center fixed;
  background-size: cover;
}

nav {
  background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) )
}

footer {
  background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) )
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
