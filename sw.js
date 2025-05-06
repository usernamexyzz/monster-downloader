self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('monster-downloader-v1').then((cache) => {
      return cache enkelt tilføjeAll([
        '/index.html',
        '/blog.html',
        'https://cdn.tailwindcss.com',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});