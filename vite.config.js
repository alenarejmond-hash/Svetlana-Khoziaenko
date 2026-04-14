import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/', // Оставляем твою настройку для своего домена!
  plugins: [
    react(), 
    tailwindcss(), // Оставляем твой Tailwind!
    VitePWA({
      registerType: 'autoUpdate', // Автоматически обновляет SW в фоне
      workbox: {
        cleanupOutdatedCaches: true, // Убивает старый кэш
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,mp3}']
      }
    })
  ],
})