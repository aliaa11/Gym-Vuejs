<template>
  <section class="auth-section">
    <div class="container">
      <div class="auth-card">
        <div class="auth-form">
          <h2 class="auth-title">REGISTER NOW</h2>
          <p class="auth-subtitle">The First 7 Day Trial is Completely Free With The Teacher</p>

          <form @submit.prevent="handleSubmit">
            <div class="form-grid">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  class="form-input"
                  v-model="formData.firstName"
                  :class="{ 'input-error': fieldErrors.firstName }"
                >
                <span class="error-message" v-if="fieldErrors.firstName">{{ fieldErrors.firstName }}</span>
              </div>

              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  class="form-input"
                  v-model="formData.lastName"
                  :class="{ 'input-error': fieldErrors.lastName }"
                >
                <span class="error-message" v-if="fieldErrors.lastName">{{ fieldErrors.lastName }}</span>
              </div>

              <div class="form-group">
                <label for="email">Your email address</label>
                <input 
                  type="email" 
                  id="email" 
                  class="form-input"
                  v-model="formData.email"
                  :class="{ 'input-error': fieldErrors.email }"
                >
                <span class="error-message" v-if="fieldErrors.email">{{ fieldErrors.email }}</span>
              </div>

              <div class="form-group">
                <label for="mobile">Mobile No*</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  class="form-input"
                  v-model="formData.mobile"
                  :class="{ 'input-error': fieldErrors.mobile }"
                >
                <span class="error-message" v-if="fieldErrors.mobile">{{ fieldErrors.mobile }}</span>
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  class="form-input"
                  v-model="formData.password"
                  :class="{ 'input-error': fieldErrors.password }"
                >
                <span class="error-message" v-if="fieldErrors.password">{{ fieldErrors.password }}</span>
              </div>

              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  class="form-input"
                  v-model="formData.confirmPassword"
                  :class="{ 'input-error': fieldErrors.confirmPassword }"
                >
                <span class="error-message" v-if="fieldErrors.confirmPassword">{{ fieldErrors.confirmPassword }}</span>
              </div>
            </div>

            <button class="auth-button" :disabled="loading">
              {{ loading ? 'Processing...' : 'Get Started' }}
            </button>
            <p class="auth-link">
              Already have an account? <router-link to="/login">Login here</router-link>
            </p>
          </form>
        </div>
        <div class="auth-image">
          <img :src="image" alt="Register Now" class="auth-img">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  name: 'RegisterSection',
  props: {
    image: {
      type: String,
      required: true
    }
  },
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const formSubmitted = ref(false)
    return { authStore, router, formSubmitted }
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        wishlist: [],
      },
      fieldErrors: {},
      loading: false,
      alert: {
        show: false,
        type: 'danger',
        message: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      this.clearErrors()
      this.loading = true

      try {
        const { firstName, lastName, email, mobile, password, confirmPassword } = this.formData

       
        const requiredFields = ['firstName', 'lastName', 'email', 'mobile', 'password']
        requiredFields.forEach(field => {
          if (!this.formData[field]) {
            this.fieldErrors[field] = 'This field is required'
          }
        })

       
        if (email && !/^\S+@\S+\.\S+$/.test(email)) {
          this.fieldErrors.email = 'Enter a valid email address'
        }

        
        if (password && !this.isStrongPassword(password)) {
          this.fieldErrors.password =
            'Password must be at least 8 characters, include uppercase, lowercase, number and special character'
        }

       
        if (password !== confirmPassword) {
          this.fieldErrors.confirmPassword = 'Passwords do not match'
        }

        
        if (Object.keys(this.fieldErrors).length > 0) return

        
        const userData = { firstName, lastName, email, mobile, password }
        await this.authStore.register(userData)

        this.showAlert('Registration successful! Redirecting to login...', 'success')
        setTimeout(() => {
          this.router.push('/')
        }, 2000)
      } catch (error) {
        const errorMessage = error?.message || 'Registration failed. Please try again.'
        if (errorMessage.includes('Email already registered')) {
          this.fieldErrors.email = errorMessage
        } else {
          this.showAlert(errorMessage, 'danger')
        }
      } finally {
        this.loading = false
      }
    },
    isStrongPassword(password) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
      return regex.test(password)
    },
    clearErrors() {
      this.fieldErrors = {}
    },
    showAlert(message, type) {
      this.alert.message = message
      this.alert.type = type
      this.alert.show = true
      setTimeout(() => {
        this.alert.show = false
      }, 5000)
    }
  }
}
</script>


<style scoped>
.auth-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.auth-card {
  display: flex;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.auth-image {
  flex: 1;
}

.auth-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.auth-form {
  flex: 1;
  padding: 50px;
}

.auth-title {
  font-size: 36px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 700;
  text-align: center;
}

.auth-subtitle {
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

.input-error {
  border-color: #dc3545;
}

.error-message {
  color: #dc3545;
  font-size: 12px;
  margin-top: 5px;
  display: block;
}

.auth-button {
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

.auth-button:hover:not(:disabled) {
  background-color: #ff5252;
}

.auth-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.auth-link {
  color: #666;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}

.auth-link a {
  color: #ff6b6b;
  text-decoration: none;
}

@media (max-width: 768px) {
  .auth-card {
    flex-direction: column;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .auth-form {
    padding: 30px;
  }
}
</style>