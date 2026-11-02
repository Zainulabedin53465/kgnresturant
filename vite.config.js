import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // Three.js is loaded on demand in its own chunk (~743 kB), so the default 500 kB warning is expected.
    chunkSizeWarningLimit: 800,
  },
})
