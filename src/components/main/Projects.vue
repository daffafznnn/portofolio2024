<template>
  <section id="porto" ref="porto" class="py-20">
    <h1 class="animate-down-title mb-12 text-center font-sans text-5xl font-bold text-cyan-400">{{ $t('porto.head.title') }}</h1>
    <span class="animate-down-title flex justify-center items-center font-medium text-gray-200 pb-8">{{ $t('porto.head.subtitle') }}</span>
    <div class="flex justify-center mb-2">
      <div class="flex items-center gap-2 rounded-xl bg-white/10 p-2 text-white"
      :class="{'scale-category': !isFirstLoad }"
      >
        <div v-for="item in getCategories" :key="item.id">
          <input
            type="radio"
            :name="'category-' + item.id"
            :id="'category-' + item.id"
            :value="item.name"
            class="peer hidden"
            v-model="selectedCategory"
            @click="filterProjects"
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
    <div v-if="$store.getters['property/isLoading']" class="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
      <article v-for="index in 6" :key="index" class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-sm pb-2 transition-transform duration-500 hover:translate-y-2">
        <div class="animate-pulse flex flex-col h-full">
          <div class="w-80 sm:w-72 h-48 bg-gray-300 rounded-lg"></div>
          <div class="p-4">
            <div class="h-4 bg-gray-300 rounded mb-2"></div>
            <div class="h-6 bg-gray-300 rounded mb-2"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </article>
    </div>
    <el-empty v-else-if="paginatedProjects.length === 0" description="No projects found" class="h-90 col-span-1 sm:col-span-3 mx-auto grid max-w-screen-xl" />
    <div v-else class="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
     <article v-for="item in paginatedProjects" :key="item.id" :id="item.id" :class="{ 'animate-slide-up': !isFirstLoad, 'article': !isFirstLoad }" class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-sm pb-2 transition-transform duration-500 hover:translate-y-2 relative group">
      <div class="relative">
        <img class="h-56 w-full object-cover rounded-lg transition-filter duration-300 ease-in-out" alt="featured image" :src="item.url" loading="lazy" @load="imageLoaded" />
        <div class="progress lg:group-hover:filter lg:group-hover:blur-sm">
          <div :data-done="item.progress" class="progress-done"></div>
        </div>
      </div>
      <!-- Container untuk overlay saat hover -->
      <!-- for desktop -->
      <div class="overlay hidden md:flex flex-row gap-6">
        <!-- Konten tautan -->
        <div class="text-white text-center">
          <a :href="item.websiteUrl" target="_blank" rel="noopener noreferrer" :class="{'hidden sm:flex' : !item.websiteUrl}" class="text-gray-200 hover:text-cyan-600 hover:opacity-85 transition-all hover:scale-110 block">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
            </svg>
          </a>
        </div>
        <div class="">
          <a :href="item.githubUrl" target="_blank" rel="noopener noreferrer" :class="{'hidden sm:flex' : !item.githubUrl}" class="text-gray-200 hover:text-cyan-600 hover:opacity-85 transition-all hover:scale-110 block">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="w-full p-4">
        <p class="text-md font-medium text-cyan-500">{{ item.technologiesUsed }}</p>
        <p class="mb-2 text-xl font-medium text-cyan-400">{{ item.title }}</p>
        <p class="text-md font-light text-gray-200">{{ item.description }}</p>
        <div class="md:hidden mt-2 flex flex-col">
          <a :href="item.websiteUrl" :class="{'hidden sm:flex' : !item.websiteUrl}" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-blue-600 px-3 py-1 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe mr-1" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
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
      prevSelectedCategory: null,
    };
  },
  computed: {
    ...mapGetters('property', ['getProject']),
    ...mapGetters('categories', ['getCategories']),
    totalPages() {
      return Math.ceil(this.getProject.length / this.itemsPerPage);
    },
    paginatedProjects() {
      const projects = this.filterProjects();
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return projects.slice(start, end);
    },
  },
  methods: {
    ...mapActions('settings', ['showAlertDevelopment']),
    ...mapActions('property', ['fetchProject']),
    ...mapActions('categories', ['fetchCategories']),

    filterProjects() {
      let projects = [...this.getProject];
      let filteredProjects = projects;

      if (this.selectedCategory) {
        filteredProjects = projects.filter(project => project.category === this.selectedCategory);
      }

      filteredProjects = filteredProjects.filter(project => project.status !== 'Pending');

      const categoryItemCount = filteredProjects.length;
      const hasEnoughItems = categoryItemCount > this.itemsPerPage;

      this.shouldShowPagination = hasEnoughItems;

      if (!this.isFirstLoad) {
        this.$nextTick(() => {
          this.progressBar();
        });
      }

      return filteredProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },

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
      return window.innerWidth <= 576 ? 3 : 6;
    },
    updateItemsPerPage() {
      this.itemsPerPage = this.getItemsPerPage();
    },

    progressBar() {
      this.$nextTick(() => {
        document.querySelectorAll('.progress-done').forEach(progress => {
          const target = +progress.getAttribute('data-done');
          let count = 0;

          const updateProgress = () => {
            count++;
            progress.style.width = `${count}%`;

            if (count < target) {
              requestAnimationFrame(updateProgress);
            } else {
              progress.style.width = `${target}%`;
              progress.innerText = `${target}%`;
            }
          };

          updateProgress();
        });
      });
    },

    initializeProjects() {
      this.fetchCategories()
        .then(() => {
          const defaultCategory = this.getCategories.find(category => category.id === 1);
          this.selectedCategory = defaultCategory ? defaultCategory.name : this.getCategories[0]?.name;

          this.fetchProject()
            .then(() => {
              if (this.getProject.length === 0) {
                console.warn('No projects found.');
              }
            })
            .catch(error => {
              console.error('Failed to fetch projects:', error);
            });
        })
        .catch(error => {
          console.error('Failed to fetch categories:', error);
        });
    },
    setupObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver(this.handleIntersect, options);
      const target = this.$refs.porto;
      observer.observe(target);
    },
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isFirstLoad = false;
        }
      });
    },
    imageLoaded(event) {
      event.target.style.opacity = 1;
    },
     setupIntersectionObserver(targetClass) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, options);

      const targets = document.querySelectorAll(targetClass);
      targets.forEach((target) => {
        observer.observe(target);
      });
    },
  },
  mounted() {
    this.initializeProjects();
    this.updateItemsPerPage();
    this.setupObserver();
    this.setupIntersectionObserver('.animate-down-title');
  },

  created() {
    window.addEventListener('resize', this.updateItemsPerPage);
    this.itemsPerPage = this.getItemsPerPage();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.updateItemsPerPage);
  }
};
</script>
<style scoped>
.animate-slide-up {
  opacity: 0;
  transition: opacity 2s;
  animation: slide-up 1s forwards;
}

@keyframes slide-up {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-down-title {
  opacity: 0;
  transform: translateY(-50%);
  transition: opacity 1s, transform 1s;
}

@keyframes scale-up {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
.scale-category {
    animation: scale-up 1s forwards;
}

article:hover .absolute {
  opacity: 1;
}

@media (min-width: 768px) {
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
    border-radius: 10px;
  }

  .article:hover .overlay {
    opacity: 1;
  }
}

.hidden.sm\:flex {
  display: none !important;
}

/* progress */
.progress {
  background-color: #ccd;
  width: 100%;
  height: 15px;
  border-radius: 0px 0px 10px 10px;
  color: white;
  position: absolute;
  bottom: 0; /* Position at the bottom */
  left: 0;   /* Ensure it spans the full width */
}

.progress-done {
  background: linear-gradient(90deg, rgba(9, 9, 121, 1), rgba(0, 212, 255, 1) 100%);
  height: 100%;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center left;
  color: white; /* Text color set to white */
  font-size: 12px; /* Adjust font size as needed */
}
</style>
