<template>
  <div class="relative bg-[#eb7e7e] overflow-hidden py-20 border-t border-zinc-900 w-full antialiased font-sans">
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- HEADER -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { type: 'spring', damping: 15 } }"
          class="flex flex-col gap-4"
        >
          <h2 class="font-placard-wide text-5xl md:text-7xl uppercase tracking-tighter text-[#f2c172]" 
              style="text-shadow: 2px 2px 0px #000, 4px 4px 0px #000;">
            Keunggulan Kami
          </h2>

          <h3 class="text-3xl md:text-4xl font-bold leading-tight text-black mt-2">
            Tim yang Berpengalaman dan Ahli di Bidangnya
          </h3>

          <p class="text-lg md:text-xl text-black/80 font-medium leading-relaxed max-w-xl text-justify">
            Tim kami memiliki pengalaman lebih dari 10 tahun bekerja di bidang yang mendukung seperti komunikasi, desain grafis, jurnalisme, pemasaran, dan hubungan masyarakat.
          </p>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.8, rotate: 5 }"
          :enter="{ opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 100, delay: 300 } }"
          class="flex justify-center md:justify-end"
        >
          <img src="/img/features-illus.png" alt="Keunggulan SAKA" class="h-64 md:h-[400px] object-contain drop-shadow-xl" />
        </div>
      </div>

      <!-- ACCORDION -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-4">
        
        <div 
          v-for="(item, index) in features" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400 + (index * 100) } }"
          class="group"
        >
          <!-- HEADER ITEM -->
          <div 
            @click="toggleAccordion(index)"
            :class="[
              'relative flex items-center p-1 pr-6 rounded-full border-2 border-black transition-all cursor-pointer overflow-hidden shadow-[4px_4px_0px_#000]',
              isActive(index) ? 'bg-[#cf1e1e] text-white' : 'bg-[#eb7e7e] text-black hover:bg-[#cf1e1e]/10'
            ]"
          >
            <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#f2c172] border-2 border-black flex items-center justify-center font-bold text-xl md:text-2xl text-black shrink-0 z-10">
              {{ item.id }}
            </div>

            <span class="flex-1 ml-4 font-bold text-lg md:text-xl uppercase tracking-tight">
              {{ item.title }}
            </span>

            <span class="text-2xl font-bold font-placard">
              {{ isActive(index) ? '-' : '+' }}
            </span>
          </div>

          <!-- CONTENT -->
          <transition name="expand">
            <div 
              v-if="isActive(index)" 
              class="px-16 py-4 text-black font-medium leading-relaxed"
            >
              {{ item.desc }}
            </div>
          </transition>
        </div>

      </div>

    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

// semua terbuka saat awal
const activeIndexes = ref([])

onMounted(() => {
  activeIndexes.value = [0, 1, 2, 3]
})

const toggleAccordion = (index) => {
  if (activeIndexes.value.includes(index)) {
    activeIndexes.value = activeIndexes.value.filter(i => i !== index)
  } else {
    activeIndexes.value.push(index)
  }
}

const isActive = (index) => {
  return activeIndexes.value.includes(index)
}

const features = [
  { id: '01', title: 'Tim Berpengalaman', desc: 'Memiliki tenaga ahli yang tersertifikasi dan berpengalaman di berbagai proyek strategis nasional.' },
  { id: '02', title: 'Berpengalaman', desc: 'Lebih dari satu dekade menangani komunikasi krisis dan pengembangan brand.' },
  { id: '03', title: 'Jaringan yang Luas', desc: 'Mengelola ribuan influencer dan akun media sosial komunitas untuk memperkuat dan menyeimbangkan isu di media sosial.' },
  { id: '04', title: 'Jaringan ke Media Massa', desc: 'Memiliki hubungan baik dengan berbagai redaktur media nasional baik cetak maupun digital.' },
]
</script>

<style scoped>
h2 {
  -webkit-text-stroke: 1.5px #000;
}

.expand-enter-active, 
.expand-leave-active {
  transition: all 0.35s ease;
  max-height: 200px;
  overflow: hidden;
}

.expand-enter-from, 
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>