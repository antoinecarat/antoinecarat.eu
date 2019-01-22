<template>
  <div class="timeline">
    <h3 class="timeline-title">{{title}}</h3>
    <div class="timeline-content">
      <span class="timeline-control timeline-control-left" :class="{'is-disabled': !canMoveLeft()}" @click="moveLeft()" v-show="this.events != []">
        <font-awesome-icon icon="caret-left" />
      </span>
      <div class="events-wrapper">
        <div class="timeline-placeholder" v-show="this.events.length < 1">
          No event to show, sorry about that!
        </div>
        <div class="timeline-event" :class="{completed: event.completed}" v-for="event in displayedEvents" :key="event.title">
          <div class="timeline-event-badge">
              <font-awesome-icon :icon=event.icon />
          </div>
          <span class="timeline-event-dates">{{event.date}}</span>
          <div class="timeline-event-content">
            <p class="timeline-event-title">{{event.title}}</p>
            <p class="timeline-event-text">{{event.text}}</p>
          </div>
        </div>
      </div>
      <span class="timeline-control timeline-control-right" :class="{'is-disabled': !canMoveRight()}" @click="moveRight()" v-show="this.events != []">
        <font-awesome-icon icon="caret-right" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    events: {
      type: Array,
      default: []
    }
  },
  data: function () {
    return {
      firstIndex: 5,
      lastIndex: 6
    }
  },
  computed: {
    displayedEvents() {
      return this.events.slice(this.firstIndex, this.lastIndex);
    }
  },
  methods: {
    canMoveLeft() {
      return this.firstIndex != 0;
    },
    canMoveRight() {
      return this.lastIndex != this.events.length;
    },
    moveLeft(){
      if (this.firstIndex != 0) {
        this.firstIndex -= 1;
        this.lastIndex -= 1;
      }
    },
    moveRight(){
      if (this.lastIndex != this.events.length) {
        this.firstIndex += 1;
        this.lastIndex += 1;
      }
    }
  }
}
</script>

<style lang="scss">

.timeline {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
    
  .timeline-title {
    margin-top: 0;
  }

  .timeline-control {
    position: absolute;
    &.timeline-control-left {
      top: 50%;
      left: 0
    }
    &.timeline-control-right {
      top: 50%;
      right: 0
    }

    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.is-disabled {
      color: gray;
      cursor: default;
    }
  }

  .timeline-content {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    overflow:  hidden;
    position: relative;

    .events-wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-items: flex-start;
    }

    .timeline-event {
      width: 80%;
      padding: 1% 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .timeline-event-badge {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5rem;
        height: 2.5rem;
        border: .2rem solid rgba(128, 128, 128, 0.5);
        border-radius: 50%;
        position: relative;
        margin-bottom: 1rem;
      }

      &.completed .timeline-event-badge {
        border-color: rgba(30, 144, 255, 0.7);
      }

      .timeline-event-dates {
        font-weight: 600;
      }

      .timeline-event-content {
        display:  flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 5%;

        .timeline-event-title {
          font-size: 1rem;
          margin: 5% 0;
        }

        .timeline-event-text {
          font-size: .8rem;
        }
      }
    }
  }
}

</style>
