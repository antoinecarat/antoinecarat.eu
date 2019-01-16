<template>
  <footer class="footer">
    <a class="footer-menu-item" @click="$router.push('/')" :class="{'is-active': isCurrentPath('/')}">Home</a>
    <a class="footer-menu-item" target="_blank" href="mailto:antoine.carat@protonmail.com">Email</a>
    <a class="footer-menu-item" target="_blank" href="https://www.linkedin.com/in/antoine-carat-138754135/">LinkedIn</a>
    <a class="footer-menu-item" target="_blank" href="https://github.com/antoinecarat">Github</a>
    <a class="footer-menu-item" target="_blank" href="https://twitter.com/a_carat">Twitter</a>
    </footer>
</template>

<script>
export default {
  name: 'FlatFooter',
  data () {
    return {
      
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
  .footer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    border-top: 1px solid darken($color: rgb(240, 240, 240), $amount: 30);
    margin-top: 3%;
    padding: 2%;
    background: transparent;

    .footer-menu-item {
      font-size: .8rem;
      color: rgba(128, 128, 128, 0.8);
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: rgba(200, 200, 200, 0.8);
      }
    }
  }
</style>
