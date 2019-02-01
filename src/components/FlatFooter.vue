<template>
  <footer class="footer">
    <!-- <a class="footer-menu-item" @click="$router.push('/')" :class="{'is-active': isCurrentPath('/')}">Home</a> -->
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
    width: 80%;
    @media only screen and (max-width: 768px) {
      width: 90%;
    }

    @media only screen and (min-width: 1824px) {
      width: 60%;
    }

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid darken($color: rgb(240, 240, 240), $amount: 30);
    margin: 3rem 0;
    background: transparent;

    .footer-menu-item {
      margin-top: 1rem;
      // font-size: .8rem;
      color: rgba(128, 128, 128, 0.8);

      &:hover {
        color: rgba(200, 200, 200, 0.8);
      }
    }
  }
</style>
