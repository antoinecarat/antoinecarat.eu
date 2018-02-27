<template>
  <div class="hovered-container">
    <img class="hovered-image" :src="screenshot">
    <div class="hovered-popup">
      <h5 class="title">{{title}}</h5>
      <h6 class="subtitle">{{subtitle}}</h6>
    </div>
  </div>
</template>

<script>
  export default {
    props : ['title', 'subtitle', 'screenshot']
  }
</script>

<style>
  .hovered-container {
    position: relative;
  }
  .hovered-image {
    opacity: 1;
  }
  .hovered-popup {
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 33%;
    padding-top: 5%;
    padding-left: 5%;
    background-color: dimgray;
  }
  .hovered-popup .title {
    color: white;
  }
  .hovered-popup .subtitle {
    color: white;
  }
  .hovered-container:hover .hovered-image {
    opacity: 0.3;
  }
  .hovered-container:hover .hovered-popup {
    opacity: 1;
  }
</style>
