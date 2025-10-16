<template>
  <div class="bg-white rounded-xl shadow p-4 mb-8 grid gap-4 md:grid-cols-4">
    <select v-model="region" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-blue">
      <option value="">地区(全部)</option>
      <option value="日本">日本</option>
      <option value="印度尼西亚">印度尼西亚</option>
    </select>
    <select v-model="theme" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-blue">
      <option value="">主题(全部)</option>
      <option value="海滩">海滩</option>
      <option value="文化">文化</option>
      <option value="滑雪">滑雪</option>
    </select>
    <select v-model="price" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-blue">
      <option value="">价格(全部)</option>
      <option value="0-4000">0-4000</option>
      <option value="4000-5000">4000-5000</option>
      <option value="5000-10000">5000-10000</option>
    </select>
    <div class="flex space-x-2">
      <button class="btn-secondary w-full" @click="apply">应用</button>
      <button class="w-full border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-colors" @click="reset">重置</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDestinationStore } from '@/store/modules/destination'

const store = useDestinationStore()
const region = ref('')
const theme = ref('')
const price = ref('')

function apply() {
  store.setFilter('region', region.value)
  store.setFilter('theme', theme.value)
  if (price.value) {
    const [min, max] = price.value.split('-').map(Number)
    store.setFilter('priceRange', [min, max])
  } else {
    store.setFilter('priceRange', null)
  }
}
function reset() {
  region.value = ''
  theme.value = ''
  price.value = ''
  store.clearFilters()
}
</script>