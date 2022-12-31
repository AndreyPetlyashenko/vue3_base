<template>
  <select @change="selectHandler">
    <option disabled selected>Choose option</option>
    <option
      :value="option.value"
      :key="option.value"
      v-for="option in (options as Array<{ [key: string]: any }>)"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    selectedSort: String
  },
  name: "my-sorting",
  methods: {
    selectHandler(e: any) {
      this.$emit("update:selectedSort", e.target.value);
    }
  }
};
</script>

<style scoped></style>
