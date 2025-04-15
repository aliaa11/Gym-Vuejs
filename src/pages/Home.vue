<template>
  <div class="home-page">
    <HeroSection
      v-if="homeData.heroSection"
      :title="homeData.heroSection.title"
      :subtitle="homeData.heroSection.subtitle"
      :backgroundImage="homeData.heroSection.backgroundImage"
      :featureTitle="homeData.heroSection.features[0].title"
      :featureDescription="homeData.heroSection.features[0].description"
    />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'

export default {
  components: {
    Navbar,
    HeroSection
  },
  data() {
    return {
      homeData: {}
    }
  },
  async created() {
  try {
    const response = await fetch('http://localhost:3000/homePage');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    this.homeData = await response.json();
    console.log('Data loaded:', this.homeData);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}
}
</script>