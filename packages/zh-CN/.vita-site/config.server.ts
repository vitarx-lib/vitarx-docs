import { defaultTheme } from '@vita-site/theme-default/server'
import { defineConfig } from 'vita-site/server'
import { defineConfig as defineViteConfig } from 'vite'

export default defineConfig({
  title: 'Vitarx - 下一代前端框架',
  keywords:
    'Vitarx,JSX框架,响应式框架,Signal,信号驱动,前端框架,响应式系统,SSR,依赖追踪,精确更新,TypeScript,组件化',
  description:
    'Vitarx 是一个响应式驱动的前端框架。以信号粒度的精确依赖追踪取代虚拟 DOM 差量比对，通过引擎级视图控制实现最小化更新，内置 SSR、依赖注入与指令系统，提供完整的 TypeScript 支持。',
  injectHead: [`<link rel="icon" href="/favicon.ico" />`],
  pageDirs: [{ dir: 'pages' }],
  docDirs: [{ dir: 'docs/guide', prefix: '/guide' }],
  markdownIt: {
    shikiConfig: {
      langs: ['json']
    }
  },
  plugins: [
    defaultTheme({
      title: 'Vitarx',
      color: '#6c5ce7',
      navLinks: [{ text: '指南', link: '/guide' }],
      edit: 'https://github.com/vitarx-lib/vitarx-docs/edit/main/packages/zh-CN/'
    })
  ],
  vite: defineViteConfig({
    server: {
      host: '0.0.0.0',
      port: 4000
    },
    preview: {
      host: '0.0.0.0',
      port: 4173
    },
    build: {
      cssCodeSplit: false
    }
  })
})
