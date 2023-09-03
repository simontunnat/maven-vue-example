<template>
  <div class="component-counter">
    <MyParagraph
      v-if="text"
      :text="text"
    />
    <MyParagraph :text="'Count: ' + counter.count" />
    <button @click="increment">
      Increment
    </button>
    <!-- This will not be reported by ESLint but will fail the ts compiler in production mode -->
    <MyParagraph :text="testCompilerIssue().count" />
  </div>
</template>

<script setup lang="ts">
import MyParagraph from "../MyParagraph/MyParagraph.vue";
import {ref} from 'vue';
import {Counter} from "./Counter";
import {testCompilerIssue} from "./testCompilerIssue";

defineProps<{
  text?: string
}>();

const counter = ref<Counter>({count: 0});

function increment(): void {
  counter.value.count++;
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
