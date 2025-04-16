<template>
    
    <section class="hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="overlay"></div>
      <div class="container">
        <div class="text-center text-white mt-5">
          <h1 class="text-5xl font-bold mb-4">{{ title }}</h1>
          <p>
            <router-link to="/" style="text-decoration: none; color:white">Home</router-link> › About
          </p>
        </div>
      </div>
    </section>
    
   
    <StoryAboutUs />    
   
    <div class="stats-section">
      <div class="stat-container">
        <h1 class="stat-number">{{ stats.programs }}</h1>
        <p class="stat-label">PROGRAMS</p>
      </div>
      
      <div class="stat-container">
        <h1 class="stat-number">{{ stats.locations }}</h1>
        <p class="stat-label">LOCATIONS</p>
      </div>
      
      <div class="stat-container">
        <h1 class="stat-number">{{ stats.members }}</h1>
        <p class="stat-label">MEMBERS</p>
      </div>
      
      <div class="stat-container">
        <h1 class="stat-number">{{ stats.coaches }}</h1>
        <p class="stat-label">COACHES</p>
      </div>
    </div>
  
  
    <div class="container mx-auto px-4">
      <div class="award-section">
        <div class="award-info">
          <h2 class="award-title">{{ name }}</h2>
          <p class="award-description">{{ description }}</p>
        </div>
        <div class="award-image">
          <img 
            :src="awardImage" 
            alt="Best Gym Award" 
            class="rounded-lg shadow-lg w-full" 
          />
        </div>
      </div>
    </div>
    <section class="hero-section" :style="{ backgroundImage: `url(${backimage})` }">
        <div class="overlay"></div>
        <div class="container">
          <div class="hero-content">
            <div class="hero-text ms-5">
              <h1>GET TRAINING TODAY</h1>
              <p>
                Gimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard.
              </p>
              <button class="contact-btn" @click="handleContactClick">Contact Now</button>
            </div>
            <div class="hero-image">
              <img src="/img/banner-person.png" alt="Fitness Trainer" />
            </div>
          </div>
        </div>
      </section>

      <ExpertTrainer />
      <LastComponentinabout/>
  </template>
  
  <script>

import ExpertTrainer from './ExpertTrainer.vue';
import LastComponentinabout from './LastComponentinabout.vue';
import StoryAboutUs from './StoryAboutUs.vue';
  
  export default {
    name: 'AboutPage',
    components: {
      StoryAboutUs,
    ExpertTrainer,
    LastComponentinabout
    },
    props: {
      title: {
        type: String,
        default: 'ABOUT'
      },
      backgroundImage: {
        type: String,
        required: true
      },
      awardImage: {
        type: String,
        default: 'img/award.jpg'
      },
        backimage: {
            type: String,
            default: 'img/banner-bg.jpg'
        }
    },
    data() {
      return {
        name: "BEST GYM AWARD",
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fermentum magna, 
          in finibus nisi. Sed eget volutpat magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus eu fermentum magna, in finibus nisi. Sed eget volutpat magna. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet. Etiam 
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper 
          libero sit amet.
        `,
        stats: {
          programs: '98',
          locations: '14',
          members: '50k+',
          coaches: '34'
        },
        testimonials: [
          {
            name: 'Sarah Johnson',
            role: 'Member since 2020',
            text: 'This gym has completely transformed my fitness journey. The coaches are incredibly supportive and the community feels like family.'
          },
          {
            name: 'Michael Rodriguez',
            role: 'Member since 2019',
            text: 'I have tried many gyms over the years, but none compare to the program variety and personal attention I receive here.'
          },
          {
            name: 'Emily Chen',
            role: 'Member since 2021',
            text: 'The facilities are top-notch and always clean. The trainers create customized programs that have helped me reach goals I never thought possible.'
          }
        ]
      };
    },
    methods: {
    handleContactClick() {
      // Handle contact button click
      this.$emit('contact-clicked');
    }
  }
  };
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
  
  /* Profile Section Styles */
  .profile-section {
    padding: 40px 0;
    margin-bottom: 20px;
  }
  
  .profile-container {
    padding-right: 20px;
  }
  
  .profile-name {
    margin-bottom: 0;
  }
  
  .profile-title {
    margin-top: 5px;
  }
  
  /* Stats Section Styles */
  .stats-section {
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right, #ff5e62, #ff9966);
    color: white;
    padding: 40px;
    margin-bottom: 60px;
    text-align: center;
  }
  
  .stat-container {
    flex: 1;
    padding: 10px;
  }
  
  .stat-number {
    font-size: 4rem;
    margin: 0;
    font-weight: bold;
  }
  
  .stat-label {
    margin-top: 5px;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  
  /* Award Section Styles */
  .award-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 60px 0;
  }
  
  .award-info {
    flex: 1;
    padding-right: 30px;
  }
  
  .award-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .award-description {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .award-image {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    .stats-section,
    .award-section {
      flex-direction: column;
    }
    
    .award-info {
      padding-right: 0;
      margin-bottom: 30px;
    }
  }
  .hero-section {
    position: relative;
    height: 100vh;
    min-height: 600px;
    width: 100%;

    background-size: cover;
    background-position: center;
    color: white;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    z-index: 1;
  }
  
  .hero-content {
    display: flex;
    height: 100%;
    align-items: center;
  }
  
  .hero-text {
    width: 50%;
    padding-right: 30px;
  }
  
  .hero-text h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }
  
  .hero-text p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    opacity: 0.9;
  }
  
  .hero-image {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-image img {
    max-height: 90%;
    max-width: 100%;
    object-fit: contain;
  }
  
  .contact-btn {
    background-color: #ff5e62;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .contact-btn:hover {
    background-color: #ff4146;
  }
  
  @media (max-width: 991px) {
    .hero-text h1 {
      font-size: 2.8rem;
    }
  }
  
  @media (max-width: 768px) {
    .hero-content {
      flex-direction: column;
      text-align: center;
      padding-top: 60px;
    }
    
    .hero-text {
      width: 100%;
      padding-right: 0;
      margin-bottom: 30px;
    }
    
    .hero-image {
      width: 100%;
    }
    
    .hero-text h1 {
      font-size: 2.5rem;
    }
}
  </style>