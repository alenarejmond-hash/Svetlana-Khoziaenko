const CACHE_NAME = 'vizitka-cache-v1';

// Список файлов, которые мы сохраняем в телефон (чтобы работали без интернета)
const urlsToCache = [
  '/',
  '/index.html',
  '/bg-creator.jpg', // Фото Светланы
  '/avatar-creator.jpg',
  '/greeting.mp3' // Голосовое
];

// 1. Установка: скачиваем всё в кэш
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Перехват запросов: если нет интернета, отдаем из кэша
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Если файл есть в кэше — отдаем его, иначе пытаемся скачать из сети
        return response || fetch(event.request);
      })
  );
});

//Всё! Сохраняешь файл. Теперь, когда клиент Светланы установит визитку на экран телефона (через кнопочку "Поделиться"), он сможет открыть её даже в самолёте или глухом лесу, фото загрузится моментально, и все тексты будут читаться! 🌲✨