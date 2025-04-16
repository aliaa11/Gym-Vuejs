<template>
    <div class="blog-page">
      <ClassSection
        v-if="heroData"
        :title="heroData.title || 'Blog'"
        :backgroundImage="heroData.backgroundImage || '/img/hero-bg.jpg'"
      />
      <ClassSection v-else />
    </div>
  </template>
    
  <script>
import ClassSection from '@/components/ClassSection.vue'
    
  export default {
    name: 'Blog',
    components: {
      ClassSection
    },
    data() {
      return {
        heroData: null,
      }
    },
    async created() {
      try {
        const heroRes = await fetch('http://localhost:3000/Classes')
        if (!heroRes.ok) {
          throw new Error('Failed to load blog hero section.')
        }
    
        this.heroData = await heroRes.json()
      } catch (err) {
        console.error("Error loading blog data:", err)
      }
    }
  }
  </script>