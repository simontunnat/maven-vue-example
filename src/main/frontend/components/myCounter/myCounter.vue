<template>
  <my-paragraph v-bind:text="'Count: ' + count"></my-paragraph>
  <button @click="increment">Increment</button>
</template>

<script>
export default {
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
