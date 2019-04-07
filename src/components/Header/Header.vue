<template>
  <div class="header" :class="{ active: loaded }">
    <h1 class="big-title" @click="$router.push('/')">ANTOINE CARAT</h1>
    <div class="contacts">
      <span class="contact" v-for="link in links" :key="link.name">
        <a target="_blank" :href="link.link">{{ link.name }}</a>
      </span>
    </div>
  </div>
</template>

<script>
import headerData from "./header.json";

export default {
  data: function() {
    return { ...headerData };
  },
  props: {
    loaded: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.header {
  width: 75%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  text-align: center;
  position: relative;
  top: -100px;
  opacity: 0;
  transition: 300ms;

  &.active {
    top: 0;
    opacity: 100;
  }

  .big-title {
    color: #008cb4;
    font-family: "Tahoma", "Myriad", "Adora", "Avenir", "sans-serif";
    font-size: 500%;
    font-weight: 100;
    letter-spacing: 0.2rem;
    margin: 1rem 0 0.5rem 0;
    cursor: pointer;
    &:hover {
      color: darken($color: #008cb4, $amount: 10);
    }
  }

  .contacts {
    width: 100%;
    padding: 0.5rem 0;
    color: #008cb4;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
