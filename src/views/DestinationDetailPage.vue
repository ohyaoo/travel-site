<template>
  <div class="min-h-screen bg-bg-light">
    <div v-if="loading" class="container mx-auto px-4 py-12 text-center text-text-secondary">
      加载中...
    </div>
    <div v-else-if="!destination" class="container mx-auto px-4 py-12 text-center">
      <h2 class="text-2xl font-bold mb-4 text-text-primary">目的地不存在</h2>
      <router-link to="/" class="text-primary-blue hover:underline">返回首页</router-link>
    </div>
    <div v-else>
      <!-- Hero Image Section -->
      <div class="relative w-full h-96 overflow-hidden">
        <img
          :src="destination.images.main"
          :alt="destination.name"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div class="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in destination.tags"
              :key="tag"
              class="px-3 py-1 bg-primary-blue/80 text-white rounded-full text-sm font-medium"
            >
              {{ tag }}
            </span>
          </div>
          <h1 class="text-4xl font-bold text-white mb-2">{{ destination.name }}</h1>
          <p class="text-white/90 text-lg">
            {{ destination.location.city }}, {{ destination.location.country }}
          </p>
        </div>
      </div>

      <!-- Content Section -->
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Description -->
            <section class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold mb-4 text-text-primary">目的地介绍</h2>
              <p class="text-text-secondary leading-relaxed">{{ destination.description }}</p>
            </section>

            <!-- Features -->
            <section class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold mb-4 text-text-primary">特色亮点</h2>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li
                  v-for="feature in destination.features"
                  :key="feature"
                  class="flex items-center text-text-secondary"
                >
                  <span class="text-primary-green mr-2">✓</span>
                  {{ feature }}
                </li>
              </ul>
            </section>

            <!-- Location Info -->
            <section class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold mb-4 text-text-primary">位置信息</h2>
              <div class="space-y-2 text-text-secondary">
                <p><strong>国家:</strong> {{ destination.location.country }}</p>
                <p><strong>城市:</strong> {{ destination.location.city }}</p>
                <p>
                  <strong>坐标:</strong> {{ destination.location.coordinates.latitude.toFixed(4) }},
                  {{ destination.location.coordinates.longitude.toFixed(4) }}
                </p>
              </div>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <!-- Rating -->
              <div class="flex items-center justify-between mb-6">
                <div>
                  <div class="text-3xl font-bold text-primary-green">
                    {{ destination.rating.average.toFixed(1) }}
                  </div>
                  <div class="text-sm text-text-secondary">
                    基于 {{ destination.rating.count }} 条评价
                  </div>
                </div>
                <div class="text-4xl text-amber-500">⭐</div>
              </div>

              <!-- Price -->
              <div class="mb-6 pb-6 border-b border-gray-200">
                <div class="text-sm text-text-secondary mb-1">起始价格</div>
                <div class="text-3xl font-bold text-primary-blue">
                  {{ destination.pricing.currency === 'CNY' ? '¥' : '$' }}{{ destination.pricing.basePrice.toLocaleString() }}
                </div>
                <div class="text-sm text-text-secondary mt-1">每人</div>
              </div>

              <!-- Discounts -->
              <div v-if="destination.pricing.discounts && destination.pricing.discounts.length > 0" class="mb-6">
                <h3 class="text-lg font-semibold mb-3 text-text-primary">优惠活动</h3>
                <div
                  v-for="discount in destination.pricing.discounts"
                  :key="discount.type"
                  class="bg-primary-green/10 rounded-lg p-3 mb-2"
                >
                  <div class="text-sm font-medium text-primary-green">
                    {{ getDiscountLabel(discount.type) }}
                  </div>
                  <div class="text-xs text-text-secondary mt-1">
                    立减 ¥{{ discount.amount }}
                  </div>
                </div>
              </div>

              <!-- CTA Button -->
              <button
                class="w-full bg-primary-blue hover:bg-primary-blue/90 text-white font-semibold py-3 rounded-lg transition-colors"
                @click="handleBooking"
              >
                立即预订
              </button>

              <!-- Back Link -->
              <router-link
                to="/"
                class="block text-center mt-4 text-primary-blue hover:underline text-sm"
              >
                返回目的地列表
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDestinationStore } from '@/store/modules/destination'

const route = useRoute()
const router = useRouter()
const store = useDestinationStore()

const loading = ref(true)

const destination = computed(() => {
  const id = route.params.id as string
  return store.getDestinationById(id)
})

onMounted(async () => {
  if (!store.destinations.length) {
    await store.fetchDestinations()
  }
  loading.value = false
})

/**
 * 获取折扣类型的中文标签
 */
function getDiscountLabel(type: 'early_bird' | 'group' | 'seasonal'): string {
  const labels: Record<typeof type, string> = {
    early_bird: '早鸟优惠',
    group: '团购优惠',
    seasonal: '季节性优惠',
  }
  return labels[type]
}

/**
 * 处理预订按钮点击
 */
function handleBooking() {
  router.push({ name: 'booking', query: { destinationId: destination.value?.id } })
}
</script>
