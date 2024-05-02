<template>
  <header :class="{
      'fixed top-0 w-full p-4 transition duration-300 ease-in-out': isScrolled,
      'bg-blue-950': !isScrolled,
      'shadow-xl': isScrolled,
    }" class="bg-blue-950 text-cyan-400 container top-0 left-0 z-50 fixed mx-auto max-w-screen-2xl flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
    <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black ml-10">
      <span class="mr-2 w-8 img-fluid">
        DaffaFznnn
      </span>
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
      <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </label>
    <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-auto lg:max-h-full lg:flex-row">
      <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-end lg:space-y-0">
        <li class="lg:mr-12"><a class="rounded  text-cyan-400 transition-all hover:text-cyan-300" href="#porto">{{ $t('navbar.content.portfolio') }}</a></li>
        <li class="lg:mr-12"><a class="rounded  text-cyan-400 transition-all hover:text-cyan-300" href="#about">{{ $t('navbar.content.about') }}</a></li>
        <li class="lg:mr-12"><a class="rounded  text-cyan-400 transition-all hover:text-cyan-300" href="#contact">{{ $t('navbar.content.contact') }}</a></li>
      </ul>
      <hr class="mt-4 w-full lg:hidden" />
      <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
        <el-switch
          v-model="languageSwitch"
           inline-prompt
          :active-text="'En'"
          :inactive-text="'Id'"
          active-color="#409EFF"
          inactive-color="#67C23A"
          style="margin-left: 12rem;"
          @change="toggleLanguage"
        />
        <button @click="downloadCV" type="button" class="whitespace-nowrap rounded-xl bg-blue-900 px-4 py-2 font-medium text-cyan-400 transition-all hover:ring ring-cyan-400 border-cyan-400 hover:scale-75">{{ $t('navbar.message.download') }}</button>
      </div>
    </nav>
  </header>
</template>

<script>
import { ElMessageBox, ElSwitch } from 'element-plus';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    ElSwitch,
  },
  data() {
    return {
      isScrolled: false,
      languageSwitch: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 100;
    },
    scrollToSection(sectionId) {
      VueScrollTo.scrollTo(sectionId, 500, { easing: 'ease-in-out' });
    },
    async downloadCV() {
      try {
        const confirmResult = await ElMessageBox.confirm(this.$t('navbar.message.confirmDownload'), `${this.$t('navbar.message.download')}`);
        
        if (confirmResult === 'confirm') {
          const cvFileUrl = 'https://drive.google.com/uc?export=download&id=1NxLynyM11jPukHLM4tGNjZDdUjT0sIKV';

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
    toggleLanguage() {
      this.$i18n.locale = this.languageSwitch ? 'en' : 'id';
    },
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
</style>
