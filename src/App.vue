<script  lang="ts">
import Form from './components/Form.vue'
import List from './components/List.vue'
export default {
  data() {
    return {
      lists: [
        { msg: 'msg1', date: '17.12.1990' },
        { msg: 'msg2323', date: '17.12.1990' },
        { msg: 'msg1414121', date: '17.12.1990' },
        { msg: 'msg11412412', date: '17.12.1990' }
      ],
      show_modal: false

    }
  },
  methods: {
    postHandler(post: any) {
      this.lists.push(post)
      this.show_modal = false
    },
    showModal(){
      console.log('cliked',  this.show_modal)
      this.show_modal=true
    },
    removeHandler(id){
      this.lists.splice(id, 1)
    }
  },
  components: {
    Form,
    List
  }
}

</script>

<template>
  <my-button @click="showModal">
    make a new post
  </my-button>
  <my-modal    v-model:show="show_modal" >
    <Form @make-post="postHandler"></Form>
  </my-modal>

  <List :posts="lists" @remove_post="removeHandler"></List>
  <h4>Total: {{ lists.length }}</h4>

</template>

<style scoped>
.title {
  font-size: 80px;
  text-align: center;
}
</style>
