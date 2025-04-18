<template>
    <section class="success-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="success-card text-center">
              <div class="success-icon mb-4">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="40" fill="#4CAF50" />
                  <path d="M32 45.3L24.7 38l-2.3 2.3L32 50l24-24-2.3-2.3z" fill="white" />
                </svg>
              </div>
              
              <h2 class="display-6 fw-bold">Payment Successful!</h2>
              <p class="lead mb-4">Thank you for subscribing to our {{ subscription.planName }} plan.</p>
              
              <div class="subscription-details mb-4">
                <h3>Subscription Details</h3>
                
                <div class="row mt-4">
                  <div class="col-md-6 text-md-end fw-bold">Plan:</div>
                  <div class="col-md-6 text-md-start">{{ subscription.planName }}</div>
                </div>
                
                <div class="row mt-2">
                  <div class="col-md-6 text-md-end fw-bold">Price:</div>
                  <div class="col-md-6 text-md-start">${{ subscription.price }} per month</div>
                </div>
                
                <div class="row mt-2">
                  <div class="col-md-6 text-md-end fw-bold">Duration:</div>
                  <div class="col-md-6 text-md-start">{{ subscription.duration }}</div>
                </div>
                
                <div class="row mt-2">
                  <div class="col-md-6 text-md-end fw-bold">Start Date:</div>
                  <div class="col-md-6 text-md-start">{{ formatDate(subscription.startDate) }}</div>
                </div>
                
                <div class="row mt-2">
                  <div class="col-md-6 text-md-end fw-bold">End Date:</div>
                  <div class="col-md-6 text-md-start">{{ formatDate(subscription.endDate) }}</div>
                </div>
              </div>
              
              <p class="mb-4">You will receive an email confirmation with your receipt and membership details shortly.</p>
              
              <button class="btn btn-home" @click="goHome">Return to Home</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PaymentSuccess',
    data() {
      return {
        sessionId: this.$route.params.sessionId,
        subscription: {
          planName: '',
          price: '',
          duration: '',
          startDate: '',
          endDate: ''
        }
      };
    },
    async mounted() {
      try {
        // Fetch subscription details
        const response = await axios.get(`http://localhost:3000/subscriptions?sessionId=${this.sessionId}`);
        if (response.data && response.data.length > 0) {
          this.subscription = response.data[0];
        }
      } catch (error) {
        console.error('Error fetching subscription details:', error);
      }
    },
    methods: {
      formatDate(dateString) {
        if (!dateString) return '';
        
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      },
      goHome() {
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .success-section {
    background-color: rgb(250, 250, 250) !important;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  
  .success-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 50px 30px;
  }
  
  .subscription-details {
    background-color: rgba(235, 60, 90, 0.05);
    border-radius: 8px;
    padding: 20px;
    margin: 30px 0;
  }
  
  .subscription-details h3 {
    color: #eb3c5a;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  .btn-home {
    background: linear-gradient(to right, #eb3c5a, #f67831);
    color: white;
    padding: 12px 30px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    transition: all 0.3s ease;
  }
  
  .btn-home:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(235, 60, 90, 0.3);
  }
  </style>