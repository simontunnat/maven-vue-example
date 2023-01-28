<template>
  <MyParagraph v-bind:text="'Count: ' + count"></MyParagraph>
  <button @click="increment">Increment</button>
</template>

<script>
import MyParagraph from "../MyParagraph/MyParagraph.vue";

export default {
  components: {
    MyParagraph
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
