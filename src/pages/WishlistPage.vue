<template>
    <section class="classes-gallery">
      <div class="container">
        <h2 class="section-title">MY WISHLIST</h2>
        
        <div v-if="authStore.isAuthenticated">
          <div v-if="wishlist.length > 0" class="gallery-grid">
            <div 
              class="class-card" 
              v-for="(classItem, index) in wishlist" 
              :key="index"
            >
              <div class="class-image-container">
                <img 
                  :src="classItem.image" 
                  :alt="classItem.className" 
                  class="class-image"
                >
                <WishlistButton :classItem="classItem" />
                <div class="trainer-overlay">
                  <p class="trainer-name">{{ classItem.trainer }}</p>
                </div>
              </div>
              <h3 class="class-name">{{ classItem.className }}</h3>
            </div>
          </div>
          
          <div v-else class="empty-wishlist">
            <p>Your wishlist is empty</p>
            <router-link to="/classes" class="pagination-btn">
              View Classes
            </router-link>
          </div>
        </div>
        
        <div v-else class="login-prompt">
          <p>Please login to view your wishlist</p>
          <router-link to="/login" class="pagination-btn">
            Login
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/auth'
  import { computed } from 'vue'
  import WishlistButton from '@/components/WishlistButton.vue'
  
  export default {
    name: 'WishlistPage',
    components: {
      WishlistButton
    },
    setup() {
      const authStore = useAuthStore()
      const wishlist = computed(() => authStore.user?.wishlist || [])
      
      return { authStore, wishlist }
    }
  }
  </script>
  
  <style scoped>
  /* Reuse the same styles from ClassesGallery */
  .classes-gallery {
    padding: 80px 0;
    background-color: #f8f8f8;
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
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
  }
  
  .class-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .class-card:hover {
    transform: translateY(-5px);
  }
  
  .class-image-container {
    position: relative;
    height: 250px;
    overflow: hidden;
  }
  
  .class-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .class-card:hover .class-image {
    transform: scale(1.05);
  }
  
  .trainer-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    padding: 15px;
    color: white;
  }
  
  .trainer-name {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .class-name {
    padding: 20px;
    margin: 0;
    font-size: 1.3rem;
    color: #333;
    text-align: center;
  }
  
  /* Empty state and login prompt styles */
  .empty-wishlist, .login-prompt {
    text-align: center;
    padding: 50px 0;
  }
  
  .empty-wishlist p, .login-prompt p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #666;
  }
  
  .pagination-btn {
    background: linear-gradient(to right, #eb3c5a, #f67831);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
  }
  
  .pagination-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
    
    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .class-image-container {
      height: 200px;
    }
  }
  
  @media (max-width: 480px) {
    .classes-gallery {
      padding: 60px 0;
    }
    
    .gallery-grid {
      grid-template-columns: 1fr;
    }
    
    .empty-wishlist, .login-prompt {
      padding: 30px 0;
    }
  }
  </style>