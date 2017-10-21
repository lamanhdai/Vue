import Vue from 'vue'
import App from './App.vue'
//gói vue-resource hỗ trợ ajax cho vue
import VueResource from 'vue-resource'

Vue.use(VueResource);

//Filters
// Vue.filter('short-title', function(value){
//   return `${value.slice(0, 20)}...`;
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
