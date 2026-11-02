import { defineConfig } from 'vite'

export default defineConfig({
  base: '/kgnresturant/',
  build: {
    chunkSizeWarningLimit: 800,
  },
})
