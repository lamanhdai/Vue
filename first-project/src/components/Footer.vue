<template>
  <footer>
    <p>{{ text }}</p>
  </footer>
</template>

<script>

export default {
  data () {
    return {
      text: 'this is footer'
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
}
</style>