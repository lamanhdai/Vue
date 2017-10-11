<template>
  <h1>{{ services }} is cool</h1>
</template>

<script>
import { bus } from '../main';

export default {
  data () {
    return {
      title: 'Vue2 is cool',
      services: 'service'
    }
  },
  //life cycle hook
  created(){
    //hàm on nhận dữ liệu
    bus.$on('serviceChanged', (data) => {
      this.services = data;
    })
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>