<template>
  <section id="home" class="flex flex-col items-center justify-center min-h-screen sm:h-full w-full mx-auto py-auto">
    <div class="flex flex-col items-center justify-center">
      <div class="animate-img border-4 border-cyan-400 p-2 rounded-full mb-6 shadow-inner shadow-cyan-400">
        <img src="../../assets/daffa-formal-removebg-preview.png" alt="daffa" class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-scale-down rounded-full">
      </div>
      <h1 :class="{'typing': !isTypingFinished}" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-cyan-400 font-extrabold text-center mb-4">
        {{ typedText }}
      </h1>
    </div>
    <div class="flex items-center justify-center mt-2 mb-6">
      <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-base text-white text-center">{{ $t('header.welcome.subtitle')}}</span>
    </div>
    <div class="flex items-center justify-center">
      <button @click="downloadCV" class="cursor-pointer inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 px-8 font-medium tracking-wide text-white shadow-md shadow-sky-300 outline-none transition-all duration-500 hover:scale-110 hover:bg-sky-500 focus:ring">
        {{ $t('header.message.download')}}
      </button>
    </div>
  </section>
</template>

<script>
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
    this.setupIntersectionObserver('.animate-img');
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
.typing {
  border-right: 0.1em solid #22d3ee; /* cursor effect */
}
#typed-output {
  min-height: 3rem; /* Sesuaikan sesuai kebutuhan */
  white-space: nowrap; /* keeps text on a single line */
  overflow: hidden; /* hides the overflow content */
  display: inline-block; /* ensures block-level formatting */
}

.animate-img {
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 2s ease-out, transform 1s ease-out;
}
</style>
