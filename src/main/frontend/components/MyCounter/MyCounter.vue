<template>
  <div class="component-counter">
    <MyParagraph :text="'Count: ' + count" />
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
import MyParagraph from "../MyParagraph/MyParagraph.vue";
import {ref} from 'vue';

const count = ref(0);

function increment(): void {
  count.value++;
}
</script>

<style lang="scss">
/* CSS will not work if the component is mounted as a web component, because of the shadow dom :( */
.component-counter {
  color: darkred;
  border: 1px solid darkred;
  padding: 1em;
}

.component-counter .component-paragraph {
  color: darkmagenta;
  border: 1px solid darkmagenta;
}
</style>
