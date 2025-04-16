<template>
    <section class="register-section">
      <div class="container">
        <div class="register-card">
 
          <div class="register-form">
            <h2 class="register-title">REGISTER NOW</h2>
            <p class="register-subtitle">The First 7 Day Trial is Completely Free With The Teacher</p>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" class="form-input">
              </div>
              
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" class="form-input">
              </div>
              
              <div class="form-group">
                <label for="email">Your email address</label>
                <input type="email" id="email" class="form-input">
              </div>
              
              <div class="form-group">
                <label for="mobile">Mobile No*</label>
                <input type="tel" id="mobile" class="form-input">
              </div>
            </div>
            
            <button class="register-button" >Get Started</button>
          </div>
          <div class="register-image">
            <img :src="image" alt="Register Now" class="register-img">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'RegisterSection',
    props: {
      image: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .register-section {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .register-card {
    display: flex;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }
  
  .register-image {
    flex: 1;
  }
  
  .register-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .register-form {
    flex: 1;
    padding: 50px;
  }
  
  .register-title {
    font-size: 36px;
    color: #333;
    margin-bottom: 15px;
    font-weight: 700;
    text-align: center;
  }
  
  .register-subtitle {
    color: #666;
    text-align: center;
    margin-bottom: 30px;
    font-size: 16px;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    color: #555;
    font-size: 14px;
  }
  
  .form-input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #ff6b6b;
  }
  
  .register-button {
    display: block;
    width: 100%;
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
  }
  
  .register-button:hover {
    background-color: #ff5252;
  }
  
  @media (max-width: 768px) {
    .register-card {
      flex-direction: column;
    }
    
    .form-grid {
      grid-template-columns: 1fr;
    }
    
    .register-form {
      padding: 30px;
    }
  }
  </style>