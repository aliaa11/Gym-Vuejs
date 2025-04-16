<template>
  <div class="about-page">
    <AboutHero
      v-if="heroData"
      :title="heroData.title"
      :backgroundImage="heroData.backgroundImage"
    />

  </div>
</template>

<script>
import AboutHero from '@/components/AboutHero.vue'

export default {
  name: 'About',
  components: {
    AboutHero
  },
  data() {
    return {
      heroData: null,
      storyData: null
    }
  },
  async created() {
    try {
      const [heroRes, storyRes] = await Promise.all([
        fetch('http://localhost:3000/heroSection'),
        fetch('http://localhost:3000/story')
      ])

      if (!heroRes.ok || !storyRes.ok) {
        throw new Error('Failed to load one or more parts of the About page.')
      }

      this.heroData = await heroRes.json()
      //this.storyData = await storyRes.json()

    } catch (err) {
      console.error("Error loading About data:", err)
    }
  }
}
</script>
