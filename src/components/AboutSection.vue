<template>
  <div class="relative bg-[#cf1e1e] overflow-hidden py-24 border-t border-zinc-900 w-full antialiased" id="about">
    
    <div class="absolute inset-0 z-0 opacity-20" style="
           background-size: 30px 30px; 
           background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);
           -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
           mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
         ">
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
      
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ 
          opacity: 1, 
          y: 0,
          transition: { type: 'spring', stiffness: 100, damping: 15, delay: 200 } 
        }"
        class="flex flex-col gap-6 text-white"
      >
        <h2 class="font-placard-wide text-5xl md:text-7xl uppercase tracking-tighter text-[#FBBF24]" 
            style="text-shadow: 2px 2px 0px #000, 4px 4px 0px #000; -webkit-text-stroke: 1.5px #000;">
          Tentang Saka
        </h2>

        <p class="font-sans text-lg md:text-xl leading-relaxed text-zinc-100 font-medium text-justify">
          <strong class="font-bold text-white">PT Tumbuh Bersama Saka (SAKA)</strong> merupakan mitra strategis di bidang layanan komunikasi yang menyediakan solusi kreatif dan efektif sesuai kebutuhan klien. SAKA telah bekerja sama dengan berbagai sektor, termasuk pemerintah, BUMN, media keagamaan dan kemasyarakatan, serta perusahaan swasta. Berbekal pengalaman dan komitmen yang kuat, SAKA berfokus menghadirkan komunikasi yang tepat sasaran dan berdampak.
        </p>
      </div>

      <div class="relative flex justify-center md:justify-end items-center mt-12 md:mt-0">
        
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.5, y: 20 }"
          :enter="{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { type: 'spring', stiffness: 180, damping: 12, delay: 500 } 
          }"
          class="relative z-10"
        >
          <img 
            src="/img/bot-tv.png" 
            alt="Saka Mascot Collaborate" 
            class="h-80 md:h-[600px] w-auto drop-shadow-2xl object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// Section Tentang Saka - Clean Version (tanpa floating starburst)
</script>

<style scoped>
/* style stroke untuk heading jika browser tidak support tailwind stroke */
h2 {
    -webkit-text-stroke: 1.5px #000;
}
</style>