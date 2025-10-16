<template>
  <div class="bg-bg-light">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-blue to-primary-green text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
        <p class="text-xl md:text-2xl opacity-90">探索世界，创造美好回忆</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-text-primary mb-6 text-center">我们的使命</h2>
        <p class="text-lg text-text-secondary text-center leading-relaxed mb-8">
          Travel Site 致力于为每一位旅行者提供独特而难忘的旅行体验。
          我们相信，旅行不仅是到达目的地，更是探索、发现和成长的过程。
          通过精心策划的旅游线路和贴心的服务，我们帮助您创造珍贵的回忆。
        </p>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-text-primary mb-12 text-center">我们的价值观</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="value in values" :key="value.title" class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl text-white">{{ value.icon }}</span>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-2">{{ value.title }}</h3>
            <p class="text-text-secondary">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-text-primary mb-12 text-center">专业团队</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div v-for="member in team" :key="member.name" class="card text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-secondary-blue to-secondary-green rounded-full mx-auto mb-4 flex items-center justify-center">
            <span class="text-4xl text-white">{{ member.avatar }}</span>
          </div>
          <h3 class="text-lg font-bold text-text-primary mb-1">{{ member.name }}</h3>
          <p class="text-sm text-primary-blue mb-2">{{ member.role }}</p>
          <p class="text-text-secondary text-sm">{{ member.bio }}</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gradient-to-r from-primary-blue to-primary-green text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-lg opacity-90">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-text-primary mb-6">联系我们</h2>
        <p class="text-lg text-text-secondary mb-8">
          有任何问题或建议？我们很乐意听到您的声音。
        </p>
        <div class="space-y-4 text-text-secondary">
          <p>
            <span class="font-semibold">邮箱：</span>
            <a href="mailto:info@travelsite.com" class="text-primary-blue hover:text-secondary-blue">
              info@travelsite.com
            </a>
          </p>
          <p>
            <span class="font-semibold">电话：</span>
            <a href="tel:+861234567890" class="text-primary-blue hover:text-secondary-blue">
              +86 123 4567 890
            </a>
          </p>
          <p>
            <span class="font-semibold">地址：</span>
            北京市朝阳区旅游大厦 100号
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * AboutPage component - displays company information and mission
 */
const values = [
  {
    icon: '🌍',
    title: '专业服务',
    description: '多年行业经验，提供专业的旅行规划和咨询服务'
  },
  {
    icon: '💎',
    title: '品质保证',
    description: '精选优质目的地和服务供应商，确保您的旅行体验'
  },
  {
    icon: '❤️',
    title: '用心陪伴',
    description: '7×24小时客户服务，全程陪伴您的旅行之旅'
  }
]

const team = [
  {
    name: '张明',
    role: '创始人 & CEO',
    avatar: '👨',
    bio: '拥有15年旅游行业经验，致力于打造最佳旅行体验'
  },
  {
    name: '李娜',
    role: '首席运营官',
    avatar: '👩',
    bio: '专注于优化运营流程，确保服务质量'
  },
  {
    name: '王伟',
    role: '产品总监',
    avatar: '👨',
    bio: '热爱旅行，精心设计每一条旅游线路'
  }
]

const stats = [
  { value: '10+', label: '年经验' },
  { value: '50+', label: '目的地' },
  { value: '10k+', label: '满意客户' },
  { value: '98%', label: '好评率' }
]
</script>
