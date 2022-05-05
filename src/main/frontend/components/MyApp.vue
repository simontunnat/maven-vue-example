<template>
  <my-counter></my-counter>
  <my-paragraph text="A paragraph"></my-paragraph>
  <my-paragraph text="Another paragraph"></my-paragraph>
</template>

<script>
import MyParagraph from "./MyParagraph.vue";
import MyCounter from "./MyCounter.vue";

export default {
  components: {
    'MyParagraph': MyParagraph,
    'MyCounter': MyCounter
  }
}
</script>
