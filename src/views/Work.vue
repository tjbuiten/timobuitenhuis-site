<template>
  <section class="container">
    <section class="inner-container-top" v-bind:style="{'background-color': 'rgba(56, 161, 114,' + (0.5 + 0.25 * reversePercentage) + ')'}">
      <div class="small-item">
        <app-shape route="/hobbies" v-bind:clickable="true" imageName="LucasOil" v-bind:outerShape="triangleLeftOuter" v-bind:innerShape="triangleLeftInner"/>
      </div>
    <div class="small-item">
      <app-shape imageName="work" v-bind:outerShape="reverseTriangleOuter" v-bind:innerShape="reverseTriangleInner"/>
    </div>
    <div class="small-item">
      <app-shape route="/me" v-bind:clickable="true" imageName="mugshot" v-bind:outerShape="triangleRightOuter" v-bind:innerShape="triangleRightInner"/>
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
      text: {
        default: 'Naast mijn opleiding sta ik op werkgebied natuurlijk niet stil! Ik heb over de afgelopen jaren heen meerdere projecten mogen uitvoeren waarbij ik verscheidene websites heb gemaakt. Zo heb ik gewerkt aan een website voor de volgende personen en/of instanties:\nHet Citroën C6- Genootschap - http://www.citroenc6-genootschap.nl/site2/\nDe Rotterdamse Snijschool - https://snijschool.nl/\nMetBuitenhuis - https://metbuitenhuis.nl/\n',
        type: String
      },
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
