import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import VitePlugin from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    VitePlugin()
  ],
})
