<template>
    <nav>
       <my-button @click="$router.push('/')">Logo here!</my-button>
        <div class="nav__bar">
            <my-button @click="$router.push('/posts')">Posts</my-button>
            <my-button @click="$router.push('/about')">About</my-button>
        </div>
    </nav>
</template>

<script lang="ts">
export default{

}
</script>

<style  scoped>
nav{
    height: 50px;
    background-color: aquamarine;
    box-shadow: 2px 2px 4px grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>