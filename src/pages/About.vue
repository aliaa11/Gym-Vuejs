<template>
  <div class="about-page">
    <AboutHero
      v-if="heroData"
      :title="heroData.title"
      :backgroundImage="heroData.backgroundImage"
    />
    <VideoSection
      v-if="homeData.aboutUs"
      :title="homeData.aboutUs.title"
      :content="homeData.aboutUs.content"
      :signature="homeData.aboutUs.signature"
      :video="homeData.aboutUs.video"
    />
  </div>
</template>

<script>
import AboutHero from '@/components/AboutHero.vue'
import VideoSection from '@/components/VideoSection.vue'

export default {
  name: 'About',
  components: {
    AboutHero,
    VideoSection
  },
  data() {
    return {
      heroData: null,
      storyData: null,
      homeData: {}
    }
  },
  async created() {
    try {
      const [heroRes, storyRes] = await Promise.all([
        fetch('http://localhost:3000/heroSection'),
        fetch('http://localhost:3000/story'),
        fetch('http://localhost:3000/homePage')
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
