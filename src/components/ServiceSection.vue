<template>
  <div class="relative bg-[#cf1e1e] overflow-hidden py-24 border-t border-zinc-900 w-full antialiased" id="services">
    
    <div class="absolute inset-0 z-0 opacity-20" style="
           background-size: 30px 30px; 
           background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);
           -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
           mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
         ">
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <div 
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 15, delay: 200 } }"
        class="flex flex-col gap-6 text-white"
      >
        <h2 class="font-placard-wide text-5xl md:text-7xl uppercase tracking-tighter text-[#FBBF24]" 
            style="text-shadow: 2px 2px 0px #000, 4px 4px 0px #000; -webkit-text-stroke: 1.5px #000;">
          Layanan
        </h2>

        <div class="flex flex-col gap-4">
          <p class="font-sans text-lg md:text-xl leading-relaxed font-medium">
            <strong class="font-bold text-white uppercase ">PT Saka Ruang Indonesia (SAKA)</strong> hadir sebagai konsultan komunikasi digital yang membantu Anda dalam:
          </p>

          <ul class="font-sans text-xl md:text-2xl font-bold flex flex-col gap-2">
            <li v-for="(service, index) in services" :key="index" 
                class="flex items-start gap-3 tracking-tight leading-tight">
              <span>{{ service }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.7, rotate: 5 }"
        :enter="{ opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 12, delay: 500 } }"
        class="relative flex justify-center md:justify-end items-center"
      >
        <img 
          src="/img/services-illus.png" 
          alt="Saka Digital Communication Services" 
          class="h-80 md:h-[500pz] w-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] object-contain"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
const services = [
  'Membagikan cerita brand',
  'Mengoptimalkan potensi merek',
  'Memperkuat kampanye',
  'Mengelola dan menekan komentar negatif',
  'Menguatkan citra merek'
]
</script>

<style scoped>
h2 {
    -webkit-text-stroke: 1.5px #000;
}
</style>