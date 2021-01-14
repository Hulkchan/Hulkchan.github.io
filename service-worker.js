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
    "revision": "f89e67158332c4f31ef39aecc473c790"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "981729fb614e2d5acee63dd7c491db69"
  },
  {
    "url": "2021/01/12/how-to-add-ueditorbtns-in-vue/index.html",
    "revision": "38251be65fffd07f7bfd61b24eebffd8"
  },
  {
    "url": "404.html",
    "revision": "9266174416840cf2af1f3659b1ed729e"
  },
  {
    "url": "about/index.html",
    "revision": "a47296ec0246e4ad2c29aae24dfcfcf3"
  },
  {
    "url": "assets/css/0.styles.f309bed3.css",
    "revision": "bbad49826b5bb5fd5375f6eae9f8f09b"
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
    "url": "assets/js/5.c3b13fd7.js",
    "revision": "3a929ce250b6f7d36c060705175d8d65"
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
    "url": "assets/js/app.b5e0f376.js",
    "revision": "111848a2f61a2a3f7e36e3f23b1057cc"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "1ce336b158c2ad20969b42d557faedd5"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "0534a61c9b312348dc8d1256938b78e4"
  },
  {
    "url": "dataCategories/2021-01/index.html",
    "revision": "3b75e092ffb28b8c4d4dc287bc15bd0c"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "b87b38de6e7d26a58e61b34592bbeb34"
  },
  {
    "url": "index.html",
    "revision": "610cd46cb03b2bd5087d69e910475ca1"
  },
  {
    "url": "tags/index.html",
    "revision": "be7485f69800b095f4238921f5203dfa"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "d4a28455ca8a0880f9d054002b765007"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "a06a9a540039c862c059a2ff5639da2a"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "7cf0789361e127616e0624097b2d6c29"
  },
  {
    "url": "tags/工作小问题/index.html",
    "revision": "d2362e5b973bb3d20795c8eea59e3f2d"
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
