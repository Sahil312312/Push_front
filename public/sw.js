  self.addEventListener('push', event => {
    const data = event.data.json();
    const options = {
      body: data.body,
      // add more options as needed
    };
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  });
  
  self.addEventListener('notificationclick', event => {
    event.notification.close();
    // Handle the click event as needed
  });
  
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/app.js',
          // add more files to cache as needed
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  

