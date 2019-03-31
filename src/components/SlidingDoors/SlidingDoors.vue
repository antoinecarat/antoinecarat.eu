<template>
  <div class="slidingdoors">
    <div class="left" :class="{ active: closed }">
      <slot name="left"></slot>
    </div>
    <div class="right" :class="{ active: closed }">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SlidingDoors",
  components: {},
  data: function() {
    return { closed: false };
  },
  mounted() {
    setTimeout(() => {
      this.closed = true;
    }, 300);
  }
};
</script>

<style lang="scss">
.slidingdoors {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    flex-flow: column wrap;
    align-items: center;
  }

  .left {
    width: 30%;
    @media only screen and (max-width: 768px) {
      width: 95%;
    }

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
    padding-left: 1rem;
    margin-top: 0.5rem;
    border-left: 1px solid gray;
    position: relative;
    right: -25%;
    opacity: 0;
    transition: 300ms;

    &.active {
      right: 0;
      opacity: 100;
    }

    @media only screen and (max-width: 768px) {
      width: 95%;
      border: none;
    }
  }
}
</style>
