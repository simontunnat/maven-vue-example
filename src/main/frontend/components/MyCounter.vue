<template>
  <my-paragraph v-bind:text="'Count: ' + count"></my-paragraph>
  <button @click="increment">Increment</button>
</template>

<script>
import MyParagraph from "./MyParagraph.vue";

export default {
  data() {
    return {
      count: 0
    }
  },
  components: {
    'MyParagraph': MyParagraph
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
