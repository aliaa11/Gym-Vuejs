<template>
    <div class="expert-trainers">
      <h1 class="trainer-heading">EXPERT TRAINERS</h1>
      
      <div class="trainers-container">
        <div class="trainer-card" v-for="trainer in trainers" :key="trainer.id">
          <div class="trainer-image-container">
            <img :src="trainer.image" :alt="trainer.name" class="trainer-image">
            <div class="trainer-overlay">
              <div class="overlay-content">
                <p class="overlay-description">{{ trainer.description || 'Passionate fitness expert dedicated to helping clients achieve their goals.' }}</p>
                <div v-if="trainer.social" class="trainer-social">
                  <a v-for="(link, platform) in trainer.social" :key="platform" 
                     :href="link" class="social-icon" :title="platform">
                    <i :class="'fab fa-' + platform"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="trainer-info">
            <h2 class="trainer-name">{{trainer.name}}</h2>
            <p class="trainer-role">{{trainer.role}}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExpertTrainers',
    data() {
      return {
        trainers: [
          {
            id: 1,
            name: 'Patrick Cortez',
            role: 'Leader',
            image: '/img/trainer/trainer-1.jpg',
            social: null,
            social: {
              facebook: '#',
              instagram: '#',
              twitter: '#',
              pinterest: '#'
            }
          },
          {
            id: 2,
            name: 'Gregory Powers',
            role: 'Gym coach',
            image: '/img/trainer/trainer-2.jpg',
            description: 'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            social: {
              facebook: '#',
              instagram: '#',
              twitter: '#',
              pinterest: '#'
            }
          },
          {
            id: 3,
            name: 'Walter Wagner',
            role: 'Dance trainer',
            image: '/img/trainer/trainer-3.jpg',
            social: null,
            social: {
              facebook: '#',
              instagram: '#',
              twitter: '#',
              pinterest: '#'
            }
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
.expert-trainers {
  padding: 2rem 0;
  background-color: #fff;
  text-align: center;
}

.trainer-heading {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #222;
}

.trainers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.trainer-card {
  background-color: #f5f5f5;
  border-radius: 0;
  overflow: hidden;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  position: relative;
}

.trainer-card:hover {
  transform: translateY(-5px);
}

.trainer-image-container {
  width: 100%;
  height: 350px;
  overflow: hidden;
  position: relative;
}

.trainer-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.trainer-card:hover .trainer-image {
  transform: scale(1.05);
}


.trainer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.trainer-card:hover .trainer-overlay {
  opacity: 1;
}

.overlay-content {
  padding: 1.5rem;
  color: #fff;
  text-align: center;
}

.overlay-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.trainer-info {
  padding: 1.5rem;
  background-color: #fff;
  position: relative;
  z-index: 1;
}

.trainer-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #222;
}

.trainer-role {
  font-size: 1rem;
  color: #ff5e5e;
  margin: 0;
}

.trainer-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: #ff5e5e;
  transform: translateY(-3px);
}

@media (max-width: 992px) {
  .trainers-container {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .trainer-card {
    max-width: 320px;
  }
  
  .trainer-heading {
    font-size: 2rem;
  }
}
</style>