import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 48523,
    strictPort: true,
    allowedHosts: ['.trycloudflare.com']
  }
})
