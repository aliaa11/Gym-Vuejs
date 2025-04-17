<template>
    <div class="promo-section">
     
      <div class="promo-panels">
       
        <div class="promo-panel" :style="{ backgroundImage: `url(${promos.newMember.backgroundImage})` }">
          <div class="promo-content">
            <div class="promo-tag">{{ promos.newMember.tag }}</div>
            <h2 class="promo-title">{{ promos.newMember.title }}</h2>
            <p class="promo-description">{{ promos.newMember.description }}</p>
            <button class="promo-button" @click="goToSignUp">
              {{ promos.newMember.buttonText }}
            </button>
          </div>
        </div>
        
       
        <div class="promo-panel" :style="{ backgroundImage: `url(${promos.contact.backgroundImage})` }">
          <div class="promo-content">
            <div class="promo-tag">{{ promos.contact.tag }}</div>
            <h2 class="promo-title">{{ promos.contact.title }}</h2>
            <p class="promo-description">{{ promos.contact.description }}</p>
            <button class="promo-button" @click="goTocontact">
              {{ promos.contact.buttonText }}
            </button>
          </div>
        </div>
      </div>
      

    </div>
  </template>
  
  <script>
  export default {
    name: 'PromoSections',
    data() {
      return {
        promos: {
          newMember: {
            tag: 'NEW MEMBER',
            title: '7 days for free',
            description: 'Complete the training sessions with us, surely you will be happy',
            buttonText: 'Get Started',
            backgroundImage: '/img/footer-banner/footer-banner-1.jpg'
          },
          contact: {
            tag: 'CONTACT US',
            title: '09 746 204',
            description: 'If you trust us on your journey they dark sex does not disappoint you!',
            buttonText: 'Get Started',
            backgroundImage: '/img/footer-banner/footer-banner-2.jpg'
          }
        },
      }
    },
    methods: {
      goTocontact() {
        this.$router.push('/contact');
      },
      goToSignUp() {
        this.$router.push('/signUp');
      }
    }
  }
  </script>
  
  <style scoped>
  .promo-section {
    width: 100%;
  }
  
  .promo-panels {
    display: flex;
    flex-wrap: wrap;
  }
  
  .promo-panel {
    flex: 1 1 500px;
    min-height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  
  .promo-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  
  .promo-content {
    padding: 3rem;
    position: relative;
    z-index: 2;
    max-width: 600px;
  }
  
  .promo-tag {
    font-size: 1rem;
    font-weight: 500;
    color: #ff5e5e;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .promo-title {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1.5rem;
  }
  
  .promo-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  .promo-button {
    background-color: #ff5e5e;
    color: white;
    border: none;
    padding: .75rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    text-transform: uppercase;
  }
  
  .promo-button:hover {
    background-color: #ff3a3a;
  }
  
  
  
  @media (max-width: 992px) {
    .promo-title {
      font-size: 2.5rem;
    }
  }
  
  @media (max-width: 768px) {
    .promo-panel {
      min-height: 350px;
    }
    
    .promo-content {
      padding: 2rem;
    }
    
    .promo-title {
      font-size: 2rem;
    }
    
  }
  </style>