<template>
    <div class="container">
        <div class="hero-body">
            <div class="container has-text-centered">
                <img class="is-hidden-tablet" src="../../static/me.jpg" alt="My face :)" style="width: 75%"/>         
                <img class="is-hidden-mobile" src="../../static/me.jpg" alt="My face :)" style="width: 15%"/>
                <p class="subtitle"> Hi, nice to meet you! I'm Antoine Carat, a Web developer living in Nantes, France and relocating to Dublin, Ireland in September 2018. </p>
                <p> Through this website you'll be able to check out my skillset, my previous expriences and my school and personnal projects as well. If you want to reach out, I would be glad to engage a conversation with you! <br> <br>
                On the timeline just below, you can see how I came to here.</p>
            </div>
        </div>
        <div class="steps">
            <div class="step-item is-completed  ">
                <div class="step-marker">
                <span class="icon">
                    <font-awesome-icon icon='parachute-box' />
                </span>
                </div>
                <div class="step-details">
                <p class="step-title">August 30th, 2018</p>
                <p>Hello World!</p>
                </div>
            </div>
            <div class="step-item is-completed">
                <div class="step-marker">
                    <span class="icon">
                        <font-awesome-icon icon='heart' />
                    </span>
                </div>
                <div class="step-details">
                <p class="step-title">2011-2012</p>
                <p>Fell in love with IT.</p>
                </div>
            </div>
            <div class="step-item is-completed">
                <div class="step-marker">
                    <span class="icon">
                        <font-awesome-icon icon='train' />
                    </span>
                </div>
                <div class="step-details">
                <p class="step-title">August, 2018</p>
                <p>Moved to Nantes, France to study IT.</p>
                </div>
            </div>
            <div class="step-item is-completed">
                <div class="step-marker">
                    <span class="icon">
                        <font-awesome-icon icon='graduation-cap' />
                    </span>
                </div>
                <div class="step-details">
                <p class="step-title">July 16th, 2018</p>
                <p>Got my Master's degree, ended at 1st rank.</p>
                </div>
            </div>
            <div class="step-item">
                <div class="step-marker">
                    <span class="icon">
                        <font-awesome-icon icon='plane-departure' />
                    </span>
                </div>
                <div class="step-details">
                    <p class="step-title">September, 2018</p>
                    <p>Moving to Dublin, Ireland</p>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>

export default {
  data: function () {
    return {
      keywords: ['Antoine Carat', 'looking for a Wed Devloper role in Dublin, Ireland', 'a Graduated developer', 'a DevOps believer', 'a Cloud lover', 'an Open-source enthusiatic', 'a Human being'],
      keywordID: 0,
    }
  },
  computed: {
    keyword () { return this.keywords[this.keywordID] },
  },
  mounted: function () {
    window.setInterval(() => {
      this.keywordID = Math.floor(Math.random() * this.keywords.length)
    }, 3000);
  }
}
</script>

<style scoped>
    img {
        margin-bottom: 3%;
        border-width: 2%;
        border-style: solid;
        border-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>