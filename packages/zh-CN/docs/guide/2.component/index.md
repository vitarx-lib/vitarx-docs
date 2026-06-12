# 组件深入

组件是 Vitarx 应用的核心构建单元。在上一章中，你已经了解了如何定义一个基本的函数组件。本章将深入探讨组件的各项能力，包括属性传递、子节点处理、生命周期管理、依赖注入、组件引用、双向绑定、异步组件以及上下文 API。

## 本章内容

- [组件属性](./1.props.md) — 声明与使用 props、默认值、属性验证与透传
- [子节点与插槽](./2.children.md) — children 的使用、归一化子节点、具名插槽模式
- [依赖注入](./4.inject.md) — provide / inject 跨层级数据传递
- [组件引用](./5.component-ref.md) — useRef 获取元素与组件实例、defineExpose 暴露内部成员
- [双向绑定](./6.v-model.md) — useModel 实现属性的双向绑定
- [异步组件](./7.async-component.md) — 异步初始化与 Suspense 配合使用
- [组件上下文 API](./8.context-api.md) — useApp、useInstance、useView、useId 等上下文工具
