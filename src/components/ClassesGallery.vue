<template>
    <section class="classes-gallery">
      <div class="container">
        <h2 class="section-title">UNLIMITED CLASSES</h2>
        
        <div class="gallery-grid">
        <div 
          class="class-card" 
          v-for="(classItem, index) in paginatedClasses" 
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
        <div class="pagination" v-if="totalPages > 1">
          <button 
            @click="prevPage" 
            :disabled="currentPage === 1"
            class="pagination-btn"
          >
            &larr;
          </button>
          
          <span class="page-indicator">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          
          <button 
            @click="nextPage" 
            :disabled="currentPage === totalPages"
            class="pagination-btn"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/auth'
import WishlistButton from '@/components/WishlistButton.vue'

export default {
  name: 'ClassesGallery',
  components: {
    WishlistButton
  },
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
    props: {
      classes: {
        type: Array,
        required: true,
        validator: (value) => {
          return value.every(item => 
            item.className && 
            item.trainer && 
            item.image
          )
        }
      },
      itemsPerPage: {
        type: Number,
        default: 6
      }
    },
    data() {
      return {
        currentPage: 1
      }
    },
    computed: {
      totalPages() {
        return Math.ceil(this.classes.length / this.itemsPerPage)
      },
      paginatedClasses() {
        const start = (this.currentPage - 1) * this.itemsPerPage
        const end = start + this.itemsPerPage
        return this.classes.slice(start, end)
      }
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--
        }
      }
    }
  }
  </script>
  
  <style scoped>
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
  
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  }
  
  .pagination-btn {
    background: linear-gradient(to right, #eb3c5a, #f67831);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .pagination-btn:hover:not(:disabled) {
    transform: scale(1.1);
  }
  
  .page-indicator {
    font-size: 1.1rem;
    color: #666;
  }
  
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
    
    .pagination {
      gap: 10px;
    }
  }
  </style>