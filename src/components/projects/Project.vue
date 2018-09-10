<template>
  <div class="column is-4">
    <div class="hovered-container" @click="expand = !expand">
      <img class="hovered-image" :src="screenshot">
      <div class="hovered-popup">
        <h5 class="title">{{title}}</h5>
        <h6 class="subtitle">{{subtitle}}</h6>
      </div>
    </div>
    <div class="modal" :class="{'is-active': expand}">
      <div class="modal-background" @click="expand = !expand"></div>
      <div class="modal-content">
        <div class="card is-8">
          <header class="card-header">
            <p class="card-header-title">
              {{title}} : {{subtitle}}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              {{description}}
            </div>
            <p class="is-italic"><i class="far fa-calendar-alt"></i> {{start}} - {{end}}</p>
            <p class="is-italic"><i class="fab fa-github"></i> {{link}} </p>
            <p class="is-italic"><i class="fas fa-tags"></i> <span v-for="tag in tags" :key="tag">{{tag}}</span> </p>
          </div>
          <footer class="card-footer">

            <!-- <a class="card-footer-item">View on Github</a>
            <a class="card-footer-item">Star on Github</a> -->
          </footer>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="expand = !expand"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'screenshot','description','start','end','tags'],
  data: function() {
    return {
      expand: false
    }
  }
}
</script>

<style>
  .hovered-container {
    border: 1px solid white;
    position: flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
  }
  .hovered-image {
    opacity: 1;
  }
  .hovered-popup {
    opacity: 1;
    padding: 2% 3% 2% 3%;
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
