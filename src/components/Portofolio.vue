<template>
    <section id="porto" class="py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold text-cyan-400">My Project</h1>
  <span class="flex justify-center items-center font-medium text-gray-200 pb-8">that have already been released</span>
  <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
    
    <article v-for="item in getProject" :id="item.id" class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-sm pb-2  transition-transform duration-200 hover:translate-y-2">
      <a :href="item.link" class="block h-full w-full">
        <img class="max-h-30 w-full object-cover" alt="featured image" :src="item.img" />
        <div class="w-full p-4">
          <p class="text-md font-medium text-cyan-500">{{ item.title}}</p>
          <p class="mb-2 text-xl font-medium text-cyan-400">{{ item.name }}</p>
          <p class="text-md font-light text-gray-200">{{ item.desc }}</p>
        </div>
      </a>
    </article>
    
  </div>
</section>

</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters('property', ['getProject'])
  }
}
</script>