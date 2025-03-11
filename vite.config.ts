import { defineConfig } from 'vite'
import vitarx from 'vite-plugin-vitarx'
import dtsPlugin from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vitarx(),
    dtsPlugin({
      insertTypesEntry: true,
      include: ['src'],
      rollupTypes: true,
      tsconfigPath: './tsconfig.lib.json'
    })
  ],
  build: {
    outDir: 'dist',
    copyPublicDir: false,
    cssTarget: 'chrome61',
    lib: {
      entry: 'widgets/index.ts',
      name: 'x',
      fileName: (format) => `x.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vitarx', 'vitarx/jsx-runtime'],
      output: {
        assetFileNames: 'index.css',
        globals: {
          vitarx: 'Vitarx',
          'vitarx/jsx-runtime': 'Vitarx'
        }
      }
    }
  }
})
