export default {
  props: {
    show: Boolean
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    }
  }
};
