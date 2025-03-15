# Suspense 组件

`Suspense` 组件用于处理异步组件的加载状态，它可以在异步组件加载完成之前显示一个加载状态，并处理加载过程中可能出现的错误。

## 基本用法

```tsx
import { Suspense } from 'vitarx'

export default function App() {
  return (
    <Suspense 
      fallback={<div>加载中...</div>}
      onError={(error, info) => (
        <div>加载失败：{error.message}</div>
      )}
    >
      <AsyncComponent />
    </Suspense>
  )
}
```

## 配置选项

- `children`: 要渲染内容
- `fallback`?：加载状态组件，在异步组件加载完成之前显示
- `onError`?：错误处理函数，接收错误对象和错误信息作为参数
- `onShow`?: 所有异步组件加载完成后执行的回调函数

## 最佳实践

### **多层嵌套**

在复杂应用中，可以使用多层 Suspense 来优化不同区域的加载体验：

```tsx
import { Suspense } from 'vitarx'

export default function App() {
  return (
    <Suspense fallback={<AppLoader />}>
      <Layout>
        <Suspense fallback={<SidebarLoader />}>
          <Sidebar />
        </Suspense>
        <Suspense fallback={<MainContentLoader />}>
          <MainContent />
        </Suspense>
      </Layout>
    </Suspense>
  )
}
```

### **错误边界处理**

合理利用 `onError` 属性来处理加载失败的情况：

```tsx
import { Suspense } from 'vitarx'

function ErrorFallback({ error }) {
  return (
    <div>
      <p>加载失败：{error.message}</p>
    </div>
  )
}

export default function App() {
  return (
    <Suspense 
      fallback={<div>加载中...</div>}
      onError={(error, info) => (
        <ErrorFallback error={error}/>
      )}
    >
      <AsyncComponent />
    </Suspense>
  )
}
```

### **性能优化**

避免在 Suspense 中包含过多的异步组件，可能会影响整体加载性能。建议将大型异步组件拆分成更小的部分，使用多个 Suspense 包裹。
