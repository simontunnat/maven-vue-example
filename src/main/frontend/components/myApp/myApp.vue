<template>
  <my-counter></my-counter>
  <!-- using components that are available as custom elements is simpler -->
  <my-paragraph text="A paragraph"></my-paragraph>
  <my-paragraph text="Another paragraph"></my-paragraph>
</template>

<script>
import myCounter from "../myCounter/myCounter.vue";

export default {
  components: { myCounter }
}
</script>
