# KeepAlive 组件

`KeepAlive` 组件用于缓存组件实例，以减少组件的创建和销毁性能开销。这在某些场景下非常有用，例如数据列表、频繁从树中移除又创建的组件等。

## 基本用法

```jsx
import { KeepAlive } from 'vitarx'

export default function App() {
  const show = ref(true)
  return (
    <KeepAlive>
      {show.value ? <ComponentA /> : <ComponentB />}
    </KeepAlive>
  )
}
```

## 配置选项

- `children`：当前展示的组件，可以直接传入组件，也可以传入一个`VNode`对象（需确保其是组件节点，而不是普通的元素节点或片段节点）
- `include`?：需要保留状态的组件列表，当为空时将缓存所有组件
- `exclude`?：需要销毁状态的组件列表，优先级高于 include
- `max`?：最大缓存数量，如果小于1则不限制缓存数量，默认值为10
- `onlyKey`?：唯一键，同类型组件可以指定不同的onlyKey来维持不同的实例

## 最佳实践

1. **设置缓存组件白名单**：

```tsx
import { KeepAlive } from 'vitarx'

export default function App() {
  return (
    <div>
      <KeepAlive include={[ComponentA]}>
        {show.value ? ComponentA : ComponentB}
      </KeepAlive>
    </div>
  )
}
```

2. **设置排除缓存的组件**：

```jsx
import { KeepAlive } from 'vitarx'

export default function App() {
  return (
    <div>
      <KeepAlive exclude={[ComponentB]}>
       {show.value ? ComponentA : ComponentB}
      </KeepAlive>
    </div>
  )
}
```

3. **控制缓存数量**：

```tsx
import { KeepAlive,type WidgetType } from 'vitarx'

export default function App() {
  // 可以修改showWidget的值来切换展示组件
  const showWidget = ref<WidgetType>(ComponentA)
  return (
    <div>
      <KeepAlive max={5}>
        {showWidget.value}
      </KeepAlive>
    </div>
  )
}
```

4. **使用唯一键区分相同类型的组件**：

```tsx
import { KeepAlive } from 'vitarx'

export default function App() {
  // 可以修改showWidget的值来切换展示组件
  const showWidget = ref<WidgetType>(ComponentA)
  // 假设需要渲染多个相同类型的组件 ，则可以使用 onlyKey 来区分他们
  const onlyKey = ref('ComponentA-1')
  return (
    <div>
      <KeepAlive onlyKey={onlyKey.value}>
        {showWidget.value}
      </KeepAlive>
    </div>
  )
}
```

5. **性能优化建议**：
- 合理设置 `max` 值，避免缓存过多组件导致内存占用过高
- 使用 `include` 和 `exclude` 精确控制需要缓存的组件
- 避免在频繁更新的组件上使用 KeepAlive
- 在不需要组件时主动清理缓存
  ```tsx
  import { KeepAlive,refEl } from 'vitarx'
  export default function App() {
        // 可以修改showWidget的值来切换展示组件
    const showWidget = ref<WidgetType>(ComponentA)
    const keepAliveRef = refEl<KeepAlive>()
    const clearCache = () => {
      keepAliveRef.value?.cache.clear()
    }
    const removeCache = () => {
      // keepAliveRef.value?.cache 得到是一个Map对象，键是组件的构造函数
      // 通过组件构造函数可以删除指定的组件缓存
      keepAliveRef.value?.cache.delete(ComponentA)
      // 以上操作会删除 ComponentA 组件的所有缓存，不却分key

      // 删除 ComponentA 组件 且 key 是 ComponentA-1 的缓存
      // keepAliveRef.value?.cache.get(ComponentA)?.delete('ComponentA-1')

      // 删除 ComponentA 组件 没有key的缓存
      // keepAliveRef.value?.cache.get(ComponentA)?.delete(undefined)
    }
    return (
      <div>
        <KeepAlive ref={keepAliveRef}>
          {showWidget.value}
        </KeepAlive>
        <button onClick={clearCache}>清除缓存</button>
        <button onClick={removeCache}>移除ComponentA组件缓存</button>
      </div>
    )
  }
  ```