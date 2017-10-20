import Vue from 'vue'
import App from './App.vue'
//gói vue-resource hỗ trợ ajax cho vue
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
