import vue from '@vitejs/plugin-vue2'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  plugins: [vue(), ssr()]
}
