<template>
    <div id="last-users">
      <h1 class="font-bold py-4 uppercase">Question</h1>
      <div class="flex items-center gap-x-2 mb-6">
        <el-select
          v-model="selectedFilter"
          placeholder="Select Filter"
          class="w-56 text-cyan-300"
        >
          <el-option label="All" value="all" />
          <el-option label="waiting" value="waiting" />
          <el-option label="denied" value="denied" />
          <el-option label="read" value="read" />
          <!-- Tambahkan opsi filter lainnya sesuai kebutuhan -->
        </el-select>

        <el-input v-model="searchKeyword" placeholder="Search" class="w-56">
          <el-dropdown @command="handleSearchResultClick">
            <el-button slot="suffix" icon="el-icon-search"></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="result in searchResults"
                :key="result.id"
                :command="result"
              >
                {{ result.title }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-loading
            :text="searching ? 'Searching...' : ''"
            :visible="searching"
            class="search-loading"
          ></el-loading>
        </el-input>
      </div>
      <div class="overflow-x-scroll">
         <el-skeleton v-if="this.$store.getters['question/isLoading']" :rows="8" animated />
         <template v-else>
            <el-empty
                v-if="filteredQuestion?.length === 0"
                description="Question Not Found"
              >
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
                    No question found. Try changing your filters.
                  </p>
                </div>
              </el-empty>
          <table v-else class="w-full whitespace-nowrap">
          <thead class="bg-black/25">
            <th class="text-left py-3 px-2 ">Date</th>
            <th class="text-left py-3 px-2">Email</th>
            <th class="text-left py-3 px-2">Status</th>
            <th class="text-left py-3 px-2 rounded-r-lg">Actions</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in paginatedQuestion" :key="index" class="border-b border-gray-200 hover:bg-slate-400">
              <!-- Row content -->
             <td class="py-3 px-2 font-bold cursor-pointer" @click="toggleDetail(item)">
                <div class="space-x-3 text-xs">
                  {{ formatDateWithAccent(item?.date) }}
                </div>
                <p class="text-xs font-normal">{{ formatTime(item?.time) }}</p>
              </td>
              <td class="py-3 px-2">{{ item?.email }}</td>
              <td class="py-3 px-2">{{ item?.status }}</td>
              <td class="py-3 px-2">
                <div class="inline-flex items-center space-x-3">
                  <button title="Reply question" class="hover:text-white" @click="toggleDetail(item)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
                      <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.7 8.7 0 0 0-1.921-.306 7 7 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254l-.042-.028a.147.147 0 0 1 0-.252l.042-.028zM7.8 10.386q.103 0 .223.006c.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96z"/>
                    </svg>
                  </button>
                  <button title="Mark as read" class="hover:text-white" @click="changeStatus(item, 'read')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-book mt-0.5" viewBox="0 0 16 16">
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                    </svg>
                  </button>
                  <button title="Denied" class="hover:text-white" @click="changeStatus(item, 'denied')" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
         </template>
         <!-- Modal untuk menampilkan detail pertanyaan -->
      <transition name="modal">
      <div v-if="selectedQuestion" class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div class="max-h-screen w-full max-w-[90%] sm:max-w-xl sm:rounded-2xl outline outline-cyan-400 overflow-auto" style="background-color: #172554;">
          <div class="w-full">
            <div class="m-8 my-16 max-w-[400px] mx-auto">
              <div class="mb-4 text-center sm:text-left">
                <h1 class="mb-4 text-3xl font-extrabold text-cyan-400">{{ selectedQuestion.name }}</h1>
                <span>{{ selectedQuestion.email }}</span>
              </div>
              <div class="mb-4 mx-2 sm:mx-auto">
                <label for="answer" class="block text-sm font-medium text-gray-300">Question:</label>
                <div class="p-2">
                  <div class="flex justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                    </svg>
                  </div>
                  <p class="font-sans text-base text-left bg-white/15 w-auto rounded-md p-1 border">{{ selectedQuestion.question }}</p>
                  <div class="flex justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote rotate-180" viewBox="0 0 16 16">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="space-y-4 mx-2 sm:mx-auto">
                <!-- Form untuk menjawab pertanyaan -->
                  <div class="mb-4">
                    <label for="answer" class="block text-sm font-medium text-gray-300">Your Answer:</label>
                    <textarea v-model="answer" :disabled="selectedQuestion.status === 'missed'" id="answer" name="answer" rows="4" placeholder="Input your answer..." class="bg-white/10 mt-1 placeholder:text-cyan-400 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                  </div>
                  <div class="flex justify-end">
                    <!-- Tombol untuk submit jawaban -->
                    <button type="button" @click="submitAnswer(selectedQuestion)" :class="{ 'hidden': selectedQuestion.status === 'missed'}" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 mx-2">Submit</button>
                    <button type="button" @click="deleteQuestionWithUuid(selectedQuestion)"  class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600">Delete</button>
                  </div>
                <!-- Tombol untuk menutup modal -->
                <button @click="selectedQuestion = null" class="p-3 bg-white/10 border border-cyan-400 text-cyan-400 rounded-full w-full font-semibold">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>
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
            >{{ pageNumber }}</span
          >
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
import { mapActions, mapGetters } from 'vuex';
import { ElMessageBox } from 'element-plus';

export default {
  data() {
    return {
      selectedFilter: 'all',
      searchKeyword: '',
      currentPage: 1,
      pageSize: 8,
      searchResults: [],
      selectedQuestion: null,
      answer: ''
    };
  },
  computed: {
    ...mapGetters('question', ['getQuestion']),
    question() {
      return this.getQuestion;
    },
      filteredQuestion() {
      let filtered = this.question;
      if (this.selectedFilter !== 'all') {
        filtered = filtered.filter(item => item.status === this.selectedFilter);
      }
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase();
        filtered = filtered.filter(item => item.email.toLowerCase().includes(keyword));
      }
      // Sort filtered data by date in descending order
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      return filtered;
    },
    pageCount() {
      return Math.ceil(this.filteredQuestion.length / this.pageSize);
    },
    paginatedQuestion() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredQuestion.slice(startIndex, endIndex);
    }
  },
  methods: {
    ...mapActions('question', ['answerQuestion', 'changeStatusQuestion', 'deleteQuestion']),
    async submitAnswer(item) {
      ElMessageBox.confirm('Are you sure you want to answer this question?', 'Confirmation', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        plain: true,
        type: 'warning'
      }).then(async () => {
        try {
          const success = await this.answerQuestion({
            uuid: item.uuid,
            answer: this.answer
          });
          if (success) {
            this.selectedQuestion = null
          }
        } catch (error) {
          console.log(error)
        }
      });
    },
    async changeStatus(item, status) {
    ElMessageBox.confirm(`Are you sure you want to change the enquiry status of ${item.email} to ${status}?`, 'Confirmation', {
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      plain: true,
      type: 'warning'
    }).then(async () => {
      try {
        console.log(`Changing status of ${item.uuid} to ${status}`);
        const success = await this.changeStatusQuestion({
          uuid: item.uuid,
          status: status
        });
        if (success) {
          console.log(`Status of ${item.uuid} changed to ${status}`);
          this.selectedQuestion = null;
          // If needed, you can trigger a re-fetch of the questions or update the local state
        }
      } catch (error) {
        console.log('Error changing status:', error);
      }
    }).catch(() => {
      console.log('Status change cancelled');
    });
    },
    async deleteQuestionWithUuid(question) {
      try {
        const confirmed = await ElMessageBox.confirm(
          `Are you sure you want to remove the question status from ${question.email}?`, 
          'Confirmation', 
          {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            plain: true,
            type: 'warning'
          }
        );

        if (confirmed) {
          const success = await this.deleteQuestion(question.uuid); // Assuming `deleteQuestionById` is the correct method
          if (success) {
            console.log(`Deleted question of ${question.uuid}`);
            this.selectedQuestion = null;
            // If needed, you can trigger a re-fetch of the questions or update the local state
          }
        }
      } catch (error) {
        if (error !== 'cancel') {
          console.log('Error deleting question:', error);
        } else {
          console.log('Delete question cancelled');
        }
      }
},
   toggleDetail(question) {
      if (this.selectedQuestion === question) {
        this.selectedQuestion = null; // Close detail if already open
      } else {
        this.selectedQuestion = question;
        this.answer = this.selectedQuestion.answer
      }
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
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
       // Method to format date with accent hari
    formatDateWithAccent(dateString) {
      const date = new Date(dateString);
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayIndex = date.getDay();
      const formattedDate = `${
        days[dayIndex]
      }, ${date.getDate()} ${this.getMonthName(
        date.getMonth()
      )} ${date.getFullYear()}`;
      return formattedDate;
    },
    // Method to get month name from index
    getMonthName(monthIndex) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[monthIndex];
    },
    formatTime(timeString) {
      const time = new Date(`1970-01-01T${timeString}`);
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM/PM
      const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero to minutes if needed
      return `${formattedHours}:${formattedMinutes} ${ampm}`; // Return formatted time
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