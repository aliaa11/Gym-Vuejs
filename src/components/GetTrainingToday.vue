<template>
    <section class="hero-section" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="overlay"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text ms-5">
            <h1>{{ title }}</h1>
            <p>
              {{ subtitle }}
              <br>
              {{ description }}
            </p>
            <button class="contact-btn" @click="handleContactClick">{{ buttonText }}</button>
          </div>
          <div class="hero-image">
            <img :src="personImage" alt="Fitness Trainer" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'GetTrainingToday',
    props: {
      title: {
        type: String,
        default: "GET TRAINING TODAY"
      },
      subtitle: {
        type: String,
        default: "Simply dummy text of the printing and typesetting industry."
      },
      description: {
        type: String,
        default: "Lorem Ipsum has been the industry's standard."
      },
      buttonText: {
        type: String,
        default: "Contact Now"
      },
      backgroundImage: {
        type: String,
        required: true
      },
      personImage: {
        type: String,
        default: "/img/banner-person.png"
      }
    },
    methods: {
      handleContactClick() {
        this.$emit('contact-clicked');
      }
    }
  }
  </script>
  
  <style scoped>
  .hero-section {
    position: relative;
    height: 600px;
    background-size: cover;
    background-position: center;
    color: white;
    display: flex;
    align-items: center;
    margin-top: 40px;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.384);
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
    position: absolute;
    object-fit: contain;
    bottom: 0;
  }
  
  .contact-btn {
    background: linear-gradient(to right, #eb3c5a, #f67831);
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;
  }
  
  .contact-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 991px) {
    .hero-text h1 {
      font-size: 2.8rem;
    }
  }
  
  @media (max-width: 768px) {
    .hero-section {
      height: auto;
      padding: 80px 0;
    }
    
    .hero-content {
      flex-direction: column;
      text-align: center;
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