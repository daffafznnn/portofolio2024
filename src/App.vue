<template>
  <div :class="{ 'fade-in-out': !isLoading }">
    <router-view v-if="!isLoading" />
    <x-loading v-else />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style>
.fade-in-out {
  transition: opacity 0.5s ease-in-out; /* Periksa properti transisi */
}

.fade-in-out-enter,
.fade-in-out-leave-to {
  opacity: 0;
}

.fade-in-out-enter-active,
.fade-in-out-leave-active {
  opacity: 1;
}
</style>

<script>
import Loading from './components/Loading.vue';

export default {
  components: {
    'x-loading': Loading
  }
}
</script>
