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
    
    <VideoSection
      v-if="homeData.aboutUs"
      :title="homeData.aboutUs.title"
      :content="homeData.aboutUs.content"
      :signature="homeData.aboutUs.signature"
      :video="homeData.aboutUs.video"
    />
    
    <ServicesSection
      v-if="homeData.services"
      :services="homeData.services"
    />
  <ClassesGallery 
      v-if="homeData.classes"
      :classes="homeData.classes"
      :itemsPerPage="6"
    />
    <TrainersGallery 
      v-if="homeData.trainers"
      :trainers="homeData.trainers"
    />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import VideoSection from '@/components/VideoSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import TrainersGallery from '@/components/TrainersGallery.vue'
import ClassesGallery from '@/components/ClassesGallery.vue'

export default {
  components: {
    HeroSection,
    VideoSection,
    ServicesSection,
    TrainersGallery,
    ClassesGallery
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
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }
}
</script>