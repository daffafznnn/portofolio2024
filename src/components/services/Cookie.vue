<template>
  <!-- component -->
   <transition name="slide">
  <section v-if="!cookieConsent || !modalClosed" class="fixed max-w-md p-4 mx-auto bg-blue-900 border border-blue-400 dark:bg-cyan-200 dark:border-cyan-700 left-12 bottom-5 rounded-2xl">
    <h2 class="font-semibold text-white dark:text-white">🍪 We use cookies!</h2>

    <p class="mt-4 text-sm text-gray-300 dark:text-gray-300">Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="#" class="font-medium text-white underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500" @click.prevent="showPreferences">Let me choose</a>. </p>
    
    <p class="mt-3 text-sm text-gray-300 dark:text-gray-300">Closing this modal default settings will be saved.</p>
    
    <div class="grid grid-cols-2 gap-4 mt-4 shrink-0">
        <button class=" text-xs bg-cyan-200 font-medium rounded-lg hover:bg-blue-200 text-blue-900 px-4 py-2.5 duration-300 transition-colors focus:outline-none" @click="acceptAllCookies">
            Accept all
        </button>

        <button class=" text-xs border text-cyan-400 hover:bg-transparent dark:border-cyan-700 dark:text-white dark:hover:bg-gray-700 border-cyan-400 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none" @click="rejectAllCookies">
            Reject all
        </button>

        <button class=" text-xs border text-cyan-400 hover:bg-transparent dark:border-cyan-700 dark:text-white dark:hover:bg-gray-700 border-cyan-400 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none" @click="closeModal">
            Close
        </button>
    </div>
  </section>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      cookieConsent: this.getCookieConsent(),
      modalClosed: this.getModalClosed()
    };
  },
  methods: {
    acceptAllCookies() {
      // Set cookie to indicate all cookies accepted
      document.cookie = "cookieConsent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      this.modalClosed = true;
      this.setModalClosed(true);
    },
    rejectAllCookies() {
      // Set cookie to indicate all cookies rejected
      document.cookie = "cookieConsent=rejected; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      this.modalClosed = true;
      this.setModalClosed(true);
    },
    closeModal() {
      // Logic to close modal
      this.modalClosed = true;
      this.setModalClosed(true);
    },
    getCookieConsent() {
      const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('cookieConsent='));
      return cookie ? cookie.trim().split('=')[1] : null;
    },
    getModalClosed() {
      const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('modalClosed='));
      return cookie ? cookie.trim().split('=')[1] === 'true' : false;
    },
    setModalClosed(value) {
      document.cookie = `modalClosed=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
  }
}
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.5s ease;
}
.slide-enter, .slide-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>