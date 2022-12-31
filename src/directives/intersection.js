export default {
  name: "intersection",

  mounted(el, binding) {
    const { GetLazyPost } = binding.value;

    const options = {
      rootMargin: "0px",
      threshold: 1.0
    };
    const lazyLoad = (entries) => {
      if (entries[0].isIntersecting) {
        GetLazyPost();
      }
    };

    const observer = new IntersectionObserver(lazyLoad, options);
    observer.observe(el);
  }
};
