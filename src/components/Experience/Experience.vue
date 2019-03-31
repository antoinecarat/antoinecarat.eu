<template>
  <div class="experience" @click="$router.push(`/experience/${id}`)">
    <p class="head">
      <span class="jobtitle">{{ experience.jobtitle }}</span> <span class="company"> @{{ experience.company.name }}.</span>
    </p>
    <p class="dates"> {{ monthsBetween(new Date(experience.startdate), new Date(experience.enddate || Date())) }} months ( {{ new Date(experience.startdate).toLocaleDateString("en-US", {month: 'long', year: 'numeric'}) }}  - {{ experience.enddate && new Date(experience.enddate).toLocaleDateString("en-US", {month: 'long', year: 'numeric'}) || 'Now' }})</p>
    <p v-if="experience.role.description.length == 1">
      {{ experience.role.description[0] }}
    </p>
    <p v-else>
      <ul>
        <li v-for="item in experience.role.description" :key="item">{{ item }}</li>
      </ul>
    </p>
    <div class="tags"> {{experience.tags.map( e => `#${e}`).join(' ')}} </div>
    <p class="learn-more">Learn more</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    experience: {
      type: Object,
      required: true
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
  .experience {
    margin: 1rem 0;
    position: relative;
    transition: 600ms;
    width: 100%;

    &:last-of-type {
      margin-bottom: 2rem;
    }

    .learn-more {
      @media only screen and (min-width: 768px) {
        display: none;
      }
      color: #008cb4;
      text-decoration: underline;
      &:active,
      &:hover {
        font-weight: 600;
      }
    }

    &.hovered,
    &:hover {
      border-left: 1px solid lightgray;
      padding-left: 1rem;
      color: #AAAAAA;
      cursor: pointer;
      
      & > .learn-more {
        @media only screen and (min-width: 768px) {
          display: block;
          position: absolute;
          top: 0%;
          right: 0%;
        }
      }
    }

    .head {
      margin-bottom: 0;

      .jobtitle {
        font-weight: 700;
      }
      .company {
        font-style: italic;
      }
    }
    .dates {
      margin-top: 0;
      font-style: italic;
    }
    ul {
      padding-left: 1rem;
    }
    .tags {
      font-style: italic;
    }
  }
</style>
