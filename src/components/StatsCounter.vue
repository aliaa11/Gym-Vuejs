<template>
    <section class="stats-section">
      <div class="grid md:grid-cols-4 text-center text-white py-16 px-5 bg-gradient-to-r from-pink-500 to-orange-400">
        <div v-for="(item, index) in stats" :key="index">
          <h2 class="text-5xl font-bold">{{ item.value }}</h2>
          <p class="uppercase text-sm tracking-widest mt-2">{{ item.label }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'StatsCounter',
    data() {
      return {
        stats: [
          { value: '98', label: 'Programs' },
          { value: '14', label: 'Locations' },
          { value: '50k+', label: 'Members' },
          { value: '34', label: 'Coaches' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  