import { defineConfig } from 'vita-site'
import './assets/style.scss'
import { isString } from 'vitarx'

export default defineConfig({
  enhanceApp: (_app, { router }) => {
    router.afterEach((to) => {
      const title = to.meta['title']
      if (isString(title)) {
        document.title = `${title} - Vitarx Framework`
      } else {
        document.title = 'Vitarx - 响应式前端框架'
      }
    })
  }
})
