<template>
  <section class="hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="overlay"></div>
    <div class="container">
      <h1>{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
      
      <div class="feature-card" v-if="featureTitle">
        <h3>{{ featureTitle }}</h3>
        <p>{{ featureDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: String,
    subtitle: String,
    backgroundImage: String,
    featureTitle: String,
    featureDescription: String
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
  text-align: center;
  color: white;
  margin-top: 80px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.container {
  position: relative;
  z-index: 1;
  width: 100%;
}

.feature-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
  color: #333;
}
</style>