// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eiXul":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "77112c5f5b6aaa6e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8gWsJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WcmModal", ()=>ae);
parcelHelpers.export(exports, "WcmQrCode", ()=>j);
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var _classMapJs = require("lit/directives/class-map.js");
var _modalCore = require("@walletconnect/modal-core");
var _litHtml = require("lit-html");
var _motion = require("motion");
var _ifDefinedJs = require("lit/directives/if-defined.js");
var _qrcode = require("qrcode");
var _qrcodeDefault = parcelHelpers.interopDefault(_qrcode);
var et = Object.defineProperty, Be = Object.getOwnPropertySymbols, tt = Object.prototype.hasOwnProperty, ot = Object.prototype.propertyIsEnumerable, Ue = (e, o, r)=>o in e ? et(e, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[o] = r, ve = (e, o)=>{
    for(var r in o || (o = {}))tt.call(o, r) && Ue(e, r, o[r]);
    if (Be) for (var r of Be(o))ot.call(o, r) && Ue(e, r, o[r]);
    return e;
};
function rt() {
    var e;
    const o = (e = (0, _modalCore.ThemeCtrl).state.themeMode) != null ? e : "dark", r = {
        light: {
            foreground: {
                1: "rgb(20,20,20)",
                2: "rgb(121,134,134)",
                3: "rgb(158,169,169)"
            },
            background: {
                1: "rgb(255,255,255)",
                2: "rgb(241,243,243)",
                3: "rgb(228,231,231)"
            },
            overlay: "rgba(0,0,0,0.1)"
        },
        dark: {
            foreground: {
                1: "rgb(228,231,231)",
                2: "rgb(148,158,158)",
                3: "rgb(110,119,119)"
            },
            background: {
                1: "rgb(20,20,20)",
                2: "rgb(39,42,42)",
                3: "rgb(59,64,64)"
            },
            overlay: "rgba(255,255,255,0.1)"
        }
    }[o];
    return {
        "--wcm-color-fg-1": r.foreground[1],
        "--wcm-color-fg-2": r.foreground[2],
        "--wcm-color-fg-3": r.foreground[3],
        "--wcm-color-bg-1": r.background[1],
        "--wcm-color-bg-2": r.background[2],
        "--wcm-color-bg-3": r.background[3],
        "--wcm-color-overlay": r.overlay
    };
}
function He() {
    return {
        "--wcm-accent-color": "#3396FF",
        "--wcm-accent-fill-color": "#FFFFFF",
        "--wcm-z-index": "89",
        "--wcm-background-color": "#3396FF",
        "--wcm-background-border-radius": "8px",
        "--wcm-container-border-radius": "30px",
        "--wcm-wallet-icon-border-radius": "15px",
        "--wcm-wallet-icon-large-border-radius": "30px",
        "--wcm-wallet-icon-small-border-radius": "7px",
        "--wcm-input-border-radius": "28px",
        "--wcm-button-border-radius": "10px",
        "--wcm-notification-border-radius": "36px",
        "--wcm-secondary-button-border-radius": "28px",
        "--wcm-icon-button-border-radius": "50%",
        "--wcm-button-hover-highlight-border-radius": "10px",
        "--wcm-text-big-bold-size": "20px",
        "--wcm-text-big-bold-weight": "600",
        "--wcm-text-big-bold-line-height": "24px",
        "--wcm-text-big-bold-letter-spacing": "-0.03em",
        "--wcm-text-big-bold-text-transform": "none",
        "--wcm-text-xsmall-bold-size": "10px",
        "--wcm-text-xsmall-bold-weight": "700",
        "--wcm-text-xsmall-bold-line-height": "12px",
        "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
        "--wcm-text-xsmall-bold-text-transform": "uppercase",
        "--wcm-text-xsmall-regular-size": "12px",
        "--wcm-text-xsmall-regular-weight": "600",
        "--wcm-text-xsmall-regular-line-height": "14px",
        "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
        "--wcm-text-xsmall-regular-text-transform": "none",
        "--wcm-text-small-thin-size": "14px",
        "--wcm-text-small-thin-weight": "500",
        "--wcm-text-small-thin-line-height": "16px",
        "--wcm-text-small-thin-letter-spacing": "-0.03em",
        "--wcm-text-small-thin-text-transform": "none",
        "--wcm-text-small-regular-size": "14px",
        "--wcm-text-small-regular-weight": "600",
        "--wcm-text-small-regular-line-height": "16px",
        "--wcm-text-small-regular-letter-spacing": "-0.03em",
        "--wcm-text-small-regular-text-transform": "none",
        "--wcm-text-medium-regular-size": "16px",
        "--wcm-text-medium-regular-weight": "600",
        "--wcm-text-medium-regular-line-height": "20px",
        "--wcm-text-medium-regular-letter-spacing": "-0.03em",
        "--wcm-text-medium-regular-text-transform": "none",
        "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
        "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
        "--wcm-success-color": "rgb(38,181,98)",
        "--wcm-error-color": "rgb(242, 90, 103)",
        "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
        "--wcm-overlay-backdrop-filter": "none"
    };
}
const h = {
    getPreset (e) {
        return He()[e];
    },
    setTheme () {
        const e = document.querySelector(":root"), { themeVariables: o } = (0, _modalCore.ThemeCtrl).state;
        if (e) {
            const r = ve(ve(ve({}, rt()), He()), o);
            Object.entries(r).forEach(([a, t])=>e.style.setProperty(a, t));
        }
    },
    globalCss: (0, _lit.css)`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
}, at = (0, _lit.css)`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
var lt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, F = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? it(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && lt(o, r, t), t;
};
let T = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = ()=>null, this.variant = "default";
    }
    render() {
        const e = {
            "wcm-icon-left": this.iconLeft !== void 0,
            "wcm-icon-right": this.iconRight !== void 0,
            "wcm-ghost": this.variant === "ghost",
            "wcm-outline": this.variant === "outline"
        };
        let o = "inverse";
        return this.variant === "ghost" && (o = "secondary"), this.variant === "outline" && (o = "accent"), (0, _lit.html)`<button class="${(0, _classMapJs.classMap)(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${o}"><slot></slot></wcm-text>${this.iconRight}</button>`;
    }
};
T.styles = [
    h.globalCss,
    at
], F([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], T.prototype, "disabled", 2), F([
    (0, _decoratorsJs.property)()
], T.prototype, "iconLeft", 2), F([
    (0, _decoratorsJs.property)()
], T.prototype, "iconRight", 2), F([
    (0, _decoratorsJs.property)()
], T.prototype, "onClick", 2), F([
    (0, _decoratorsJs.property)()
], T.prototype, "variant", 2), T = F([
    (0, _decoratorsJs.customElement)("wcm-button")
], T);
const nt = (0, _lit.css)`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
var ct = Object.defineProperty, st = Object.getOwnPropertyDescriptor, ue = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? st(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && ct(o, r, t), t;
};
let ee = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.disabled = !1, this.variant = "primary";
    }
    render() {
        const e = {
            "wcm-secondary": this.variant === "secondary"
        };
        return (0, _lit.html)`<button ?disabled="${this.disabled}" class="${(0, _classMapJs.classMap)(e)}"><slot></slot></button>`;
    }
};
ee.styles = [
    h.globalCss,
    nt
], ue([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], ee.prototype, "disabled", 2), ue([
    (0, _decoratorsJs.property)()
], ee.prototype, "variant", 2), ee = ue([
    (0, _decoratorsJs.customElement)("wcm-button-big")
], ee);
const dt = (0, _lit.css)`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var mt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, wt = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? ht(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && mt(o, r, t), t;
};
let be = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<div><slot></slot></div>`;
    }
};
be.styles = [
    h.globalCss,
    dt
], be = wt([
    (0, _decoratorsJs.customElement)("wcm-info-footer")
], be);
const v = {
    CROSS_ICON: (0, _litHtml.svg)`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_LOGO: (0, _litHtml.svg)`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: (0, _litHtml.svg)`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: (0, _litHtml.svg)`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: (0, _litHtml.svg)`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: (0, _litHtml.svg)`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: (0, _litHtml.svg)`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: (0, _litHtml.svg)`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: (0, _litHtml.svg)`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: (0, _litHtml.svg)`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: (0, _litHtml.svg)`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: (0, _litHtml.svg)`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: (0, _litHtml.svg)`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: (0, _litHtml.svg)`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: (0, _litHtml.svg)`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    SEARCH_ICON: (0, _litHtml.svg)`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    WALLET_PLACEHOLDER: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    GLOBE_ICON: (0, _litHtml.svg)`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
}, pt = (0, _lit.css)`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
var gt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, ut = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? vt(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && gt(o, r, t), t;
};
let fe = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${v.WALLET_CONNECT_LOGO} <button @click="${(0, _modalCore.ModalCtrl).close}">${v.CROSS_ICON}</button></div>`;
    }
};
fe.styles = [
    h.globalCss,
    pt
], fe = ut([
    (0, _decoratorsJs.customElement)("wcm-modal-backcard")
], fe);
const bt = (0, _lit.css)`main{padding:20px;padding-top:0;width:100%}`;
var ft = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, yt = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? xt(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && ft(o, r, t), t;
};
let xe = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<main><slot></slot></main>`;
    }
};
xe.styles = [
    h.globalCss,
    bt
], xe = yt([
    (0, _decoratorsJs.customElement)("wcm-modal-content")
], xe);
const $t = (0, _lit.css)`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
var Ct = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, Ot = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? kt(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Ct(o, r, t), t;
};
let ye = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<footer><slot></slot></footer>`;
    }
};
ye.styles = [
    h.globalCss,
    $t
], ye = Ot([
    (0, _decoratorsJs.customElement)("wcm-modal-footer")
], ye);
const Wt = (0, _lit.css)`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
var It = Object.defineProperty, Et = Object.getOwnPropertyDescriptor, te = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Et(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && It(o, r, t), t;
};
let S = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1;
    }
    backBtnTemplate() {
        return (0, _lit.html)`<button class="wcm-back-btn" @click="${(0, _modalCore.RouterCtrl).goBack}">${v.BACK_ICON}</button>`;
    }
    actionBtnTemplate() {
        return (0, _lit.html)`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
    }
    render() {
        const e = {
            "wcm-border": this.border
        }, o = (0, _modalCore.RouterCtrl).state.history.length > 1, r = this.title ? (0, _lit.html)`<wcm-text variant="big-bold">${this.title}</wcm-text>` : (0, _lit.html)`<slot></slot>`;
        return (0, _lit.html)`<header class="${(0, _classMapJs.classMap)(e)}">${o ? this.backBtnTemplate() : null} ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
    }
};
S.styles = [
    h.globalCss,
    Wt
], te([
    (0, _decoratorsJs.property)()
], S.prototype, "title", 2), te([
    (0, _decoratorsJs.property)()
], S.prototype, "onAction", 2), te([
    (0, _decoratorsJs.property)()
], S.prototype, "actionIcon", 2), te([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], S.prototype, "border", 2), S = te([
    (0, _decoratorsJs.customElement)("wcm-modal-header")
], S);
const c = {
    MOBILE_BREAKPOINT: 600,
    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
    getShadowRootElement (e, o) {
        const r = e.renderRoot.querySelector(o);
        if (!r) throw new Error(`${o} not found`);
        return r;
    },
    getWalletIcon ({ id: e, image_id: o }) {
        const { walletImages: r } = (0, _modalCore.ConfigCtrl).state;
        return r != null && r[e] ? r[e] : o ? (0, _modalCore.ExplorerCtrl).getWalletImageUrl(o) : "";
    },
    getWalletName (e, o = !1) {
        return o && e.length > 8 ? `${e.substring(0, 8)}..` : e;
    },
    isMobileAnimation () {
        return window.innerWidth <= c.MOBILE_BREAKPOINT;
    },
    async preloadImage (e) {
        const o = new Promise((r, a)=>{
            const t = new Image;
            t.onload = r, t.onerror = a, t.crossOrigin = "anonymous", t.src = e;
        });
        return Promise.race([
            o,
            (0, _modalCore.CoreUtil).wait(3e3)
        ]);
    },
    getErrorMessage (e) {
        return e instanceof Error ? e.message : "Unknown Error";
    },
    debounce (e, o = 500) {
        let r;
        return (...a)=>{
            function t() {
                e(...a);
            }
            r && clearTimeout(r), r = setTimeout(t, o);
        };
    },
    handleMobileLinking (e) {
        const { walletConnectUri: o } = (0, _modalCore.OptionsCtrl).state, { mobile: r, name: a } = e, t = r?.native, l = r?.universal;
        c.setRecentWallet(e);
        function i(s) {
            let $ = "";
            t ? $ = (0, _modalCore.CoreUtil).formatUniversalUrl(t, s, a) : l && ($ = (0, _modalCore.CoreUtil).formatNativeUrl(l, s, a)), (0, _modalCore.CoreUtil).openHref($, "_self");
        }
        o && i(o);
    },
    handleAndroidLinking () {
        const { walletConnectUri: e } = (0, _modalCore.OptionsCtrl).state;
        e && ((0, _modalCore.CoreUtil).setWalletConnectAndroidDeepLink(e), (0, _modalCore.CoreUtil).openHref(e, "_self"));
    },
    async handleUriCopy () {
        const { walletConnectUri: e } = (0, _modalCore.OptionsCtrl).state;
        if (e) try {
            await navigator.clipboard.writeText(e), (0, _modalCore.ToastCtrl).openToast("Link copied", "success");
        } catch  {
            (0, _modalCore.ToastCtrl).openToast("Failed to copy", "error");
        }
    },
    getCustomImageUrls () {
        const { walletImages: e } = (0, _modalCore.ConfigCtrl).state, o = Object.values(e ?? {});
        return Object.values(o);
    },
    truncate (e, o = 8) {
        return e.length <= o ? e : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`;
    },
    setRecentWallet (e) {
        try {
            localStorage.setItem(c.WCM_RECENT_WALLET_DATA, JSON.stringify(e));
        } catch  {
            console.info("Unable to set recent wallet");
        }
    },
    getRecentWallet () {
        try {
            const e = localStorage.getItem(c.WCM_RECENT_WALLET_DATA);
            return e ? JSON.parse(e) : void 0;
        } catch  {
            console.info("Unable to get recent wallet");
        }
    },
    caseSafeIncludes (e, o) {
        return e.toUpperCase().includes(o.toUpperCase());
    },
    openWalletExplorerUrl () {
        (0, _modalCore.CoreUtil).openHref(c.EXPLORER_WALLET_URL, "_blank");
    },
    getCachedRouterWalletPlatforms () {
        const { desktop: e, mobile: o } = (0, _modalCore.CoreUtil).getWalletRouterData(), r = Boolean(e?.native), a = Boolean(e?.universal), t = Boolean(o?.native) || Boolean(o?.universal);
        return {
            isDesktop: r,
            isMobile: t,
            isWeb: a
        };
    },
    goToConnectingView (e) {
        (0, _modalCore.RouterCtrl).setData({
            Wallet: e
        });
        const o = (0, _modalCore.CoreUtil).isMobile(), { isDesktop: r, isWeb: a, isMobile: t } = c.getCachedRouterWalletPlatforms();
        o ? t ? (0, _modalCore.RouterCtrl).push("MobileConnecting") : a ? (0, _modalCore.RouterCtrl).push("WebConnecting") : (0, _modalCore.RouterCtrl).push("InstallWallet") : r ? (0, _modalCore.RouterCtrl).push("DesktopConnecting") : a ? (0, _modalCore.RouterCtrl).push("WebConnecting") : t ? (0, _modalCore.RouterCtrl).push("MobileQrcodeConnecting") : (0, _modalCore.RouterCtrl).push("InstallWallet");
    }
}, Mt = (0, _lit.css)`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
var Lt = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, $e = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Rt(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Lt(o, r, t), t;
};
let oe = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.view = (0, _modalCore.RouterCtrl).state.view, this.prevView = (0, _modalCore.RouterCtrl).state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = (0, _modalCore.RouterCtrl).subscribe((e)=>{
            this.view !== e.view && this.onChangeRoute();
        });
    }
    firstUpdated() {
        this.resizeObserver = new ResizeObserver(([e])=>{
            const o = `${e.contentRect.height}px`;
            this.oldHeight !== "0px" && (0, _motion.animate)(this.routerEl, {
                height: [
                    this.oldHeight,
                    o
                ]
            }, {
                duration: .2
            }), this.oldHeight = o;
        }), this.resizeObserver.observe(this.contentEl);
    }
    disconnectedCallback() {
        var e, o;
        (e = this.unsubscribe) == null || e.call(this), (o = this.resizeObserver) == null || o.disconnect();
    }
    get routerEl() {
        return c.getShadowRootElement(this, ".wcm-router");
    }
    get contentEl() {
        return c.getShadowRootElement(this, ".wcm-content");
    }
    viewTemplate() {
        switch(this.view){
            case "ConnectWallet":
                return (0, _lit.html)`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
            case "DesktopConnecting":
                return (0, _lit.html)`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
            case "MobileConnecting":
                return (0, _lit.html)`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
            case "WebConnecting":
                return (0, _lit.html)`<wcm-web-connecting-view></wcm-web-connecting-view>`;
            case "MobileQrcodeConnecting":
                return (0, _lit.html)`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
            case "WalletExplorer":
                return (0, _lit.html)`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
            case "Qrcode":
                return (0, _lit.html)`<wcm-qrcode-view></wcm-qrcode-view>`;
            case "InstallWallet":
                return (0, _lit.html)`<wcm-install-wallet-view></wcm-install-wallet-view>`;
            default:
                return (0, _lit.html)`<div>Not Found</div>`;
        }
    }
    async onChangeRoute() {
        await (0, _motion.animate)(this.routerEl, {
            opacity: [
                1,
                0
            ],
            scale: [
                1,
                1.02
            ]
        }, {
            duration: .15,
            delay: .1
        }).finished, this.view = (0, _modalCore.RouterCtrl).state.view, (0, _motion.animate)(this.routerEl, {
            opacity: [
                0,
                1
            ],
            scale: [
                .99,
                1
            ]
        }, {
            duration: .37,
            delay: .05
        });
    }
    render() {
        return (0, _lit.html)`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
    }
};
oe.styles = [
    h.globalCss,
    Mt
], $e([
    (0, _decoratorsJs.state)()
], oe.prototype, "view", 2), $e([
    (0, _decoratorsJs.state)()
], oe.prototype, "prevView", 2), oe = $e([
    (0, _decoratorsJs.customElement)("wcm-modal-router")
], oe);
const At = (0, _lit.css)`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
var Pt = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, ze = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Tt(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Pt(o, r, t), t;
};
let ne = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = (0, _modalCore.ToastCtrl).subscribe((e)=>{
            e.open ? (this.open = !0, this.timeout = setTimeout(()=>(0, _modalCore.ToastCtrl).closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout));
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribe) == null || e.call(this), clearTimeout(this.timeout), (0, _modalCore.ToastCtrl).closeToast();
    }
    render() {
        const { message: e, variant: o } = (0, _modalCore.ToastCtrl).state, r = {
            "wcm-success": o === "success",
            "wcm-error": o === "error"
        };
        return this.open ? (0, _lit.html)`<div class="${(0, _classMapJs.classMap)(r)}">${o === "success" ? v.CHECKMARK_ICON : null} ${o === "error" ? v.CROSS_ICON : null}<wcm-text variant="small-regular">${e}</wcm-text></div>` : null;
    }
};
ne.styles = [
    h.globalCss,
    At
], ze([
    (0, _decoratorsJs.state)()
], ne.prototype, "open", 2), ne = ze([
    (0, _decoratorsJs.customElement)("wcm-modal-toast")
], ne);
const jt = .1, Ve = 2.5, A = 7;
function Ce(e, o, r) {
    return e === o ? !1 : (e - o < 0 ? o - e : e - o) <= r + jt;
}
function _t(e, o) {
    const r = Array.prototype.slice.call((0, _qrcodeDefault.default).create(e, {
        errorCorrectionLevel: o
    }).modules.data, 0), a = Math.sqrt(r.length);
    return r.reduce((t, l, i)=>(i % a === 0 ? t.push([
            l
        ]) : t[t.length - 1].push(l)) && t, []);
}
const Dt = {
    generate (e, o, r) {
        const a = "#141414", t = "#ffffff", l = [], i = _t(e, "Q"), s = o / i.length, $ = [
            {
                x: 0,
                y: 0
            },
            {
                x: 1,
                y: 0
            },
            {
                x: 0,
                y: 1
            }
        ];
        $.forEach(({ x: y, y: u })=>{
            const O = (i.length - A) * s * y, b = (i.length - A) * s * u, E = .45;
            for(let M = 0; M < $.length; M += 1){
                const V = s * (A - M * 2);
                l.push((0, _lit.svg)`<rect fill="${M % 2 === 0 ? a : t}" height="${V}" rx="${V * E}" ry="${V * E}" width="${V}" x="${O + s * M}" y="${b + s * M}">`);
            }
        });
        const f = Math.floor((r + 25) / s), Ne = i.length / 2 - f / 2, Ze = i.length / 2 + f / 2 - 1, Se = [];
        i.forEach((y, u)=>{
            y.forEach((O, b)=>{
                if (i[u][b] && !(u < A && b < A || u > i.length - (A + 1) && b < A || u < A && b > i.length - (A + 1)) && !(u > Ne && u < Ze && b > Ne && b < Ze)) {
                    const E = u * s + s / 2, M = b * s + s / 2;
                    Se.push([
                        E,
                        M
                    ]);
                }
            });
        });
        const J = {};
        return Se.forEach(([y, u])=>{
            J[y] ? J[y].push(u) : J[y] = [
                u
            ];
        }), Object.entries(J).map(([y, u])=>{
            const O = u.filter((b)=>u.every((E)=>!Ce(b, E, s)));
            return [
                Number(y),
                O
            ];
        }).forEach(([y, u])=>{
            u.forEach((O)=>{
                l.push((0, _lit.svg)`<circle cx="${y}" cy="${O}" fill="${a}" r="${s / Ve}">`);
            });
        }), Object.entries(J).filter(([y, u])=>u.length > 1).map(([y, u])=>{
            const O = u.filter((b)=>u.some((E)=>Ce(b, E, s)));
            return [
                Number(y),
                O
            ];
        }).map(([y, u])=>{
            u.sort((b, E)=>b < E ? -1 : 1);
            const O = [];
            for (const b of u){
                const E = O.find((M)=>M.some((V)=>Ce(b, V, s)));
                E ? E.push(b) : O.push([
                    b
                ]);
            }
            return [
                y,
                O.map((b)=>[
                        b[0],
                        b[b.length - 1]
                    ])
            ];
        }).forEach(([y, u])=>{
            u.forEach(([O, b])=>{
                l.push((0, _lit.svg)`<line x1="${y}" x2="${y}" y1="${O}" y2="${b}" stroke="${a}" stroke-width="${s / (Ve / 2)}" stroke-linecap="round">`);
            });
        }), l;
    }
}, Nt = (0, _lit.css)`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
var Zt = Object.defineProperty, St = Object.getOwnPropertyDescriptor, q = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? St(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Zt(o, r, t), t;
};
let j = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0;
    }
    svgTemplate() {
        const e = (0, _modalCore.ThemeCtrl).state.themeMode === "light" ? this.size : this.size - 36;
        return (0, _lit.svg)`<svg height="${e}" width="${e}">${Dt.generate(this.uri, e, e / 4)}</svg>`;
    }
    render() {
        const e = {
            "wcm-dark": (0, _modalCore.ThemeCtrl).state.themeMode === "dark"
        };
        return (0, _lit.html)`<div style="${`width: ${this.size}px`}" class="${(0, _classMapJs.classMap)(e)}">${this.walletId || this.imageUrl ? (0, _lit.html)`<wcm-wallet-image walletId="${(0, _ifDefinedJs.ifDefined)(this.walletId)}" imageId="${(0, _ifDefinedJs.ifDefined)(this.imageId)}" imageUrl="${(0, _ifDefinedJs.ifDefined)(this.imageUrl)}"></wcm-wallet-image>` : v.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
    }
};
j.styles = [
    h.globalCss,
    Nt
], q([
    (0, _decoratorsJs.property)()
], j.prototype, "uri", 2), q([
    (0, _decoratorsJs.property)({
        type: Number
    })
], j.prototype, "size", 2), q([
    (0, _decoratorsJs.property)()
], j.prototype, "imageId", 2), q([
    (0, _decoratorsJs.property)()
], j.prototype, "walletId", 2), q([
    (0, _decoratorsJs.property)()
], j.prototype, "imageUrl", 2), j = q([
    (0, _decoratorsJs.customElement)("wcm-qrcode")
], j);
const Bt = (0, _lit.css)`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
var Ut = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Fe = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Ht(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Ut(o, r, t), t;
};
let ce = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.onChange = ()=>null;
    }
    render() {
        return (0, _lit.html)`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${v.SEARCH_ICON}`;
    }
};
ce.styles = [
    h.globalCss,
    Bt
], Fe([
    (0, _decoratorsJs.property)()
], ce.prototype, "onChange", 2), ce = Fe([
    (0, _decoratorsJs.customElement)("wcm-search-input")
], ce);
const zt = (0, _lit.css)`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
var Vt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, qt = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Ft(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Vt(o, r, t), t;
};
let ke = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
    }
};
ke.styles = [
    h.globalCss,
    zt
], ke = qt([
    (0, _decoratorsJs.customElement)("wcm-spinner")
], ke);
const Qt = (0, _lit.css)`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
var Kt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Oe = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Yt(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Kt(o, r, t), t;
};
let re = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.variant = "medium-regular", this.color = "primary";
    }
    render() {
        const e = {
            "wcm-big-bold": this.variant === "big-bold",
            "wcm-medium-regular": this.variant === "medium-regular",
            "wcm-small-regular": this.variant === "small-regular",
            "wcm-small-thin": this.variant === "small-thin",
            "wcm-xsmall-regular": this.variant === "xsmall-regular",
            "wcm-xsmall-bold": this.variant === "xsmall-bold",
            "wcm-color-primary": this.color === "primary",
            "wcm-color-secondary": this.color === "secondary",
            "wcm-color-tertiary": this.color === "tertiary",
            "wcm-color-inverse": this.color === "inverse",
            "wcm-color-accnt": this.color === "accent",
            "wcm-color-error": this.color === "error"
        };
        return (0, _lit.html)`<span><slot class="${(0, _classMapJs.classMap)(e)}"></slot></span>`;
    }
};
re.styles = [
    h.globalCss,
    Qt
], Oe([
    (0, _decoratorsJs.property)()
], re.prototype, "variant", 2), Oe([
    (0, _decoratorsJs.property)()
], re.prototype, "color", 2), re = Oe([
    (0, _decoratorsJs.customElement)("wcm-text")
], re);
const Gt = (0, _lit.css)`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
var Xt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, _ = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Jt(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Xt(o, r, t), t;
};
let L = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.onClick = ()=>null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1;
    }
    sublabelTemplate() {
        return this.recent ? (0, _lit.html)`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? (0, _lit.html)`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null;
    }
    handleClick() {
        (0, _modalCore.EventsCtrl).click({
            name: "WALLET_BUTTON",
            walletId: this.walletId
        }), this.onClick();
    }
    render() {
        var e;
        return (0, _lit.html)`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${(0, _ifDefinedJs.ifDefined)(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(e = this.label) != null ? e : c.getWalletName(this.name, !0)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
    }
};
L.styles = [
    h.globalCss,
    Gt
], _([
    (0, _decoratorsJs.property)()
], L.prototype, "onClick", 2), _([
    (0, _decoratorsJs.property)()
], L.prototype, "name", 2), _([
    (0, _decoratorsJs.property)()
], L.prototype, "walletId", 2), _([
    (0, _decoratorsJs.property)()
], L.prototype, "label", 2), _([
    (0, _decoratorsJs.property)()
], L.prototype, "imageId", 2), _([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], L.prototype, "installed", 2), _([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], L.prototype, "recent", 2), L = _([
    (0, _decoratorsJs.customElement)("wcm-wallet-button")
], L);
const eo = (0, _lit.css)`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var to = Object.defineProperty, oo = Object.getOwnPropertyDescriptor, se = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? oo(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && to(o, r, t), t;
};
let Q = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0;
    }
    render() {
        var e;
        const o = (e = this.imageUrl) != null && e.length ? this.imageUrl : c.getWalletIcon({
            id: this.walletId,
            image_id: this.imageId
        });
        return (0, _lit.html)`${o.length ? (0, _lit.html)`<div><img crossorigin="anonymous" src="${o}" alt="${this.id}"></div>` : v.WALLET_PLACEHOLDER}`;
    }
};
Q.styles = [
    h.globalCss,
    eo
], se([
    (0, _decoratorsJs.property)()
], Q.prototype, "walletId", 2), se([
    (0, _decoratorsJs.property)()
], Q.prototype, "imageId", 2), se([
    (0, _decoratorsJs.property)()
], Q.prototype, "imageUrl", 2), Q = se([
    (0, _decoratorsJs.customElement)("wcm-wallet-image")
], Q);
var ro = Object.defineProperty, ao = Object.getOwnPropertyDescriptor, qe = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? ao(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && ro(o, r, t), t;
};
let We = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.preload = !0, this.preloadData();
    }
    async loadImages(e) {
        try {
            e != null && e.length && await Promise.all(e.map(async (o)=>c.preloadImage(o)));
        } catch  {
            console.info("Unsuccessful attempt at preloading some images", e);
        }
    }
    async preloadListings() {
        if ((0, _modalCore.ConfigCtrl).state.enableExplorer) {
            await (0, _modalCore.ExplorerCtrl).getRecomendedWallets(), (0, _modalCore.OptionsCtrl).setIsDataLoaded(!0);
            const { recomendedWallets: e } = (0, _modalCore.ExplorerCtrl).state, o = e.map((r)=>c.getWalletIcon(r));
            await this.loadImages(o);
        } else (0, _modalCore.OptionsCtrl).setIsDataLoaded(!0);
    }
    async preloadCustomImages() {
        const e = c.getCustomImageUrls();
        await this.loadImages(e);
    }
    async preloadData() {
        try {
            this.preload && (this.preload = !1, await Promise.all([
                this.preloadListings(),
                this.preloadCustomImages()
            ]));
        } catch (e) {
            console.error(e), (0, _modalCore.ToastCtrl).openToast("Failed preloading", "error");
        }
    }
};
qe([
    (0, _decoratorsJs.state)()
], We.prototype, "preload", 2), We = qe([
    (0, _decoratorsJs.customElement)("wcm-explorer-context")
], We);
var lo = Object.defineProperty, io = Object.getOwnPropertyDescriptor, no = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? io(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && lo(o, r, t), t;
};
let Qe = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.unsubscribeTheme = void 0, h.setTheme(), this.unsubscribeTheme = (0, _modalCore.ThemeCtrl).subscribe(h.setTheme);
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeTheme) == null || e.call(this);
    }
};
Qe = no([
    (0, _decoratorsJs.customElement)("wcm-theme-context")
], Qe);
const co = (0, _lit.css)`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var so = Object.defineProperty, mo = Object.getOwnPropertyDescriptor, ho = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? mo(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && so(o, r, t), t;
};
let Ie = class extends (0, _lit.LitElement) {
    onGoToQrcode() {
        (0, _modalCore.RouterCtrl).push("Qrcode");
    }
    render() {
        const { recomendedWallets: e } = (0, _modalCore.ExplorerCtrl).state, o = [
            ...e,
            ...e
        ], r = (0, _modalCore.CoreUtil).RECOMMENDED_WALLET_AMOUNT * 2;
        return (0, _lit.html)`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
            ...Array(r)
        ].map((a, t)=>{
            const l = o[t % o.length];
            return l ? (0, _lit.html)`<wcm-wallet-image walletId="${l.id}" imageId="${l.image_id}"></wcm-wallet-image>` : v.WALLET_PLACEHOLDER;
        })}</div><wcm-button-big @click="${c.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
    }
};
Ie.styles = [
    h.globalCss,
    co
], Ie = ho([
    (0, _decoratorsJs.customElement)("wcm-android-wallet-selection")
], Ie);
const wo = (0, _lit.css)`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
var po = Object.defineProperty, go = Object.getOwnPropertyDescriptor, K = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? go(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && po(o, r, t), t;
};
let D = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = "";
    }
    svgLoaderTemplate() {
        var e, o;
        const r = (o = (e = (0, _modalCore.ThemeCtrl).state.themeVariables) == null ? void 0 : e["--wcm-wallet-icon-large-border-radius"]) != null ? o : h.getPreset("--wcm-wallet-icon-large-border-radius");
        let a = 0;
        r.includes("%") ? a = 0.88 * parseInt(r, 10) : a = parseInt(r, 10), a *= 1.17;
        const t = 317 - a * 1.57, l = 425 - a * 1.8;
        return (0, _lit.html)`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${a}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${t}" stroke-dashoffset="${l}"></use></svg>`;
    }
    render() {
        const e = {
            "wcm-error": this.isError,
            "wcm-stale": this.isStale
        };
        return (0, _lit.html)`<div class="${(0, _classMapJs.classMap)(e)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${(0, _ifDefinedJs.ifDefined)(this.walletId)}" imageId="${(0, _ifDefinedJs.ifDefined)(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
    }
};
D.styles = [
    h.globalCss,
    wo
], K([
    (0, _decoratorsJs.property)()
], D.prototype, "walletId", 2), K([
    (0, _decoratorsJs.property)()
], D.prototype, "imageId", 2), K([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], D.prototype, "isError", 2), K([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], D.prototype, "isStale", 2), K([
    (0, _decoratorsJs.property)()
], D.prototype, "label", 2), D = K([
    (0, _decoratorsJs.customElement)("wcm-connector-waiting")
], D);
const G = {
    manualWallets () {
        var e, o;
        const { mobileWallets: r, desktopWallets: a } = (0, _modalCore.ConfigCtrl).state, t = (e = G.recentWallet()) == null ? void 0 : e.id, l = (0, _modalCore.CoreUtil).isMobile() ? r : a, i = l?.filter((s)=>t !== s.id);
        return (o = (0, _modalCore.CoreUtil).isMobile() ? i?.map(({ id: s, name: $, links: f })=>({
                id: s,
                name: $,
                mobile: f,
                links: f
            })) : i?.map(({ id: s, name: $, links: f })=>({
                id: s,
                name: $,
                desktop: f,
                links: f
            }))) != null ? o : [];
    },
    recentWallet () {
        return c.getRecentWallet();
    },
    recomendedWallets (e = !1) {
        var o;
        const r = e || (o = G.recentWallet()) == null ? void 0 : o.id, { recomendedWallets: a } = (0, _modalCore.ExplorerCtrl).state;
        return a.filter((t)=>r !== t.id);
    }
}, Z = {
    onConnecting (e) {
        c.goToConnectingView(e);
    },
    manualWalletsTemplate () {
        return G.manualWallets().map((e)=>(0, _lit.html)`<wcm-wallet-button walletId="${e.id}" name="${e.name}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`);
    },
    recomendedWalletsTemplate (e = !1) {
        return G.recomendedWallets(e).map((o)=>(0, _lit.html)`<wcm-wallet-button name="${o.name}" walletId="${o.id}" imageId="${o.image_id}" .onClick="${()=>this.onConnecting(o)}"></wcm-wallet-button>`);
    },
    recentWalletTemplate () {
        const e = G.recentWallet();
        if (e) return (0, _lit.html)`<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${(0, _ifDefinedJs.ifDefined)(e.image_id)}" .recent="${!0}" .onClick="${()=>this.onConnecting(e)}"></wcm-wallet-button>`;
    }
}, vo = (0, _lit.css)`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
var uo = Object.defineProperty, bo = Object.getOwnPropertyDescriptor, fo = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? bo(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && uo(o, r, t), t;
};
let Ee = class extends (0, _lit.LitElement) {
    render() {
        const { explorerExcludedWalletIds: e, enableExplorer: o } = (0, _modalCore.ConfigCtrl).state, r = e !== "ALL" && o, a = Z.manualWalletsTemplate(), t = Z.recomendedWalletsTemplate();
        let l = [
            Z.recentWalletTemplate(),
            ...a,
            ...t
        ];
        l = l.filter(Boolean);
        const i = l.length > 4 || r;
        let s = [];
        i ? s = l.slice(0, 3) : s = l;
        const $ = Boolean(s.length);
        return (0, _lit.html)`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${v.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${$ ? (0, _lit.html)`<wcm-modal-footer><div class="wcm-desktop-title">${v.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${s} ${i ? (0, _lit.html)`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
    }
};
Ee.styles = [
    h.globalCss,
    vo
], Ee = fo([
    (0, _decoratorsJs.customElement)("wcm-desktop-wallet-selection")
], Ee);
const xo = (0, _lit.css)`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
var yo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, Co = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? $o(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && yo(o, r, t), t;
};
let Me = class extends (0, _lit.LitElement) {
    render() {
        const { termsOfServiceUrl: e, privacyPolicyUrl: o } = (0, _modalCore.ConfigCtrl).state;
        return e ?? o ? (0, _lit.html)`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e ? (0, _lit.html)`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e && o ? "and" : null} ${o ? (0, _lit.html)`<a href="${o}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>` : null;
    }
};
Me.styles = [
    h.globalCss,
    xo
], Me = Co([
    (0, _decoratorsJs.customElement)("wcm-legal-notice")
], Me);
const ko = (0, _lit.css)`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var Oo = Object.defineProperty, Wo = Object.getOwnPropertyDescriptor, Io = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Wo(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Oo(o, r, t), t;
};
let Le = class extends (0, _lit.LitElement) {
    onQrcode() {
        (0, _modalCore.RouterCtrl).push("Qrcode");
    }
    render() {
        const { explorerExcludedWalletIds: e, enableExplorer: o } = (0, _modalCore.ConfigCtrl).state, r = e !== "ALL" && o, a = Z.manualWalletsTemplate(), t = Z.recomendedWalletsTemplate();
        let l = [
            Z.recentWalletTemplate(),
            ...a,
            ...t
        ];
        l = l.filter(Boolean);
        const i = l.length > 8 || r;
        let s = [];
        i ? s = l.slice(0, 7) : s = l;
        const $ = Boolean(s.length);
        return (0, _lit.html)`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header>${$ ? (0, _lit.html)`<wcm-modal-content><div>${s} ${i ? (0, _lit.html)`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
    }
};
Le.styles = [
    h.globalCss,
    ko
], Le = Io([
    (0, _decoratorsJs.customElement)("wcm-mobile-wallet-selection")
], Le);
const Eo = (0, _lit.css)`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
var Mo = Object.defineProperty, Lo = Object.getOwnPropertyDescriptor, Re = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Lo(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Mo(o, r, t), t;
};
let ae = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = (0, _modalCore.ModalCtrl).subscribe((e)=>{
            e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeModal) == null || e.call(this);
    }
    get overlayEl() {
        return c.getShadowRootElement(this, ".wcm-overlay");
    }
    get containerEl() {
        return c.getShadowRootElement(this, ".wcm-container");
    }
    toggleBodyScroll(e) {
        if (document.querySelector("body")) {
            if (e) {
                const o = document.getElementById("wcm-styles");
                o?.remove();
            } else document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>');
        }
    }
    onCloseModal(e) {
        e.target === e.currentTarget && (0, _modalCore.ModalCtrl).close();
    }
    onOpenModalEvent() {
        this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(async ()=>{
            const e = c.isMobileAnimation() ? {
                y: [
                    "50vh",
                    "0vh"
                ]
            } : {
                scale: [
                    .98,
                    1
                ]
            }, o = .1, r = .2;
            await Promise.all([
                (0, _motion.animate)(this.overlayEl, {
                    opacity: [
                        0,
                        1
                    ]
                }, {
                    delay: o,
                    duration: r
                }).finished,
                (0, _motion.animate)(this.containerEl, e, {
                    delay: o,
                    duration: r
                }).finished
            ]), this.active = !0;
        }, 0);
    }
    async onCloseModalEvent() {
        this.toggleBodyScroll(!0), this.removeKeyboardEvents();
        const e = c.isMobileAnimation() ? {
            y: [
                "0vh",
                "50vh"
            ]
        } : {
            scale: [
                1,
                .98
            ]
        }, o = .2;
        await Promise.all([
            (0, _motion.animate)(this.overlayEl, {
                opacity: [
                    1,
                    0
                ]
            }, {
                duration: o
            }).finished,
            (0, _motion.animate)(this.containerEl, e, {
                duration: o
            }).finished
        ]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1;
    }
    addKeyboardEvents() {
        this.abortController = new AbortController, window.addEventListener("keydown", (e)=>{
            var o;
            e.key === "Escape" ? (0, _modalCore.ModalCtrl).close() : e.key === "Tab" && ((o = e.target) != null && o.tagName.includes("wcm-") || this.containerEl.focus());
        }, this.abortController), this.containerEl.focus();
    }
    removeKeyboardEvents() {
        var e;
        (e = this.abortController) == null || e.abort(), this.abortController = void 0;
    }
    render() {
        const e = {
            "wcm-overlay": !0,
            "wcm-active": this.active
        };
        return (0, _lit.html)`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${(0, _classMapJs.classMap)(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? (0, _lit.html)`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
    }
};
ae.styles = [
    h.globalCss,
    Eo
], Re([
    (0, _decoratorsJs.state)()
], ae.prototype, "open", 2), Re([
    (0, _decoratorsJs.state)()
], ae.prototype, "active", 2), ae = Re([
    (0, _decoratorsJs.customElement)("wcm-modal")
], ae);
const Ro = (0, _lit.css)`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
var Ao = Object.defineProperty, Po = Object.getOwnPropertyDescriptor, le = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Po(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Ao(o, r, t), t;
};
let B = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1;
    }
    onMobile() {
        (0, _modalCore.CoreUtil).isMobile() ? (0, _modalCore.RouterCtrl).replace("MobileConnecting") : (0, _modalCore.RouterCtrl).replace("MobileQrcodeConnecting");
    }
    onDesktop() {
        (0, _modalCore.RouterCtrl).replace("DesktopConnecting");
    }
    onWeb() {
        (0, _modalCore.RouterCtrl).replace("WebConnecting");
    }
    render() {
        return (0, _lit.html)`<div>${this.isRetry ? (0, _lit.html)`<slot></slot>` : null} ${this.isMobile ? (0, _lit.html)`<wcm-button .onClick="${this.onMobile}" .iconLeft="${v.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? (0, _lit.html)`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${v.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? (0, _lit.html)`<wcm-button .onClick="${this.onWeb}" .iconLeft="${v.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
    }
};
B.styles = [
    h.globalCss,
    Ro
], le([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], B.prototype, "isMobile", 2), le([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], B.prototype, "isDesktop", 2), le([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], B.prototype, "isWeb", 2), le([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], B.prototype, "isRetry", 2), B = le([
    (0, _decoratorsJs.customElement)("wcm-platform-selection")
], B);
const To = (0, _lit.css)`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var jo = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, Do = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? _o(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && jo(o, r, t), t;
};
let Ae = class extends (0, _lit.LitElement) {
    onClick() {
        (0, _modalCore.RouterCtrl).push("WalletExplorer");
    }
    render() {
        const { recomendedWallets: e } = (0, _modalCore.ExplorerCtrl).state, o = G.manualWallets(), r = [
            ...e,
            ...o
        ].reverse().slice(0, 4);
        return (0, _lit.html)`<button @click="${this.onClick}"><div class="wcm-icons">${r.map((a)=>{
            const t = c.getWalletIcon(a);
            if (t) return (0, _lit.html)`<img crossorigin="anonymous" src="${t}">`;
            const l = c.getWalletIcon({
                id: a.id
            });
            return l ? (0, _lit.html)`<img crossorigin="anonymous" src="${l}">` : v.WALLET_PLACEHOLDER;
        })} ${[
            ...Array(4 - r.length)
        ].map(()=>v.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
    }
};
Ae.styles = [
    h.globalCss,
    To
], Ae = Do([
    (0, _decoratorsJs.customElement)("wcm-view-all-wallets-button")
], Ae);
const No = (0, _lit.css)`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var Zo = Object.defineProperty, So = Object.getOwnPropertyDescriptor, de = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? So(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Zo(o, r, t), t;
};
let Y = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(()=>{
            const { walletConnectUri: e } = (0, _modalCore.OptionsCtrl).state;
            this.uri = e;
        }, 0);
    }
    get overlayEl() {
        return c.getShadowRootElement(this, ".wcm-qr-container");
    }
    render() {
        return (0, _lit.html)`<div class="wcm-qr-container">${this.uri ? (0, _lit.html)`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${(0, _ifDefinedJs.ifDefined)(this.walletId)}" imageId="${(0, _ifDefinedJs.ifDefined)(this.imageId)}"></wcm-qrcode>` : (0, _lit.html)`<wcm-spinner></wcm-spinner>`}</div>`;
    }
};
Y.styles = [
    h.globalCss,
    No
], de([
    (0, _decoratorsJs.property)()
], Y.prototype, "walletId", 2), de([
    (0, _decoratorsJs.property)()
], Y.prototype, "imageId", 2), de([
    (0, _decoratorsJs.state)()
], Y.prototype, "uri", 2), Y = de([
    (0, _decoratorsJs.customElement)("wcm-walletconnect-qr")
], Y);
var Bo = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, Ho = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Uo(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Bo(o, r, t), t;
};
let Pe = class extends (0, _lit.LitElement) {
    viewTemplate() {
        return (0, _modalCore.CoreUtil).isAndroid() ? (0, _lit.html)`<wcm-android-wallet-selection></wcm-android-wallet-selection>` : (0, _modalCore.CoreUtil).isMobile() ? (0, _lit.html)`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : (0, _lit.html)`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
    }
    render() {
        return (0, _lit.html)`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
    }
};
Pe.styles = [
    h.globalCss
], Pe = Ho([
    (0, _decoratorsJs.customElement)("wcm-connect-wallet-view")
], Pe);
const zo = (0, _lit.css)`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Vo = Object.defineProperty, Fo = Object.getOwnPropertyDescriptor, Ke = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Fo(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Vo(o, r, t), t;
};
let me = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.isError = !1, this.openDesktopApp();
    }
    onFormatAndRedirect(e) {
        const { desktop: o, name: r } = (0, _modalCore.CoreUtil).getWalletRouterData(), a = o?.native;
        if (a) {
            const t = (0, _modalCore.CoreUtil).formatNativeUrl(a, e, r);
            (0, _modalCore.CoreUtil).openHref(t, "_self");
        }
    }
    openDesktopApp() {
        const { walletConnectUri: e } = (0, _modalCore.OptionsCtrl).state, o = (0, _modalCore.CoreUtil).getWalletRouterData();
        c.setRecentWallet(o), e && this.onFormatAndRedirect(e);
    }
    render() {
        const { name: e, id: o, image_id: r } = (0, _modalCore.CoreUtil).getWalletRouterData(), { isMobile: a, isWeb: t } = c.getCachedRouterWalletPlatforms();
        return (0, _lit.html)`<wcm-modal-header title="${e}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o}" imageId="${(0, _ifDefinedJs.ifDefined)(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${a}" .isWeb="${t}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
    }
};
me.styles = [
    h.globalCss,
    zo
], Ke([
    (0, _decoratorsJs.state)()
], me.prototype, "isError", 2), me = Ke([
    (0, _decoratorsJs.customElement)("wcm-desktop-connecting-view")
], me);
const qo = (0, _lit.css)`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
var Qo = Object.defineProperty, Ko = Object.getOwnPropertyDescriptor, Yo = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Ko(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Qo(o, r, t), t;
};
let Te = class extends (0, _lit.LitElement) {
    onInstall(e) {
        e && (0, _modalCore.CoreUtil).openHref(e, "_blank");
    }
    render() {
        const { name: e, id: o, image_id: r, homepage: a } = (0, _modalCore.CoreUtil).getWalletRouterData();
        return (0, _lit.html)`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o}" imageId="${(0, _ifDefinedJs.ifDefined)(r)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</wcm-text><wcm-button .onClick="${()=>this.onInstall(a)}" .iconLeft="${v.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
    }
};
Te.styles = [
    h.globalCss,
    qo
], Te = Yo([
    (0, _decoratorsJs.customElement)("wcm-install-wallet-view")
], Te);
const Go = (0, _lit.css)`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
var Xo = Object.defineProperty, Jo = Object.getOwnPropertyDescriptor, Ye = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? Jo(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && Xo(o, r, t), t;
};
let he = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.isError = !1, this.openMobileApp();
    }
    onFormatAndRedirect(e, o = !1) {
        const { mobile: r, name: a } = (0, _modalCore.CoreUtil).getWalletRouterData(), t = r?.native, l = r?.universal;
        if (t && !o) {
            const i = (0, _modalCore.CoreUtil).formatNativeUrl(t, e, a);
            (0, _modalCore.CoreUtil).openHref(i, "_self");
        } else if (l) {
            const i = (0, _modalCore.CoreUtil).formatUniversalUrl(l, e, a);
            (0, _modalCore.CoreUtil).openHref(i, "_self");
        }
    }
    openMobileApp(e = !1) {
        const { walletConnectUri: o } = (0, _modalCore.OptionsCtrl).state, r = (0, _modalCore.CoreUtil).getWalletRouterData();
        c.setRecentWallet(r), o && this.onFormatAndRedirect(o, e);
    }
    onGoToAppStore(e) {
        e && (0, _modalCore.CoreUtil).openHref(e, "_blank");
    }
    render() {
        const { name: e, id: o, image_id: r, app: a, mobile: t } = (0, _modalCore.CoreUtil).getWalletRouterData(), { isWeb: l } = c.getCachedRouterWalletPlatforms(), i = a?.ios, s = t?.universal;
        return (0, _lit.html)`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o}" imageId="${(0, _ifDefinedJs.ifDefined)(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${l}" .isRetry="${!0}"><wcm-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${s ? (0, _lit.html)`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${()=>this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${o}" imageId="${(0, _ifDefinedJs.ifDefined)(r)}"></wcm-wallet-image><wcm-text>${`Get ${e}`}</wcm-text></div><wcm-button .iconRight="${v.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(i)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
    }
};
he.styles = [
    h.globalCss,
    Go
], Ye([
    (0, _decoratorsJs.state)()
], he.prototype, "isError", 2), he = Ye([
    (0, _decoratorsJs.customElement)("wcm-mobile-connecting-view")
], he);
const er = (0, _lit.css)`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var tr = Object.defineProperty, or = Object.getOwnPropertyDescriptor, rr = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? or(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && tr(o, r, t), t;
};
let je = class extends (0, _lit.LitElement) {
    render() {
        const { name: e, id: o, image_id: r } = (0, _modalCore.CoreUtil).getWalletRouterData(), { isDesktop: a, isWeb: t } = c.getCachedRouterWalletPlatforms();
        return (0, _lit.html)`<wcm-modal-header title="${e}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${o}" imageId="${(0, _ifDefinedJs.ifDefined)(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</wcm-text><wcm-platform-selection .isDesktop="${a}" .isWeb="${t}"></wcm-platform-selection></wcm-info-footer>`;
    }
};
je.styles = [
    h.globalCss,
    er
], je = rr([
    (0, _decoratorsJs.customElement)("wcm-mobile-qr-connecting-view")
], je);
var ar = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, ir = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? lr(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && ar(o, r, t), t;
};
let _e = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<wcm-modal-header title="Scan the code" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
    }
};
_e.styles = [
    h.globalCss
], _e = ir([
    (0, _decoratorsJs.customElement)("wcm-qrcode-view")
], _e);
const nr = (0, _lit.css)`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var cr = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, ie = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? sr(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && cr(o, r, t), t;
};
const De = 40;
let U = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.loading = !(0, _modalCore.ExplorerCtrl).state.wallets.listings.length, this.firstFetch = !(0, _modalCore.ExplorerCtrl).state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = c.debounce((e)=>{
            e.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = e, (0, _modalCore.ExplorerCtrl).resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), (0, _modalCore.ExplorerCtrl).resetSearch());
        });
    }
    firstUpdated() {
        this.createPaginationObserver();
    }
    disconnectedCallback() {
        var e;
        (e = this.intersectionObserver) == null || e.disconnect();
    }
    get placeholderEl() {
        return c.getShadowRootElement(this, ".wcm-placeholder-block");
    }
    createPaginationObserver() {
        this.intersectionObserver = new IntersectionObserver(([e])=>{
            e.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
        }), this.intersectionObserver.observe(this.placeholderEl);
    }
    isLastPage() {
        const { wallets: e, search: o } = (0, _modalCore.ExplorerCtrl).state, { listings: r, total: a } = this.search ? o : e;
        return a <= De || r.length >= a;
    }
    async fetchWallets() {
        var e;
        const { wallets: o, search: r } = (0, _modalCore.ExplorerCtrl).state, { listings: a, total: t, page: l } = this.search ? r : o;
        if (!this.endReached && (this.firstFetch || t > De && a.length < t)) try {
            this.loading = !0;
            const i = (e = (0, _modalCore.OptionsCtrl).state.chains) == null ? void 0 : e.join(","), { listings: s } = await (0, _modalCore.ExplorerCtrl).getWallets({
                page: this.firstFetch ? 1 : l + 1,
                entries: De,
                search: this.search,
                version: 2,
                chains: i
            }), $ = s.map((f)=>c.getWalletIcon(f));
            await Promise.all([
                ...$.map(async (f)=>c.preloadImage(f)),
                (0, _modalCore.CoreUtil).wait(300)
            ]), this.endReached = this.isLastPage();
        } catch (i) {
            console.error(i), (0, _modalCore.ToastCtrl).openToast(c.getErrorMessage(i), "error");
        } finally{
            this.loading = !1, this.firstFetch = !1;
        }
    }
    onConnect(e) {
        (0, _modalCore.CoreUtil).isAndroid() ? c.handleMobileLinking(e) : c.goToConnectingView(e);
    }
    onSearchChange(e) {
        const { value: o } = e.target;
        this.searchDebounce(o);
    }
    render() {
        const { wallets: e, search: o } = (0, _modalCore.ExplorerCtrl).state, { listings: r } = this.search ? o : e, a = this.loading && !r.length, t = this.search.length >= 3;
        let l = Z.manualWalletsTemplate(), i = Z.recomendedWalletsTemplate(!0);
        t && (l = l.filter(({ values: f })=>c.caseSafeIncludes(f[0], this.search)), i = i.filter(({ values: f })=>c.caseSafeIncludes(f[0], this.search)));
        const s = !this.loading && !r.length && !i.length, $ = {
            "wcm-loading": a,
            "wcm-end-reached": this.endReached || !this.loading,
            "wcm-empty": s
        };
        return (0, _lit.html)`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${(0, _classMapJs.classMap)($)}"><div class="wcm-grid">${a ? null : l} ${a ? null : i} ${a ? null : r.map((f)=>(0, _lit.html)`${f ? (0, _lit.html)`<wcm-wallet-button imageId="${f.image_id}" name="${f.name}" walletId="${f.id}" .onClick="${()=>this.onConnect(f)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${s ? (0, _lit.html)`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!s && this.loading ? (0, _lit.html)`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
    }
};
U.styles = [
    h.globalCss,
    nr
], ie([
    (0, _decoratorsJs.state)()
], U.prototype, "loading", 2), ie([
    (0, _decoratorsJs.state)()
], U.prototype, "firstFetch", 2), ie([
    (0, _decoratorsJs.state)()
], U.prototype, "search", 2), ie([
    (0, _decoratorsJs.state)()
], U.prototype, "endReached", 2), U = ie([
    (0, _decoratorsJs.customElement)("wcm-wallet-explorer-view")
], U);
const dr = (0, _lit.css)`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var mr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, Ge = (e, o, r, a)=>{
    for(var t = a > 1 ? void 0 : a ? hr(o, r) : o, l = e.length - 1, i; l >= 0; l--)(i = e[l]) && (t = (a ? i(o, r, t) : i(t)) || t);
    return a && t && mr(o, r, t), t;
};
let we = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.isError = !1, this.openWebWallet();
    }
    onFormatAndRedirect(e) {
        const { desktop: o, name: r } = (0, _modalCore.CoreUtil).getWalletRouterData(), a = o?.universal;
        if (a) {
            const t = (0, _modalCore.CoreUtil).formatUniversalUrl(a, e, r);
            (0, _modalCore.CoreUtil).openHref(t, "_blank");
        }
    }
    openWebWallet() {
        const { walletConnectUri: e } = (0, _modalCore.OptionsCtrl).state, o = (0, _modalCore.CoreUtil).getWalletRouterData();
        c.setRecentWallet(o), e && this.onFormatAndRedirect(e);
    }
    render() {
        const { name: e, id: o, image_id: r } = (0, _modalCore.CoreUtil).getWalletRouterData(), { isMobile: a, isDesktop: t } = c.getCachedRouterWalletPlatforms(), l = (0, _modalCore.CoreUtil).isMobile();
        return (0, _lit.html)`<wcm-modal-header title="${e}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o}" imageId="${(0, _ifDefinedJs.ifDefined)(r)}" label="${`Continue in ${e}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${a}" .isDesktop="${l ? !1 : t}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
    }
};
we.styles = [
    h.globalCss,
    dr
], Ge([
    (0, _decoratorsJs.state)()
], we.prototype, "isError", 2), we = Ge([
    (0, _decoratorsJs.customElement)("wcm-web-connecting-view")
], we);

},{"lit":"4antt","lit/decorators.js":"bCPKi","lit/directives/class-map.js":"jiVKL","@walletconnect/modal-core":"5opOL","lit-html":"1cmQt","motion":"aqnbF","lit/directives/if-defined.js":"77RTn","qrcode":"lB7MY","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","lit-html/is-server.js":"e2OXP","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>u);
parcelHelpers.export(exports, "defaultConverter", ()=>n);
parcelHelpers.export(exports, "notEqual", ()=>a);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s;
const e = window, r = e.trustedTypes, h = r ? r.emptyScript : "", o = e.reactiveElementPolyfillSupport, n = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, a = (t, i)=>i !== t && (i == i || t == t), l = {
    attribute: !0,
    type: String,
    converter: n,
    reflect: !1,
    hasChanged: a
}, d = "finalized";
class u extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l;
    }
    static finalize() {
        if (this.hasOwnProperty(d)) return !1;
        this[d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, _cssTagJs.getCompatibleStyle)(i));
        } else void 0 !== i && s.push((0, _cssTagJs.getCompatibleStyle)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : n;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
u[d] = !0, u.elementProperties = new Map, u.elementStyles = [], u.shadowRootOptions = {
    mode: "open"
}, null == o || o({
    ReactiveElement: u
}), (null !== (s = e.reactiveElementVersions) && void 0 !== s ? s : e.reactiveElementVersions = []).push("1.6.3");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"gkZsf":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>o);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = window, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), n = new WeakMap;
class o {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new o("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new o(n, t, s);
}, S = (s, n)=>{
    e ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>j);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>A);
parcelHelpers.export(exports, "render", ()=>D);
parcelHelpers.export(exports, "svg", ()=>b);
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = "$lit$", n = `lit$${(Math.random() + "").slice(9)}$`, l = "?" + n, h = `<${l}>`, r = document, u = ()=>r.createComment(""), d = (t)=>null === t || "object" != typeof t && "function" != typeof t, c = Array.isArray, v = (t)=>c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), a = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = w(1), b = w(2), T = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), E = new WeakMap, C = r.createTreeWalker(r, 129, null, !1);
function P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e ? e.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != l ? l : f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? $ : g) : u === $ || u === g ? u = p : u === _ || u === m ? u = f : (u = p, l = void 0);
        const w = u === p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === f ? s + h : v >= 0 ? (e.push(d), s.slice(0, v) + o + s.slice(v) + n + w) : s + n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class N {
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = V(t, i);
        if (this.el = N.createElement(a, e), C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith(o) || i.startsWith(n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + o).split(n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? H : "?" === i[1] ? L : "@" === i[1] ? z : k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if (y.test(h.tagName)) {
                    const t = h.textContent.split(n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = s ? s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], u()), C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf(n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === T) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = S(t, r._$AS(t, i.values), r, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r).importNode(s, !0);
        C.currentNode = o;
        let n = C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = C.nextNode(), l++);
        }
        return C.currentNode = r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), d(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== A && d(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = N.createElement(P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = E.get(t.strings);
        return void 0 === i && E.set(t.strings, i = new N(t)), i;
    }
    T(t) {
        c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new R(this.k(u()), this.k(u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class k {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = A;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = S(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== T, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = S(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === A ? void 0 : t;
    }
}
const I = s ? s.emptyScript : "";
class L extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
}
class z extends k {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = S(this, t, i, 0)) && void 0 !== s ? s : A) === T) return;
        const e = this._$AH, o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== A && (e === A || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const j = {
    O: o,
    P: n,
    A: l,
    C: 1,
    M: V,
    L: M,
    R: v,
    D: S,
    I: R,
    V: k,
    H: L,
    N: z,
    U: H,
    F: Z
}, B = i.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.8.0");
const D = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new R(i.insertBefore(u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s);
parcelHelpers.export(exports, "UpdatingElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>h);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l, o;
const r = (0, _reactiveElement.ReactiveElement);
class s extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
    LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
    LitElement: s
});
const h = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.3.3");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"e2OXP":[function(require,module,exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"bCPKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customElementJs = require("@lit/reactive-element/decorators/custom-element.js");
parcelHelpers.exportAll(_customElementJs, exports);
var _propertyJs = require("@lit/reactive-element/decorators/property.js");
parcelHelpers.exportAll(_propertyJs, exports);
var _stateJs = require("@lit/reactive-element/decorators/state.js");
parcelHelpers.exportAll(_stateJs, exports);
var _eventOptionsJs = require("@lit/reactive-element/decorators/event-options.js");
parcelHelpers.exportAll(_eventOptionsJs, exports);
var _queryJs = require("@lit/reactive-element/decorators/query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _queryAllJs = require("@lit/reactive-element/decorators/query-all.js");
parcelHelpers.exportAll(_queryAllJs, exports);
var _queryAsyncJs = require("@lit/reactive-element/decorators/query-async.js");
parcelHelpers.exportAll(_queryAsyncJs, exports);
var _queryAssignedElementsJs = require("@lit/reactive-element/decorators/query-assigned-elements.js");
parcelHelpers.exportAll(_queryAssignedElementsJs, exports);
var _queryAssignedNodesJs = require("@lit/reactive-element/decorators/query-assigned-nodes.js");
parcelHelpers.exportAll(_queryAssignedNodesJs, exports);

},{"@lit/reactive-element/decorators/custom-element.js":"cMf50","@lit/reactive-element/decorators/property.js":"ipYYa","@lit/reactive-element/decorators/state.js":"goyf7","@lit/reactive-element/decorators/event-options.js":"8b5ex","@lit/reactive-element/decorators/query.js":"kzuRy","@lit/reactive-element/decorators/query-all.js":"krNkJ","@lit/reactive-element/decorators/query-async.js":"a6gRJ","@lit/reactive-element/decorators/query-assigned-elements.js":"kKpwU","@lit/reactive-element/decorators/query-assigned-nodes.js":"2F824","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"cMf50":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>e);
const e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t, elements: s } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"ipYYa":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "property", ()=>n);
const i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    }, e = (i, e, n)=>{
    e.constructor.createProperty(n, i);
};
function n(n) {
    return (t, o)=>void 0 !== o ? e(n, t, o) : i(n, t);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"goyf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>t);
var _propertyJs = require("./property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function t(t) {
    return (0, _propertyJs.property)({
        ...t,
        state: !0
    });
}

},{"./property.js":"ipYYa","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"8b5ex":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOptions", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"d0R9Y":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decorateProperty", ()=>o);
parcelHelpers.export(exports, "legacyPrototypeMethod", ()=>e);
parcelHelpers.export(exports, "standardPrototypeMethod", ()=>t);
const e = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, t = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), o = ({ finisher: e, descriptor: t })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"kzuRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>i);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function i(i, n) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"krNkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAll", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"a6gRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAsync", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"kKpwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedElements", ()=>l);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var n;
const e = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function l(n) {
    const { slot: l, selector: t } = null != n ? n : {};
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"2F824":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedNodes", ()=>o);
var _baseJs = require("./base.js");
var _queryAssignedElementsJs = require("./query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, _queryAssignedElementsJs.queryAssignedElements)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, _baseJs.decorateProperty)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","./query-assigned-elements.js":"kKpwU","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"jiVKL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classMapJs = require("lit-html/directives/class-map.js");
parcelHelpers.exportAll(_classMapJs, exports);

},{"lit-html/directives/class-map.js":"1IFol","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"1IFol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classMap", ()=>o);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(t){
        var i;
        if (super(t), t.type !== (0, _directiveJs.PartType).ATTRIBUTE || "class" !== t.name || (null === (i = t.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return " " + Object.keys(t).filter((i)=>t[i]).join(" ") + " ";
    }
    update(i, [s]) {
        var r, o;
        if (void 0 === this.it) {
            this.it = new Set, void 0 !== i.strings && (this.nt = new Set(i.strings.join(" ").split(/\s/).filter((t)=>"" !== t)));
            for(const t in s)s[t] && !(null === (r = this.nt) || void 0 === r ? void 0 : r.has(t)) && this.it.add(t);
            return this.render(s);
        }
        const e = i.element.classList;
        this.it.forEach((t)=>{
            t in s || (e.remove(t), this.it.delete(t));
        });
        for(const t in s){
            const i = !!s[t];
            i === this.it.has(t) || (null === (o = this.nt) || void 0 === o ? void 0 : o.has(t)) || (i ? (e.add(t), this.it.add(t)) : (e.remove(t), this.it.delete(t)));
        }
        return 0, _litHtmlJs.noChange;
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"9lbyV":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>i);
parcelHelpers.export(exports, "PartType", ()=>t);
parcelHelpers.export(exports, "directive", ()=>e);
const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class i {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"aqnbF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>(0, _animateEsJs.animate));
var _dom = require("@motionone/dom");
parcelHelpers.exportAll(_dom, exports);
var _types = require("@motionone/types");
parcelHelpers.exportAll(_types, exports);
var _animateEsJs = require("./animate.es.js");

},{"@motionone/dom":false,"@motionone/types":false,"./animate.es.js":"lEsDf","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"krEZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>(0, _indexEsJs.animate));
parcelHelpers.export(exports, "createAnimate", ()=>(0, _createAnimateEsJs.createAnimate));
parcelHelpers.export(exports, "animateStyle", ()=>(0, _animateStyleEsJs.animateStyle));
parcelHelpers.export(exports, "timeline", ()=>(0, _indexEsJs1.timeline));
parcelHelpers.export(exports, "stagger", ()=>(0, _staggerEsJs.stagger));
parcelHelpers.export(exports, "spring", ()=>(0, _indexEsJs2.spring));
parcelHelpers.export(exports, "glide", ()=>(0, _indexEsJs3.glide));
parcelHelpers.export(exports, "style", ()=>(0, _styleEsJs.style));
parcelHelpers.export(exports, "inView", ()=>(0, _inViewEsJs.inView));
parcelHelpers.export(exports, "resize", ()=>(0, _indexEsJs4.resize));
parcelHelpers.export(exports, "scroll", ()=>(0, _indexEsJs5.scroll));
parcelHelpers.export(exports, "ScrollOffset", ()=>(0, _presetsEsJs.ScrollOffset));
parcelHelpers.export(exports, "withControls", ()=>(0, _controlsEsJs.withControls));
parcelHelpers.export(exports, "getAnimationData", ()=>(0, _dataEsJs.getAnimationData));
parcelHelpers.export(exports, "getStyleName", ()=>(0, _getStyleNameEsJs.getStyleName));
parcelHelpers.export(exports, "createMotionState", ()=>(0, _indexEsJs6.createMotionState));
parcelHelpers.export(exports, "mountedStates", ()=>(0, _indexEsJs6.mountedStates));
parcelHelpers.export(exports, "createStyles", ()=>(0, _styleObjectEsJs.createStyles));
parcelHelpers.export(exports, "createStyleString", ()=>(0, _styleStringEsJs.createStyleString));
var _indexEsJs = require("./animate/index.es.js");
var _createAnimateEsJs = require("./animate/create-animate.es.js");
var _animateStyleEsJs = require("./animate/animate-style.es.js");
var _indexEsJs1 = require("./timeline/index.es.js");
var _staggerEsJs = require("./utils/stagger.es.js");
var _indexEsJs2 = require("./easing/spring/index.es.js");
var _indexEsJs3 = require("./easing/glide/index.es.js");
var _styleEsJs = require("./animate/style.es.js");
var _inViewEsJs = require("./gestures/in-view.es.js");
var _indexEsJs4 = require("./gestures/resize/index.es.js");
var _indexEsJs5 = require("./gestures/scroll/index.es.js");
var _presetsEsJs = require("./gestures/scroll/offsets/presets.es.js");
var _controlsEsJs = require("./animate/utils/controls.es.js");
var _dataEsJs = require("./animate/data.es.js");
var _getStyleNameEsJs = require("./animate/utils/get-style-name.es.js");
var _indexEsJs6 = require("./state/index.es.js");
var _styleObjectEsJs = require("./animate/utils/style-object.es.js");
var _styleStringEsJs = require("./animate/utils/style-string.es.js");

},{"./animate/index.es.js":"4V5Bk","./animate/create-animate.es.js":false,"./animate/animate-style.es.js":false,"./timeline/index.es.js":false,"./utils/stagger.es.js":false,"./easing/spring/index.es.js":false,"./easing/glide/index.es.js":false,"./animate/style.es.js":false,"./gestures/in-view.es.js":false,"./gestures/resize/index.es.js":false,"./gestures/scroll/index.es.js":false,"./gestures/scroll/offsets/presets.es.js":false,"./animate/utils/controls.es.js":"39ePr","./animate/data.es.js":false,"./animate/utils/get-style-name.es.js":false,"./state/index.es.js":false,"./animate/utils/style-object.es.js":false,"./animate/utils/style-string.es.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"4V5Bk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
var _animation = require("@motionone/animation");
var _createAnimateEsJs = require("./create-animate.es.js");
const animate = (0, _createAnimateEsJs.createAnimate)((0, _animation.Animation));

},{"@motionone/animation":"ebY3Z","./create-animate.es.js":"acg4f","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"ebY3Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>(0, _animationEsJs.Animation));
parcelHelpers.export(exports, "getEasingFunction", ()=>(0, _easingEsJs.getEasingFunction));
var _animationEsJs = require("./Animation.es.js");
var _easingEsJs = require("./utils/easing.es.js");

},{"./Animation.es.js":"lESA9","./utils/easing.es.js":"ajTA9","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"lESA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>Animation);
var _utils = require("@motionone/utils");
var _easingEsJs = require("./utils/easing.es.js");
class Animation {
    constructor(output, keyframes = [
        0,
        1
    ], { easing, duration: initialDuration = (0, _utils.defaults).duration, delay = (0, _utils.defaults).delay, endDelay = (0, _utils.defaults).endDelay, repeat = (0, _utils.defaults).repeat, offset, direction = "normal" } = {}){
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = (0, _utils.noopReturn);
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || (0, _utils.defaults).easing;
        if ((0, _utils.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            initialDuration = custom.duration || initialDuration;
        }
        this.repeat = repeat;
        this.easing = (0, _utils.isEasingList)(easing) ? (0, _utils.noopReturn) : (0, _easingEsJs.getEasingFunction)(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = (0, _utils.interpolate)(keyframes, offset, (0, _utils.isEasingList)(easing) ? easing.map((0, _easingEsJs.getEasingFunction)) : (0, _utils.noopReturn));
        this.tick = (timestamp)=>{
            var _a;
            delay;
            let t = 0;
            if (this.pauseTime !== undefined) t = this.pauseTime;
            else t = (timestamp - this.startTime) * this.rate;
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */ if (this.playState === "finished" && this.pauseTime === undefined) t = this.totalDuration;
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) iterationProgress = 1;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) iterationProgress = 1 - iterationProgress;
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined && (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 || _a.call(this, latest);
            } else if (this.playState !== "idle") this.frameRequestId = requestAnimationFrame(this.tick);
        };
        this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) this.startTime = now - this.pauseTime;
        else if (!this.startTime) this.startTime = now;
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) cancelAnimationFrame(this.frameRequestId);
        (_a = this.reject) === null || _a === void 0 || _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() {}
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) this.pauseTime = t;
        else this.startTime = performance.now() - t / this.rate;
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}

},{"@motionone/utils":"krBNu","./utils/easing.es.js":"ajTA9","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"krBNu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>(0, _arrayEsJs.addUniqueItem));
parcelHelpers.export(exports, "removeItem", ()=>(0, _arrayEsJs.removeItem));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampEsJs.clamp));
parcelHelpers.export(exports, "defaults", ()=>(0, _defaultsEsJs.defaults));
parcelHelpers.export(exports, "getEasingForSegment", ()=>(0, _easingEsJs.getEasingForSegment));
parcelHelpers.export(exports, "interpolate", ()=>(0, _interpolateEsJs.interpolate));
parcelHelpers.export(exports, "isCubicBezier", ()=>(0, _isCubicBezierEsJs.isCubicBezier));
parcelHelpers.export(exports, "isEasingGenerator", ()=>(0, _isEasingGeneratorEsJs.isEasingGenerator));
parcelHelpers.export(exports, "isEasingList", ()=>(0, _isEasingListEsJs.isEasingList));
parcelHelpers.export(exports, "isFunction", ()=>(0, _isFunctionEsJs.isFunction));
parcelHelpers.export(exports, "isNumber", ()=>(0, _isNumberEsJs.isNumber));
parcelHelpers.export(exports, "isString", ()=>(0, _isStringEsJs.isString));
parcelHelpers.export(exports, "mix", ()=>(0, _mixEsJs.mix));
parcelHelpers.export(exports, "noop", ()=>(0, _noopEsJs.noop));
parcelHelpers.export(exports, "noopReturn", ()=>(0, _noopEsJs.noopReturn));
parcelHelpers.export(exports, "defaultOffset", ()=>(0, _offsetEsJs.defaultOffset));
parcelHelpers.export(exports, "fillOffset", ()=>(0, _offsetEsJs.fillOffset));
parcelHelpers.export(exports, "progress", ()=>(0, _progressEsJs.progress));
parcelHelpers.export(exports, "time", ()=>(0, _timeEsJs.time));
parcelHelpers.export(exports, "velocityPerSecond", ()=>(0, _velocityEsJs.velocityPerSecond));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapEsJs.wrap));
var _arrayEsJs = require("./array.es.js");
var _clampEsJs = require("./clamp.es.js");
var _defaultsEsJs = require("./defaults.es.js");
var _easingEsJs = require("./easing.es.js");
var _interpolateEsJs = require("./interpolate.es.js");
var _isCubicBezierEsJs = require("./is-cubic-bezier.es.js");
var _isEasingGeneratorEsJs = require("./is-easing-generator.es.js");
var _isEasingListEsJs = require("./is-easing-list.es.js");
var _isFunctionEsJs = require("./is-function.es.js");
var _isNumberEsJs = require("./is-number.es.js");
var _isStringEsJs = require("./is-string.es.js");
var _mixEsJs = require("./mix.es.js");
var _noopEsJs = require("./noop.es.js");
var _offsetEsJs = require("./offset.es.js");
var _progressEsJs = require("./progress.es.js");
var _timeEsJs = require("./time.es.js");
var _velocityEsJs = require("./velocity.es.js");
var _wrapEsJs = require("./wrap.es.js");

},{"./array.es.js":"lV7u8","./clamp.es.js":"eARWM","./defaults.es.js":"4Xx6A","./easing.es.js":false,"./interpolate.es.js":"dDlur","./is-cubic-bezier.es.js":"hF8Ai","./is-easing-generator.es.js":"jOIrz","./is-easing-list.es.js":"gFRon","./is-function.es.js":"8kyHJ","./is-number.es.js":"3cDKd","./is-string.es.js":"8dcJ3","./mix.es.js":false,"./noop.es.js":"cIUEQ","./offset.es.js":false,"./progress.es.js":"3PqyP","./time.es.js":"98Uct","./velocity.es.js":false,"./wrap.es.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"lV7u8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>addUniqueItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"eARWM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
const clamp = (min, max, v)=>Math.min(Math.max(v, min), max);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"4Xx6A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>defaults);
const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"b9U1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingForSegment", ()=>getEasingForSegment);
var _isEasingListEsJs = require("./is-easing-list.es.js");
var _wrapEsJs = require("./wrap.es.js");
function getEasingForSegment(easing, i) {
    return (0, _isEasingListEsJs.isEasingList)(easing) ? easing[(0, _wrapEsJs.wrap)(0, easing.length, i)] : easing;
}

},{"./is-easing-list.es.js":"gFRon","./wrap.es.js":"1iRdr","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"gFRon":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingList", ()=>isEasingList);
var _isNumberEsJs = require("./is-number.es.js");
const isEasingList = (easing)=>Array.isArray(easing) && !(0, _isNumberEsJs.isNumber)(easing[0]);

},{"./is-number.es.js":"3cDKd","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"3cDKd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
const isNumber = (value)=>typeof value === "number";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"1iRdr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wrap", ()=>wrap);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"dDlur":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
var _mixEsJs = require("./mix.es.js");
var _noopEsJs = require("./noop.es.js");
var _offsetEsJs = require("./offset.es.js");
var _progressEsJs = require("./progress.es.js");
var _easingEsJs = require("./easing.es.js");
var _clampEsJs = require("./clamp.es.js");
function interpolate(output, input = (0, _offsetEsJs.defaultOffset)(output.length), easing = (0, _noopEsJs.noopReturn)) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */ const remainder = length - input.length;
    remainder > 0 && (0, _offsetEsJs.fillOffset)(input, remainder);
    return (t)=>{
        let i = 0;
        for(; i < length - 2; i++){
            if (t < input[i + 1]) break;
        }
        let progressInRange = (0, _clampEsJs.clamp)(0, 1, (0, _progressEsJs.progress)(input[i], input[i + 1], t));
        const segmentEasing = (0, _easingEsJs.getEasingForSegment)(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return (0, _mixEsJs.mix)(output[i], output[i + 1], progressInRange);
    };
}

},{"./mix.es.js":"Y3RWW","./noop.es.js":"cIUEQ","./offset.es.js":"4q1NU","./progress.es.js":"3PqyP","./easing.es.js":"b9U1C","./clamp.es.js":"eARWM","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"Y3RWW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix);
const mix = (min, max, progress)=>-progress * min + progress * max + min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"cIUEQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
parcelHelpers.export(exports, "noopReturn", ()=>noopReturn);
const noop = ()=>{};
const noopReturn = (v)=>v;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"4q1NU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOffset", ()=>defaultOffset);
parcelHelpers.export(exports, "fillOffset", ()=>fillOffset);
var _mixEsJs = require("./mix.es.js");
var _progressEsJs = require("./progress.es.js");
function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, _progressEsJs.progress)(0, remaining, i);
        offset.push((0, _mixEsJs.mix)(min, 1, offsetProgress));
    }
}
function defaultOffset(length) {
    const offset = [
        0
    ];
    fillOffset(offset, length - 1);
    return offset;
}

},{"./mix.es.js":"Y3RWW","./progress.es.js":"3PqyP","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"3PqyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress", ()=>progress);
const progress = (min, max, value)=>max - min === 0 ? 1 : (value - min) / (max - min);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"hF8Ai":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCubicBezier", ()=>isCubicBezier);
var _isNumberEsJs = require("./is-number.es.js");
const isCubicBezier = (easing)=>Array.isArray(easing) && (0, _isNumberEsJs.isNumber)(easing[0]);

},{"./is-number.es.js":"3cDKd","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"jOIrz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingGenerator", ()=>isEasingGenerator);
const isEasingGenerator = (easing)=>typeof easing === "object" && Boolean(easing.createAnimation);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"8kyHJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
const isFunction = (value)=>typeof value === "function";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"8dcJ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isString", ()=>isString);
const isString = (value)=>typeof value === "string";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"98Uct":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "time", ()=>time);
const time = {
    ms: (seconds)=>seconds * 1000,
    s: (milliseconds)=>milliseconds / 1000
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"ajTA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingFunction", ()=>getEasingFunction);
var _easing = require("@motionone/easing");
var _utils = require("@motionone/utils");
const namedEasings = {
    ease: (0, _easing.cubicBezier)(0.25, 0.1, 0.25, 1.0),
    "ease-in": (0, _easing.cubicBezier)(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": (0, _easing.cubicBezier)(0.42, 0.0, 0.58, 1.0),
    "ease-out": (0, _easing.cubicBezier)(0.0, 0.0, 0.58, 1.0)
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
    // If already an easing function, return
    if ((0, _utils.isFunction)(definition)) return definition;
    // If an easing curve definition, return bezier function
    if ((0, _utils.isCubicBezier)(definition)) return (0, _easing.cubicBezier)(...definition);
    // If we have a predefined easing function, return
    if (namedEasings[definition]) return namedEasings[definition];
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return (0, _easing.steps)(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return 0, _utils.noopReturn;
}

},{"@motionone/easing":"k1EJx","@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"k1EJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _cubicBezierEsJs.cubicBezier));
parcelHelpers.export(exports, "steps", ()=>(0, _stepsEsJs.steps));
var _cubicBezierEsJs = require("./cubic-bezier.es.js");
var _stepsEsJs = require("./steps.es.js");

},{"./cubic-bezier.es.js":"ajXFr","./steps.es.js":"gpf57","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"ajXFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
var _utils = require("@motionone/utils");
/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) upperBound = currentT;
        else lowerBound = currentT;
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return 0, _utils.noopReturn;
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"gpf57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "steps", ()=>steps);
var _utils = require("@motionone/utils");
const steps = (steps, direction = "end")=>(progress)=>{
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        const expanded = progress * steps;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return (0, _utils.clamp)(0, 1, rounded / steps);
    };

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"acg4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnimate", ()=>createAnimate);
var _heyListen = require("hey-listen");
var _animateStyleEsJs = require("./animate-style.es.js");
var _optionsEsJs = require("./utils/options.es.js");
var _resolveElementsEsJs = require("../utils/resolve-elements.es.js");
var _controlsEsJs = require("./utils/controls.es.js");
var _staggerEsJs = require("../utils/stagger.es.js");
function createAnimate(AnimatePolyfill) {
    return function animate(elements, keyframes, options = {}) {
        elements = (0, _resolveElementsEsJs.resolveElements)(elements);
        const numElements = elements.length;
        (0, _heyListen.invariant)(Boolean(numElements), "No valid element provided.");
        (0, _heyListen.invariant)(Boolean(keyframes), "No keyframes defined.");
        /**
         * Create and start new animations
         */ const animationFactories = [];
        for(let i = 0; i < numElements; i++){
            const element = elements[i];
            for(const key in keyframes){
                const valueOptions = (0, _optionsEsJs.getOptions)(options, key);
                valueOptions.delay = (0, _staggerEsJs.resolveOption)(valueOptions.delay, i, numElements);
                const animation = (0, _animateStyleEsJs.animateStyle)(element, key, keyframes[key], valueOptions, AnimatePolyfill);
                animationFactories.push(animation);
            }
        }
        return (0, _controlsEsJs.withControls)(animationFactories, options, /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */ options.duration);
    };
}

},{"hey-listen":"8yK8Z","./animate-style.es.js":"3Iur2","./utils/options.es.js":"fCKN3","../utils/resolve-elements.es.js":"KZgGT","./utils/controls.es.js":"39ePr","../utils/stagger.es.js":"ihQdi","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"8yK8Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var warning = function() {};
var invariant = function() {};
warning = function(check, message) {
    if (!check && typeof console !== "undefined") console.warn(message);
};
invariant = function(check, message) {
    if (!check) throw new Error(message);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"3Iur2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateStyle", ()=>animateStyle);
var _dataEsJs = require("./data.es.js");
var _cssVarEsJs = require("./utils/css-var.es.js");
var _utils = require("@motionone/utils");
var _transformsEsJs = require("./utils/transforms.es.js");
var _easingEsJs = require("./utils/easing.es.js");
var _featureDetectionEsJs = require("./utils/feature-detection.es.js");
var _keyframesEsJs = require("./utils/keyframes.es.js");
var _styleEsJs = require("./style.es.js");
var _getStyleNameEsJs = require("./utils/get-style-name.es.js");
var _stopAnimationEsJs = require("./utils/stop-animation.es.js");
var _getUnitEsJs = require("./utils/get-unit.es.js");
function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = (0, _utils.defaults).duration, delay = (0, _utils.defaults).delay, endDelay = (0, _utils.defaults).endDelay, repeat = (0, _utils.defaults).repeat, easing = (0, _utils.defaults).easing, persist = false, direction, offset, allowWebkitAcceleration = false } = options;
    const data = (0, _dataEsJs.getAnimationData)(element);
    const valueIsTransform = (0, _transformsEsJs.isTransform)(key);
    let canAnimateNatively = (0, _featureDetectionEsJs.supports).waapi();
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */ valueIsTransform && (0, _transformsEsJs.addTransformToElement)(element, key);
    const name = (0, _getStyleNameEsJs.getStyleName)(key);
    const motionValue = (0, _dataEsJs.getMotionValue)(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */ const definition = (0, _transformsEsJs.transformDefinitions).get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */ (0, _stopAnimationEsJs.stopAnimation)(motionValue.animation, !((0, _utils.isEasingGenerator)(easing) && motionValue.generator) && options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */ return ()=>{
        const readInitialValue = ()=>{
            var _a, _b;
            return (_b = (_a = (0, _styleEsJs.style).get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
        };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */ let keyframes = (0, _keyframesEsJs.hydrateKeyframes)((0, _keyframesEsJs.keyframesList)(keyframesDefinition), readInitialValue);
        /**
         * Detect unit type of keyframes.
         */ const toUnit = (0, _getUnitEsJs.getUnitConverter)(keyframes, definition);
        if ((0, _utils.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            duration = custom.duration || duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */ if ((0, _cssVarEsJs.isCssVar)(name)) {
            if ((0, _featureDetectionEsJs.supports).cssRegisterProperty()) (0, _cssVarEsJs.registerCssVariable)(name);
            else canAnimateNatively = false;
        }
        /**
         * If we've been passed a custom easing function, and this browser
         * does **not** support linear() easing, and the value is a transform
         * (and thus a pure number) we can still support the custom easing
         * by falling back to the animation polyfill.
         */ if (valueIsTransform && !(0, _featureDetectionEsJs.supports).linearEasing() && ((0, _utils.isFunction)(easing) || (0, _utils.isEasingList)(easing) && easing.some((0, _utils.isFunction)))) canAnimateNatively = false;
        /**
         * If we can animate this value with WAAPI, do so.
         */ if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */ if (definition) keyframes = keyframes.map((value)=>(0, _utils.isNumber)(value) ? definition.toDefaultUnit(value) : value);
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */ if (keyframes.length === 1 && (!(0, _featureDetectionEsJs.supports).partialKeyframes() || isRecording)) keyframes.unshift(readInitialValue());
            const animationOptions = {
                delay: (0, _utils.time).ms(delay),
                duration: (0, _utils.time).ms(duration),
                endDelay: (0, _utils.time).ms(endDelay),
                easing: !(0, _utils.isEasingList)(easing) ? (0, _easingEsJs.convertEasing)(easing, duration) : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both"
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: (0, _utils.isEasingList)(easing) ? easing.map((thisEasing)=>(0, _easingEsJs.convertEasing)(thisEasing, duration)) : undefined
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */ if (!animation.finished) animation.finished = new Promise((resolve, reject)=>{
                animation.onfinish = resolve;
                animation.oncancel = reject;
            });
            const target = keyframes[keyframes.length - 1];
            animation.finished.then(()=>{
                if (persist) return;
                // Apply styles to target
                (0, _styleEsJs.style).set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            }).catch((0, _utils.noop));
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */ if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
        /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */ } else if (AnimationPolyfill && valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */ keyframes = keyframes.map((value)=>typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */ if (keyframes.length === 1) keyframes.unshift(parseFloat(readInitialValue()));
            animation = new AnimationPolyfill((latest)=>{
                (0, _styleEsJs.style).set(element, name, toUnit ? toUnit(latest) : latest);
            }, keyframes, Object.assign(Object.assign({}, options), {
                duration,
                easing
            }));
        } else {
            const target = keyframes[keyframes.length - 1];
            (0, _styleEsJs.style).set(element, name, definition && (0, _utils.isNumber)(target) ? definition.toDefaultUnit(target) : target);
        }
        if (isRecording) record(element, key, keyframes, {
            duration,
            delay: delay,
            easing,
            repeat,
            offset
        }, "motion-one");
        motionValue.setAnimation(animation);
        return animation;
    };
}

},{"./data.es.js":"jdGoo","./utils/css-var.es.js":"eE8uy","@motionone/utils":"krBNu","./utils/transforms.es.js":"3akS9","./utils/easing.es.js":"45L34","./utils/feature-detection.es.js":"98zUZ","./utils/keyframes.es.js":"e1Tay","./style.es.js":"gYtky","./utils/get-style-name.es.js":"ksBTX","./utils/stop-animation.es.js":"jktqe","./utils/get-unit.es.js":"ldpTn","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"jdGoo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAnimationData", ()=>getAnimationData);
parcelHelpers.export(exports, "getMotionValue", ()=>getMotionValue);
var _types = require("@motionone/types");
const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) data.set(element, {
        transforms: [],
        values: new Map()
    });
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) motionValues.set(name, new (0, _types.MotionValue)());
    return motionValues.get(name);
}

},{"@motionone/types":"6rLrg","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"6rLrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>(0, _motionValueEsJs.MotionValue));
var _motionValueEsJs = require("./MotionValue.es.js");

},{"./MotionValue.es.js":"alVre","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"alVre":[function(require,module,exports) {
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>MotionValue);
class MotionValue {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 || animation.finished.then(()=>this.clearAnimation()).catch(()=>{});
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"eE8uy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCssVar", ()=>isCssVar);
parcelHelpers.export(exports, "registerCssVariable", ()=>registerCssVariable);
parcelHelpers.export(exports, "registeredProperties", ()=>registeredProperties);
var _transformsEsJs = require("./transforms.es.js");
const isCssVar = (name)=>name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name)) return;
    registeredProperties.add(name);
    try {
        const { syntax, initialValue } = (0, _transformsEsJs.transformDefinitions).has(name) ? (0, _transformsEsJs.transformDefinitions).get(name) : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue
        });
    } catch (e) {}
}

},{"./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"3akS9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addTransformToElement", ()=>addTransformToElement);
parcelHelpers.export(exports, "asTransformCssVar", ()=>asTransformCssVar);
parcelHelpers.export(exports, "axes", ()=>axes);
parcelHelpers.export(exports, "buildTransformTemplate", ()=>buildTransformTemplate);
parcelHelpers.export(exports, "compareTransformOrder", ()=>compareTransformOrder);
parcelHelpers.export(exports, "isTransform", ()=>isTransform);
parcelHelpers.export(exports, "transformAlias", ()=>transformAlias);
parcelHelpers.export(exports, "transformDefinitions", ()=>transformDefinitions);
var _utils = require("@motionone/utils");
var _dataEsJs = require("../data.es.js");
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */ const axes = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */ const order = [
    "translate",
    "scale",
    "rotate",
    "skew"
];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v)=>v + "deg"
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v)=>v + "px"
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: (0, _utils.noopReturn)
    },
    skew: rotation
};
const transformDefinitions = new Map();
const asTransformCssVar = (name)=>`--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */ const transforms = [
    "x",
    "y",
    "z"
];
order.forEach((name)=>{
    axes.forEach((axis)=>{
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */ const compareTransformOrder = (a, b)=>transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */ const transformLookup = new Set(transforms);
const isTransform = (name)=>transformLookup.has(name);
const addTransformToElement = (element, name)=>{
    // Map x to translateX etc
    if (transformAlias[name]) name = transformAlias[name];
    const { transforms } = (0, _dataEsJs.getAnimationData)(element);
    (0, _utils.addUniqueItem)(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */ element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = (transforms)=>transforms.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (template, name)=>`${template} ${name}(var(${asTransformCssVar(name)}))`;

},{"@motionone/utils":"krBNu","../data.es.js":"jdGoo","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"45L34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertEasing", ()=>convertEasing);
parcelHelpers.export(exports, "cubicBezierAsString", ()=>cubicBezierAsString);
parcelHelpers.export(exports, "generateLinearEasingPoints", ()=>generateLinearEasingPoints);
var _utils = require("@motionone/utils");
var _featureDetectionEsJs = require("./feature-detection.es.js");
// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration)=>{
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for(let i = 0; i < numPoints; i++)points += easing((0, _utils.progress)(0, numPoints - 1, i)) + ", ";
    return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration)=>{
    if ((0, _utils.isFunction)(easing)) return (0, _featureDetectionEsJs.supports).linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : (0, _utils.defaults).easing;
    else return (0, _utils.isCubicBezier)(easing) ? cubicBezierAsString(easing) : easing;
};
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;

},{"@motionone/utils":"krBNu","./feature-detection.es.js":"98zUZ","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"98zUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supports", ()=>supports);
const testAnimation = (keyframes, options)=>document.createElement("div").animate(keyframes, options);
const featureTests = {
    cssRegisterProperty: ()=>typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: ()=>{
        try {
            testAnimation({
                opacity: [
                    1
                ]
            });
        } catch (e) {
            return false;
        }
        return true;
    },
    finished: ()=>Boolean(testAnimation({
            opacity: [
                0,
                1
            ]
        }, {
            duration: 0.001
        }).finished),
    linearEasing: ()=>{
        try {
            testAnimation({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            });
        } catch (e) {
            return false;
        }
        return true;
    }
};
const results = {};
const supports = {};
for(const key in featureTests)supports[key] = ()=>{
    if (results[key] === undefined) results[key] = featureTests[key]();
    return results[key];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"e1Tay":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hydrateKeyframes", ()=>hydrateKeyframes);
parcelHelpers.export(exports, "keyframesList", ()=>keyframesList);
function hydrateKeyframes(keyframes, readInitialValue) {
    for(let i = 0; i < keyframes.length; i++)if (keyframes[i] === null) keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    return keyframes;
}
const keyframesList = (keyframes)=>Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"gYtky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "style", ()=>style);
var _cssVarEsJs = require("./utils/css-var.es.js");
var _getStyleNameEsJs = require("./utils/get-style-name.es.js");
var _transformsEsJs = require("./utils/transforms.es.js");
const style = {
    get: (element, name)=>{
        name = (0, _getStyleNameEsJs.getStyleName)(name);
        let value = (0, _cssVarEsJs.isCssVar)(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
        if (!value && value !== 0) {
            const definition = (0, _transformsEsJs.transformDefinitions).get(name);
            if (definition) value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value)=>{
        name = (0, _getStyleNameEsJs.getStyleName)(name);
        if ((0, _cssVarEsJs.isCssVar)(name)) element.style.setProperty(name, value);
        else element.style[name] = value;
    }
};

},{"./utils/css-var.es.js":"eE8uy","./utils/get-style-name.es.js":"ksBTX","./utils/transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"ksBTX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStyleName", ()=>getStyleName);
var _transformsEsJs = require("./transforms.es.js");
function getStyleName(key) {
    if ((0, _transformsEsJs.transformAlias)[key]) key = (0, _transformsEsJs.transformAlias)[key];
    return (0, _transformsEsJs.isTransform)(key) ? (0, _transformsEsJs.asTransformCssVar)(key) : key;
}

},{"./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"jktqe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stopAnimation", ()=>stopAnimation);
function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished") return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) animation.stop();
        else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    } catch (e) {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"ldpTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUnitConverter", ()=>getUnitConverter);
var _utils = require("@motionone/utils");
function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || (0, _utils.noopReturn);
    const finalKeyframe = keyframes[keyframes.length - 1];
    if ((0, _utils.isString)(finalKeyframe)) {
        const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
        if (unit) toUnit = (value)=>value + unit;
    }
    return toUnit;
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"fCKN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOptions", ()=>getOptions);
const getOptions = (options, key)=>/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */ options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"KZgGT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveElements", ()=>resolveElements);
function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
            elements = selectorCache[elements];
        } else elements = document.querySelectorAll(elements);
    } else if (elements instanceof Element) elements = [
        elements
    ];
    /**
     * Return an empty array
     */ return Array.from(elements || []);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"39ePr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "controls", ()=>controls);
parcelHelpers.export(exports, "withControls", ()=>withControls);
var _utils = require("@motionone/utils");
var _stopAnimationEsJs = require("./stop-animation.es.js");
const createAnimation = (factory)=>factory();
const withControls = (animationFactory, options, duration = (0, _utils.defaults).duration)=>{
    return new Proxy({
        animations: animationFactory.map(createAnimation).filter(Boolean),
        duration,
        options
    }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */ const getActiveAnimation = (state)=>state.animations[0];
const controls = {
    get: (target, key)=>{
        const activeAnimation = getActiveAnimation(target);
        switch(key){
            case "duration":
                return target.duration;
            case "currentTime":
                return (0, _utils.time).s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) target.finished = Promise.all(target.animations.map(selectFinished)).catch((0, _utils.noop));
                return target.finished;
            case "stop":
                return ()=>{
                    target.animations.forEach((animation)=>(0, _stopAnimationEsJs.stopAnimation)(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */ return (callback)=>{
                    target.animations.forEach((animation)=>callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? undefined : ()=>target.animations.forEach((animation)=>animation[key]());
        }
    },
    set: (target, key, value)=>{
        switch(key){
            case "currentTime":
                value = (0, _utils.time).ms(value);
            case "currentTime":
            case "playbackRate":
                for(let i = 0; i < target.animations.length; i++)target.animations[i][key] = value;
                return true;
        }
        return false;
    }
};
const selectFinished = (animation)=>animation.finished;

},{"@motionone/utils":"krBNu","./stop-animation.es.js":"jktqe","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"ihQdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFromIndex", ()=>getFromIndex);
parcelHelpers.export(exports, "resolveOption", ()=>resolveOption);
parcelHelpers.export(exports, "stagger", ()=>stagger);
var _utils = require("@motionone/utils");
var _animation = require("@motionone/animation");
function stagger(duration = 0.1, { start = 0, from = 0, easing } = {}) {
    return (i, total)=>{
        const fromIndex = (0, _utils.isNumber)(from) ? from : getFromIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (easing) {
            const maxDelay = total * duration;
            const easingFunction = (0, _animation.getEasingFunction)(easing);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return start + delay;
    };
}
function getFromIndex(from, total) {
    if (from === "first") return 0;
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function resolveOption(option, i, total) {
    return (0, _utils.isFunction)(option) ? option(i, total) : option;
}

},{"@motionone/utils":"krBNu","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"lEsDf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "animateProgress", ()=>animateProgress);
var _dom = require("@motionone/dom");
var _utils = require("@motionone/utils");
var _animation = require("@motionone/animation");
function animateProgress(target, options = {}) {
    return (0, _dom.withControls)([
        ()=>{
            const animation = new (0, _animation.Animation)(target, [
                0,
                1
            ], options);
            animation.finished.catch(()=>{});
            return animation;
        }
    ], options, options.duration);
}
function animate(target, keyframesOrOptions, options) {
    const factory = (0, _utils.isFunction)(target) ? animateProgress : (0, _dom.animate);
    return factory(target, keyframesOrOptions, options);
}

},{"@motionone/dom":"krEZT","@motionone/utils":"krBNu","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"77RTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ifDefinedJs = require("lit-html/directives/if-defined.js");
parcelHelpers.exportAll(_ifDefinedJs, exports);

},{"lit-html/directives/if-defined.js":"fP4k4","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"fP4k4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ifDefined", ()=>l);
var _litHtmlJs = require("../lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const l = (l)=>null != l ? l : (0, _litHtmlJs.nothing);

},{"../lit-html.js":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"egNBP"}],"lB7MY":[function(require,module,exports) {
const canPromise = require("da1f68cc1fc16077");
const QRCode = require("8c6cf49ef2287430");
const CanvasRenderer = require("8a60cf7722cc14ce");
const SvgRenderer = require("f6fcc816b915ba37");
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === "function";
    if (!isLastArgCb && !canPromise()) throw new Error("Callback required as last argument");
    if (isLastArgCb) {
        if (argsNum < 2) throw new Error("Too few arguments provided");
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === "undefined") {
                cb = opts;
                opts = undefined;
            } else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    } else {
        if (argsNum < 1) throw new Error("Too few arguments provided");
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    } catch (e) {
        cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
// only svg for now.
exports.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer.render(data, opts);
});

},{"da1f68cc1fc16077":"9FrZa","8c6cf49ef2287430":"20hbG","8a60cf7722cc14ce":"2oGFV","f6fcc816b915ba37":"7Akrj"}],"9FrZa":[function(require,module,exports) {
// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
module.exports = function() {
    return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
};

},{}],"20hbG":[function(require,module,exports) {
const Utils = require("4cf6a8173d9f3a2");
const ECLevel = require("2ad62f61c352884c");
const BitBuffer = require("87d5a6270eb1dc26");
const BitMatrix = require("91abc94f777368cc");
const AlignmentPattern = require("9737c3939ab85d95");
const FinderPattern = require("cee3d371e219e45e");
const MaskPattern = require("8700c8c682afabf3");
const ECCode = require("65ad903a6ba3e");
const ReedSolomonEncoder = require("1e8e447afb4d169c");
const Version = require("8a4a19af97836d80");
const FormatInfo = require("26720f9d94c9e268");
const Mode = require("7b6429a248ecc51f");
const Segments = require("1368d0fa14524351");
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/ /**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupFinderPattern(matrix, version) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -1; r <= 7; r++){
            if (row + r <= -1 || size <= row + r) continue;
            for(let c = -1; c <= 7; c++){
                if (col + c <= -1 || size <= col + c) continue;
                if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) matrix.set(row + r, col + c, true, true);
                else matrix.set(row + r, col + c, false, true);
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */ function setupTimingPattern(matrix) {
    const size = matrix.size;
    for(let r = 8; r < size - 8; r++){
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupAlignmentPattern(matrix, version) {
    const pos = AlignmentPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -2; r <= 2; r++){
            for(let c = -2; c <= 2; c++)if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) matrix.set(row + r, col + c, true, true);
            else matrix.set(row + r, col + c, false, true);
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupVersionInfo(matrix, version) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version);
    let row, col, mod;
    for(let i = 0; i < 18; i++){
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */ function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    let i, mod;
    for(i = 0; i < 15; i++){
        mod = (bits >> i & 1) === 1;
        // vertical
        if (i < 6) matrix.set(i, 8, mod, true);
        else if (i < 8) matrix.set(i + 1, 8, mod, true);
        else matrix.set(size - 15 + i, 8, mod, true);
        // horizontal
        if (i < 8) matrix.set(8, size - i - 1, mod, true);
        else if (i < 9) matrix.set(8, 15 - i - 1 + 1, mod, true);
        else matrix.set(8, 15 - i - 1, mod, true);
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */ function setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for(let col = size - 1; col > 0; col -= 2){
        if (col === 6) col--;
        while(true){
            for(let c = 0; c < 2; c++)if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                    byteIndex++;
                    bitIndex = 7;
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */ function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    const buffer = new BitBuffer();
    segments.forEach(function(data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while(buffer.getLengthInBits() % 8 !== 0)buffer.putBit(0);
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for(let i = 0; i < remainingByte; i++)buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */ function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    const rs = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for(let b = 0; b < ecTotalBlocks; b++){
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i, r;
    // Add data codewords
    for(i = 0; i < maxDataSize; i++){
        for(r = 0; r < ecTotalBlocks; r++)if (i < dcData[r].length) data[index++] = dcData[r][i];
    }
    // Apped EC codewords
    for(i = 0; i < ecCount; i++)for(r = 0; r < ecTotalBlocks; r++)data[index++] = ecData[r][i];
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */ function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
    let segments;
    if (Array.isArray(data)) segments = Segments.fromArray(data);
    else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments = Segments.fromString(data, estimatedVersion || 40);
    } else throw new Error("Invalid data");
    // Get the min version that can contain data
    const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) throw new Error("The amount of data is too big to be stored in a QR Code");
    // If not specified, use min version as default
    if (!version) version = bestVersion;
    else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
    const dataBits = createData(version, errorCorrectionLevel, segments);
    // Allocate matrix buffer
    const moduleCount = Utils.getSymbolSize(version);
    const modules = new BitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version >= 7) setupVersionInfo(modules, version);
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern)) // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    // Apply mask pattern
    MaskPattern.applyMask(maskPattern, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
    return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */ exports.create = function create(data, options) {
    if (typeof data === "undefined" || data === "") throw new Error("No input text");
    let errorCorrectionLevel = ECLevel.M;
    let version;
    let mask;
    if (typeof options !== "undefined") {
        // Use higher error correction level as default
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) Utils.setToSJISFunction(options.toSJISFunc);
    }
    return createSymbol(data, version, errorCorrectionLevel, mask);
};

},{"4cf6a8173d9f3a2":"iXLHI","2ad62f61c352884c":"kbPwo","87d5a6270eb1dc26":"kiPfj","91abc94f777368cc":"fTjkX","9737c3939ab85d95":"1o9KB","cee3d371e219e45e":"dc6Ma","8700c8c682afabf3":"fyimH","65ad903a6ba3e":"5yWYH","1e8e447afb4d169c":"47Qq0","8a4a19af97836d80":"a8ag2","26720f9d94c9e268":"iThdR","7b6429a248ecc51f":"f1e9A","1368d0fa14524351":"4tKki"}],"iXLHI":[function(require,module,exports) {
let toSJISFunction;
const CODEWORDS_COUNT = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */ exports.getSymbolSize = function getSymbolSize(version) {
    if (!version) throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */ exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */ exports.getBCHDigit = function(data) {
    let digit = 0;
    while(data !== 0){
        digit++;
        data >>>= 1;
    }
    return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== "function") throw new Error('"toSJISFunc" is not a valid function.');
    toSJISFunction = f;
};
exports.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== "undefined";
};
exports.toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};

},{}],"kbPwo":[function(require,module,exports) {
exports.L = {
    bit: 1
};
exports.M = {
    bit: 0
};
exports.Q = {
    bit: 3
};
exports.H = {
    bit: 2
};
function fromString(string) {
    if (typeof string !== "string") throw new Error("Param is not a string");
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case "l":
        case "low":
            return exports.L;
        case "m":
        case "medium":
            return exports.M;
        case "q":
        case "quartile":
            return exports.Q;
        case "h":
        case "high":
            return exports.H;
        default:
            throw new Error("Unknown EC Level: " + string);
    }
}
exports.isValid = function isValid(level) {
    return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{}],"kiPfj":[function(require,module,exports) {
function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
        for(let i = 0; i < length; i++)this.putBit((num >>> length - i - 1 & 1) === 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) this.buffer.push(0);
        if (bit) this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        this.length++;
    }
};
module.exports = BitBuffer;

},{}],"fTjkX":[function(require,module,exports) {
/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */ function BitMatrix(size) {
    if (!size || size < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */ BitMatrix.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */ BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */ BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */ BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;

},{}],"1o9KB":[function(require,module,exports) {
/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */ const getSymbolSize = require("3fa093180e62a22a").getSymbolSize;
/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */ exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    const posCount = Math.floor(version / 7) + 2;
    const size = getSymbolSize(version);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [
        size - 7
    ] // Last coord is always (size - 7)
    ;
    for(let i = 1; i < posCount - 1; i++)positions[i] = positions[i - 1] - intervals;
    positions.push(6) // First coord is always 6
    ;
    return positions.reverse();
};
/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const coords = [];
    const pos = exports.getRowColCoords(version);
    const posLength = pos.length;
    for(let i = 0; i < posLength; i++)for(let j = 0; j < posLength; j++){
        // Skip if position is occupied by finder patterns
        if (i === 0 && j === 0 || // top-left
        i === 0 && j === posLength - 1 || // bottom-left
        i === posLength - 1 && j === 0) continue;
        coords.push([
            pos[i],
            pos[j]
        ]);
    }
    return coords;
};

},{"3fa093180e62a22a":"iXLHI"}],"dc6Ma":[function(require,module,exports) {
const getSymbolSize = require("6ec9ae5660047293").getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const size = getSymbolSize(version);
    return [
        // top-left
        [
            0,
            0
        ],
        // top-right
        [
            size - FINDER_PATTERN_SIZE,
            0
        ],
        // bottom-left
        [
            0,
            size - FINDER_PATTERN_SIZE
        ]
    ];
};

},{"6ec9ae5660047293":"iXLHI"}],"fyimH":[function(require,module,exports) {
/**
 * Data mask pattern reference
 * @type {Object}
 */ exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */ const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
};
/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */ exports.isValid = function isValid(mask) {
    return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
};
/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */ exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
};
/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/ exports.getPenaltyN1 = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for(let row = 0; row < size; row++){
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for(let col = 0; col < size; col++){
            let module = data.get(row, col);
            if (module === lastCol) sameCountCol++;
            else {
                if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module;
                sameCountCol = 1;
            }
            module = data.get(col, row);
            if (module === lastRow) sameCountRow++;
            else {
                if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module;
                sameCountRow = 1;
            }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
};
/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */ exports.getPenaltyN2 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for(let row = 0; row < size - 1; row++)for(let col = 0; col < size - 1; col++){
        const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0) points++;
    }
    return points * PenaltyScores.N2;
};
/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */ exports.getPenaltyN3 = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for(let row = 0; row < size; row++){
        bitsCol = bitsRow = 0;
        for(let col = 0; col < size; col++){
            bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
            bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
        }
    }
    return points * PenaltyScores.N3;
};
/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */ exports.getPenaltyN4 = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for(let i = 0; i < modulesCount; i++)darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
};
/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */ function getMaskAt(maskPattern, i, j) {
    switch(maskPattern){
        case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
            return i % 2 === 0;
        case exports.Patterns.PATTERN010:
            return j % 3 === 0;
        case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
            throw new Error("bad maskPattern:" + maskPattern);
    }
}
/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */ exports.applyMask = function applyMask(pattern, data) {
    const size = data.size;
    for(let col = 0; col < size; col++)for(let row = 0; row < size; row++){
        if (data.isReserved(row, col)) continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
    }
};
/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */ exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for(let p = 0; p < numPatterns; p++){
        setupFormatFunc(p);
        exports.applyMask(p, data);
        // Calculate penalty
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        // Undo previously applied mask
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
        }
    }
    return bestPattern;
};

},{}],"5yWYH":[function(require,module,exports) {
const ECLevel = require("7baaa530584d1bc4");
const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
];
const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */ exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */ exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};

},{"7baaa530584d1bc4":"kbPwo"}],"47Qq0":[function(require,module,exports) {
const Polynomial = require("742a7ee6d6a2d145");
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */ ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */ ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    const start = this.degree - remainder.length;
    if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
    }
    return remainder;
};
module.exports = ReedSolomonEncoder;

},{"742a7ee6d6a2d145":"dxhHI"}],"dxhHI":[function(require,module,exports) {
const GF = require("780c74029318268c");
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */ exports.mul = function mul(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for(let i = 0; i < p1.length; i++)for(let j = 0; j < p2.length; j++)coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    return coeff;
};
/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */ exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while(result.length - divisor.length >= 0){
        const coeff = result[0];
        for(let i = 0; i < divisor.length; i++)result[i] ^= GF.mul(divisor[i], coeff);
        // remove all zeros from buffer head
        let offset = 0;
        while(offset < result.length && result[offset] === 0)offset++;
        result = result.slice(offset);
    }
    return result;
};
/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */ exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([
        1
    ]);
    for(let i = 0; i < degree; i++)poly = exports.mul(poly, new Uint8Array([
        1,
        GF.exp(i)
    ]));
    return poly;
};

},{"780c74029318268c":"2JC5s"}],"2JC5s":[function(require,module,exports) {
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256) /**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */ ;
(function initTables() {
    let x = 1;
    for(let i = 0; i < 255; i++){
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1 // multiply by 2
        ;
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) x ^= 0x11D;
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for(let i = 255; i < 512; i++)EXP_TABLE[i] = EXP_TABLE[i - 255];
})();
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.log = function log(n) {
    if (n < 1) throw new Error("log(" + n + ")");
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */ exports.mul = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};

},{}],"a8ag2":[function(require,module,exports) {
const Utils = require("f67b02cdf61cb7c6");
const ECCode = require("777da0d92c463f2e");
const ECLevel = require("acd5b4fcd696edf3");
const Mode = require("5303c314c4a688d7");
const VersionCheck = require("663d0e03da8b2897");
// Generator polynomial used to encode version information
const G18 = 7973;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
    }
    return undefined;
}
function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
    let totalBits = 0;
    segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) return currentVersion;
    }
    return undefined;
}
/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */ exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) return parseInt(value, 10);
    return defaultValue;
};
/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */ exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!VersionCheck.isValid(version)) throw new Error("Invalid QR Code version");
    // Use Byte mode as default
    if (typeof mode === "undefined") mode = Mode.BYTE;
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === Mode.MIXED) return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
    // Return max number of storable codewords
    switch(mode){
        case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
            return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
            return Math.floor(usableBits / 8);
    }
};
/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */ exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    let seg;
    const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
    if (Array.isArray(data)) {
        if (data.length > 1) return getBestVersionForMixedData(data, ecl);
        if (data.length === 0) return 1;
        seg = data[0];
    } else seg = data;
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};
/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */ exports.getEncodedBits = function getEncodedBits(version) {
    if (!VersionCheck.isValid(version) || version < 7) throw new Error("Invalid QR Code version");
    let d = version << 12;
    while(Utils.getBCHDigit(d) - G18_BCH >= 0)d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
    return version << 12 | d;
};

},{"f67b02cdf61cb7c6":"iXLHI","777da0d92c463f2e":"5yWYH","acd5b4fcd696edf3":"kbPwo","5303c314c4a688d7":"f1e9A","663d0e03da8b2897":"enfTX"}],"f1e9A":[function(require,module,exports) {
const VersionCheck = require("488660fac9162579");
const Regex = require("a23fd227d32f3622");
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */ exports.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [
        10,
        12,
        14
    ]
};
/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */ exports.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [
        9,
        11,
        13
    ]
};
/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */ exports.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [
        8,
        16,
        16
    ]
};
/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */ exports.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [
        8,
        10,
        12
    ]
};
/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */ exports.MIXED = {
    bit: -1
};
/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */ exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
    if (!VersionCheck.isValid(version)) throw new Error("Invalid version: " + version);
    if (version >= 1 && version < 10) return mode.ccBits[0];
    else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
};
/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */ exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr)) return exports.KANJI;
    else return exports.BYTE;
};
/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */ exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error("Invalid mode");
};
/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */ exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
};
/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */ function fromString(string) {
    if (typeof string !== "string") throw new Error("Param is not a string");
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case "numeric":
            return exports.NUMERIC;
        case "alphanumeric":
            return exports.ALPHANUMERIC;
        case "kanji":
            return exports.KANJI;
        case "byte":
            return exports.BYTE;
        default:
            throw new Error("Unknown mode: " + string);
    }
}
/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */ exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{"488660fac9162579":"enfTX","a23fd227d32f3622":"3Bqru"}],"enfTX":[function(require,module,exports) {
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */ exports.isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};

},{}],"3Bqru":[function(require,module,exports) {
const numeric = "[0-9]+";
const alphanumeric = "[A-Z $%*+\\-./:]+";
let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kanji = kanji.replace(/u/g, "\\u");
const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
exports.KANJI = new RegExp(kanji, "g");
exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
exports.BYTE = new RegExp(byte, "g");
exports.NUMERIC = new RegExp(numeric, "g");
exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
const TEST_KANJI = new RegExp("^" + kanji + "$");
const TEST_NUMERIC = new RegExp("^" + numeric + "$");
const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
exports.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};

},{}],"iThdR":[function(require,module,exports) {
const Utils = require("eeca831a42e85d6c");
const G15 = 1335;
const G15_MASK = 21522;
const G15_BCH = Utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */ exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    const data = errorCorrectionLevel.bit << 3 | mask;
    let d = data << 10;
    while(Utils.getBCHDigit(d) - G15_BCH >= 0)d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return (data << 10 | d) ^ G15_MASK;
};

},{"eeca831a42e85d6c":"iXLHI"}],"4tKki":[function(require,module,exports) {
const Mode = require("45f6d4bff9d2fc72");
const NumericData = require("73109cbf4f3c309d");
const AlphanumericData = require("5320016e34c30467");
const ByteData = require("fd16f8f25b581951");
const KanjiData = require("8a7b84039f1cf0d2");
const Regex = require("79379a3a8f3c26bb");
const Utils = require("66903ca51bd2ea1d");
const dijkstra = require("3b9f47d541e7d71f");
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */ function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
}
/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */ function getSegments(regex, mode, str) {
    const segments = [];
    let result;
    while((result = regex.exec(str)) !== null)segments.push({
        data: result[0],
        index: result.index,
        mode: mode,
        length: result[0].length
    });
    return segments;
}
/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */ function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
    } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
    }).map(function(obj) {
        return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
        };
    });
}
/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */ function getSegmentBitsLength(length, mode) {
    switch(mode){
        case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
            return KanjiData.getBitsLength(length);
        case Mode.BYTE:
            return ByteData.getBitsLength(length);
    }
}
/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}
/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function buildNodes(segs) {
    const nodes = [];
    for(let i = 0; i < segs.length; i++){
        const seg = segs[i];
        switch(seg.mode){
            case Mode.NUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.ALPHANUMERIC,
                        length: seg.length
                    },
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.ALPHANUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.KANJI:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
                break;
            case Mode.BYTE:
                nodes.push([
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
        }
    }
    return nodes;
}
/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */ function buildGraph(nodes, version) {
    const table = {};
    const graph = {
        start: {}
    };
    let prevNodeIds = [
        "start"
    ];
    for(let i = 0; i < nodes.length; i++){
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for(let j = 0; j < nodeGroup.length; j++){
            const node = nodeGroup[j];
            const key = "" + i + j;
            currentNodeIds.push(key);
            table[key] = {
                node: node,
                lastCount: 0
            };
            graph[key] = {};
            for(let n = 0; n < prevNodeIds.length; n++){
                const prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                    graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                    table[prevNodeId].lastCount += node.length;
                } else {
                    if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                    graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
                    ;
                }
            }
        }
        prevNodeIds = currentNodeIds;
    }
    for(let n = 0; n < prevNodeIds.length; n++)graph[prevNodeIds[n]].end = 0;
    return {
        map: graph,
        table: table
    };
}
/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */ function buildSingleSegment(data, modesHint) {
    let mode;
    const bestMode = Mode.getBestModeForData(data);
    mode = Mode.from(modesHint, bestMode);
    // Make sure data can be encoded
    if (mode !== Mode.BYTE && mode.bit < bestMode.bit) throw new Error('"' + data + '"' + " cannot be encoded with mode " + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
    // Use Mode.BYTE if Kanji support is disabled
    if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) mode = Mode.BYTE;
    switch(mode){
        case Mode.NUMERIC:
            return new NumericData(data);
        case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
        case Mode.KANJI:
            return new KanjiData(data);
        case Mode.BYTE:
            return new ByteData(data);
    }
}
/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */ exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
        if (typeof seg === "string") acc.push(buildSingleSegment(seg, null));
        else if (seg.data) acc.push(buildSingleSegment(seg.data, seg.mode));
        return acc;
    }, []);
};
/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */ exports.fromString = function fromString(data, version) {
    const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version);
    const path = dijkstra.find_path(graph.map, "start", "end");
    const optimizedSegs = [];
    for(let i = 1; i < path.length - 1; i++)optimizedSegs.push(graph.table[path[i]].node);
    return exports.fromArray(mergeSegments(optimizedSegs));
};
/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */ exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};

},{"45f6d4bff9d2fc72":"f1e9A","73109cbf4f3c309d":"c44F8","5320016e34c30467":"cdBOf","fd16f8f25b581951":"ediQ9","8a7b84039f1cf0d2":"gphIw","79379a3a8f3c26bb":"3Bqru","66903ca51bd2ea1d":"iXLHI","3b9f47d541e7d71f":"lDJz9"}],"c44F8":[function(require,module,exports) {
const Mode = require("29134b0b0820b091");
function NumericData(data) {
    this.mode = Mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    let i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for(i = 0; i + 3 <= this.data.length; i += 3){
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    const remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
module.exports = NumericData;

},{"29134b0b0820b091":"f1e9A"}],"cdBOf":[function(require,module,exports) {
const Mode = require("9c7c9b869570f846");
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */ const ALPHA_NUM_CHARS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
];
function AlphanumericData(data) {
    this.mode = Mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    let i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for(i = 0; i + 2 <= this.data.length; i += 2){
        // The character value of the first character is multiplied by 45
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
};
module.exports = AlphanumericData;

},{"9c7c9b869570f846":"f1e9A"}],"ediQ9":[function(require,module,exports) {
const encodeUtf8 = require("1658cb836325c397");
const Mode = require("a20a51f6cd184253");
function ByteData(data) {
    this.mode = Mode.BYTE;
    if (typeof data === "string") data = encodeUtf8(data);
    this.data = new Uint8Array(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer) {
    for(let i = 0, l = this.data.length; i < l; i++)bitBuffer.put(this.data[i], 8);
};
module.exports = ByteData;

},{"1658cb836325c397":"3UdK6","a20a51f6cd184253":"f1e9A"}],"3UdK6":[function(require,module,exports) {
"use strict";
module.exports = function encodeUtf8(input) {
    var result = [];
    var size = input.length;
    for(var index = 0; index < size; index++){
        var point = input.charCodeAt(index);
        if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
            var second = input.charCodeAt(index + 1);
            if (second >= 0xDC00 && second <= 0xDFFF) {
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                index += 1;
            }
        }
        // US-ASCII
        if (point < 0x80) {
            result.push(point);
            continue;
        }
        // 2-byte UTF-8
        if (point < 0x800) {
            result.push(point >> 6 | 192);
            result.push(point & 63 | 128);
            continue;
        }
        // 3-byte UTF-8
        if (point < 0xD800 || point >= 0xE000 && point < 0x10000) {
            result.push(point >> 12 | 224);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
        }
        // 4-byte UTF-8
        if (point >= 0x10000 && point <= 0x10FFFF) {
            result.push(point >> 18 | 240);
            result.push(point >> 12 & 63 | 128);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
        }
        // Invalid character
        result.push(0xEF, 0xBF, 0xBD);
    }
    return new Uint8Array(result).buffer;
};

},{}],"gphIw":[function(require,module,exports) {
const Mode = require("b935cfd1cd03a1f6");
const Utils = require("ca4944585cc8d12d");
function KanjiData(data) {
    this.mode = Mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer) {
    let i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for(i = 0; i < this.data.length; i++){
        let value = Utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) // Subtract 0x8140 from Shift JIS value
        value -= 0x8140;
        else if (value >= 0xE040 && value <= 0xEBBF) // Subtract 0xC140 from Shift JIS value
        value -= 0xC140;
        else throw new Error("Invalid SJIS character: " + this.data[i] + "\n" + "Make sure your charset is UTF-8");
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
module.exports = KanjiData;

},{"b935cfd1cd03a1f6":"f1e9A","ca4944585cc8d12d":"iXLHI"}],"lDJz9":[function(require,module,exports) {
"use strict";
/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/ var dijkstra = {
    single_source_shortest_paths: function(graph, s, d) {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        var predecessors = {};
        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        var costs = {};
        costs[s] = 0;
        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while(!open.empty()){
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {};
            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for(v in adjacent_nodes)if (adjacent_nodes.hasOwnProperty(v)) {
                // Get the cost of the edge running from u to v.
                cost_of_e = adjacent_nodes[v];
                // Cost of s to u plus the cost of u to v across e--this is *a*
                // cost from s to v that may or may not be less than the current
                // known cost to v.
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                // If we haven't visited v yet OR if the current known cost from s to
                // v is greater than the new cost we just found (cost of s to u plus
                // cost of u to v across e), update v's cost in the cost list and
                // update v's predecessor in the predecessor list (it's now u).
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === "undefined";
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                    costs[v] = cost_of_s_to_u_plus_cost_of_e;
                    open.push(v, cost_of_s_to_u_plus_cost_of_e);
                    predecessors[v] = u;
                }
            }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
            var msg = [
                "Could not find a path from ",
                s,
                " to ",
                d,
                "."
            ].join("");
            throw new Error(msg);
        }
        return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while(u){
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
    },
    find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
   * A very naive priority queue implementation.
   */ PriorityQueue: {
        make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for(key in T)if (T.hasOwnProperty(key)) t[key] = T[key];
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
        },
        default_sorter: function(a, b) {
            return a.cost - b.cost;
        },
        /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */ push: function(value, cost) {
            var item = {
                value: value,
                cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
        },
        /**
     * Return the highest priority element in the queue.
     */ pop: function() {
            return this.queue.shift();
        },
        empty: function() {
            return this.queue.length === 0;
        }
    }
};
module.exports = dijkstra;

},{}],"2oGFV":[function(require,module,exports) {
const Utils = require("5b3f7c513802d6c7");
function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + "px";
    canvas.style.width = size + "px";
}
function getCanvasElement() {
    try {
        return document.createElement("canvas");
    } catch (e) {
        throw new Error("You need to specify a canvas element");
    }
}
exports.render = function render(qrData, canvas, options) {
    let opts = options;
    let canvasEl = canvas;
    if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!canvas) canvasEl = getCanvasElement();
    opts = Utils.getOptions(opts);
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext("2d");
    const image = ctx.createImageData(size, size);
    Utils.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    let opts = options;
    if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!opts) opts = {};
    const canvasEl = exports.render(qrData, canvas, opts);
    const type = opts.type || "image/png";
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
};

},{"5b3f7c513802d6c7":"6rMWz"}],"6rMWz":[function(require,module,exports) {
function hex2rgba(hex) {
    if (typeof hex === "number") hex = hex.toString();
    if (typeof hex !== "string") throw new Error("Color should be defined as hex string");
    let hexCode = hex.slice().replace("#", "").split("");
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) throw new Error("Invalid hex color: " + hex);
    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
        return [
            c,
            c
        ];
    }));
    // Add default alpha value
    if (hexCode.length === 6) hexCode.push("F", "F");
    const hexValue = parseInt(hexCode.join(""), 16);
    return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
    };
}
exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;
    return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: hex2rgba(options.color.dark || "#000000ff"),
            light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
    };
};
exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [
        opts.color.light,
        opts.color.dark
    ];
    for(let i = 0; i < symbolSize; i++)for(let j = 0; j < symbolSize; j++){
        let posDst = (i * symbolSize + j) * 4;
        let pxColor = opts.color.light;
        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
    }
};

},{}],"7Akrj":[function(require,module,exports) {
const Utils = require("c36bbcf663291acc");
function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
    let str = cmd + x;
    if (typeof y !== "undefined") str += " " + y;
    return str;
}
function qrToPath(data, size, margin) {
    let path = "";
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for(let i = 0; i < data.length; i++){
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd("h", lineLength);
                lineLength = 0;
            }
        } else moveBy++;
    }
    return path;
}
exports.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
    const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
    const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
    if (typeof cb === "function") cb(null, svgTag);
    return svgTag;
};

},{"c36bbcf663291acc":"6rMWz"}]},["eiXul"], null, "parcelRequire94c2")

//# sourceMappingURL=dist.5b6aaa6e.js.map
