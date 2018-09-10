<template>
  <div class="timeline-item"  @click="showDescription=!showDescription" :class="{'is-info': showDescription}">
      <div class="timeline-marker is-image is-48x48">
        <img :src="logo">
      </div>
      <div class="timeline-content">
        <p class="heading"><span class="tag is-success" v-show="current">Current</span> {{title}}</p>
        <small class="is-italic"><i class="fas fa-map-marker-alt"></i> {{location}}</small> <br/>
        <small class="is-italic"><i class="far fa-calendar"></i> {{dates}}</small> <br/>
        <small class="is-italic tags"><i class="fas fa-tag"></i> &ensp; <span class="tag" v-for="tag in tags" :key="tag">{{tag}}</span></small>
        <p>
          <span v-if="!showDescription"><a>More...</a></span>
        </p>
      </div>
  </div>
  <!-- <div class="card is-hidden-touch" v-show="showDescription">
    <header class="card-header">
      <p class="card-header-title">{{title}}</p>
      <button class="delete" aria-label="close" @click="showDescription = !showDescription"></button>
    </header>
    <section class="card-content">
      <p>{{description}}</p>
    </section>
    <footer class="card-foot">
      <a>Link</a>
    </footer>
  </div>
  <div class="modal is-hidden-desktop" :class="{'is-active': showDescription }">
    <div class="modal-background" @click="showDescription = !showDescription"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{title}}</p>
        <button class="delete" aria-label="close" @click="showDescription = !showDescription"></button>
      </header>
      <section class="modal-card-body">
        <p>{{description}}</p>
      </section>
      <footer class="modal-card-foot">
        <a>Link</a>
      </footer>
    </div>
  </div> -->
</template>

<script>

export default {
  props: ['logo', 'title', 'dates', 'location', 'tags', 'description', 'current'],
  data: function () {
    return {
      showDescription: false
    }
  }
}
</script>

<style>
  .timeline-item {
    cursor: pointer;
  }
</style>
