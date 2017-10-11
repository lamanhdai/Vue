<template>
  <div>
    <app-header></app-header>
    <app-todo v-bind:learnings="learnings"></app-todo>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Todo from './components/Todo.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-todo': Todo,
  },
  data() {
    return {
      learnings: [
        { name: 'React', priority: 'normal', finish: false},
        { name: 'Vue', priority: 'high', finish: false},
        { name: 'Bootstrap4', priority: 'high', finish: true}
      ],
      title: ''
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
