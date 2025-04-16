<template>
    <section class="trainers-gallery">
      <div class="container">
        <h2 class="section-title">EXPERT TRAINERS</h2>
        
        <div class="trainers-grid">
          <div 
            class="trainer-card" 
            v-for="(trainer, index) in trainers" 
            :key="index"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
          >
            <div class="trainer-image-container">
              <img 
                :src="trainer.image" 
                :alt="trainer.name" 
                class="trainer-image"
              >
              <div class="trainer-overlay" :class="{ 'active': hoveredIndex === index }">
                <h3 class="trainer-name">{{ trainer.name }}</h3>
                <p class="trainer-title">{{ trainer.title }}</p>
                <p class="trainer-bio">{{ trainer.bio }}</p>
                <p class="trainer-specialty">{{ trainer.specialty }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TrainersGallery',
    props: {
      trainers: {
        type: Array,
        required: true,
        validator: (value) => {
          return value.every(item => 
            item.name && 
            item.title && 
            item.image &&
            item.bio &&
            item.specialty
          )
        }
      }
    },
    data() {
      return {
        hoveredIndex: null
      }
    }
  }
  </script>
  
  <style scoped>
  .trainers-gallery {
    padding: 80px 0;
    background-color: #eeeeee;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 50px;
    position: relative;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #eb3c5a, #f67831);
  }
  
  .trainers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .trainer-card {
    position: relative;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .trainer-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .trainer-image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .trainer-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  .trainer-card:hover .trainer-image {
    transform: scale(1.1);
    filter: brightness(0.7);
  }
  
  .trainer-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(51, 51, 51, 0.8);
    color: white;
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.5s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .trainer-overlay.active {
    transform: translateY(0);
  }
  
  .trainer-name {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #f15d44;
  }
  
  .trainer-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  .trainer-bio {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .trainer-specialty {
    font-size: 0.9rem;
    font-style: italic;
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
    
    .trainers-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .trainer-card {
      height: 350px;
    }
  }
  
  @media (max-width: 480px) {
    .trainers-gallery {
      padding: 60px 0;
    }
    
    .trainers-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>