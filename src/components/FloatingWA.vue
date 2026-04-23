<template>
  <div class="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3 group">
    
    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs font-bold px-3 py-2 rounded-lg shadow-xl translate-x-2 group-hover:translate-x-0 pointer-events-none">
      Butuh Bantuan? Chat Kami!
    </div>
    <a 
      href="https://wa.me/6285817577020" 
      target="_blank"
      class="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 active:scale-95 group"
    >
      <span class="absolute inset-0 rounded-2xl bg-white animate-ping opacity-20 group-hover:hidden"></span>

      <img 
        src="/img/icon-wa.png" 
        alt="WhatsApp" 
        class="w-8 h-8 md:w-10 md:h-10 relative z-10"
      />
    </a>
  </div>
</template>

<script setup>
// Floating WhatsApp Button - SAKA Edition
</script>

<style scoped>
/* Animasi ping kustom agar tidak terlalu agresif */
.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(1.4);
    opacity: 0;
  }
}
</style>