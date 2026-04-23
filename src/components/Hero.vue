<template>
  <div id="home" class="relative min-h-[400px] md:min-h-[600px] bg-[#cf1e1e] flex items-center justify-center overflow-hidden py-10 md:py-20">

    <div class="absolute inset-0 z-0 opacity-20" style="
           background-size: 30px 30px; 
           background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);
           -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
           mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
         ">
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center w-full">
      
      <div class="flex flex-row items-center justify-center w-full relative h-64 md:h-96 md:translate-x-12">

        <div v-motion :initial="{ opacity: 0, scale: 0, rotate: -15 }" :enter="{
          opacity: 0.8,
          scale: 1,
          rotate: 0,
          transition: { type: 'spring', stiffness: 250, damping: 15 }
        }" class="z-0 shrink-0 ">
          <img src="/img/starburst.png" alt="" class="h-16 md:h-32 w-auto object-contain" />
        </div>

        <div v-motion :initial="{ opacity: 0, y: 100, scale: 0.8 }" :enter="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 200, damping: 10, delay: 200 }
        }" class="z-20 shrink-0">
          <img src="/img/sakacompanyhero.png" alt="Saka Company Logo"
            class="h-28 md:h-72 drop-shadow-2xl object-contain" />
        </div>

        <div v-motion :initial="{ opacity: 0, x: 100, scale: 0.9 }" :enter="{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 150, damping: 12, delay: 400 }
        }" class="z-10 -ml-24 md:-ml-64 shrink-0">
          <img src="/img/bot-tv.png" alt="Saka TV Bot Mascot"
            class="h-44 md:h-[400px] drop-shadow-xl object-contain" />
        </div>
      </div>

      <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15, delay: 600 }
      }" class="mt-6 md:mt-0">
        <img src="/img/slogan-text.png" alt="Tumbuh Lebih Cepat Bersama SAKA"
          class="h-6 md:h-12 drop-shadow-md" />
      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.shrink-0 {
  flex-shrink: 0;
}
</style>