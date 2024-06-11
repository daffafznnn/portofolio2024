<template>
  <section id="home" class="flex flex-col items-center justify-center min-h-screen sm:h-full w-full mx-auto py-auto">
    <div class="flex flex-col items-center justify-center">
      <div class="border-4 border-cyan-400 p-2 rounded-full mb-6 shadow-inner shadow-cyan-400">
        <img src="../../assets/daffa-formal-removebg-preview.png" alt="daffa" class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-scale-down rounded-full">
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-cyan-400 font-extrabold text-center mb-4">Muhammad Daffa Fauzan</h1>
    </div>
    <div class="flex items-center justify-center mt-2 mb-6">
      <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-base text-white text-center"> {{ $t('header.welcome.subtitle')}}</span>
    </div>
    <div class="flex items-center justify-center ">
      <button @click="downloadCV"
        class="cursor-pointer inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 px-8 font-medium tracking-wide text-white shadow-md shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring">
        {{ $t('header.message.download')}}
      </button>
    </div>
  </section>
</template>
<script>
import { ElMessageBox } from "element-plus";

export default {
 methods: {
   async downloadCV() {
      try {
        const confirmResult = await ElMessageBox.confirm(this.$t('header.message.confirmDownload'), `${this.$t('header.message.download')}`);
        
        if (confirmResult === 'confirm') {
          const cvFileUrl = 'https://drive.google.com/uc?export=download&id=12Lj6b6JqN33rbIf8p5vTBx9d27pPk5SY';

          const link = document.createElement('a');
          link.href = cvFileUrl;
          link.target = '_blank';
          link.download = 'cv.pdf'; // Nama file yang akan diunduh

          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
        } else {
          console.log('Batal unduh CV');
        }
      } catch (error) {
        console.log('Terjadi kesalahan saat mengunduh CV');
      }
    },
},
};
</script>
<style>

</style>