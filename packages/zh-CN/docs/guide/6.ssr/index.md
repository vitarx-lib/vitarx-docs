# 服务端渲染（SSR）

服务端渲染（Server-Side Rendering）是指在服务器上将组件渲染为 HTML 字符串，发送到浏览器后由客户端"水合"激活为可交互应用的技术。Vitarx 提供了完整的 SSR 支持，包括字符串渲染、流式渲染、客户端水合和上下文状态管理。

本章节将介绍如何在 Vitarx 中使用 SSR，从最基础的字符串渲染到高级的流式渲染。

## 目录

| 页面                           | 说明                                                                       |
| ------------------------------ | -------------------------------------------------------------------------- |
| [SSR 基础](./1.basic.md)       | 什么是 SSR、createSSRApp、renderToString、完整项目示例                     |
| [客户端水合](./2.hydration.md) | hydrate 函数、水合流程、降级策略、客户端激活                               |
| [SSR 上下文](./3.context.md)   | useSSRContext、isSSR、isHydrating、状态注入与恢复                          |
| [流式渲染](./4.stream.md)      | renderToStream、renderToReadableStream、renderToNodeStream、pipeToWritable |
