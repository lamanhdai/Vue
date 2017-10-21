<template>
  <div id="notification">
    <h2>Notification</h2>
    <h3>Welcome new Vuer</h3>
    <!-- basic bind data -->
    <form v-if="!submitted">
      <input type="text" placeholder="enter your name" v-model="name"><br>
      <input type="text" placeholder="enter your feedback" v-model="feedback"><hr>
      <button @click.prevent="save">Save</button> <hr>
    </form>

    <!-- update live data -->
    <div id="message" v-if="submitted">
      Haha your information is hacked!
      <!-- <h3>Survey</h3>
      <p class="thank">Thank {{ name }}</p>
      <p class="note">What do you often do ? {{ feedback }}</p> -->
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      name: "",
      feedback: "",
      submitted: false,
    }
  },
  methods: {
    save: function() {
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.name,
        body: this.feedback,
        userId: 2
      }).then(function(data){
        this.submitted = true;
      });
    }
  }
}
</script>

<style lang="scss">
</style>
