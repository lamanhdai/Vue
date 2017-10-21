new Vue({
  el: '#vue-app',
  data: {
    a: 0,
    b: 0,
    startNumber: 10
  },
  methods: {
    // Plusa: function(){
    //   return this.a + this.startNumber;
    // },
    // Plusb: function(){
    //   return this.b + this.startNumber;
    // }
  },
  //hàm computed dùng tối ưu performance gọi phương thức - theo dõi giá trị nào của data thay đổi
  computed: {
    Plusa: function(){
      console.log('Plusa');
      return this.a + this.startNumber;
    },
    Plusb: function(){
      console.log('Plusb');
      return this.b + this.startNumber;
    }
  }
});