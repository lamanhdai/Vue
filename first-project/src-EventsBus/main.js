import Vue from 'vue'
import App from './App.vue'
//khai báo component toàn cục

//bus component truyền dữ liệu gián tiếp giữa các component con
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
