import { createApp } from '@visdoc/vitarx-bundler/client'

createApp({
  base: '/',
  routeMode: 'path',
  locales: {
    zh: {
      docs: '文档',
      router: '路由器',
      home_title: '现代化前端开发的新选择',
      home_description:
        'Vitarx 是一个现代化的前端框架，结合了 Vue 的响应式系统和 React 的 JSX 语法',
      home_start: '快速上手'
    }
  }
})
