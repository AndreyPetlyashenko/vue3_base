<template>
    <div>
        <input :value='modelValue' :type=input_type @input="updateHandler">
    </div>
</template>

<script lang="ts">
export default {
    name: 'my-input',
    props: {
        input_type: String,
        modelValue: [String, Number]
    },
    methods: {
        updateHandler(e: any) {
            // this how it works under the hood (two-way binding). 
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style  scoped>
input {
    border: 1px solid green;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}
</style>