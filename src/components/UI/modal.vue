<template>
    <div class="modal_container" v-if="show" @click="hideModal">
        <div class="content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import toggleMixin from '@/mixins/toggleMixin.js'

export default {
    name: "my-modal",
    mixins: [toggleMixin]
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
    background-color: white;
    border-radius: 12px;
    padding: 10px;

}
</style>