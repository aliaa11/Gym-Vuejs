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
import { onMounted } from 'vue'
import { useAboutStore } from '@/stores/about'
import { storeToRefs } from 'pinia'

export default {
  name: 'About',
  components: {
    AboutHero,
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
