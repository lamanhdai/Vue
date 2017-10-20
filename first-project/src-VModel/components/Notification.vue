<template>
  <div id="notification">
    <h2>Notification</h2>
    <h3>Welcome new Vuer</h3>
    <!-- basic bind data -->
    <input type="text" placeholder="enter your name" v-model="name"><br>
    <input type="text" placeholder="enter your hobby" v-model="hobby"><hr>
    <div id="checkbox">
      <h3>Hobbies</h3>
      <label for="">game</label>
      <input type="checkbox" value="game" v-model="categories">
      <label for="">programming</label>
      <input type="checkbox" value="programming" v-model="categories">
      <label for="">hacker</label>
      <input type="checkbox" value="hacker" v-model="categories">
      <label for="">travel</label>
      <input type="checkbox" value="travel" v-model="categories">
    </div><hr>
    <div id="selectbox">
      <label>Foreign Language</label>
      <select v-model="selectLanguage">
        <option v-for="lang in languages">{{ lang }}</option>
      </select>
    </div><hr>

    <!-- update live data -->
    <div id="message">
      <h3>Survey</h3>
      <p class="thank">Thank {{ name }}</p>
      <p class="note">What do you often do ? {{ hobby }}</p>
      <div class="more_notes">
        <ul>
          <li v-for="category in categories">{{ category }}</li>
        </ul>
      </div>
      <p>Are you good at language ? <br>{{ selectLanguage }}</p>
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
      hobby: "",
      categories: [],
      selectLanguage: "",
      languages: ['English', 'French'],
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
