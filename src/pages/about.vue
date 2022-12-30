<template>
    <div>
        <h1 :style="{ textAlign: 'center', color: 'red' }" :class="{
        'hoverEffect': true}">About app page</h1>
        <p>App-List to check possibilities.</p>
    </div>
</template>

<script lang="ts">
export default {

}
</script>

<style   scoped>
*{
    text-align: center;
    color: green;
    font-size: 30px;
}
.hoverEffect:hover {
    font-size: 40px;
    cursor: pointer;
}
</style>