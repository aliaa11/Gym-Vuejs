// RegistrationForm.vue
<template>
  <div class="registration-container">
    <div class="registration-content">
      <div class="registration-form">
        <h1 class="registration-title">REGISTER NOW</h1>
        <p class="registration-subtitle">The First 7 Day Trial Is Completely Free With The Teacher</p>
        
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              v-model="form.firstName"
              class="form-control"
            >
          </div>
          
          <div class="form-group">
            <label for="email">Your email address</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              class="form-control"
            >
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              v-model="form.lastName"
              class="form-control"
            >
          </div>
          
          <div class="form-group">
            <label for="mobile">Mobile No*</label>
            <input 
              type="tel" 
              id="mobile" 
              v-model="form.mobile"
              class="form-control"
            >
          </div>
        </div>
        
        <button @click="submitForm" class="submit-btn">Get Started</button>
      </div>
      
      <div class="registration-image">
        <img src="/img/register-pic.jpg" alt="Fitness class" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: ''
      }
    };
  },
  methods: {
    submitForm() {
      if (!this.form.firstName || !this.form.lastName || !this.form.email || !this.form.mobile) {
        alert('Please fill in all fields');
        return;
      }
      

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Submit form data
      console.log('Form submitted:', this.form);

      alert('Registration successful! We will contact you soon.');

      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: ''
      };
    }
  }
};
</script>

<style scoped>
.registration-container {
  width: 100%;
  padding: 60px 20px;
  background-color: #ffffff;
}

.registration-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.registration-form {
  flex: 1;
  padding: 40px;
}

.registration-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
}

.registration-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
}

.form-control {
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-control:focus {
  outline: none;
  border-color: #ff6b6b;
}

.submit-btn {
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, #f46b45, #eea849);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;
}

.submit-btn:hover {
  background: linear-gradient(to right, #f76b30, #ffad42);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(244, 107, 69, 0.3);
}

.registration-image {
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: none; 
}

.registration-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .registration-image {
    display: block;
  }
}

@media (max-width: 768px) {
  .registration-content {
    flex-direction: column;
  }
  
  .form-row {
    flex-direction: column;
    gap: 15px;
  }
}
</style>