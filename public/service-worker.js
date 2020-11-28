const CACHE_NAME = "static-cache-v2";
const DATA_CACHE = "data-cache-v1"
const FILES_CACHE = [
    "/",
    "/index.html",
    "/database.js",
    "/styles.css",
    "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "/index.js",
    "manifest.webmanifest",
    "/icons/icon-192x192.png",
    "icons/icon-512x512.png",
];

self.addEventListener("fetch", function (data) {
    if (data.request.url.includes("/api/")) {
        data.respondWith(
            caches.open(DATA_CACHE).then(cache => {
                return fetch(data.request).then(response => {
                    if (response.status === 200) {
                        cache.put(data.request.url, response.clone());
                    }
                    return response;
                })
                    .catch(err => {
                        return cache.match(data.request)
                    });
            }).catch(err => console.log(err))
        );
        return;
    }
    data.respondWith(
        caches.match(data.request).then(response => {
            return response || fetch(data.request);
        })

    );
});

self.addEventListener("activate", function (data) {
    data.waitUntil(
        caches.keys().then(keyAll => {
            return Promise.all(
                keyAll.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE) {
                        return caches.delete(key);
                    }
                })
            )
        })
    )
})

self.clients.claim();


self.addEventListener("install", function (data) {
    data.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_CACHE)
        })
    );
    self.skipWaiting();
})