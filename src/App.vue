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
      show:false

    }
  },
  methods: {
    postHandler(post: any) {
      this.lists.push(post)
      this.show=false
    }
  },
  components: {
    Form,
    List
  }
}

</script>

<template>
  <my-button @click="show=!show">
    make a new post
  </my-button>
  <my-modal :show=show>
    <Form @make-post="postHandler"></Form>
  </my-modal>

  <List :posts="lists"></List>
  <h4>Total: {{ lists.length }}</h4>

</template>

<style scoped>
.title {
  font-size: 80px;
  text-align: center;
}
</style>
