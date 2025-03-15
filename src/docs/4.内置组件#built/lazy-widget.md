# LazyWidget 组件

`LazyWidget` 组件用于快捷的在JSX中直接使用懒加载功能。

## 基本用法

```jsx
import { LazyWidget } from 'vitarx'

export default function App() {
  const MyComponent = () => import('./MyComponent')
  return (
    <div>
      {/* 通过插槽传递要懒加载的组件模块 */}
      <LazyWidget>
        {MyComponent}
      </LazyWidget>
      {/* 通过children属性传递要懒加载的组件模块 */}
      <LazyWidget children={MyComponent} />
      {/* 以上两种写法效果相同 */}
    </div>
  )
}
```

## 配置选项

- `children`：懒加载的组件模块
- `injectProps`?：需要注入给懒加载组件的props
- `loading`?：加载中要显示的组件
- `onError`?：接管错误，可以返回一个新的虚拟节点供渲染

## 最佳实践

1. **大型组件懒加载**：

```tsx
import { LazyWidget } from 'vitarx'

export default function App() {
  return (
    <div>
      <LazyWidget loading={<div>加载中...</div>} onError={() => <div>加载失败</div>}>
        {/* 假设Home组件非常大 */}
        {() => import('./Home')}
      </LazyWidget>
    </div>
  )
}
```

2. **与 Suspense 配合使用**：

```tsx
import { Suspense, lazy } from 'vitarx'

// 注意：lazy 并不是 LazyWidget 组件，lazy是一个用于强制转换类型的函数，它可以让tsx识别懒加载组件
// 实际上 Vitarx 支持将 () => import('./Chart') 做为节点type，但tsx类型校验会失败，所以需要使用lazy进行强制转换
const Chart = lazy(() => import('./Chart'))

export default function Dashboard() {
  return (
    <div>
      {/* 在组件加载完成之前会展示fallback */}
      <Suspense fallback={<div>加载图表中...</div>}>
        <Chart />
      </Suspense>
      {/* 直接渲染，不呈现loading态 */}
      <Chart />
    </div>
  )
}
```

4. **优化建议**：
- 对大型组件进行代码分割
- 预加载关键路径上的组件