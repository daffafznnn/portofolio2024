<template>
  <footer class="relative mt-20 px-4 pt-20">
    <div class="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 p-2">
      <img class="h-full object-contain" src="../../assets//images/logo_polos_daffa_new-removebg-preview.png" alt="" />
    </div>
    <nav aria-label="Footer Navigation" class="mx-auto mb-10 pl-auto flex items-center justify-center gap-5 ">
      <a href="https://github.com/muhammaddaffafauzan" target="_blank" class="font-medium text-white">{{ $t('footer.text1') }}</a>
      <a href="https://sociabuzz.com/daffafznnn_/tribe" target="_blank" class="font-medium text-white">{{ $t('footer.text2') }}</a>
    </nav>
    <p class="py-5 mx-auto text-center sm:text-center text-gray-300">{{ $t('footer.copyright') }}</p>
  </footer>
</template>
