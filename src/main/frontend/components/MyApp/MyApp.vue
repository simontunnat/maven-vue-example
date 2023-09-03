<template>
  <div>
    <MyParagraph text="A paragraph in the App" />
    <MyCounter />
    <MyParagraph text="Another paragraph in the App" />
  </div>
</template>

<script setup lang="ts">
import MyCounter from "../MyCounter/MyCounter.vue";
import MyParagraph from "../MyParagraph/MyParagraph.vue";
</script>
