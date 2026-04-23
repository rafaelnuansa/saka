<template>
  <div class="relative bg-[#eb7e7e] py-20 overflow-hidden border-t border-zinc-900 w-full antialiased">
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="mb-12" v-motion-slide-visible-left>
        <h2 class="font-placard-wide text-5xl md:text-7xl uppercase tracking-tighter text-[#f2c172]" 
            style="text-shadow: 2px 2px 0px #000, 4px 4px 0px #000; -webkit-text-stroke: 1.5px #000;">
          Penjelasan Layanan
        </h2>
      </div>

      <div class="relative px-2"> 
        <swiper
          :modules="[Pagination, Autoplay]"
          :slides-per-view="1.2"
          :space-between="20"
          :grab-cursor="true"
          :pagination="{ 
            clickable: true,
            dynamicBullets: false 
          }"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :breakpoints="{
            '768': { slidesPerView: 2.2, spaceBetween: 24 },
            '1024': { slidesPerView: 3, spaceBetween: 30 }
          }"
          class="service-swiper !items-stretch" 
        >
          <swiper-slide v-for="(item, index) in details" :key="index" class="!h-auto flex">
            
            <div class="bg-[#cf1e1e] border-2 border-black rounded-3xl p-6 md:p-8 w-full flex flex-col h-full shadow-[6px_6px_0px_#000] text-white">
              
              <h3 class="font-placard font-black text-2xl md:text-3xl leading-tight border-b-2 border-white/20 pb-4 mb-4 shrink-0">
                {{ item.title }}
              </h3>
              
              <div class="flex flex-col gap-4 flex-grow">
                <p class="text-sm md:text-base font-medium leading-relaxed opacity-90">
                  {{ item.desc }}
                </p>
                
                <ul class="flex flex-col gap-3 mt-4">
                  <li v-for="(point, pIndex) in item.points" :key="pIndex" class="flex items-start gap-2 text-xs md:text-sm">
                    <span class="text-[#f2c172] font-bold text-lg leading-none shrink-0">•</span>
                    <span class="font-medium opacity-90 leading-snug">{{ point }}</span>
                  </li>
                </ul>
              </div>

            </div>
          </swiper-slide>
        </swiper>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const details = [
  {
    title: 'Manajemen Media Sosial',
    desc: 'Kami membantu organisasi, merek, atau individu untuk mengelola media sosial sebagai berikut:',
    points: [
      'Manajemen platform semua media sosial: Facebook, Instagram, Twitter, Youtube, Tiktok, dll;',
      'Membuat ide, konsep, dan memproduksi kalender konten;',
      'Desain visual, pembuatan atau pengeditan video, dan teks naratif atau deskriptif;',
      'Meningkatkan jumlah followers, reach, engagement, dan Interaction;',
      'Iklan di media sosial, dukungan KOL, dan duta merek KOL;'
    ]
  },
  {
    title: 'Pemantauan Media Sosial',
    desc: 'Kami dapat menyajikan data dari tools terpercaya kepada klien kami yang dapat digunakan untuk menyusun strategi digital, diantaranya:',
    points: [
      'Jumlah dan persentase mention, reach, dan interaction akun media sosial klien di platform media digital;',
      'Analisis sentimen tentang isu-isu spesifik;',
      'Pembuatan profil akun;',
      'Memprediksi dampak masalah yang bisa terjadi.'
    ]
  },
  {
    title: 'Manajemen Urusan Publik',
    desc: 'Kami dapat membantu klien kami untuk menciptakan dan mempertahankan citra publik yang baik melalui media massa dengan cara:',
    points: [
      'Menganalisis masalah atau peluang, kemudian membuat agenda setting;',
      'Memproduksi siaran pers dan mendistribusikannya ke media massa;',
      'Konsultasi dan pembuatan konsep pidato publik, hak jawab, dan siaran pers untuk manajemen krisis;',
      'Pengumpulan media, konsolidasi, dan pengaturan agenda.'
    ]
  },
  {
    title: 'Pelatihan & Pengembangan',
    desc: 'Kami mengajarkan pengetahuan teoritis dan praktis untuk membantu tim pribadi dan organisasi mengembangkan diri dengan membuka kelas sebagai berikut:',
    points: [
      'Kelas Urusan Publik: penulisan siaran pers, penulisan pidato, strategi manajemen krisis, dll;',
      'Kelas Pemasaran: copywriting, penulisan konten, periklanan digital, dll;',
      'Kelas Strategi Digital: strategi media sosial, strategi kampanye digital, strategi manajemen krisis digital, dll.'
    ]
  },
  {
    title: 'Branding secara Digital',
    desc: 'Kami dapat menciptakan brand awareness dan brand association pada platform digital untuk organisasi, merek atau individu melalui:',
    points: [
      'Membuat konsep identitas merek;',
      'Meningkatkan awareness secara keseluruhan;',
      'Membangun persepsi positif melalui interaksi;',
      'Mendorong kepercayaan dan kesetiaan konsumen.'
    ]
  },
  {
    title: 'Manajemen Reputasi Online',
    desc: 'Kami dapat membantu klien untuk membangun, meningkatkan atau bahkan memulihkan reputasi mereka di dunia digital dengan cara:',
    points: [
      'Mengaudit reputasi online klien;',
      'Membuat konsep reputasi yang tepat;',
      'Membangun persepsi positif terhadap dunia digital;',
      'Memantau proyek untuk kemajuan dan hasil yang terukur.'
    ]
  },
  {
    title: 'Manajemen Krisis Digital',
    desc: 'Karena krisis tidak dapat dihindari, manajemen krisis digital diperlukan untuk bertindak cepat dan memberikan respon yang tepat. Kami akan membantu klien kami untuk:',
    points: [
      'Mempersiapkan semua kemungkinan krisis di dunia digital melalui pemantauan isu dan sentimen dengan tools yang mumpuni;',
      'Memitigasi dengan menyeimbangkan isu-isu negatif;',
      'Menanggapi dengan cepat dan tepat;',
      'Memulihkan keadaan dari krisis ke kondisi normal atau bahkan lebih baik dengan memperkuat isu atau sentimen positif.'
    ]
  },
  {
    title: 'Pengorganisasian Acara',
    desc: 'Kami juga dapat membantu klien kami untuk mengelola acara khusus seperti:',
    points: [
      'Acara perusahaan: peluncuran produk, pembangunan tim, pameran dagang, dll.',
      'Acara pendidikan: seminar, konferensi, pelatihan, dll.',
      'Acara CSR: komunitas sukarela, pemberian amal, pendanaan sosial, dll.'
    ]
  }
];
</script>

<style scoped>
/* 1. Mencegah shadow terpotong dengan memberikan padding bawah yang besar */
.service-swiper {
  padding-bottom: 60px !important; /* Ruang untuk dot slider */
  padding-right: 10px !important; /* Ruang untuk shadow card di sisi kanan */
  padding-left: 10px !important;
  margin: 0 -10px; /* Menyeimbangkan padding agar tetap center */
}

/* 2. Memastikan semua slide ditarik sejajar */
:deep(.swiper-wrapper) {
  display: flex;
  align-items: stretch;
}

:deep(.swiper-slide) {
  height: auto !important;
  display: flex;
}

/* 3. Posisi Dot Slider di luar card */
:deep(.swiper-pagination) {
  bottom: 0px !important; /* Menurunkan dots ke area padding slider */
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #000;
  opacity: 0.3;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #cf1e1e !important;
  opacity: 1;
  width: 25px; /* Opsional: Membuat dot aktif lebih panjang agar makin cakep */
  border-radius: 5px;
}

h2 {
  -webkit-text-stroke: 1.5px #000;
}
</style>