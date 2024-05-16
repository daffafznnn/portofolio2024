<template>
<header
  :class="{
    'fixed top-0 w-full p-4 transition duration-300 ease-in-out': isScrolled,
    'bg-blue-950': !isScrolled,
    'shadow-xl': isScrolled,
  }"
  class="bg-blue-950 text-cyan-400 container top-0 left-0 z-50 fixed mx-auto max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center"
>
  <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black ml-10">
    <span class="mr-2 w-8 img-fluid">
      DaffaFznnn
    </span>
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-8 cursor-pointer lg:hidden" for="navbar-open">
    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-auto lg:max-h-full lg:flex-row">
    <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-end lg:space-y-0">
      <li class="lg:mr-12"><a class="rounded text-cyan-400 transition-all hover:text-cyan-300" href="#about">{{ $t('navbar.content.about') }}</a></li>
      <li class="lg:mr-12"><a class="rounded text-cyan-400 transition-all hover:text-cyan-300" href="#porto">{{ $t('navbar.content.portfolio') }}</a></li>
            <li class="lg:mr-12"><a class="rounded text-cyan-400 transition-all hover:text-cyan-300" href="#tech">{{ $t('navbar.content.tech') }}</a></li>
      <li class="lg:mr-12"><a class="rounded text-cyan-400 transition-all hover:text-cyan-300" href="#contact">{{ $t('navbar.content.contact') }}</a></li>
    </ul>
    <hr class="mt-4 w-full lg:hidden" />
    <div class="my-4 flex items-center space-x-4 lg:my-0 lg:ml-auto">
      <el-dropdown>
        <span class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-translate text-cyan-300" viewBox="0 0 16 16">
            <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
            <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
          </svg>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="bg-blue-200 text-white">
            <el-dropdown-item @click="toggleLanguage('id')">Indonesia</el-dropdown-item>
            <el-dropdown-item @click="toggleLanguage('en')">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <button @click="downloadCV" type="button" class="whitespace-nowrap rounded-xl bg-blue-900 px-4 py-2 font-medium text-cyan-400 transition-all hover:ring ring-cyan-400 border-cyan-400 hover:scale-75">{{ $t('navbar.message.download') }}</button>
    </div>
  </nav>
</header>
</template>

<script>
import { ElMessageBox, ElSwitch, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    ElSwitch,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
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
    toggleLanguage(command) {
      this.$i18n.locale = command;
    },
  },
};
</script>
