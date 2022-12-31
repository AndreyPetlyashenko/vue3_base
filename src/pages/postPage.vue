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
      selectedSort: '',
      searchQuery: '',

      //pagination
      limit: 10,
      page: 1,
      maxPages: 0


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
    removeHandler(id: string) {
      this.lists = this.lists.filter(post => post.id != id)
    },
    // async getPosts() {
    //   try {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //       params: {
    //         _limit: this.limit,
    //         _page: this.page
    //       }
    //     })
    //     this.maxPages = Math.ceil(response.headers['x-total-count'] / this.limit)
    //     this.lists = response.data
    //   } catch (error) {
    //     console.log(error)
    //   } finally {
    //     this.isPostLoaded = true
    //   }
    // },
    async GetLazyPost() {
      try {
       
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        })
       
        this.maxPages = Math.ceil(response.headers['x-total-count'] / this.limit)
       
        this.page += 1
       
        this.lists = [...this.lists, ...response.data]

      } catch (error) {
        console.log(error)
      } finally {
        this.isPostLoaded = true
      }
    },

  },
  mounted() {
    this.GetLazyPost();
  },
  watch: {
    // selectedSort(newList) {
    // name of the function should be same as v-model. 
    // The func run when its argument changed (useEffect)
    // this.lists.sort((post1: any, post2: any) => post1[newList].localeCompare(post2[newList]))
    // }
    // To track objects we need use option deep:true// exmpl: selectedOption:{handler(objct){},deep:true}

    // !Pagination!
    // page() {
    //   this.getPosts();
    // }
  },
  computed: {
    sortedPosts() { //like useMemo. same func like above
      return [...this.lists].sort((post1: any, post2: any) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    searchedSortedPosts() {
      return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },

}

</script>

<template>

  <my-input placeholder="search..." v-model="searchQuery" />

  <div class="flex_container">
    <my-button @click="showModal">
      make a new post
    </my-button>
    <my-sorting :options="sortingOptions" v-model:selectedSort="selectedSort"></my-sorting>
  </div>


  <my-modal v-model:show="show_modal">
    <my-form @make-post="postHandler"></my-form>
  </my-modal>
  <div v-if="!isPostLoaded">
    <h1>Loading..</h1>
  </div>

  <my-list :posts="searchedSortedPosts" @remove_post="removeHandler"></my-list>

  <div class="observer" v-show="this.page<=this.maxPages" v-intersection="{ GetLazyPost }"></div>
  <!-- <my-pagination :maxPages="maxPages" v-model:active_page="page" /> -->


</template>

<style scoped>
.title {
  font-size: 80px;
  text-align: center;
}

.flex_container {
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 30px;
  background-color: green;
}
</style>
