<template>
  <nav class="navbar">
    <h1 class="navbar-title" @click="$router.push('/')">Antoine Carat</h1>
    <div class="navbar-menu">
      <a class="button navbar-menu-item" @click="$router.push('/')" :class="{'is-active': isCurrentPath('/')}"><font-awesome-icon icon='home' /> Home</a>
      <a class="button navbar-menu-item" @click="$router.push('/skills')" :class="{'is-active': isCurrentPath('/skills')}"><font-awesome-icon icon='seedling' /> Skills</a>
      <a class="button navbar-menu-item" @click="$router.push('/career')" :class="{'is-active': isCurrentPath('/career')}"><font-awesome-icon icon='shoe-prints' /> Career</a>
      <a class="button navbar-menu-item" @click="$router.push('/projects')" :class="{'is-active': isCurrentPath('/projects')}"> <font-awesome-icon icon='vial' /> Projects</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    isCurrentPath(path) {
      return this.$route.path == path;
    }
  },
  mounted: function () {
    if (screen.width < 769) {
      let items = document.getElementsByClassName('navbar-menu-item')
      for (let i of items) {
        let icon = i.children[0]
        i.text = ''
        i.append(icon)
      }
    }
  }
}
</script>

<style lang="scss">
  .navbar {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    color: whitesmoke;

    .navbar-title {
      font-size: 1.5rem;
      margin: 1% 2%;
      cursor: pointer;
    }

    .navbar-menu {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      align-content: center;
      min-width: 50%;
      
      @media only screen and (max-width: 768px) {
        justify-content: flex-start;
      }

      .navbar-menu-item {
        cursor: pointer;
        margin: 0 4%;

        &:hover,
        &.is-active {
          background: transparent;
          border-bottom: 1px solid whitesmoke;
        }
      }
    }
  }
</style>
