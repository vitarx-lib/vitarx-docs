---
navOrder: -10
---
# 介绍

## 什么是 Vitarx?

Vitarx（读音 /ˈviːtɑːrks/，中文谐音"维塔克"）是一个前端框架。
它以信号粒度的精确依赖追踪取代虚拟 DOM 差量比对，通过引擎级视图控制实现最小化更新，从而获得卓越的运行时性能。

与传统的虚拟 DOM 框架不同，Vitarx 不需要整棵树的 diff 比对——当响应式数据变化时，框架精确知道哪些视图节点需要更新，并直接操作对应的 DOM 节点，避免了不必要的计算和渲染开销。

## 核心特性

- **🚀 JSX 支持** — 使用熟悉的 JSX 语法构建界面，完整的 TypeScript 类型推导
- **⚡ 信号级精确更新** — 基于细粒度依赖追踪，数据变化时仅更新关联的 DOM 节点，无虚拟 DOM diff 开销
- **🔧 完整的响应式系统** — 提供 `ref`、`reactive`、`computed`、`watch`、`effectScope` 等丰富的响应式 API
- **🎯 函数组件 + 生命周期** — 简洁的函数组件模型，搭配 `onInit`、`onMounted`、`onDispose` 等生命周期钩子
- **📦 丰富的内置组件** — `For`、`Suspense`、`Lazy`、`Freeze`、`Transition`、`Teleport`、`Head` 等开箱即用
- **💉 依赖注入** — 应用级和组件级 `provide` / `inject`，轻松实现跨层级数据传递
- **🎯 指令系统** — 内置 `v-show`、`v-html`、`v-text` 指令，支持自定义指令扩展
- **🌐 SSR 支持** — 内置服务端渲染，支持 `renderToString`、`renderToStream` 和客户端水合
- **📘 TypeScript 优先** — 全量类型定义，开发体验友好

## 架构概览

Vitarx 采用分层架构设计，各层职责清晰、依赖单向：

```
┌─────────────────────────────────────────────┐
│                   vitarx                    │  ← 聚合包，统一导出
├────────────┬─────────────┬──────────────────┤
│runtime-dom │ runtime-ssr │                  │  ← 平台适配层
├────────────┴─────────────┼──────────────────┤
│        runtime-core      │     utils        │  ← 运行时核心 & 工具
├──────────────────────────┼──────────────────┤
│        responsive        │                  │  ← 响应式系统
└──────────────────────────┴──────────────────┘
```

| 包名                                                                                           | 说明                                                                 |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`vitarx`](https://github.com/vitarx-lib/core/tree/main/packages/vitarx)                     | 聚合包，统一导出所有子包 API                                                   |
| [`@vitarx/responsive`](https://github.com/vitarx-lib/core/tree/main/packages/responsive)     | 响应式核心 — `ref`、`reactive`、`computed`、`watch`、`effect`、`effectScope` |
| [`@vitarx/runtime-core`](https://github.com/vitarx-lib/core/tree/main/packages/runtime-core) | 运行时核心 — 组件系统、视图构建、生命周期、依赖注入、指令、内置组件                                |
| [`@vitarx/runtime-dom`](https://github.com/vitarx-lib/core/tree/main/packages/runtime-dom)   | 浏览器渲染 — DOM 渲染器、`Transition`、`Teleport`、`Head`、内置指令                |
| [`@vitarx/runtime-ssr`](https://github.com/vitarx-lib/core/tree/main/packages/runtime-ssr)   | 服务端渲染 — `renderToString`、`renderToStream`、客户端水合                    |
| [`@vitarx/utils`](https://github.com/vitarx-lib/core/tree/main/packages/utils)               | 工具函数 — 深拷贝、类型检测、日志、防抖/节流                                           |

## 与其他框架的区别

### 相比虚拟 DOM 框架（React、Vue）

传统虚拟 DOM 框架在状态更新时需要重新执行组件渲染函数生成新的虚拟 DOM 树，然后通过 diff 算法找出差异，最后批量更新 DOM。Vitarx 通过信号级的依赖追踪，在数据变化时直接定位到需要更新的 DOM 节点，跳过了 diff 比对的过程：

| 维度      | 虚拟 DOM 框架     | Vitarx  |
|---------|---------------|---------|
| 更新机制    | 组件级重渲染 + diff | 信号级精确更新 |
| 更新粒度    | 组件            | DOM 节点  |
| diff 开销 | 有             | 无       |

### 相比其他信号框架（Solid、Svelte）

Vitarx 同样采用‘信号’驱动的更新策略，但在 API 设计上更贴近 Vue 的响应式风格，提供了 `ref`、`reactive`、`computed` 等开发者熟悉的 API，降低了学习成本。同时，Vitarx 采用 JSX 作为模板语法，兼具灵活性与类型安全。

## 版权信息

本框架采用 [MIT](https://opensource.org/licenses/MIT) 开源协议，您可以在 [LICENSE](https://github.com/vitarx-lib/core/blob/main/LICENSE) 文件中查看完整的授权条款。

## 交流互动

- [交流QQ群-1](https://qm.qq.com/cgi-bin/qm/qr?k=2daHjQr-L5il1BaR-kg_X14TCQkBGTzp&jump_from=webapi&authKey=UuYORimg6o8o1vkmNEdx+GY50NSo2W1VsuB8Q8s2kLpxhdd4i1It8L7O2plEUhwD)

## 文档原则

使用直白的语言，**尽量**少介绍晦涩难懂的技术细节与底层概念；

写文档时要转变思维，以新手的角度去审视别人能不能看得懂；

每个功能模块必须要有一个完整示例，且示例代码要可读性高，不能以新手看不懂的形式编写示例！

## 下一步

- [快速开始](./quick-start.md) — 创建你的第一个 Vitarx 项目
- [响应式基础](./reactivity.md) — 深入了解 `ref`、`reactive`、`computed`
- [组件基础](./component.md) — 学习组件定义与生命周期
