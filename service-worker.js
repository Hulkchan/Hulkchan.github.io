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
    "revision": "eda1298a8c04ad354d7ad8184766825d"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "ad98416c8a1b6fad1f2ef766096f739f"
  },
  {
    "url": "2021/01/12/how-to-add-ueditorbtns-in-vue/index.html",
    "revision": "9b53ceb0134e7305366f88278d45aa39"
  },
  {
    "url": "404.html",
    "revision": "c47e659c935b1472a6837bde85469350"
  },
  {
    "url": "about/index.html",
    "revision": "0f3509000e045ad2463c655a6eceb3db"
  },
  {
    "url": "assets/css/0.styles.173cba2f.css",
    "revision": "7a5c5be4d23c53b8e3cc7231869a30ea"
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
    "url": "assets/js/2.0bdaf707.js",
    "revision": "22091303380272443248299d0230bf9c"
  },
  {
    "url": "assets/js/3.2be6a187.js",
    "revision": "1d8cc414d68de5cc3435f1dd3a277fd1"
  },
  {
    "url": "assets/js/4.9caf7a95.js",
    "revision": "9f04c26df0c6ef76c91099f72bfb9fa0"
  },
  {
    "url": "assets/js/5.b1a97fc0.js",
    "revision": "8a7be914e47d23cf608af69242e26e50"
  },
  {
    "url": "assets/js/6.232dc695.js",
    "revision": "11797511d2443d87d4bdfc64fc52568a"
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
    "url": "assets/js/app.404536d2.js",
    "revision": "f6edd8a90fc48cfb9580e95486201396"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "ddc3cde9d09a756b8f8c54f2ded5cac2"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "cd210550485dae40c4fcdfa6bea8cb94"
  },
  {
    "url": "dataCategories/2021-01/index.html",
    "revision": "38c99a87f776dd0521ef3a930551e929"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "491a3872c2a001ef8e7a61752784bab8"
  },
  {
    "url": "index.html",
    "revision": "33d416841e5df95ef4c538b10e4c6beb"
  },
  {
    "url": "tags/index.html",
    "revision": "c29f0803ca514e5c4bb066a8756f4ef0"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "7c4a606b8b4ed4816d267ee6fe28d220"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "10e8f185fe1fb052bcdcf8780a61fe3d"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "146935228722b4a9342b24ac57f4b526"
  },
  {
    "url": "tags/工作小问题/index.html",
    "revision": "b1c731af43383d75ac4712883576cf69"
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
