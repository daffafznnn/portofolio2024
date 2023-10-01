<template>
    <!-- component -->
    <div class="fixed -bottom-40 sm:-bottom-20 sm:-right-1 -right-1 p-4 z-50 w-full h-full flex justify-center items-center">
    <div
      class="bg-blue-500 text-white p-8 transform transition-transform duration-500 ease-in-out"
      :class="{ '-translate-x-1': isVisible, 'hidden': !isVisible }"
    >
      <!-- Konten komponen Anda -->
      <h2 class="text-2xl font-semibold mb-4">Konten Komponen</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <button @click="toggleVisibility" class="fixed right-3 bottom-1 p-4 z-50  mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
      Toggle Komponen
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>