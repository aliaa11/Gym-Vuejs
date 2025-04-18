<template>
    <section class="services-section">
        <div class="services-content">
          <div class="services-image" v-if="image">
            <img :src="image" alt="Fitness Services" class="feature-image">
          </div>
          
          <div class="services-grid">
            <div class="service-card" v-for="(service, index) in filteredServices" :key="index">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
            </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ServicesSection',
    props: {
      services: {
        type: Array,
        required: true
      }
    },
    computed: {
      // Filter out the image object from services
      filteredServices() {
        return this.services.filter(service => service.title);
      },
      // Find the image object in services
      image() {
        const imgService = this.services.find(service => service.image);
        return imgService ? imgService.image : null;
      }
    }
  }
  </script>
  
  <style scoped>
  .services-section {
    padding: 80px 0;
    background-color: #ffffff;
  }
  
  
  .services-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  
  .services-image {
    flex: 1;
    min-width: 200px;
  }
  
  .feature-image {
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .services-grid {
    flex: 1;
    min-width: 300px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  
  .service-card {
    background: #1a1919;
    padding: 40px 30px;
    height: 35.3vh;
    text-align: center;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .service-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #eb3c5a, #f67831);
    border-radius: 50%;
    color: white;
    font-size: 30px;
  }
  
  .service-title {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  .service-description {
    color: #bdbbbb;
    line-height: 1.6;
    font-size: 1rem;
  }
  
  </style>