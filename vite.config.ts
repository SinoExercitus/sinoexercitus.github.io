import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    mimeTypes: {
      'text/javascript': ['.ts']
    }
  },
  // base should be '/' for root domain
  base: './',
});