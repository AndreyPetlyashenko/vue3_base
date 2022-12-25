
<template>
    <div>
        <h1>List:</h1>
        <ul>
            <li v-for="post, index in posts" :key="index" class="list_item">
                <h3>{{ post.msg }}</h3>
                <h3>{{ post.date }}</h3>
                <my-button>delete</my-button>
            </li>
        </ul>
    </div>

</template>


<script lang="ts">
export default {
    props: {
        posts: Array<any>
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