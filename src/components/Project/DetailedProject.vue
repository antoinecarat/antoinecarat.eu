<template>
  <div class="experience-detailed">
    <p class="back" @click="$router.push('/projects')">Back</p>
    <SlidingDoors>
      <div class="card" slot="left">
        <!-- Show thumbnail + title + stats -->
        <img class="logo" :src="project.thumbnail || 'https://bulma.io/images/placeholders/480x320.png'" alt="" />
        <h2 class="p-title">{{ project.title }}</h2>
      </div>
      <div class="description" slot="right">
        <h2>Project description</h2>
        <p>{{ project.description.short }}</p>
        <h2>How?</h2>
        <p>Technical stuff</p>
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
    .logo {
      // width: 80%;
    }
  }
  .description {
    text-align: left;
  }
}
</style>
