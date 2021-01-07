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
    "revision": "965ad4fc9aff13b03f5e844f3b749a88"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "4f4add4061fea1858471b1fb780acf8d"
  },
  {
    "url": "404.html",
    "revision": "89e2404e750fbe55ff2c2fe8aed4e66f"
  },
  {
    "url": "about/index.html",
    "revision": "5965f7f57415ac7249cf6483386f349f"
  },
  {
    "url": "assets/css/0.styles.7364d8b3.css",
    "revision": "58dc110e207ee5d647912acc04ff7be6"
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
    "url": "assets/js/2.3bb20805.js",
    "revision": "625ab45344d766424e3e0f95edd2353b"
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
    "url": "assets/js/app.c617300a.js",
    "revision": "6447749b4edde8011fcdd970291356dc"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "fda6b52b52e8b47251e99db93b9a5cb4"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "06c625266140220df4e9d3b126f56106"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "3d9c490508e9c90a66d0e1cf3fbfbac0"
  },
  {
    "url": "index.html",
    "revision": "b708a3c1336e9baad1df3da1c045a04b"
  },
  {
    "url": "tags/index.html",
    "revision": "4febe487da3fa18c659291b5a27a35fe"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "dd58affdd7dbaf68756265b21eb68a15"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "6312724f3bdc88d46b343191422fd00b"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "0e71afa79ae6a1d4822574ef9950e9c9"
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
