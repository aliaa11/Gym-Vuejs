<template>
  <div class="home-page">
    <Navbar :logo="homeData.header.logo || ''" />
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
import axios from 'axios'

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
      const response = await axios.get('http://localhost:3000/homePage')
      this.homeData = response.data
      console.log('Data loaded:', this.homeData)
    } catch (error) {
      console.error("Error loading data:", error)
    }
  }
}
</script>