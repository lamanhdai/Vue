new Vue({
  el: '#vue-app',
  data: {
    name: 'Shaun',
    job: 'frontend',
    url: 'http://google.com',
    websiteTag: '<a href="facebook.com">facebook</a>',
    number: 1,

    x: 0,
    y: 0
  },
  methods: {
    greet: function(time){
      return 'Good '+ time + ' ' + this.name;
    },
    add: function(no){
      this.number += no;
    },
    minus: function(no){
      this.number -= no;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    search: function(){
      alert('This page is maintaining')
    }
  }
});