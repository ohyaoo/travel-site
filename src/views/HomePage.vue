<template>
  <div>
    <HeroSection />
    <section class="container mx-auto px-4 py-12">
      <FilterSection />
      <h3 class="text-2xl font-bold mb-6">热门目的地</h3>
      <div v-if="store.loading" class="text-center py-12 text-text-secondary">加载中...</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DestinationCard
          v-for="d in store.filteredDestinations"
          :key="d.id"
          :destination="d"
        />
      </div>
      <div v-if="!store.loading && store.filteredDestinations.length===0" class="text-center text-text-secondary py-12">暂无匹配的目的地</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useDestinationStore } from '@/store/modules/destination'
import HeroSection from '@/components/home/HeroSection.vue'
import FilterSection from '@/components/home/FilterSection.vue'
import DestinationCard from '@/components/home/DestinationCard.vue'

const store = useDestinationStore()
onMounted(() => {
  if (!store.destinations.length) {
    store.fetchDestinations()
  }
})
</script>