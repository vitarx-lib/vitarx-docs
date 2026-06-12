# API 参考

本章节提供 Vitarx 框架的完整 API 参考，按功能模块分类。

## 应用实例

创建和管理应用实例。

- [createApp()](./1.app.md#createapp) — 创建 Web 应用
- [createSSRApp()](./1.app.md#createssrapp) — 创建 SSR 应用
- [app.mount()](./1.app.md#appmount) — 挂载应用
- [app.unmount()](./1.app.md#appunmount) — 卸载应用
- [app.directive()](./1.app.md#appdirective) — 注册/获取指令
- [app.provide()](./1.app.md#appprovide) — 提供依赖
- [app.inject()](./1.app.md#appinject) — 注入依赖
- [app.use()](./1.app.md#appuse) — 安装插件
- [app.config](./1.app.md#appconfig) — 应用配置
- [app.version](./1.app.md#appversion) — 框架版本

## 生命周期钩子

组件生命周期管理。

- [onInit()](./2.lifecycle.md#oninit) — 初始化
- [onBeforeMount()](./2.lifecycle.md#onbeforemount) — 挂载前
- [onMounted()](./2.lifecycle.md#onmounted) — 挂载后
- [onShow()](./2.lifecycle.md#onshow) — 显示
- [onHide()](./2.lifecycle.md#onhide) — 隐藏
- [onDispose()](./2.lifecycle.md#ondispose) — 销毁
- [onError()](./2.lifecycle.md#onerror) — 错误捕获
- [onViewSwitch()](./2.lifecycle.md#onviewswitch) — 视图切换

## 响应式系统

### 核心

创建响应式数据。

- [ref()](./3.reactivity/1.core.md#ref) — 响应式引用
- [shallowRef()](./3.reactivity/1.core.md#shallowref) — 浅层响应式引用
- [reactive()](./3.reactivity/1.core.md#reactive) — 响应式对象
- [shallowReactive()](./3.reactivity/1.core.md#shallowreactive) — 浅层响应式对象
- [computed()](./3.reactivity/1.core.md#computed) — 计算属性
- [readonly()](./3.reactivity/1.core.md#readonly) — 只读代理
- [shallowReadonly()](./3.reactivity/1.core.md#shallowreadonly) — 浅层只读代理

### 工具

响应式数据转换与判断。

- [toRef()](./3.reactivity/2.utilities.md#toref) — 属性转 ref
- [toRefs()](./3.reactivity/2.utilities.md#torefs) — 对象转 refs
- [toValue()](./3.reactivity/2.utilities.md#tovalue) — 获取值
- [unref()](./3.reactivity/2.utilities.md#unref) — toValue 别名
- [toRaw()](./3.reactivity/2.utilities.md#toraw) — 获取原始对象
- [markRaw()](./3.reactivity/2.utilities.md#markraw) — 标记为原始
- [isRef()](./3.reactivity/2.utilities.md#isref) — 判断 ref
- [isReactive()](./3.reactivity/2.utilities.md#isreactive) — 判断 reactive
- [isReadonly()](./3.reactivity/2.utilities.md#isreadonly) — 判断 readonly
- [isComputed()](./3.reactivity/2.utilities.md#iscomputed) — 判断 computed
- [untrack()](./3.reactivity/2.utilities.md#untrack) — 无依赖执行

### 监听器

监听响应式数据变化。

- [watch()](./3.reactivity/3.watch.md#watch) — 监听器
- [watchEffect()](./3.reactivity/3.watch.md#watcheffect) — 副作用监听
- [watchPostEffect()](./3.reactivity/3.watch.md#watchposteffect) — DOM 更新后监听
- [watchSyncEffect()](./3.reactivity/3.watch.md#watchsynceffect) — 同步监听

### 作用域

副作用作用域管理。

- [EffectScope](./3.reactivity/4.effect-scope.md#effectscope) — 作用域类
- [onScopeDispose()](./3.reactivity/4.effect-scope.md#onscopedispose) — 作用域销毁回调
- [onScopePause()](./3.reactivity/4.effect-scope.md#onscopepause) — 作用域暂停回调
- [onScopeResume()](./3.reactivity/4.effect-scope.md#onscoperesume) — 作用域恢复回调

### 调度

- [nextTick()](./3.reactivity/5.scheduler.md#nexttick) — 下一次更新周期

## 组件 API

### Hooks

组件内使用的组合式函数。

- [useId()](./4.component/1.hooks.md#useid) — 生成唯一 ID
- [useModel()](./4.component/1.hooks.md#usemodel) — 双向绑定
- [useRef()](./4.component/1.hooks.md#useref) — DOM/组件引用
- [useApp()](./4.component/1.hooks.md#useapp) — 获取应用实例
- [useInstance()](./4.component/1.hooks.md#useinstance) — 获取组件实例
- [useView()](./4.component/1.hooks.md#useview) — 获取视图对象
- [useChildren()](./4.component/1.hooks.md#usechildren) — 获取子组件
- [useFastChild()](./4.component/1.hooks.md#usefastchild) — 获取首个子组件
- [useSuspense()](./4.component/1.hooks.md#usesuspense) — 获取 Suspense 上下文

### 定义

- [defineExpose()](./4.component/2.definition.md#defineexpose) — 暴露实例属性
- [defineValidate()](./4.component/2.definition.md#definevalidate) — 定义属性验证

### 依赖注入

- [provide()](./4.component/3.injection.md#provide) — 提供依赖
- [inject()](./4.component/3.injection.md#inject) — 注入依赖

## 内置组件

- [Suspense](./5.built-in/1.suspense.md) — 异步加载
- [For](./5.built-in/2.for.md) — 列表渲染
- [Freeze](./5.built-in/3.freeze.md) — 视图冻结
- [Lazy](./5.built-in/4.lazy.md) — 懒加载
- [Transition](./5.built-in/5.transition.md) — 过渡动画
- [Teleport](./5.built-in/6.teleport.md) — 传送门
- [Head](./5.built-in/7.head.md) — 头部管理

## 视图构建

- [h()](./6.view.md#h) — 创建视图节点
- [dynamic()](./6.view.md#dynamic) — 动态渲染
- [mergeProps()](./6.view.md#mergeprops) — 合并属性
- [Fragment](./6.view.md#fragment) — 片段容器
- [Dynamic](./6.view.md#dynamic-1) — 动态组件
- [Comment](./6.view.md#comment) — 注释节点
- [PlainText](./6.view.md#plaintext) — 纯文本节点

## 指令系统

- [withDirectives()](./7.directive.md#withdirectives) — 应用指令
- [defineDirective()](./7.directive.md#definedirective) — 定义指令

## 服务端渲染

- [createSSRApp()](./8.ssr.md#createssrapp) — 创建 SSR 应用
- [renderToString()](./8.ssr.md#rendertostring) — 渲染为字符串
- [renderToStream()](./8.ssr.md#rendertostream) — 流式渲染
- [hydrate()](./8.ssr.md#hydrate) — 水合
- [isSSR()](./8.ssr.md#isssr) — 判断 SSR 环境
- [isHydrating()](./8.ssr.md#ishydrating) — 判断水合中
- [useSSRContext()](./8.ssr.md#usessrcontext) — 获取 SSR 上下文
