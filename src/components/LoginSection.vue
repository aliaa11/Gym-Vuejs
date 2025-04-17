<template>
  <section class="auth-section">
    <div class="container">
      <div class="auth-card">
        <div class="auth-form">
          <h2 class="auth-title">LOGIN</h2>
          <p class="auth-subtitle">Welcome back! Please enter your credentials</p>
          
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                class="form-input"
                v-model="credentials.email"
                :class="{ 'input-error': fieldErrors.email }"
              >
              <span class="error-message" v-if="fieldErrors.email">{{ fieldErrors.email }}</span>
            </div>
            
            <div class="form-group">
              <label for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                class="form-input"
                v-model="credentials.password"
                :class="{ 'input-error': fieldErrors.password }"
              >
              <span class="error-message" v-if="fieldErrors.password">{{ fieldErrors.password }}</span>
            </div>
            
            <button class="auth-button" :disabled="loading">
              {{ loading ? 'Processing...' : 'Login' }}
            </button>
            <p class="auth-link">
              Don't have an account? <router-link to="/signUp">Register here</router-link>
            </p>
          </form>
        </div>
        <div class="auth-image">
          <img :src="image" alt="Login" class="auth-img">
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
  name: 'LoginSection',
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
      credentials: {
        email: '',
        password: ''
      },
      fieldErrors: {  
        email: '',
        password: ''
      },
      loading: false,
      alert: {
        show: false,
        type: 'danger',
        message: ''
      }
    }
  },
  methods: {
    async handleLogin() {
      this.formSubmitted = true
      this.clearErrors()
      this.loading = true

      try {
        // Basic validation
        if (!this.credentials.email) {
          this.fieldErrors.email = 'Email is required'
          return
        }

        if (!this.credentials.password) {
          this.fieldErrors.password = 'Password is required'
          return
        }

        const success = await this.authStore.login(this.credentials)
      if (success) {
        console.log('User data saved to localStorage:', localStorage.getItem('user'))
        this.showAlert('Login successful! Redirecting...', 'success')
        setTimeout(() => {
          this.router.push('/')
        }, 1500)
      }
      } catch (error) {
        if (error.message.includes('Email not found')) {
          this.fieldErrors.email = error.message
        } else if (error.message.includes('Incorrect password')) {
          this.fieldErrors.password = error.message
        } else {
          this.showAlert(error.message || 'Login failed. Please try again.', 'danger')
        }
      } finally {
        this.loading = false
      }
    },
    clearErrors() {
      this.fieldErrors = {
        email: '',
        password: ''
      }
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
/* Same styles as RegisterSection.vue */
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

.form-group {
  margin-bottom: 20px;
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
  
  .auth-form {
    padding: 30px;
  }
}
</style>