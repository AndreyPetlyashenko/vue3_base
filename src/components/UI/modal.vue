<template>
    <div class="modal_container" v-if="show">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        show: Boolean
    },
    name: "my-modal"
}
</script>

<style  scoped>
.modal_container {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
}

.content {
    margin: auto;
}
</style>