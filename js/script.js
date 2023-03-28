const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      imgSrc: "assets/nebula.webp",
    };
  },
}).mount("#app");
