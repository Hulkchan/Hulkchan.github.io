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
    "revision": "17d194f47a806e9b0e5625c4d2cbc0ce"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "84a8bcf44fa54ff819cd086a19b213d4"
  },
  {
    "url": "404.html",
    "revision": "0830dfb35ed4953d26917f9f139ab059"
  },
  {
    "url": "about/index.html",
    "revision": "59b934752840e6a5c2990bc78f4dd907"
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
    "url": "assets/js/7.0420af9e.js",
    "revision": "f5f248a6bc71b361792e917ef2e9fee1"
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
    "url": "assets/js/app.ff94690f.js",
    "revision": "17af0a00722078cd2e53709f228bfaac"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "227211549c1b15bc0f8c17c208c7dd96"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "7223959a92bf1f4dc9be1df366382821"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "14ccd265a137a5f5e28b803762553257"
  },
  {
    "url": "index.html",
    "revision": "4c34dacdc01fbfd520977b7cb2b9cc9d"
  },
  {
    "url": "tags/index.html",
    "revision": "cf717316f9f78be0521a1a3e9c92d4c4"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "02313b847d60fbe8db0a4c45b69bc386"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "a4a9ceedbc06fc08609822d862ff3d27"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "e0a0ae0fca16e9a4ce510ba23e6311b4"
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
