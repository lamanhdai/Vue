<template>
  <div id="show-notification">
    <h1>All Notifications</h1>
    <div class="notification-item" v-for="item in notifications">
      <h2>{{ item.title }}</h2>
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
      notifications: []
    }
  },
  methods: {
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      this.notifications = data.body.slice(0, 10);
    });
  }
}
</script>

<style lang="scss">
</style>
