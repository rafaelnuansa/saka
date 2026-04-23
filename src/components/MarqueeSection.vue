<template>
  <div class="bg-black py-6 overflow-hidden border-y border-zinc-900 w-full">
    <div class="relative flex items-center">
      
      <div class="animate-marquee whitespace-nowrap flex items-center">
        
        <div v-for="i in 6" :key="i" class="flex items-center">
          
          <div class="flex flex-col leading-[0.9] font-placard-wide uppercase tracking-tighter shrink-0 mx-12 md:mx-20">
            <span class="text-[#cf1e1e] text-xl md:text-3xl" style="text-shadow: 2px 2px 0px rgba(207, 30, 30, 0.3);">
              Partner
            </span>
            <span class="text-[#cf1e1e] text-xl md:text-3xl" style="text-shadow: 2px 2px 0px rgba(207, 30, 30, 0.3);">
              Terpercaya.
            </span>
          </div>

          <div class="flex flex-col leading-[0.9] font-placard-wide uppercase tracking-tighter shrink-0 mx-12 md:mx-20">
            <span class="text-[#cf1e1e] text-xl md:text-3xl" style="text-shadow: 2px 2px 0px rgba(207, 30, 30, 0.3);">
              Build
            </span>
            <span class="text-[#cf1e1e] text-xl md:text-3xl" style="text-shadow: 2px 2px 0px rgba(207, 30, 30, 0.3);">
              Presence.
            </span>
          </div>

          <div class="flex flex-col leading-[0.9] font-placard-wide uppercase tracking-tighter shrink-0 mx-12 md:mx-20">
            <span class="text-[#cf1e1e] text-xl md:text-3xl" style="text-shadow: 2px 2px 0px rgba(207, 30, 30, 0.3);">
              Create
            </span>
            <span class="text-[#cf1e1e] text-xl md:text-3xl" style="text-shadow: 2px 2px 0px rgba(207, 30, 30, 0.3);">
              Impact.
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  /* Durasi diperlambat sedikit (45s) agar mata nyaman membaca karena jarak makin jauh */
  animation: marquee 45s linear infinite;
  
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.shrink-0 {
  flex-shrink: 0;
}
</style>