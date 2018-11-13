<template>
  <section class="container">
    <nav class="navbar container is-row">
      <h1 class="navbar-title" @click="$router.push('/')">Antoine Carat</h1>
      <div class="navbar-menu container is-row is-centered is-third">
        <a class="button navbar-menu-item" @click="$router.push('/')" :class="{'is-active': isCurrentPath('/')}"><font-awesome-icon icon='home' /> Home</a>
        <a class="button navbar-menu-item" @click="$router.push('/skills')" :class="{'is-active': isCurrentPath('/skills')}"><font-awesome-icon icon='seedling' /> Skills</a>
        <a class="button navbar-menu-item" @click="$router.push('/career')" :class="{'is-active': isCurrentPath('/career')}"><font-awesome-icon icon='shoe-prints' /> Career</a>
        <a class="button navbar-menu-item" @click="$router.push('/projects')" :class="{'is-active': isCurrentPath('/projects')}"> <font-awesome-icon icon='vial' /> Projects</a>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="footer container is-row">
        <div class="footer-menu container">
          <h5 class="footer-menu-title">antoinecarat.eu</h5>
          <a class="footer-menu-item" @click="$router.push('/')" :class="{'is-active': isCurrentPath('/')}">Home</a>
          <a class="footer-menu-item" @click="$router.push('/skills')" :class="{'is-active': isCurrentPath('/skills')}">Skills</a>
          <a class="footer-menu-item" @click="$router.push('/career')" :class="{'is-active': isCurrentPath('/career')}">Career</a>
          <a class="footer-menu-item" @click="$router.push('/projects')" :class="{'is-active': isCurrentPath('/projects')}">Projects</a>
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
    isCurrentPath(path) {
      return this.$route.path == path;
    },
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
  justify-content: space-between;
  padding:  0 2%;

  .navbar-title {
    font-size: 2rem;
    margin: 0;
    cursor: pointer;
  }

  .navbar-menu {
    
    .navbar-menu-item {
      &:hover,
      &.is-active {
        background: transparent;
        border-bottom: 1px solid whitesmoke;
      }
    }
  }

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
