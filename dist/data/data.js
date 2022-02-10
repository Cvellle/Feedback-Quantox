// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = void 0;
var a = "{\n  \"currentUser\": {\n    \"image\": \"./assets/user-images/image-zena.jpg\",\n    \"name\": \"Zena Kelley\",\n    \"username\": \"velvetround\"\n  },\n  \"productRequests\": [\n    {\n      \"id\": 1,\n      \"title\": \"Add tags for solutions\",\n      \"category\": \"enhancement\",\n      \"upvotes\": 112,\n      \"status\": \"suggestion\",\n      \"description\": \"Easier to search for solutions based on a specific stack.\",\n      \"comments\": [\n        {\n          \"id\": 1,\n          \"content\": \"Awesome idea! Trying to find framework-specific projects within the hubs can be tedious\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-suzanne.jpg\",\n            \"name\": \"Suzanne Chang\",\n            \"username\": \"upbeat1811\"\n          }\n        },\n        {\n          \"id\": 2,\n          \"content\": \"Please use fun, color-coded labels to easily identify them at a glance\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-thomas.jpg\",\n            \"name\": \"Thomas Hood\",\n            \"username\": \"brawnybrave\"\n          }\n        }\n      ]\n    },\n    {\n      \"id\": 2,\n      \"title\": \"Add a dark theme option\",\n      \"category\": \"feature\",\n      \"upvotes\": 99,\n      \"status\": \"suggestion\",\n      \"description\": \"It would help people with light sensitivities and who prefer dark mode.\",\n      \"comments\": [\n        {\n          \"id\": 3,\n          \"content\": \"Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device\u2019s dark mode turns on without the bright background it currently has.\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-elijah.jpg\",\n            \"name\": \"Elijah Moss\",\n            \"username\": \"hexagon.bestagon\"\n          }\n        },\n        {\n          \"id\": 4,\n          \"content\": \"Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It\u2019s also quite a trend with modern apps and  apparently saves battery life.\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-james.jpg\",\n            \"name\": \"James Skinner\",\n            \"username\": \"hummingbird1\"\n          },\n          \"replies\": [\n            {\n              \"content\": \"While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.\",\n              \"replyingTo\": \"hummingbird1\",\n              \"user\": {\n                \"image\": \"./assets/user-images/image-anne.jpg\",\n                \"name\": \"Anne Valentine\",\n                \"username\": \"annev1990\"\n              }\n            },\n            {\n              \"content\": \"Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.\",\n              \"replyingTo\": \"annev1990\",\n              \"user\": {\n                \"image\": \"./assets/user-images/image-ryan.jpg\",\n                \"name\": \"Ryan Welles\",\n                \"username\": \"voyager.344\"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"id\": 3,\n      \"title\": \"Q&A within the challenge hubs\",\n      \"category\": \"feature\",\n      \"upvotes\": 65,\n      \"status\": \"suggestion\",\n      \"description\": \"Challenge-specific Q&A would make for easy reference.\",\n      \"comments\": [\n        {\n          \"id\": 5,\n          \"content\": \"Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-george.jpg\",\n            \"name\": \"George Partridge\",\n            \"username\": \"soccerviewer8\"\n          }\n        }\n      ]\n    },\n    {\n      \"id\": 4,\n      \"title\": \"Add image/video upload to feedback\",\n      \"category\": \"enhancement\",\n      \"upvotes\": 51,\n      \"status\": \"suggestion\",\n      \"description\": \"Images and screencasts can enhance comments on solutions.\",\n      \"comments\": [\n        { \n          \"id\": 6,\n          \"content\": \"Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-javier.jpg\",\n            \"name\": \"Javier Pollard\",\n            \"username\": \"warlikeduke\"\n          }\n        },\n        {\n          \"id\": 7,\n          \"content\": \"Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-roxanne.jpg\",\n            \"name\": \"Roxanne Travis\",\n            \"username\": \"peppersprime32\"\n          }\n        }\n      ]\n    },\n    {\n      \"id\": 5,\n      \"title\": \"Ability to follow others\",\n      \"category\": \"feature\",\n      \"upvotes\": 42,\n      \"status\": \"suggestion\",\n      \"description\": \"Stay updated on comments and solutions other people post.\",\n      \"comments\": [\n        {\n          \"id\": 8,\n          \"content\": \"I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-victoria.jpg\",\n            \"name\": \"Victoria Mejia\",\n            \"username\": \"arlen_the_marlin\"\n          },\n          \"replies\": [\n            {\n              \"content\": \"Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they\u2019ve done lately. I learn a lot by reading good developers' code.\",\n              \"replyingTo\": \"arlen_the_marlin\",\n              \"user\": {\n                \"image\": \"./assets/user-images/image-zena.jpg\",\n                \"name\": \"Zena Kelley\",\n                \"username\": \"velvetround\"\n              }\n            }\n          ]\n        },\n        {\n          \"id\": 9,\n          \"content\": \"I've been saving the profile URLs of a few people and I check what they\u2019ve been doing from time to time. Being able to follow them solves that\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-jackson.jpg\",\n            \"name\": \"Jackson Barker\",\n            \"username\": \"countryspirit\"\n          }\n        }\n      ]\n    },\n    {\n      \"id\": 6,\n      \"title\": \"Preview images not loading\",\n      \"category\": \"bug\",\n      \"upvotes\": 3,\n      \"status\": \"suggestion\",\n      \"description\": \"Challenge preview images are missing when you apply a filter.\"\n    },\n    {\n      \"id\": 7,\n      \"title\": \"More comprehensive reports\",\n      \"category\": \"feature\",\n      \"upvotes\": 123,\n      \"status\": \"planned\",\n      \"description\": \"It would be great to see a more detailed breakdown of solutions.\",\n      \"comments\": [\n        {\n          \"id\": 10,\n          \"content\": \"This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-victoria.jpg\",\n            \"name\": \"Victoria Mejia\",\n            \"username\": \"arlen_the_marlin\"\n          }\n        },\n        {\n          \"id\": 11,\n          \"content\": \"Yeah, this would be really good. I'd love to see deeper insights into my code!\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-jackson.jpg\",\n            \"name\": \"Jackson Barker\",\n            \"username\": \"countryspirit\"\n          }\n        }\n      ]\n    },\n    {\n      \"id\": 8,\n      \"title\": \"Learning paths\",\n      \"category\": \"feature\",\n      \"upvotes\": 28,\n      \"status\": \"planned\",\n      \"description\": \"Sequenced projects for different goals to help people improve.\",\n      \"comments\": [\n        {\n          \"id\": 12,\n          \"content\": \"Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-george.jpg\",\n            \"name\": \"George Partridge\",\n            \"username\": \"soccerviewer8\"\n          }\n        }\n      ]\n    },\n    {\n      \"id\": 9,\n      \"title\": \"One-click portfolio generation\",\n      \"category\": \"feature\",\n      \"upvotes\": 62,\n      \"status\": \"in-progress\",\n      \"description\": \"Add ability to create professional looking portfolio from profile.\",\n      \"comments\": [\n        {\n          \"id\": 13,\n          \"content\": \"I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-ryan.jpg\",\n            \"name\": \"Ryan Welles\",\n            \"username\": \"voyager.344\"\n          }\n        }\n      ]\n    },\n    {\n      \"id\": 10,\n      \"title\": \"Bookmark challenges\",\n      \"category\": \"feature\",\n      \"upvotes\": 31,\n      \"status\": \"in-progress\",\n      \"description\": \"Be able to bookmark challenges to take later on.\",\n      \"comments\": [\n        {\n          \"id\": 14,\n          \"content\": \"This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-suzanne.jpg\",\n            \"name\": \"Suzanne Chang\",\n            \"username\": \"upbeat1811\"\n          }\n        }\n      ]\n    },\n    {\n      \"id\": 11,\n      \"title\": \"Animated solution screenshots\",\n      \"category\": \"bug\",\n      \"upvotes\": 9,\n      \"status\": \"in-progress\",\n      \"description\": \"Screenshots of solutions with animations don\u2019t display correctly.\"\n    },\n    {\n      \"id\": 12,\n      \"title\": \"Add micro-interactions\",\n      \"category\": \"enhancement\",\n      \"upvotes\": 71,\n      \"status\": \"live\",\n      \"description\": \"Small animations at specific points can add delight.\",\n      \"comments\": [\n        {\n          \"id\": 15,\n          \"content\": \"I'd love to see this! It always makes me so happy to see little details like these on websites.\",\n          \"user\": {\n            \"image\": \"./assets/user-images/image-victoria.jpg\",\n            \"name\": \"Victoria Mejia\",\n            \"username\": \"arlen_the_marlin\"\n          },\n          \"replies\": [\n            {\n              \"content\": \"Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!\",\n              \"replyingTo\": \"arlen_the_marlin\",\n              \"user\": {\n                \"image\": \"./assets/user-images/image-suzanne.jpg\",\n                \"name\": \"Suzanne Chang\",\n                \"username\": \"upbeat1811\"\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}";
exports.a = a;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50625" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data/data.js"], null)
//# sourceMappingURL=/data/data.js.map