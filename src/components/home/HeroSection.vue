<template>
  <section class="relative h-[480px] md:h-[560px] flex items-center overflow-hidden">
    <div class="absolute inset-0">
      <img
        v-if="images.length"
        :src="images[current]"
        :alt="'hero-'+current"
        class="w-full h-full object-cover transition-opacity duration-700"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
    </div>
    <div class="relative z-10 container mx-auto px-4 text-white max-w-2xl">
      <h2 class="text-3xl md:text-5xl font-bold leading-tight mb-6">
        探索世界的每一个角落
      </h2>
      <p class="text-lg md:text-xl mb-8 text-white/90">从海岛度假到雪山冒险，发现属于你的完美旅程。</p>
      <div class="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
        <form @submit.prevent="onSearch" class="grid grid-cols-1 md:grid-cols-5 gap-3">
          <input v-model="keyword" type="text" placeholder="目的地" class="md:col-span-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-blue" />
          <input v-model="startDate" type="date" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-blue" />
            <input v-model="endDate" type="date" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-blue" />
          <select v-model="people" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-blue">
            <option value="1">1人</option>
            <option value="2">2人</option>
            <option value="3">3人</option>
            <option value="4">4人</option>
            <option value="5">5人+</option>
          </select>
          <button class="btn-primary w-full">搜索</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'https://images.unsplash.com/photo-1533105079780-92b9be482077'
]
const current = ref(0)
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    current.value = (current.value + 1) % images.length
  }, 5000)
})
onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})

const keyword = ref('')
const startDate = ref('')
const endDate = ref('')
const people = ref('2')

function onSearch() {
  // TODO: integrate with search logic
  console.log('search', { keyword: keyword.value, startDate: startDate.value, endDate: endDate.value, people: people.value })
}
</script>