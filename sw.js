/* Aprova Legislativo – service worker (uso offline) */
const VERSAO='aprova-v6';
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/apple-touch-icon.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSAO).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSAO).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    // app: rede primeiro (pega versões novas), cache se offline
    e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(VERSAO).then(c=>c.put(req,cp));return r;}).catch(()=>caches.match(req).then(m=>m||caches.match('./index.html'))));
    return;
  }
  if(/cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(url.host)){
    // bibliotecas e fontes: cache primeiro
    e.respondWith(caches.match(req).then(m=>m||fetch(req).then(r=>{const cp=r.clone();caches.open(VERSAO).then(c=>c.put(req,cp));return r;})));
  }
});
