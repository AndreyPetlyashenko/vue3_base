
<template>
    <div>
        <h1>List:</h1>

        <ul v-if="posts.length > 0">
            <li v-for="post, index in posts" :key="index" class="list_item">
                <h3>{{ post.msg }}</h3>
                <h3>{{ post.date }}</h3>
                <my-button @click="removePost(index)">delete</my-button>
            </li>
        </ul>
        <div v-else="posts.length===0">
            <h2>empty list</h2>
        </div>
    </div>

</template>


<script lang="ts">
export default {
    props: {
        posts: Array<any>
    },
    methods: {
        removePost(id) {
            this.$emit('remove_post', id)
        }
    }
}
</script>

<style scoped>
.list_item {
    border: 1px solid green;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 10px;
}
</style>