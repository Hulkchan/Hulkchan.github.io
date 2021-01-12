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
    "revision": "9c42497ee46aad910b5eb90b2e0cd65e"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "2b1d4b5ad4c018ff49263b85e8d72971"
  },
  {
    "url": "2021/01/12/vue中使用ueditor如何新增按钮/index.html",
    "revision": "d5ff07a6757f7fda414ab0596ab173de"
  },
  {
    "url": "404.html",
    "revision": "fe8aeead5ac55fd9eb272be0f864ec5a"
  },
  {
    "url": "about/index.html",
    "revision": "0cc75980fcde9c3d19577445d6b238ed"
  },
  {
    "url": "assets/css/0.styles.9ef5228a.css",
    "revision": "051c81c912ed1c066a1c229350ca5387"
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
    "url": "assets/js/13.56e3d58c.js",
    "revision": "db8834e8599634681aee6b37b837ab81"
  },
  {
    "url": "assets/js/14.6484c9b3.js",
    "revision": "0d0523526f0e5761ba3b813e4823e1b6"
  },
  {
    "url": "assets/js/2.01140107.js",
    "revision": "cb50d6150309f03bac03de0e180630d8"
  },
  {
    "url": "assets/js/3.e9345eca.js",
    "revision": "fa87dcf40e568f84b3e8e8e338b039de"
  },
  {
    "url": "assets/js/4.d5720a18.js",
    "revision": "fa7f21ecbca3e3a37004088c2db43e81"
  },
  {
    "url": "assets/js/5.a3e8592c.js",
    "revision": "cdfc6776b2523ce3eedb0354c76436d8"
  },
  {
    "url": "assets/js/6.019737fb.js",
    "revision": "57283b2aaf3fbc618595c629c901f916"
  },
  {
    "url": "assets/js/7.d4b51f04.js",
    "revision": "f5c2ae33b340e008623e1a157dfa1b37"
  },
  {
    "url": "assets/js/8.a57094b9.js",
    "revision": "69e75e8e9091e7c7b06e2865ae0db776"
  },
  {
    "url": "assets/js/9.ce584ed7.js",
    "revision": "fc3cd4fa64b8efa100ccc291785cce1a"
  },
  {
    "url": "assets/js/app.abf57ae4.js",
    "revision": "66c631746760d0aa3c76be576b650814"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "6c9e13e433bac97703c73eda8bc3024a"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "caa5169d4eb19cf5b66cd66555573d1f"
  },
  {
    "url": "dataCategories/2021-01/index.html",
    "revision": "1e65924a0823adc24754753224a443ee"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "aca823a23d064a40b37ad0e0a81882d0"
  },
  {
    "url": "index.html",
    "revision": "f877482979b30a81f9aebb9d9b9faa3c"
  },
  {
    "url": "tags/index.html",
    "revision": "b69116e722a56c1d51cd3525f9a3e5ec"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5c7a375bb53f4c64eb3dc5be48d91816"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "5fa61025711714fd11e36cffc701a563"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "090a28e6aa577f5ca45dcf786d40d2ba"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "fcc024ff8dba4193990317d0feeaf5e1"
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
