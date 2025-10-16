<template>
  <div class="min-h-screen flex flex-col bg-bg-light text-text-primary font-primary">
    <AppHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>

<style>
/* Global overrides if needed */
</style>
