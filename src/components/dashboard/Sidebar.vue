<template>
    <div id="menu" class="bg-white/10 col-span-3 rounded-lg p-4 outline outline-cyan-500">
        <h1 class="font-bold text-lg lg:text-3xl bg-gradient-to-br from-cyan-400 via-cyan-400 to-transparent bg-clip-text text-transparent">Dashboard</h1>
        <p class="text-white text-sm mb-2 ">Portofolio daffafznnn</p>
        <a href="#" class="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div>
                <img class="rounded-full w-10 h-10 relative object-cover outline outline-cyan-400" src="../../assets/daffa-formal-removebg-preview.png" alt="">
            </div>
            <div>
                <p class="font-medium group-hover:text-cyan-400 leading-4 hidden sm:block">{{ profile?.username }}</p>
                <span class="text-xs text-slate-400 hidden md:block">{{ profile?.email }}</span>
            </div>
        </a>
        <hr class="my-2 border-slate-700">
        <div id="menu" class="flex flex-col space-y-2 my-5 mx-auto">
            <a href="#" @click="navigateTo('/dashboard/home')" 
            class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
            :class="{'bg-white/10': isActive('/dashboard/home')}"
            >
                <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-cyan-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </div>
                    <div>
                        <p 
                        class="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-cyan-400"
                       :class="{'text-cyan-400': isActive('/dashboard/home')}"
                        >Dashboard</p>
                        <p class="text-slate-400 text-sm hidden md:block">Data overview</p>
                    </div>
                </div>
            </a>
            <a href="#" @click="navigateTo('/dashboard/question')" 
            class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
             :class="{'bg-white/10': isActive('/dashboard/question')}"
            >
                <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-question-square group-hover:text-cyan-400" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                        </svg>
                    </div>
                    <div>
                        <p 
                        class="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-cyan-400"
                         :class="{'text-cyan-400': isActive('/dashboard/question')}"
                         >Questions</p>
                        <p class="text-slate-400 text-sm hidden md:block">Manage Question</p>
                    </div>
                    <div class="absolute -top-3 -right-3 md:top-0 md:right-0 px-2 py-1.5 rounded-full bg-cyan-500 text-xs font-mono font-bold">{{ questionCount }}</div>
                </div>
            </a>
              <a href="#" @click="navigateTo('/dashboard/project')" 
            class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
             :class="{'bg-white/10': isActive('/dashboard/project')}"
            >
                <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                    <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-rocket-takeoff" viewBox="0 0 16 16">
                        <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532"/>
                        <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z"/>
                        <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"/>
                        </svg>
                    </div>
                    <div>
                        <p 
                        class="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-cyan-400"
                         :class="{'text-cyan-400': isActive('/dashboard/question')}"
                         >Projects</p>
                        <p class="text-slate-400 text-sm hidden md:block">Manage Project</p>
                    </div>
                </div>
            </a>
            <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-cyan-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                    </div>
                    <div>
                        <p class="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-cyan-400">Users</p>
                        <p class="text-slate-400 text-sm hidden md:block">Manage users</p>
                    </div>
                </div>
            </a>
            <div v-if="{ open: false }">
                <button @click="open = !open" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group w-full text-left">
                    <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-cyan-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-cyan-400">Settings</p>
                            <p class="text-slate-400 text-sm hidden md:block">Edit settings</p>
                        </div>
                    </div>
                </button>
                <div v-show="open" class="mt-2 pl-0 sm:pl-8">
                    <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-2 px-2 block">Profile Settings</a>
                    <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-2 px-2 block">Account Settings</a>
                </div>
            </div>
            <button @click="logout" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group text-left">
                <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                    <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-box-arrow-left group-hover:text-cyan-400" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-cyan-400">Logout</p>
                        <p class="text-slate-400 text-sm hidden md:block">Sign out of your account</p>
                    </div>
                </div>
            </button>
        </div>
        <p class="text-sm text-center text-gray-200">v1.0.1 | &copy; 2024 daffafznnn</p>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            open: false
        }
    },
    computed: {
        ...mapGetters('auth', ['getMe']),
        profile() {
            return this.getMe;
        },
        questionCount() {
            return this.$store.getters['question/getQuestion'].length
        }
    },
    methods: {
        ...mapActions('auth', ['fetchMe', 'logout']),
        navigateTo(route) {
        this.$router.push(route);
        },
        isActive(route) {
        return this.$route.path === route;
        },
    },
    mounted() {
        this.fetchMe();
        this.$store.dispatch('question/fetchQuestion');
        this.$store.dispatch('property/fetchProject');
    },
};
</script>