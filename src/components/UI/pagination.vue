<template>
  <div>
    <ul class="pagination_list">
      <li
        v-for="item in maxPages"
        :class="{ active_page: item === active_page }"
        :key="item"
        class="pagination_item"
        @click="paginationHandler(item)"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "my-pagination",
  props: {
    maxPages: {
      type: Number,
      required: true
    },
    active_page: Number
  },
  methods: {
    paginationHandler(pageNumber: Number) {
      this.$emit("update:active_page", pageNumber);
    }
  }
};
</script>

<style scoped>
.pagination_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  max-width: 500px;
}

.pagination_item {
  padding: 5px;
  margin: 5px;
  background-color: lightblue;
  cursor: pointer;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  text-align: center;
}

.active_page {
  border: 2px solid blue;
}
</style>
