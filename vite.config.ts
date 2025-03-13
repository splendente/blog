import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImportFunctions from 'unplugin-auto-import/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImportFunctions({
      imports: ['vue', '@vueuse/core'],
      dirs: ['app/utils/**', 'app/composables/**'],
      dts: 'auto-import-functions.d.ts',
    }),
    AutoImportComponents({
      dirs: ['app/components'],
      dts: 'components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
      '~': path.resolve(__dirname, 'app'),
    },
  },
})
