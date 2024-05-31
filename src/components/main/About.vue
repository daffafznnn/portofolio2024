<template>
   <section id="about" class="py-8 sm:py-20 my-10 container mx-auto">
       <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-12">
      <!-- Konten sebelah kiri -->
      <div class="animate-left-content sm:animate-none">
        <h3 class="text-4xl md:text-5xl text-cyan-400 pr-6 sm:pr-0 sm:leading-snug tracking-tight font-bold">
          {{ $t('about.content1.title') }}
        </h3>
        <p class="mt-4 text-white">
          {{ $t('about.content1.text') }}
        </p>
      </div>
     <!-- Konten sebelah kanan -->
      <div class="animate-right-content sm:animate-none">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Gambar 1 -->
          <div class="relative">
            <img
              src="../../assets/ab1.jpg"
              class="w-full h-full rounded-xl transition-transform duration-300 transform hover:scale-110 focus:scale-110"
              alt="Image 1"
              @mouseover="hoverImage(1)"
              @focus="hoverImage(1)"
              @click="zoomImage(1)"
            />
            <div v-show="zoomed !== 1" class="hidden absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          </div>
          <!-- Gambar 2 -->
          <div class="relative">
            <img
              src="../../assets/ab2.jpg"
              class="w-full h-full rounded-xl transition-transform duration-300 transform hover:scale-110 focus:scale-110"
              alt="Image 2"
              @mouseover="hoverImage(2)"
              @focus="hoverImage(2)"
              @click="zoomImage(2)"
            />
            <div v-show="zoomed !== 2" class="hidden absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- timeline pendidikan -->
    <div class="animate-timeline sm:animate-none sm:mx-auto mx-10 my-10 border border-cyan-400 rounded-xl sm:h-56 md:h-64">
      <h3 class="text-3xl font-bold mb-6 pl-5 sm:pl-16 mt-8 text-cyan-400">{{ $t('about.timeline.title') }}</h3>
      <ol class="items-center ml-5 sm:ml-16 sm:flex mt-8">
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill"
                viewBox="0 0 16 16">
                <path
                  d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path
                  d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
            </div>
            <!-- garis setelah icon -->
            <div class="hidden sm:block w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.timeline.items.0.title') }}</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ $t('about.timeline.items.0.date') }}</time>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill"
                viewBox="0 0 16 16">
                <path
                  d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path
                  d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
            </div>
            <!-- garis setelah icon -->
            <div class="hidden sm:block w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.timeline.items.1.title') }}</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ $t('about.timeline.items.1.date') }}</time>
          </div>
        </li>
        <li class="relative mb-6 sm:-mb-6">
          <div class="flex items-center">
            <div
              class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill"
                viewBox="0 0 16 16">
                <path
                  d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path
                  d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
            </div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.timeline.items.2.title') }} <span class="flex mb-2 text-sm md:text-xs" v-if="isHighSchool">{{ $t('about.timeline.items.2.major')}}</span></h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ $t('about.timeline.items.2.date') }}</time>
          </div>
        </li>
      </ol>
    </div>
    <!-- end timeline -->
      <div class="flex flex-col sm:flex-row sm:space-x-2">
        <!-- time line working -->
        <div class="basis-full sm:basis-1/2 animate-timeline sm:animate-none sm:mx-auto mx-10 my-10 border border-cyan-400 rounded-xl">
          <h3 class="text-3xl font-bold mb-6 pl-5 sm:pl-16 mt-8 text-cyan-400">{{ $t('about.timeline-working.title') }}</h3>
          <ol class="ml-8 sm:ml-16 mt-10 relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-200">{{ $t('about.timeline-working.items.0.date') }}</time>
              <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.timeline-working.items.0.title') }}</h3>
              <span class="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">{{ $t('about.timeline-working.items.0.subtitle') }}</span>
              <ul class="max-w-md space-y-1 text-gray-300 list-disc list-inside dark:text-gray-400 mx-2 mb-2 text-sm">
                <li>{{ $t('about.timeline-working.items.0.items-works.0.name') }}</li>
                <li>{{ $t('about.timeline-working.items.0.items-works.1.name') }}</li>
              </ul>
              <a href="https://www.fiverr.com/daffafznnn" target="_blank" class="inline-flex items-center px-2 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                Visit on fiverr
                <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </li>
            <!-- Additional timeline items can be added here -->
          </ol>
        </div>
        <!-- end time line working -->
        <div class="basis-full sm:basis-1/2 animate-timeline sm:animate-none sm:mx-auto mx-10 my-10 border border-cyan-400 rounded-xl">
          <div>
            <h1></h1>
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
       zoomed: null
    }
  },
  mounted() {
    this.setupIntersectionObserver('.animate-left-content');
    this.setupIntersectionObserver('.animate-right-content');
    this.setupIntersectionObserver('.animate-timeline');
  },
  computed: {
    ...mapGetters('property', ['getAbout', 'getTextAbout']),
  }, 
  methods: {
   hoverImage(index) {
      this.zoomed = index;
    },
    zoomImage(index) {
      if (this.zoomed === index) {
        this.zoomed = null;
      } else {
        this.zoomed = index;
      }
    },
    isHighSchool() {
      return JSON.stringify(this.$t.about.timeline.items) === JSON.stringify([2]);
    },
    setupIntersectionObserver(targetClass) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, options);

      const targets = document.querySelectorAll(targetClass);
      targets.forEach((target) => {
        observer.observe(target);
      });
    },
  },
};
</script>

<style scoped>
/* Animasi fade-in dan fade-out menggunakan CSS */
.animate-left-content {
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 1s, transform 1s;
}

.animate-right-content {
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 1s, transform 1s;
}

.animate-timeline {
  opacity: 0;
  transition: opacity 1s;
}
</style>
