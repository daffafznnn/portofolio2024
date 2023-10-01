<template>
  <!-- component -->
<section id="section2" class="py-28  my-20">
    <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl ">
      <div v-show="showRightContent" class="px-4 md:mr-6 transform translate-x-0 transition-transform duration-800 ease-in-out">
        <h3 class="text-4xl text-cyan-400 pr-6 sm:leading-snug tracking-tight font-bold text-bold">
          With our diverse range of lenders, we fight hard to get you the best deal.
        </h3>
        <p class="mt-4 text-white">
          With our diverse range of lenders, we fight hard to get you the best deal.
        </p>
      </div>
      <div v-show="showLeftContent" class="transform translate-x-0 transition-transform duration-500 ease-in-out">
        <div class=" bg-cyan-500 transform -translate-x-10 relative h-64">
        </div>
        <div class="transform md:rounded-md  bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12  space-y-2">
          <div class="px-4 sm:px-0  max-w-5xl mx-auto">
          <img src="https://cdn.mjwebs.com/img-neodymium/lenders/1.png" class="w-40">
                       
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      showLeftContent: false,
      showRightContent: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Tambahkan logika untuk menentukan kapan elemen-elemen tersebut muncul
      // Contoh: jika posisi scroll lebih dari 500 piksel, tampilkan elemen-elemen tersebut
      const scrollPosition = window.scrollY;
      this.showLeftContent = scrollPosition > 650;
      this.showRightContent = scrollPosition > 500;
    },
  },
};
</script>