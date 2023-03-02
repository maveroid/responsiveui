'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "47232f9ff02eda2a2e3f546413786ef0",
"/": "47232f9ff02eda2a2e3f546413786ef0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "adb112a9b60d5a57824464b1aaa44670",
".git/objects/8b/b7b85ea7024c72ddfba91332e3f29e8868045b": "ca53a599557e4e81d1f7b90ab3413ba5",
".git/objects/64/976ad1238455d29dd115aaf014275d35d19999": "72985e3be4cad2b37511fe05a9c0692a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/a9/e0f27b1155c411682b84717dda844a0fdde269": "18b9eeefd58b33033da6845794b6a31b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f8/1940791f62aad077a7fa7b34f224cd3ee00acd": "8dbeee3e8d5cdee056adad3c6249c7f4",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/76/069c6db0e27cb09ccb6d823a2e2a6d95411f4c": "fcb47a38501d2a6f295d382e11dfe136",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/03/391d22895930ca002189e405f0ab7164aff010": "1bc114359958a7ce49f7512a4f6a1a72",
".git/objects/b4/93d658077aed5bdf411d6b742ad1a8e90c94c6": "45fd6b076f26a37bd5d1bbdb21e7985a",
".git/objects/89/fb354784133ef9ee5ad87bdba169847ed65126": "f33125e8a66954dfa2673549626fbfc9",
".git/objects/d4/93d62b983a26c318e430ac216419c715d1f982": "59866026c2933581ff72ae1c0c10bb9e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0146a72e0fce68af16e3fda1065727e2ac3fbd": "448a96633a9b0ce4a0bce4e7a7a88d4e",
".git/objects/3a/8dd4a4c58cf030ecfa050af91c93f35f3562fa": "779fb400027852d7358e4e0996c64239",
".git/objects/7b/2cd4261e7cf95083f17c8b750648929acd999a": "77cdcb9a6397cbf5f7e60173975798d9",
".git/objects/f0/bd1cb2ee23c9aee09e7a13b2f6658ee4aa9132": "fe00b947996f5fbf82552ea8d3a11f50",
".git/objects/59/8b033c623c591aae5b4a86622690475ecf844a": "e726e7c3cac8f8f058325a733bae3de2",
".git/objects/38/34546b69548ac62198977ac0f76a9ba3d28c31": "ba6f644ea6866454a7da3f9472a968db",
".git/objects/7d/a4cea3a7fc8f560e9535d807cf9604c20428e0": "304eb909bf6fde47daff9d49afd510c3",
".git/objects/7d/44516aa6913fcf7aa8460e9807b6f86ae63326": "bdffc92355158dfb1a6dbb01b944de22",
".git/objects/01/4ef67e5664acf89be0a8914756ed32afb80367": "aca5ec15f99232d0368a2c746a222e00",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/d7/ec2a3e1cceab038ce8f6c4e85f3da2a8584568": "f6cac303c56b290a47ec6af4ecc1c4bf",
".git/objects/d7/150469da2c57d7bee735bf70cf84dff3b55e48": "a152ab2c2829146a7c7f03b085b4f03b",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/f3/7c3a5f38081d79cfbf496389348693c47f8b0e": "57c3cf38fc49b7cb42fcd264268f8535",
".git/objects/2b/a7eb004fb346a37d07aaf5d4c7f3d7c298b712": "45fdb3a2fe4760da2458ae7e416413e8",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/92/e66cb3611b76a6e94b9b362c807ea7207daa62": "177798a0cd15b9b95b4b4beed7f4c958",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/36/f646accbf6c03de946a4922b1a1ce9e845457f": "e48771cbb2ff3e58c066cb7110bf4e4f",
".git/objects/cb/eca047954b0a3f82e0ddc69185c09993161101": "bb6bc4e28f0daba99a032ef05e72aa47",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/d9/e071c8d8b614df99669921f5cfba579fd5e984": "fc7a74115d3dfef5151090c4afa17426",
".git/objects/d9/21fc00d8f3dca555689e755252fcc670e10828": "f1f207424a4b6e255dc1c61b40c2c26d",
".git/objects/82/1f0265433fd72fb4574012c4dc4ec0356241bb": "582aaf3346020c97a241aee94cdac7d8",
".git/objects/4c/bff8dd64246850df3511de8d93d4d259fb1574": "61683686a63d2c4a71ff398ddc6332ca",
".git/objects/4c/55a7fb7278b6eebe24d6ab4613c414f030ac9d": "d1dfd63eac5581c0e3c54ffaa4acb0e5",
".git/objects/8d/ab829f61e8adc0dbedfd26d7f423af59e1039b": "c607a4fe99769ec398f1f042ce1f67c0",
".git/objects/35/813d0323ffa41ed54b58936cfa5063395e6ea2": "a50dbdeae1332376006e4b93ae5d7763",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "7825fc33227a75ed4f699a5efa7e1c7f",
".git/logs/HEAD": "7ca4e7cb39eae74100cb102390f2399f",
".git/logs/refs/remotes/origin/main": "79950f01a6a4bbc7aabd63ae22ea9a64",
".git/logs/refs/heads/main": "7ca4e7cb39eae74100cb102390f2399f",
".git/refs/remotes/origin/main": "e721e2f9e33b09913800036cb85e5c90",
".git/refs/heads/main": "e721e2f9e33b09913800036cb85e5c90",
".git/index": "f66b0f2fe1c7952eedcb6e576ff94df6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"version.json": "371812bd00996e2028f610beefedc90b",
"main.dart.js": "b5aadc4fd3b503923f8089b0af599b84",
"manifest.json": "4f762937a306825eb0db6fadd9ec6a14",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/NOTICES": "f8d0f538c1f439e4cfc253e418c337d6",
"assets/FontManifest.json": "329607a1d1faaad9e5d99ea7ee33b66e",
"assets/AssetManifest.json": "88e7500d1dec2c3711954530c2c7507d",
"assets/assets/electricity.svg": "b5f6b7666493bd2736f57883b466bb52",
"assets/assets/search.svg": "b2feb1c702b9b4c46343cfc222770c0d",
"assets/assets/pie-chart.svg": "23d3f5bae0abfbd169de394912e752af",
"assets/assets/clipboard.svg": "908a3ba351834d8111a9184f96ee1d15",
"assets/assets/document.svg": "3495668510842cd9097776c7db2cd607",
"assets/assets/ring.svg": "6ed7f9f01871f426e979afb4e2252bf2",
"assets/assets/drop.svg": "7b8b2af526b2e2512c2682f889fef14f",
"assets/assets/transfer.svg": "d4e0e58b46a323d2b0dcb37ec672f2ce",
"assets/assets/man.jpeg": "3667d100cf087238f2cdf0a45a6c587c",
"assets/assets/invoice.svg": "f7d19983441244e6bd59d7b121b34da0",
"assets/assets/wifi.svg": "c83a375863190fc9862addc8fab99d49",
"assets/assets/card.png": "299e694bfe68985abd9c4e3ea19802d2",
"assets/assets/home.svg": "63f7eabb7a7d78c178031926c3c9973a",
"assets/assets/bank.svg": "941c0480bea8bdc6ca7d29fc0b4640fc",
"assets/assets/calendar.svg": "5da24f42cc2eac5ba7f84b37d2163055",
"assets/assets/credit-card.svg": "e20c5068e78d4d9a1c719e93f7e84ef6",
"assets/assets/mac-action.svg": "2527f1ab853e49d4d5e9802369653b97",
"assets/assets/trophy.svg": "e036099c505d72b2455e1f8388e6376d",
"assets/assets/salary.svg": "1462f937a1198cff1a8838bbea1cc7b2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
