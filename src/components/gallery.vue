<template>
    <div>
      <section class="gallery-header-section">
        <div class="container">
          <h2 class="gallery-title">GALLERY</h2>
          <div class="breadcrumb"><a href="/">Home</a> » Gallery</div>
        </div>
      </section>
  
      <div class="gallery-section">
        <div class="container">
          <div class="gallery-categories">
            <button
              v-for="category in categories"
              :key="category.filter"
              :class="{ active: activeFilter === category.filter }"
              @click="setFilter(category.filter)"
              class="category-btn"
            >
              {{ category.name }}
            </button>
          </div>
  
          <transition-group name="fade" tag="div" class="gallery-grid">
            <div
              v-for="(image, index) in filteredImages"
              :key="image.id"
              class="gallery-item"
              :class="image.size"
            >
              <img :src="image.src" :alt="image.alt" />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "GallerySection",
    data() {
      return {
        activeFilter: "all",
        categories: [
          { name: "ALL GALLERY", filter: "all" },
          { name: "FITNESS", filter: "fitness" },
          { name: "COACHING", filter: "coaching" },
          { name: "EVENT", filter: "event" },
          { name: "OTHER", filter: "other" },
        ],
        images: [],
      };
    },
    computed: {
      filteredImages() {
        if (this.activeFilter === "all") {
          return this.images;
        }
        return this.images.filter((image) =>
          image.categories.includes(this.activeFilter)
        );
      },
    },
    methods: {
      setFilter(filter) {
        this.activeFilter = filter;
      },
      async fetchGallery() {
        try {
          const response = await fetch("http://localhost:3000/gallery");
          const data = await response.json();
          this.images = data;
        } catch (error) {
          console.error("Failed to fetch gallery:", error);
        }
      },
    },
    mounted() {
      this.fetchGallery();
    },
  };
  </script>
  
  <style scoped>
  .gallery-header-section {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../assets/header.jpg");
    background-size: cover;
    background-position: center;
    padding: 60px 0;
    text-align: center;
    color: white;
    margin-bottom: 40px;
  }
  
  .gallery-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  .breadcrumb {
    font-size: 14px;
  }
  
  .breadcrumb a {
    color: white;
    text-decoration: none;
  }
  
  .breadcrumb a:hover {
    text-decoration: underline;
  }
  
  .gallery-section {
    padding: 0 0 60px;
  }
  
  .gallery-categories {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }
  
  .category-btn {
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 15px;
    padding: 5px 0;
    cursor: pointer;
    color: #777;
    position: relative;
  }
  
  .category-btn:hover {
    color: #f15d44;
  }
  
  .category-btn.active {
    color: #f15d44;
  }
  
  .gallery-grid {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }
  
  .gallery-item {
    padding: 10px;
    box-sizing: border-box;
  }
  
  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .large {
    width: 35%; 
   }
  
  .medium {
    width: 25%;
  }
  
  .small {
    width: 15%;
  }
  
  @media (max-width: 991px) {
    .large,
    .medium {
      width: 50%;
    }
  
    .small {
      width: 33.333%;
    }
  }
  
  @media (max-width: 767px) {
    .large,
    .medium,
    .small {
      width: 100%;
    }
  
    .category-btn {
      margin: 0 10px 10px;
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  </style>