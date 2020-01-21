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
    "url": "404.html",
    "revision": "eb1989c143334c11d29e5983778b0a7f"
  },
  {
    "url": "assets/css/0.styles.22a3e28b.css",
    "revision": "2ecf9f4fb0915c131728aa31eca4ff34"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.6a3393e0.svg",
    "revision": "6a3393e02be9f4ab0c1148d15d279486"
  },
  {
    "url": "assets/js/1.e9e9cec2.js",
    "revision": "3f1da761cc9ce6eb95e864ad7398b4e7"
  },
  {
    "url": "assets/js/10.808e4163.js",
    "revision": "f61ee7698980e75162f0b136c9514ffe"
  },
  {
    "url": "assets/js/11.49158d2f.js",
    "revision": "d7fd1312ff85edd19febff3d4f1f5f9a"
  },
  {
    "url": "assets/js/12.fd3da3f5.js",
    "revision": "daa7f82ba26474a8a26fec8606d0f3c9"
  },
  {
    "url": "assets/js/13.fda41f87.js",
    "revision": "429c697804f62c25ff39a4abbe9fb9f4"
  },
  {
    "url": "assets/js/14.e599495c.js",
    "revision": "61dcfaae8a54934840d1d95fe526ae9e"
  },
  {
    "url": "assets/js/15.0ace3598.js",
    "revision": "5228f940cfae0110749e4808cdd55e46"
  },
  {
    "url": "assets/js/16.a9c6ad9c.js",
    "revision": "9e65e0cd8a75a55b2cfbd23281b92bb1"
  },
  {
    "url": "assets/js/17.ff0ef42a.js",
    "revision": "44fba05f77997debac92b8cd2fe045f9"
  },
  {
    "url": "assets/js/18.92477d1c.js",
    "revision": "e2da40579bc32c83b949b4251c3de355"
  },
  {
    "url": "assets/js/19.68830a35.js",
    "revision": "beb206cf5bd70a90eea62fea9dbf7f49"
  },
  {
    "url": "assets/js/4.539e568b.js",
    "revision": "c23163a1acebf59fdf981f5d994f0238"
  },
  {
    "url": "assets/js/5.ef655b55.js",
    "revision": "b11e3956c8e9f839f4c6e8713b600ae4"
  },
  {
    "url": "assets/js/6.b281513f.js",
    "revision": "943f186252ad0edb05ab51a87cbc38dc"
  },
  {
    "url": "assets/js/7.d07ee4dd.js",
    "revision": "5eb14fa6f1a565a1b378100841c03c25"
  },
  {
    "url": "assets/js/8.bda2edc4.js",
    "revision": "596f346ffeb70472668aec1d981a32bd"
  },
  {
    "url": "assets/js/9.dbebc773.js",
    "revision": "4d99e0b48e57c431cfdcc2ea920bd7e9"
  },
  {
    "url": "assets/js/app.5b407aa2.js",
    "revision": "363ef8175970151d93fa2d35e609af74"
  },
  {
    "url": "assets/js/vendors~flowchart.86995bde.js",
    "revision": "e710e23ef40dd524ea59f5b686896260"
  },
  {
    "url": "categories/ALL/index.html",
    "revision": "82dc6589afb4c82ea0462011e8b78a48"
  },
  {
    "url": "categories/index.html",
    "revision": "1d5a517d0478f670213dffac7454284a"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "ba87e0a6f9db16f1eab03cf67662c05c"
  },
  {
    "url": "girl.jpg",
    "revision": "3f3d4f317bdb07d86b412708675a3b88"
  },
  {
    "url": "head.png",
    "revision": "75f53e374d90c17882a356c112cf464c"
  },
  {
    "url": "head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "f35765b283a8046889db570e1ea20052"
  },
  {
    "url": "logo.jpg",
    "revision": "447cf4f9de136db1d587cb107277d443"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "pg5.png",
    "revision": "3ff5db52b78fca1e5b6d832bf705aa73"
  },
  {
    "url": "star.png",
    "revision": "d58c2c2e1655abbdbf4fb891b37361e6"
  },
  {
    "url": "tag/index.html",
    "revision": "6e36602e791d07252672e003167feaaf"
  },
  {
    "url": "tags/ALL/index.html",
    "revision": "0a6f45c7afba0f988717cbec37f1f425"
  },
  {
    "url": "tags/concurrency/index.html",
    "revision": "c5ad2541f6e180171336dbc8e0b77680"
  },
  {
    "url": "tags/markdown/index.html",
    "revision": "15b994238ae472ef6bfe507b2f8fb648"
  },
  {
    "url": "timeline/index.html",
    "revision": "f79f7bb86b50e4911e4e92022d93eb97"
  },
  {
    "url": "timeLine/index.html",
    "revision": "f79f7bb86b50e4911e4e92022d93eb97"
  },
  {
    "url": "zh/diary/index.html",
    "revision": "f70022214013b808ab87be7d6ba333dc"
  },
  {
    "url": "zh/enjoy/index.html",
    "revision": "876f5e09339f24e74851f6d179ecd719"
  },
  {
    "url": "zh/guide/Concurrency.html",
    "revision": "9a203b50bbe8ee9e5b7c438d0737cf32"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "47399c94096890949b6f2a3df766ef11"
  },
  {
    "url": "zh/guide/Markdown.html",
    "revision": "113d40a3ebed45712695f94fbee5105d"
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
