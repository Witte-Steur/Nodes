import { defineConfig } from 'vitest/config';
import path from 'path';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      lib: path.resolve(import.meta.dirname, './lib'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
