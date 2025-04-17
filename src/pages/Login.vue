<template>
    <LoginSection 
      v-if="homeData.register"
      :image="homeData.register.image"
    />
  </template>
  
  <script>
  import LoginSection from '@/components/LoginSection.vue'
  import { useHomeStore } from '@/stores/home'
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  
  export default {
    components: {
      LoginSection
    },
    setup() {
      const homeStore = useHomeStore()
      const { homeData } = storeToRefs(homeStore)
  
      onMounted(() => {
        if (Object.keys(homeData.value).length === 0) {
          homeStore.fetchHomeData()
        }
      })
  
      return {
        homeData
      }
    }
  }
  </script>