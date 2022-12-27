
<template>
    <div>
        <h1>List:</h1>
        <ul v-if="posts.length > 0">
            <TransitionGroup name="list" >
                <li v-for="post in posts" :key="post.id" class="list_item">
                    <p><strong>{{ post.title }}</strong></p>
                    <p>{{ post.body }}</p>
                    <my-button @click="removePost(post.id)">delete</my-button>
                </li>
            </TransitionGroup>
        </ul>
        <div v-else="posts.length===0">
            <h2>empty list</h2>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: 'my-list',
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

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.list-move{
    transition: transform 0.8s ease;
}
</style>