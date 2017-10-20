<template>
  <div>
    <!-- thẻ keep-alive giữ data mới nhất cho component cũ khi switch (thay thế) component mới -->
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <hr>
    <button @click="component = 'form-login'">Login</button> or
    <button @click="component = 'form-register'">Register</button>
  </div>
</template>

<script>
import formLogin from './components/FormLogin.vue';
import formRegister from './components/FormRegister.vue';

export default {
  components: {
    'form-login': formLogin,
    'form-register': formRegister,
  },
  data() {
    return {
      component: 'form-login'
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
