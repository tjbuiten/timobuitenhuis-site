<template>
  <section class="container">
    <section class="inner-container-top" v-bind:style="{'background-color': 'rgba(56, 161, 114,' + (0.5 + 0.25 * reversePercentage) + ')'}">
      <div class="small-item">
        <app-shape route="/work" v-bind:clickable="true" imageName="work" v-bind:outerShape="triangleLeftOuter" v-bind:innerShape="triangleLeftInner"/>
      </div>
    <div class="small-item">
      <app-shape imageName="mugshot" v-bind:outerShape="reverseTriangleOuter" v-bind:innerShape="reverseTriangleInner"/>
    </div>
    <div class="small-item">
      <app-shape route="/hobbies" v-bind:clickable="true" imageName="LucasOil" v-bind:outerShape="triangleRightOuter" v-bind:innerShape="triangleRightInner"/>
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
        default: 'Ik ben Timo Buitenhuis, 20 jaar oud, met een passie voor het vinden van creatieve oplossingen.\n\nIk heb in 2015 mijn HAVO diploma behaald, en ben vanaf dat moment bezig met de opleiding informatica. Tevens heb ik in 2017, gedurende mijn huidige opleiding, een cursus genaamd ‘Algorithms part 1’ van de Princeton University afgerond.\n\nBinnen het ‘programmeer-wereldje’ is het mijn sterke kant om creatieve oplossingen te vinden voor lastige software problemen. Ik heb kennis van databases, kennis over User Interfaces en kennis over alles wat zich tussen die twee afspeelt.  Binnen de informatica zijn er een hoop zaken die ik erg leuk vind om te doen, zoals het schrijven en bedenken van algoritmes en het maken van games. Waar ik mij echter nog wel het liefst mee bezighoudt, is het realiseren van de functionele kant van projecten. Het schrijven van functionele aspecten uit een systeem, en het ervoor zorgen dat alles zich gedraagt zoals dat verwacht wordt, is iets waar ik simpelweg heel erg van kan genieten. \n\nAls ik mijzelf in een zin zou moeten beschrijven zou ik zeggen dat ik een rustige, creatieve denker ben. Ik praat niet altijd evenveel, maar ben wel oplettend en kan goed luisteren. Door dat te combineren met mijn creativiteit kom ik vaak met oplossingen voor problemen die zich voordoen binnen software.',
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
