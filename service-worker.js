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
    "revision": "bd3476a7df92b4a226e8dae7095e7581"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "a36e1cc4fc5d67bc8f4495dad20e8c9e"
  },
  {
    "url": "2021/01/12/how-to-add-ueditorbtns-in-vue/index.html",
    "revision": "6671c9d99971e9d4ab1f637642f0cf50"
  },
  {
    "url": "404.html",
    "revision": "69ddfe953a7b9de3f42bc249dad71b78"
  },
  {
    "url": "about/index.html",
    "revision": "05a5320aef6e0434319b441034bc8b1f"
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
    "url": "assets/js/app.a9d8413f.js",
    "revision": "b0dcc6203910349349c28d2a78086057"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "f9e00e05dcc23fc1ba05180483b8832a"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "4a22e2d90097f10dd71e007456aed2a3"
  },
  {
    "url": "dataCategories/2021-01/index.html",
    "revision": "0f8bab3a0cf55cb04dfb597840aee66e"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "56d788ff9aee874f6c50ab678ba94954"
  },
  {
    "url": "index.html",
    "revision": "22ca53520c4c18829fb3d8d43505b41b"
  },
  {
    "url": "tags/index.html",
    "revision": "390d6606eaedf9455b58081109298792"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "20c1a0009f621586364e0b89fb18631d"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "8195056574155acd2903dd297e5f6482"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "351a27c23a96db599c4adcb185374ba9"
  },
  {
    "url": "tags/工作小问题/index.html",
    "revision": "826157f8240406b2845b59e4d5cb8d51"
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
