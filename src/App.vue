<template>
  <transition name="fade">
    <div class="fade-container" v-if="!isLoading">
      <DotCursor />
      <router-view />
    </div>
    <div class="fade-container" v-else>
      <x-loading />
    </div>
  </transition>
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
.fade-container {
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
import Loading from './components/main/Loading.vue';
import DotCursor from './components/DotCursor.vue';

export default {
  components: {
     DotCursor,
    'x-loading': Loading
  }
}
</script>
