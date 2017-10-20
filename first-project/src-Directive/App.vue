<template>
  <show-notification></show-notification>
</template>

<script>
import Notification from './components/Notification.vue';
import ShowNotification from './components/ShowNotification.vue';
export default {
  components: {
    'notification': Notification,
    'show-notification': ShowNotification,
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
