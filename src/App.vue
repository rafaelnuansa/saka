<script setup lang="ts">
import AboutSection from './components/AboutSection.vue';
import ClientSection from './components/ClientSection.vue';
import ContactSection from './components/ContactSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import FloatingWA from './components/FloatingWA.vue';
import FooterSection from './components/FooterSection.vue';
import Hero from './components/Hero.vue';
import MarqueeSection from './components/MarqueeSection.vue';
import Navbar from './components/Navbar.vue';
import ServiceDetailSlider from './components/ServiceDetailSlider.vue';
import ServiceSection from './components/ServiceSection.vue';
import StatSection from './components/StatSection.vue';

</script>

<template>
  <Navbar />
  <Hero/>
  <MarqueeSection/>
  <StatSection/>
  <AboutSection/>
  <FeaturesSection/>
  <ServiceSection/>
  <ServiceDetailSlider/>
  <ClientSection/>
  <ContactSection/>
  <FooterSection/>
  <FloatingWA/>
</template>
