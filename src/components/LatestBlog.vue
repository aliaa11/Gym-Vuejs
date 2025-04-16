<template>
    <section class="latest-blog-section">
      <div class="container">
        <h2 class="section-title">LATEST BLOG</h2>
        <div class="blog-grid">
          <div 
            v-for="(post, index) in blogPosts" 
            :key="index" 
            class="blog-card"
          >
            <div class="blog-image">
              <img :src="post.image" :alt="post.title" class="blog-img">
            </div>
            <div class="blog-content">
              <h3 class="blog-title"><span class="blog-span">February 17, 2019 </span>{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'LatestBlog',
    props: {
      blogPosts: {
        type: Array,
        required: true,
        validator: (value) => {
          return value.every(post => {
            return post.title && post.content && post.image
          })
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .latest-blog-section {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .section-title {
    text-align: center;
    font-size: 36px;
    color: #333;
    margin-bottom: 50px;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
  }
  
  .blog-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  .blog-image {
    height: 200px;
    overflow: hidden;
  }
  
  .blog-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .blog-card:hover .blog-img {
    transform: scale(1.05);
  }
  
  .blog-content {
    padding: 25px;
  }
  
  .blog-title {
    font-size: 17px;
    color: #ee3d10;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  .blog-excerpt {
    color: #000000;
    line-height: 1.6;
    font-size: 25px;
    font-weight: bold;
  }
  .blog-span
  {
    color: #979797;
    font-size: 15px;
  }
  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
  </style>