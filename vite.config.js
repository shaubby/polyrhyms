import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
  plugins: [react(), tailwindcss()],
  base: "/polyrhyms/"
})
