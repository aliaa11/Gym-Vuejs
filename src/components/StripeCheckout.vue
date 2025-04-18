<template>
  <section class="checkout-section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center mb-5">
          <h2 class="display-5 fw-bold">CHECKOUT</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="checkout-card">
            <div class="checkout-header">
              <h3>{{ planName }} Plan</h3>
              <div class="checkout-price">
                <span class="price">${{ price }}</span>
                <span class="period">/ mo</span>
              </div>
              <p class="text-center mb-0">Duration: {{ duration }}</p>
            </div>
            
            <div class="checkout-body">
              <div v-if="errorMessage" class="alert alert-danger mb-4">
                {{ errorMessage }}
              </div>
              
              <form @submit.prevent="processPayment">
                <div class="mb-4">
                  <label for="name" class="form-label">Full Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    v-model="formData.name" 
                    placeholder="John Doe"
                    required
                  >
                  <small v-if="formErrors.name" class="text-danger">{{ formErrors.name }}</small>
                </div>
                
                <div class="mb-4">
                  <label for="email" class="form-label">Email Address</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="formData.email" 
                    placeholder="john@example.com"
                    required
                  >
                  <small v-if="formErrors.email" class="text-danger">{{ formErrors.email }}</small>
                </div>
                
                <div class="mb-4">
                  <label for="card" class="form-label">Card Information</label>
                  <input 
                    type="text" 
                    class="form-control mb-2" 
                    id="card" 
                    v-model="formData.card" 
                    placeholder="1234 1234 1234 1234"
                    @input="formatCardNumber"
                    maxlength="19"
                    required
                  >
                  <small v-if="formErrors.card" class="text-danger">{{ formErrors.card }}</small>
                  
                  <div class="row">
                    <div class="col-md-6 mb-2">
                      <input 
                        type="text" 
                        class="form-control" 
                        placeholder="MM/YY" 
                        v-model="formData.expiry"
                        @input="formatExpiry"
                        maxlength="5"
                        required
                      >
                      <small v-if="formErrors.expiry" class="text-danger">{{ formErrors.expiry }}</small>
                    </div>
                    <div class="col-md-6">
                      <input 
                        type="text" 
                        class="form-control" 
                        placeholder="CVC" 
                        v-model="formData.cvc"
                        @input="limitToNumbers"
                        maxlength="3"
                        required
                      >
                      <small v-if="formErrors.cvc" class="text-danger">{{ formErrors.cvc }}</small>
                    </div>
                  </div>
                </div>
                
                <div class="text-center">
                  <button 
                    type="submit" 
                    class="btn btn-checkout w-100"
                    :disabled="loading"
                  >
                    {{ loading ? 'Processing...' : `Pay $${price}` }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StripeCheckout',
  data() {
    return {
      sessionId: this.$route.params.sessionId || '',
      planName: this.$route.params.planName || 'Standard',
      price: this.$route.params.price || '19.99',
      duration: this.$route.params.duration || 'Monthly',
      loading: false,
      errorMessage: '',
      formErrors: {
        name: '',
        email: '',
        card: '',
        expiry: '',
        cvc: ''
      },
      formData: {
        name: '',
        email: '',
        card: '',
        expiry: '',
        cvc: ''
      }
    };
  },
  methods: {
    formatCardNumber(e) {
      // Remove non-digits
      let value = e.target.value.replace(/\D/g, '');
      
      // Add spaces every 4 digits
      let formattedValue = '';
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += ' ';
        }
        formattedValue += value[i];
      }
      
      this.formData.card = formattedValue;
    },
    
    formatExpiry(e) {
      // Remove non-digits and slash
      let value = e.target.value.replace(/[^\d/]/g, '');
      
      // Format as MM/YY
      if (value.length > 2 && !value.includes('/')) {
        value = value.substring(0, 2) + '/' + value.substring(2);
      }
      
      this.formData.expiry = value;
    },
    
    limitToNumbers(e) {
      // Remove non-digits
      this.formData.cvc = e.target.value.replace(/\D/g, '');
    },
    
    validateForm() {
      // Reset errors
      this.errorMessage = '';
      this.formErrors = {
        name: '',
        email: '',
        card: '',
        expiry: '',
        cvc: ''
      };
      
      let isValid = true;
      
      // Validate name
      if (!this.formData.name.trim()) {
        this.formErrors.name = 'Name is required';
        isValid = false;
      } else if (this.formData.name.length <= 3) {
        this.formErrors.name = 'Name must be longer than 3 characters';
        isValid = false;
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email.trim()) {
        this.formErrors.email = 'Email is required';
        isValid = false;
      } else if (!emailRegex.test(this.formData.email)) {
        this.formErrors.email = 'Please enter a valid email address';
        isValid = false;
      }
      
      // Validate card number
      const cardNumber = this.formData.card.replace(/\s/g, '');
      if (!cardNumber) {
        this.formErrors.card = 'Card number is required';
        isValid = false;
      } else if (cardNumber.length !== 16) {
        this.formErrors.card = 'Card number must be 16 digits';
        isValid = false;
      } else if (!/^\d+$/.test(cardNumber)) {
        this.formErrors.card = 'Card number must contain only digits';
        isValid = false;
      }
      
      // Validate expiry date
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!this.formData.expiry.trim()) {
        this.formErrors.expiry = 'Expiry date is required';
        isValid = false;
      } else if (!expiryRegex.test(this.formData.expiry)) {
        this.formErrors.expiry = 'Expiry date must be in MM/YY format';
        isValid = false;
      }
      
      // Validate CVC
      if (!this.formData.cvc.trim()) {
        this.formErrors.cvc = 'CVC is required';
        isValid = false;
      } else if (this.formData.cvc.length !== 3) {
        this.formErrors.cvc = 'CVC must be 3 digits';
        isValid = false;
      } else if (!/^\d+$/.test(this.formData.cvc)) {
        this.formErrors.cvc = 'CVC must contain only digits';
        isValid = false;
      }
      
      if (!isValid) {
        this.errorMessage = 'Please fill in all fields correctly';
      }
      
      return isValid;
    },
    
    async processPayment() {
      if (!this.validateForm()) {
        return;
      }
      
      this.loading = true;
      
      try {
        // Simulate payment processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Update session status
        await axios.patch(`http://localhost:3000/checkout-sessions/${this.sessionId}`, {
          status: 'completed',
          customer: {
            name: this.formData.name,
            email: this.formData.email
          }
        });
        
        // Create subscription record
        await axios.post('http://localhost:3000/subscriptions', {
          id: `sub_${Date.now()}`,
          sessionId: this.sessionId,
          planName: this.planName,
          price: this.price,
          duration: this.duration,
          status: 'active',
          customer: {
            name: this.formData.name,
            email: this.formData.email
          },
          startDate: new Date().toISOString(),
          endDate: this.calculateEndDate()
        });
        
        // Navigate to success page
        this.$router.push({
          name: 'PaymentSuccess', 
          params: { 
            sessionId: this.sessionId
          }
        });
      } catch (error) {
        console.error('Payment processing error:', error);
        this.errorMessage = 'Payment processing failed. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    
    calculateEndDate() {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      return date.toISOString();
    }
  }
}
</script>

<style scoped>
.checkout-section {
  background-color: rgb(250, 250, 250) !important;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.checkout-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.checkout-header {
  padding: 30px 20px;
  background: linear-gradient(to right, #eb3c5a, #f67831);
  color: white;
  text-align: center;
}

.checkout-header h3 {
  font-weight: 700;
  margin-bottom: 10px;
}

.checkout-price {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.checkout-price .period {
  font-size: 1rem;
  font-weight: 400;
}

.checkout-body {
  padding: 30px;
}

.form-control {
  padding: 12px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-control:focus {
  box-shadow: 0 0 0 3px rgba(235, 60, 90, 0.2);
  border-color: #eb3c5a;
}

.form-label {
  font-weight: 600;
  margin-bottom: 8px;
}

.btn-checkout {
  background: linear-gradient(to right, #eb3c5a, #f67831);
  color: white;
  padding: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  transition: all 0.3s ease;
}

.btn-checkout:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(235, 60, 90, 0.3);
}

.btn-checkout:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
}

.alert-danger {
  background-color: #fde8e8;
  color: #e53e3e;
  border: 1px solid #f8b4b4;
}

.text-danger {
  color: #e53e3e;
  font-size: 0.875rem;
  display: block;
  margin-top: 5px;
}
</style>