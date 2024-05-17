<template>
  <div id="projects">
    <h1 class="font-bold py-4 uppercase">My projects</h1>
    <div class="flex items-center gap-x-2 mb-6">
      <el-select
        v-model="selectedFilter"
        placeholder="Select Filter"
        class="w-56 text-cyan-300"
      >
        <el-option label="All" value="all" />
        <el-option label="Pending" value="Pending" />
        <el-option label="Scheduled" value="Scheduled" />
        <el-option label="Active" value="Active" />
        <el-option label="Completed" value="Completed" />
      </el-select>

      <el-input
        v-model="searchKeyword"
        placeholder="Search"
        class="w-56"
        suffix-icon="el-icon-search"
      ></el-input>

      <el-button type="primary">
        Add project
      </el-button>
    </div>
    <div class="flex items-center justify-center font-sans overflow-hidden">
      <div class="w-full overflow-auto">
        <div class="shadow-md rounded">
          <el-skeleton :loading="loading" animated>
            <template #template>
              <div v-for="n in 5" :key="n" class="py-3 px-6 border-b border-gray-200">
                <el-skeleton-item variant="text" />
              </div>
            </template>
            <template #default>
              <table class="min-w-max w-full table-auto" v-if="paginatedProjects.length">
                <thead>
                  <tr class="bg-black/25 text-white uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-left">Project</th>
                    <th class="py-3 px-6 text-left">Title</th>
                    <th class="py-3 px-6 text-center">Progres</th>
                    <th class="py-3 px-6 text-center">Status</th>
                    <th class="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody class="text-gray-200 text-sm font-light">
                  <tr
                    v-for="(project, index) in paginatedProjects"
                    :key="index"
                    class="border-b border-gray-200 hover:bg-gray-100 group"
                  >
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2">
                          <img :src="getIconProject(project.technologiesUsed)" class="w-6 h-6" />
                        </div>
                        <span class="font-medium group-hover:text-slate-700">{{ project.technologiesUsed }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span class="group-hover:text-slate-700">{{ project.title }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-cyan-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{ width: project.progress + '%' }"> {{ project.progress }}%</div>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span :class="getStatusClass(project.status)">{{ project.status }}</span>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center group-hover:text-slate-700">
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1v3M4 7h16" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <el-empty v-else description="No projects found">
                       <!-- Animasi atau konten tambahan untuk pesan kosong -->
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-8 h-8 text-gray-400 mx-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  <p class="text-gray-500 mt-2">
                    No project found. Try changing your filters.
                  </p>
                </div>
              </el-empty>
            </template>
          </el-skeleton>
        </div>
      </div>
    </div>
    <div v-if="pageCount > 1" class="flex items-center justify-between mt-6">
      <button   
        @click="prevPage"
        :disabled="currentPage === 1"
        class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Previous</span>
      </button>

      <div class="items-center hidden md:flex gap-x-3">
        <span
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="changePage(pageNumber)"
          class="px-2 py-1 text-sm text-gray-500 rounded-md"
          :class="{
            'bg-blue-100/60': currentPage === pageNumber,
            'hover:bg-gray-100': currentPage !== pageNumber,
          }"
        >{{ pageNumber }}</span>
      </div>

      <button
        @click="nextPage"
        :disabled="currentPage === pageCount || pageCount === 0"
        class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedFilter: 'all',
      searchKeyword: '',
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    ...mapGetters('property', ['getProject', 'isLoading']),
     loading() {
      return this.isLoading;
    },
    filteredProjects() {
      return this.getProject.filter((project) => {
        const matchesFilter =
          this.selectedFilter === 'all' || project.status === this.selectedFilter;
        const matchesSearch = project.title
          .toLowerCase()
          .includes(this.searchKeyword.toLowerCase());
        return matchesFilter && matchesSearch;
      });
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProjects.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.filteredProjects.length / this.itemsPerPage);
    },
  },
  methods: {
    getStatusClass(status) {
      return status === 'Active'
        ? 'bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'
        : 'bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs';
    },
    getIconProject(technologiesUsed) {
      const iconMap = {
        'javascript': 'https://img.icons8.com/color/48/000000/javascript.png',
        'vue.js': 'https://img.icons8.com/color/48/000000/vue-js.png',
        'react': 'https://img.icons8.com/color/48/000000/react-native.png',
        // Tambahkan mapping untuk teknologi lain jika diperlukan
      };
      return iconMap[technologiesUsed.toLowerCase()] || 'https://example.com/default-icon.png';
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
  },
  mounted() {
  
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
