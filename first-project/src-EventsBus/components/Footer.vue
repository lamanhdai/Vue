<template>
  <footer>
    <p>{{ services }}</p>
  </footer>
</template>

<script>
import { bus } from '../main';

export default {
  data () {
    return {
      text: 'this is footer',
      services: ''
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
footer {
  text-align: center;
}
</style>