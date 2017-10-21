Vue.component('greeting', {
  template: '<p>Hey there, this is {{name}} <button v-on:click="changeName">change name</button> component</p>',
  data: function() {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function(){
      this.name = 'Mario';
    }
  }
});
new Vue({
  el: '#vue-app-one',
});

new Vue({
  el: '#vue-app-two',
});