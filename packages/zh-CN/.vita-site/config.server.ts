import { defaultTheme } from '@vita-site/theme-default/server'
import { defineConfig } from 'vita-site/server'
import { defineConfig as defineViteConfig } from 'vite'

const title = 'Vitarx - 响应式前端框架'
const description =
  'Vitarx 是一个响应式驱动的前端框架。以信号粒度的精确依赖追踪取代虚拟 DOM 差量比对，通过引擎级视图控制实现最小化更新，内置 SSR、依赖注入与指令系统，提供完整的 TypeScript 支持。'

export default defineConfig({
  title,
  keywords:
    'Vitarx,JSX框架,响应式框架,Signal,信号驱动,前端框架,响应式系统,SSR,依赖追踪,精确更新,TypeScript,组件化',
  description,
  injectHead: [
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="https://vitarx.cn/cert.jpg" />`,
    `<meta property="og:url" content="https://vitarx.cn/index.html" />`,
    `<meta property="og:type" content="website" />`,
    `<link rel="icon" href="/favicon.ico" />`
  ],
  pageDirs: [{ dir: 'pages' }],
  docDirs: [
    { dir: 'docs/guide', prefix: '/guide' },
    { dir: 'docs/api', prefix: '/api' },
    { dir: 'docs/types', prefix: '/types' }
  ],
  markdownIt: {
    shikiConfig: {
      langs: ['json', 'nginx']
    }
  },
  plugins: [
    defaultTheme({
      title: 'Vitarx',
      color: '#6c5ce7',
      navLinks: [
        { text: '文档', link: '/guide' },
        { text: 'API', link: '/api' },
        { text: '类型', link: '/types' },
        {
          text: '生态',
          children: [{ text: '路由器', link: 'https://router.vitarx.cn/', isExternal: true }]
        }
      ],
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
