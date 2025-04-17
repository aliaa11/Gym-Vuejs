<template>
  <section class="hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="container">      
      <div class="feature-card" v-if="featureTitle">
        <h6>{{ title }}</h6>
        <h1 class="bmi-title">{{ featureTitle }}</h1>
        <p class="bmi-description">{{ featureDescription }}</p>
        <router-link to="/about" class="read-more-link">
          Read More <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      default: 'Default Title'
    },
    subtitle: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      required: true,
      validator: (value) => {
        return ['png', 'jpg', 'jpeg', 'svg'].some(ext => value.endsWith(`.${ext}`))
      }
    },
    featureTitle: {
      type: String,
      default: 'BMI CALCULATOR'
    },
    featureDescription: {
      type: String,
      default: 'Gutlin comes packed with the user-friendly BMI Calculator alongside which lists.'
    }
  }
}
</script>

<style scoped>
.hero {
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;
  color: white;
  margin-bottom:40px ;
}


.container {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
}


.feature-card h6
{
  color: #f15d44;
font-weight: bold;
}
.bmi-title {
  color: #ffffff;
  font-size: 4rem;
  font-weight: bold;
  
  margin-bottom: 15px;
}

.bmi-description {
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more-link {
  display: inline-block;
	background: #f67831;
  color: #ffffff;
  padding: 10px 30px;
	background: -webkit-gradient(linear, left top, right top, from(#eb3c5a), to(#f67831));
	background: -o-linear-gradient(left, #eb3c5a, #f67831);
	background: linear-gradient(to right, #eb3c5a, #f67831);  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.read-more-link:hover {
  color: #ffffff;
  transform: translateX(5px);
}

.read-more-link i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.read-more-link:hover i {
  transform: translateX(3px);
}
</style>