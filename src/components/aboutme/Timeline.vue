<template>
  <div class="steps">
    <div class="step-item" v-for="event in events">
         <div class="step-marker">
           <span class="icon">
             <i :class="event.icon"></i>
           </span>
         </div>
         <div class="step-details">
           <p class="step-title">{{event.title}}</p>
         </div>
     </div>
   </div>
</template>

<script>
import datas from './../../data/en/timeline.js'

export default {
  data: function () {
    return datas
  }
}
</script>

<style>

</style>
