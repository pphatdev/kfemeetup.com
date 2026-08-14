<template>
  <main class="min-h-screen bg-primary-foreground text-foreground flex items-center justify-center p-4 sm:p-8 lg:p-12 font-sans selection:bg-primary-accent/20">
    <NuxtRouteAnnouncer />

    <!-- 1280x832 Responsive Canvas Layout -->
    <div class="w-full max-w-7xl min-h-208 bg-primary-foreground rounded-3xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between p-6 sm:p-12 lg:p-16 gap-10">
      
      <!-- Left Hero Section with Khmer Typography & Glassmorphic Card -->
      <div class="w-full order-last lg:order-first lg:w-3/5 flex flex-col items-start justify-center my-auto gap-8 z-10">
        
        <!-- Brand Header Logo using /logo.svg -->
        <div class="flex items-center gap-3">
          <img src="/logo.svg" alt="K'Fe Meetup Logo" class="w-10 h-10 object-contain border border-primary/20 rounded-xl" />
        </div>

        <!-- Khmer Main Headline Copy -->
        <div class="flex flex-col gap-3 max-w-xl text-left">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-[1.3] tracking-tight font-['Kantumruy_Pro',sans-serif]">
            អភិវឌ្ឍន៍ខ្លួន<br />
            និងជួយគ្នាទៅវិញទៅមក<br />
            ក្នុងនាមជា<br /> <span class="text-primary-accent underline underline-offset-8 decoration-primary-accent/40 decoration-4">community.</span>
          </h1>
        </div>

        <!-- Transparent Glassmorphic Card with Floating Coffee Cup -->
        <div class="w-full max-w-xl bg-white/60 backdrop-blur-md border border-white/90 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 transition-all hover:bg-white/70 relative">
          
          <!-- Floating Coffee Cup Image on Top Right -->
          <img 
            src="/coffeecup.png" 
            alt="Coffee Cup floating element" 
            class="absolute -top-12 -right-6 sm:-top-16 sm:-right-8 w-24 sm:w-44 h-auto object-contain drop-shadow-xl pointer-events-none animate-float z-20"
          />

          <!-- User Profile Section (Top of quotes) -->
          <div class="flex items-center gap-3.5 pr-12 sm:pr-16">
            <!-- Avatar Badge -->
            <div class="w-11 h-11 rounded-full bg-primary-linear p-0.5 shadow-xs shrink-0">
              <div class="w-full h-full rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                SL
              </div>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-bold text-black">Sophat LEAT</span>
              <span class="text-xs font-semibold text-primary-accent">@pphat</span>
            </div>
          </div>

          <!-- Tagline Quote Container with SVG Quote Icon at Bottom Left -->
          <div class="flex flex-col gap-2">
            <p class="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
              K’Fe Meetup just built for helping developers connect, grow together, and build meaningful communities.
            </p>

            <!-- SVG Quote Icon at Bottom Left of Quote -->
            <div class="flex justify-start pt-1">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary">
                <g opacity="0.3">
                  <path d="M3.16663 19.5542H12.3499C14.7724 19.5542 16.435 21.3909 16.435 23.6392V28.7376C16.435 30.9859 14.7724 32.8225 12.3499 32.8225H7.25165C5.00332 32.8225 3.16663 30.9859 3.16663 28.7376V19.5542" stroke="currentColor" stroke-width="3.18" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.16675 19.5541C3.16675 9.97494 4.95596 8.39169 10.3393 5.19336" stroke="currentColor" stroke-width="3.18" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21.5809 19.5542H30.7642C33.1867 19.5542 34.8493 21.3909 34.8493 23.6392V28.7376C34.8493 30.9859 33.1867 32.8225 30.7642 32.8225H25.666C23.4176 32.8225 21.5809 30.9859 21.5809 28.7376V19.5542" stroke="currentColor" stroke-width="3.18" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21.5808 19.5541C21.5808 9.97494 23.3699 8.39169 28.7533 5.19336" stroke="currentColor" stroke-width="3.18" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Column: Interactive Auth Card Component (Login / Register) -->
      <div class="w-full lg:w-2/5 flex items-center justify-center lg:justify-end my-auto z-20">
        <AuthCard />
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
// K'fe Meetup Homepage with left-aligned quote icon at the bottom of the quote
</script>