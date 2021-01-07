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
    "revision": "d617d861b26bd2ea62627a6f9430140a"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "3c63dc6fb5e45d594b0fc12a5593ca63"
  },
  {
    "url": "404.html",
    "revision": "7a95e54d7271aab0ef464400b2181747"
  },
  {
    "url": "about/index.html",
    "revision": "71569b5c4a8ccfb53ceb9781b061a277"
  },
  {
    "url": "assets/css/0.styles.469c5909.css",
    "revision": "58dc110e207ee5d647912acc04ff7be6"
  },
  {
    "url": "assets/js/10.14f3d1a9.js",
    "revision": "ab035f4539e171612e0a81b1dbf28a3e"
  },
  {
    "url": "assets/js/11.a154227a.js",
    "revision": "3d08aefc89809562f106a0d6a2af4089"
  },
  {
    "url": "assets/js/12.e7f69ed6.js",
    "revision": "4feec692b0b9df35c3b990529c2bad2e"
  },
  {
    "url": "assets/js/13.f224b435.js",
    "revision": "d6669a009e51a12bad1f3c327d08fc2d"
  },
  {
    "url": "assets/js/2.c0356d8c.js",
    "revision": "22bd16938b702f466945ba9cb437375b"
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
    "url": "assets/js/app.98269608.js",
    "revision": "a816b0c24e42d20552ade2b668a15d6b"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "cea186a532f93644fca58708a236aaba"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "ec624571044f9a72c4e3382d2f6f02fc"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "ddffd38f8a722e3ec6725848a7f426b1"
  },
  {
    "url": "index.html",
    "revision": "5685af945b1a9f53c99eb15603735760"
  },
  {
    "url": "tags/index.html",
    "revision": "f5498828ccbd02967d964e74a9621d5c"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "2d65f6e608c4a1b893acf045a2d03fad"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "91dc6c7f31bbf2cc623fff097a3cc8f7"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "69e04b3144aad2df9cde7fdfb83c25fa"
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
