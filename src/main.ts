import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Triangle from './components/Triangle.vue'
import TextTriangle from './components/TextTriangle.vue'
import ReverseTriangle from './components/ReverseTriangle.vue'

Vue.component('app-triangle', Triangle)
Vue.component('app-triangle-text', TextTriangle)
Vue.component('app-triangle-reverse', ReverseTriangle)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
