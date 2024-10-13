<template>
<section id="about" class="container py-8 mx-auto sm:py-20">
  <h3 class="mx-4 text-5xl font-bold animate-left-content md:mx-12 text-cyan-400">
    {{ $t('about.content1.title') }}
  </h3>
  <div class="relative">
    <div class="grid grid-cols-1 gap-2 ">
      <!-- about me -->
      <div class="col-span-2">
        <div class="grid grid-cols-1 gap-10 mx-4 sm:grid-cols-2 sm:mx-12">
          <!-- Konten sebelah kiri -->
          <div class="animate-left-content">
            <p class="mt-4 text-white">
              {{ $t('about.content1.text') }}
            </p>
          </div>
          <!-- Konten sebelah kanan -->
          <div class="flex items-center justify-center animate-right-content group">
            <img
              src="../../assets/ab2.jpg"
              class="h-56 transition-all duration-700 w-80 rounded-xl md:hover:shadow-lg md:hover:shadow-cyan-400 md:hover:scale-105 grayscale group-hover:grayscale-0"
              alt="Image 2"
            />
          </div>
        </div>
      </div>
      <!-- end about me -->

      <!-- timeline pendidikan -->
      <div class="col-span-2 mx-4 mt-8 -mb-4 transition-all duration-700 bg-transparent border shadow-lg sm:hover:bg-cyan-800 sm:hover:shadow-cyan-400 sm:hover:bg-opacity-55 group animate-timeline backdrop-blur-sm sm:mx-10 border-cyan-400 sm:border-gray-400 sm:hover:border-cyan-400 bg-clip-padding rounded-xl sm:h-56 md:h-64">
        <h3 class="pl-5 mt-6 mb-4 text-3xl font-bold sm:pl-16 text-cyan-400">{{ $t('about.timeline.title') }}</h3>
        <ol class="items-center mt-6 ml-5 sm:ml-16 sm:flex">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
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
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
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
        <li class="relative mb-6 sm:-mb-5">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
            </div>
            <!-- garis setelah icon -->
            <div class="hidden sm:block w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">
              {{ $t('about.timeline.items.2.title') }}
              <span class="flex mb-2 text-sm md:text-xs" v-if="isHighSchool">{{ $t('about.timeline.items.2.major')}}</span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ $t('about.timeline.items.2.date') }}</time>
          </div>
        </li>
        <li class="relative mb-6 sm:-mb-5">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
            </div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">
              {{ $t('about.timeline.items.3.title') }}
              <span class="flex mb-2 text-sm md:text-xs" v-if="isHighSchool">{{ $t('about.timeline.items.3.major')}}</span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ $t('about.timeline.items.3.date') }}</time>
          </div>
        </li>
        </ol>
      </div>
      <!-- end timeline pendidikan -->

      <div class="grid grid-cols-1 gap-0 mx-2 sm:grid-cols-2 sm:gap-6 sm:mx-6">
      <!-- timeline working -->
      <div class="mt-8 transition-all duration-700 bg-transparent border shadow-lg sm:hover:bg-cyan-800 sm:hover:shadow-cyan-400 sm:hover:bg-opacity-55 animate-timeline backdrop-blur-sm border-cyan-400 sm:border-gray-400 sm:hover:border-cyan-400 bg-clip-padding rounded-xl">
        <h3 class="pl-5 mt-6 mb-4 text-3xl font-bold sm:pl-16 text-cyan-400">{{ $t('about.timeline-working.title') }}</h3>
        <ol class="relative mt-6 ml-8 border-gray-200 sm:ml-16 border-s dark:border-gray-700">
        <li class="mb-6 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-200">{{ $t('about.timeline-working.items.0.date') }}</time>
          <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.timeline-working.items.0.title') }}</h3>
          <span class="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">{{ $t('about.timeline-working.items.0.subtitle') }}</span>
          <ul class="max-w-md mx-2 mb-2 space-y-1 text-sm text-gray-300 list-disc list-inside dark:text-gray-400">
            <li class="mb-2">{{ $t('about.timeline-working.items.0.items-works.0.name') }}</li>
            <li class="mb-2">{{ $t('about.timeline-working.items.0.items-works.1.name') }}</li>
            <li class="mb-2">{{ $t('about.timeline-working.items.0.items-works.2.name') }}</li>
          </ul>
        </li>
        <li class="mb-6 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-200">{{ $t('about.timeline-working.items.1.date') }}</time>
          <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.timeline-working.items.1.title') }}</h3>
          <span class="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">{{ $t('about.timeline-working.items.1.subtitle') }}</span>
          <ul class="max-w-md mx-2 mb-2 space-y-1 text-sm text-gray-300 list-disc list-inside dark:text-gray-400">
            <li class="mb-2">{{ $t('about.timeline-working.items.1.items-works.0.name') }}</li>
            <li class="mb-2">{{ $t('about.timeline-working.items.1.items-works.1.name') }}</li>
            <li class="mb-2">{{ $t('about.timeline-working.items.1.items-works.2.name') }}</li>
            <li class="mb-2">{{ $t('about.timeline-working.items.1.items-works.3.name') }}</li>
          </ul>
        </li>
        </ol>
      </div>
      <!-- end timeline working -->

      <!-- certificate -->
      <div class="mt-8 transition-all duration-700 bg-transparent border shadow-lg sm:hover:bg-cyan-800 sm:hover:shadow-cyan-400 sm:hover:bg-opacity-55 animate-timeline backdrop-blur-sm border-cyan-400 sm:border-gray-400 sm:hover:border-cyan-400 bg-clip-padding rounded-xl">
        <h3 class="pl-5 mt-6 mb-4 text-3xl font-bold sm:pl-16 text-cyan-400">{{ $t('about.certificate.title') }}</h3>
        <ol class="relative mt-6 ml-8 border-gray-200 sm:ml-16 border-s dark:border-gray-700">
           <li class="mb-6 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-200">{{ $t('about.certificate.items.0.date') }}</time>
          <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.certificate.items.0.title') }}</h3>
          <span class="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">{{ $t('about.certificate.items.0.subtitle') }}</span>
          <img
            :src="certificateImages[0]"
            alt="Description of image 1"
            class="object-cover h-32 mt-5 mb-5 transition-all rounded-md w-62 hover:scale-105"
            @click="showPreview(0)"
          />
        </li>
        <li class="mb-6 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-200">{{ $t('about.certificate.items.1.date') }}</time>
          <h3 class="text-lg font-semibold text-cyan-400 dark:text-white">{{ $t('about.certificate.items.1.title') }}</h3>
          <span class="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">{{ $t('about.certificate.items.1.subtitle') }}</span>
          <img
            :src="certificateImages[1]"
            alt="Description of image 2"
            class="object-cover h-32 mt-5 mb-5 transition-all rounded-md w-62 hover:scale-105"
            @click="showPreview(1)"
          />
        </li>
        </ol>
        <div v-show="showPreviewImage" @click="hidePreview" class="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
          <img :src="previewImage" alt="Preview Image" class="max-w-3/4 max-h-3/4" @click.stop>
        </div>
      </div>
      <!-- end certificate -->
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
      zoomed: null,
      certificateImages: [
        'https://i.ibb.co/6P0Mb8z/Certificate-Freee-Code-Camp-daffa-hd.jpg',
        'https://i.ibb.co/mtCXPj4/sertifikat-magang-Muhammad-Daffa-Fauzan.jpg'
      ],
      showPreviewImage: false,
      previewImage: ''
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
    showPreview(index) {
      this.previewImage = this.certificateImages[index];
      this.showPreviewImage = true;
    },
    hidePreview() {
      this.showPreviewImage = false;
      this.previewImage = '';
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
/* Animasi fade-in dan fade-out */
.animate-left-content {
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 1s, transform 1s;
}

.animate-right-content {
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 2s, transform 1s;
}

.animate-timeline {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 1s, transform 1s;
}

svg path {
  animation: dash 2s ease-in-out infinite;
}

@keyframes dash {
  0% {
    stroke-dasharray: 0, 100;
  }
  100% {
    stroke-dasharray: 100, 0;
  }
}
</style>