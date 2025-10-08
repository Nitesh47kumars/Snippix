import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    server:{
      host:'0.0.0.0',
      post: '5173',
      allowedHosts: ['all', '12aa959dc39b.ngrok-free.app'],
    }
})
