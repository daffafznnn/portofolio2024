<template>
  <header id="home" class="flex flex-col items-center justify-center w-full min-h-screen mx-auto sm:h-full py-auto">
    <div class="flex flex-col items-center justify-center">
      <div class="p-2 mb-6 border-4 rounded-full shadow-inner animate-img backdrop-blur-sm border-cyan-400 shadow-cyan-400">
        <img src="../../assets/daffa-formal-removebg-preview.png" alt="daffa" class="object-scale-down w-32 h-32 rounded-full sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
      </div>
      <h1 :class="{'typing': !isTypingFinished}" class="mb-4 text-2xl font-extrabold text-center uppercase sm:text-3xl md:text-4xl lg:text-5xl text-cyan-400">
        {{ typedText }}
      </h1>
    </div>
    <div class="flex items-center justify-center mt-2 mb-6 animate-down-subTitle">
      <span class="text-base text-center text-white sm:text-lg md:text-xl lg:text-2xl font-base">{{ $t('header.welcome.subtitle')}}</span>
    </div>
    <div class="flex items-center justify-center scale-button">
      <button @click="downloadCV" class="inline-flex items-center justify-center h-10 px-8 font-medium tracking-wide text-white text-sm transition-all duration-500 rounded-full shadow-md outline-none animate-bounce text-nowrap sm:h-12 w-36 sm:w-full bg-gradient-to-r from-cyan-700 to-cyan-500 shadow-sky-300 hover:scale-110 hover:bg-sky-500 focus:ring">
        {{ $t('header.message.download')}}
      </button>
    </div>
  </header>
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
    this.setupIntersectionObserver('.animate-down-subTitle');
    this.setupIntersectionObserver('.scale-button');
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
          // URL Google Drive yang ingin diunduh
          const driveFileUrl = import.meta.env.VITE_CV_URL

          // Konversi URL Google Drive menjadi URL download
          const fileId = driveFileUrl.match(/\/file\/d\/([^\/]+)/)[1];
          const convertedUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

          const link = document.createElement('a');
          link.href = convertedUrl;
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

.animate-down-subTitle {
  opacity: 0;
  transform: translateY(-50%);
  transition: opacity 1s, transform 1s;
}

@keyframes scale-up {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
.scale-button {
    animation: scale-up 1s forwards;
}

</style>
