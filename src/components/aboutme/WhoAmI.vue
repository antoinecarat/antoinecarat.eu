<template>
  <div id="whoami" class="panel">
    <div class="panel-heading has-text-centered">
      <img style="border-radius: 50%" :src="aboutme.img">
    </div>
    <div class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-id-badge"></i>
      </span>
      Antoine Carat, 22 y.o.
    </div>
    <div class="panel-block">
      <span class="panel-icon">
        <i class="fab fa-github"></i>
      </span>
        <a target="_blank" :href="aboutme.links.github"> Look at my work</a>
    </div>
    <div class="panel-block">
      <span class="panel-icon">
        <i class="fab fa-linkedin"></i>
      </span>
      <a target="_blank" :href="aboutme.links.linkedin"> Join my network</a>
    </div>
    <div class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-envelope"></i>
      </span>
      <a target="_blank" :href="aboutme.links.email"> E-mail me</a>
    </div>
    <div class="panel-block">
      <span class="panel-icon">
        <i class="fab fa-twitter"></i>
      </span>
      <a target="_blank" :href="aboutme.links.twitter"> Follow me</a>
    </div>
    <div class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-download"></i>
      </span>
      <a target="_blank" :href="aboutme.links.cv"> Get my CV</a>
    </div>
  </div>
</template>

<script>
import whoamiDatas from '../../data/en/whoami.js'

export default {
  data () {
    return whoamiDatas
  }
}
</script>
