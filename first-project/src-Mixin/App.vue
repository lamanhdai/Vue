<template>
  <div>
    <show-notification></show-notification>
    <title-notification></title-notification>
  </div>
</template>

<script>
import Notification from './components/Notification.vue';
import ShowNotification from './components/ShowNotification.vue';
import TitleNotification from './components/TitleNotification.vue';
export default {
  components: {
    'notification': Notification,
    'show-notification': ShowNotification,
    'title-notification': TitleNotification,
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
