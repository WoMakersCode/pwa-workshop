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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1-manifest/index.html",
    "revision": "7b35c967c2f613462b9fa85df87e9e8f"
  },
  {
    "url": "2-service-worker/index.html",
    "revision": "52ba494ed479c296f53c88f0649b734e"
  },
  {
    "url": "3-precaching/index.html",
    "revision": "faa16eba3a6bff473c40f41c5bfd6e25"
  },
  {
    "url": "4-api-cache/index.html",
    "revision": "20efcc0bcf2ac46a425c478a77aaf0e7"
  },
  {
    "url": "404.html",
    "revision": "d22888ffda77fa593ce598fd9dbf6484"
  },
  {
    "url": "5-background-sync/index.html",
    "revision": "24e97e422c9649d907f1e04cdb1a6c5a"
  },
  {
    "url": "6-pwa-setup/index.html",
    "revision": "81dfb32773b960c78a4af0fb4365061f"
  },
  {
    "url": "assets/css/0.styles.29df42ad.css",
    "revision": "f7e16b6abcf0d80414adcaf7f6acbc6c"
  },
  {
    "url": "assets/img/cache_storage.04f1ba9e.png",
    "revision": "04f1ba9ed07207b6e2bf16c145ded159"
  },
  {
    "url": "assets/img/certok.41829eb4.png",
    "revision": "41829eb42aa627139b6ffaa7bfc7d83d"
  },
  {
    "url": "assets/img/certs.7e43f7a2.png",
    "revision": "7e43f7a2df2d1033a0de4b05db5f7d11"
  },
  {
    "url": "assets/img/devtools-update-on-reload.d1d00b91.png",
    "revision": "d1d00b9139a5fb3ea676b8fd40170dd8"
  },
  {
    "url": "assets/img/logo-192.75a78546.png",
    "revision": "75a7854642a0500dc2e24664b06a23d3"
  },
  {
    "url": "assets/img/manifest_dev_tools.a1a93822.png",
    "revision": "a1a93822b2059d940f1b7629a2a60500"
  },
  {
    "url": "assets/img/pwa_install_menu.41073796.jpg",
    "revision": "41073796887879f316f9c52bdb11b12a"
  },
  {
    "url": "assets/img/pwa_install.cc0b35b6.jpg",
    "revision": "cc0b35b697f8184d6395afb5d88e08f3"
  },
  {
    "url": "assets/img/pwa_installed.7df4c154.png",
    "revision": "7df4c154d8dd3ecc4529efb8b0ee6479"
  },
  {
    "url": "assets/img/pwa_setup_button.1a13ee70.png",
    "revision": "1a13ee7017b43974ad6c995e2c783771"
  },
  {
    "url": "assets/img/pwa_setup_prompt.4b3c7ae2.png",
    "revision": "4b3c7ae29eae6548fa0083cdcaf94173"
  },
  {
    "url": "assets/img/pwa-fullscreen.20336af1.jpg",
    "revision": "20336af1158ce5aa4668c69bc906f42b"
  },
  {
    "url": "assets/img/schema.688fdb36.png",
    "revision": "688fdb36ff7e9f0171d56d24b4907bef"
  },
  {
    "url": "assets/img/schema.f921f8d6.png",
    "revision": "f921f8d698f60d8c8ba8843c70115aa2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/service-worker-setup.84b2c4b3.png",
    "revision": "84b2c4b3886cf6f9704a2ca5cbf2b952"
  },
  {
    "url": "assets/img/splash-screen.a247c4ec.jpg",
    "revision": "a247c4ec0d19192b3957995e0d377981"
  },
  {
    "url": "assets/img/sw-lifecycle.1d49eede.png",
    "revision": "1d49eede76c14aada50e839296506488"
  },
  {
    "url": "assets/img/sw-waiting.0b9f4663.png",
    "revision": "0b9f4663d4f9847758f9145b5fdbf5dc"
  },
  {
    "url": "assets/js/10.9725dfa9.js",
    "revision": "5eb5ed428479da6a81979e982b9051f5"
  },
  {
    "url": "assets/js/11.3ab35c1a.js",
    "revision": "a63d5928f1c39018d526659c20784bab"
  },
  {
    "url": "assets/js/12.1d8783c0.js",
    "revision": "28a329aa2746ca363550f1f1d16b0b97"
  },
  {
    "url": "assets/js/13.12e452ca.js",
    "revision": "3ebe5da83d433ef8adab979e0c291165"
  },
  {
    "url": "assets/js/14.f551e499.js",
    "revision": "217d32aa1d77812d40e9855b02bb93db"
  },
  {
    "url": "assets/js/15.d183389d.js",
    "revision": "fe6d74e3c68b512fcc59f1965032c231"
  },
  {
    "url": "assets/js/16.2bd9d4ec.js",
    "revision": "502b50eff334755f904e690282c1ef5e"
  },
  {
    "url": "assets/js/17.e0c70547.js",
    "revision": "406c010ab1a012ecbbb985c932373d4d"
  },
  {
    "url": "assets/js/18.1ac62902.js",
    "revision": "6241878417db3c17033ea17c690ef5d4"
  },
  {
    "url": "assets/js/19.c1d9eee1.js",
    "revision": "8dd6d02200529faf4f7e7fb6309ef5a3"
  },
  {
    "url": "assets/js/2.23c6cee6.js",
    "revision": "724a77b1d7d4641fb54931526e543aa8"
  },
  {
    "url": "assets/js/20.16db73fe.js",
    "revision": "3b43c443ccb09930cc80fb2529241012"
  },
  {
    "url": "assets/js/21.cd131399.js",
    "revision": "2602ebc63244f5f3fa732719f7d7cc38"
  },
  {
    "url": "assets/js/3.f38c0f84.js",
    "revision": "fa05c739f46ec9a9188606cd78272e8f"
  },
  {
    "url": "assets/js/4.f0dfd132.js",
    "revision": "8c286339d415734692e94e26a06f8a2d"
  },
  {
    "url": "assets/js/5.7c9ddfb1.js",
    "revision": "80fb8361f309ea9d67d274d35981e885"
  },
  {
    "url": "assets/js/6.4db51655.js",
    "revision": "210ea438f625c4c47116dff772487c70"
  },
  {
    "url": "assets/js/7.67599f73.js",
    "revision": "2e41a0b3882ae268df68590c014352aa"
  },
  {
    "url": "assets/js/8.da3dd183.js",
    "revision": "c6636b829f82f51048b22939a2734542"
  },
  {
    "url": "assets/js/9.c634f727.js",
    "revision": "aef0cb852ccf139c53eaabfa90ae526d"
  },
  {
    "url": "assets/js/app.27d2dbf1.js",
    "revision": "ce2b33118293553184f7cd86f2abb49e"
  },
  {
    "url": "finish.html",
    "revision": "74955eb0c06339df17e7b621b090b8ba"
  },
  {
    "url": "fr/1-manifest/index.html",
    "revision": "8944442c362d3a6a11a6d65bc885ae2e"
  },
  {
    "url": "fr/2-service-worker/index.html",
    "revision": "6d6eeadc39bceb73b0dd242f3819da3d"
  },
  {
    "url": "fr/3-precaching/index.html",
    "revision": "c9e8fea0089182f0494cb9ea7bcbf0fc"
  },
  {
    "url": "fr/4-api-cache/index.html",
    "revision": "43dddad3760873de434c0e8803d8d636"
  },
  {
    "url": "fr/5-background-sync/index.html",
    "revision": "11d4fd88ba9ed37ab74d483cb49c1621"
  },
  {
    "url": "fr/6-pwa-setup/index.html",
    "revision": "38669b02aaed805f2eea01ec32dd6d96"
  },
  {
    "url": "fr/finish.html",
    "revision": "1a65d754fe4b600069772e651f902204"
  },
  {
    "url": "fr/index.html",
    "revision": "1ef4baefcc71d8ccde5140a9b7cbd304"
  },
  {
    "url": "icon-192.png",
    "revision": "4956efdb11ba7bb7f50fb5f8ba338364"
  },
  {
    "url": "icon.png",
    "revision": "0d8e870589ac6ef5785b50e5367f6a7a"
  },
  {
    "url": "icon.svg",
    "revision": "e50f8d5f32a008c98c3d92887decd246"
  },
  {
    "url": "index.html",
    "revision": "376dd0aab1d66aa02d63059ac1e52fe5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
