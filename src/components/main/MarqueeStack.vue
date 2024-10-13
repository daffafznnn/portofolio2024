<template>
  <section id="tech">
    <div class="relative flex flex-col items-center" ref="componentRef">
      <!-- Title -->
      <div ref="titleRef" class="relative flex items-center pl-4 -ml-4 scroll-mt-40">
        <h2 class="text-5xl font-bold leading-snug !mb-2 text-cyan-400">{{ $t('tech.title') }}</h2>
      </div>
      <!-- Subtitle -->
      <p ref="subtitleRef" class="text-base antialiased text-white">
        {{ $t('tech.subtitle') }}
      </p>
    </div>
    <div class="relative flex items-center justify-center overflow-x-hidden text-white">
      <div class="py-12 animate-marquee whitespace-nowrap">
        <span class="mx-4">
          <svg width="90" height="90" viewBox="0 0 32 32" class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </span>
        <span class="mx-4">
          <svg width="90" height="90" viewBox="0 0 32 32" class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </span>
        <span class="mx-4">
          <svg width="90" height="90" viewBox="0 0 32 32" class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </span>
        <span class="mx-4">
          <svg width="90" height="90" viewBox="0 0 32 32" class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </span>
        <span class="mx-4">
          <svg width="90" height="90" viewBox="0 0 32 32" class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </span>
      </div>

      <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span class="mx-4">
          <svg width="90" height="90" viewBox="0 0 32 32" class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </span>
        <span class="mx-4">
          <svg width="90" height="90" viewBox="0 0 32 32" class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </span>
        <span class="mx-4">
          <svg width="90" height="90" viewBox="0 0 32 32" class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </span>
        <span class="mx-4">
          <svg width="90" height="90" viewBox="0 0 32 32" class="transition-all duration-300 group-hover:brightness-100 group-hover:contrast-200 grayscale group-hover:grayscale-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    // Buat observer untuk memantau komponen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animasi untuk judul
          gsap.from(this.$refs.titleRef, {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: 'power2.out',
          });

          // Animasi untuk subtitle
          gsap.from(this.$refs.subtitleRef, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.5,
          });

          // Stop observing setelah animasi dipicu
          observer.unobserve(entry.target);
        }
      });
    });

    // Mulai mengamati komponen
    observer.observe(this.$refs.componentRef);
  },
}
</script>

<style>
/* Jika ada CSS yang digunakan sebelumnya, pastikan tidak dihapus */
</style>
