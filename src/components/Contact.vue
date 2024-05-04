<template>
  <div class="mx-auto pt-12 text-center md:mx-auto md:w-2/3 md:pb-1 max-w-screen-2xl">
    <h1 class="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl text-cyan-400">{{ $t('contact.head.title') }}</h1>
    <div class="text-lg sm:text-xl xl:text-xl">
      <div class="text-gray-200">
        <p class="mb-4">{{ $t('contact.head.subtitle') }}</p>
      </div>
    </div>
      <section id="contact" class="mx-auto p-16 max-w-screen-xl md:rounded-md pb-16">
    <div class="grid grid-cols-4 text-cyan-400 lg:grid-cols-3 shadow-xl">
      <div class="col-span-4 bg-blue-900 px-8 py-10 text-gray-200 md:col-span-2 md:px-10 md:py-12 lg:col-span-1">
        <h2 class="mb-8 text-2xl font-black text-cyan-400">{{ $t('contact.content.title1') }}</h2>
        <ul>
          <li class="mb-6 flex items-start text-left">
            <svg class="shrink-0 mr-6 text-2xl text-gray-500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" />
            </svg>
            <div>
              <a class="cursor-pointer text-xs md:text-lg" href="#">daffafauzan0405@gmail.com</a>
              <span class="block text-xs uppercase">email</span>
            </div>
          </li>
          <li class="my-6 flex items-center text-left">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" width="1em" height="1em" fill="currentColor" class="shrink-0 mr-6 text-2xl text-gray-500"
              viewBox="0 0 16 16">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            <div>
              <a class="cursor-pointer  text-base md:text-lg"
                href="https://www.instagram.com/daffafznnn_/">@daffafznnn_</a>
              <span class="block text-xs uppercase">instagram</span>
            </div>
          </li>
          <li class="my-6 flex items-center text-left">
            <svg class="shrink-0 mr-6 text-2xl text-gray-500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd"
                d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                clip-rule="evenodd" />
            </svg>
            <div>
              <a class="cursor-pointer  text-base md:text-lg"
                href="https://www.linkedin.com/in/muhammad-daffa-fauzan-b0219a2a1/">Muhammad Daffa Fauzan</a>
              <span class="block text-xs uppercase">LinkedIn</span>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12 bg-blue-900">
        <h2 class="mb-8 text-2xl font-black">{{ $t('contact.content.title2') }}</h2>
        <p class="mt-2 mb-4 text-sm tracking-normal text-gray-200">{{ $t('contact.content.subtitle') }}</p>
        <form @submit.prevent="showAlert">
          <div class="md:col-gap-4 mb-5 grid md:grid-cols-2">
            <input
              class="col-span-2 my-5 w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-cyan-400 bg-blue-800 text-gray-200 placeholder:text-cyan-400 border-none rounded-lg"
              type="email" :placeholder="$t('contact.form.email')" name="email" />
            <input
              class="col-span-2 w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-cyan-400 bg-blue-800 text-gray-200 placeholder:text-cyan-400 border-none rounded-lg"
              type="text" :placeholder="$t('contact.form.name')" name="name" />
          </div>
          <textarea
            class="mb-10 w-full resize-y whitespace-pre-wrap border-b py-3 text-sm outline-none focus:border-b-2 focus:border-cyan-400 bg-blue-800 text-gray-200 placeholder:text-cyan-400 border-none rounded-lg"
            id="" rows="6" :placeholder="$t('contact.form.question')" name="question"></textarea>
          <button type="submit"
            class="group flex cursor-pointer items-center rounded-xl bg-blue-800 hover:border border-cyan-400 bg-none px-8 py-4 text-center font-semibold leading-tight text-white">
           {{ $t('contact.form.button') }}
            <svg class="group-hover:ml-8 ml-4 transition-all" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15" />
            </svg>
          </button>
        </form>
    </div>
  </div>
</section>
  </div>
</template>
<script>
import Swal from 'sweetalert2';

export default {
  methods: {
    showAlert() {
      Swal.fire({
        icon: 'info',
        title: 'Fitur Segera Hadir!',
        text: 'Mohon maaf, fitur ini sedang dalam pengembangan dan akan segera hadir.',
      });
    },
  },
};
</script>