<template>
  <div>
    <form action="">
      <div id="form-header">
        <slot name="form-header">
        </slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="links">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>