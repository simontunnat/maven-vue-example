<template>
  <p class="component-paragraph">{{ text }}</p>
</template>

<script>
export default {
  props: {
    'text': String
  }
}
</script>

<style lang="scss">
.component-paragraph {
  color: darkgreen;
}
</style>
