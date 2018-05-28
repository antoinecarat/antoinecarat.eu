<template>
  <div class="timeline-item"  @click="hideDescription=!hideDescription"  :class="{'is-info': !hideDescription}">
      <div class="timeline-marker is-icon">
        <i :class="icon"></i>
      </div>
      <div class="timeline-content">
        <p class="heading">
          {{date}}
        </p>
        <p :class="{'has-text-weight-semibold': !hideDescription}">
          {{title}}
        </p>
        <p v-show="!hideDescription">
          {{description}}
        </p>
        <p>
          <span v-if="hideDescription"><a>More...</a></span>
          <span v-else><a>Fold</a></span>
        </p>
      </div>
  </div>
</template>

<script>

export default {
  props: ['icon', 'title', 'date', 'description'],
  data: function () {
    return {
      hideDescription: true
    }
  }
}
</script>

<style>
  .timeline-item {
    cursor: pointer;
  }
</style>
