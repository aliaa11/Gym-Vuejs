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

import { onMounted } from 'vue'
import { useAboutStore } from '@/stores/about'
import { storeToRefs } from 'pinia'

export default {
  name: 'About',
  components: {
    AboutHero,
    VideoSection
  },
  setup() {
    const aboutStore = useAboutStore()
    const { heroData, homeData } = storeToRefs(aboutStore)

    onMounted(() => {
      aboutStore.fetchAboutData()
    })

    return {
      heroData,
      homeData
    }
  }
}
</script>
