<template>
  <div class="experience-detailed">
    <SlidingDoors>
      <div class="card" slot="left">
        <img class="logo" :src="experience.company.logo" alt="">
        <h2 class="jobtitle">{{ experience.jobtitle }}</h2>
        <h3 class="company">{{experience.company.name}}</h3>
        <p class="dates"> {{ monthsBetween(new Date(experience.startdate), new Date(experience.enddate || Date())) }} months ( {{ new Date(experience.startdate).toLocaleDateString("en-US", {month: 'long', year: 'numeric'}) }}  - {{ experience.enddate && new Date(experience.enddate).toLocaleDateString("en-US", {month: 'long', year: 'numeric'}) || 'Now' }})</p>
      </div>
      <div class="description" slot="right">
        <h2>About the company</h2>
        <p class="companydescription">
          {{ experience.company.description }}
        </p>
        <h2>About my role</h2>
        <p class="roledescription">
          
        </p>
      </div>
    </SlidingDoors>
    <!-- <div class="card">
      <img class="logo" :src="experience.company.logo" alt="">
      <h2 class="jobtitle">{{ experience.jobtitle }}</h2>
      <h3 class="company">{{experience.company.name}}</h3>
      <p class="dates"> {{ monthsBetween(new Date(experience.startdate), new Date(experience.enddate || Date())) }} months ( {{ new Date(experience.startdate).toLocaleDateString("en-US", {month: 'long', year: 'numeric'}) }}  - {{ experience.enddate && new Date(experience.enddate).toLocaleDateString("en-US", {month: 'long', year: 'numeric'}) || 'Now' }})</p>
    </div> -->
    <!-- <div class="description">
      <h2>About the company</h2>
      <p class="companydescription">
        {{ experience.company.description }}
      </p>
      <h2>About my role</h2>
      <p class="roledescription">
        
      </p>
    </div> -->
  </div>
</template>

<script>
import experiencesData from './experiences.json'

export default {
  data: function() {
    return {
      experience: experiencesData.experiences[this.$route.params.id]
    }
  },
  methods: {
    monthsBetween: function(date1, date2) {
      let d1 = date1, d2 = date2
      if(date1 < date2){
        d1 = date1;
        d2 = date2;
      }
      let m = (d1.getFullYear() - d2.getFullYear()) * 12
      m += (d1.getMonth() - d2.getMonth())

      if(d1.getDate()<d2.getDate()) --m

      return Math.abs(m);
    }
  }
}
</script>

<style lang="scss">
  .experience-detailed {
    width: 75%;
    margin-top: 1rem;
    text-align: center;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;

    .card {
      .logo {
        border-radius: 100rem;
        width: 30%;
      }
    }
    .description {
      text-align: left;
    }
  }
</style>
