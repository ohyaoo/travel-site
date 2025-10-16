<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-4 py-6 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-primary-blue">
        Travel Site
      </router-link>
      <div class="space-x-6">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="text-text-primary hover:text-primary-blue transition-colors"
        >
          {{ item.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const menuItems = [
  { name: '首页', path: '/' },
  { name: '预订', path: '/booking' },
  { name: '关于我们', path: '/about' }
]
</script>