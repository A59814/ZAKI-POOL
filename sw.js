const C='starpool-v2';
const A=['./','index.html','manifest.json','icon-192.png','icon-512.png','https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js','https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.allSettled(A.map(u=>c.add(u)))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const k=n.clone();caches.open(C).then(c=>c.put(e.request,k));return n}).catch(()=>caches.match('index.html'))))});
