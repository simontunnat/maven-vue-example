<template>
  <MyCounter></MyCounter>
  <!-- using components that are available as custom elements is simpler -->
  <MyParagraph text="A paragraph"></MyParagraph>
  <MyParagraph text="Another paragraph"></MyParagraph>
</template>

<script>
import MyCounter from "../MyCounter/MyCounter.vue";
import MyParagraph from "../MyParagraph/MyParagraph.vue";

export default {
  components: {
    MyCounter, MyParagraph
  }
}
</script>
