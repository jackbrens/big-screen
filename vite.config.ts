import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import progress from 'vite-plugin-progress'
import path from 'path'
import viteBuildInfo from './build/info'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), viteBuildInfo(), progress()],
  base: '/big-screen/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3090,
  },
})
