<template>
<div class="mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
  <!-- Left Column -->
  <div class="mx-auto mt-16 w-full max-w-xl md:mt-36 lg:max-w-screen-xl lg:w-1/2 lg:mr-12">
    <div class="mb-16 lg:mb-0 lg:max-w-lg">
      <div class="mb-6 max-w-xl">
        <h2 class="mb-6 max-w-lg text-3xl font-bold tracking-tight text-cyan-400 sm:text-5xl sm:leading-snug">
          {{ $t('header.welcome.title')}}<br/>
          <span class="inline-block font-bold text-cyan-500">{{ $t('header.welcome.subtitle')}}</span>
        </h2>
        <p class="text-base text-white md:text-lg">{{ $t('header.welcome.content', { age: age }) }}</p>
      </div>
      <div class="flex items-center">
        <button @click="showAlert"
          class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 px-8 font-medium tracking-wide text-white shadow-md shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring">
          {{ $t('header.welcome.button')}}
        </button>
        <!-- <a href="/" aria-label=""
          class="inline-flex items-center font-semibold text-cyan-400 transition-colors duration-200 hover:text-cyan-400">lebih banyak</a> -->
      </div>
    </div>
  </div>
  <!-- /Left Column -->
  <!-- Right Column -->
  <div class="flex flex-col justify-center w-full max-w-xl md:max-w-none md:w-1/2">
    <div class="flex justify-center md:justify-end">
      <!-- Col 2 -->
      <div class="my-auto hidden w-72 flex-col space-y-2 md:mt-30 lg:flex">
        <img src="../assets/daffa-formal-removebg-preview.png" alt=""  class="pt-24 mt-5 w-56 h-96 "/>
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
            <span class="text-2xl font-bold" v-if="showRandomNumber">{{ stats.randomNumber }}</span>
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
</div>

    <svg class="md:block hidden" id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 290" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgba(23, 37, 84, 1)" offset="0%"></stop>
        <stop stop-color="rgba(34, 211, 238, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)"
      d="M0,58L40,53.2C80,48,160,39,240,43.5C320,48,400,68,480,96.7C560,126,640,164,720,149.8C800,135,880,68,960,77.3C1040,87,1120,174,1200,207.8C1280,242,1360,222,1440,207.8C1520,193,1600,184,1680,193.3C1760,203,1840,232,1920,222.3C2000,213,2080,164,2160,135.3C2240,106,2320,97,2400,87C2480,77,2560,68,2640,96.7C2720,126,2800,193,2880,227.2C2960,261,3040,261,3120,227.2C3200,193,3280,126,3360,91.8C3440,58,3520,58,3600,62.8C3680,68,3760,77,3840,106.3C3920,135,4000,184,4080,203C4160,222,4240,213,4320,203C4400,193,4480,184,4560,164.3C4640,145,4720,116,4800,111.2C4880,106,4960,126,5040,140.2C5120,155,5200,164,5280,154.7C5360,145,5440,116,5520,116C5600,116,5680,145,5720,159.5L5760,174L5760,290L5720,290C5680,290,5600,290,5520,290C5440,290,5360,290,5280,290C5200,290,5120,290,5040,290C4960,290,4880,290,4800,290C4720,290,4640,290,4560,290C4480,290,4400,290,4320,290C4240,290,4160,290,4080,290C4000,290,3920,290,3840,290C3760,290,3680,290,3600,290C3520,290,3440,290,3360,290C3280,290,3200,290,3120,290C3040,290,2960,290,2880,290C2800,290,2720,290,2640,290C2560,290,2480,290,2400,290C2320,290,2240,290,2160,290C2080,290,2000,290,1920,290C1840,290,1760,290,1680,290C1600,290,1520,290,1440,290C1360,290,1280,290,1200,290C1120,290,1040,290,960,290C880,290,800,290,720,290C640,290,560,290,480,290C400,290,320,290,240,290C160,290,80,290,40,290L0,290Z">
    </path>
  </svg>
</template>
<script>
import { mapGetters } from 'vuex';
import { ElNotification } from 'element-plus';

export default {
  data() {
    return {
      stats: {
        initialNumberA: null,
        initialNumberB: null,
        initialNumberC: null,
        randomNumber: 0,
        showRandomNumber: false,
      },
       age: null
    };
  },
  computed: {
    ...mapGetters('property', ['getStats'])
  },
  methods: {
     calculateAge() {
      const birthDate = new Date('2005-12-04');
      const currentDate = new Date();
      const ageDiffMs = currentDate - birthDate;
      const ageDate = new Date(ageDiffMs);
      this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    startRandomAnimation() {
      this.showRandomNumber = true;
      const finalNumber = this.stats.initialNumberA + this.stats.initialNumberB + this.stats.initialNumberC;
      const duration = 3000; // Durasi animasi dalam milidetik

      // Generate angka acak dengan interval setiap 100ms
      const interval = setInterval(() => {
        this.stats.randomNumber = Math.floor(Math.random() * (finalNumber - 10)) + 10;
      }, 100);

      // Setelah durasi tertentu, hentikan animasi dan tampilkan angka semula
      setTimeout(() => {
        clearInterval(interval);
        this.stats.randomNumber = finalNumber;
        this.showRandomNumber = false;
      }, duration);
    },
   showAlert() {
      // Menggunakan ElNotification untuk menampilkan notifikasi dengan status informasi
      ElNotification({
        title: this.$t('notification.title'), // Sesuaikan dengan key yang sesuai di file locale Anda
        message: this.$t('notification.message'), // Sesuaikan dengan key yang sesuai di file locale Anda
        type: 'info'
      });
    },
  },
  mounted() {
    this.stats.initialNumberA = this.getStats[0].projects;
    this.stats.initialNumberB = this.getStats[0].year;
    this.stats.initialNumberC = this.getStats[0].achievement;
  },
  created() {
    // Hitung usia saat komponen dibuat
    this.calculateAge();
     // Setelah komponen dibuat, mulai animasi angka acak
    this.startRandomAnimation();
  },
};
</script>