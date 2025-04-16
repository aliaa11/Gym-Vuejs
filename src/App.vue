<template>
  <div id="app">
    <Navbar :logo="'/img/logo.png'"/>
    <main class="content">
      <router-view />
    </main>
    <AppFooter/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import AppFooter from './components/Footer.vue';
export default {
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>