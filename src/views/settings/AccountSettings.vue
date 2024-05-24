<template>
  <div class="container mx-auto p-4">
    <h1 class="font-semibold text-slate-300 uppercase text-center sm:text-left">Account Settings</h1>
    <div class="my-5 border-b"></div>
    <div class="mx-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- email -->
        <div class="flex flex-col justify-center sm:justify-start">
          <span class="font-medium">Email</span>
        </div>
        <div>
          <div class="w-full mb-2">
            <input type="email" id="email" :value="account.email" class="w-full bg-white/10 border border-cyan-400 rounded-md text-cyan-300 p-2" disabled>
            <p class="flex items-center justify-end text-xs text-gray-300 mt-1">
              <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-check-circle-fill text-green-300" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              </span>
              <span class="ml-1">email already verified</span>
            </p>
          </div>
        </div>
        <!-- change password -->
        <div class="col-span-1 sm:col-span-2">
          <h1 class="font-semibold">Change password</h1>
        </div>
        <!-- old password -->
        <div class="flex flex-col justify-center sm:justify-start">
          <span class="font-medium">Old password</span>
        </div>
        <div class="w-full relative">
           <div class="w-full relative flex items-center">
              <input :type="showOldPassword ? 'text' : 'password'" v-model="formChangePass.oldPassword" @input="inputOldPas" id="OldPassword" class="w-full bg-white/10 border border-cyan-400 rounded-md text-cyan-300 p-2" :class="!passOldmatch ? 'border-cyan-400' : 'border-red-400'">
          <button type="button" @click="toggleShowOldPassword" class="absolute inset-y-0 right-0 flex items-center px-2 text-cyan-300">
            <svg v-if="showOldPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
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
        <p v-if="passOldmatch" class="text-xs text-red-400 mt-1">{{ messageTextOld }}</p>
        </div>
        <!-- new password -->
        <div class="flex flex-col justify-center sm:justify-start">
          <span class="font-medium">New password</span>
        </div>
        <div class="w-full relative">
          <input :type="showNewPassword ? 'text' : 'password'" v-model="formChangePass.newPassword" id="NewPassword" class="w-full bg-white/10 border border-cyan-400 rounded-md text-cyan-300 p-2">
          <button type="button" @click="toggleShowNewPassword" class="absolute inset-y-0 right-0 flex items-center px-2 text-cyan-300">
            <svg v-if="showNewPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
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
        <!-- confirm new password -->
        <div class="flex flex-col justify-center sm:justify-start">
          <span class="font-medium">Confirmation New Password</span>
        </div>
      <div class="w-full relative">
      <div class="w-full relative flex items-center">
        <input :type="showConfNewPassword ? 'text' : 'password'" v-model="formChangePass.confNewPassword" id="ConfNewPassword" class="w-full bg-white/10 border rounded-md text-cyan-300 p-2" :class="matchConfPassword ? 'border-cyan-400' : 'border-red-400'">
        <button type="button" @click="toggleShowConfNewPassword" class="absolute inset-y-0 right-0 flex items-center px-2 text-cyan-300">
          <svg v-if="showConfNewPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
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
      <p v-if="!matchConfPassword" class="text-xs text-red-400 mt-1">{{ messageTextMatch }}</p>
      </div>
        <!-- forgot password -->
        <div class="col-span-1 sm:col-span-2 flex justify-end">
          <a href="/forgot-password" class="text-cyan-500 hover:text-cyan-200 underline">Forgot Password?</a>
        </div>
        <!-- buttons -->
        <div class="col-span-1 sm:col-span-2 flex justify-end space-x-5">
          <button @click="resetForm" class="bg-red-500 px-3 py-2 transition-all hover:scale-110 rounded-md text-white">Cancel</button>
          <button @click="submitChangePassword" :disabled="!matchConfPassword" class="bg-blue-500 px-3 py-2 transition-all hover:scale-110 rounded-md text-white">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex"

export default {
  data() {
    return {
      formChangePass: {
        oldPassword: '',
        newPassword: '',
        confNewPassword: '',
      },
      showOldPassword: false,
      showNewPassword: false,
      showConfNewPassword: false,
      messageTextMatch: '',
      messageTextOld: '',
      passOldmatch: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['getMe']),
    account() {
      return this.getMe;
    },
    inputOldPas() {
      if (this.formChangePass.oldPassword === '') {
        this.passOldmatch = true;
        this.messageTextOld = '';
      } else {
        this.passOldmatch = false;
        this.messageTextOld = 'Old password is required';
      }
    },
        matchConfPassword() {
      if (this.formChangePass.newPassword !== this.formChangePass.confNewPassword) {
        this.messageTextMatch = 'password confirmation with new password does not match';
        return false;
      } else {
        this.messageTextMatch = '';
        return true;
      }
    },
  },
  methods: {
    ...mapActions('settings', ['changePassword']),
    async submitChangePassword() {
      try {
        const success = await this.changePassword(this.formChangePass);
        if (success) {
          this.formChangePass = {
            oldPassword: '',
            newPassword: '',
            confNewPassword: '',
          };
          this.passOldmatch = false;
        } else {
          this.formChangePass.oldPassword = '';
          this.messageTextOld = 'wrong old password';
          this.passOldmatch = true;
        }
      } catch (error) {
        console.log(error)
      }
    },
    resetForm() {
     this.formChangePass = {
     oldPassword: '',
     newPassword: '',
     confNewPassword: '',
      };      
    },
    toggleShowOldPassword() {
      this.showOldPassword = !this.showOldPassword;
    },
    toggleShowNewPassword() {
      this.showNewPassword = !this.showNewPassword;
    },
    toggleShowConfNewPassword() {
      this.showConfNewPassword = !this.showConfNewPassword;
    },
  },
};
</script>