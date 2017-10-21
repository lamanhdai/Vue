<template>
  <div id="show-notification">
    <h1>All Notifications</h1>
    <input type="text" v-model="search" placeholder="Enter keyword">
    <div class="notification-item" v-for="item in filterSearch">
      <h2 v-rainbow>{{ item.title | short-title }}</h2>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/SearchMixin';

export default {
  components: {
  },
  data() {
    return {
      notifications: [],
      search: 'a',
    }
  },
  methods: {
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      this.notifications = data.body.slice(0, 10);
    });
  },
  computed: {
  },
  filters: {
    // Thay thế đăng ký filter phạm vi global ở file main.js
    shortTitle: function(value){
      return `${value.slice(0, 20)}...`;
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2 ,8);
      }
    }
  },
  mixins: [searchMixin],
}
</script>

<style lang="scss">
</style>
