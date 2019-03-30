<template>
  <div class="slidingdoors">
    <div class="left" :class="{'active': closed}">
      <slot name="left"></slot>
    </div>
    <div class="right" :class="{'active': closed}">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlidingDoors',
  components: {
  },
  data: function() {
    return { closed: false }
  },
  mounted() {
    setTimeout( () => {
      this.closed = true;
    }, 500);
  }
}
</script>

<style lang="scss">
  .slidingdoors {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;

    .left {
      width: 30%;
      position: relative;
      left: -25%;
      opacity: 0;
      transition: 300ms;

      &.active {
        left: 0;
        opacity: 100;
      }
    }

    .right {
      width: 62%;
      padding-left: 2%;
      margin-top: .5rem;
      border-left: 1px solid gray;
      position: relative;
      right: -25%;
      opacity: 0;
      transition: 300ms;

      &.active {
        right: 0;
        opacity: 100;
      }
    }
  }
</style>
