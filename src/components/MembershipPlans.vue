<template>
    <section class="membership-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mb-5">
            <h2 class="display-5 fw-bold">MEMBERSHIP PLANS</h2>
          </div>
        </div>
  
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row g-4">
              <!-- Basic Plan -->
              <div class="col-md-4" v-for="plan in plans" :key="plan.name">
                <div class="plan-card h-100">
                  <div class="plan-header">
                    <h3 class="plan-name">{{ plan.name }}</h3>
                  </div>
                  <div class="plan-body">
                    <div class="plan-price">
                      <span class="price">${{ plan.price }}</span>
                      <span class="period">/ mo</span>
                    </div>
                    <ul class="plan-features text-center">
                      <li><br>Duration:<br> <span class=" text-black fw-bold">{{ plan.duration }}</span></li>
                      <li>Personal trainer:<br><span class=" text-black fw-bold">{{ plan.trainer }}</span></li>
                      <li>Amount of people:<br><span class=" text-black fw-bold">{{ plan.people }}</span> </li>
                      <li>Number of visits: <br><span class=" text-black fw-bold">{{ plan.visits }}</span></li>
                    </ul>
                  </div>
                  <div class="plan-footer">
                    <button class="btn btn-start w-100" @click="selectPlan(plan)">
                      Start Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'MembershipPlans',
    props: {
      plans: {
        type: Array,
        default: () => [
          {
            name: 'BASIC',
            price: '17',
            duration: '12 months',
            trainer: '00 person',
            people: '01 person',
            visits: 'Unlimited'
          },
          {
            name: 'STANDARD',
            price: '57',
            duration: '12 months',
            trainer: '01 person',
            people: '01 person',
            visits: 'Unlimited'
          },
          {
            name: 'PREMIUM',
            price: '98',
            duration: '12 months',
            trainer: '01 person',
            people: '01 person',
            visits: 'Unlimited'
          }
        ]
      }
    },
    methods: {
      selectPlan(plan) {
        this.$emit('plan-selected', plan);
      }
    }
  }
  </script>
  
  <style scoped>
  .membership-section {
    background-color: rgb(250, 250, 250) !important;
  }
  
  .plan-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .plan-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .plan-header {
    padding: 30px 20px;
    text-align: center;
    background: linear-gradient(to right, #eb3c5a, #f67831);
    color: white;
  }
  
  .plan-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 5px;
  }
  
  .plan-price {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }
  .plan-price .price
  {
    color: #eb3c5a;
    font-weight: bold;
  }
  .plan-price .period {
    font-size: 1rem;
    font-weight: 400;
  }
  
  .plan-body {
    padding: 30px 20px;
    flex-grow: 1;
  }
  
  .plan-features {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .plan-features li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .plan-footer {
    padding: 20px;
  }
  
  .btn-start {
    border:#eb3c5a 2px solid;
    padding: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .btn-start:hover {
    transform: translateY(-3px);
    background: linear-gradient(to right, #eb3c5a, #f67831);
    box-shadow: 0 5px 15px rgba(235, 60, 90, 0.3);
    color: #f8f9fa;
  }
  
  @media (max-width: 767.98px) {
    .plan-card {
      margin-bottom: 30px;
    }
  }
  </style>