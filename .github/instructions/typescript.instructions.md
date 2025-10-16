---
applyTo: '**/*.ts'
---
# TypeScript 项目编码规范

本规范适用于本仓库内所有 TypeScript / Vue 3 + Vite 代码。目标：一致性、可维护性、可读性、类型安全、可测试。

## 1. 基础约定
- 使用 **TypeScript 严格模式** (strict: true)；禁止通过修改 tsconfig 关闭核心类型检查。
- 所有新增源码文件使用 `.ts` / `.vue`，禁止新增 `.js` 除非为构建或配置文件。
- 禁止使用 `any`。若确实无法确定类型，使用 `unknown` 并在使用处做类型收窄。
- 不允许使用 `// @ts-ignore`。如需临时跳过，使用 `// @ts-expect-error` 并注明原因，修复后移除。
- 始终开启并处理 ESLint/TS 报错，0 未解决报错才可合并。

## 2. 目录与命名
- 目录采用功能域划分 (feature based)；通用基础模块放入 `src/utils`, `src/components/common`, `src/types`。
- 文件命名：
  - 组件：`PascalCase` (`DestinationCard.vue`)
  - 组合式函数 (composables)：`useXxx.ts` (`useDestinationFilter.ts`)
  - 工具/助手：`camelCase` (`formatPrice.ts`)
  - 类型定义：`*.d.ts` 或放 `src/types/` 中，文件名 `kebab-case` (`booking.ts`).
- 常量：全局常量使用 `UPPER_SNAKE_CASE`，局部常量使用 `camelCase`。

## 3. 代码风格
- 使用 Prettier + ESLint 自动格式化；制表 2 空格；LF 换行。
- 最大行宽建议 100–120 字符，超出时换行。
- 字符串统一使用单引号 `'`，模板内容需要插值时使用反引号 `` ` ``。
- 谨慎使用可选链与空值合并：当逻辑需要区分 `null` 与 `undefined` 时显式判断。
- 避免魔法数字/字符串，抽取成常量或枚举。

## 4. 类型与接口设计
- 优先使用 `interface` 描述对象结构；需要交叉/条件/内联推导时使用 `type`。
- 工具类型归档：公共复用放在 `src/types/utils.ts`。
- 不在运行时代码中滥用泛型；泛型参数 < 3 个；命名使用语义化，如 `TItem`, `TResult`，少用单字母。
- 对外导出的类型统一显式导出，禁止 `export default interface`。
- 避免在实现文件中导出不必要的内部类型。
- 使用枚举建议采用 `const enum` + 字面量联合 (`type Status = 'idle' | 'loading' | 'error' | 'success'`)；避免普通 `enum` 产生运行时代码。

## 5. 空值与错误处理
- 严格区分：`null` 表示“显式无”，`undefined` 多表示“尚未设置”。
- API 返回处理：对外部数据第一时间做 **schema 校验**（后期可接入 Zod / Valibot）。
- Promise 必须显式 `await`；禁止遗留未处理的异步。使用 `void someAsync()` 需注释说明。
- 错误边界：UI 层使用统一错误状态展示；日志使用可扩展封装 `logger`。

## 6. 函数与组件
- 单一职责：函数 < 50 行，超出拆分。
- 参数数量 ≥ 3 时使用对象参数，并为其定义类型。
- Vue 组件：
  - `<script setup lang="ts">`；类型推导优先。
  - Props 使用 `defineProps<{ ... }>()` 并加上 JSDoc 说明。
  - Emits 使用 `defineEmits<{ (e: 'submit', payload: FormData): void }>()`。
  - 避免在模板里写复杂表达式，抽取为 `computed`。
- 组合式函数：返回值对象属性有固定顺序：`state/reactive -> computed -> methods`。

## 7. 可读性与注释
- 使用 JSDoc：
  - 公共导出函数、类型、复杂逻辑前添加 `/** ... */`。
  - 说明参数、返回与边界情况。
- 注释关注“为什么”而非“做了什么”。
- TODO 语法：`// TODO(username): 描述`，并创建对应 Issue。

## 8. 性能与优化
- 避免不必要的 reactive：优先 `ref` 与 `computed`，对结构性对象用 `reactive`。
- 大列表使用虚拟滚动（后期引入），图片使用懒加载（`loading="lazy"`）。
- 仅在需要时引入第三方库，谨慎增加 bundle 体积。

## 9. 安全与健壮性
- 所有外部输入（URL 参数、表单、后端响应）进行验证与转义。
- 避免在模板中直接拼接 HTML；必要时使用 `v-html` 需严格可信来源。
- 秘钥放在环境变量，不写入源码库。

## 10. 测试策略
- 单元测试：工具函数、状态管理逻辑需覆盖核心分支。
- 组件测试：关键交互（过滤、搜索、表单提交）。
- 使用 `vitest` + `@vue/test-utils` (后续添加)；快照仅用于结构稳定组件。

## 11. 提交规范
- 提交信息格式：`<type>(scope): <subject>` 例如：`feat(booking): add price calculator`。
- type 枚举：`feat|fix|refactor|docs|chore|test|perf|style|build|ci|revert`。
- 每次提交保证构建、类型、lint 通过。

## 12. 依赖管理
- 锁定版本（不使用 caret ^ 对核心依赖）。
- 定期（每月）安全审计：`npm audit`。
- 移除未使用依赖，避免冗余。

## 13. 日志与调试
- 临时代码中的 `console.log` 在合并前清除；保留必要的 `console.error`。
- 建议封装 `logger` 支持级别与禁用开关。

## 14. 版本与发布
- 使用语义化版本：`major.minor.patch`。
- 变更日志（后续新增 CHANGELOG.md）。

## 15. 示例模版
```ts
/**
 * 计算折扣后的价格
 * @param price 原价 (单位: 分)
 * @param discount 折扣 0-1
 * @returns 折后价 (单位: 分)
 * @throws 当输入非法时抛出错误
 */
export function applyDiscount(price: number, discount: number): number {
  if (price < 0) throw new Error('price must be >= 0')
  if (discount < 0 || discount > 1) throw new Error('discount must be between 0 and 1')
  return Math.round(price * (1 - discount))
}
```

---
以上规范会随着项目发展迭代更新。新规范需在 PR 中讨论并达成共识后执行。