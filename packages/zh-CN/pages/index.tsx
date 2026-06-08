import { builder, onHide, onShow, shallowRef } from 'vitarx'
import { RouterLink } from 'vitarx-router'
import './index.scss'

interface Feature {
  icon: string
  title: string
  description: string
}

const Hero = builder(() => {
  const copy = shallowRef(false)
  // Copy install command
  function copyInstall() {
    if (copy.value) return
    copy.value = true
    navigator.clipboard.writeText('npm install vitarx').finally(() => {
      setTimeout(() => {
        copy.value = false
      }, 2000)
    })
  }
  return (
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="dot"></span>
          Typescript &amp; Javascript
        </div>
        <h1>
          融合 <span class="gradient-text">JSX</span> 与<br />
          <span class="gradient-text">响应式</span> 的现代框架
        </h1>
        <p class="hero-desc">
          Vitarx 提供引擎级视图控制能力，精确依赖追踪避免不必要渲染， 完整 TypeScript
          支持，让前端开发更高效、更优雅。
        </p>
        <div class="hero-actions">
          <RouterLink to="/guide" class="btn btn-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            快速开始
          </RouterLink>
          <RouterLink
            to="https://github.com/vitarx-lib/core"
            target="_blank"
            class="btn btn-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
            </svg>
            GitHub
          </RouterLink>
        </div>
        <div class="hero-install">
          <span>$</span>
          <code>npm install vitarx</code>
          <button class="copy-btn" onClick={copyInstall} title="复制">
            <svg
              v-if={copy.value}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-success)"
              stroke-width="2"
              stroke-linecap="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <svg
              v-else
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2"></rect>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
            </svg>
          </button>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-value">6</div>
            <div class="stat-label">核心包</div>
          </div>
          <div class="stat">
            <div class="stat-value">100%</div>
            <div class="stat-label">TypeScript</div>
          </div>
          <div class="stat">
            <div class="stat-value">MIT</div>
            <div class="stat-label">开源协议</div>
          </div>
          <div class="stat">
            <div class="stat-value">SSR</div>
            <div class="stat-label">服务端渲染</div>
          </div>
        </div>
      </div>
    </section>
  )
})

const Features = builder(() => {
  const features: Feature[] = [
    {
      icon: '🚀',
      title: 'JSX 支持',
      description: '使用熟悉的 JSX 语法构建界面，完整类型推导支持，享受与 React 相似的开发体验。'
    },
    {
      icon: '🔧',
      title: '精细响应式系统',
      description:
        '提供 ref、reactive、computed、watch 等精细响应式 API，精确依赖追踪，避免不必要的渲染。'
    },
    {
      icon: '⚡️',
      title: '高性能更新',
      description: '引擎级视图控制能力，精确到节点级别的更新策略，极致性能表现。'
    },
    {
      icon: '🎯',
      title: '组件化开发',
      description: '函数组件 + 生命周期钩子，支持 For、Freeze 等高级视图控制组件。'
    },
    {
      icon: '💉',
      title: '依赖注入',
      description: '应用级和组件级 provide / inject，优雅地管理跨层级依赖关系。'
    },
    {
      icon: '📦',
      title: '丰富的内置组件',
      description: 'Suspense、Transition、Freeze、Lazy、Teleport 开箱即用，覆盖常见场景。'
    },
    {
      icon: '🎯',
      title: '指令系统',
      description: '内置 v-show、v-html、v-text，支持自定义指令扩展，灵活控制 DOM 行为。'
    },
    {
      icon: '📘',
      title: 'TypeScript 完整支持',
      description: '类型推导完整，开发体验友好，在编辑器中获得智能提示和类型检查。'
    }
  ]
  return (
    <section class="section" id="features">
      <div class="section-header fade-in">
        <span class="section-tag">Features</span>
        <h2 class="section-title">为现代前端而生</h2>
        <p class="section-desc">每一个特性都经过精心设计，让开发体验和运行性能达到最佳平衡。</p>
      </div>
      <div class="features-grid">
        {features.map((feature, index) => (
          <div key={index} class="feature-card fade-in">
            <div class="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
})

const Code = builder(() => {
  const counterCode = `<span class="kw">import</span> { <span class="fn">ref</span>, <span class="fn">computed</span>, <span class="fn">watch</span> } <span class="kw">from</span> <span class="str">'vitarx'</span>

<span class="kw">const</span> <span class="var">count</span> = <span class="fn">ref</span>(<span class="num">0</span>)
<span class="kw">const</span> <span class="var">doubled</span> = <span class="fn">computed</span>(() => <span class="var">count</span>.<span class="prop">value</span> * <span class="num">2</span>)

<span class="fn">watch</span>(<span class="var">count</span>, (<span class="var">newVal</span>, <span class="var">oldVal</span>) => {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`count: \${oldVal} → \${newVal}\`</span>)
})

<span class="kw">function</span> <span class="fn">increment</span>() {
  <span class="var">count</span>.<span class="prop">value</span>++
}`

  const appCode = `<span class="kw">import</span> { <span class="fn">createApp</span>, <span class="fn">ref</span> } <span class="kw">from</span> <span class="str">'vitarx'</span>

<span class="kw">function</span> <span class="fn">App</span>&#40;&#41; {
  <span class="kw">const</span> <span class="var">items</span> &#61; <span class="fn">ref</span>&#40;[
    { <span class="prop">id</span>: <span class="num">1</span>, <span class="prop">text</span>: <span class="str">'Learn Vitarx'</span> },
    { <span class="prop">id</span>: <span class="num">2</span>, <span class="prop">text</span>: <span class="str">'Build something'</span> },
  ]&#41;

  <span class="kw">return</span> &#40;
    <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="str">"app"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h1&gt;</span>Todo App<span class="tag">&lt;/h1&gt;</span>
      <span class="tag">&lt;For</span> <span class="attr">each</span>&#61;&#123;<span class="var">items</span>&#125; <span class="attr">key</span>=<span class="str">"id"</span><span class="tag">&gt;</span>
        &#123;&#40;<span class="var">item</span>&#41; =&gt; <span class="tag">&lt;li&gt;</span>&#123;<span class="var">item</span>.<span class="prop">text</span>&#125;<span class="tag">&lt;/li&gt;</span>&#125;
      <span class="tag">&lt;/For&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  &#41;
&#125;

<span class="fn">createApp</span>&#40;<span class="fn">App</span>&#41;.<span class="fn">mount</span>&#40;<span class="str">'#root'</span>&#41;`

  return (
    <section class="section" id="code">
      <div class="section-header fade-in">
        <span class="section-tag">Code</span>
        <h2 class="section-title">简洁而强大</h2>
        <p class="section-desc">用最少的代码实现最多的功能，感受 Vitarx 的开发效率。</p>
      </div>

      <div class="code-showcase fade-in">
        <div class="code-desc">
          <h3>响应式状态管理</h3>
          <p>使用 ref 和 reactive 创建响应式数据，computed 自动追踪依赖，watch 监听变化。</p>
          <ul>
            <li>ref / reactive 创建响应式数据</li>
            <li>computed 自动推导计算属性</li>
            <li>watch 精确监听数据变化</li>
            <li>完整 TypeScript 类型推导</li>
          </ul>
        </div>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="code-filename">counter.tsx</span>
          </div>
          <div class="code-body">
            <pre v-html={counterCode}></pre>
          </div>
        </div>
      </div>

      <div class="code-showcase fade-in" style={{ marginTop: '32px' }}>
        <div class="code-block">
          <div class="code-header">
            <div class="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="code-filename">App.tsx</span>
          </div>
          <div class="code-body">
            <pre v-html={appCode}></pre>
          </div>
        </div>
        <div class="code-desc">
          <h3>组件化开发</h3>
          <p>函数组件 + JSX 语法，配合 For、Suspense 等内置组件，轻松构建复杂 UI。</p>
          <ul>
            <li>函数组件，简洁直观</li>
            <li>For 组件高效列表渲染</li>
            <li>Suspense 异步数据加载</li>
            <li>createApp 快速启动应用</li>
          </ul>
        </div>
      </div>
    </section>
  )
})

/**
 * 站点首页组件
 */
export default function Home() {
  let observer: IntersectionObserver
  onShow(() => {
    // Fade-in on scroll
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
  })
  onHide(() => {
    if (observer) observer.disconnect()
  })
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Code />
      </main>
      <footer class="footer">
        <div class="footer-inner">
          <div class="footer-left">
            <span>Vitarx</span>
          </div>
          <div class="footer-center">
            <div class="footer-links">
              <a href="https://github.com/vitarx-lib/core" target="_blank">
                GitHub
              </a>
              <a href="https://github.com/vitarx-lib/core/issues" target="_blank">
                Issues
              </a>
              <a href="https://github.com/vitarx-lib/core/blob/main/CHANGELOG.md" target="_blank">
                更新日志
              </a>
              <a href="https://beian.miit.gov.cn/" target="_blank" class="footer-beian">
                黔ICP备2024032832号-2
              </a>
            </div>
          </div>
          <div class="footer-right">
            <div class="footer-copy">© 2024 - present Vitarx. MIT License.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
