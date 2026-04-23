<template>
  <div class="relative bg-[#cf1e1e] overflow-hidden py-24 border-t border-zinc-900 w-full antialiased font-sans" id="contact">
    
    <div class="absolute inset-0 z-0 opacity-20" style="
           background-size: 30px 30px; 
           background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px);
           -webkit-mask-image: radial-gradient(circle, black 30%, transparent 80%);
           mask-image: radial-gradient(circle, black 30%, transparent 80%);
         ">
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="mb-16 text-left" v-motion-slide-visible-left>
        <h2 class="font-placard-wide text-5xl md:text-7xl uppercase tracking-tighter text-[#FBBF24]" 
            style="text-shadow: 2px 2px 0px #000, 4px 4px 0px #000; -webkit-text-stroke: 1.5px #000;">
          Mari Berkolaborasi!
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        <div 
          v-motion-pop-visible
          class="flex flex-col items-center md:items-start gap-8 mt-4"
        >
          <img src="/img/contact-img.png" alt="Saka Contact" class="h-56 object-contain drop-shadow-2xl" />

          <a 
            href="https://wa.me/6285817577020" 
            target="_blank" 
            class="flex items-center gap-3 bg-white border-2 border-black rounded-full px-6 py-3 shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
          >
            <img src="/img/icon-wa.png" alt="WhatsApp" class="w-7 h-7" />
            <span class="font-bold text-lg text-black">0858-1757-7020</span>
          </a>
        </div>

        <div 
          v-motion-slide-visible-right
          class="md:col-span-2 flex flex-col gap-4 p-4 rounded-3xl "
        >
          <p class="text-2xl text-white font-bold mb-2 tracking-tight">Beri tahu kami detail kebutuhan anda.</p>
          <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            <div class="flex flex-col gap-2.5">
              <label class="text-white font-bold text-lg">Nama:</label>
              <input type="text" v-model="form.name" placeholder="Nama Lengkap / Panggilan" class="input-saka-cartoon" required />
            </div>

            <div class="flex flex-col gap-2.5">
              <label class="text-white font-bold text-lg">Nama Perusahaan:</label>
              <input type="text" v-model="form.company" placeholder="Contoh: PT ..." class="input-saka-cartoon" />
            </div>

            <div class="flex flex-col gap-2.5">
              <label class="text-white font-bold text-lg">Nomor Telepon Aktif:</label>
              <input type="tel" v-model="form.phone" placeholder="Contoh: 0812xxxx" class="input-saka-cartoon" required />
            </div>

            <div class="flex flex-col gap-2.5">
              <label class="text-white font-bold text-lg">Alamat Email:</label>
              <input type="email" v-model="form.email" placeholder="Contoh: nama@email.com" class="input-saka-cartoon" required />
            </div>

            <div class="md:col-span-2 flex flex-col gap-2.5">
              <label class="text-white font-bold text-lg">Subjek:</label>
              <input type="text" v-model="form.subject" placeholder="Contoh: Penawaran Kerja Sama / Tanya Layanan" class="input-saka-cartoon" required />
            </div>

            <div class="md:col-span-2 flex flex-col gap-2.5">
              <label class="text-white font-bold text-lg">Detail Proyek Anda:</label>
              <textarea v-model="form.message" rows="5" placeholder="Ceritakan detail kebutuhan atau proyek Anda di sini..." class="input-saka-cartoon resize-none" required></textarea>
            </div>

            <div class="md:col-span-2 flex justify-end mt-6">
              <button 
                type="submit"
                class="bg-[#FBBF24] text-black font-extrabold text-xl uppercase tracking-tight px-12 py-5 rounded-2xl border-2 border-black shadow-[8px_8px_0px_#000] hover:shadow-[3px_3px_0px_#000] hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150 active:scale-95"
              >
                Kirim Pesan
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  company: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // console.log('Form Submitted:', form)
  alert('Terima kasih! Pesan Anda telah kami terima.')
  // Reset form
  Object.keys(form).forEach(key => form[key] = '')
}
</script>

<style scoped>
h2 {
    -webkit-text-stroke: 1.5px #000;
}
</style>