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
    "revision": "1e5e4e143d501141b1642721a6ca5ca9"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "06707b143935937f9dfd1a12e90251aa"
  },
  {
    "url": "404.html",
    "revision": "5ef334435874025b0259b5837d12a7c7"
  },
  {
    "url": "about/index.html",
    "revision": "a4be426a1ce081584bf87c3cf04d2dcb"
  },
  {
    "url": "assets/css/0.styles.f83df601.css",
    "revision": "4d1f18c22c52cf872f38468d7914e110"
  },
  {
    "url": "assets/js/10.14f3d1a9.js",
    "revision": "ab035f4539e171612e0a81b1dbf28a3e"
  },
  {
    "url": "assets/js/11.82b6a0f7.js",
    "revision": "9913b5ac4700022b1de5141e68fab7ca"
  },
  {
    "url": "assets/js/12.ac547a8a.js",
    "revision": "b8c71a0b821b50301057e66c1e66f609"
  },
  {
    "url": "assets/js/13.f224b435.js",
    "revision": "d6669a009e51a12bad1f3c327d08fc2d"
  },
  {
    "url": "assets/js/2.5c7356d0.js",
    "revision": "0a2f5dc2c8d22c78281ed7857fd0cd9b"
  },
  {
    "url": "assets/js/3.e9345eca.js",
    "revision": "fa87dcf40e568f84b3e8e8e338b039de"
  },
  {
    "url": "assets/js/4.768c2ab7.js",
    "revision": "c86aafd4d60886759082d1af5ad7a18e"
  },
  {
    "url": "assets/js/5.d274e3ce.js",
    "revision": "7f331dca47afaf71a36d2dd82ad6031b"
  },
  {
    "url": "assets/js/6.efda551a.js",
    "revision": "4c0697105e3ae626c1c66df07761e28a"
  },
  {
    "url": "assets/js/7.4b5d2ecb.js",
    "revision": "e6970070eb1af7e86f38efe5e61e6d1a"
  },
  {
    "url": "assets/js/8.d593914c.js",
    "revision": "d6517acdf0b23474076d17b80a89b267"
  },
  {
    "url": "assets/js/9.5cbf464c.js",
    "revision": "61ad3b916e88d9f0c7ff0a4a474a3b2e"
  },
  {
    "url": "assets/js/app.86218d87.js",
    "revision": "900899859bd2359df73068cd374ccd4b"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "33ca1a8abbb09d079057accab20c257e"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "7493ba5dbfe8eb968d16615b6a93ad8a"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "5ee71966742cfe279552fa79f6041f24"
  },
  {
    "url": "index.html",
    "revision": "f07f73048ff5530a2e7526f8bbff2193"
  },
  {
    "url": "tags/index.html",
    "revision": "27016010bc3f74475a0611306a707a2d"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "a455c6abc23a53148a615a1b515f2ed9"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "f687efa5d86cee97fa0e4e2e1df38fb3"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "08a0c3fa6a614157e97a15611a1aa097"
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
