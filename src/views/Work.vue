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
        <div class="item">
          <app-shape imageName="work" v-bind:outerShape="rhombusOuter" v-bind:innerShape="rhombusInner"/>
        </div>
        {{ text }}
        <div class="item">
          <app-shape imageName="work" v-bind:outerShape="rhombusOuter" v-bind:innerShape="rhombusInner"/>
        </div>
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
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id bibendum tellus, sed tristique mauris. Aliquam erat volutpat. Ut eleifend lorem eget erat condimentum rutrum. Vestibulum pharetra, eros ut commodo vehicula, velit nibh dignissim erat, et consectetur eros nulla a orci. Curabitur imperdiet posuere mattis. Donec commodo fringilla odio sed fermentum. Sed mattis erat in massa faucibus, a hendrerit nisi tempus.Maecenas molestie sollicitudin lorem, non convallis mauris rhoncus quis. Curabitur sollicitudin, nisl eu dapibus auctor, orci mauris vestibulum leo, vitae rhoncus nibh purus eu nibh. Nunc id ultrices enim. Sed id interdum erat, nec pretium nunc. Suspendisse lectus enim, iaculis id convallis id, porta varius tortor. Mauris vel tempus urna, porttitor lacinia justo. Aenean posuere molestie feugiat. Ut mauris nibh, condimentum at arcu nec, tincidunt placerat purus. Etiam hendrerit pellentesque lacus id congue. Vestibulum vel interdum tellus. Mauris eleifend bibendum consequat. In hac habitasse platea dictumst. Nullam quis nunc in elit consectetur tempor sed placerat erat. Fusce consectetur varius placerat. Phasellus tempus felis et tincidunt blandit. Sed fermentum dui et ullamcorper rhoncus.Suspendisse eget purus tellus. Nullam a lacus in felis tincidunt commodo id vel dui. Nullam felis magna, dignissim non fringilla et, interdum id enim. Quisque non felis dapibus elit laoreet aliquet. Praesent ornare libero turpis, vel euismod est fermentum ac. Mauris non imperdiet enim. Donec a elementum est. Sed lobortis, ligula id porta auctor, tellus lacus gravida magna, quis molestie odio quam vel lectus. Nam gravida tempus quam ut fringilla. Praesent hendrerit sem laoreet ante consequat dictum. Nulla vitae eros interdum, pulvinar sem rutrum, bibendum lacus. Sed rhoncus varius faucibus. Duis a odio consequat, egestas nisi in, interdum magna.Nam a lacus ac leo ornare rhoncus eleifend eget nulla. Sed rhoncus dolor aliquet est dictum, sed varius ex mattis. Aenean consectetur enim ac metus ornare, feugiat imperdiet ipsum pretium. Curabitur ornare dignissim quam. Nam ac elementum felis, quis sollicitudin enim. Nulla vehicula orci quis tortor sollicitudin semper. Aliquam vulputate est vitae efficitur euismod. Aenean hendrerit mattis ante nec elementum. Pellentesque volutpat lobortis risus, id rutrum ante dictum vitae. Nam euismod ultricies vehicula. Vestibulum ultrices ornare nulla, sed tempus nisi laoreet et.Cras fermentum sem vitae massa aliquet luctus. Nam odio turpis, pretium ut interdum ut, laoreet at odio. Cras eleifend fermentum odio, ut mattis neque cursus sed. Praesent vel leo risus. Pellentesque elit tortor, porttitor sit amet urna vel, condimentum molestie tortor. Nullam purus lorem, sodales nec interdum sed, malesuada at magna. Vivamus sit amet vulputate neque. Donec interdum nec neque iaculis tempor. Aliquam erat volutpat. Fusce leo lorem, accumsan ac sapien vel, egestas scelerisque nunc. Maecenas eu mauris dui. Curabitur laoreet nibh a hendrerit accumsan. Aenean finibus leo vitae egestas sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et leo a mi sagittis auctor dictum sed ipsum. Duis ornare faucibus blandit.',
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
