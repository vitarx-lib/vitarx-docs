# 响应式系统

Vitarx 的响应式系统基于信号（Signal）粒度的精确依赖追踪，提供创建、转换、监听响应式数据的完整 API。

- [核心](./1.core.md) — 创建响应式数据（ref、reactive、computed、readonly）
- [工具](./2.utilities.md) — 转换与判断（toRef、toValue、isRef、untrack 等）
- [监听器](./3.watch.md) — 监听数据变化（watch、watchEffect）
- [作用域](./4.effect-scope.md) — 管理副作用作用域（EffectScope）
- [调度](./5.scheduler.md) — 调度工具（nextTick）
