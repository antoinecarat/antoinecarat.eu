<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-title">
        <h1 @click="$router.push('/')">{{title}}</h1>
        <h6 v-if="subtitle !== ''">{{subtitle}}</h6>
      </div>
      <div class="navbar-menu">
        <a class="button navbar-menu-item" @click="$router.push('/')" :class="{'is-active': isCurrentPath('/')}" title="Home"><font-awesome-icon icon='home' /></a>
        <a class="button navbar-menu-item" @click="$router.push('/about')" :class="{'is-active': isCurrentPath('/about')}" title="About"> <font-awesome-icon icon='shoe-prints' /></a>
        <a class="button navbar-menu-item" @click="$router.push('/projects')" :class="{'is-active': isCurrentPath('/projects')}" title="Projects"> <font-awesome-icon icon='vial' /></a>
        <!-- <a class="button navbar-menu-item" @click="$router.push('/skills')" :class="{'is-active': isCurrentPath('/skills')}"><font-awesome-icon icon='seedling' /> Skills</a> -->
        <!-- <a class="button navbar-menu-item" @click="$router.push('/career')" :class="{'is-active': isCurrentPath('/career')}"><font-awesome-icon icon='shoe-prints' /> Career</a> -->
      </div>
      <!-- <div class="burger">
          <div></div>
          <div></div>
          <div></div>
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    subtitle: {
      type: String,
      required: true,
      default: ""
    },
  },
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
    justify-content: center;
    align-items: center;

    color: whitesmoke;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.9);

    .navbar-container {
      width: 80%;
      margin: 1rem;
      @media only screen and (max-width: 768px) {
        width: 90%;
      }

      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;

      .navbar-title {
        font-size: 1.3rem;
        cursor: pointer;

        h1, h6 {
          margin: 0;
          font-style: oblique;
        }

        h1 {
          font-weight: 700;      
        }

        h6 {
          font-weight: 500;
          margin-top: 1%;
          color: rgb(170, 170, 170);
          font-family: 'Courier New', Courier, monospace;
        }
      }

      .navbar-menu {
        @media only screen and (max-width: 768px) {
          //display: none;
          flex-flow: row wrap;
          justify-content: center;
          align-content: center;
          width: 100%;
          margin-top: 1rem;
        }
        
          font-size: 1.3rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        align-content: center;
        min-width: 50%;
        
        .navbar-menu-item {
          color: whitesmoke;
          cursor: pointer;
          margin: 0 4%;

          &:first-child {
            margin-left: 0; 
          }

          &:last-child {
            margin-right: 0;
          }

          &:hover,
          &.is-active {
            background: transparent;
            border-bottom: 1px solid whitesmoke;
          }
        }
      }

      .burger {
        @media only screen and (min-width: 768px) {
          display: none;
        }

        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        align-items: center;
        width: 40px;
        height: 30px;
      
        &.open {
          div:first-child {
            transform-origin: 0% 100%;
            transform: rotate(45deg);
            transition: 0.3s transform;
          }

          div:nth-child(2) {
            width: 0;
            transition: 0.3s width;
          }

          div:nth-child(3) {
            transform-origin: 0% 100%;
            transform: rotate(-45deg);
            transition: 0.3s transform;
          }
        }

        div {
          width: 40px;
          height: 2px;
          background: whitesmoke;

          &:first-child {
            transform-origin: 0% 100%;
            transform: rotate(0deg);
            transition: 0.3s transform;
          }

          &:nth-child(2) {
            transition: 0.3s width;
          }

          &:nth-child(3) {
            transform-origin: 0% 100%;
            transform: rotate(0deg);
            transition: 0.3s transform;
          }
        }
      }
    }
  }
</style>
