'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "34f6d48d907f980041d3479e2542d911",
"assets/AssetManifest.bin.json": "33a9bd02331cd54c96a90ca984ed89eb",
"assets/AssetManifest.json": "2165dd6ab9999940bce49a00203f80fa",
"assets/assets/audio/appear.wav": "40824af1e90dc83a5423c41398550175",
"assets/assets/audio/hit.wav": "679a5eb44dc2f639842efda1d616d9d6",
"assets/assets/audio/jump.wav": "4341c336e45d8aefe4d21f9573b51f50",
"assets/assets/audio/newLevel.wav": "be8615a6b823d4c11313677cedf63e24",
"assets/assets/audio/pickup.wav": "6d54871e8bf5da9f3d64e322972f6232",
"assets/assets/audio/reachedCheckpoint.wav": "c02bf7f2ab1a336ef5ee706e516b1ebe",
"assets/assets/audio/win.wav": "0831d581d2789ace24690901067fd2f3",
"assets/assets/images/Background/Blue.png": "f86e07aab82505fc49710152f83cc385",
"assets/assets/images/Background/Brown.png": "45c9c887fa73b0ade76974de63ab9157",
"assets/assets/images/Background/Gray.png": "31fb9bc36ec926ee64d999d3387b7e09",
"assets/assets/images/Background/Green.png": "e6eeace8a9d516f2e9768e5228e824fb",
"assets/assets/images/Background/Pink.png": "31b5e360eb9610c58138bb7cfdfb96a1",
"assets/assets/images/Background/Purple.png": "f8cc6aa8fd738e6e4db8b6607b7e6c37",
"assets/assets/images/Background/Yellow.png": "c3f96416e21f366bc0c3635ce5b530d5",
"assets/assets/images/HUD/Joystick.png": "0d48d554dbd23681dc2c3dc26d9ec0cc",
"assets/assets/images/HUD/jumpButton.png": "c365c9b1778af4f9775873544b7feab1",
"assets/assets/images/HUD/Knob.png": "07acc29d4e539b9c402f4f1a57d9f4e0",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Idle)(64x64).png": "dd8752c20a0f69ab173f1ead16044462",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Out)%2520(64x64).png": "c4730e5429a75691e2d2a9351c76738e",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(No%2520Flag).png": "9126203dc833ec3b7dfb7a05e41910e5",
"assets/assets/images/Items/Fruits/Apple.png": "de3dbfa7d33e6bb344d0560e36d8bf53",
"assets/assets/images/Items/Fruits/Bananas.png": "03466a1dbd95724e705efe17e72c1c4e",
"assets/assets/images/Items/Fruits/Cherries.png": "fc2a60aee885c33d0d10e643157213e4",
"assets/assets/images/Items/Fruits/Collected.png": "0aa8cdedde5af58d5222c2db1e0a96de",
"assets/assets/images/Items/Fruits/Kiwi.png": "3d903dd9bf3421c31a5373b0920c876e",
"assets/assets/images/Items/Fruits/Melon.png": "eb6f978fbf95d76587bcf656c649540b",
"assets/assets/images/Items/Fruits/Orange.png": "60e0f68620c442b9403a477bbe3588ed",
"assets/assets/images/Items/Fruits/Pineapple.png": "0740bf84a38504383c80103d60582217",
"assets/assets/images/Items/Fruits/Strawberry.png": "568a3f91b8f6102f1b518c1aba0e8e09",
"assets/assets/images/Main%2520Characters/Appearing%2520(96x96).png": "9449bf1f8d68ac08331aa091d6095e34",
"assets/assets/images/Main%2520Characters/Disappearing%2520(96x96).png": "1284313649da02eccc0d3ed6796996a3",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Double%2520Jump%2520(32x32).png": "5afb26aa4240eff1eab105eb3263ab83",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Fall%2520(32x32).png": "469d2d7814fa8258325eb5d305808315",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Hit%2520(32x32).png": "d03a7bbce7fbda59dd057397f86a8899",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Idle%2520(32x32).png": "29c95dbb63a9bf44c42821aa0cf49de8",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Jump%2520(32x32).png": "99da59b514370539951a76ba1fe51821",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Run%2520(32x32).png": "b04bbc82dc692516a4b13c0d9d5b9ebd",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Wall%2520Jump%2520(32x32).png": "552254b40eac6d10d2c3d779edb92116",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Double%2520Jump%2520(32x32).png": "351c1df6eb5ac94209e8e490ab816879",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Fall%2520(32x32).png": "ef8f3627041b7ae2a1dc76dfc3e419f3",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Hit%2520(32x32).png": "4c1ba2bf4e576409abbbd1aacc91d51d",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Idle%2520(32x32).png": "cb655be6f9354444720c7ce1dbd61dae",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Jump%2520(32x32).png": "4f048ccbc783c8eb3824be9651da8a34",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Run%2520(32x32).png": "fb191b4e6ac599286c38e496a700cfd2",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Wall%2520Jump%2520(32x32).png": "37ec0be0f82c3750a07efa558c032ee7",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Double%2520Jump%2520(32x32).png": "c76baa04d956c9d985c79643d7b2f672",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Fall%2520(32x32).png": "a20bd61d76132e4301fcfe7aa02ca9ba",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Hit%2520(32x32).png": "5d93268a09fb2959e1755da4ba201f9e",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Idle%2520(32x32).png": "1b35f85f1241dc1f0597cafbe1eac7f6",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Jump%2520(32x32).png": "cafaf2f48f36c9a6655a37f9c1c47b4a",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Run%2520(32x32).png": "25fcce89dfb6673a81d384091c87353d",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Wall%2520Jump%2520(32x32).png": "955d352171a2b666ae705b6205856ce1",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Double%2520Jump%2520(32x32).png": "612926916a3e8c5deff2023722c465ac",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Fall%2520(32x32).png": "5eb8c32845fad5fcc7794247eb91aed0",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Hit%2520(32x32).png": "bbd39134a77e658b0b9b64ded537972c",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Idle%2520(32x32).png": "1cb575929ac10fe13dfafa61d78ba28d",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Jump%2520(32x32).png": "f28e95fc98b251913baf3a21d5602381",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Run%2520(32x32).png": "016f388a07f71a930fd79a7a806d5da8",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Wall%2520Jump%2520(32x32).png": "76cbdd4a22d50bd65ac02be8a5eb1547",
"assets/assets/images/Menu/Buttons/Achievements.png": "b9bb58144606336efcd4862d35482f47",
"assets/assets/images/Menu/Buttons/Back.png": "661cfd0fdba294a951eb63c556684a64",
"assets/assets/images/Menu/Buttons/Close.png": "5c3a207383c5642288b01d314855a42a",
"assets/assets/images/Menu/Buttons/Leaderboard.png": "e3854b8ad5633b1f8017d08b7a783047",
"assets/assets/images/Menu/Buttons/Levels.png": "5364f08108b6f75ff31b5b7c84f9789a",
"assets/assets/images/Menu/Buttons/Next.png": "2f75777c57c36c83c6140bbd7b97a5e1",
"assets/assets/images/Menu/Buttons/Play.png": "23f2b2a41eb467518bbfef795d876dc8",
"assets/assets/images/Menu/Buttons/Previous.png": "c63a3a14721d926b03801f38b81b66a6",
"assets/assets/images/Menu/Buttons/Restart.png": "45fe1343f546485e8e288b122467f2fd",
"assets/assets/images/Menu/Buttons/Settings.png": "a56908d71e428647c51e73af372739ab",
"assets/assets/images/Menu/Buttons/Volume.png": "60060aab64ff40a0a996820f64a308b3",
"assets/assets/images/Other/Confetti%2520(16x16).png": "e23a201b4bfa7999a176dc9ec004c7bc",
"assets/assets/images/Other/Dust%2520Particle.png": "c72fceec8ccfcefc030fbc44ccdd68c4",
"assets/assets/images/Other/Shadow.png": "e0a519d1a807df82abc87e6a2375d20f",
"assets/assets/images/Other/Transition.png": "676092b6943e94a165bea63707f4518f",
"assets/assets/images/Terrain/Terrain%2520(16x16).png": "df891f02449c0565d51e2bf7823a0e38",
"assets/assets/images/Traps/Falling%2520Platforms/Off.png": "61cbabffca58576e5d8e0b7abf38b95e",
"assets/assets/images/Traps/Falling%2520Platforms/On%2520(32x10).png": "025cf6ddf15c55f73d65ce670e45b94d",
"assets/assets/images/Traps/Fire/Hit%2520(16x32).png": "b161b5e6801126c9e999d09bf69ccb97",
"assets/assets/images/Traps/Fire/Off.png": "2984d7e69a4f68c94d6ead997e68e3d3",
"assets/assets/images/Traps/Fire/On%2520(16x32).png": "eaf35fcb43611e2d738a475b2a66beae",
"assets/assets/images/Traps/Platforms/Brown%2520Off.png": "2c7df5d45d132f6c3e298aaa28f90e94",
"assets/assets/images/Traps/Platforms/Brown%2520On%2520(32x8).png": "9de63939bf58f9e0cdcd28b463724797",
"assets/assets/images/Traps/Platforms/Chain.png": "06dd0d1de25353ef396f9850ab16061e",
"assets/assets/images/Traps/Platforms/ChainH.png": "577005f1a985a6e7a23ba9cc8c4d928e",
"assets/assets/images/Traps/Platforms/ChainV3.png": "8b2cff0f444ff05db5390cc7eb2ebd58",
"assets/assets/images/Traps/Platforms/Grey%2520Off.png": "5513eff304a382fc4b984d2cf7975cc4",
"assets/assets/images/Traps/Platforms/Grey%2520On%2520(32x8).png": "43a0f74d1389afd48b42aa45455bf1fa",
"assets/assets/images/Traps/Rock%2520Head/Blink%2520(42x42).png": "79bec88f1bab85f2d3304eb64c52e6c6",
"assets/assets/images/Traps/Rock%2520Head/Bottom%2520Hit%2520(42x42).png": "a8905ebb8b4ca7775d234e61b70b0e04",
"assets/assets/images/Traps/Rock%2520Head/Idle.png": "d627e29f18b4c88d698fada937fdb4f0",
"assets/assets/images/Traps/Rock%2520Head/Left%2520Hit%2520(42x42).png": "29e183472fc139814d5245a14b0c2ebd",
"assets/assets/images/Traps/Rock%2520Head/Right%2520Hit%2520(42x42).png": "c2e11c4f2e75253e649d39f6e0dcb46d",
"assets/assets/images/Traps/Rock%2520Head/Top%2520Hit%2520(42x42).png": "a7bc34c2035ccb90c16b7693209d03fd",
"assets/assets/images/Traps/Saw/Chain.png": "69669f8f421b508058cdf1232dc49e28",
"assets/assets/images/Traps/Saw/Off.png": "66d27386fec46e0b052941957d9bdc22",
"assets/assets/images/Traps/Saw/On%2520(38x38).png": "817477a39df8b330334e3866c1cb574b",
"assets/assets/images/Traps/Spikes/Idle.png": "64c275b1b14a4c8cd49088ce8ebf0db5",
"assets/assets/images/Traps/Spikes/spikeDown.png": "5e171f125f020ca4065380bb1e9308be",
"assets/assets/images/Traps/Spikes/spikeLeft.png": "72ba1344ba87dfac98cb35687a20478b",
"assets/assets/images/Traps/Spikes/spikeRight.png": "673a0101845829eb76b8cdff74500876",
"assets/assets/images/Traps/Trampoline/Idle.png": "9a1c4cc3188aaae2247f378b2458b9d9",
"assets/assets/images/Traps/Trampoline/Jump%2520(28x28).png": "1c868ca3c1adb54c332a149e7e55f130",
"assets/assets/tiles/level-01.tmx": "2df907cf353e2d8734920ddd1a100f8b",
"assets/assets/tiles/level-02.tmx": "2dd327c5c6b7de6bafce6d8d7a5f1001",
"assets/assets/tiles/level-03.tmx": "5b5e7756afb3f762d7ffee3c5ba32612",
"assets/assets/tiles/level-04.tmx": "5d931ac38601de3f2bb07a7a318c4c83",
"assets/assets/tiles/level-05.tmx": "b74a47264f04830549613634e2fc82fa",
"assets/assets/tiles/pixel_adventure.tiled-project": "f569bfd3353c5a0faa26a765cae42f0d",
"assets/assets/tiles/pixel_adventure.tiled-session": "1ec607a5534b405ec84ad7c9c744ed6e",
"assets/assets/tiles/Pixel_adventure.tsx": "cc1afefe2a0cd89289048022bb0ac3ed",
"assets/assets/tiles/Shadow.tsx": "998c824914e6fba0701855b74fee258b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "320ff42a90acd07115db7370c04269cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d0735600ae978f21175533b399c56905",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e03cf659fb1c856c83a938983017deb1",
"/": "e03cf659fb1c856c83a938983017deb1",
"main.dart.js": "89bd02941d1f9650455796bd75526576",
"manifest.json": "0b6834feb81bab751e4402180ab5f854",
"version.json": "874135466a793031ac670a4ff46acc48"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
