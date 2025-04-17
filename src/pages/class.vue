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
import { onMounted } from 'vue'
import { useClassesStore } from '@/stores/classes'
import { storeToRefs } from 'pinia'

export default {
  name: 'Blog',
  components: {
    ClassSection
  },
  setup() {
    const classesStore = useClassesStore()
    const { heroData } = storeToRefs(classesStore)

    onMounted(() => {
      classesStore.fetchHeroData()
    })

    return {
      heroData
    }
  }
}
</script>
