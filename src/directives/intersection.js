export default {
  name: "intersection",

  mounted(el, binding) {
    let { GetLazyPost } = binding.value;

    const options = {
      rootMargin: "0px",
      threshold: 1.0
    };
    const lazyLoad = (entries) => {
      if (entries[0].isIntersecting) {
        GetLazyPost();
      }
    };

    let observer = new IntersectionObserver(lazyLoad, options);
    observer.observe(el);
  }
};
