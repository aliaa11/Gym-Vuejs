<template>
    <section class="hero" style="backgroundImage: url('img/hero-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="text-center text-white mt-5">
          <h1 class="text-5xl font-bold mb-4">Classes</h1>
          <p>
            <router-link to="/" style="text-decoration: none; color:white;font-weight:bold;">Home</router-link> › Classes
          </p>
        </div>
      </div>
    </section>
   
    <ClassesGallery 
      v-if="homeData.classes"
      :classes="homeData.classes"
      :itemsPerPage="6"
    />
    <FitnessSchedule/>
    <LastComponentinabout/>
  </template>
   
  <script>
import LastComponentinabout from './LastComponentinabout.vue';

import FitnessSchedule from './FitnessSchedule.vue';
import ClassesGallery from './ClassesGallery.vue';
  
    
  export default {
    name: 'BlogSection',
    components: {
      LastComponentinabout,
        FitnessSchedule,
        ClassesGallery
    },
    props: {
      title: {
        type: String,
        default: 'Classes'
      },
      backgroundImage: {
        type: String,
        default: '/img/hero-bg.jpg'
      }
    },
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
  
  <style scoped>
  .hero {
    height: 60vh;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
    
  .container {
    position: relative;
    z-index: 1;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>