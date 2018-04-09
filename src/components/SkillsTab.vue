  <template>
    <div class="tile is-ancestor" id="skills">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-warning">
              <p class="title">JavaScript</p>
              <progress class="progress subtitle"></progress>
              Vue.js<progress class="progress is-vue"></progress>
              Node.js<progress  class="progress is-node"></progress>
              React.js<progress class="progress is-react"></progress>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-light">
              <p class="title">Frameworks</p>
              Vue.js<progress class="progress"></progress>
              Node.js<progress  class="progress"></progress>
              React.js<progress class="progress"></progress>
              Laravel<progress class="progress"></progress>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <p class="title">Essentials</p>
            <i class="fas fa-motorcycle"></i>
            <i class="fab fa-nintendo-switch"></i>
            <i class="fas fa-football-ball"></i>
            <i class="fas fa-music"></i>
            <i class="fas fa-beer"></i>
            <i class="fas fa-coffee"></i>
          </article>
        </div>
      </div>
      <div class="tile is-parent is-2">
        <article class="tile is-child notification is-warning">
          <div class="content">
            <p class="title">I'd rather</p>
            <div class="content">
              <i class="fas fa-bicycle"></i> ---|------------ <i class="fas fa-car"></i><br/>
              <i class="far fa-building"></i> -----------|---- <i class="fas fa-home"></i><br/>
              <i class="far fa-map"></i> --|-------------- <i class="fas fa-street-view"></i><br/>
              <i class="fas fa-bed"></i> -------------|--- <i class="fas fa-plane"></i><br/>
              <i class="fas fa-beer"></i> --------|-------- <i class="fas fa-beer"></i><br/>
            </div>
          </div>
        </article>
      </div>
    </div>
</template>

<script>
import skillsDatas from '../data/en/skills.js'
import Vue from 'vue'
Vue.use(require('vue-chartist'))


export default {
  data () {
    return skillsDatas
  }
}
</script>

<style>
.is-vue {
  color: 
}

.is-node {

}
</style>
