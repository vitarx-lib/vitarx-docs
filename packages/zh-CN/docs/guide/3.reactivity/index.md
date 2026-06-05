# 深入响应式

本章节深入讲解 Vitarx 响应式系统的各个核心模块，帮助你理解不同响应式 API 的行为差异和适用场景。

## 章节内容

- [ref 详解](./1.ref.md) — 深入理解 ref 的各种变体（ValueRef、ShallowRef、GetterRef、PropertyRef）及工具函数
- [reactive 详解](./2.reactive.md) — 深入理解 reactive 的代理机制、集合类型支持和常见陷阱
- [readonly 详解](./3.readonly.md) — 使用 readonly 创建只读代理，保护数据不被意外修改
- [computed 详解](./4.computed.md) — 计算属性的懒计算机制、getter/setter 模式和脏标记原理
- [watch 详解](./5.watch.md) — watch 的四种重载、watchEffect 系列函数和调度时机
- [副作用与作用域](./6.effect-scope.md) — EffectScope 作用域管理、生命周期回调和 viewEffect
