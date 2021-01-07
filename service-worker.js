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
    "revision": "4ed4507423cab9dd5f631394f06a8d51"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "6cbcae5b58887f2d4eac4ef0f55d0483"
  },
  {
    "url": "404.html",
    "revision": "309971dc3fb23767b7ffbe41aa14e5d6"
  },
  {
    "url": "about/index.html",
    "revision": "84d7824c9342af06f1fcf2d03c6ffa11"
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
    "url": "assets/js/app.5062176e.js",
    "revision": "5c608b748d4ba4b7fe4f928ecabff739"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "ac57ab2cf75317caf67ea8cdcc31215d"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "6b00fdf57b63b5ac3d33d5ae68d269d3"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "34facb1df06f16f4ecd2e24a17e90161"
  },
  {
    "url": "index.html",
    "revision": "7ec2f83743af38a1cd6e81ac4932841a"
  },
  {
    "url": "tags/index.html",
    "revision": "52dbbc563a2a732b86f747f06dab0fff"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "addc9a3dc7f1bc90c311a2a7acce1272"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "014a42a341f3b9f185d46023df091344"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "7c6142e182a49845306efce0cc6dc13b"
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
