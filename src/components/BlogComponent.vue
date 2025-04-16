<template>
  <div class="blog-container">
    <div class="blog-grid">
      <div v-for="(post, index) in blogPosts" :key="index" class="blog-item">
        <div class="blog-image">
          <img :src="post.image" :alt="post.title" />
        </div>
        <div class="blog-info">
          <div class="blog-date">{{ post.date }}</div>
          <div class="blog-title">{{ post.title }}</div>
          <h2 class="blog-content">{{ post.content }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'BlogComponent',
  data() {
    return {
      blogPosts: []
    }
  },
  created() {
    this.fetchBlogData()
  },
  methods: {
    async fetchBlogData() {
      try {
        // Fetch data from the API
        const response = await fetch('http://localhost:3000/blog')
        const data = await response.json()
        
        // Check if data is an array or has a blog property
        if (Array.isArray(data)) {
          this.blogPosts = data
        } else if (data && Array.isArray(data.blog)) {
          this.blogPosts = data.blog
        } else {
          // If it's just a single object, wrap it in an array
          this.blogPosts = [data]
        }
        
        console.log('Blog data fetched:', this.blogPosts)
      } catch (error) {
        console.error('Error fetching blog data:', error)
      }
    }
  }
}
</script>
  
<style scoped>
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
  
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}
  
.blog-item {
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}
  
.blog-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
  
.blog-image {
  height: 200px;
  overflow: hidden;
}
  
.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
  
.blog-item:hover .blog-image img {
  transform: scale(1.05);
}
  
.blog-info {
  padding: 15px;
}
  
.blog-date {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}
  
.blog-title {
  color: #ff5722;
  font-weight: bold;
  margin-bottom: 10px;
}
  
.blog-content {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
}
</style>