<template>
  <header id="home" class="flex flex-col items-center justify-center w-full min-h-screen mx-auto sm:h-full py-auto">
    <div class="flex flex-col items-center justify-center">
      <div ref="profileImage" class="p-2 mb-6 border-4 rounded-full shadow-inner backdrop-blur-sm border-cyan-400 shadow-cyan-400">
        <img src="../../assets/images/daffa-formal-removebg-preview.png" alt="daffa" class="object-scale-down w-32 h-32 rounded-full sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
      </div>
      <h1 ref="headerTitle" class="mb-4 text-2xl font-extrabold text-center uppercase sm:text-3xl md:text-4xl lg:text-5xl text-cyan-400">
        {{ typedText }}
      </h1>
    </div>
    <div ref="subTitle" class="flex items-center justify-center mt-2 mb-6">
      <span class="text-base text-center text-white sm:text-lg md:text-xl lg:text-2xl font-base">{{ $t('header.welcome.subtitle') }}</span>
    </div>
    <div ref="downloadButton" class="flex items-center justify-center">
      <button @click="downloadCV" class="inline-flex items-center justify-center h-10 px-8 text-sm font-medium tracking-wide text-white transition-all duration-500 rounded-full shadow-md outline-none text-nowrap sm:h-12 w-36 sm:w-full bg-gradient-to-r from-cyan-700 to-cyan-500 shadow-sky-300 hover:scale-110 hover:bg-sky-500 focus:ring">
        {{ $t('header.message.download') }}
      </button>
    </div>
  </header>
</template>

<script>
import gsap from "gsap";
import { ElMessageBox } from "element-plus";

export default {
  data() {
    return {
      typedText: '',
      fullText: 'Muhammad Daffa Fauzan',
      typingIndex: 0,
      typingSpeed: 100, // Adjust typing speed here
      isTypingFinished: false
    };
  },
  mounted() {
    this.startTyping();
    this.animateHeader();
  },
  methods: {
    startTyping() {
      if (this.typingIndex < this.fullText.length) {
        this.typedText += this.fullText[this.typingIndex];
        this.typingIndex++;
        setTimeout(this.startTyping, this.typingSpeed);
      } else {
        this.isTypingFinished = true;
      }
    },
    animateHeader() {
      // Profile image fade and scale up effect
      gsap.from(this.$refs.profileImage, {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        ease: "power2.out",
      });

      // Typing text animation with fade effect
      gsap.from(this.$refs.headerTitle, {
        duration: 1.5,
        opacity: 0,
        y: -50,
        delay: 0.5,
        ease: "power2.out",
      });

      // Subtitle slide up effect
      gsap.from(this.$refs.subTitle, {
        duration: 1.5,
        opacity: 0,
        y: 50,
        delay: 1,
        ease: "power2.out",
      });

      // Button pop and bounce effect
      gsap.from(this.$refs.downloadButton, {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        delay: 1.5,
        ease: "bounce.out",
      });
    },
    async downloadCV() {
      try {
        const confirmResult = await ElMessageBox.confirm(this.$t('header.message.confirmDownload'), `${this.$t('header.message.download')}`);
        
        if (confirmResult === 'confirm') {
          const driveFileUrl = import.meta.env.VITE_CV_URL;
          const fileId = driveFileUrl.match(/\/file\/d\/([^\/]+)/)[1];
          const convertedUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

          const link = document.createElement('a');
          link.href = convertedUrl;
          link.target = '_blank';
          link.download = 'cv.pdf';

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.log('Batal unduh CV');
        }
      } catch (error) {
        console.log('Terjadi kesalahan saat mengunduh CV');
      }
    }
  }
};
</script>

<style scoped>
.typing {
  border-right: 0.1em solid #22d3ee; /* cursor effect */
}
</style>
