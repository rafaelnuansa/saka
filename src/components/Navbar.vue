<template>
    <nav class="bg-black text-white px-6 py-4 sticky w-full top-0 z-50 shadow-lg">
        <div class="max-w-7xl mx-auto flex justify-between items-center">

            <div class="flex items-center">
                <a href="#home" @click.prevent="scrollToSection('#home')">
                    <img src="/img/logo.png" alt="Saka Logo" class="h-8 md:h-10 w-auto brightness-0 invert" />
                </a>
            </div>

            <div class="hidden md:flex space-x-8 items-center">
                <a v-for="item in menuItems" 
                   :key="item.name" 
                   :href="item.link"
                   @click.prevent="scrollToSection(item.link)"
                   class="hover:text-gray-400 transition font-placard duration-300 ease-in-out tracking-wide cursor-pointer">
                    {{ item.name }}
                </a>
            </div>

            <div class="md:hidden flex items-center">
                <button @click="isMenuOpen = !isMenuOpen" class="focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m7-7H4" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <transition name="fade">
            <div v-show="isMenuOpen" class="md:hidden bg-black border-t border-gray-800 mt-4 pb-4 px-2">
                <a v-for="item in menuItems" 
                   :key="item.name" 
                   :href="item.link"
                   @click.prevent="scrollToSection(item.link)"
                   class="block px-4 py-3 text-sm hover:bg-gray-900 transition text-center font-placard tracking-widest cursor-pointer">
                    {{ item.name }}
                </a>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const menuItems = [
    { name: 'Beranda', link: '#home' },
    { name: 'Tentang Saka', link: '#about' },
    { name: 'Layanan', link: '#services' },
    { name: 'Clients', link: '#clients' },
    { name: 'Kontak', link: '#contact' },
];

/**
 * Fungsi Smooth Scroll
 * @param {string} targetLink - ID section (contoh: #about)
 */
const scrollToSection = (targetLink) => {
    // Tutup menu mobile jika sedang terbuka
    isMenuOpen.value = false;

    const targetId = targetLink.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
        // Hitung offset navbar (karena navbar kita sticky, agar header section tidak tertutup)
        const offset = 80; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};
</script>

<style scoped>
/* Perbaikan animasi fade agar lebih smooth */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Pastikan pointer kursor muncul */
a {
    cursor: pointer;
}
</style>