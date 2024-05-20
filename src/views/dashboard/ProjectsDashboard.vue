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

      <el-button type="primary" @click="toggleDetail('', 'add')">
        Add project
      </el-button>
    </div>
    <div class="flex items-center justify-center font-sans overflow-hidden">
      <div class="w-full overflow-auto">
        <div class="shadow-md rounded">
          <el-skeleton :loading="loading" animated class="animate-pulse">
            <template #template>
              <div v-for="n in 10" :key="n" class="py-3 px-6 border-b border-gray-200">
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
                    <td class="py-3 px-6 text-left whitespace-nowrap cursor-pointer">
                      <div class="flex items-center" @click="toggleDetail(project, 'read')">
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
                      <div class="w-full bg-white/10 group-hover:bg-black/25 rounded-full dark:bg-gray-700">
                        <div class="bg-cyan-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{ width: project.progress + '%' }"> {{ project.progress }}%</div>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span :class="getStatusClass(project.status)">{{ project.status }}</span>
                    </td>
                    <td class="py-3 px-6 text-center ">
                      <div class="flex item-center justify-center group-hover:text-slate-700 cursor-pointer">
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" @click="toggleDetail(project, 'read')">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" @click="toggleDetail(project, 'edit')">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" @click="deletedProject(project.uuid)">
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
                       <!-- Modal untuk menampilkan detail pertanyaan -->
      <transition name="modal">
      <div v-if="showModal" class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div class="max-h-screen w-full max-w-[90%] sm:max-w-xl rounded-xl sm:rounded-2xl outline outline-cyan-400" style="background-color: #172554;">
          <div class="w-full h-[38rem] overflow-y-auto">
            <div class="m-8 my-16 max-w-[400px] mx-auto">
                <div v-if="selectedActions === 'edit'" class="mb-4 text-center sm:text-left">
                <h1 class="mb-4 text-3xl font-extrabold text-cyan-400">Edit project</h1>
                <span>make sure to fill in completely</span>
              </div>
               <div v-if="selectedActions === 'add'" class="mb-4 text-center sm:text-left">
                <h1 class="mb-4 text-3xl font-extrabold text-cyan-400">Add your project</h1>
                <span>make sure to fill in completely</span>
              </div>
              <div v-if="selectedActions === 'read'" class="mb-4 text-center sm:text-left">
                <h1 class="mb-4 text-3xl font-extrabold text-cyan-400">{{ selectedProject.title }}</h1>
                <span>{{ selectedProject.technologiesUsed }}</span>
                <p class="mt-2 w-[5rem] text-center" :class="getStatusClass(selectedProject.status)">{{ selectedProject.status }}</p>
              </div>
              <!-- form add & edit -->
              <form v-if="selectedActions !== 'read'" @submit.prevent="submitProject">
                <div class="mb-4 mx-2 sm:mx-auto">
                <label for="title" class="block text-sm font-medium text-gray-300">Title:</label>
                <div class="p-2">
                <input type="text" id="title" v-model="form.title" placeholder="title" class="bg-white/10 mt-1 placeholder:text-cyan-400 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required>
                </div>
                </div>
                <div class="mx-2 sm:mx-auto">
                  <!-- Form untuk menjawab pertanyaan -->
                    <div class="mb-4">
                      <label for="description" class="block text-sm font-medium text-gray-300">Description:</label>
                      <textarea v-model="form.description" :disabled="selectedProject.status === 'missed'" id="answer" name="answer" rows="3"  placeholder="description" class="bg-white/10 mt-1 ml-2 placeholder:text-cyan-400 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                    </div>
                  </div>
                <div class="mb-4 mx-2 sm:mx-auto">
                  <label for="technologiesUsed" class="block text-sm font-medium text-gray-300">TechnologiesUsed:</label>
                  <div class="p-2">
                  <input type="text" v-model="form.technologiesUsed" id="technologiesUsed" placeholder="technologiesUsed" class="bg-white/10 mt-1 placeholder:text-cyan-400 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required>
                  </div>
                </div>
                <div class="mb-4 mx-2 sm:mx-auto">
                  <label for="githubUrl" class="block text-sm font-medium text-gray-300">GithubUrl:</label>
                  <select  v-model="form.githubUrl" class="bg-blue-900 text-white mt-1 placeholder:text-cyan-400 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        <option v-for="repo in githubRepositories" :key="repo.id" :label="repo.full_name" :value="repo.html_url" >Pending</option>
                      </select>  
                </div>
                <div class="mb-4 mx-2 sm:mx-auto">
                  <label for="websiteUrl" class="block text-sm font-medium text-gray-300">WebsiteUrl:</label>
                  <div class="p-2">
                  <input type="text" v-model="form.websiteUrl" id="websiteUrl" placeholder="websiteUrl" class="bg-white/10 mt-1 placeholder:text-cyan-400 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                  <div class="mb-4 mx-2 sm:mx-auto">
                  <label for="progress" class="block text-sm font-medium text-gray-300">Progress  <span class="flex justify-end items-end">{{ form.progress }}%</span></label>
                    <input id="progress" type="range" v-model="form.progress" min="0" max="100" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                </div>
                <div class="mb-4 mx-2 sm:mx-auto">
                    <select v-model="form.status" placeholder="Select Repository" class="bg-blue-900 text-white mt-1 placeholder:text-cyan-400 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                      <option>Pending</option>
                      <option>Scheduled</option>
                      <option>Active</option>
                      <option>Completed</option>
                    </select>  
                  </div>
                   <div class="mb-4  sm:mx-auto">
                     <label
                    for="dropzone-file"
                    class="mb-5 mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white/10 p-6 text-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>

                    <h2 class="mt-4 text-xl font-medium text-cyan-400 tracking-wide">
                     Project image
                    </h2>

                    <p class="mt-2 text-gray-200 tracking-wide">
                      Upload or drag & drop your file PNG, JPG or JPEG.
                    </p>
                    <input
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                      ref="fileInput"
                      @change="handleFileUpload"
                      name="inputFile"
                    />
                    <!-- Pratinjau (preview) file -->
                    <div v-if="filePreview" class="mt-4">
                      <strong>File Preview:</strong>
                      <img
                        :src="filePreview"
                        alt="File Preview"
                        class="mt-2 max-w-full"
                      />

                      <!-- Tombol hapus -->
                      <button
                        type="button"
                        class="mt-2 text-red-600 cursor-pointer"
                        @click="deleteFile"
                      >
                        Delete
                      </button>
                    </div>
                  </label>
                 </div>
                   <div class="flex justify-end mb-4">
                    <!-- Tombol untuk submit jawaban -->
                   <button type="submit" :disabled="loading" :class="{ 'hidden': selectedActions !== 'add' && selectedActions !== 'edit'}" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 mx-2">
                     <span v-if="!loading">{{ selectedActions === 'add' ? 'Submit' : 'Update'}}</span>
                    <span v-else class="flex items-center">
                      <span>Loading...</span>
                      <svg aria-hidden="true" class="w-5 h-5 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                    </span>
                   
                  </button>
                  <!-- <button type="button" @click="deleteQuestionWithUuid(selectedProject)" :class="{ 'hidden': selectedActions !== 'read'}" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600">Delete</button> -->
                  </div>
              </form>
              <!-- end form -->
              <!-- content read prokjet -->
              <div v-else class="container mx-auto">
                <div class="mb-4 mx-2 sm:mx-auto">
               <img class="max-h-30 w-full object-cover rounded-lg transition-filter duration-300 ease-in-out" alt="featured image" :src="selectedProject.url" loading="lazy" @load="imageLoaded" />
              </div>
               <div class="mb-1 mx-2 sm:mx-auto">
                <a :href="selectedProject.githubUrl" target="_blank" class="inline-flex items-center font-medium text-gray-200 dark:text-cyan-500 hover:underline">
                Github
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github mx-2" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
                </a>
               </div>
               <div class="mb-4 mx-2 sm:mx-auto">
                  <a :href="selectedProject.websiteUrl" target="_blank" class="inline-flex items-center font-medium text-gray-200 dark:text-cyan-500 hover:underline">
                Website
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe mx-2" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
              </svg>
                </a>
               </div>
                <div class="mb-4 mx-2 sm:mx-auto">          
              <div class="flex justify-between mb-1">
                <span class="text-base font-medium text-gray-200 dark:text-white">Progress</span>
                <span class="text-sm font-medium text-gray-200 dark:text-white">{{ selectedProject.progress + '%' }}</span>
              </div>
              <div class="w-full bg-white/10 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-cyan-400 h-2.5 rounded-full" :style="{ width: selectedProject.progress + '%' }"></div>
              </div>
              </div>
              <div class="mb-4 mx-2 sm:mx-auto">
                  <p class="font-sans text-base text-left bg-white/15 w-auto rounded-md p-1 border">{{ selectedProject.description }}</p>
              </div>
              </div>
              <!-- end content -->
                <!-- Tombol untuk menutup modal -->
                <button @click="closeModal" class="p-3 bg-white/10 border border-cyan-400 text-cyan-400 rounded-full w-full font-semibold">Close</button>
            </div>
          </div>
        </div>
      </div>
      </transition>
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
import { ElMessageBox } from 'element-plus';
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      filePreview: null,
      githubRepositories: [],
      showModal: false,
      selectedFilter: 'all',
      searchKeyword: '',
      currentPage: 1,
      itemsPerPage: 10,
      selectedProject: null,
      selectedActions: '',
      loading: false,
      form: {
        title: '',
        description: '',
        technologiesUsed: '',
        githubUrl: '',
        websiteUrl: '',
        progress: 0,
        status: 'Pending',
        inputFile: null
      }
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
    ...mapActions('property', ['addProject', 'deleteProject', 'updateProject']),

    async submitProject() {
  try {
    this.loading = true; // Set loading to true before any asynchronous operation
    await ElMessageBox.confirm('Are you confident with your project data?', 'Confirmation', {
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      plain: true,
      type: 'warning'
    });

    // Construct FormData
    const formData = new FormData();
    formData.append('title', this.form.title);
    formData.append('description', this.form.description);
    formData.append('technologiesUsed', this.form.technologiesUsed);
    formData.append('githubUrl', this.form.githubUrl);
    formData.append('websiteUrl', this.form.websiteUrl);
    formData.append('progress', this.form.progress);
    formData.append('status', this.form.status);

    // Add file if available
    if (this.form.inputFile) {
      formData.append('inputFile', this.form.inputFile);
    }

    // Send FormData to Vuex action
    let success;
    if (this.selectedActions === 'add') {
      success = await this.addProject(formData);
    } else if (this.selectedActions === 'edit') {
      success = await this.updateProject({
        uuid: this.selectedProject.uuid,
        formData: formData
      });
    } else {
      console.log('Unknown action:', this.selectedActions);
      return; // Exit function if action is not recognized
    }

    // Reset form if successful
    if (success) {
      this.selectedProject = null;
      this.showModal = false;
      this.form = {
        title: '',
        description: '',
        technologiesUsed: '',
        githubUrl: '',
        websiteUrl: '',
        progress: 0,
        status: 'Pending',
        inputFile: null
      }
    }
  } catch (error) {
    console.log('Error submitting project:', error);
  } finally {
    this.loading = false; // Set loading back to false regardless of success or error
  }
},
       async deletedProject(item) {
        ElMessageBox.confirm('Are you confident with your project data?', 'Confirmation', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          plain: true,
          type: 'warning'
        }).then(async () => {
          try {
           await this.deleteProject(item);
          } catch (error) {
            console.log(error);
          }
        });
    },
      handleFileUpload(event) {
      const fileInput = event.target.files[0];
      if (!fileInput) return; // Tambahkan pengecekan null di sini
      if (fileInput) {
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (!allowedTypes.includes(fileInput.type)) {
          this.$message.error(
            "Invalid file type. Please upload a valid image file."
          );
          return;
        }

        const maxSize = 1 * 1024 * 1024; // 5 MB in bytes
        if (fileInput.size > maxSize) {
          this.$message.error(
            "File size exceeds the limit. Please upload a file less than 5 MB."
          );
          return;
        }

        const imageUrl = URL.createObjectURL(fileInput);
        this.filePreview = imageUrl;

        // Set file object to form
        this.form.inputFile = fileInput;
      } else {
        this.filePreview = null;
        this.form.inputFile = null;
      }
    },

    deleteFile() {
      // Hapus pratinjau dan reset nilai file input
      this.filePreview = null;
      this.form.inputFile = null;
    },
    toggleDetail(project, actions) {
      this.showModal = !this.showModal;
      if (this.selectedProject === project) {
        this.selectedProject = null; // Close detail if already open
        this.showModal = false
      } else {
        this.showModal = true
        this.selectedProject = project;
        this.selectedActions = actions
        this.loadGithubRepositories();
        if (actions === 'edit') {
          this.setEditProject(project)
        }
      }
    },
    closeModal() {
        this.showModal = false
        this.selectedProject = null;
        this.selectedActions = '';
        this.filePreview = ''
        this.form = {
        title: '',
        description: '',
        technologiesUsed: '',
        githubUrl: '',
        websiteUrl: '',
        progress: 0,
        status: 'Pending',
        inputFile: null
      }
    },
    setEditProject(project) {
      this.form = {
        title: project.title,
        description: project.description,
        technologiesUsed: project.technologiesUsed,
        githubUrl: project.githubUrl,
        websiteUrl: project.websiteUrl,
        progress: project.progress,
        status: project.status,
      };
      this.filePreview = project.url
    },
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
     async loadGithubRepositories() {
       try {

        const token = import.meta.env.VITE_TOKEN_GITHUB

        const response = await fetch("https://api.github.com/user/repos", {
          headers: {
            Authorization: `Bearer ${token}`, // Ganti dengan token akses GitHub Anda
          },
        });
        if (response.ok) {
          const data = await response.json();
          this.githubRepositories = data; // Simpan daftar repository
        } else {
          console.error("Failed to fetch GitHub repositories:", response.status);
        }
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    },
  }
};
</script>
<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>