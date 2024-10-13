<template>
  <div>
    <button
      @click="toggleChat"
      class="fixed z-50 p-3 text-white transition duration-300 rounded-full shadow-lg bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600"
    >
      <span v-if="!isChatOpen">
        <svg class="w-[23px] h-[23px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clip-rule="evenodd"/>
      </svg>
      </span>
      <span v-else>
        <svg class="w-[23px] h-[23px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
      </svg>  
      </span> <!-- Change to arrow down when chat is open -->
    </button>    
    <div
      v-if="isChatOpen"
      class="fixed z-50 mb-5 overflow-hidden bg-white rounded-lg shadow-lg bottom-16 right-5 w-80 h-96"
    >
      <div class="p-4">
        <h3 class="text-lg font-bold">Chat with Bot Daffafznnn</h3>
        <div class="overflow-y-auto h-72">
          <div v-if="showComingSoon" class="p-2 my-2 bg-gray-100 rounded-lg">
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-8 h-8 mr-2">
                <path
                  d="M86.3 197.8a51.8 51.8 0 0 0 -41.6 20.1V156a8.2 8.2 0 0 0 -8.2-8.2H8.2A8.2 8.2 0 0 0 0 156V333.6a8.2 8.2 0 0 0 8.2 8.2H36.6a8.2 8.2 0 0 0 8.2-8.2v-8.1c11.6 13.4 25.9 19.8 41.6 19.8 34.6 0 61.9-26.2 61.9-73.8C148.3 225.5 121.2 197.8 86.3 197.8zM71.5 305.7c-9.6 0-21.2-4.9-26.7-12.5V250.2c5.5-7.6 17.2-12.8 26.7-12.8 17.7 0 31.1 13.1 31.1 34C102.6 292.6 89.3 305.7 71.5 305.7zm156.4-59a17.4 17.4 0 1 0 17.4 17.4A17.4 17.4 0 0 0 227.9 246.7zM274 156.7V112a13.3 13.3 0 1 0 -10.2 0V156.7a107.5 107.5 0 1 0 10.2 0zm86 107.4c0 30.5-40.8 55.3-91.1 55.3s-91.1-24.8-91.1-55.3 40.8-55.3 91.1-55.3S359.9 233.5 359.9 264.1zm-50.2 17.4a17.4 17.4 0 1 0 -17.4-17.4h0A17.4 17.4 0 0 0 309.8 281.5zM580.7 250.5c-14.8-2.6-22.4-3.8-22.4-9.9 0-5.5 7.3-9.9 17.7-9.9a65.6 65.6 0 0 1 34.5 10.1 8.2 8.2 0 0 0 11.3-2.5c.1-.1 .1-.2 .2-.3l8.6-14.9a8.2 8.2 0 0 0 -2.9-11.1 99.9 99.9 0 0 0 -52-14.1c-39 0-60.2 21.5-60.2 46.2 0 36.3 33.7 41.9 57.6 45.6 13.4 2.3 24.1 4.4 24.1 11 0 6.4-5.5 10.8-18.9 10.8-13.6 0-31-6.2-42.6-13.6a8.2 8.2 0 0 0 -11.3 2.5c0 .1-.1 .1-.1 .2l-10.2 16.9a8.2 8.2 0 0 0 2.5 11.1c15.2 10.3 37.7 16.7 59.4 16.7 40.4 0 64-19.8 64-46.5C640 260.6 604.5 254.8 580.7 250.5zm-95.9 60.8a8.2 8.2 0 0 0 -9.5-5.9 23.2 23.2 0 0 1 -4.2 .4c-7.8 0-12.5-6.1-12.5-14.2V240.3h20.3a8.1 8.1 0 0 0 8.1-8.1V209.5a8.1 8.1 0 0 0 -8.1-8.1H458.6V171.1a8.1 8.1 0 0 0 -8.1-8.1H422.3a8.1 8.1 0 0 0 -8.1 8.1h0v30.2H399a8.1 8.1 0 0 0 -8.1 8.1h0v22.7A8.1 8.1 0 0 0 399 240.3h15.1v63.7c0 27 15.4 41.3 43.9 41.3 12.2 0 21.4-2.2 27.6-5.4a8.2 8.2 0 0 0 4.1-9.3z"
                />
              </svg>
              Features coming soon in development
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center -mt-1.5 border-t">
        <input
          type="text"
          v-model="message"
          @keyup.enter="sendMessage"
          placeholder="Type a message..."
          class="flex-1 p-2 border-none focus:outline-none focus:ring-0"
        />
        <button
          @click="sendMessage"
          class="p-2 text-white rounded-full bg-cyan-500 hover:bg-cyan-600"
        >
          <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/>
      </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChatOpen: false,
      message: "",
      showComingSoon: false,
    };
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
      if (this.isChatOpen) {
        this.showComingSoon = false; // Reset when chat opens
      }
    },
    sendMessage() {
      if (this.message.trim()) {
        this.showComingSoon = true; // Show the "Coming Soon" message
        this.message = ""; // Clear the input after sending

        // Reset the coming soon message after a short delay
        setTimeout(() => {
          this.showComingSoon = false;
        }, 5000); // Adjust the duration as needed
      }
    },
  },
};
</script>