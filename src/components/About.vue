<template>
  <section id="about" class="py-28 my-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-auto items-center max-w-6xl">
      <div :class="{ 'fade-in': showRightContent, 'fade-out': !showRightContent }"
        class="px-4 md:mr-6 transform translate-x-0 transition duration-800 ease-in-out">
        <h3 class="text-4xl text-cyan-400 pr-6 sm:leading-snug tracking-tight font-bold text-bold">
          It's about me
        </h3>
        <p class="mt-4 text-white">
          {{ getTextAbout.text }}
        </p>
      </div>
      <div :class="{ 'fade-in': showLeftContent, 'fade-out': !showLeftContent }"
        class="transform translate-x-0 transition duration-800 ease-in-out">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="one in getAbout" :key="one.id">
            <img :src="one.img"
              class="w-10/12 ml-10 sm:w-full md:w-full lg:w-full xl:w-full h-auto object-cover object-center rounded-xl hover:scale-125 hover:shadow-lg hover:shadow-cyan-400 transition-all">
          </div>
        </div>
      </div>
    </div>
    <!-- timeline pendidikan -->
    <div :class="{ 'timeline-enter-active': timelineVisible, 'timeline-leave-to': !timelineVisible }"
      class="container mx-auto pt-12">
      <h3 class="text-3xl font-bold mb-6 pl-20 text-cyan-400">Education Timeline</h3>
      <ol class="items-center ml-20 sm:flex">
        <li v-for="(item, index) in timelineItems" :key="index" class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ item.title }}</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ item.date
            }}</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ item.description }}</p>
          </div>
        </li>
      </ol>
    </div>
    <!-- end timeline -->
  </section>
</template>

<style scoped>
.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

.timeline-enter-active,
.timeline-leave-active {
  transition: opacity 1s;
}

.timeline-enter,
.timeline-leave-to

/* .timeline-leave-active for <2.1.8 */
  {
  opacity: 0;
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showLeftContent: false,
      showRightContent: false,
      timelineItems: [
        {
          title: 'TK Salsabila',
          date: 'Bandung, 23 juni 2012',
          description: 'Saya telah lulus di kober/tk salsabila saya  .',
          visible: false,
        },
        {
          title: 'SDN Jatimekar',
          date: 'Bandung, 4 juni 2018',
          description: 'Saya telah lulus di sekolah dasar saya .',
          visible: false,
        },
        {
          title: 'SMPN 3 Baleendah',
          date: 'Bandung, 21 juli 2021',
          description: 'saya telah lulus di sekolah menengah pertama saya.',
          visible: false,
        },
        {
          title: 'SMK Assalaam Bandung',
          date: 'Masih bersekolah disini',
          description: 'saya masih sekolah disini posisi di kelas 12 jurusan Rekaya Perangkat Lunak(RPL).',
          visible: false,
        },

      ],
      timelineVisible: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Panggil handleScroll pada mounted untuk menentukan tampilan awal
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    ...mapGetters('property', ['getAbout', 'getTextAbout']),
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      this.showLeftContent = scrollPosition > 1390;
      this.showRightContent = scrollPosition > 1300;

      // Tambahkan logika untuk menentukan kapan item-item timeline muncul
      this.timelineVisible = scrollPosition > 1400;
    },
  },
};
</script>
