const CACHE_NAME = "agence-bm-v1";

const FILES = [
    "index.html",
    "services.html",
    "realisations.html",
    "commande.html",
    "manifest.json"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME).then(cache => {

            return cache.addAll(FILES);

        })

    );

});


self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request).then(response => {

            return response || fetch(event.request);

        })

    );

});