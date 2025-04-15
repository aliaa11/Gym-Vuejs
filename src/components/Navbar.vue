<template>
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <img :src="logo" alt="Gutlin Logo">
        </div>
        
        <ul class="nav-links">
          <li><router-link to="/" exact-active-class="active">Home</router-link></li>
          <li><router-link to="/about" active-class="active">About</router-link></li>
          <li><router-link to="/services" active-class="active">Services</router-link></li>
          <li><router-link to="/blog" active-class="active">Blog</router-link></li>
          <li><router-link to="/contact" active-class="active">Contact</router-link></li>
        </ul>
        
        <router-link to="/appointment" class="cta-button">
          Book Appointment
        </router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      logo: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    background: #fff;
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .logo img {
    height: 40px;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    gap: 30px;
    margin: 0;
    padding: 0;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
  }
  
  .nav-links a.active,
  .nav-links a:hover {
    color: #4CAF50;
  }
  
  .cta-button {
    background: #4CAF50;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s;
  }
  
  .cta-button:hover {
    background: #3e8e41;
  }
  </style>