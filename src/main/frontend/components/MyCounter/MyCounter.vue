<template>
  <MyParagraph v-bind:text="'Count: ' + count"></MyParagraph>
  <button @click="increment" class="component-counter">Increment</button>
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

<style lang="scss">
.component-counter {
  color: darkred;
}
</style>
