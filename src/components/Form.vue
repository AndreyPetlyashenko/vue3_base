<template>
    <div>
        <h1>Form</h1>
        <form>
            <!--  two-way binding
                v-model="message" -- standart model with 'modelValue'
                v-model:value="message" -- model for any atribute for exmpl -  'value' 
            -->
            <my-input v-model="message" :input_type="'text'" :placeholder="'msg...required'"  v-focus/>
            <my-input v-model="date" :input_type="'text'" :placeholder="'date...required'"/>

            <my-button @click.prevent="createPost" :style="{
                marginLeft: '15px',
                textTransform: 'Capitalize',
            }">
                make post</my-button>
        </form>
    </div>
</template>

<script lang="ts">
export default {
    name:'my-form',
    data: () => ({
        message: "",
        date: "",
    }),
    methods: {
        createPost() {
            const post = { title: this.message, body: this.date };            
            this.message && this.date && this.$emit("make-post", post);
            this.message = "";
            this.date = "";
        },
    },
};
</script>
