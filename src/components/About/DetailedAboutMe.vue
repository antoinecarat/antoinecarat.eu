<template>
  <div class="aboutme-detailed">
    <p class="back" @click="$router.push('/')">Back</p>
    <SlidingDoors>
      <div class="card" slot="left">
        <img class="myface" :src="picture" alt="" />
        <h2 class="name">Antoine Carat</h2>
        <h3 class="subtitle">{{ subtitle }}</h3>
        <h4></h4>
      </div>
      <div class="description" slot="right">
        <h2>Hey, what's the craic?</h2>
        <p v-for="item in intro" :key="item">
          {{ item }}
        </p>
        <h2>How I got there</h2>
        <p v-for="item in journey" :key="item">
          {{ item }}
        </p>
      </div>
    </SlidingDoors>
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
.aboutme-detailed {
  width: 75%;
  margin-top: 1rem;
  text-align: center;
  position: relative;

  .back {
    position: absolute;
    text-align: left;
    color: #008cb4;
    cursor: pointer;
    text-decoration: underline;
    &:active,
    &:hover {
      font-weight: 600;
    }
    &::before {
      content: "< ";
    }
  }
  .card {
    .myface {
      border-radius: 100rem;
      width: 50%;
    }
  }
  .description {
    text-align: left;
  }
}
</style>
