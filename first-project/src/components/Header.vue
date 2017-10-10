<template>
  <h1>{{ headerTitle }} is cool</h1>
</template>

<script>

export default {
  props: {
    //thiets lập validation cho prop headerTitle
    headerTitle: {
      type: String,
    }
  },
  data () {
    return {
      title: 'Vue2 is cool'
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>