<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Login Form</h3>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required /><br>
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue';

export default {
  components: {
    'form-helper': formHelper
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>