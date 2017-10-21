import Vue from 'vue'
import App from './App.vue'
//gói vue-resource hỗ trợ ajax cho vue
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

//set up path cho page
import Router from './router'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Router,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
