<template>  
    <section class="container">
      <section class="inner-container-top">
        <div class="top-left">
          <app-shape route="/hobbies" imageName="LucasOil" v-bind:outerShape="triangleLeftOuter" v-bind:innerShape="triangleLeftInner"/>
        </div>
        <div class="top-right">
          <app-shape route="/me" imageName="mugshot" v-bind:outerShape="triangleRightOuter" v-bind:innerShape="triangleRightInner"/>
        </div>
      </section>
      <section class="inner-container-middle">
        <div class="item">
          <app-shape-text imageName="work" v-bind:outerShape="triangleOuter" v-bind:innerShape="triangleInner"/>
        </div>
      </section>
      <section class="inner-container-bottom">
        <div class="small-item">
          <app-shape route="/" v-bind:outerShape="triangleOuter" v-bind:innerShape="triangleInner"/>
        </div>
      </section>
    </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
        triangleOuter: {
          'clip-path': 'polygon(50% 0%, 0 100%, 100% 100%)'
        },
        triangleInner: {
          'clip-path': 'polygon(50% 10%, 7% 96%, 93% 96%)'
        },
        reverseTriangleOuter: {
          'clip-path': 'polygon(50% 100%, 0 0, 100% 0)'
        },
        reverseTriangleInner: {
          'clip-path': 'polygon(50% 90%, 7% 4%, 93% 4%)'
        },
        triangleLeftOuter: {
          'clip-path': 'polygon(0 0, 0% 100%, 100% 0)'
        },
        triangleLeftInner: {
          'clip-path': 'polygon(0 0, 0% 90%, 90% 0)'
        },
        triangleRightOuter: {
          'clip-path': 'polygon(0 0, 100% 100%, 100% 0)'
        },
        triangleRightInner: {
          'clip-path': 'polygon(10% 0, 100% 90%, 100% 0)'
        },
    }
  }
}


</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: #ccc;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.inner-container-top {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: orange;
}

.inner-container-middle {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: orangered;
}

.inner-container-bottom {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: red;
  align-content: flex-end;
}

.item {
  /** ADD AUTOSCALING TO THIS **/
  width: 400px;
  height: 400px;
}

.small-item {
  width: 200px;
  height: 200px;
}

.top-left {
  width: 200px;
  height: 200px;
}

.top-right {
  width: 200px;
  height: 200px;
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
