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
    "revision": "e011707eaefdd401519d3dc9e7cdb371"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "f8ea061fe5f3e4053daa08c79fb143ea"
  },
  {
    "url": "404.html",
    "revision": "66b65a59a8a1695a6d128c50ec95cc03"
  },
  {
    "url": "about/index.html",
    "revision": "a38456b56df407292c48c7b5f3548acd"
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
    "url": "assets/js/app.0994fd9b.js",
    "revision": "cb587acbc798bcaba1b9f7f3aaa51002"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "6c71063b1b5740047605bd438380984b"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "002113287c5ae4d696b1942127774eda"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "96dc4524a9e588e4fbeb07268fd06484"
  },
  {
    "url": "index.html",
    "revision": "cb149808c2b77ebf990ad2fb3703fb41"
  },
  {
    "url": "tags/index.html",
    "revision": "eff790dd9306818f21b7be7633b70f3c"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "59bd1b73775687cec7552c64fa6e5176"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "aa7a00a768dcaec99707e6e002c86642"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "198bb1b9aab5640f9b6ba1189c5ba7f1"
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
