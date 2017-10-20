<template>
  <div id="show-notification">
    <h1>All Notifications</h1>
    <input type="text" v-model="search" placeholder="Enter keyword">
    <div class="notification-item" v-for="item in filterSearch">
      <h2>{{ item.title | short-title }}</h2>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script>

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
    filterSearch: function() {
      return this.notifications.filter((noti) => {
        return noti.title.match(this.search);
      });
    }
  }
}
</script>

<style lang="scss">
</style>
