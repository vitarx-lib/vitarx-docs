# 类型参考

本章节提供 Vitarx 框架的完整类型定义参考，帮助你在 TypeScript 项目中正确使用框架 API。

## 类型分类

### 响应式类型

- [Ref](./1.reactive.md#Ref) — 响应式引用类型
- [ShallowRef](./1.reactive.md#ShallowRef) — 浅层响应式引用类型
- [Reactive](./1.reactive.md#Reactive) — 响应式对象类型
- [ShallowReactive](./1.reactive.md#ShallowReactive) — 浅层响应式对象类型
- [ComputedRef](./1.reactive.md#ComputedRef) — 计算属性类型
- [WatchOptions](./1.reactive.md#WatchOptions) — 监听器选项
- [WatchCallback](./1.reactive.md#WatchCallback) — 监听器回调
- [FlushMode](./1.reactive.md#FlushMode) — 调度模式
- [EffectScopeOptions](./1.reactive.md#EffectScopeOptions) — 作用域选项

### 组件类型

- [Component](./2.component.md#Component) — 组件类型
- [ComponentProps](./2.component.md#ComponentProps) — 组件属性类型
- [ComponentPublicInstance](./2.component.md#ComponentPublicInstance) — 组件实例类型
- [ModelRef](./2.component.md#ModelRef) — 模型引用类型
- [Directive](./2.component.md#Directive) — 指令类型
- [DirectiveBinding](./2.component.md#DirectiveBinding) — 指令绑定类型
- [ViewBuilder](./2.component.md#ViewBuilder) — 视图构建器类型
- [MaybeRef](./2.component.md#MaybeRef) — 可能是 ref 的类型

### 视图类型

- [View](./3.view.md#View) — 视图类型
- [ElementView](./3.view.md#ElementView) — 元素视图类型
- [ComponentView](./3.view.md#ComponentView) — 组件视图类型
- [DynamicView](./3.view.md#DynamicView) — 动态视图类型
- [FragmentProps](./3.view.md#FragmentProps) — 片段属性
- [ViewDescriptor](./3.view.md#ViewDescriptor) — 视图描述符类型

### 应用类型

- [App](./4.app.md#App) — 应用实例类型
- [WebApp](./4.app.md#WebApp) — Web 应用实例类型
- [SSRApp](./4.app.md#SSRApp) — SSR 应用实例类型
- [AppConfig](./4.app.md#AppConfig) — 应用配置类型
- [AppPlugin](./4.app.md#AppPlugin) — 插件类型

### SSR 类型

- [SSRContext](./5.ssr.md#SSRContext) — SSR 上下文类型
- [Sink](./5.ssr.md#Sink) — 流式渲染接收器
- [StreamingSink](./5.ssr.md#StreamingSink) — 扩展流式接收器
