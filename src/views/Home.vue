<template>
    <section class="container">
        <section class="inner-container-top">
          <div class="small-item">
            <app-shape v-bind:clickable="false"  v-bind:outerShape="this.triangleLeftOuter" v-bind:innerShape="this.triangleLeftInner"/>
          </div>
          <div class="small-item">
            <app-shape v-bind:clickable="false"  v-bind:outerShape="this.triangleRightOuter" v-bind:innerShape="this.triangleRightInner"/>
          </div>
        </section>
        <section class="inner-container-middle">
          <div class="floating item">
            <app-shape route="/me" v-bind:clickable="true"  imageName="mugshot" v-bind:outerShape="this.triangleOuter" v-bind:innerShape="this.triangleInner"/>
          </div>
          <div class="floating-reverse item">
            <app-shape route="/hobbies" v-bind:clickable="true" imageName="LucasOil"  v-bind:outerShape="this.reverseTriangleOuter" v-bind:innerShape="this.reverseTriangleInner"/>
          </div>
          <div class="floating item">
            <app-shape route="/work" v-bind:clickable="true"  imageName="work" v-bind:outerShape="this.triangleOuter" v-bind:innerShape="this.triangleInner"/>
          </div>
        </section>
        <section class="inner-container-bottom">
          <div class="small-item">
            <app-shape v-bind:clickable="false"  v-bind:outerShape="this.triangleOuter" v-bind:innerShape="this.triangleBottomInner"/>
          </div>
        </section>
    </section>
</template>

<script lang="ts">
import { SHAPES } from '../mixins/shapes'
import Vue from 'vue'

export default Vue.extend({
  mixins: [SHAPES]
})
</script>

<style scoped>
.container {
  width: inherit;
  height: inherit;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.inner-container-top {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 15%;
  min-height: 75px;
  background-color: rgba(56, 161, 114, 0.5);
}

.inner-container-middle {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    height: 100%;
    box-shadow:
      inset 0px 15px 8px -10px #CCC,
      inset 0px -15px 8px -10px #CCC;
}

.inner-container-bottom {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-end;
  height: 15%;
  min-height: 75px;
  background-color: rgba(56, 161, 114, 0.5);
}
.item {
  width: 20vw;
  height: 20vw;
}

.small-item {
  width: 10vw;
  height: 10vw;
}

.floating {
    animation-name: floating;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

.floating-reverse {
    animation-name: floating-reverse;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating {
    from { transform: translate(0,  0px); }
    60%  { transform: translate(0px, 10px); }
    to   { transform: translate(0, -0px); }
}

@keyframes floating-reverse {
    from { transform: translate(0,  0px); }
    60%  { transform: translate(0px, -10px); }
    to   { transform: translate(0, -0px); }
}
</style>
