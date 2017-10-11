<template>
  <div>
    <p>this is content</p>
    <ul>
      <li v-for="subject in learnings" v-bind:class="{ finished: subject.finish }">
        {{ subject.name }}: {{ subject.priority }}
        <p><button v-on:click="subject.finish = !subject.finish">Finish</button></p>
        <p v-bind:class="{ status: subject.finish }">
          status: <span v-if="subject.finish">finished</span>
          <span v-else>not yet</span>
        </p>

        <p><button v-on:click="changeTitle(subject.name)">Get Subject</button></p>
      </li>
    </ul>
    {{ testProps }}
  </div>
</template>

<script>
import { bus } from '../main';

export default {
  props: {
    //thiets lập validation cho prop learning
    learnings: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      services: ''
    }
  },
  methods: {
    changeTitle: function(data){
      this.services = data;
      //hàm emit truyền dữ liệu
      bus.$emit('serviceChanged', this.services);
    }
  },
  computed: {
    testProps: function(){
      console.log("this is array");
      //goi props trong component con
      console.log(this.learnings);
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  li {
    flex-basis: 200px;
    border: 1px solid #ccc;
    &.finished {
      color: green;
    }
  }
  .status {
    color: green;
  }
}
</style>
