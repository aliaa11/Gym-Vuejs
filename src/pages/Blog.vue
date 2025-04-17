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
import { useBlogStore } from '@/stores/blog'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import BlogSection from '@/components/BlogSection.vue'

export default {
  name: 'Blog',
  components: {
    BlogSection
  },
  setup() {
    const blogStore = useBlogStore()
    const { heroData } = storeToRefs(blogStore)

    onMounted(() => {
      blogStore.fetchHeroData()
    })

    return {
      heroData
    }
  }
}
</script>
