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
    "revision": "4e09a2f3d12591f1ae8dd8a1fa2e7ed3"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "e767f871e93b10849c3066fbed0ba754"
  },
  {
    "url": "2021/01/12/how-to-add-ueditorbtns-in-vue/index.html",
    "revision": "ea4b94a2c7e6ff432ccbb6bb19d4137a"
  },
  {
    "url": "404.html",
    "revision": "2e069340c26e1ea558e2f2a66f439efc"
  },
  {
    "url": "about/index.html",
    "revision": "c64e8fc380a3e7074d4696ca47a8a4bf"
  },
  {
    "url": "assets/css/0.styles.33dba5f4.css",
    "revision": "948e73192ce153b96d8e00d9a118a332"
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
    "url": "assets/js/5.3de1ba82.js",
    "revision": "c47c594bcf15acbd49741ae47572983a"
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
    "url": "assets/js/app.e30109f9.js",
    "revision": "0b3ebcd558f3e9da32988682b3706c87"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "8cf8167258fa74ca345e45a9ecde53d9"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "a790d6bdeb3a907f83dbba9599bff719"
  },
  {
    "url": "dataCategories/2021-01/index.html",
    "revision": "a7b94ec1dbc0fd59fdf4a3cf148c7ac3"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "5ed369f8685d2794404ae6475f83ee58"
  },
  {
    "url": "index.html",
    "revision": "b1a97ff156dd099c9b1101e41eac6dfd"
  },
  {
    "url": "tags/index.html",
    "revision": "8128cac8e50180c4e7926e94a838859f"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b66a53bd2d98e62b095ff0ebcc59884f"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "795d2f146eaf31e676f76c4b3edcdf94"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "3d843d2782440acbba3188a93b2d72c5"
  },
  {
    "url": "tags/工作小问题/index.html",
    "revision": "2f3b297fe41debba0d1d727aa6ceaca3"
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
