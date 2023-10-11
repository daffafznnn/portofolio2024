<template>
  <!-- component -->
<section id="about" class="py-28  my-20">
    <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl ">
      <div v-show="showRightContent" class="px-4 md:mr-6 transform translate-x-0 transition duration-800 ease-in-out">
        <h3 class="text-4xl text-cyan-400 pr-6 sm:leading-snug tracking-tight font-bold text-bold">
          It's about me 
        </h3>
        <p class="mt-4 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto consequatur beatae exercitationem harum, sapiente eligendi itaque deserunt assumenda, ipsa hic ad corporis. Incidunt corrupti quo laboriosam magnam vero suscipit?
        </p>
      </div>
      <div v-show="showLeftContent" class="transform translate-x-0 transition duration-500 ease-in-out">
        <div class=" bg-cyan-500 transform -translate-x-1 scale-90 relative h-52 sm:h-64 sm:-translate-x-10">
        </div>
        <div class="transform md:rounded-md  bg-blue-800 rotate-3 scale-75 translate-x-1 md:shadow-2xl -ml-4 -mt-44 p-10  space-y-2 sm:translate-x-1 sm:scale-75">
          <div class="px-4 sm:px-0 max-w-2xl mx-auto flex flex-wrap sm:flex-row sm:gap-12 flex-row gap-10 justify-center items-center">
            <div v-for="item in getAbout" :key="item.id" class="basis-1/2 sm:basis-1/3">
              <img :src="item.img" class="rounded-xl">
            </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters('property',['getAbout'])
  },
  methods: {
    handleScroll() {
      // Tambahkan logika untuk menentukan kapan elemen-elemen tersebut muncul
      // Contoh: jika posisi scroll lebih dari 500 piksel, tampilkan elemen-elemen tersebut
      const scrollPosition = window.scrollY;
      this.showLeftContent = scrollPosition > 1390;
      this.showRightContent = scrollPosition > 1300;
    },
  },
};
</script>