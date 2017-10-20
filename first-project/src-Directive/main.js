import Vue from 'vue'
import App from './App.vue'
//gói vue-resource hỗ trợ ajax cho vue
import VueResource from 'vue-resource'

Vue.use(VueResource);

//Custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2 ,8);
  }
});

Vue.directive('layout', {
  bind(el, binding, vnode) {
    if(binding.value === 'center') {
      el.style.textAlign = "center";
    } else if (binding.value === 'right') {
      el.style.textAlign = "right";
    }

    if(binding.arg === 'border') {
      el.style.borderBottomWidth = "1px";
      el.style.borderBottomStyle = "solid";
      el.style.borderBottomColor = "#000";
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
