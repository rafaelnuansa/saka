<template>
  <div class="relative bg-white py-24 border-t border-zinc-200 w-full antialiased" id="clients">
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="flex flex-col items-center text-center mb-16" v-motion-roll-visible-bottom>
        <h2 class="font-placard-wide text-5xl md:text-7xl uppercase text-[#cf1e1e]" 
            style="text-shadow: 2px 2px 0px #f2c172; -webkit-text-stroke: 1px #cf1e1e;">
          Our Clients
        </h2>
        <div class="h-1.5 w-24 bg-[#cf1e1e] mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div 
          v-for="(client, index) in clients" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ 
            opacity: 1, 
            y: 0, 
            transition: { delay: index * 100, damping: 12 } 
          }"
          class="group relative bg-white rounded-2xl p-4 flex items-center justify-center transition-all duration-500 "
        >
          <img
            :src="client.logo" 
            :alt="client.name"
            class="h-20 md:h-40 w-auto object-contain filter  transition-all duration-500"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Data dummy 12 Client
const clients = [
  { name: 'Tokopedia', logo: '/img/clients/tokopedia.png' },
  { name: 'Bukalapak', logo: '/img/clients/bukalapak.png' },
  { name: 'Aqua', logo: '/img/clients/aqua.png' },
  { name: 'Pertamina', logo: '/img/clients/pertamina.svg' },
  { name: 'Danone', logo: '/img/clients/danone.png' },
  { name: 'Mandiri', logo: '/img/clients/mandiri.png' },
  { name: 'Taspen', logo: '/img/clients/taspen.png' },
  { name: 'PLN', logo: '/img/clients/pln.png' },
  { name: 'Astronacci', logo: '/img/clients/astronacci.png' },
  { name: 'Fammi.ly', logo: '/img/clients/fammily.png' },
  { name: 'Pupuk Indonesia', logo: '/img/clients/pupuk_indonesia.png' },
  { name: 'Raya Food', logo: '/img/clients/rayafood.png' },
]
</script>

<style scoped>
/* Transisi halus untuk shadow dan pergerakan card */
.group {
  will-change: transform, box-shadow;
}
</style>