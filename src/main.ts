import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Shape from './components/Shape.vue'

Vue.component('app-shape', Shape)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
