<template>
  <div class="card flex flex-col">
    <div class="relative h-40 w-full rounded-lg overflow-hidden mb-4">
      <img :src="destination.images.main" :alt="destination.name" class="w-full h-full object-cover" />
      <div class="absolute top-2 left-2 space-x-2">
        <span v-for="tag in destination.tags.slice(0,2)" :key="tag" class="badge">{{ tag }}</span>
      </div>
      <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent h-1/2" />
    </div>
    <h3 class="text-lg font-semibold mb-1 line-clamp-1">{{ destination.name }}</h3>
    <p class="text-sm text-text-secondary mb-3 line-clamp-2">{{ destination.description }}</p>
    <div class="mt-auto flex items-center justify-between">
      <div class="text-primary-green font-bold">¥{{ destination.pricing.basePrice.toLocaleString() }} 起</div>
      <div class="text-sm text-amber-500">⭐ {{ destination.rating.average.toFixed(1) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Destination } from '@/types/destination'
defineProps<{ destination: Destination }>()
</script>