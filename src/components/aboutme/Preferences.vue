<template>
  <div>
    <p class="subtitle has-text-centered">{{title}}</p>
    <div class="" v-for="comp in comparisons">
      <i :class="comp['icon-left']"></i><i :class="comp['icon-right']"></i>
    </div>
  </div>
</template>

<script>
import datas from './../../data/en/preferences.js'

export default {
  props: ['title'],
  data: function () {
    return datas
  }
}
</script>

<style>

</style>
