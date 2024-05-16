<template>
  <main class="container mx-auto flex min-h-screen w-full items-center justify-center text-white">
    <section class="flex flex-col space-y-10">
      <div class="text-center text-4xl font-bold text-cyan-500">Masuk</div>
      <span class="text-sm text-center sm:text-wrap">Silahkan masuk terlebih dahulu untuk mengakses dashboard portofolio daffafznnn</span>
      <div class="sm:w-full w-96 mx-auto focus-within:border-none transform border-b-2 border-cyan-400 bg-transparent text-lg duration-300 focus-within:border-cyan-500">
        <input
          v-model="form.identifier"
          type="text"
          placeholder="Email atau Nama pengguna"
          class="w-full border-none bg-transparent outline-none placeholder:italic placeholder:text-cyan-400 focus:outline-none"
        />
      </div>
      <div class="sm:w-full w-96 mx-auto focus-within:border-none transform border-b-2 border-cyan-400 bg-transparent text-lg duration-300 focus-within:border-cyan-500">
        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          class="w-full border-none bg-transparent outline-none placeholder:italic placeholder:text-cyan-400 focus:outline-none"
        />
      </div>
      <button type="submit" @click="loginUser" :disabled="loading" class="sm:w-full w-96 mx-auto transform rounded-sm bg-transparent py-2 font-bold duration-300 hover:outline hover:outline-cyan-400 text-cyan-400 border border-cyan-400 border-opacity-30">
       <div v-if="loading" class="flex items-center justify-center text-cyan-400">
        <div>
          <h1 class="text-lg font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" stroke-width="0"
              viewBox="0 0 24 24" class="animate-spin" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
              </path>
            </svg> ading . . .</h1>
        </div>
      </div>
        <span v-else>MASUK</span>
      </button>
      <a href="#" class="transform text-center font-semibold text-cyan-500 duration-300 hover:text-gray-200">Lupa password?</a>
      <button @click="goBack" class="sm:mx-0 mx-auto flex items-center transform font-semibold text-cyan-500 duration-300 hover:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
        <span class="p-2">Kembali</span>
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
          window.location.href = '/dashboard/home'
        }

      } finally {
        this.loading = false;
      }
    },
    validate() {
      if (!this.form.identifier || !this.form.password) {
        this.$message.error("Email atau password tidak boleh kosong!");
        return false;
      }
      return true;
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  }
};
</script>