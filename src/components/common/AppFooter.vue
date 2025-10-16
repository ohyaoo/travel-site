<template>
  <footer class="bg-bg-dark text-white py-8 mt-auto">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">关于我们</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-secondary-blue">公司简介</a></li>
            <li><a href="#" class="hover:text-secondary-blue">联系方式</a></li>
            <li><a href="#" class="hover:text-secondary-blue">加入我们</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">旅行服务</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-secondary-blue">旅游保险</a></li>
            <li><a href="#" class="hover:text-secondary-blue">签证服务</a></li>
            <li><a href="#" class="hover:text-secondary-blue">团队定制</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">帮助中心</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-secondary-blue">预订指南</a></li>
            <li><a href="#" class="hover:text-secondary-blue">常见问题</a></li>
            <li><a href="#" class="hover:text-secondary-blue">用户协议</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">关注我们</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-secondary-blue">微信</a></li>
            <li><a href="#" class="hover:text-secondary-blue">微博</a></li>
            <li><a href="#" class="hover:text-secondary-blue">抖音</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>&copy; {{ currentYear }} Travel Site. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>