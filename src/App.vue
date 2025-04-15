<template>
  <div id="app">
    <Navbar :logo="'/img/logo.png'"/>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
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