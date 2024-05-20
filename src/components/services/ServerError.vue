<template>
  <main class="h-screen w-full flex flex-col justify-center items-center">
    <h1 class="text-9xl font-extrabold text-white tracking-widest">500</h1>
    <div class="bg-red-500 px-2 text-sm rounded rotate-12 absolute">
      Server Error
    </div>
    <p class="text-white text-lg mt-5 text-center">Oops! Something went wrong with the server. Please try again later.</p>
    <button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-cyan-400 group active:text-cyan-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-cyan-400 group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span class="relative block px-8 py-3 bg-[#172554] border border-current">
          <router-link to="/">Go Home</router-link>
        </span>
      </a>
    </button>
  </main>
</template>
