<template>
  <div class="box columns" style="cursor: pointer">
    <div class="column is-one-quarter">
      <h1 class="subtitle">{{title}}</h1>
      <small class="is-italic"><i class="fas fa-map-marker-alt"></i> {{location}}</small> <br/>
      <small class="is-italic"><i class="far fa-calendar"></i> {{dates}}</small> <br/>
      <small class="is-italic"><i class="fas fa-tag"></i> {{tags}}</small>
    </div>
    <div class="column is-three-quarter">
      <p>{{description}}</p>
    </div>
    <div class="column is-narrow">
      <img :src="logo"/>
    </div>
  </div>
</template>

<script>
import datas from '../../data/en/career.js'

export default {
  props: ['title', 'location', 'dates', 'description', 'logo', 'tags'],
  data: function () {
    return datas
  }
}
</script>
