<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Notification from './components/Notification.vue';
import ShowNotification from './components/ShowNotification.vue';
import TitleNotification from './components/TitleNotification.vue';
import Header from './components/Header.vue';
export default {
  components: {
    'notification': Notification,
    'show-notification': ShowNotification,
    'title-notification': TitleNotification,
    'app-header': Header,
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
