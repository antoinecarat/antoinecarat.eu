<template>
  <section class="container">
    <nav class="navbar container is-row">
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
      <div id="burgerMenu" class="navbar has-text-centered" v-show="showBurgerMenu">
        <p><a @click="switchTab('/skills')">Skills</a></p>
        <p><a @click="switchTab('/career')">Career</a></p>
        <p><a @click="switchTab('/projects')">Projects</a></p>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="footer container is-row">
        <div class="footer-menu container">
          <h5 class="footer-menu-title">antoinecarat.eu</h5>
          <a class="footer-menu-item" @click="$router.push('/')">Home</a>
          <a class="footer-menu-item" @click="$router.push('/skills')">Skills</a>
          <a class="footer-menu-item" @click="$router.push('/career')">Career</a>
          <a class="footer-menu-item" @click="$router.push('/projects')">Projects</a>
        </div>
        <div class="footer-menu container">
          <h5 class="footer-menu-title">Contact me</h5>
          <a class="footer-menu-item" href="">Email</a>
          <a class="footer-menu-item" href="">LinkedIn</a>
          <a class="footer-menu-item" href="">Github</a>
          <a class="footer-menu-item" href="">Twitter</a>
        </div>
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

<style lang="scss">
.navbar {
  background: rgba(0, 0, 0, 0.9);
  padding: 1% 2%;
}

.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  margin-top: 3%;
  padding: 0 2% 2% 0;
  background: rgba(0, 0, 0, 0.9);

  .footer-menu {
    padding: 0 2%;

    .footer-menu-item {
      font-size: .8rem;
      color: rgba(128, 128, 128, 0.8);
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: rgba(200, 200, 200, 0.8);
      }
    }

    .footer-contact {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: .2rem solid rgba(128, 128, 128, 0.8);

      &:first-child{
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
