<template>
  <div class="aboutme" @click="$router.push('/about')">
    <h2 class="title">About me</h2>
    <p v-for="item in short" :key="item">
      {{ item }}
    </p>
    <p class="learn-more">Learn more</p>
  </div>
</template>

<script>
import aboutMeData from "./about.json";

export default {
  data: function() {
    return { ...aboutMeData };
  }
};
</script>

<style lang="scss">
.aboutme {
  .learn-more {
    @media only screen and (min-width: 768px) {
      display: none;
    }
    color: #008cb4;
    text-decoration: underline;
    &:active,
    &:hover {
      font-weight: 600;
    }
  }
  &:hover {
    color: #aaaaaa;
    cursor: pointer;

    & > .learn-more {
      @media only screen and (min-width: 768px) {
        display: block;
        position: absolute;
        top: 0.3rem;
        right: 1rem;
      }
    }
  }
}
</style>
