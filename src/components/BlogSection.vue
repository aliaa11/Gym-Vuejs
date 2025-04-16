<template>
    <section class="hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="overlay"></div>
      <div class="container">
        <div class="text-center text-white mt-5">
          <h1 class="text-5xl font-bold mb-4">{{ title }}</h1>
          <p>
            <router-link to="/" style="text-decoration: none; color:white">Home</router-link> › Blog
          </p>
        </div>
      </div>
    </section>
  
    <BlogComponent/>
  </template>
   
  <script>
  import BlogComponent from '@/components/BlogComponent.vue'
    
  export default {
    name: 'BlogSection',
    components: {
      BlogComponent
    },
    props: {
      title: {
        type: String,
        default: 'Blog'
      },
      backgroundImage: {
        type: String,
        default: '/img/hero-bg.jpg'
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
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>