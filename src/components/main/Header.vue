<template>
  <section class="flex flex-col items-center justify-center py-20 min-h-screen w-full mx-auto">
    <div class="flex flex-col items-center justify-center">
      <div class="border-4 border-cyan-400 p-2 rounded-full mb-6 shadow-inner shadow-cyan-400">
        <img src="../../assets/daffa-formal-removebg-preview.png" alt="daffa" class="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-scale-down rounded-full">
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-cyan-400 font-extrabold text-center">Muhammad Daffa Fauzan</h1>
    </div>
    <div class="flex items-center justify-center mt-4">
      <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-base text-white text-center">A passionate Jr. back-end web developer</span>
    </div>
     <div class="flex items-center mt-5">
          <a href="#contact"
            class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 px-8 font-medium tracking-wide text-white shadow-md shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring">
            {{ $t('header.welcome.button')}}
          </a>
        </div>
  </section>
</template>
