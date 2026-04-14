// ... ваш импорт ...
export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // ДОБАВЛЯЕМ ЖЕСТКОЕ ИМЯ ДЛЯ ТЕЛЕФОНА (PWA):
      manifest: {
        name: 'Светлана Хозяенко',
        short_name: 'Светлана',
        theme_color: '#059669',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,mp3}']
      }
    })
  ],
})