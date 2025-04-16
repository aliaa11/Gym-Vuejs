<template>
    <section class="hero" style="backgroundImage: url('img/hero-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="text-center text-white mt-5">
            <h1 class="text-7xl font-bold mb-4" style="font-size: 82px;">Classes</h1>
          <p>
            <router-link to="/" style="text-decoration: none; color:white">Home</router-link> › Classes
          </p>
        </div>
      </div>
    </section>
   
    <RegistrationForm/>
    <FitnessSchedule/>
    <LastComponentinabout/>
  </template>
   
  <script>
import LastComponentinabout from './LastComponentinabout.vue';

import FitnessSchedule from './FitnessSchedule.vue';
import RegistrationForm from './RegistrationForm.vue';
  
    
  export default {
    name: 'BlogSection',
    components: {
      LastComponentinabout,
        FitnessSchedule,
        RegistrationForm
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