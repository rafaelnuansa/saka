<template>
  <div class="relative bg-[#eb7e7e] overflow-hidden py-24 border-t border-zinc-900 w-full antialiased">
    
    <div class="absolute inset-0 z-0 opacity-20" style="
           background-size: 30px 30px; 
           background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);
           -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
           mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
         ">
    </div>

    <div id="stats-trigger" class="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
      
      <div class="relative flex flex-col items-center justify-center mb-16">
        
        <div class="absolute z-0 select-none pointer-events-none scale-125 md:scale-150">
          <img 
            src="/img/star-bg.png" 
            alt="" 
            class="w-48 h-48 md:w-64 md:h-64 object-contain opacity-100"
          />
        </div>
        
        <div class="relative z-10 text-center">
          <h2 class="font-placard-wide text-7xl md:text-9xl text-[#f2c172] leading-none" 
              style="text-shadow: 4px 4px 0px #000; -webkit-text-stroke: 2px #000;">
            {{ Math.floor(displayStats.satisfaction) }}%
          </h2>
          <p class="font-sans font-bold text-sm md:text-lg text-white uppercase tracking-widest mt-2">
            Client Satisfaction Rate
          </p>
        </div>
      </div>
<div class="bg-[#f2c172] border-2 border-black rounded-2xl md:rounded-3xl p-4 md:p-10 flex flex-row flex-nowrap justify-between items-center w-full shadow-[8px_8px_0px_#000]">
  
  <div class="flex-1 flex flex-col items-center text-center text-black px-2">
    <span class="font-placard-wide text-2xl md:text-6xl">{{ Math.floor(displayStats.experience) }}+</span>
    <span class="font-sans font-bold text-[10px] md:text-base uppercase leading-tight">Tahun<br class="md:hidden"> Pengalaman</span>
  </div>

  <div class="w-[1px] h-10 md:h-20 bg-black/20"></div>

  <div class="flex-1 flex flex-col items-center text-center text-black px-2">
    <span class="font-placard-wide text-2xl md:text-6xl">{{ Math.floor(displayStats.brands) }}+</span>
    <span class="font-sans font-bold text-[10px] md:text-base uppercase leading-tight">Brand<br class="md:hidden"> Ditangani</span>
  </div>

  <div class="w-[1px] h-10 md:h-20 bg-black/20"></div>

  <div class="flex-1 flex flex-col items-center text-center text-black px-2">
    <span class="font-placard-wide text-2xl md:text-6xl">{{ Math.floor(displayStats.reach) }}M+</span>
    <span class="font-sans font-bold text-[10px] md:text-base uppercase leading-tight">Total<br class="md:hidden"> Reach</span>
  </div>

</div>

    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const displayStats = reactive({
  satisfaction: 0,
  experience: 0,
  brands: 0,
  reach: 0
})

const targets = {
  satisfaction: 98,
  experience: 10,
  brands: 200,
  reach: 12
}

const startCounting = () => {
  const duration = 2000; 
  const startTime = performance.now();

  const update = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

    displayStats.satisfaction = targets.satisfaction * ease;
    displayStats.experience = targets.experience * ease;
    displayStats.brands = targets.brands * ease;
    displayStats.reach = targets.reach * ease;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startCounting();
      observer.disconnect();
    }
  }, { threshold: 0.3 });

  const trigger = document.getElementById('stats-trigger');
  if (trigger) observer.observe(trigger);
})
</script>

<style scoped>
h2 {
    -webkit-text-stroke: 2px #000;
}
.select-none {
  user-select: none;
}
</style>