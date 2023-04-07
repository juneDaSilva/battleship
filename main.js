/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/github.png */ "./src/images/github.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/youtube.svg */ "./src/images/youtube.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tiktok.svg */ "./src/images/tiktok.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #f8fafc;\n  --main-letter-color: #000;\n  --line-color: #0c4a6e;\n  --tile-hover-color: #25dbf7c7;\n  --tile-missed-color: #7dd3fc;\n  --tile-hit-color: #ff5454cb;\n  --friendly-ship-color: #515151b3;\n}\n\nhtml {\n  font-family: \"Orbitron\", sans-serif;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--main-letter-color);\n\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  height: 3rem;\n  margin-bottom: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.place-wrap {\n  border: 2px solid black;\n  border-radius: 20px;\n  flex: 1;\n  width: 30rem;\n  margin: 80px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh3 {\n  text-align: center;\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\n.place {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.place:hover {\n  border: 1px solid var(--friendly-ship-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n#placed {\n  background-color: var(--friendly-ship-color);\n  border: 1px solid var(--friendly-ship-color);\n}\n\n.rotate {\n  border: 1px solid black;\n  padding: 5px 20px;\n  background-color: #000;\n  color: #fff;\n\n  transition: 0.3s;\n}\n\n.rotate:hover {\n  transform: scale(1.05);\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.rotate:active {\n  transform: scale(1);\n  transition: 0.1s;\n}\n\nh2 {\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-wrap {\n  flex: 0.5;\n  margin-bottom: 20px;\n  width: clamp(300px, 40%, 600px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#winner {\n  border: 1px solid black;\n  padding: 20px 70px;\n  text-align: center;\n}\n\n.declared {\n  background-color: #000;\n  color: white;\n}\n\n.boards {\n  flex: 6;\n  width: 95%;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameboard {\n  padding: 10px;\n}\n\n.player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  margin: 20px;\n  margin-top: 10px;\n\n  height: 20em;\n  width: 20em;\n}\n\n.row {\n  height: 10%;\n\n  display: flex;\n}\n\n.tile {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.tile:hover {\n  background-color: var(--tile-hover-color);\n  border: 1px solid var(--tile-hover-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n.missed {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n}\n\n.missed:hover {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n\n  transition: 0.2s;\n}\n\n.hit {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.hit:hover {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.friendlyShip {\n  background-color: var(--friendly-ship-color);\n  border: 1px solid var(--friendly-ship-color);\n}\n\nfooter {\n  height: 3rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer-par {\n  letter-spacing: 2px;\n}\n\n.logos {\n  margin: 0px 5px;\n}\n\n.logos:hover {\n  transform: scale(1.2);\n  transition: 0.3s;\n}\n\n#githubLogo {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#youtubeLogo {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#tiktokLogo {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@media only screen and (max-width: 750px) {\n  .place-wrap {\n    width: 90%;\n  }\n\n  #winner {\n    padding: 20px 30px;\n  }\n\n  .boards {\n    flex-direction: column;\n  }\n\n  .board {\n    height: 15em;\n    width: 15em;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;EACrB,6BAA6B;EAC7B,4BAA4B;EAC5B,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;EACjC,+BAA+B;;EAE/B,SAAS;EACT,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;;EAEnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,YAAY;;EAEZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,OAAO;EACP,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,4CAA4C;EAC5C,eAAe;;EAEf,gBAAgB;AAClB;;AAEA;EACE,4CAA4C;EAC5C,4CAA4C;AAC9C;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,WAAW;;EAEX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,OAAO;;EAEP,aAAa;EACb,sBAAsB;;EAEtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,+BAA+B;;EAE/B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,UAAU;;EAEV,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;;EAEhB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;;EAEX,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,OAAO;EACP,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,yCAAyC;EACzC,eAAe;;EAEf,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;EAC1C,0CAA0C;;EAE1C,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;;EAEvC,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;;EAEvC,gBAAgB;AAClB;;AAEA;EACE,4CAA4C;EAC5C,4CAA4C;AAC9C;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gDAAmC;AACrC;;AAEA;EACE,gDAAoC;AACtC;;AAEA;EACE,gDAAmC;AACrC;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;AACF","sourcesContent":[":root {\n  --bg-color: #f8fafc;\n  --main-letter-color: #000;\n  --line-color: #0c4a6e;\n  --tile-hover-color: #25dbf7c7;\n  --tile-missed-color: #7dd3fc;\n  --tile-hit-color: #ff5454cb;\n  --friendly-ship-color: #515151b3;\n}\n\nhtml {\n  font-family: \"Orbitron\", sans-serif;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--main-letter-color);\n\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  height: 3rem;\n  margin-bottom: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.place-wrap {\n  border: 2px solid black;\n  border-radius: 20px;\n  flex: 1;\n  width: 30rem;\n  margin: 80px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh3 {\n  text-align: center;\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\n.place {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.place:hover {\n  border: 1px solid var(--friendly-ship-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n#placed {\n  background-color: var(--friendly-ship-color);\n  border: 1px solid var(--friendly-ship-color);\n}\n\n.rotate {\n  border: 1px solid black;\n  padding: 5px 20px;\n  background-color: #000;\n  color: #fff;\n\n  transition: 0.3s;\n}\n\n.rotate:hover {\n  transform: scale(1.05);\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.rotate:active {\n  transform: scale(1);\n  transition: 0.1s;\n}\n\nh2 {\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-wrap {\n  flex: 0.5;\n  margin-bottom: 20px;\n  width: clamp(300px, 40%, 600px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#winner {\n  border: 1px solid black;\n  padding: 20px 70px;\n  text-align: center;\n}\n\n.declared {\n  background-color: #000;\n  color: white;\n}\n\n.boards {\n  flex: 6;\n  width: 95%;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameboard {\n  padding: 10px;\n}\n\n.player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  margin: 20px;\n  margin-top: 10px;\n\n  height: 20em;\n  width: 20em;\n}\n\n.row {\n  height: 10%;\n\n  display: flex;\n}\n\n.tile {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.tile:hover {\n  background-color: var(--tile-hover-color);\n  border: 1px solid var(--tile-hover-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n.missed {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n}\n\n.missed:hover {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n\n  transition: 0.2s;\n}\n\n.hit {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.hit:hover {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.friendlyShip {\n  background-color: var(--friendly-ship-color);\n  border: 1px solid var(--friendly-ship-color);\n}\n\nfooter {\n  height: 3rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer-par {\n  letter-spacing: 2px;\n}\n\n.logos {\n  margin: 0px 5px;\n}\n\n.logos:hover {\n  transform: scale(1.2);\n  transition: 0.3s;\n}\n\n#githubLogo {\n  content: url(\"./images/github.png\");\n}\n\n#youtubeLogo {\n  content: url(\"./images/youtube.svg\");\n}\n\n#tiktokLogo {\n  content: url(\"./images/tiktok.svg\");\n}\n\n@media only screen and (max-width: 750px) {\n  .place-wrap {\n    width: 90%;\n  }\n\n  #winner {\n    padding: 20px 30px;\n  }\n\n  .boards {\n    flex-direction: column;\n  }\n\n  .board {\n    height: 15em;\n    width: 15em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apps/domstuff.js":
/*!******************************!*\
  !*** ./src/apps/domstuff.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoards": () => (/* binding */ createBoards),
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/apps/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/apps/player.js");
/* harmony import */ var _renderGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGame */ "./src/apps/renderGame.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _placeShips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeShips */ "./src/apps/placeShips.js");






// let player1 = Player("You");
let computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("Computer");

const renderPage = () => {
  computer.restart();

  createBoards();
};

const createBoards = () => {
  (0,_renderGame__WEBPACK_IMPORTED_MODULE_2__.renderMain)();
  (0,_player__WEBPACK_IMPORTED_MODULE_1__.createFleet)(computer.getBoard());
  const friendlyBoard = document.querySelector(".friendly.board");
  const enemyBoard = document.querySelector(".enemy.board");

  renderBoard(___WEBPACK_IMPORTED_MODULE_3__.player1, friendlyBoard);
  renderBoard(computer, enemyBoard);
};

const renderBoard = (player, board) => {
  let playerBoard = player.getBoard().board;
  board.innerHTML = "";

  for (let r = 9; r >= 0; r--) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let col = 0; col < 10; col++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");

      // Add this to match with tile objects
      tile.dataset.value = [col, r];

      if (player.getName() === "Computer") {
        tile.onclick = takeTurn;
      } else {
        tile.id = [col, r];
        let cell = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.findTile)(playerBoard, [col, r]);
        // shade in friendly ship positions
        if (cell.ship) tile.classList.add("friendlyShip");
      }
      row.append(tile);
    }
    board.append(row);
  }
  return board;
};

const takeTurn = (e) => {
  let values = [e.target.dataset.value[0], e.target.dataset.value[2]];
  if (!_player__WEBPACK_IMPORTED_MODULE_1__.botMoving) {
    let response = computer.takeHit(___WEBPACK_IMPORTED_MODULE_3__.player1.getName(), values);
    if (response !== "not legal") {
      updateTileColor(e.target, response);
      if (response === "game over") {
        declareWinner(___WEBPACK_IMPORTED_MODULE_3__.player1);
        e.stopImmediatePropagation();
        stopAndListen(___WEBPACK_IMPORTED_MODULE_3__.player1);
        return;
      }
      // Add end turn function
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.changeTurn)();
      setTimeout(() => {
        let move = (0,_player__WEBPACK_IMPORTED_MODULE_1__.moveAI)(computer, ___WEBPACK_IMPORTED_MODULE_3__.player1);
        updateTileColor(move.tile, move.response);
        if (move.response === "game over") {
          declareWinner(computer);
          e.stopImmediatePropagation();
          stopAndListen(computer);
          return;
        }
        (0,_player__WEBPACK_IMPORTED_MODULE_1__.changeTurn)();
      }, "000");
    }
  }
};

//display winner message
const declareWinner = (player) => {
  let winner = document.getElementById("winner");
  winner.classList.add("declared");
  player.getName() === "Computer"
    ? (winner.innerHTML = `${player.getName()}  wins this round!`)
    : (winner.innerHTML = `${player.getName()}  win this round!`);
};

// On game won, board restarts game onclick
const stopAndListen = (player) => {
  let gameDone = document.querySelector("main");
  gameDone.addEventListener(
    "click",
    () => {
      (0,_placeShips__WEBPACK_IMPORTED_MODULE_4__.renderPlacer)();
      return;
    },
    { once: true }
  );
};

// Update tile colors once clicked
const updateTileColor = (tile, response) => {
  if (response === "shot missed") tile.classList.add("missed");
  if (response === "hit taken!" || response === "game over") {
    tile.classList.remove("friendlyShip");
    tile.classList.add("hit");
  }
};


/***/ }),

/***/ "./src/apps/gameboard.js":
/*!*******************************!*\
  !*** ./src/apps/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Tile": () => (/* binding */ Tile),
/* harmony export */   "findTile": () => (/* binding */ findTile)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/apps/ship.js");
// import { renderPage } from "./domstuff";


class Tile {
  #hit = false;

  constructor(row, column) {
    this.coordinate = [row, column];
    this.free = true;
    this.ship = null;
  }

  isHit = () => {
    return this.#hit;
  };

  takeHit = () => {
    this.#hit = true;
  };
}

class Gameboard {
  constructor() {
    this.board = createBoard();
    this.shipCount = 0;
    this.maxFleetSize = 5;
  }
  placeShip = (size, [col, row], isHorizontal) => {
    if (this.shipCount == this.maxFleetSize) return;
    col = parseInt(col);
    row = parseInt(row);
    // create ship
    let newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(size);

    // Check if area occupied by other ship
    if (isOccupied(this.board, newShip.getLength(), [col, row], isHorizontal)) {
      console.log("Area occupied");
      return "area occupied";
    }

    // put start of ship on coordinate tile and use ships length
    // to also put ship on tiles following it
    let i = 0;
    if (isHorizontal) {
      while (i < newShip.getLength()) {
        let tile = findTile(this.board, [col + i, row]);
        tile.ship = newShip;
        i++;
      }
    } else {
      while (i < newShip.getLength()) {
        let tile = findTile(this.board, [col, row - i]);
        tile.ship = newShip;
        i++;
      }
    }
    this.shipCount++;
  };

  receiveAttack = (enemy, col, row) => {
    let tile = findTile(this.board, [col, row]);
    if (tile === undefined) {
      // console.log("Out of bounds");
      return "not legal";
    }
    if (tile.isHit()) {
      // console.log("Already hit");
      return "not legal";
    }
    if (!tile.ship) {
      tile.takeHit();
      console.log("Shot missed!");
      return "shot missed";
    } else {
      tile.takeHit();
      tile.ship.hit();
      if (tile.ship.isSunk()) {
        this.shipCount--;
        if (this.shipCount === 0) {
          return "game over";
        }
      }
      return `hit taken!`;
    }
  };
}

const createBoard = () => {
  let board = [];
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      board.push(new Tile(col, row));
    }
  }
  return board;
};

const findTile = (board, [col, row]) => {
  for (let tile of board) {
    if (tile.coordinate[0] == col && tile.coordinate[1] == row) {
      return tile;
    }
  }
};

const isOccupied = (board, length, [col, row], isHorizontal) => {
  let i = 0;
  if (isHorizontal) {
    while (i < length) {
      let tile = findTile(board, [col + i, row]);

      if (tile === undefined) return true; // check if it overflows out of board
      if (tile.ship) return true; // check if ship already there

      i++;
    }
  } else {
    // console.log("vertical");
    while (i < length) {
      let tile = findTile(board, [col, row - i]);
      if (tile === undefined) return true;
      if (tile.ship) return true;

      i++;
    }
  }
  return false;
};


/***/ }),

/***/ "./src/apps/placeShips.js":
/*!********************************!*\
  !*** ./src/apps/placeShips.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPlacer": () => (/* binding */ renderPlacer)
/* harmony export */ });
/* harmony import */ var _renderGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGame */ "./src/apps/renderGame.js");
/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domstuff */ "./src/apps/domstuff.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");




const renderPlacer = () => {
  ___WEBPACK_IMPORTED_MODULE_2__.player1.restart();
  const main = document.querySelector("main");
  main.innerHTML = "";

  const wrap = (0,_renderGame__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", ["place-wrap"]);
  const title = (0,_renderGame__WEBPACK_IMPORTED_MODULE_0__.buildElement)(
    "h3",
    ["place-title"],
    null,
    "Place youre ships to begin"
  );
  const board = (0,_renderGame__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", ["board"]);
  const rotate = (0,_renderGame__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", ["rotate"], null, "rotate ship");

  for (let r = 9; r >= 0; r--) {
    let row = (0,_renderGame__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", ["row"]);

    for (let col = 0; col < 10; col++) {
      let tile = (0,_renderGame__WEBPACK_IMPORTED_MODULE_0__.buildElement)("div", ["place"]);

      // Add this to match with tile objects
      tile.id = [col, r];

      row.append(tile);
    }
    board.append(row);
  }
  title.append(board, rotate);
  wrap.append(title);
  main.append(wrap);
  placeShips();
};

const toggleOrientation = (isHorizontal) => {
  isHorizontal = !isHorizontal;
  console.log(isHorizontal);
  return isHorizontal;
};

const placeShips = () => {
  let isHorizontal = true;

  let ship = [5, 4, 3, 3, 2];
  let number = 0;
  displayShip(ship[number], isHorizontal, ship, number);
};

const displayShip = (length, orientation, ship, number) => {
  if (number >= ship.length) {
    startGame();
  } else {
    const tiles = document.querySelectorAll(".place");
    const rotateShip = document.querySelector(".rotate");

    rotateShip.addEventListener("click", () => {
      orientation = toggleOrientation(orientation);
      displayShip(length, orientation, ship, number);
    });

    tiles.forEach((tile) => {
      tile.onmouseover = function (event) {
        // grab tile id's from tiles covering ship length
        let shipArray = getShipDisplay(event.target.id, length, orientation);

        colorHover(shipArray, "var(--friendly-ship-color)"); // color them all together
      };
      tile.onmouseout = function (event) {
        let shipArray = getShipDisplay(event.target.id, length, orientation);
        colorHover(shipArray, "#fff");
      };
      tile.onclick = function (event) {
        let coords = [event.target.id[0], event.target.id[2]];
        let response = ___WEBPACK_IMPORTED_MODULE_2__.player1.getBoard()
          .placeShip(length, coords, orientation);

        if (response !== "area occupied") {
          let shipArray = getShipDisplay(event.target.id, length, orientation);
          colorPlacedShip(shipArray);
          number++;
          displayShip(ship[number], orientation, ship, number);
        } else {
          console.log("cant place ship here");
        }
      };
    });
  }
};

const startGame = () => {
  const startButton = document.querySelector(".rotate");
  const tiles = document.querySelectorAll(".place");
  startButton.innerHTML = "START GAME";

  tiles.forEach((tile) => {
    tile.onmouseover = null;
    tile.onclick = null;
  });

  startButton.addEventListener("click", () => {
    (0,_domstuff__WEBPACK_IMPORTED_MODULE_1__.renderPage)();
  });
};

const colorPlacedShip = (ship) => {
  for (let coordinate of ship) {
    if (
      coordinate[0] >= 0 &&
      coordinate[0] <= 9 &&
      coordinate[1] >= 0 &&
      coordinate[1] <= 9
    ) {
      let tile = document.getElementById(coordinate);
      tile.id = "placed";
    }
  }
};

const getShipDisplay = (currentTile, length, isHorizontal) => {
  let array = [];
  let i = 0;
  if (isHorizontal) {
    while (i < length) {
      let coordinates = [
        parseInt(currentTile[0]) + i,
        parseInt(currentTile[2]),
      ];
      array.push(coordinates);
      i++;
    }
  } else if (!isHorizontal) {
    while (i < length) {
      let coordinates = [
        parseInt(currentTile[0]),
        parseInt(currentTile[2] - i),
      ];
      array.push(coordinates);
      i++;
    }
  }

  return array;
};

const colorHover = (ship, color) => {
  for (let coordinate of ship) {
    if (
      coordinate[0] != NaN &&
      coordinate[1] !== NaN &&
      coordinate[0] >= 0 &&
      coordinate[0] <= 9 &&
      coordinate[1] >= 0 &&
      coordinate[1] <= 9
    ) {
      let tile = document.getElementById(coordinate);
      if (tile !== null) tile.style.cssText = `background-color: ${color};`;
    }
  }
};


/***/ }),

/***/ "./src/apps/player.js":
/*!****************************!*\
  !*** ./src/apps/player.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "botMoving": () => (/* binding */ botMoving),
/* harmony export */   "changeTurn": () => (/* binding */ changeTurn),
/* harmony export */   "createFleet": () => (/* binding */ createFleet),
/* harmony export */   "moveAI": () => (/* binding */ moveAI)
/* harmony export */ });
/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domstuff */ "./src/apps/domstuff.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/apps/gameboard.js");


let botMoving = false;

const Player = (name) => {
  let board = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard();

  // Send hit function
  const sendHit = (enemy, [col, row]) => {
    return enemy.takeHit(name, [col, row]);
  };

  // Take hit function
  const takeHit = (enemy, [col, row]) => {
    let response = board.receiveAttack(enemy, col, row);
    return response;
  };

  const endGame = () => {
    (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.renderPage)();
  };

  const getName = () => {
    return name;
  };

  const getBoard = () => {
    return board;
  };

  const restart = () => {
    board = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
  };

  return { sendHit, takeHit, getName, endGame, restart, getBoard };
};

// Hardcoded Fleet for now
const createFleet = (board) => {
  let coordinates = [
    [0, 0],
    [9, 9],
    [0, 8],
    [1, 5],
    [5, 3],
  ];
  let orientations = [true, false, true, false, true];
  let sizes = [5, 4, 3, 2, 3];

  for (let i in coordinates) {
    board.placeShip(sizes[i], coordinates[i], orientations[i]);
  }
};

const moveAI = (player, enemy) => {
  // keep trying for coordinates until they come back legal
  let moveNotLegal = true;
  while (moveNotLegal) {
    let move = [getRandomInt(10), getRandomInt(10)];
    let response = player.sendHit(enemy, move);
    if (response !== "not legal") {
      moveNotLegal = false;
      // UPDATE FRIENDLY BOARD WITH COMPUTER'S MOVE
      let tile = document.getElementById(move);
      return { tile, response };
    }
  }
};

const changeTurn = () => {
  botMoving = !botMoving;
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};


/***/ }),

/***/ "./src/apps/renderGame.js":
/*!********************************!*\
  !*** ./src/apps/renderGame.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildElement": () => (/* binding */ buildElement),
/* harmony export */   "renderMain": () => (/* binding */ renderMain)
/* harmony export */ });
/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domstuff */ "./src/apps/domstuff.js");


const buildElement = (element_type, class_name, id_name, content) => {
  const element = document.createElement(element_type);
  if (class_name) {
    for (const myClass in class_name) {
      element.classList.add(class_name[myClass]);
    }
  }

  if (id_name) element.id = id_name;
  if (content) element.innerText = content;

  return element;
};

const renderMain = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const winWrap = buildElement("div", ["winner-wrap"]);
  const winner = buildElement("div", null, "winner", "God speed, Captain");

  const boards = buildElement("div", ["boards"]);

  const gameboard1 = buildElement("div", ["gameboard"]);
  const player1 = buildElement("div", ["player"], null, "YOUR BOARD");
  const friendlyBoard = buildElement("div", ["friendly", "board"]);
  gameboard1.append(player1, friendlyBoard);

  const gameboard2 = buildElement("div", ["gameboard"]);
  const player2 = buildElement("div", ["player"], null, "ENEMY BOARD");
  const enemyBoard = buildElement("div", ["enemy", "board"]);
  gameboard2.append(player2, enemyBoard);

  winWrap.append(winner);
  boards.append(gameboard1, gameboard2);
  main.append(winWrap, boards);
};


/***/ }),

/***/ "./src/apps/ship.js":
/*!**************************!*\
  !*** ./src/apps/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (length) => {
  let hits = 0;
  let sunk = false;
  const getLength = () => length;
  const getHits = () => hits;
  const isSunk = () => sunk;
  const hit = () => {
    hits++;
    console.log("Ship has been hit");
    if (hits == getLength()) {
      console.log("Ship sunk!!!");
      sunk = true;
    }
  };

  return { getLength, getHits, isSunk, hit };
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player1": () => (/* binding */ player1)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/github.png */ "./src/images/github.png");
/* harmony import */ var _apps_domstuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps/domstuff */ "./src/apps/domstuff.js");
/* harmony import */ var _apps_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps/player */ "./src/apps/player.js");
/* harmony import */ var _apps_placeShips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apps/placeShips */ "./src/apps/placeShips.js");





let player1 = (0,_apps_player__WEBPACK_IMPORTED_MODULE_3__.Player)("you");

(0,_apps_placeShips__WEBPACK_IMPORTED_MODULE_4__.renderPlacer)();


/***/ }),

/***/ "./src/images/github.png":
/*!*******************************!*\
  !*** ./src/images/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca3e44084ae3d29ad488.png";

/***/ }),

/***/ "./src/images/tiktok.svg":
/*!*******************************!*\
  !*** ./src/images/tiktok.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6394d7be6a30ce963a61.svg";

/***/ }),

/***/ "./src/images/youtube.svg":
/*!********************************!*\
  !*** ./src/images/youtube.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85c2f09d0ead35313e7b.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHBzL2RvbXN0dWZmLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHBzL3BsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHBzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcHMvcmVuZGVyR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9naXRodWIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMveW91dHViZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy90aWt0b2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjZjhmYWZjO1xcbiAgLS1tYWluLWxldHRlci1jb2xvcjogIzAwMDtcXG4gIC0tbGluZS1jb2xvcjogIzBjNGE2ZTtcXG4gIC0tdGlsZS1ob3Zlci1jb2xvcjogIzI1ZGJmN2M3O1xcbiAgLS10aWxlLW1pc3NlZC1jb2xvcjogIzdkZDNmYztcXG4gIC0tdGlsZS1oaXQtY29sb3I6ICNmZjU0NTRjYjtcXG4gIC0tZnJpZW5kbHktc2hpcC1jb2xvcjogIzUxNTE1MWIzO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWxldHRlci1jb2xvcik7XFxuXFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlLXdyYXAge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIG1hcmdpbjogODBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLnBsYWNlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDJweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5wbGFjZTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbiNwbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJpZW5kbHktc2hpcC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnJvdGF0ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndpbm5lci13cmFwIHtcXG4gIGZsZXg6IDAuNTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDQwJSwgNjAwcHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3dpbm5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlY2xhcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgZmxleDogNjtcXG4gIHdpZHRoOiA5NSU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICBoZWlnaHQ6IDIwZW07XFxuICB3aWR0aDogMjBlbTtcXG59XFxuXFxuLnJvdyB7XFxuICBoZWlnaHQ6IDEwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDJweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXItY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1ob3Zlci1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG59XFxuXFxuLm1pc3NlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5oaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmZyaWVuZGx5U2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZyaWVuZGx5LXNoaXAtY29sb3IpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1wYXIge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLmxvZ29zIHtcXG4gIG1hcmdpbjogMHB4IDVweDtcXG59XFxuXFxuLmxvZ29zOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbiNnaXRodWJMb2dvIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbiN5b3V0dWJlTG9nbyB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4jdGlrdG9rTG9nbyB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAucGxhY2Utd3JhcCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAjd2lubmVyIHtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgfVxcblxcbiAgLmJvYXJkcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYm9hcmQge1xcbiAgICBoZWlnaHQ6IDE1ZW07XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLCtCQUErQjs7RUFFL0IsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxZQUFZO0VBQ1osWUFBWTs7RUFFWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsZUFBZTs7RUFFZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsV0FBVzs7RUFFWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87O0VBRVAsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsK0JBQStCOztFQUUvQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87RUFDUCxVQUFVOztFQUVWLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLE9BQU87RUFDUCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHlDQUF5QztFQUN6QyxlQUFlOztFQUVmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsMENBQTBDOztFQUUxQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsdUNBQXVDOztFQUV2QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsdUNBQXVDOztFQUV2QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0RBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0RBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0RBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogI2Y4ZmFmYztcXG4gIC0tbWFpbi1sZXR0ZXItY29sb3I6ICMwMDA7XFxuICAtLWxpbmUtY29sb3I6ICMwYzRhNmU7XFxuICAtLXRpbGUtaG92ZXItY29sb3I6ICMyNWRiZjdjNztcXG4gIC0tdGlsZS1taXNzZWQtY29sb3I6ICM3ZGQzZmM7XFxuICAtLXRpbGUtaGl0LWNvbG9yOiAjZmY1NDU0Y2I7XFxuICAtLWZyaWVuZGx5LXNoaXAtY29sb3I6ICM1MTUxNTFiMztcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1sZXR0ZXItY29sb3IpO1xcblxcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGFjZS13cmFwIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMzByZW07XFxuICBtYXJnaW46IDgwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5wbGFjZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luOiAycHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ucGxhY2U6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZnJpZW5kbHktc2hpcC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4jcGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZyaWVuZGx5LXNoaXAtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZnJpZW5kbHktc2hpcC1jb2xvcik7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG5cXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yb3RhdGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGU6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53aW5uZXItd3JhcCB7XFxuICBmbGV4OiAwLjU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA0MCUsIDYwMHB4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN3aW5uZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZWNsYXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gIGZsZXg6IDY7XFxuICB3aWR0aDogOTUlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbiAgaGVpZ2h0OiAyMGVtO1xcbiAgd2lkdGg6IDIwZW07XFxufVxcblxcbi5yb3cge1xcbiAgaGVpZ2h0OiAxMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luOiAycHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4udGlsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhvdmVyLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtaG92ZXItY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxufVxcblxcbi5taXNzZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzZWQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1taXNzZWQtY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLWhpdC1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaGl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5mcmllbmRseVNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJpZW5kbHktc2hpcC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogM3JlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItcGFyIHtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5sb2dvcyB7XFxuICBtYXJnaW46IDBweCA1cHg7XFxufVxcblxcbi5sb2dvczpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4jZ2l0aHViTG9nbyB7XFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1hZ2VzL2dpdGh1Yi5wbmdcXFwiKTtcXG59XFxuXFxuI3lvdXR1YmVMb2dvIHtcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWFnZXMveW91dHViZS5zdmdcXFwiKTtcXG59XFxuXFxuI3Rpa3Rva0xvZ28ge1xcbiAgY29udGVudDogdXJsKFxcXCIuL2ltYWdlcy90aWt0b2suc3ZnXFxcIik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5wbGFjZS13cmFwIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gICN3aW5uZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICB9XFxuXFxuICAuYm9hcmRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5ib2FyZCB7XFxuICAgIGhlaWdodDogMTVlbTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZmluZFRpbGUgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciwgbW92ZUFJLCBib3RNb3ZpbmcsIGNoYW5nZVR1cm4sIGNyZWF0ZUZsZWV0IH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyByZW5kZXJNYWluIH0gZnJvbSBcIi4vcmVuZGVyR2FtZVwiO1xuaW1wb3J0IHsgcGxheWVyMSB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgcmVuZGVyUGxhY2VyIH0gZnJvbSBcIi4vcGxhY2VTaGlwc1wiO1xuXG4vLyBsZXQgcGxheWVyMSA9IFBsYXllcihcIllvdVwiKTtcbmxldCBjb21wdXRlciA9IFBsYXllcihcIkNvbXB1dGVyXCIpO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgY29tcHV0ZXIucmVzdGFydCgpO1xuXG4gIGNyZWF0ZUJvYXJkcygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJvYXJkcyA9ICgpID0+IHtcbiAgcmVuZGVyTWFpbigpO1xuICBjcmVhdGVGbGVldChjb21wdXRlci5nZXRCb2FyZCgpKTtcbiAgY29uc3QgZnJpZW5kbHlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJpZW5kbHkuYm9hcmRcIik7XG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZW15LmJvYXJkXCIpO1xuXG4gIHJlbmRlckJvYXJkKHBsYXllcjEsIGZyaWVuZGx5Qm9hcmQpO1xuICByZW5kZXJCb2FyZChjb21wdXRlciwgZW5lbXlCb2FyZCk7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZCA9IChwbGF5ZXIsIGJvYXJkKSA9PiB7XG4gIGxldCBwbGF5ZXJCb2FyZCA9IHBsYXllci5nZXRCb2FyZCgpLmJvYXJkO1xuICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGZvciAobGV0IHIgPSA5OyByID49IDA7IHItLSkge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJ0aWxlXCIpO1xuXG4gICAgICAvLyBBZGQgdGhpcyB0byBtYXRjaCB3aXRoIHRpbGUgb2JqZWN0c1xuICAgICAgdGlsZS5kYXRhc2V0LnZhbHVlID0gW2NvbCwgcl07XG5cbiAgICAgIGlmIChwbGF5ZXIuZ2V0TmFtZSgpID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICAgICAgdGlsZS5vbmNsaWNrID0gdGFrZVR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlLmlkID0gW2NvbCwgcl07XG4gICAgICAgIGxldCBjZWxsID0gZmluZFRpbGUocGxheWVyQm9hcmQsIFtjb2wsIHJdKTtcbiAgICAgICAgLy8gc2hhZGUgaW4gZnJpZW5kbHkgc2hpcCBwb3NpdGlvbnNcbiAgICAgICAgaWYgKGNlbGwuc2hpcCkgdGlsZS5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlTaGlwXCIpO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCh0aWxlKTtcbiAgICB9XG4gICAgYm9hcmQuYXBwZW5kKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGJvYXJkO1xufTtcblxuY29uc3QgdGFrZVR1cm4gPSAoZSkgPT4ge1xuICBsZXQgdmFsdWVzID0gW2UudGFyZ2V0LmRhdGFzZXQudmFsdWVbMF0sIGUudGFyZ2V0LmRhdGFzZXQudmFsdWVbMl1dO1xuICBpZiAoIWJvdE1vdmluZykge1xuICAgIGxldCByZXNwb25zZSA9IGNvbXB1dGVyLnRha2VIaXQocGxheWVyMS5nZXROYW1lKCksIHZhbHVlcyk7XG4gICAgaWYgKHJlc3BvbnNlICE9PSBcIm5vdCBsZWdhbFwiKSB7XG4gICAgICB1cGRhdGVUaWxlQ29sb3IoZS50YXJnZXQsIHJlc3BvbnNlKTtcbiAgICAgIGlmIChyZXNwb25zZSA9PT0gXCJnYW1lIG92ZXJcIikge1xuICAgICAgICBkZWNsYXJlV2lubmVyKHBsYXllcjEpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBzdG9wQW5kTGlzdGVuKHBsYXllcjEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBBZGQgZW5kIHR1cm4gZnVuY3Rpb25cbiAgICAgIGNoYW5nZVR1cm4oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZSA9IG1vdmVBSShjb21wdXRlciwgcGxheWVyMSk7XG4gICAgICAgIHVwZGF0ZVRpbGVDb2xvcihtb3ZlLnRpbGUsIG1vdmUucmVzcG9uc2UpO1xuICAgICAgICBpZiAobW92ZS5yZXNwb25zZSA9PT0gXCJnYW1lIG92ZXJcIikge1xuICAgICAgICAgIGRlY2xhcmVXaW5uZXIoY29tcHV0ZXIpO1xuICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgc3RvcEFuZExpc3Rlbihjb21wdXRlcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZVR1cm4oKTtcbiAgICAgIH0sIFwiMDAwXCIpO1xuICAgIH1cbiAgfVxufTtcblxuLy9kaXNwbGF5IHdpbm5lciBtZXNzYWdlXG5jb25zdCBkZWNsYXJlV2lubmVyID0gKHBsYXllcikgPT4ge1xuICBsZXQgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5uZXJcIik7XG4gIHdpbm5lci5jbGFzc0xpc3QuYWRkKFwiZGVjbGFyZWRcIik7XG4gIHBsYXllci5nZXROYW1lKCkgPT09IFwiQ29tcHV0ZXJcIlxuICAgID8gKHdpbm5lci5pbm5lckhUTUwgPSBgJHtwbGF5ZXIuZ2V0TmFtZSgpfSAgd2lucyB0aGlzIHJvdW5kIWApXG4gICAgOiAod2lubmVyLmlubmVySFRNTCA9IGAke3BsYXllci5nZXROYW1lKCl9ICB3aW4gdGhpcyByb3VuZCFgKTtcbn07XG5cbi8vIE9uIGdhbWUgd29uLCBib2FyZCByZXN0YXJ0cyBnYW1lIG9uY2xpY2tcbmNvbnN0IHN0b3BBbmRMaXN0ZW4gPSAocGxheWVyKSA9PiB7XG4gIGxldCBnYW1lRG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBnYW1lRG9uZS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICAoKSA9PiB7XG4gICAgICByZW5kZXJQbGFjZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gICk7XG59O1xuXG4vLyBVcGRhdGUgdGlsZSBjb2xvcnMgb25jZSBjbGlja2VkXG5jb25zdCB1cGRhdGVUaWxlQ29sb3IgPSAodGlsZSwgcmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlc3BvbnNlID09PSBcInNob3QgbWlzc2VkXCIpIHRpbGUuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgaWYgKHJlc3BvbnNlID09PSBcImhpdCB0YWtlbiFcIiB8fCByZXNwb25zZSA9PT0gXCJnYW1lIG92ZXJcIikge1xuICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImZyaWVuZGx5U2hpcFwiKTtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gIH1cbn07XG4iLCIvLyBpbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vZG9tc3R1ZmZcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlIHtcbiAgI2hpdCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHJvdywgY29sdW1uKSB7XG4gICAgdGhpcy5jb29yZGluYXRlID0gW3JvdywgY29sdW1uXTtcbiAgICB0aGlzLmZyZWUgPSB0cnVlO1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gIH1cblxuICBpc0hpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy4jaGl0O1xuICB9O1xuXG4gIHRha2VIaXQgPSAoKSA9PiB7XG4gICAgdGhpcy4jaGl0ID0gdHJ1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMuc2hpcENvdW50ID0gMDtcbiAgICB0aGlzLm1heEZsZWV0U2l6ZSA9IDU7XG4gIH1cbiAgcGxhY2VTaGlwID0gKHNpemUsIFtjb2wsIHJvd10sIGlzSG9yaXpvbnRhbCkgPT4ge1xuICAgIGlmICh0aGlzLnNoaXBDb3VudCA9PSB0aGlzLm1heEZsZWV0U2l6ZSkgcmV0dXJuO1xuICAgIGNvbCA9IHBhcnNlSW50KGNvbCk7XG4gICAgcm93ID0gcGFyc2VJbnQocm93KTtcbiAgICAvLyBjcmVhdGUgc2hpcFxuICAgIGxldCBuZXdTaGlwID0gU2hpcChzaXplKTtcblxuICAgIC8vIENoZWNrIGlmIGFyZWEgb2NjdXBpZWQgYnkgb3RoZXIgc2hpcFxuICAgIGlmIChpc09jY3VwaWVkKHRoaXMuYm9hcmQsIG5ld1NoaXAuZ2V0TGVuZ3RoKCksIFtjb2wsIHJvd10sIGlzSG9yaXpvbnRhbCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXJlYSBvY2N1cGllZFwiKTtcbiAgICAgIHJldHVybiBcImFyZWEgb2NjdXBpZWRcIjtcbiAgICB9XG5cbiAgICAvLyBwdXQgc3RhcnQgb2Ygc2hpcCBvbiBjb29yZGluYXRlIHRpbGUgYW5kIHVzZSBzaGlwcyBsZW5ndGhcbiAgICAvLyB0byBhbHNvIHB1dCBzaGlwIG9uIHRpbGVzIGZvbGxvd2luZyBpdFxuICAgIGxldCBpID0gMDtcbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICB3aGlsZSAoaSA8IG5ld1NoaXAuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgICAgbGV0IHRpbGUgPSBmaW5kVGlsZSh0aGlzLmJvYXJkLCBbY29sICsgaSwgcm93XSk7XG4gICAgICAgIHRpbGUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKGkgPCBuZXdTaGlwLmdldExlbmd0aCgpKSB7XG4gICAgICAgIGxldCB0aWxlID0gZmluZFRpbGUodGhpcy5ib2FyZCwgW2NvbCwgcm93IC0gaV0pO1xuICAgICAgICB0aWxlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2hpcENvdW50Kys7XG4gIH07XG5cbiAgcmVjZWl2ZUF0dGFjayA9IChlbmVteSwgY29sLCByb3cpID0+IHtcbiAgICBsZXQgdGlsZSA9IGZpbmRUaWxlKHRoaXMuYm9hcmQsIFtjb2wsIHJvd10pO1xuICAgIGlmICh0aWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiT3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgIHJldHVybiBcIm5vdCBsZWdhbFwiO1xuICAgIH1cbiAgICBpZiAodGlsZS5pc0hpdCgpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkFscmVhZHkgaGl0XCIpO1xuICAgICAgcmV0dXJuIFwibm90IGxlZ2FsXCI7XG4gICAgfVxuICAgIGlmICghdGlsZS5zaGlwKSB7XG4gICAgICB0aWxlLnRha2VIaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2hvdCBtaXNzZWQhXCIpO1xuICAgICAgcmV0dXJuIFwic2hvdCBtaXNzZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsZS50YWtlSGl0KCk7XG4gICAgICB0aWxlLnNoaXAuaGl0KCk7XG4gICAgICBpZiAodGlsZS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHRoaXMuc2hpcENvdW50LS07XG4gICAgICAgIGlmICh0aGlzLnNoaXBDb3VudCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBcImdhbWUgb3ZlclwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYGhpdCB0YWtlbiFgO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IFtdO1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGJvYXJkLnB1c2gobmV3IFRpbGUoY29sLCByb3cpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvYXJkO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRUaWxlID0gKGJvYXJkLCBbY29sLCByb3ddKSA9PiB7XG4gIGZvciAobGV0IHRpbGUgb2YgYm9hcmQpIHtcbiAgICBpZiAodGlsZS5jb29yZGluYXRlWzBdID09IGNvbCAmJiB0aWxlLmNvb3JkaW5hdGVbMV0gPT0gcm93KSB7XG4gICAgICByZXR1cm4gdGlsZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGlzT2NjdXBpZWQgPSAoYm9hcmQsIGxlbmd0aCwgW2NvbCwgcm93XSwgaXNIb3Jpem9udGFsKSA9PiB7XG4gIGxldCBpID0gMDtcbiAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICBsZXQgdGlsZSA9IGZpbmRUaWxlKGJvYXJkLCBbY29sICsgaSwgcm93XSk7XG5cbiAgICAgIGlmICh0aWxlID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlOyAvLyBjaGVjayBpZiBpdCBvdmVyZmxvd3Mgb3V0IG9mIGJvYXJkXG4gICAgICBpZiAodGlsZS5zaGlwKSByZXR1cm4gdHJ1ZTsgLy8gY2hlY2sgaWYgc2hpcCBhbHJlYWR5IHRoZXJlXG5cbiAgICAgIGkrKztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ2ZXJ0aWNhbFwiKTtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgbGV0IHRpbGUgPSBmaW5kVGlsZShib2FyZCwgW2NvbCwgcm93IC0gaV0pO1xuICAgICAgaWYgKHRpbGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAodGlsZS5zaGlwKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRFbGVtZW50IH0gZnJvbSBcIi4vcmVuZGVyR2FtZVwiO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL2RvbXN0dWZmXCI7XG5pbXBvcnQgeyBwbGF5ZXIxIH0gZnJvbSBcIi4uXCI7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQbGFjZXIgPSAoKSA9PiB7XG4gIHBsYXllcjEucmVzdGFydCgpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCB3cmFwID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcInBsYWNlLXdyYXBcIl0pO1xuICBjb25zdCB0aXRsZSA9IGJ1aWxkRWxlbWVudChcbiAgICBcImgzXCIsXG4gICAgW1wicGxhY2UtdGl0bGVcIl0sXG4gICAgbnVsbCxcbiAgICBcIlBsYWNlIHlvdXJlIHNoaXBzIHRvIGJlZ2luXCJcbiAgKTtcbiAgY29uc3QgYm9hcmQgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmRcIl0pO1xuICBjb25zdCByb3RhdGUgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgW1wicm90YXRlXCJdLCBudWxsLCBcInJvdGF0ZSBzaGlwXCIpO1xuXG4gIGZvciAobGV0IHIgPSA5OyByID49IDA7IHItLSkge1xuICAgIGxldCByb3cgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgW1wicm93XCJdKTtcblxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgbGV0IHRpbGUgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgW1wicGxhY2VcIl0pO1xuXG4gICAgICAvLyBBZGQgdGhpcyB0byBtYXRjaCB3aXRoIHRpbGUgb2JqZWN0c1xuICAgICAgdGlsZS5pZCA9IFtjb2wsIHJdO1xuXG4gICAgICByb3cuYXBwZW5kKHRpbGUpO1xuICAgIH1cbiAgICBib2FyZC5hcHBlbmQocm93KTtcbiAgfVxuICB0aXRsZS5hcHBlbmQoYm9hcmQsIHJvdGF0ZSk7XG4gIHdyYXAuYXBwZW5kKHRpdGxlKTtcbiAgbWFpbi5hcHBlbmQod3JhcCk7XG4gIHBsYWNlU2hpcHMoKTtcbn07XG5cbmNvbnN0IHRvZ2dsZU9yaWVudGF0aW9uID0gKGlzSG9yaXpvbnRhbCkgPT4ge1xuICBpc0hvcml6b250YWwgPSAhaXNIb3Jpem9udGFsO1xuICBjb25zb2xlLmxvZyhpc0hvcml6b250YWwpO1xuICByZXR1cm4gaXNIb3Jpem9udGFsO1xufTtcblxuY29uc3QgcGxhY2VTaGlwcyA9ICgpID0+IHtcbiAgbGV0IGlzSG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgbGV0IHNoaXAgPSBbNSwgNCwgMywgMywgMl07XG4gIGxldCBudW1iZXIgPSAwO1xuICBkaXNwbGF5U2hpcChzaGlwW251bWJlcl0sIGlzSG9yaXpvbnRhbCwgc2hpcCwgbnVtYmVyKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlTaGlwID0gKGxlbmd0aCwgb3JpZW50YXRpb24sIHNoaXAsIG51bWJlcikgPT4ge1xuICBpZiAobnVtYmVyID49IHNoaXAubGVuZ3RoKSB7XG4gICAgc3RhcnRHYW1lKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYWNlXCIpO1xuICAgIGNvbnN0IHJvdGF0ZVNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcblxuICAgIHJvdGF0ZVNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9yaWVudGF0aW9uID0gdG9nZ2xlT3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuICAgICAgZGlzcGxheVNoaXAobGVuZ3RoLCBvcmllbnRhdGlvbiwgc2hpcCwgbnVtYmVyKTtcbiAgICB9KTtcblxuICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgIHRpbGUub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gZ3JhYiB0aWxlIGlkJ3MgZnJvbSB0aWxlcyBjb3ZlcmluZyBzaGlwIGxlbmd0aFxuICAgICAgICBsZXQgc2hpcEFycmF5ID0gZ2V0U2hpcERpc3BsYXkoZXZlbnQudGFyZ2V0LmlkLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcblxuICAgICAgICBjb2xvckhvdmVyKHNoaXBBcnJheSwgXCJ2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKVwiKTsgLy8gY29sb3IgdGhlbSBhbGwgdG9nZXRoZXJcbiAgICAgIH07XG4gICAgICB0aWxlLm9ubW91c2VvdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IHNoaXBBcnJheSA9IGdldFNoaXBEaXNwbGF5KGV2ZW50LnRhcmdldC5pZCwgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgIGNvbG9ySG92ZXIoc2hpcEFycmF5LCBcIiNmZmZcIik7XG4gICAgICB9O1xuICAgICAgdGlsZS5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBjb29yZHMgPSBbZXZlbnQudGFyZ2V0LmlkWzBdLCBldmVudC50YXJnZXQuaWRbMl1dO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBwbGF5ZXIxXG4gICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAucGxhY2VTaGlwKGxlbmd0aCwgY29vcmRzLCBvcmllbnRhdGlvbik7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlICE9PSBcImFyZWEgb2NjdXBpZWRcIikge1xuICAgICAgICAgIGxldCBzaGlwQXJyYXkgPSBnZXRTaGlwRGlzcGxheShldmVudC50YXJnZXQuaWQsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgIGNvbG9yUGxhY2VkU2hpcChzaGlwQXJyYXkpO1xuICAgICAgICAgIG51bWJlcisrO1xuICAgICAgICAgIGRpc3BsYXlTaGlwKHNoaXBbbnVtYmVyXSwgb3JpZW50YXRpb24sIHNoaXAsIG51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjYW50IHBsYWNlIHNoaXAgaGVyZVwiKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlXCIpO1xuICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxhY2VcIik7XG4gIHN0YXJ0QnV0dG9uLmlubmVySFRNTCA9IFwiU1RBUlQgR0FNRVwiO1xuXG4gIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLm9ubW91c2VvdmVyID0gbnVsbDtcbiAgICB0aWxlLm9uY2xpY2sgPSBudWxsO1xuICB9KTtcblxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbmRlclBhZ2UoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjb2xvclBsYWNlZFNoaXAgPSAoc2hpcCkgPT4ge1xuICBmb3IgKGxldCBjb29yZGluYXRlIG9mIHNoaXApIHtcbiAgICBpZiAoXG4gICAgICBjb29yZGluYXRlWzBdID49IDAgJiZcbiAgICAgIGNvb3JkaW5hdGVbMF0gPD0gOSAmJlxuICAgICAgY29vcmRpbmF0ZVsxXSA+PSAwICYmXG4gICAgICBjb29yZGluYXRlWzFdIDw9IDlcbiAgICApIHtcbiAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmRpbmF0ZSk7XG4gICAgICB0aWxlLmlkID0gXCJwbGFjZWRcIjtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGdldFNoaXBEaXNwbGF5ID0gKGN1cnJlbnRUaWxlLCBsZW5ndGgsIGlzSG9yaXpvbnRhbCkgPT4ge1xuICBsZXQgYXJyYXkgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIGxldCBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgcGFyc2VJbnQoY3VycmVudFRpbGVbMF0pICsgaSxcbiAgICAgICAgcGFyc2VJbnQoY3VycmVudFRpbGVbMl0pLFxuICAgICAgXTtcbiAgICAgIGFycmF5LnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfSBlbHNlIGlmICghaXNIb3Jpem9udGFsKSB7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIGxldCBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgcGFyc2VJbnQoY3VycmVudFRpbGVbMF0pLFxuICAgICAgICBwYXJzZUludChjdXJyZW50VGlsZVsyXSAtIGkpLFxuICAgICAgXTtcbiAgICAgIGFycmF5LnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn07XG5cbmNvbnN0IGNvbG9ySG92ZXIgPSAoc2hpcCwgY29sb3IpID0+IHtcbiAgZm9yIChsZXQgY29vcmRpbmF0ZSBvZiBzaGlwKSB7XG4gICAgaWYgKFxuICAgICAgY29vcmRpbmF0ZVswXSAhPSBOYU4gJiZcbiAgICAgIGNvb3JkaW5hdGVbMV0gIT09IE5hTiAmJlxuICAgICAgY29vcmRpbmF0ZVswXSA+PSAwICYmXG4gICAgICBjb29yZGluYXRlWzBdIDw9IDkgJiZcbiAgICAgIGNvb3JkaW5hdGVbMV0gPj0gMCAmJlxuICAgICAgY29vcmRpbmF0ZVsxXSA8PSA5XG4gICAgKSB7XG4gICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkaW5hdGUpO1xuICAgICAgaWYgKHRpbGUgIT09IG51bGwpIHRpbGUuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtgO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IHJlbmRlclBhZ2UgfSBmcm9tIFwiLi9kb21zdHVmZlwiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5leHBvcnQgbGV0IGJvdE1vdmluZyA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgbGV0IGJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIC8vIFNlbmQgaGl0IGZ1bmN0aW9uXG4gIGNvbnN0IHNlbmRIaXQgPSAoZW5lbXksIFtjb2wsIHJvd10pID0+IHtcbiAgICByZXR1cm4gZW5lbXkudGFrZUhpdChuYW1lLCBbY29sLCByb3ddKTtcbiAgfTtcblxuICAvLyBUYWtlIGhpdCBmdW5jdGlvblxuICBjb25zdCB0YWtlSGl0ID0gKGVuZW15LCBbY29sLCByb3ddKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gYm9hcmQucmVjZWl2ZUF0dGFjayhlbmVteSwgY29sLCByb3cpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfTtcblxuICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICAgIHJlbmRlclBhZ2UoKTtcbiAgfTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIGJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9O1xuXG4gIHJldHVybiB7IHNlbmRIaXQsIHRha2VIaXQsIGdldE5hbWUsIGVuZEdhbWUsIHJlc3RhcnQsIGdldEJvYXJkIH07XG59O1xuXG4vLyBIYXJkY29kZWQgRmxlZXQgZm9yIG5vd1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUZsZWV0ID0gKGJvYXJkKSA9PiB7XG4gIGxldCBjb29yZGluYXRlcyA9IFtcbiAgICBbMCwgMF0sXG4gICAgWzksIDldLFxuICAgIFswLCA4XSxcbiAgICBbMSwgNV0sXG4gICAgWzUsIDNdLFxuICBdO1xuICBsZXQgb3JpZW50YXRpb25zID0gW3RydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZV07XG4gIGxldCBzaXplcyA9IFs1LCA0LCAzLCAyLCAzXTtcblxuICBmb3IgKGxldCBpIGluIGNvb3JkaW5hdGVzKSB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNpemVzW2ldLCBjb29yZGluYXRlc1tpXSwgb3JpZW50YXRpb25zW2ldKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1vdmVBSSA9IChwbGF5ZXIsIGVuZW15KSA9PiB7XG4gIC8vIGtlZXAgdHJ5aW5nIGZvciBjb29yZGluYXRlcyB1bnRpbCB0aGV5IGNvbWUgYmFjayBsZWdhbFxuICBsZXQgbW92ZU5vdExlZ2FsID0gdHJ1ZTtcbiAgd2hpbGUgKG1vdmVOb3RMZWdhbCkge1xuICAgIGxldCBtb3ZlID0gW2dldFJhbmRvbUludCgxMCksIGdldFJhbmRvbUludCgxMCldO1xuICAgIGxldCByZXNwb25zZSA9IHBsYXllci5zZW5kSGl0KGVuZW15LCBtb3ZlKTtcbiAgICBpZiAocmVzcG9uc2UgIT09IFwibm90IGxlZ2FsXCIpIHtcbiAgICAgIG1vdmVOb3RMZWdhbCA9IGZhbHNlO1xuICAgICAgLy8gVVBEQVRFIEZSSUVORExZIEJPQVJEIFdJVEggQ09NUFVURVInUyBNT1ZFXG4gICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vdmUpO1xuICAgICAgcmV0dXJuIHsgdGlsZSwgcmVzcG9uc2UgfTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xuICBib3RNb3ZpbmcgPSAhYm90TW92aW5nO1xufTtcblxuY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZHMgfSBmcm9tIFwiLi9kb21zdHVmZlwiO1xuXG5leHBvcnQgY29uc3QgYnVpbGRFbGVtZW50ID0gKGVsZW1lbnRfdHlwZSwgY2xhc3NfbmFtZSwgaWRfbmFtZSwgY29udGVudCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50X3R5cGUpO1xuICBpZiAoY2xhc3NfbmFtZSkge1xuICAgIGZvciAoY29uc3QgbXlDbGFzcyBpbiBjbGFzc19uYW1lKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NfbmFtZVtteUNsYXNzXSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlkX25hbWUpIGVsZW1lbnQuaWQgPSBpZF9uYW1lO1xuICBpZiAoY29udGVudCkgZWxlbWVudC5pbm5lclRleHQgPSBjb250ZW50O1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlck1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHdpbldyYXAgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgW1wid2lubmVyLXdyYXBcIl0pO1xuICBjb25zdCB3aW5uZXIgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXCJ3aW5uZXJcIiwgXCJHb2Qgc3BlZWQsIENhcHRhaW5cIik7XG5cbiAgY29uc3QgYm9hcmRzID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcImJvYXJkc1wiXSk7XG5cbiAgY29uc3QgZ2FtZWJvYXJkMSA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBbXCJnYW1lYm9hcmRcIl0pO1xuICBjb25zdCBwbGF5ZXIxID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcInBsYXllclwiXSwgbnVsbCwgXCJZT1VSIEJPQVJEXCIpO1xuICBjb25zdCBmcmllbmRseUJvYXJkID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcImZyaWVuZGx5XCIsIFwiYm9hcmRcIl0pO1xuICBnYW1lYm9hcmQxLmFwcGVuZChwbGF5ZXIxLCBmcmllbmRseUJvYXJkKTtcblxuICBjb25zdCBnYW1lYm9hcmQyID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcImdhbWVib2FyZFwiXSk7XG4gIGNvbnN0IHBsYXllcjIgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgW1wicGxheWVyXCJdLCBudWxsLCBcIkVORU1ZIEJPQVJEXCIpO1xuICBjb25zdCBlbmVteUJvYXJkID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcImVuZW15XCIsIFwiYm9hcmRcIl0pO1xuICBnYW1lYm9hcmQyLmFwcGVuZChwbGF5ZXIyLCBlbmVteUJvYXJkKTtcblxuICB3aW5XcmFwLmFwcGVuZCh3aW5uZXIpO1xuICBib2FyZHMuYXBwZW5kKGdhbWVib2FyZDEsIGdhbWVib2FyZDIpO1xuICBtYWluLmFwcGVuZCh3aW5XcmFwLCBib2FyZHMpO1xufTtcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgaGl0cyA9IDA7XG4gIGxldCBzdW5rID0gZmFsc2U7XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHN1bms7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzKys7XG4gICAgY29uc29sZS5sb2coXCJTaGlwIGhhcyBiZWVuIGhpdFwiKTtcbiAgICBpZiAoaGl0cyA9PSBnZXRMZW5ndGgoKSkge1xuICAgICAgY29uc29sZS5sb2coXCJTaGlwIHN1bmshISFcIik7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0TGVuZ3RoLCBnZXRIaXRzLCBpc1N1bmssIGhpdCB9O1xufTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSwgY3JlYXRlQm9hcmRzIH0gZnJvbSBcIi4vYXBwcy9kb21zdHVmZlwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vYXBwcy9wbGF5ZXJcIjtcbmltcG9ydCB7IHJlbmRlclBsYWNlciB9IGZyb20gXCIuL2FwcHMvcGxhY2VTaGlwc1wiO1xuZXhwb3J0IGxldCBwbGF5ZXIxID0gUGxheWVyKFwieW91XCIpO1xuXG5yZW5kZXJQbGFjZXIoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=