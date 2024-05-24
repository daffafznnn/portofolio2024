<template>
  <main class="container mx-auto flex min-h-screen w-full items-center justify-center text-white">
    <section class="flex flex-col space-y-10">
      <div class="text-center text-4xl font-bold text-cyan-500">Sign In</div>
      <span class="text-sm text-center sm:text-wrap">Please sign in to access daffafznnn's portfolio dashboard</span>
      <div class="sm:w-full w-96 mx-auto focus-within:border-none transform border-b-2 border-cyan-400 bg-transparent text-lg duration-300 focus-within:border-cyan-500">
        <input
          v-model="form.identifier"
          type="email"
          placeholder="Email or Username"
          class="w-full border-none bg-transparent outline-none placeholder:italic placeholder:text-cyan-400 focus:outline-none"
        />
      </div>
      <div class="sm:w-full w-96 mx-auto focus-within:border-none transform border-b-2 border-cyan-400 bg-transparent text-lg duration-300 focus-within:border-cyan-500">
        <input
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          class="w-full border-none bg-transparent outline-none placeholder:italic placeholder:text-cyan-400 focus:outline-none"
        />
         <button type="button" @click="toggleShowPassword" class="absolute inset-y-0 right-0 flex items-center px-2 text-cyan-300">
            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
           </svg>
           <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
          </svg>
          </button>
      </div>
      <div class="flex items-center mb-4 mx-2">
        <input id="default-checkbox" type="checkbox" v-model="rememberMe" class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="default-checkbox" class="ms-2 text-sm font-medium text-cyan-400 dark:text-gray-300">Remember me</label>
      </div>
      <button type="submit" @click="loginUser" :disabled="loading" class="sm:w-full w-96 mx-auto transform rounded-sm bg-transparent py-2 font-bold duration-300 hover:outline hover:outline-cyan-400 text-cyan-400 border border-cyan-400 border-opacity-30">
       <div v-if="loading" class="flex items-center justify-center text-cyan-400">
        <div>
          <h1 class="text-lg font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" stroke-width="0"
              viewBox="0 0 24 24" class="animate-spin" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
              </path>
            </svg> loading . . .</h1>
        </div>
      </div>
        <span v-else>SIGN IN</span>
      </button>
      <a href="/forgot-password" class="transform text-center font-semibold text-cyan-500 duration-300 hover:text-gray-200">Forgot password?</a>
      <button @click="goBack" class="sm:mx-0 mx-auto flex items-center transform font-semibold text-cyan-500 duration-300 hover:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
        <span class="p-2">Back</span>
      </button>
    </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        identifier: "",
        password: "",
      },
      loading: false,
      rememberMe: false,
      showPassword: false,
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async loginUser() {
      if (!this.validate()) return;

      this.loading = true;

      try {
        const success = await this.login({
          identifier: this.form.identifier,
          password: this.form.password,
        });

        if (success){
          if (this.rememberMe) { // simpan data jika Remember Me dicentang
            localStorage.setItem("username", this.form.identifier);
          }
          window.location.href = '/dashboard/home'
        }

      } finally {
        this.loading = false;
      }
    },
    validate() {
      if (!this.form.identifier || !this.form.password) {
        this.$message.error("Email or password cannot be empty!");
        return false;
      }
      return true;
    },
    goBack() {
      window.location.href = '/';
    },
   toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
  created() {
    // cek apakah ada data username di localStorage dan isi bidang masukan
    const rememberedUsername = localStorage.getItem("username");
    if (rememberedUsername) {
      this.form.identifier = rememberedUsername;
      this.rememberMe = true;
    }
  },
};
</script>

