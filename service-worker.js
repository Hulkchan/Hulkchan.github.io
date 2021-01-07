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
    "revision": "e55392caf087f5fa5e6fac6a67266b59"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "d165f9c9d5eabd8661a43059c92655dc"
  },
  {
    "url": "404.html",
    "revision": "449233d01ce59e349fdfa3c55545af34"
  },
  {
    "url": "about/index.html",
    "revision": "c146fe84c76631e8813c046efbe51c75"
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
    "url": "assets/js/7.7ac144c4.js",
    "revision": "41a24caf7cf02c48cacee2e96fd47038"
  },
  {
    "url": "assets/js/8.d0c061f2.js",
    "revision": "b110aac275d5325383c7bbd98b471f18"
  },
  {
    "url": "assets/js/9.7d8c5f4e.js",
    "revision": "5d92058427e40cf5134e5c331d17c256"
  },
  {
    "url": "assets/js/app.e7fefa71.js",
    "revision": "ce2d9ab0e15eeb8cda34f5c52dc08d0f"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "86e4e27614789c5ecd32dc2449e207aa"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "0b6ee4ff31ca2655381f0716a987accf"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "457857da582ff34aef0ac2d6ee3e38bd"
  },
  {
    "url": "index.html",
    "revision": "81f9afec58805adb3d89f9843f4d203a"
  },
  {
    "url": "tags/index.html",
    "revision": "f5a5ac975bedf10447a0d2accd10fe98"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "e8743d829304bfd6f79e15b5543e83a7"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "1a337a1015f2912d2a7d5643707ad331"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "c1c8141c3ff039ebdb18655be728cd6b"
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
