import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   server: {
    host: true, // or '0.0.0.0'
    port: 5174, // or your preferred port
  },
  plugins: [react()],

})
