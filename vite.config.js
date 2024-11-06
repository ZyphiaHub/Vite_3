import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/vite_3/',
    build: {
        outDir: 'docs',
        emptyOutDir: true }
})
