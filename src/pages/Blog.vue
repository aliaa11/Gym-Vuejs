<template>
    <div class="blog-page">
      <BlogSection
        v-if="heroData"
        :title="heroData.title || 'Blog'"
        :backgroundImage="heroData.backgroundImage || '/img/hero-bg.jpg'"
      />
      <BlogSection v-else />
    </div>
  </template>
    
  <script>
  import BlogSection from '@/components/BlogSection.vue'
    
  export default {
    name: 'Blog',
    components: {
      BlogSection
    },
    data() {
      return {
        heroData: null,
      }
    },
    async created() {
      try {
        const heroRes = await fetch('http://localhost:3000/blog')
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