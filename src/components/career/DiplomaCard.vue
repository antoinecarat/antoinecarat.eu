<template>
  <div class="box columns" style="cursor: pointer">
    <div class="column is-two-fifths">
      <h1 class="subtitle">{{title}}</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> {{location}}</small> <br/>
      <small class="is-italic"><i class="far fa-calendar"></i> {{dates}}</small>
    </div>
    <div class="column">
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'location', 'dates', 'description']
}
</script>
