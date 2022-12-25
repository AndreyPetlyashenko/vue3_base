<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>


<style  scoped>
.button {
    border: 1px solid green;
    border-radius: 10px;
    font: 1em sans-serif;
    padding: 5px;
    margin: 5px;
    background-color: aquamarine;
    font-weight: 600;
    cursor: pointer;
}
</style>