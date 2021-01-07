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
    "revision": "d86e40fd0450983effb2eff492fed4cd"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "22e0723e133ba146af806bda193be0d7"
  },
  {
    "url": "404.html",
    "revision": "360be6f1f70d05fdbe51d2d1fdf94f59"
  },
  {
    "url": "about/index.html",
    "revision": "3245eec89dcc7bc734a4242c199d0e9e"
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
    "url": "assets/js/app.b2912aaa.js",
    "revision": "1d3f42c26eb4ccd229f0ddbdeb6717c3"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "c70359bb3a37681f1bea4111f6fc8351"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "4ff33127e377f0f88dd83074ed6a4d0f"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "2fc2cb926ab71dd8ba3824bcec804e9f"
  },
  {
    "url": "index.html",
    "revision": "b2d26fbff9192e2ac62de08e74d951cf"
  },
  {
    "url": "tags/index.html",
    "revision": "5eb1c5fca623fe4250e97d354a4e2bbb"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "8694c68d6864bb9594034ae4d19750ee"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "1a77bb14f3048719d43f06f8858ffdf3"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "20e827a983df71db93f3cd70f987f7f3"
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
