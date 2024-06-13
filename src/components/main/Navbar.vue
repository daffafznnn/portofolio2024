  <template>
<header
  :class="{
    'fixed left-1/2 transform -translate-x-1/2 mt-2 text-cyan-400 py-5 px-2 rounded-full transition duration-700': true,
    'top-0 backdrop-blur-sm': isScrolled,
    'top-0': !isScrolled,
    'shadow-lg shadow-cyan-400': isScrolled,
    'border border-cyan-400 px-6': !isScrolled,
    'bg-cyan-500 bg-opacity-70 px-5': isScrolled,
    'lg:fixed lg:mt-4 lg:py-0 lg:shadow-none lg:border-none lg:bg-transparent': !isScrolled
  }"
  style="z-index: 2000;"
>

    <nav class="flex w-full items-center justify-center overflow-hidden transition-all mx-0 sm:mx-3">
      <ul class="flex w-full items-center justify-center ">
        <li class="md:mr-5 mr-2" :class="{'font-base': isScrolled}">
          <a class="rounded text-cyan-400 transition-all text-sm md:text-lg" :class="{'text-white md:hover:text-cyan-900': isScrolled, 'md:hover:text-white': !isScrolled}" href="#home">{{ $t('navbar.content.home') }}</a>
        </li>
        <li class="md:mr-5 mr-2" :class="{'font-base': isScrolled}">
          <a class="rounded text-cyan-400 transition-all text-sm md:text-lg" :class="{'text-white md:hover:text-cyan-900': isScrolled, 'md:hover:text-white': !isScrolled}" href="#about">{{ $t('navbar.content.about') }}</a>
        </li>
        <li class="md:mr-5 mr-2" :class="{'font-base': isScrolled}">
          <a class="rounded text-cyan-400 transition-all text-sm md:text-lg" :class="{'text-white md:hover:text-cyan-900': isScrolled, 'md:hover:text-white': !isScrolled}" href="#tech">{{ $t('navbar.content.tech') }}</a>
        </li>
        <li class="md:mr-5 mr-2" :class="{'font-base': isScrolled}">
          <a class="rounded text-cyan-400 transition-all text-sm md:text-lg" :class="{'text-white md:hover:text-cyan-900': isScrolled, 'md:hover:text-white': !isScrolled}" href="#porto">{{ $t('navbar.content.portfolio') }}</a>
        </li>
        <li class="md:mr-5 mr-2" :class="{'font-base': isScrolled}">
          <a class="rounded text-cyan-400 transition-all text-sm md:text-lg" :class="{'text-white md:hover:text-cyan-900': isScrolled, 'md:hover:text-white': !isScrolled}" href="#contact">{{ $t('navbar.content.contact') }}</a>
        </li>
        <li class="md:mr-5 mr-2">
          <el-dropdown>
            <span class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-translate text-cyan-300" :class="{'text-white md:hover:text-cyan-900': isScrolled, 'md:hover:text-white': !isScrolled}" viewBox="0 0 16 16">
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
              </svg>
            </span>
            <template #dropdown>
              <el-dropdown-menu class="bg-blue-200 text-white">
                <el-dropdown-item @click="toggleLanguage('en')">English</el-dropdown-item>
                <el-dropdown-item @click="toggleLanguage('id')">Indonesia</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
      </ul>
    </nav>
    </header>
  </template>

  <script>
  import {  ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
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
        this.isScrolled = window.scrollY > 10;
      },
      scrollToSection(sectionId) {
        VueScrollTo.scrollTo(sectionId, 500, { easing: 'ease-in-out' });
      },
      toggleLanguage(command) {
        this.$i18n.locale = command;
      },
    },
  };
  </script>