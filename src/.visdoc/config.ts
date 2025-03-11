import { defaultTheme } from '@visdoc/default-theme-vitarx'
import { defineConfig } from '@visdoc/vitarx-bundler'

// 配置文件，可以修改，如果删除将会在下一次启动服务时重新生成。
export default defineConfig({
  title: 'Vitarx',
  // 这是站点的描述
  description:
    'Vitarx 是一个创新的前端框架，它结合了 Vue 的响应式系统和 React 的 JSX 语法的优点，为开发者提供了一种全新的开发体验。通过 Vitarx，您可以使用熟悉的 JSX 语法来构建组件，同时享受 Vue 响应式系统的简洁和高效。',
  keywords: 'vitarx,前端框架',
  // 站点要使用的主题
  theme: defaultTheme({
    title: 'Vitarx',
    links: {
      gitee: 'https://gitee.com/vitarx/core',
      github: 'https://github.com/vitarx-lib/core'
    },
    features: [
      {
        icon: '⚡️',
        name: '高性能',
        description: '基于现代化的响应式系统，提供卓越的性能体验。'
      },
      {
        icon: '🔗',
        name: '响应式',
        description: '简洁的响应式API，轻松构建交互式应用。'
      },
      {
        icon: '🔄',
        name: '热更新',
        description: '得益于现代化构建工具 vite ，vitarx项目具备开发时热更新能力。'
      },
      {
        icon: '🚀',
        name: '易上手',
        description: '结合JSX语法和Vue API的优势，提供友好的开发体验。'
      },
      {
        icon: '❄️',
        name: '轻量化',
        description: '轻量级，无需大量依赖，以及繁琐的配置，尽可能减少开发者心智负担。'
      },
      {
        icon: '✅',
        name: '类型化',
        description: '完全类型化的 API，提供良好的 TypeScript 支持。'
      },
      {
        icon: '📲',
        name: '生态圈',
        description:
          '核心生态齐全，如路由器(vitarx-router)、CssInJs(@vitarx/css-in-js)、UI组件库(@vi-design/vitarx)...'
      },
      {
        icon: '🔌',
        name: '稳定性',
        description: '虽无大厂背书，但作者会全力维护框架，后需会有基于此框架的低代码开发平台诞生。'
      }
    ],
    footer: '<p style="text-align: center">遵循MIT开源协议<br>Copyright &copy; 朱冲林</p>'
  })
})
