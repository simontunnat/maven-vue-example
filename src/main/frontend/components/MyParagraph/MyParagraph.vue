<template>
  <p class="component-paragraph">{{ text }}</p>
</template>

<script setup>
defineProps({
  'text': String
})
</script>

<style lang="scss">
.component-paragraph {
  color: darkgreen;
}
</style>
