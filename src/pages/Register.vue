<template>
    <RegisterSection 
      v-if="homeData.register"
      :image="homeData.register.image"
    />
</template>
<script>
import RegisterSection from '@/components/RegisterSection.vue';
export default {
    components: { RegisterSection },
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
    