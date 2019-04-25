<template>
  <div class="project-detailed">
    <p class="back" @click="$router.push('/projects')">Back</p>
    <SlidingDoors>
      <div class="card" slot="left">
        <h2 class="p-title">{{ project.title }}</h2>
        <h3 class="p-subtitle">{{ project.subtitle }}</h3>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag">
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="description" slot="right">
        <h2>Project description</h2>
        <!-- <p v-for="item in project.description.long" :key="item">{{ item }}</p> -->
        <p>{{ project.description.short }}</p>
        <!-- <h2>How?</h2>
        <p v-for="item in project.description.technical" :key="item">{{ item }}</p> -->
      </div>
    </SlidingDoors>
  </div>
</template>

<script>
import projectData from "./projects.json";

export default {
  data: function() {
    return {
      project: projectData.projects[this.$route.params.id]
    };
  }
};
</script>

<style lang="scss">
.project-detailed {
  width: 75%;
  margin-top: 1rem;
  text-align: center;
  position: relative;

  .back {
    position: absolute;
    text-align: left;
    color: #008cb4;
    cursor: pointer;
    text-decoration: underline;
    &:active,
    &:hover {
      font-weight: 600;
    }
    &::before {
      content: "< ";
    }
  }

  .card {

  }
  .description {
    text-align: left;
  }
}
</style>
