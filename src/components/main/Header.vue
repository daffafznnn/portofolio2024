<template>
  <section class="mx-auto flex flex-col px-8 sm:max-w-sm md:max-w-screen-xl md:flex-row">
    <!-- Left Column -->
    <div class="left-content mx-auto mt-16 w-full max-w-xl md:mt-36 lg:max-w-screen-xl lg:w-1/2 lg:mr-12">
      <div class="mb-16 lg:mb-0 lg:max-w-lg">
        <div class="mb-6 max-w-xl">
          <h2 class="mb-6 max-w-lg text-3xl font-bold tracking-tight text-cyan-400 sm:text-5xl sm:leading-snug">
            {{ $t('header.welcome.title')}}<br/>
            <span class="inline-block font-bold text-cyan-500">{{ $t('header.welcome.subtitle')}}</span>
          </h2>
          <p class="text-base text-white md:text-lg">{{ $t('header.welcome.content', { age: age }) }}</p>
        </div>
        <div class="flex items-center">
          <a href="#contact"
            class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 px-8 font-medium tracking-wide text-white shadow-md shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring">
            {{ $t('header.welcome.button')}}
          </a>
        </div>
      </div>
    </div>
    <!-- /Left Column -->
    <!-- Right Column -->
    <div class="right-content flex flex-col justify-center w-full max-w-xl md:max-w-none md:w-1/2">
      <div class="flex justify-center md:justify-end">
        <!-- Col 2 -->
        <div class="my-auto hidden w-72 flex-col space-y-2 md:mt-30 lg:flex">
          <img src="../../assets/daffa-formal-removebg-preview.png" alt="" class="pt-24 mt-5 w-56 h-96 "/>
        </div>
        <div class="my-auto w-80 flex-col space-y-3 md:mt-36 lg:flex bg-blue-900 shadow-lg rounded-xl px-4 py-4">
          <div class="flex py-2 px-2 text-cyan-400">
            <div class="my-auto mr-4 p-3 text-cyan-500 ">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
                <path d="M6 5H5v1h1V5Z" />
              </svg>
            </div>
            <div class="">
              <span class="text-2xl font-bold" v-if="showRandomNumber">{{ stats.randomNumber }}+</span>
              <span class="text-2xl font-bold" v-else>{{ stats.initialNumberA }}+</span>
              <p class="text-sm">{{ $t('header.stats.project')}}</p>
            </div>
          </div>
          <div class="flex py-2 px-2 text-cyan-400">
            <div class="my-auto mr-4 p-3 text-cyan-500 ">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                  d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z" />
              </svg>
            </div>
            <div class="">
              <span class="text-2xl font-bold" v-if="showRandomNumber">{{ stats.randomNumber }} <span class="text-sm">{{ $t('header.stats.year')}}</span></span>
              <span class="text-2xl font-bold" v-else>{{ stats.initialNumberB }} <span class="text-sm">{{ $t('header.stats.year')}}</span></span>
              <p class="text-sm">{{ $t('header.stats.year-experience')}}</p>
            </div>
          </div>
          <div class="flex py-2 px-2 text-cyan-400">
            <div class="my-auto mr-4 p-3 text-cyan-500 ">
              <svg class="w-[25px] h-[25px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 21 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
              </svg>
            </div>
            <div class="">
              <span class="text-2xl font-bold" v-if="showRandomNumber">{{ stats.randomNumber }}</span>
              <span class="text-2xl font-bold" v-else>{{ stats.initialNumberC }}</span>
              <p class="text-sm">{{ $t('header.stats.achievement')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Right Column -->
  </section>
  <Wave></Wave>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Wave from '../Wave.vue';

export default {
  components: {
    Wave
  },
  data() {
    return {
      stats: {
        initialNumberA: 0,
        initialNumberB: 0,
        initialNumberC: 0,
        randomNumber: 0,
        showRandomNumber: false,
      },
      age: null
    };
  },
  computed: {
    ...mapGetters('property', ['getStats', 'getProject']),
    projectCount() {
      return this.getProject?.length;
    }
  },
  methods: {
    ...mapActions('property', ['fetchProject']),
    calculateAge() {
      const birthDate = new Date('2005-12-04');
      const currentDate = new Date();
      const ageDiffMs = currentDate - birthDate;
      const ageDate = new Date(ageDiffMs);
      this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    startRandomAnimation() {
      const { initialNumberA, initialNumberB, initialNumberC } = this.stats;
      const finalNumber = initialNumberA + initialNumberB + initialNumberC;
      
      // Pastikan finalNumber lebih dari 0
      const targetNumber = finalNumber > 0 ? finalNumber : 10;

      this.showRandomNumber = true;
      const duration = 3000; // Durasi animasi dalam milidetik

      // Generate angka acak dengan interval setiap 100ms
      const interval = setInterval(() => {
        this.stats.randomNumber = Math.floor(Math.random() * targetNumber) + 1;
      }, 100);

      // Setelah durasi tertentu, hentikan animasi dan tampilkan angka semula
      setTimeout(() => {
        clearInterval(interval);
        this.stats.randomNumber = targetNumber;
        this.showRandomNumber = false;
      }, duration);
    },
    // showAlert() {
    //   // Menggunakan ElNotification untuk menampilkan notifikasi dengan status informasi
    //   ElNotification({
    //     title: this.$t('notification.title'), // Sesuaikan dengan key yang sesuai di file locale Anda
    //     message: this.$t('notification.message'), // Sesuaikan dengan key yang sesuai di file locale Anda
    //     type: 'info'
    //   });
    // },
    addAnimationClasses() {
      const leftContent = document.querySelector('.left-content');
      const rightContent = document.querySelector('.right-content');
      
      const observerOptions = {
        threshold: 0.1
      };

      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (window.innerWidth >= 768) { // Untuk desktop
              entry.target.classList.add('animated');
              if (entry.target.classList.contains('left-content')) {
                entry.target.classList.add('slide-in-left');
              } else if (entry.target.classList.contains('right-content')) {
                entry.target.classList.add('slide-in-down');
              }
            } else { // Untuk mobile
              entry.target.classList.add('animated');
              if (entry.target.classList.contains('left-content')) {
                entry.target.classList.add('slide-in-left-mobile');
              } else if (entry.target.classList.contains('right-content')) {
                entry.target.classList.add('slide-in-right-mobile');
              }
            }
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      observer.observe(leftContent);
      observer.observe(rightContent);
    }
  },
  watch: {
    projectCount(newVal) {
      if (newVal) {
        this.stats.initialNumberA = newVal;
        const stats = this.getStats[0];
        this.stats.initialNumberB = stats.year;
        this.stats.initialNumberC = stats.achievement;
        this.startRandomAnimation();
      }
    }
  },
  mounted() {
    // Hitung usia saat komponen dibuat
    this.calculateAge();
    // Ambil data proyek saat komponen dibuat
    this.fetchProject();
    // Tambahkan kelas animasi
    this.addAnimationClasses();
  },
};
</script>

<style scoped>
/* Animasi untuk desktop */
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Animasi untuk mobile */
@keyframes slideInRightMobile {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInLeftMobile {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.slide-in-left {
  animation-name: slideInLeft;
}

.slide-in-down {
  animation-name: slideInDown;
}

.slide-in-right-mobile {
  animation-name: slideInRightMobile;
}

.slide-in-left-mobile {
  animation-name: slideInLeftMobile;
}
</style>