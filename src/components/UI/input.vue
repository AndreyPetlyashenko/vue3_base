<template>
  <input
    :value="modelValue"
    :type="input_type"
    @input="updateHandler"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
export default {
  name: "my-input",
  props: {
    input_type: String,
    modelValue: [String, Number],
    placeholder: {
      type: String,
      required: true
    }
  },
  methods: {
    updateHandler(e: any) {
      // this how it works under the hood (two-way binding).
      this.$emit("update:modelValue", e.target.value);
    }
  }
};
</script>

<style scoped>
input {
  border: 1px solid green;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  width: 100vh;
}
</style>
