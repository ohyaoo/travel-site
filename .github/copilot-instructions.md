# 旅游网站产品需求文档 (PRD)

## 1. 项目概述

### 项目简介

创建一个现代化的旅游预订网站，为用户提供便捷的旅游目的地浏览和预订服务。网站采用响应式设计，以蓝色和绿色为主色调，突出自然和旅行主题。

### 目标用户分析

1. **年轻上班族 (25-40 岁)**

   - 特点：工作稳定，有消费能力
   - 需求：高品质旅行体验，注重性价比
   - 偏好：个性化行程，文化体验

2. **家庭出游群体**

   - 特点：追求安全舒适
   - 需求：全套旅行服务，灵活的行程安排
   - 偏好：亲子活动，便利设施

3. **休闲旅行者**
   - 特点：注重生活品质
   - 需求：特色目的地，深度体验
   - 偏好：主题游，深度游

## 2. 功能需求

### 2.1 首页功能

1. **Hero 区域**

   - 全屏响应式背景
   - 目的地轮播展示（3-5 张精选图片）
   - 醒目的搜索框
     - 目的地输入（支持智能提示）
     - 日期选择
     - 人数选择
     - 快速搜索按钮

2. **目的地展示区**

   - 筛选功能
     - 地区分类（亚洲、欧洲、美洲等）
     - 主题分类（海滩、徒步、美食等）
     - 价格区间
     - 旅行时长
   - 目的地卡片
     - 高清特色图片
     - 目的地名称
     - 简短描述
     - 起始价格
     - 用户评分
     - 收藏功能
     - "了解更多"按钮

3. **特色推荐区**
   - 热门目的地轮播
   - 季节性推荐
   - 特惠活动展示

### 2.2 预订页面功能

1. **预订表单**

   - 基础信息
     - 出发/返回日期
     - 成人/儿童人数
     - 房间类型及数量
   - 附加服务
     - 接送机服务
     - 导游服务
     - 餐食选择
     - 旅游保险

2. **价格计算模块**

   - 明细展示
     - 基础套餐价格
     - 附加服务费用
     - 保险费用
     - 税费说明
   - 优惠选项
     - 优惠码输入
     - 会员折扣
     - 早鸟优惠
   - 总价显示

3. **支付流程**
   - 联系人信息填写
   - 支付方式选择
   - 订单确认
   - 支付安全提示

## 3. 设计规范

### 3.1 色彩方案

\`\`\`css
/_ 主色调 _/
--primary-blue: #1E88E5; /_ 主要蓝色 _/
--primary-green: #43A047; /_ 主要绿色 _/
--secondary-blue: #64B5F6; /_ 次要蓝色 _/
--secondary-green: #81C784; /_ 次要绿色 _/

/_ 背景色 _/
--bg-light: #F5F9FF; /_ 浅色背景 _/
--bg-dark: #1A237E; /_ 深色背景 _/

/_ 文字颜色 _/
--text-primary: #2C3E50; /_ 主要文字 _/
--text-secondary: #607D8B; /_ 次要文字 _/
--text-light: #FFFFFF; /_ 浅色文字 _/
\`\`\`

### 3.2 响应式断点

\`\`\`css
/_ 响应式设计断点 _/
sm: '640px' /_ 手机设备 _/
md: '768px' /_ 平板设备 _/
lg: '1024px' /_ 小型笔记本 _/
xl: '1280px' /_ 大型笔记本 _/
2xl: '1536px' /_ 桌面显示器 _/
\`\`\`

### 3.3 字体规范

\`\`\`css
/_ 字体定义 _/
--font-primary: 'Inter', sans-serif; /_ 主要字体 _/
--font-secondary: 'Roboto', sans-serif; /_ 次要字体 _/

/_ 字体大小 _/
--text-xs: 0.75rem; /_ 12px _/
--text-sm: 0.875rem; /_ 14px _/
--text-base: 1rem; /_ 16px _/
--text-lg: 1.125rem; /_ 18px _/
--text-xl: 1.25rem; /_ 20px _/
--text-2xl: 1.5rem; /_ 24px _/
--text-3xl: 1.875rem; /_ 30px _/
--text-4xl: 2.25rem; /_ 36px _/
\`\`\`

## 4. 技术栈说明

### 4.1 核心技术

- **前端框架**: Vue 3

  - Composition API
  - TypeScript 5.x
  - Vite 4.x 构建工具

- **样式解决方案**:

  - Tailwind CSS 3.x
  - PostCSS
  - CSS Variables

- **状态管理**:

  - Pinia
  - Vuex 持久化

- **路由管理**:
  - Vue Router 4.x

### 4.2 第三方集成

- **UI 组件**:

  - HeadlessUI（无样式组件）
  - 自定义组件库

- **工具库**:

  - Axios（HTTP 请求）
  - Day.js（日期处理）
  - VeeValidate（表单验证）

- **图片资源**:
  - Unsplash API
  - Pexels API

### 4.3 开发规范

- ESLint
- Prettier
- TypeScript 强类型检查
- Git Flow 工作流

## 5. 数据模型

### 5.1 目的地模型

\`\`\`typescript
interface Destination {
id: string;
name: string;
description: string;
location: {
country: string;
city: string;
coordinates: {
latitude: number;
longitude: number;
};
};
images: {
main: string;
gallery: string[];
};
pricing: {
basePrice: number;
currency: string;
discounts?: {
type: 'early_bird' | 'group' | 'seasonal';
amount: number;
endDate: Date;
}[];
};
rating: {
average: number;
count: number;
};
tags: string[];
features: string[];
}
\`\`\`

### 5.2 预订表单模型

\`\`\`typescript
interface BookingForm {
tripDates: {
startDate: Date;
endDate: Date;
};
travelers: {
adults: number;
children: {
age: number;
count: number;
}[];
};
rooms: {
type: 'single' | 'double' | 'suite';
count: number;
}[];
additionalServices: {
id: string;
name: string;
price: number;
selected: boolean;
}[];
}
\`\`\`

## 6. 项目结构

\`\`\`
travel-site/
├── src/
│ ├── assets/
│ │ ├── images/
│ │ │ ├── icons/
│ │ │ ├── backgrounds/
│ │ │ └── destinations/
│ │ └── styles/
│ │ ├── base.css
│ │ ├── components.css
│ │ └── variables.css
│ ├── components/
│ │ ├── common/
│ │ │ ├── AppHeader.vue
│ │ │ ├── AppFooter.vue
│ │ │ ├── SearchBar.vue
│ │ │ └── LoadingSpinner.vue
│ │ ├── home/
│ │ │ ├── HeroSection.vue
│ │ │ ├── DestinationCard.vue
│ │ │ ├── FilterSection.vue
│ │ │ └── FeaturedDeals.vue
│ │ └── booking/
│ │ ├── BookingForm.vue
│ │ ├── TravelersInfo.vue
│ │ ├── PriceSummary.vue
│ │ └── PaymentSection.vue
│ ├── views/
│ │ ├── HomePage.vue
│ │ ├── BookingPage.vue
│ │ └── NotFound.vue
│ ├── router/
│ │ └── index.ts
│ ├── store/
│ │ ├── modules/
│ │ │ ├── user.ts
│ │ │ ├── booking.ts
│ │ │ └── destinations.ts
│ │ └── index.ts
│ ├── types/
│ │ ├── destination.ts
│ │ ├── booking.ts
│ │ └── user.ts
│ ├── utils/
│ │ ├── api.ts
│ │ ├── formatters.ts
│ │ └── validators.ts
│ ├── services/
│ │ ├── destinations.ts
│ │ ├── booking.ts
│ │ └── payment.ts
│ ├── constants/
│ │ ├── routes.ts
│ │ └── config.ts
│ └── App.vue
├── public/
│ ├── favicon.ico
│ └── index.html
├── tests/
│ ├── unit/
│ └── e2e/
├── .env
├── .env.development
├── .env.production
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
\`\`\`

## 7. 图片资源建议

### 7.1 Unsplash 推荐

- **风景摄影**: @danieljschwarz
- **建筑摄影**: @chriskaridis
- **自然风光**: @jakedeemed

### 7.2 Pexels 推荐

- Travel Destinations 集合
- Nature Landscapes 集合
- City Views 集合

### 7.3 图片规范

- Hero 区域: 1920x1080px
- 目的地卡片: 400x300px
- 图库缩略图: 200x200px
- 格式支持: WebP, JPEG
- 加载策略: 渐进式加载
- 响应式图片设置
