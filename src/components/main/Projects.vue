<template>
  <section id="porto" ref="porto" class="py-20">
    <h1 class="mb-12 text-center font-sans text-5xl font-bold text-cyan-400">{{ $t('porto.head.title') }}</h1>
    <span class="flex justify-center items-center font-medium text-gray-200 pb-8">{{ $t('porto.head.subtitle') }}</span>
    <div class="flex justify-center mb-2">
    <div class="flex items-center gap-2 rounded-xl bg-white/10 p-2 text-white">
        <div v-for="item in getCategories" :key="item.id">
           <input
            type="radio"
            :name="'category-' + item.id"
            :id="'category-' + item.id"
            :value="item.name"
            class="peer hidden"
            v-model="selectedCategory"
            @click="fetchProject"
          />
          <label
            :for="'category-' + item.id"
            class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-cyan-500 peer-checked:font-bold peer-checked:text-white"
          >
            {{ item.name }}
          </label>
        </div>
      </div>
    </div>
     <div v-if="isFirstLoad" class="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
      <article v-for="index in 6" :key="index" class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-sm pb-2 transition-transform duration-500 hover:translate-y-2">
        <div class="animate-pulse flex flex-col h-full">
          <div class="w-80 sm:w-72 h-48 bg-gray-300 rounded-lg"></div>
          <div class="p-4 ">
            <div class="h-4 bg-gray-300 rounded mb-2"></div>
            <div class="h-6 bg-gray-300 rounded mb-2"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </article>
    </div>
    <div v-else class="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
    <article v-for="(item) in paginatedProjects" :key="item.id" :id="item.id"
     :class="{ 'animate-slide-up': isFirstLoad, 'article': true }"
    class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-sm pb-2 transition-transform duration-500 hover:translate-y-2 relative group">
      <img class="h-56 w-full object-cover rounded-lg transition-filter duration-300 ease-in-out" alt="featured image" :src="item.url" loading="lazy" @load="imageLoaded" />
      <!-- Container untuk overlay saat hover -->
      <!-- for desktop -->
      <div class="overlay hidden md:flex flex-col">
        <!-- Konten tautan -->
        <div class="text-white text-center">
          <a :href="item.websiteUrl" target="_blank" rel="noopener noreferrer" :class="{'hidden sm:flex' : !item.websiteUrl}" class="text-white hover:text-cyan-300 block mb-2 hover:underline">Visit Website</a>
          <a :href="item.githubUrl" target="_blank" rel="noopener noreferrer" :class="{'hidden sm:flex' : !item.githubUrl}" class="text-white hover:text-cyan-300 block hover:underline">GitHub</a>
        </div>
      </div>
      <div class="w-full p-4">
        <p class="text-md font-medium text-cyan-500">{{ item.technologiesUsed }}</p>
        <p class="mb-2 text-xl font-medium text-cyan-400">{{ item.title }}</p>
        <p class="text-md font-light text-gray-200">{{ item.description }}</p>
        <div class="md:hidden mt-2 flex flex-col">
          <a :href="item.websiteUrl" :class="{'hidden sm:flex' : !item.websiteUrl}" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-blue-600 px-3 py-1 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <!-- Icon for website link -->
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z" clip-rule="evenodd" />
            </svg>
            Website
          </a>
          <a :href="item.githubUrl" :class="{'hidden sm:flex' : !item.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-blue-600 px-3 py-1 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <!-- Icon for GitHub link -->
              <path fill-rule="evenodd" d="M10 2a8 8 0 00-2.53 15.59c.4.08.55-.17.55-.38l-.01-1.34c-2.26.49-2.74-1.09-2.74-1.09-.37-.94-.9-1.19-.9-1.19-.73-.5.06-.49.06-.49.81.06 1.24.83 1.24.83.72 1.23 1.89.87 2.36.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.96 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.52.56.83 1.27.83 2.15 0 3.08-1.88 3.76-3.66 3.96.29.25.54.74.54 1.49l-.01 2.21c0 .21.15.46.55.38A8 8 0 0010 2z" clip-rule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
    <el-empty v-if="paginatedProjects.length === 0" description="No projects found" class="h-90 col-span-1 sm:col-span-3 mx-auto grid max-w-screen-xl" />
    </div>
  <div v-if="shouldShowPagination" class="flex justify-center items-center mt-8">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 mr-2 bg-transparent border-collapse border border-cyan-400 text-cyan-300 rounded-md cursor-pointer" :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }">{{ $t('porto.button.prev') }}</button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-transparent border-collapse border border-cyan-400 text-cyan-300 rounded-md cursor-pointer" :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }">{{ $t('porto.button.next') }}</button>
    </div>
  </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      isFirstLoad: true,
      itemsPerPage: 6,
      currentPage: 1,
      selectedCategory: null,
      shouldShowPagination: false,
      prevSelectedCategory: null
    };
  },
  computed: {
    ...mapGetters('property', ['getProject']),
    ...mapGetters('categories', ['getCategories']),
    totalPages() {
      return Math.ceil(this.getProject.length / this.itemsPerPage);
    },
paginatedProjects() {
  // Reset currentPage to 1 when category changes
  if (this.prevSelectedCategory !== this.selectedCategory) {
    this.currentPage = 1;
    this.prevSelectedCategory = this.selectedCategory;
  }

  const projectsWithDateTime = this.getProject.map(project => {
    const createdAt = new Date(project.createdAt);
    return { ...project, createdAt };
  });

  const filteredProjects = projectsWithDateTime.filter(project => project.status !== 'Pending');

  let filteredByCategory = filteredProjects;
  if (this.selectedCategory) {
    // Filter berdasarkan kategori yang dipilih
    filteredByCategory = filteredProjects.filter(project => project.category === this.selectedCategory);
  }

  const sortedProjects = filteredByCategory.sort((a, b) => b.createdAt - a.createdAt);

  const totalItems = sortedProjects.length;

  const itemsPerPage = this.getItemsPerPage();

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Pastikan currentPage tidak melebihi totalPages
  if (this.currentPage > totalPages) {
    this.currentPage = totalPages;
  }

  const start = (this.currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedData = sortedProjects.slice(start, end);

  return paginatedData;
}
  },
  methods: {
    ...mapActions('settings', ['showAlertDevelopment']),
    ...mapActions('property', ['fetchProject']),
    ...mapActions('categories', ['fetchCategories']),
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToTop();
      }
    },
    scrollToTop() {
      this.$refs.porto.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    getItemsPerPage() {
      if (window.innerWidth <= 576) {
        return 3;
      } else {
        return 6;
      }
    },
    updateItemsPerPage() {
      this.itemsPerPage = this.getItemsPerPage();
    },
  },
  mounted() {
    setTimeout(() => {
      this.isFirstLoad = false;
    }, 2000);

    this.fetchCategories().then(() => {
      const defaultCategory = this.getCategories.find(category => category.id === 1);
      if (defaultCategory) {
        this.selectedCategory = defaultCategory.name;
      } else {
        const firstCategory = this.getCategories[0];
        if (firstCategory) {
          this.selectedCategory = firstCategory.name;
        }
      }
    });
  },
 watch: {
    paginatedProjects() {
      // Set shouldShowPagination based on conditions
      this.shouldShowPagination = this.totalPages > 1 && this.paginatedProjects.length !== 0;
    }
  },
  created() {
    window.addEventListener('resize', this.updateItemsPerPage);
    this.itemsPerPage = this.getItemsPerPage();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateItemsPerPage);
  },
};
</script>

<style scoped>
.animate-slide-up {
  opacity: 0;
  transform: translateY(50%);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.article-loaded {
  opacity: 1;
  transform: translateY(0);
}

article:hover .absolute {
  opacity: 1;
}

@media (min-width: 640px) {
  .group:hover .transition-filter {
    filter: blur(3px);
  }

  .overlay {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 14rem;
    background: #00000046;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s;
    border-radius: 20px;
  }

  .article:hover .overlay {
    opacity: 1;
  }
}

.hidden.sm\:flex {
  display: none !important;
}
</style>