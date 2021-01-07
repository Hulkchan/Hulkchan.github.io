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
    "revision": "16e1d214223970532e51b71cf3737caf"
  },
  {
    "url": "2020/12/23/js基础知识/index.html",
    "revision": "0cfd6ae073f3b1e1d6a7013dac79b013"
  },
  {
    "url": "404.html",
    "revision": "9523f4c192a25014fa6769fcf447cc0c"
  },
  {
    "url": "about/index.html",
    "revision": "cd719258bd3dbfd8b3092ec2fbd9ebf3"
  },
  {
    "url": "assets/css/0.styles.59b2ca21.css",
    "revision": "81fdfb18acb0d71254f28f54619ba398"
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
    "url": "assets/js/2.b1ff16ef.js",
    "revision": "d00a2e4c19943448953d45c5cd31d958"
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
    "url": "assets/js/app.21ed43c3.js",
    "revision": "7b507d33ef34f6a29fef34a7044ba1f4"
  },
  {
    "url": "dataCategories/2020-11/index.html",
    "revision": "147a0b8eec54d852da8fca6b1625d85e"
  },
  {
    "url": "dataCategories/2020-12/index.html",
    "revision": "a4a0fbfa93bcf8330de7df42b2012939"
  },
  {
    "url": "dataCategories/index.html",
    "revision": "1d1edf618b3ad46d1280172036a92d43"
  },
  {
    "url": "index.html",
    "revision": "d891bc3d89f6bd203c8452727c5a8ada"
  },
  {
    "url": "tags/index.html",
    "revision": "4952be3873a9ee21cc60af11bf4b6b2c"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "d9290ea88d0d2b76fbc45773e17e9b01"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "327c1ec5dce2742c12fd0cc1cde9fa79"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "55c1198832fc46bdc075fa96c7d5f553"
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
