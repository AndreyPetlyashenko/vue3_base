<script  lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      lists: [],
      show_modal: false,
      isPostLoaded: false,
      sortingOptions: [
        { name: 'on title', value: 'title' },
        { name: 'on body', value: 'body' },
      ],
      selectedSort: ''
    }
  },
  methods: {
    postHandler(post: { [key: string]: any }) {
      post.id = this.lists.length + 1
      this.lists.push(post)
      this.show_modal = false
    },
    showModal() {
      this.show_modal = true
    },
    removeHandler(id:string) {
      this.lists = this.lists.filter(post => post.id != id)
    },
    async getPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.lists = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isPostLoaded = true
      }
    },
  },
  mounted() {
    this.getPosts();
  },
  // watch: {
  //   selectedOption(newList) {
  //     // name of the function should be same as v-model. 
  //     // The func run when its argument changed (useEffect)
  //     this.lists.sort((post1: any, post2: any) => post1[newList].localeCompare(post2[newList]))
  //   }
  //   // To track objects we need use option deep:true// exmpl: selectedOption:{handler(objct){},deep:true}
  // },
  computed: {
    sortedPosts() { //like useMemo. same func like above
      return [...this.lists].sort((post1: any, post2: any) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    }
  },

}

</script>

<template>

  <my-sorting :options="sortingOptions" v-model:selectedSort="selectedSort"></my-sorting>

  <my-button @click="showModal">
    make a new post
  </my-button>
  <my-modal v-model:show="show_modal">
    <my-form @make-post="postHandler"></my-form>
  </my-modal>
  <div v-if="!isPostLoaded">
    <h1>Loading..</h1>
  </div>
  <my-list :posts="sortedPosts" @remove_post="removeHandler"></my-list>
  <h4>Total: {{ lists.length }}</h4>

</template>

<style scoped>
.title {
  font-size: 80px;
  text-align: center;
}
</style>
