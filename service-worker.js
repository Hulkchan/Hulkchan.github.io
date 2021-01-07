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
    "revision": "dc9f0561d6f749d4e01fb6f355b26e59"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "17d8519a7e46729852be256fa6e28854"
  },
  {
    "url": "404.html",
    "revision": "a6374fe52ae74c6596421414993e9b39"
  },
  {
    "url": "about/index.html",
    "revision": "2bb7d157cf4dcda7ecaa729f289063dd"
  },
  {
    "url": "assets/css/0.styles.afaab5d0.css",
    "revision": "16da7cfd544a1fd9b8bc414872948303"
  },
  {
    "url": "assets/js/10.d3aacfd6.js",
    "revision": "5cb7896dc53c9e515d8d15b47c9630a0"
  },
  {
    "url": "assets/js/11.0370aed0.js",
    "revision": "2942bdc0fd383f5ef8d1af7ae0ffe39a"
  },
  {
    "url": "assets/js/2.ff584f36.js",
    "revision": "70e053995ddf38676c2b921971a32ff8"
  },
  {
    "url": "assets/js/3.b4f7b4ca.js",
    "revision": "16a43a460012b6743632ddb977d68bff"
  },
  {
    "url": "assets/js/4.eddfb7ab.js",
    "revision": "0d4b1fcbf24c9761ddef411cf731e286"
  },
  {
    "url": "assets/js/5.27ee91a4.js",
    "revision": "c2f069ef859f007ec44670ba8868ea2c"
  },
  {
    "url": "assets/js/6.ec47980e.js",
    "revision": "2daba34d9dc7f10a6b52b897cf2598f3"
  },
  {
    "url": "assets/js/7.e61e33aa.js",
    "revision": "314b919b28c164524a30a2ad566e5c3b"
  },
  {
    "url": "assets/js/8.ac3ed5ae.js",
    "revision": "0bb57fe8d45d2d3b2e068e8f68852556"
  },
  {
    "url": "assets/js/9.8d1f464e.js",
    "revision": "0358b1583a71ad8325ec76cb600a2281"
  },
  {
    "url": "assets/js/app.f9f59a79.js",
    "revision": "aac4906eea8318152ff06cf6e8db1366"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "eb2a3c5484f61dd066a750e6b5bbbd59"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "79af2f13f312fa230db0379f16881fed"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "da858f3aef463ccde7007f7918b4df4b"
  },
  {
    "url": "index.html",
    "revision": "bccfa91eac78d340d68e92ec77db2e93"
  },
  {
    "url": "tags/index.html",
    "revision": "dc730487ddb1ddf6e2dbefedab87333f"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "7766ea2d47263abfc56d7ed0a8c1782d"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "9e2075a8d1e801d65315759778381b3d"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "f33459e19a2e5a18ded1ac3130c45a19"
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
