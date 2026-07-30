<template>
  <div class="w-full max-w-[377px] min-h-[588px] bg-background text-foreground rounded-[29.5px] border border-[#E0E0E0] shadow-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300">
    <!-- Header & Segmented Tab Switcher -->
    <div>
      <div class="w-full max-w-[304px] h-[41px] bg-[#F8F8F8] p-1 rounded-[15px] flex items-center mx-auto mb-6">
        <button 
          type="button"
          @click="activeTab = 'login'"
          :class="[
            'flex-1 h-[31px] text-xs font-bold rounded-[10px] transition-all duration-200 flex items-center justify-center',
            activeTab === 'login' 
              ? 'bg-primary-linear text-primary-foreground shadow-xs' 
              : 'text-primary hover:text-foreground font-semibold'
          ]"
        >
          Login
        </button>
        <button 
          type="button"
          @click="activeTab = 'register'"
          :class="[
            'flex-1 h-[31px] text-xs font-bold rounded-[10px] transition-all duration-200 flex items-center justify-center',
            activeTab === 'register' 
              ? 'bg-primary-linear text-primary-foreground shadow-xs' 
              : 'text-primary hover:text-foreground font-semibold'
          ]"
        >
          Register
        </button>
      </div>

      <!-- Login Form -->
      <form v-if="activeTab === 'login'" @submit.prevent="handleSubmit" class="w-full max-w-[304px] mx-auto flex flex-col gap-4">
        <!-- Email / Username Input -->
        <div class="flex flex-col gap-1">
          <label class="text-[11px] font-bold text-primary tracking-wide">Email or Username</label>
          <div class="relative">
            <input 
              v-model="loginForm.email"
              type="text" 
              placeholder="Enter your email"
              required
              class="w-full h-[33px] px-3.5 text-xs text-foreground bg-background border border-[#C7C7CC] rounded-[9.5px] focus:outline-none focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all placeholder:text-neutral-400"
            />
          </div>
        </div>

        <!-- Password Input -->
        <div class="flex flex-col gap-1">
          <label class="text-[11px] font-bold text-primary tracking-wide">Password</label>
          <div class="relative">
            <input 
              v-model="loginForm.password"
              :type="showPassword ? 'text' : 'password'" 
              placeholder="Enter your password"
              required
              class="w-full h-[33px] px-3.5 text-xs text-foreground bg-background border border-[#C7C7CC] rounded-[9.5px] focus:outline-none focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all placeholder:text-neutral-400"
            />
            <button 
              type="button" 
              @click="showPassword = !showPassword" 
              class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 focus:outline-none"
            >
              <svg v-if="!showPassword" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path></svg>
            </button>
          </div>
        </div>

        <!-- Options: Remember Me & Forgot Password -->
        <div class="flex items-center justify-between text-[11px]">
          <label class="flex items-center gap-1.5 cursor-pointer text-neutral-600">
            <input 
              v-model="loginForm.remember"
              type="checkbox" 
              class="w-3.5 h-3.5 rounded text-primary-accent focus:ring-primary-accent border-[#C7C7CC] accent-primary-accent" 
            />
            Remember me
          </label>
          <a href="#" class="font-semibold text-primary-accent hover:underline">Forgot password?</a>
        </div>

        <!-- Primary Login Submit Button -->
        <button 
          type="submit"
          class="w-full h-[35px] mt-1 bg-primary-linear hover:opacity-95 text-primary-foreground font-bold text-xs rounded-[10px] shadow-sm active:scale-[0.99] transition-all flex items-center justify-center"
        >
          Login
        </button>
      </form>

      <!-- Register Form -->
      <form v-else @submit.prevent="handleSubmit" class="w-full max-w-[304px] mx-auto flex flex-col gap-3.5">
        <!-- Full Name -->
        <div class="flex flex-col gap-1">
          <label class="text-[11px] font-bold text-primary tracking-wide">Full Name</label>
          <input 
            v-model="registerForm.name"
            type="text" 
            placeholder="Alex Developer"
            required
            class="w-full h-[33px] px-3.5 text-xs text-foreground bg-background border border-[#C7C7CC] rounded-[9.5px] focus:outline-none focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all placeholder:text-neutral-400"
          />
        </div>

        <!-- Email -->
        <div class="flex flex-col gap-1">
          <label class="text-[11px] font-bold text-primary tracking-wide">Email Address</label>
          <input 
            v-model="registerForm.email"
            type="email" 
            placeholder="alex@example.com"
            required
            class="w-full h-[33px] px-3.5 text-xs text-foreground bg-background border border-[#C7C7CC] rounded-[9.5px] focus:outline-none focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all placeholder:text-neutral-400"
          />
        </div>

        <!-- Password -->
        <div class="flex flex-col gap-1">
          <label class="text-[11px] font-bold text-primary tracking-wide">Password</label>
          <input 
            v-model="registerForm.password"
            type="password" 
            placeholder="••••••••"
            required
            class="w-full h-[33px] px-3.5 text-xs text-foreground bg-background border border-[#C7C7CC] rounded-[9.5px] focus:outline-none focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all placeholder:text-neutral-400"
          />
        </div>

        <!-- Submit Button -->
        <button 
          type="submit"
          class="w-full h-[35px] mt-1 bg-primary-linear hover:opacity-95 text-primary-foreground font-bold text-xs rounded-[10px] shadow-sm active:scale-[0.99] transition-all flex items-center justify-center"
        >
          Create Account
        </button>
      </form>

      <!-- Or Continue With Divider -->
      <div class="w-full max-w-[304px] mx-auto my-4 flex items-center gap-3">
        <div class="flex-1 h-[1px] bg-[#E5E5E5]"></div>
        <span class="text-[11px] font-medium text-[#808191]">Or continue with</span>
        <div class="flex-1 h-[1px] bg-[#E5E5E5]"></div>
      </div>

      <!-- Social Login Buttons (Google, GitHub, Apple) -->
      <div class="w-full max-w-[304px] mx-auto flex flex-col gap-2.5">
        <!-- Google Button -->
        <button 
          type="button"
          @click="handleSocial('Google')"
          class="w-full h-[31px] bg-white border border-[#E5E5E5] rounded-[7.5px] text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 shadow-2xs"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.28v3.15C3.25 21.3 7.31 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.28C.46 8.21 0 10.05 0 12c0 1.95.46 3.79 1.28 5.42l4-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.28 6.58l4 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          Google
        </button>

        <!-- GitHub Button -->
        <button 
          type="button"
          @click="handleSocial('GitHub')"
          class="w-full h-[31px] bg-white border border-[#E5E5E5] rounded-[7.5px] text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 shadow-2xs"
        >
          <svg class="w-3.5 h-3.5 fill-current text-neutral-800" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </button>

        <!-- Apple Button -->
        <button 
          type="button"
          @click="handleSocial('Apple')"
          class="w-full h-[31px] bg-white border border-[#E5E5E5] rounded-[7.5px] text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 shadow-2xs"
        >
          <svg class="w-3.5 h-3.5 fill-current text-neutral-800" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.67-.82 1.12-1.95.99-3.09-.96.04-2.14.64-2.83 1.44-.62.72-1.16 1.88-1.01 3 .07.01 2.18.47 2.85-.65Z"/>
          </svg>
          Apple
        </button>
      </div>
    </div>

    <!-- Card Footer -->
    <div class="text-center pt-3 border-t border-neutral-100 text-xs text-neutral-500 mt-2">
      <template v-if="activeTab === 'login'">
        Don't have an account? 
        <button type="button" @click="activeTab = 'register'" class="font-bold text-primary-accent hover:underline">Register</button>
      </template>
      <template v-else>
        Already have an account? 
        <button type="button" @click="activeTab = 'login'" class="font-bold text-primary-accent hover:underline">Login</button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'login' | 'register'>('login')
const showPassword = ref(false)

const loginForm = ref({
  email: '',
  password: '',
  remember: false
})

const registerForm = ref({
  name: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  if (activeTab.value === 'login') {
    alert(`Logging in with ${loginForm.value.email}`)
  } else {
    alert(`Registering account for ${registerForm.value.name}`)
  }
}

const handleSocial = (provider: string) => {
  alert(`Connecting with ${provider}`)
}
</script>
