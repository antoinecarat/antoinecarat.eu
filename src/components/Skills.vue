  <template>
    <div class="tile is-ancestor" id="skills">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-warning">

            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-link">

            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">

          </article>
        </div>
      </div>
      <div class="tile is-parent is-2">
        <article class="tile is-child notification is-danger">

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
