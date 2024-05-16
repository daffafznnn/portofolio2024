<template>
  <section id="porto" ref="porto" class="py-20">
    <h1 class="mb-12 text-center font-sans text-5xl font-bold text-cyan-400">{{ $t('porto.head.title') }}</h1>
    <span class="flex justify-center items-center font-medium text-gray-200 pb-8">{{ $t('porto.head.subtitle') }}</span>
     <div v-if="isFirstLoad" class="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
      <article v-for="index in 6" :key="index" class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-sm pb-2 transition-transform duration-500 hover:translate-y-2">
        <div class="animate-pulse flex flex-col h-full">
          <div class="w-80 sm:w-72 h-48 bg-gray-300 rounded-lg"></div>
          <div class="p-4 ">
            <div class="h-4 bg-gray-300 rounded mb-2"></div>
            <div class="h-6 bg-gray-300 rounded mb-2"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </article>
    </div>
    <div v-else class="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
      <article v-for="(item) in paginatedProjects" :key="item.id" :id="item.id"
        :class="{ 'animate-slide-up': isFirstLoad }"
        class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-sm pb-2 transition-transform duration-500 hover:translate-y-2">
        <a :href="item.link" target="_blank" class="block h-full w-full">
          <img class="max-h-30 w-full object-cover rounded-lg" alt="featured image" :src="item.img" />
          <div class="w-full p-4">
            <p class="text-md font-medium text-cyan-500">{{ item.title }}</p>
            <p class="mb-2 text-xl font-medium text-cyan-400">{{ item.name }}</p>
            <p class="text-md font-light text-gray-200">{{ item.desc }}</p>
          </div>
        </a>
      </article>
    </div>
     <div v-if="totalPages > 1" class="flex justify-center items-center mt-8">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 mr-2 bg-transparent border-collapse border border-cyan-400 text-cyan-300 rounded-md cursor-pointer" :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }">{{ $t('porto.button.prev') }}</button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-transparent border-collapse border border-cyan-400 text-cyan-300 rounded-md cursor-pointer" :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }">{{ $t('porto.button.next') }}</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      scrollPosition: 0,
      isFirstLoad: true,
      itemsPerPage: 6,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters('property', ['getProject']),
     totalPages() {
      return Math.ceil(this.getProject.length / this.itemsPerPage);
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.getProject.slice(start, end);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToTop();
      }
    },
    scrollToTop() {
      // Scroll to the top of the component
      this.$refs.porto.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  },
  mounted() {

    // Hapus kelas animasi setelah elemen dimuat pertama kali
    setTimeout(() => {
      this.isFirstLoad = false;
    }, 2000); // Waktu penundaan dalam milidetik, disesuaikan dengan durasi animasi
  },
};
</script>
