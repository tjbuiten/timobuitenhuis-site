import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Shape from './components/Shape.vue'
import TextShape from './components/TextShape.vue'

Vue.component('app-shape', Shape)
Vue.component('app-shape-text', TextShape)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
