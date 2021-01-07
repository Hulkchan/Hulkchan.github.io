/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/11/11/mac显示隐藏文件/index.html",
    "revision": "1dfb463b44d4d026085c3cbcb9a80cfd"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "6b8a2571dc1ae91ea49f9c44ac5d992b"
  },
  {
    "url": "404.html",
    "revision": "129c465e9dec4665b481bf101d46536d"
  },
  {
    "url": "about/index.html",
    "revision": "4152834203c3d32405eed5f7f2ba01e0"
  },
  {
    "url": "assets/css/0.styles.c6daca40.css",
    "revision": "4d1f18c22c52cf872f38468d7914e110"
  },
  {
    "url": "assets/js/10.267e1b70.js",
    "revision": "a5707e4bbf21d7e1c21fa9ca2358adda"
  },
  {
    "url": "assets/js/11.e2a7b1e3.js",
    "revision": "772f9d8d88273e531588e59edd2b74ea"
  },
  {
    "url": "assets/js/12.8f0af0c6.js",
    "revision": "6555d9ee6e838886e60b177e3f91957b"
  },
  {
    "url": "assets/js/2.f9ad5457.js",
    "revision": "fa358480be332a5150f421a86465b63c"
  },
  {
    "url": "assets/js/3.24070d7e.js",
    "revision": "57e58836a167235f78bf7ba2a79cb449"
  },
  {
    "url": "assets/js/4.1e4a4611.js",
    "revision": "f0c5d1bc843aa94f4df71876b15328e2"
  },
  {
    "url": "assets/js/5.97254bd2.js",
    "revision": "54ab3cf0aaad947cb3a23a41a1ea3c92"
  },
  {
    "url": "assets/js/6.f0641c4a.js",
    "revision": "4289eabe84c0d51d49e21f5ff41907bf"
  },
  {
    "url": "assets/js/7.a2624d0a.js",
    "revision": "036ac604c5279f4763f63319c6717ac6"
  },
  {
    "url": "assets/js/8.ae67a3a0.js",
    "revision": "ccaf0f14f897a72fac116641634ebc2f"
  },
  {
    "url": "assets/js/9.1f865e00.js",
    "revision": "0c0d130dee89bcc825ec02bfb4d0ee6d"
  },
  {
    "url": "assets/js/app.7093b1c7.js",
    "revision": "1d5da69b6e96993d78aee234cf5c0a63"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "5786679cc99d96c3e5698b5dadf50036"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "3409eae159128ebd8da9e238524d4520"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "8e9c9c0049d9e3869f031f15f8cb6f82"
  },
  {
    "url": "index.html",
    "revision": "b247294e8d82ec94c6b2baa3ce4a3171"
  },
  {
    "url": "tags/index.html",
    "revision": "b5457aa55d78fc209f10450051828767"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5485937041bd3e1ca85e3b0e90772840"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "07913672b06942f63c03fd56b684082b"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "161fa51f062d7aac1a758b6304efe6d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
