<template>
  <p class="component-paragraph">{{ text }}</p>
</template>

<script setup>
defineProps({
  'text': String
})
</script>

<style lang="scss">
/* CSS will not work if the component is mounted as a web component, because of the shadow dom :( */
.component-paragraph {
  color: darkgreen;
  border: 1px solid darkgreen;
  padding: 1em;
}
</style>
