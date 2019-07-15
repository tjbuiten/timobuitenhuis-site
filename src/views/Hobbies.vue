<template>
  <section class="container">
    <section class="inner-container-top" v-bind:style="{'background-color': 'rgba(56, 161, 114,' + (0.5 + 0.25 * reversePercentage) + ')'}">
      <div class="small-item">
        <app-shape route="/me" v-bind:clickable="true" imageName="mugshot" v-bind:outerShape="triangleLeftOuter" v-bind:innerShape="triangleLeftInner"/>
      </div>
    <div class="small-item">
      <app-shape imageName="LucasOil" v-bind:outerShape="reverseTriangleOuter" v-bind:innerShape="reverseTriangleInner"/>
    </div>
    <div class="small-item">
      <app-shape route="/work" v-bind:clickable="true" imageName="work" v-bind:outerShape="triangleRightOuter" v-bind:innerShape="triangleRightInner"/>
    </div>
    </section>
    <section class="inner-container-middle" v-on:scroll="onScroll">
      <div class="middle-text">
        {{ text }}
      </div>
      <div class="fade"/>
    </section>
    <section class="inner-container-bottom" v-bind:style="{'background-color': 'rgba(56, 161, 114,' + (0.5 + 0.25 * percentage) + ')'}">
      <div class="small-item">
        <app-shape v-bind:clickable="true" route="/" v-bind:outerShape="triangleOuter" v-bind:innerShape="triangleBottomInner"/>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { SHAPES } from '../mixins/shapes'
import Vue from 'vue'

export default Vue.extend({
  mixins: [SHAPES],
  data () {
    return {
      text: 'Naast het programmeren sport ik graag. In de winter speel ik ijshockey en ben ik op de piste te vinden. In de zomer speel ik onder andere trompet bij een drumcorps genaamd Jubal, skate ik, schaak ik en los ik Rubik’s cubes op. Ik ben in alle seizoenen op zoek naar nieuwe ervaringen en houdt ervan om mijzelf uit te dagen door dingen te doen die buiten mijn comfort zone liggen. Binnen mijn comfort zone ben ik echter ook hard aan de slag! Ik ben in mijn vrije tijd veel bezig om boeken over, hoofdzakelijk, psychologie door te bladeren. Al met al doe ik dus enorm veel!',
      percentage: 0,
      reversePercentage: 1
    }
  },
  methods: {
    onScroll: function (evt) {
      let post = evt.target
      let st = post.scrollTop
      let sh = post.scrollHeight
      let ch = post.clientHeight

      this.percentage = ((st / (sh - ch)))
      this.reversePercentage = (1 - (st / (sh - ch)))
    }
  }
})
</script>

<style scoped>
@import "../mixins/item-styling.css";
@import "../mixins/detail-screen-styling.css";
</style>
