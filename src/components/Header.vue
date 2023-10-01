<template>
<div id="#home" class="mx-auto p-12 flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
  <!-- Left Column -->
  <div class="mx-auto mt-10 w-full max-w-xl md:mt-36 lg:max-w-screen-xl">
    <div class="mb-16 lg:mb-0 lg:max-w-lg">
      <div class="mb-6 max-w-xl">
        <h2 class="mb-6 max-w-lg text-3xl font-bold tracking-tight text-cyan-400 sm:text-5xl sm:leading-snug">
            Welcome To  <br />
          <span class="inline-block font-bold text-cyan-500"> DaffaFznnn</span>
        </h2>
        <p class="text-base text-white md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam rem voluptatem, animi tempora expedita!Lorem ipsum dolor.</p>
      </div>
      <div class="flex items-center">
        <a href="/" class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 px-8 font-medium tracking-wide text-white shadow-md shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"> Get started </a>
        <a href="/" aria-label="" class="inline-flex items-center font-semibold text-cyan-400 transition-colors duration-200 hover:text-cyan-400">Learn more</a>
      </div>
    </div>
  </div>
  <!-- /Left Column -->

  <!-- Right Column -->
  <div class="flex h-full w-full space-x-3 overflow-hidden px-2 md:justify-end">
    <!-- Col 2 -->
    <div class="my-auto hidden w-72 flex-col space-y-3 md:mt-36 lg:flex">
      <img src="../assets/logo-daffa-a219537a.png" alt="" />
    </div>
    <div class="my-auto w-80 flex-col space-y-3 md:mt-36 lg:flex bg-blue-900 shadow-lg rounded-xl px-4 py-4">
      <div class="flex py-2 px-2 text-cyan-400">
        <div class="my-auto mr-4 p-3 text-cyan-500 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div class="">
    <span class="text-2xl font-bold" v-if="showRandomNumber">{{ randomNumber }}</span>
    <span class="text-2xl font-bold" v-else>{{ initialNumber }}</span>
          <p class="text-sm">Monthly Users</p>
        </div>
      </div>
      <div class="flex py-2 px-2 text-cyan-400">
        <div class="my-auto mr-4 p-3 text-cyan-500 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <div class="">
          <span class="text-2xl font-bold" v-if="showRandomNumber">{{ randomNumber }}</span>
          <span class="text-2xl font-bold" v-else>{{ initialNumber }}</span>
          <p class="text-sm">Graduates</p>
        </div>
      </div>
      <div class="flex py-2 px-2 text-cyan-400">
        <div class="my-auto mr-4 p-3 text-cyan-500 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div class="">
          <span class="text-2xl font-bold" v-if="showRandomNumber">{{ randomNumber }}</span>
          <span class="text-2xl font-bold" v-else>{{ initialNumber }}</span>
          <p class="text-sm">Fortune 500 Employed</p>
        </div>
      </div>
    </div>
  </div>
  <!-- /Right Column -->
</div>

<svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 290" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(23, 37, 84, 1)" offset="0%"></stop><stop stop-color="rgba(34, 211, 238, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,58L40,53.2C80,48,160,39,240,43.5C320,48,400,68,480,96.7C560,126,640,164,720,149.8C800,135,880,68,960,77.3C1040,87,1120,174,1200,207.8C1280,242,1360,222,1440,207.8C1520,193,1600,184,1680,193.3C1760,203,1840,232,1920,222.3C2000,213,2080,164,2160,135.3C2240,106,2320,97,2400,87C2480,77,2560,68,2640,96.7C2720,126,2800,193,2880,227.2C2960,261,3040,261,3120,227.2C3200,193,3280,126,3360,91.8C3440,58,3520,58,3600,62.8C3680,68,3760,77,3840,106.3C3920,135,4000,184,4080,203C4160,222,4240,213,4320,203C4400,193,4480,184,4560,164.3C4640,145,4720,116,4800,111.2C4880,106,4960,126,5040,140.2C5120,155,5200,164,5280,154.7C5360,145,5440,116,5520,116C5600,116,5680,145,5720,159.5L5760,174L5760,290L5720,290C5680,290,5600,290,5520,290C5440,290,5360,290,5280,290C5200,290,5120,290,5040,290C4960,290,4880,290,4800,290C4720,290,4640,290,4560,290C4480,290,4400,290,4320,290C4240,290,4160,290,4080,290C4000,290,3920,290,3840,290C3760,290,3680,290,3600,290C3520,290,3440,290,3360,290C3280,290,3200,290,3120,290C3040,290,2960,290,2880,290C2800,290,2720,290,2640,290C2560,290,2480,290,2400,290C2320,290,2240,290,2160,290C2080,290,2000,290,1920,290C1840,290,1760,290,1680,290C1600,290,1520,290,1440,290C1360,290,1280,290,1200,290C1120,290,1040,290,960,290C880,290,800,290,720,290C640,290,560,290,480,290C400,290,320,290,240,290C160,290,80,290,40,290L0,290Z"></path></svg>

</template>
<script>
export default {
  data() {
    return {
      initialNumber: 999,
      randomNumber: 0,
      showRandomNumber: false,
    };
  },
  created() {
    // Setelah komponen dibuat, mulai animasi angka acak
    this.startRandomAnimation();
  },
  methods: {
    startRandomAnimation() {
      this.showRandomNumber = true;
      const finalNumber = this.initialNumber;
      const duration = 3000; // Durasi animasi dalam milidetik

      // Generate angka acak dengan interval setiap 100ms
      const interval = setInterval(() => {
        this.randomNumber = Math.floor(Math.random() * finalNumber) + 1;
      }, 100);

      // Setelah durasi tertentu, hentikan animasi dan tampilkan angka semula
      setTimeout(() => {
        clearInterval(interval);
        this.randomNumber = finalNumber;
        this.showRandomNumber = false;
      }, duration);
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
body{
  font-family: 'Montserrat', sans-serif;
}
</style>