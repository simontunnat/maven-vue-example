<template>
  <p>Count: {{count}}</p>
  <button @click="increment">Increment</button>
</template>

<style>

</style>

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
  },
}
</script>
