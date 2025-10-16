<template>
  <div class="min-h-screen bg-bg-light">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-primary-blue">Travel Site</h1>
        <div class="space-x-4">
          <router-link to="/" class="text-text-primary hover:text-primary-blue">首页</router-link>
          <router-link to="/booking" class="text-text-primary hover:text-primary-blue">预订</router-link>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Booking Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-6">预订信息</h2>
            
            <!-- Travel Details -->
            <div class="space-y-4 mb-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1">出发日期</label>
                  <input
                    type="date"
                    class="w-full p-2 border rounded focus:outline-none focus:border-primary-blue"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">返回日期</label>
                  <input
                    type="date"
                    class="w-full p-2 border rounded focus:outline-none focus:border-primary-blue"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1">成人数量</label>
                  <input
                    type="number"
                    min="1"
                    class="w-full p-2 border rounded focus:outline-none focus:border-primary-blue"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">儿童数量</label>
                  <input
                    type="number"
                    min="0"
                    class="w-full p-2 border rounded focus:outline-none focus:border-primary-blue"
                  />
                </div>
              </div>
            </div>

            <!-- Additional Services -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-4">附加服务</h3>
              <div class="space-y-2">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" class="form-checkbox text-primary-blue" />
                  <span>接送机服务</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="checkbox" class="form-checkbox text-primary-blue" />
                  <span>导游服务</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="checkbox" class="form-checkbox text-primary-blue" />
                  <span>旅游保险</span>
                </label>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-4">联系信息</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1">姓名</label>
                  <input
                    type="text"
                    class="w-full p-2 border rounded focus:outline-none focus:border-primary-blue"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">电子邮件</label>
                  <input
                    type="email"
                    class="w-full p-2 border rounded focus:outline-none focus:border-primary-blue"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">电话号码</label>
                  <input
                    type="tel"
                    class="w-full p-2 border rounded focus:outline-none focus:border-primary-blue"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Price Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h3 class="text-xl font-semibold mb-4">价格明细</h3>
            <div class="space-y-2 mb-4">
              <div class="flex justify-between">
                <span>基础价格</span>
                <span>¥3,999</span>
              </div>
              <div class="flex justify-between">
                <span>附加服务</span>
                <span>¥500</span>
              </div>
              <div class="flex justify-between">
                <span>税费</span>
                <span>¥300</span>
              </div>
              <div class="border-t pt-2 mt-2">
                <div class="flex justify-between font-bold">
                  <span>总计</span>
                  <span>¥4,799</span>
                </div>
              </div>
            </div>
            
            <button class="btn-primary w-full">确认预订</button>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-bg-dark text-white py-8 mt-12">
      <div class="container mx-auto px-4">
        <p class="text-center">&copy; 2025 Travel Site. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Component logic will be added here
</script>