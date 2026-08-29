import { defineConfig } from 'vite';
import path from 'path';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      lib: path.resolve(import.meta.dirname, './lib'),
    },
  },
});
