<template>
  <section id="about" class="py-8 sm:py-20 my-10 container mx-auto ml-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-auto items-center max-w-6xl">
      <div
        class="animate-left-content sm:animate-none"
      >
        <h3 class="text-4xl md:tex-5xl text-cyan-400 pr-6 sm:pr-0 sm:leading-snug tracking-tight font-bold text-bold">
          {{ $t('about.content1.title') }}
        </h3>
        <p class="mt-4 text-white">
          {{ $t('about.content1.text') }}
        </p>
      </div>
      <div
        class="animate-right-content sm:animate-none"
      >
        <div 
         class="grid grid-cols-1 sm:grid-cols-2 gap-4">
       <div v-for="one in getAbout" :key="one.id">
         <el-image
          :src="one.img"
          class="w-11/12 md:w-full h-auto object-cover object-center rounded-xl sm:hover:scale-125 sm:hover:shadow-lg sm:hover:shadow-cyan-400 transition-all z-20"
          fit="cover"
        >
        </el-image>
      </div>
      </div>
      </div>
    </div>
    <!-- timeline pendidikan -->
    <div
      class="animate-timeline sm:animate-none"
    >
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
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
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
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div class="mt-3 sm:pe-8">
         <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.timeline.items.1.title') }}</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ $t('about.timeline.items.1.date') }}</time>
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
      </div>
      <div class="mt-3 sm:pe-8">
           <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.timeline.items.2.title') }} <span class="text-sm md:text-xs" v-if="isHighSchool">{{ $t('about.timeline.items.2.major')}}</span></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ $t('about.timeline.items.2.date') }}</time>
      </div>
    </li>
      </ol>
    </div>
    <!-- end timeline -->
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  mounted() {
    this.setupIntersectionObserver('.animate-left-content');
    this.setupIntersectionObserver('.animate-right-content');
    this.setupIntersectionObserver('.animate-timeline');
  },
  computed: {
    ...mapGetters('property', ['getAbout', 'getTextAbout']),
  }, 
  methods: {
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