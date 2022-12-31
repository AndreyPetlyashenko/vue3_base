<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "my-button"
};
</script>

<style scoped>
.button {
  border: 1px solid green;
  border-radius: 10px;
  font: 1em sans-serif;
  margin-left: 10px;
  background-color: aquamarine;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
}
</style>
