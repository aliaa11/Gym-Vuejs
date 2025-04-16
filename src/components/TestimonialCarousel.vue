<template>
        <section class="testimonial-section py-5  d-none d-sm-flex" v-if="testimonials.length > 0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mb-5">
            <h2 class="display-5 fw-bold">SUCCESS STORIES</h2>

          </div>
        </div>
  
        <!-- Bootstrap Carousel -->
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div 
              class="carousel-item" 
              :class="{ 'active': index === 0 }" 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
            >
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="testimonial-card bg-white p-4 p-lg-5 ">
                    <div class=" align-items-center">
                      <!-- Text Content -->
                      <div class="mb-4 text-center mb-md-0">
                        <p class="lead mb-4">
                          "{{ testimonial.quote }}"
                        </p>
                      </div>
                      
                      <!-- Image -->
                      <div class="text-center">
                        <img 
                          :src="testimonial.image" 
                          :alt="testimonial.name" 
                          class="img-fluid rounded-circle shadow-sm"
                          style="width: 200px; height: 200px; object-fit: cover;"
                          @error="handleImageError"
                        >
                        <div class="client-info">
                          <h5 class="mb-1 fw-bold">{{ testimonial.name }}</h5>
                          <p class="text-muted mb-0">{{ testimonial.title }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Carousel Controls -->
          <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TestimonialCarousel',
    props: {
      testimonials: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      handleImageError(e) {
        e.target.src = '/img/placeholder-profile.jpg'
      }
    }
  }
  </script>
  
  <style scoped>
  .testimonial-section {
    background-image: url('/public//img//testimonial/testimonial-bg.png');
  background-size: cover;
  background-position: center;
  }
  
  .testimonial-card {
    position: relative;
  }
  
  .divider {
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #eb3c5a, #f67831);
    margin: 25px 0;
  }
  .lead
  {
    color: #000000;
    font-weight: bold;
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
    height: 40px;
    background-color: #eb3c5a;
    border-radius: 50%;
    top: 50%;
    opacity: 1;
  }
  
  .carousel-control-prev {
    left: -50px;
  }
  
  .carousel-control-next {
    right: -50px;
  }
  .client-info h5
  {
    color: #000000;
    font-weight: bold;
    margin-top: 20px;
  }
  .client-info p
  {
    color: #eb3c5a !important;
    font-weight: bold !important;
    margin-top: 20px;
  }
  @media (max-width: 767.98px) {
    .carousel-control-prev {
      left: 10px;
    }
    .carousel-control-next {
      right: 10px;
    }
    
    .testimonial-content {
      text-align: center;
    }
    
    .divider {
      margin: 25px auto;
    }
  }
  </style>