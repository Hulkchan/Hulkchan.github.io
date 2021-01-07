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
    "revision": "39c3830b8152159c947ec342e508d2c8"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "8dd5ee7bedb7f17beb010dc945322db7"
  },
  {
    "url": "404.html",
    "revision": "d099d94660afec86b40baee61a3b2a52"
  },
  {
    "url": "about/index.html",
    "revision": "0e119c6b61583f5dfd45d11abf672fce"
  },
  {
    "url": "assets/css/0.styles.59b2ca21.css",
    "revision": "81fdfb18acb0d71254f28f54619ba398"
  },
  {
    "url": "assets/js/10.d3aacfd6.js",
    "revision": "5cb7896dc53c9e515d8d15b47c9630a0"
  },
  {
    "url": "assets/js/11.0370aed0.js",
    "revision": "2942bdc0fd383f5ef8d1af7ae0ffe39a"
  },
  {
    "url": "assets/js/2.b1ff16ef.js",
    "revision": "d00a2e4c19943448953d45c5cd31d958"
  },
  {
    "url": "assets/js/3.b4f7b4ca.js",
    "revision": "16a43a460012b6743632ddb977d68bff"
  },
  {
    "url": "assets/js/4.eddfb7ab.js",
    "revision": "0d4b1fcbf24c9761ddef411cf731e286"
  },
  {
    "url": "assets/js/5.27ee91a4.js",
    "revision": "c2f069ef859f007ec44670ba8868ea2c"
  },
  {
    "url": "assets/js/6.ec47980e.js",
    "revision": "2daba34d9dc7f10a6b52b897cf2598f3"
  },
  {
    "url": "assets/js/7.e61e33aa.js",
    "revision": "314b919b28c164524a30a2ad566e5c3b"
  },
  {
    "url": "assets/js/8.ac3ed5ae.js",
    "revision": "0bb57fe8d45d2d3b2e068e8f68852556"
  },
  {
    "url": "assets/js/9.8d1f464e.js",
    "revision": "0358b1583a71ad8325ec76cb600a2281"
  },
  {
    "url": "assets/js/app.7d214a2a.js",
    "revision": "31f6e2e4260c987c2d2c7e4a12a12fc5"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "7d13823ab3f13e88e86a14eed23dacf9"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "a70170ebada46b4456a94c47d555ee61"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "14cf50d465888dd1abc0cf7fdde8e4f1"
  },
  {
    "url": "index.html",
    "revision": "8d57584042f233f477dcbad81ec6be1f"
  },
  {
    "url": "tags/index.html",
    "revision": "3ed309a4b5363690c89a69ade3fd57c7"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "df33bed11576831276102f8425ea36e0"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "c7b213e03463cc7160349f2b4f91a858"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "c5e1f7a7fd20cc14bfaf3d80f9912f48"
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
