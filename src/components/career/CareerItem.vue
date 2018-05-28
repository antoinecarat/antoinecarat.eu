<template>
<div>
  <div class="timeline-item"  @click="showDescription=!showDescription" :class="{'is-info': showDescription}">
      <div class="timeline-marker is-image is-48x48">
        <img :src="logo">
      </div>
      <div class="timeline-content">
        <p class="heading"><span class="tag is-success" v-show="current">Current</span> {{title}}</p>
        <small class="is-italic"><i class="fas fa-map-marker-alt"></i> {{location}}</small> <br/>
        <small class="is-italic"><i class="far fa-calendar"></i> {{dates}}</small> <br/>
        <small class="is-italic tags"><i class="fas fa-tag"></i> &ensp; <span class="tag" v-for="tag in tags">{{tag}}</span></small>
        <p>
          <span v-if="!showDescription"><a>More...</a></span>
          <span v-else><a>Fold</a></span>
        </p>
      </div>
  </div>
  <div class="modal" :class="{'is-active': showDescription }">
    <div class="modal-background" @click="showDescription = !showDescription"></div>
    <div class="modal-content">
      <div class="card is-8">
        <p>
          {{description}}
        </p>
      </div>
    </div>
  </div>
</div>
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
