<template>
    <section class="hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="overlay"></div>
      <div class="container">
        <div class="text-center text-white">
          <h1 class="text-5xl font-bold mb-4">{{ title }}</h1>
          <p>
            <router-link to="/" style="text-decoration: none; color:white">Home</router-link> › About
          </p>
        </div>
      </div>
    </section>
  
    <div class="stats-section">
        <div class="stat-container">
          <h1 class="stat-number">98</h1>
          <p class="stat-label">PROGRAMS</p>
        </div>
        
        <div class="stat-container">
          <h1 class="stat-number">14</h1>
          <p class="stat-label">LOCATIONS</p>
        </div>
        
        <div class="stat-container">
          <h1 class="stat-number">50k+</h1>
          <p class="stat-label">MEMBERS</p>
        </div>
        
        <div class="stat-container">
          <h1 class="stat-number">34</h1>
          <p class="stat-label">COACHES</p>
        </div>
      </div>
  
      <!-- Award Section -->
       <div class="container">
      <div class="award-section">
        <div class="award-info">
          <h2 class="award-title">{{name}}</h2>
          <p class="award-description">
            {{description}}
          </p>
        </div>
        <div class="award-image">
            <img src="img/award.jpg" alt="Best Gym Award" class="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutHero',
    props: {
      title: {
        type: String,
        default: 'ABOUT'
      },
      backgroundImage: {
        type: String,
        required: true
      }
    },
    data() {
  return {
    name:"BEST GYM AWARD",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fermentum magna, 
      in finibus nisi. Sed eget volutpat magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus eu fermentum magna, in finibus nisi. Sed eget volutpat magna. Etiam rhoncus. Maecenas
      tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet. Etiam 
      rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper 
      libero sit amet.
    `
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
    text-align: center;
  }

  .about-us-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  /* Hero Section Styles */
  .hero-section {
    padding: 40px 0;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
  }
  
  .profile-container {
    text-align: right;
    padding-right: 20px;
  }
  
  .profile-name {
    font-size: 2rem;
    margin-bottom: 0;
    font-weight: bold;
  }
  
  .profile-title {
    color: #ff5e62;
    margin-top: 5px;
    font-size: 1.1rem;
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
  
  .certificate {
    border: 10px solid #ead7aa;
    padding: 40px;
    text-align: center;
    background-color: #fff;
  }
  
  .certificate h3 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .certificate p {
    font-size: 0.9rem;
    letter-spacing: 1px;
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
  </style>
  