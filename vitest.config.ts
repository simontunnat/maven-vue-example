import {defineConfig} from 'vitest/config';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  test: {
    include: [ "./src/test/frontend/**/*.test.ts"],
    environment: "jsdom"
  }
});
