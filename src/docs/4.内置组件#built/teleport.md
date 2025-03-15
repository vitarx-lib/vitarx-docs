# Teleport 组件

`Teleport` 组件允许将子组件渲染到 DOM 树的任何位置，常用于实现模态框、提示框等需要脱离当前组件层级的场景。

## 基本用法

```tsx
import { Teleport } from 'vitarx'

export default function App() {
  return (
    <div>
      <Teleport to="#modal-root">
        <Modal>
          <h1>这是一个模态框</h1>
          <p>这个内容会被渲染到 #modal-root 元素中</p>
        </Modal>
      </Teleport>
    </div>
  )
}
```

## 配置选项

- `to`：目标容器的选择器或 DOM 元素
- `disabled`：是否禁用传送功能

## 最佳实践

### **模态框实现**

  ```tsx
  import { Teleport,build } from 'vitarx'

  function Modal(props) {

    return build(()=>{
      const { children, isOpen, onClose } = props
      if (!isOpen) return null
      return <Teleport to="#modal-root">
        <div className="modal-overlay">
          <div className="modal-content">
            {children}
            <button onClick={onClose}>关闭</button>
          </div>
        </div>
      </Teleport>
    })
  }
  ```

### **条件传送**

  ```tsx
  import { Teleport } from 'vitarx'

  function ConditionalTeleport(props) {
    return (
      <Teleport 
        to="#portal-root"
        disabled={!props.condition}
      >
        {props.children}
      </Teleport>
    )
  }
  ```

## 实现原理

Teleport 组件利用 onBeforeMount 生命周期钩子返回目标容器实现传送，
也就是说你也可以在 onBeforeMount 中返回目标容器，从而实现传送，完全不需要使用 Teleport 组件。

```jsx
import { onBeforeMount, build } from 'vitarx'
function Modal(props) {
  // 在挂载前的钩子中返回目标容器
  onBeforeMount(()=>{
    return document.getElementById('modal-root')
  })
  return build(()=>{
    const { children, isOpen, onClose } = props
    if (!isOpen) return null
    return <div className="modal-overlay">
        <div className="modal-content">
          {children}
          <button onClick={onClose}>关闭</button>
        </div>
    </div>
  })
}
```
