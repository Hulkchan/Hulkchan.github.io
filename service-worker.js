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
    "revision": "938166b271f0d426b45f5269d012886d"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "5021cf0da045b6d24d29ecfc09c31fda"
  },
  {
    "url": "2021/01/12/how-to-add-ueditorbtns-in-vue/index.html",
    "revision": "3f0d07116eeb931122d672b86af9034f"
  },
  {
    "url": "404.html",
    "revision": "9c14b970485a2b369af7602f31080c9a"
  },
  {
    "url": "about/index.html",
    "revision": "542387f63bea587136ab998e08b0ee85"
  },
  {
    "url": "assets/css/0.styles.c5f2f5d8.css",
    "revision": "f2d41f2689ff18e889a2368e952c7cae"
  },
  {
    "url": "assets/js/10.8b51953d.js",
    "revision": "4fd59235872ab2e022d6b878ed97e085"
  },
  {
    "url": "assets/js/11.9849cfb8.js",
    "revision": "0c4696ca8d415b82fb966df85ef32ec3"
  },
  {
    "url": "assets/js/12.cacfae73.js",
    "revision": "b186483ce451342aeb5640c1a8d3e23e"
  },
  {
    "url": "assets/js/13.0af3c0ae.js",
    "revision": "0374261206579934b746557db336feaa"
  },
  {
    "url": "assets/js/14.4a943f6b.js",
    "revision": "aa304aac53fc5ca8e474bd2124882b03"
  },
  {
    "url": "assets/js/2.233c51b2.js",
    "revision": "7eed2db64f130e5588d05bb04573c591"
  },
  {
    "url": "assets/js/3.22a208cc.js",
    "revision": "70a3fc5c51be6519dcd51759854e3978"
  },
  {
    "url": "assets/js/4.0901d202.js",
    "revision": "c2b3f90a46666438318f02f6ede2bb6e"
  },
  {
    "url": "assets/js/5.7964330a.js",
    "revision": "1969a6c54e0ebe07b1c9cb65bd48340b"
  },
  {
    "url": "assets/js/6.eb1d1bfb.js",
    "revision": "58ddd04338b3e4502d05f7803f6c8292"
  },
  {
    "url": "assets/js/7.9bdce64c.js",
    "revision": "649a8b67cfdd9ada0961ae47959ad3d1"
  },
  {
    "url": "assets/js/8.375f3b8b.js",
    "revision": "359c505a07423864c5b27a6b8859b925"
  },
  {
    "url": "assets/js/9.766d4236.js",
    "revision": "b7d9844dbccc9eb41fcd4f3a93f1ecf7"
  },
  {
    "url": "assets/js/app.94e3aa43.js",
    "revision": "7d6dfb07bd6f58c6d5d2092561b4ee89"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "5e7ace583e0b5bb7d120f8c5daca54e6"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "2b0f3fac07c8b55ac02bd7ae5a64aff5"
  },
  {
    "url": "dataCategories/2021-01/index.html",
    "revision": "1dac34c89f115fd9b395db4915264449"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "41a296f0d8e1e1252761424c22eda165"
  },
  {
    "url": "index.html",
    "revision": "dcca6dd7973ff4a08454fffd6c0ccf5f"
  },
  {
    "url": "tags/index.html",
    "revision": "5c7f16ba86a9e3888be0a34d01f7f1bf"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "65c6f5fba8fdbd30b06f10a2edbf2108"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "836ea1f67f783b31508bfb3b679e0181"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "165eefcccee33d9d7214ed76f1fe8a43"
  },
  {
    "url": "tags/工作小问题/index.html",
    "revision": "1630a3a73e5864c255509f3f66da43d9"
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
