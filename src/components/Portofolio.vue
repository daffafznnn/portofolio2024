<template>
  <section id="porto" class="py-20">
    <h1 class="mb-12 text-center font-sans text-5xl font-bold text-cyan-400">Proyek Saya</h1>
    <span class="flex justify-center items-center font-medium text-gray-200 pb-8">Berikut yang telah dirilis </span>
    <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
      <article v-for="(item, index) in getProject" :key="item.id" :id="item.id"
        :class="{ 'animate-fade-in': isVisible(index), 'animate-slide-up': isVisible(index) }"
        class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-sm pb-2 transition-transform duration-200 hover:translate-y-2">
        <a :href="item.link" class="block h-full w-full">
          <img class="max-h-30 w-full object-cover rounded-lg" alt="featured image" :src="item.img" />
          <div class="w-full p-4">
            <p class="text-md font-medium text-cyan-500">{{ item.title }}</p>
            <p class="mb-2 text-xl font-medium text-cyan-400">{{ item.name }}</p>
            <p class="text-md font-light text-gray-200">{{ item.desc }}</p>
          </div>
        </a>
      </article>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('property', ['getProject']),
  },
  methods: {
    isVisible(index) {
      // Tampilkan elemen dengan animasi setelah satu per satu
      return this.scrollPosition > index * 200;
    },
    handleScroll() {
      // Update posisi scroll
      this.scrollPosition = window.scrollY;
    },
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  mounted() {
    // Tambahkan event listener untuk memantau scroll
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Hapus event listener saat komponen dihancurkan
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
<style scoped>
/* Animasi fade-in menggunakan CSS */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
}

/* Animasi slide-up menggunakan CSS */
.animate-slide-up {
  opacity: 0; /* Atur opasitas awal menjadi 0 */
  transform: translateY(30px);
  animation: slideUp 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0; /* Mulai dengan opasitas 0 */
    transform: translateY(30px);
  }
  to {
    opacity: 1; /* Akhiri dengan opasitas 1 */
    transform: translateY(0);
  }
}
</style>
