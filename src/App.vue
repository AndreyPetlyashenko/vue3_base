<template>
  <navbar></navbar>
  <div class="app">

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/UI/navbar.vue"
export default {
  components: {
    Navbar
  }
}
</script>

<style   scoped>

</style>