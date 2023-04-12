<template>
  <MyParagraph v-bind:text="'Count: ' + count"></MyParagraph>
  <button @click="increment" class="component-counter">Increment</button>
</template>

<script setup>
import MyParagraph from "../MyParagraph/MyParagraph.vue";
import {ref} from 'vue'

const count = ref(0)

function increment() {
  count.value++;
}
</script>

<style lang="scss">
.component-counter {
  color: darkred;
}
</style>
