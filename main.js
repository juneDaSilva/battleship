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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #f8fafc;\n  --main-letter-color: #000;\n  --line-color: #0c4a6e;\n  --tile-hover-color: #25dbf7c7;\n  --tile-missed-color: #7dd3fc;\n  --tile-hit-color: #ff5454cb;\n  --friendly-ship-color: #515151b3;\n}\n\nhtml {\n  font-family: \"Orbitron\", sans-serif;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--main-letter-color);\n\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  height: 3rem;\n  margin-bottom: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.place-wrap {\n  border: 2px solid black;\n  border-radius: 20px;\n  flex: 1;\n  width: 30rem;\n  margin: 80px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh3 {\n  text-align: center;\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\n.place {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.place:hover {\n  border: 1px solid var(--friendly-ship-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n#placed {\n  background-color: var(--friendly-ship-color);\n  border: 1px solid var(--friendly-ship-color);\n}\n\n.rotate {\n  border: 1px solid black;\n  padding: 5px 20px;\n  background-color: #000;\n  color: #fff;\n\n  transition: 0.3s;\n}\n\n.rotate:hover {\n  transform: scale(1.05);\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.rotate:active {\n  transform: scale(1);\n  transition: 0.1s;\n}\n\nh2 {\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-wrap {\n  flex: 0.5;\n  margin-bottom: 20px;\n  width: clamp(300px, 40%, 600px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#winner {\n  border: 1px solid black;\n  padding: 20px 70px;\n  text-align: center;\n}\n\n.declared {\n  background-color: #000;\n  color: white;\n}\n\n.boards {\n  flex: 6;\n  width: 95%;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameboard {\n  padding: 10px;\n}\n\n.player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  margin: 20px;\n  margin-top: 10px;\n\n  height: 20em;\n  width: 20em;\n}\n\n.row {\n  height: 10%;\n\n  display: flex;\n}\n\n.tile {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.tile:hover {\n  background-color: var(--tile-hover-color);\n  border: 1px solid var(--tile-hover-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n.missed {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n}\n\n.missed:hover {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n\n  transition: 0.2s;\n}\n\n.hit {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.hit:hover {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.friendlyShip {\n  background-color: var(--friendly-ship-color);\n  border: 1px solid var(--friendly-ship-color);\n}\n\nfooter {\n  height: 3rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 750px) {\n  .place-wrap {\n    width: 90%;\n  }\n\n  #winner {\n    padding: 20px 30px;\n  }\n\n  .boards {\n    flex-direction: column;\n  }\n\n  .board {\n    height: 15em;\n    width: 15em;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;EACrB,6BAA6B;EAC7B,4BAA4B;EAC5B,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;EACjC,+BAA+B;;EAE/B,SAAS;EACT,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;;EAEnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,YAAY;;EAEZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,OAAO;EACP,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,4CAA4C;EAC5C,eAAe;;EAEf,gBAAgB;AAClB;;AAEA;EACE,4CAA4C;EAC5C,4CAA4C;AAC9C;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,WAAW;;EAEX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,OAAO;;EAEP,aAAa;EACb,sBAAsB;;EAEtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,+BAA+B;;EAE/B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,UAAU;;EAEV,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;;EAEhB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;;EAEX,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,OAAO;EACP,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,yCAAyC;EACzC,eAAe;;EAEf,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;EAC1C,0CAA0C;;EAE1C,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;;EAEvC,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;;EAEvC,gBAAgB;AAClB;;AAEA;EACE,4CAA4C;EAC5C,4CAA4C;AAC9C;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;AACF","sourcesContent":[":root {\n  --bg-color: #f8fafc;\n  --main-letter-color: #000;\n  --line-color: #0c4a6e;\n  --tile-hover-color: #25dbf7c7;\n  --tile-missed-color: #7dd3fc;\n  --tile-hit-color: #ff5454cb;\n  --friendly-ship-color: #515151b3;\n}\n\nhtml {\n  font-family: \"Orbitron\", sans-serif;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--main-letter-color);\n\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  height: 3rem;\n  margin-bottom: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.place-wrap {\n  border: 2px solid black;\n  border-radius: 20px;\n  flex: 1;\n  width: 30rem;\n  margin: 80px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh3 {\n  text-align: center;\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\n.place {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.place:hover {\n  border: 1px solid var(--friendly-ship-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n#placed {\n  background-color: var(--friendly-ship-color);\n  border: 1px solid var(--friendly-ship-color);\n}\n\n.rotate {\n  border: 1px solid black;\n  padding: 5px 20px;\n  background-color: #000;\n  color: #fff;\n\n  transition: 0.3s;\n}\n\n.rotate:hover {\n  transform: scale(1.05);\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.rotate:active {\n  transform: scale(1);\n  transition: 0.1s;\n}\n\nh2 {\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-wrap {\n  flex: 0.5;\n  margin-bottom: 20px;\n  width: clamp(300px, 40%, 600px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#winner {\n  border: 1px solid black;\n  padding: 20px 70px;\n  text-align: center;\n}\n\n.declared {\n  background-color: #000;\n  color: white;\n}\n\n.boards {\n  flex: 6;\n  width: 95%;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameboard {\n  padding: 10px;\n}\n\n.player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  margin: 20px;\n  margin-top: 10px;\n\n  height: 20em;\n  width: 20em;\n}\n\n.row {\n  height: 10%;\n\n  display: flex;\n}\n\n.tile {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.tile:hover {\n  background-color: var(--tile-hover-color);\n  border: 1px solid var(--tile-hover-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n.missed {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n}\n\n.missed:hover {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n\n  transition: 0.2s;\n}\n\n.hit {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.hit:hover {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.friendlyShip {\n  background-color: var(--friendly-ship-color);\n  border: 1px solid var(--friendly-ship-color);\n}\n\nfooter {\n  height: 3rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 750px) {\n  .place-wrap {\n    width: 90%;\n  }\n\n  #winner {\n    padding: 20px 30px;\n  }\n\n  .boards {\n    flex-direction: column;\n  }\n\n  .board {\n    height: 15em;\n    width: 15em;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _apps_domstuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps/domstuff */ "./src/apps/domstuff.js");
/* harmony import */ var _apps_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps/player */ "./src/apps/player.js");
/* harmony import */ var _apps_placeShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps/placeShips */ "./src/apps/placeShips.js");




let player1 = (0,_apps_player__WEBPACK_IMPORTED_MODULE_2__.Player)("you");

(0,_apps_placeShips__WEBPACK_IMPORTED_MODULE_3__.renderPlacer)();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwcy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwcy9wbGFjZVNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHBzL3JlbmRlckdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHBzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjZjhmYWZjO1xcbiAgLS1tYWluLWxldHRlci1jb2xvcjogIzAwMDtcXG4gIC0tbGluZS1jb2xvcjogIzBjNGE2ZTtcXG4gIC0tdGlsZS1ob3Zlci1jb2xvcjogIzI1ZGJmN2M3O1xcbiAgLS10aWxlLW1pc3NlZC1jb2xvcjogIzdkZDNmYztcXG4gIC0tdGlsZS1oaXQtY29sb3I6ICNmZjU0NTRjYjtcXG4gIC0tZnJpZW5kbHktc2hpcC1jb2xvcjogIzUxNTE1MWIzO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWxldHRlci1jb2xvcik7XFxuXFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlLXdyYXAge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIG1hcmdpbjogODBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLnBsYWNlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDJweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5wbGFjZTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbiNwbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJpZW5kbHktc2hpcC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnJvdGF0ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndpbm5lci13cmFwIHtcXG4gIGZsZXg6IDAuNTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDQwJSwgNjAwcHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3dpbm5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlY2xhcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgZmxleDogNjtcXG4gIHdpZHRoOiA5NSU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICBoZWlnaHQ6IDIwZW07XFxuICB3aWR0aDogMjBlbTtcXG59XFxuXFxuLnJvdyB7XFxuICBoZWlnaHQ6IDEwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDJweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXItY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1ob3Zlci1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG59XFxuXFxuLm1pc3NlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5oaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmZyaWVuZGx5U2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZyaWVuZGx5LXNoaXAtY29sb3IpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgLnBsYWNlLXdyYXAge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgI3dpbm5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIH1cXG5cXG4gIC5ib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgaGVpZ2h0OiAxNWVtO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQywrQkFBK0I7O0VBRS9CLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFlBQVk7O0VBRVosYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLE9BQU87RUFDUCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGVBQWU7O0VBRWYsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7O0VBRVgsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPOztFQUVQLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLCtCQUErQjs7RUFFL0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsVUFBVTs7RUFFVixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjs7RUFFaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyx5Q0FBeUM7RUFDekMsZUFBZTs7RUFFZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDBDQUEwQzs7RUFFMUMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHVDQUF1Qzs7RUFFdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHVDQUF1Qzs7RUFFdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFlBQVk7O0VBRVosYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjZjhmYWZjO1xcbiAgLS1tYWluLWxldHRlci1jb2xvcjogIzAwMDtcXG4gIC0tbGluZS1jb2xvcjogIzBjNGE2ZTtcXG4gIC0tdGlsZS1ob3Zlci1jb2xvcjogIzI1ZGJmN2M3O1xcbiAgLS10aWxlLW1pc3NlZC1jb2xvcjogIzdkZDNmYztcXG4gIC0tdGlsZS1oaXQtY29sb3I6ICNmZjU0NTRjYjtcXG4gIC0tZnJpZW5kbHktc2hpcC1jb2xvcjogIzUxNTE1MWIzO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWxldHRlci1jb2xvcik7XFxuXFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlLXdyYXAge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIG1hcmdpbjogODBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLnBsYWNlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDJweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5wbGFjZTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbiNwbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJpZW5kbHktc2hpcC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcblxcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnJvdGF0ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndpbm5lci13cmFwIHtcXG4gIGZsZXg6IDAuNTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDQwJSwgNjAwcHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3dpbm5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlY2xhcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgZmxleDogNjtcXG4gIHdpZHRoOiA5NSU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICBoZWlnaHQ6IDIwZW07XFxuICB3aWR0aDogMjBlbTtcXG59XFxuXFxuLnJvdyB7XFxuICBoZWlnaHQ6IDEwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDJweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXItY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1ob3Zlci1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG59XFxuXFxuLm1pc3NlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5oaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmZyaWVuZGx5U2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mcmllbmRseS1zaGlwLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZyaWVuZGx5LXNoaXAtY29sb3IpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgLnBsYWNlLXdyYXAge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgI3dpbm5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIH1cXG5cXG4gIC5ib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgaGVpZ2h0OiAxNWVtO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZpbmRUaWxlIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIsIG1vdmVBSSwgYm90TW92aW5nLCBjaGFuZ2VUdXJuLCBjcmVhdGVGbGVldCB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgcmVuZGVyTWFpbiB9IGZyb20gXCIuL3JlbmRlckdhbWVcIjtcbmltcG9ydCB7IHBsYXllcjEgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHJlbmRlclBsYWNlciB9IGZyb20gXCIuL3BsYWNlU2hpcHNcIjtcblxuLy8gbGV0IHBsYXllcjEgPSBQbGF5ZXIoXCJZb3VcIik7XG5sZXQgY29tcHV0ZXIgPSBQbGF5ZXIoXCJDb21wdXRlclwiKTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gIGNvbXB1dGVyLnJlc3RhcnQoKTtcblxuICBjcmVhdGVCb2FyZHMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCb2FyZHMgPSAoKSA9PiB7XG4gIHJlbmRlck1haW4oKTtcbiAgY3JlYXRlRmxlZXQoY29tcHV0ZXIuZ2V0Qm9hcmQoKSk7XG4gIGNvbnN0IGZyaWVuZGx5Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyaWVuZGx5LmJvYXJkXCIpO1xuICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmVteS5ib2FyZFwiKTtcblxuICByZW5kZXJCb2FyZChwbGF5ZXIxLCBmcmllbmRseUJvYXJkKTtcbiAgcmVuZGVyQm9hcmQoY29tcHV0ZXIsIGVuZW15Qm9hcmQpO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmQgPSAocGxheWVyLCBib2FyZCkgPT4ge1xuICBsZXQgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5ib2FyZDtcbiAgYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBmb3IgKGxldCByID0gOTsgciA+PSAwOyByLS0pIHtcbiAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcblxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcblxuICAgICAgLy8gQWRkIHRoaXMgdG8gbWF0Y2ggd2l0aCB0aWxlIG9iamVjdHNcbiAgICAgIHRpbGUuZGF0YXNldC52YWx1ZSA9IFtjb2wsIHJdO1xuXG4gICAgICBpZiAocGxheWVyLmdldE5hbWUoKSA9PT0gXCJDb21wdXRlclwiKSB7XG4gICAgICAgIHRpbGUub25jbGljayA9IHRha2VUdXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlsZS5pZCA9IFtjb2wsIHJdO1xuICAgICAgICBsZXQgY2VsbCA9IGZpbmRUaWxlKHBsYXllckJvYXJkLCBbY29sLCByXSk7XG4gICAgICAgIC8vIHNoYWRlIGluIGZyaWVuZGx5IHNoaXAgcG9zaXRpb25zXG4gICAgICAgIGlmIChjZWxsLnNoaXApIHRpbGUuY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5U2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQodGlsZSk7XG4gICAgfVxuICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICB9XG4gIHJldHVybiBib2FyZDtcbn07XG5cbmNvbnN0IHRha2VUdXJuID0gKGUpID0+IHtcbiAgbGV0IHZhbHVlcyA9IFtlLnRhcmdldC5kYXRhc2V0LnZhbHVlWzBdLCBlLnRhcmdldC5kYXRhc2V0LnZhbHVlWzJdXTtcbiAgaWYgKCFib3RNb3ZpbmcpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBjb21wdXRlci50YWtlSGl0KHBsYXllcjEuZ2V0TmFtZSgpLCB2YWx1ZXMpO1xuICAgIGlmIChyZXNwb25zZSAhPT0gXCJub3QgbGVnYWxcIikge1xuICAgICAgdXBkYXRlVGlsZUNvbG9yKGUudGFyZ2V0LCByZXNwb25zZSk7XG4gICAgICBpZiAocmVzcG9uc2UgPT09IFwiZ2FtZSBvdmVyXCIpIHtcbiAgICAgICAgZGVjbGFyZVdpbm5lcihwbGF5ZXIxKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgc3RvcEFuZExpc3RlbihwbGF5ZXIxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQWRkIGVuZCB0dXJuIGZ1bmN0aW9uXG4gICAgICBjaGFuZ2VUdXJuKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IG1vdmUgPSBtb3ZlQUkoY29tcHV0ZXIsIHBsYXllcjEpO1xuICAgICAgICB1cGRhdGVUaWxlQ29sb3IobW92ZS50aWxlLCBtb3ZlLnJlc3BvbnNlKTtcbiAgICAgICAgaWYgKG1vdmUucmVzcG9uc2UgPT09IFwiZ2FtZSBvdmVyXCIpIHtcbiAgICAgICAgICBkZWNsYXJlV2lubmVyKGNvbXB1dGVyKTtcbiAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHN0b3BBbmRMaXN0ZW4oY29tcHV0ZXIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VUdXJuKCk7XG4gICAgICB9LCBcIjAwMFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vZGlzcGxheSB3aW5uZXIgbWVzc2FnZVxuY29uc3QgZGVjbGFyZVdpbm5lciA9IChwbGF5ZXIpID0+IHtcbiAgbGV0IHdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lubmVyXCIpO1xuICB3aW5uZXIuY2xhc3NMaXN0LmFkZChcImRlY2xhcmVkXCIpO1xuICBwbGF5ZXIuZ2V0TmFtZSgpID09PSBcIkNvbXB1dGVyXCJcbiAgICA/ICh3aW5uZXIuaW5uZXJIVE1MID0gYCR7cGxheWVyLmdldE5hbWUoKX0gIHdpbnMgdGhpcyByb3VuZCFgKVxuICAgIDogKHdpbm5lci5pbm5lckhUTUwgPSBgJHtwbGF5ZXIuZ2V0TmFtZSgpfSAgd2luIHRoaXMgcm91bmQhYCk7XG59O1xuXG4vLyBPbiBnYW1lIHdvbiwgYm9hcmQgcmVzdGFydHMgZ2FtZSBvbmNsaWNrXG5jb25zdCBzdG9wQW5kTGlzdGVuID0gKHBsYXllcikgPT4ge1xuICBsZXQgZ2FtZURvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgZ2FtZURvbmUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgKCkgPT4ge1xuICAgICAgcmVuZGVyUGxhY2VyKCk7XG4gICAgICByZXR1cm47XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApO1xufTtcblxuLy8gVXBkYXRlIHRpbGUgY29sb3JzIG9uY2UgY2xpY2tlZFxuY29uc3QgdXBkYXRlVGlsZUNvbG9yID0gKHRpbGUsIHJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXNwb25zZSA9PT0gXCJzaG90IG1pc3NlZFwiKSB0aWxlLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gIGlmIChyZXNwb25zZSA9PT0gXCJoaXQgdGFrZW4hXCIgfHwgcmVzcG9uc2UgPT09IFwiZ2FtZSBvdmVyXCIpIHtcbiAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJmcmllbmRseVNoaXBcIik7XG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICB9XG59O1xuIiwiLy8gaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL2RvbXN0dWZmXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgVGlsZSB7XG4gICNoaXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihyb3csIGNvbHVtbikge1xuICAgIHRoaXMuY29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl07XG4gICAgdGhpcy5mcmVlID0gdHJ1ZTtcbiAgICB0aGlzLnNoaXAgPSBudWxsO1xuICB9XG5cbiAgaXNIaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdDtcbiAgfTtcblxuICB0YWtlSGl0ID0gKCkgPT4ge1xuICAgIHRoaXMuI2hpdCA9IHRydWU7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLnNoaXBDb3VudCA9IDA7XG4gICAgdGhpcy5tYXhGbGVldFNpemUgPSA1O1xuICB9XG4gIHBsYWNlU2hpcCA9IChzaXplLCBbY29sLCByb3ddLCBpc0hvcml6b250YWwpID0+IHtcbiAgICBpZiAodGhpcy5zaGlwQ291bnQgPT0gdGhpcy5tYXhGbGVldFNpemUpIHJldHVybjtcbiAgICBjb2wgPSBwYXJzZUludChjb2wpO1xuICAgIHJvdyA9IHBhcnNlSW50KHJvdyk7XG4gICAgLy8gY3JlYXRlIHNoaXBcbiAgICBsZXQgbmV3U2hpcCA9IFNoaXAoc2l6ZSk7XG5cbiAgICAvLyBDaGVjayBpZiBhcmVhIG9jY3VwaWVkIGJ5IG90aGVyIHNoaXBcbiAgICBpZiAoaXNPY2N1cGllZCh0aGlzLmJvYXJkLCBuZXdTaGlwLmdldExlbmd0aCgpLCBbY29sLCByb3ddLCBpc0hvcml6b250YWwpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFyZWEgb2NjdXBpZWRcIik7XG4gICAgICByZXR1cm4gXCJhcmVhIG9jY3VwaWVkXCI7XG4gICAgfVxuXG4gICAgLy8gcHV0IHN0YXJ0IG9mIHNoaXAgb24gY29vcmRpbmF0ZSB0aWxlIGFuZCB1c2Ugc2hpcHMgbGVuZ3RoXG4gICAgLy8gdG8gYWxzbyBwdXQgc2hpcCBvbiB0aWxlcyBmb2xsb3dpbmcgaXRcbiAgICBsZXQgaSA9IDA7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgd2hpbGUgKGkgPCBuZXdTaGlwLmdldExlbmd0aCgpKSB7XG4gICAgICAgIGxldCB0aWxlID0gZmluZFRpbGUodGhpcy5ib2FyZCwgW2NvbCArIGksIHJvd10pO1xuICAgICAgICB0aWxlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChpIDwgbmV3U2hpcC5nZXRMZW5ndGgoKSkge1xuICAgICAgICBsZXQgdGlsZSA9IGZpbmRUaWxlKHRoaXMuYm9hcmQsIFtjb2wsIHJvdyAtIGldKTtcbiAgICAgICAgdGlsZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNoaXBDb3VudCsrO1xuICB9O1xuXG4gIHJlY2VpdmVBdHRhY2sgPSAoZW5lbXksIGNvbCwgcm93KSA9PiB7XG4gICAgbGV0IHRpbGUgPSBmaW5kVGlsZSh0aGlzLmJvYXJkLCBbY29sLCByb3ddKTtcbiAgICBpZiAodGlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk91dCBvZiBib3VuZHNcIik7XG4gICAgICByZXR1cm4gXCJub3QgbGVnYWxcIjtcbiAgICB9XG4gICAgaWYgKHRpbGUuaXNIaXQoKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJBbHJlYWR5IGhpdFwiKTtcbiAgICAgIHJldHVybiBcIm5vdCBsZWdhbFwiO1xuICAgIH1cbiAgICBpZiAoIXRpbGUuc2hpcCkge1xuICAgICAgdGlsZS50YWtlSGl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNob3QgbWlzc2VkIVwiKTtcbiAgICAgIHJldHVybiBcInNob3QgbWlzc2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbGUudGFrZUhpdCgpO1xuICAgICAgdGlsZS5zaGlwLmhpdCgpO1xuICAgICAgaWYgKHRpbGUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICB0aGlzLnNoaXBDb3VudC0tO1xuICAgICAgICBpZiAodGhpcy5zaGlwQ291bnQgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gXCJnYW1lIG92ZXJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGBoaXQgdGFrZW4hYDtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbXTtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBib2FyZC5wdXNoKG5ldyBUaWxlKGNvbCwgcm93KSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib2FyZDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kVGlsZSA9IChib2FyZCwgW2NvbCwgcm93XSkgPT4ge1xuICBmb3IgKGxldCB0aWxlIG9mIGJvYXJkKSB7XG4gICAgaWYgKHRpbGUuY29vcmRpbmF0ZVswXSA9PSBjb2wgJiYgdGlsZS5jb29yZGluYXRlWzFdID09IHJvdykge1xuICAgICAgcmV0dXJuIHRpbGU7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBpc09jY3VwaWVkID0gKGJvYXJkLCBsZW5ndGgsIFtjb2wsIHJvd10sIGlzSG9yaXpvbnRhbCkgPT4ge1xuICBsZXQgaSA9IDA7XG4gIGlmIChpc0hvcml6b250YWwpIHtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgbGV0IHRpbGUgPSBmaW5kVGlsZShib2FyZCwgW2NvbCArIGksIHJvd10pO1xuXG4gICAgICBpZiAodGlsZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTsgLy8gY2hlY2sgaWYgaXQgb3ZlcmZsb3dzIG91dCBvZiBib2FyZFxuICAgICAgaWYgKHRpbGUuc2hpcCkgcmV0dXJuIHRydWU7IC8vIGNoZWNrIGlmIHNoaXAgYWxyZWFkeSB0aGVyZVxuXG4gICAgICBpKys7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGNvbnNvbGUubG9nKFwidmVydGljYWxcIik7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIGxldCB0aWxlID0gZmluZFRpbGUoYm9hcmQsIFtjb2wsIHJvdyAtIGldKTtcbiAgICAgIGlmICh0aWxlID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHRpbGUuc2hpcCkgcmV0dXJuIHRydWU7XG5cbiAgICAgIGkrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsImltcG9ydCB7IGJ1aWxkRWxlbWVudCB9IGZyb20gXCIuL3JlbmRlckdhbWVcIjtcbmltcG9ydCB7IHJlbmRlclBhZ2UgfSBmcm9tIFwiLi9kb21zdHVmZlwiO1xuaW1wb3J0IHsgcGxheWVyMSB9IGZyb20gXCIuLlwiO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUGxhY2VyID0gKCkgPT4ge1xuICBwbGF5ZXIxLnJlc3RhcnQoKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3Qgd3JhcCA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBbXCJwbGFjZS13cmFwXCJdKTtcbiAgY29uc3QgdGl0bGUgPSBidWlsZEVsZW1lbnQoXG4gICAgXCJoM1wiLFxuICAgIFtcInBsYWNlLXRpdGxlXCJdLFxuICAgIG51bGwsXG4gICAgXCJQbGFjZSB5b3VyZSBzaGlwcyB0byBiZWdpblwiXG4gICk7XG4gIGNvbnN0IGJvYXJkID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcImJvYXJkXCJdKTtcbiAgY29uc3Qgcm90YXRlID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcInJvdGF0ZVwiXSwgbnVsbCwgXCJyb3RhdGUgc2hpcFwiKTtcblxuICBmb3IgKGxldCByID0gOTsgciA+PSAwOyByLS0pIHtcbiAgICBsZXQgcm93ID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcInJvd1wiXSk7XG5cbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGxldCB0aWxlID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcInBsYWNlXCJdKTtcblxuICAgICAgLy8gQWRkIHRoaXMgdG8gbWF0Y2ggd2l0aCB0aWxlIG9iamVjdHNcbiAgICAgIHRpbGUuaWQgPSBbY29sLCByXTtcblxuICAgICAgcm93LmFwcGVuZCh0aWxlKTtcbiAgICB9XG4gICAgYm9hcmQuYXBwZW5kKHJvdyk7XG4gIH1cbiAgdGl0bGUuYXBwZW5kKGJvYXJkLCByb3RhdGUpO1xuICB3cmFwLmFwcGVuZCh0aXRsZSk7XG4gIG1haW4uYXBwZW5kKHdyYXApO1xuICBwbGFjZVNoaXBzKCk7XG59O1xuXG5jb25zdCB0b2dnbGVPcmllbnRhdGlvbiA9IChpc0hvcml6b250YWwpID0+IHtcbiAgaXNIb3Jpem9udGFsID0gIWlzSG9yaXpvbnRhbDtcbiAgY29uc29sZS5sb2coaXNIb3Jpem9udGFsKTtcbiAgcmV0dXJuIGlzSG9yaXpvbnRhbDtcbn07XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gIGxldCBpc0hvcml6b250YWwgPSB0cnVlO1xuXG4gIGxldCBzaGlwID0gWzUsIDQsIDMsIDMsIDJdO1xuICBsZXQgbnVtYmVyID0gMDtcbiAgZGlzcGxheVNoaXAoc2hpcFtudW1iZXJdLCBpc0hvcml6b250YWwsIHNoaXAsIG51bWJlcik7XG59O1xuXG5jb25zdCBkaXNwbGF5U2hpcCA9IChsZW5ndGgsIG9yaWVudGF0aW9uLCBzaGlwLCBudW1iZXIpID0+IHtcbiAgaWYgKG51bWJlciA+PSBzaGlwLmxlbmd0aCkge1xuICAgIHN0YXJ0R2FtZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGFjZVwiKTtcbiAgICBjb25zdCByb3RhdGVTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVcIik7XG5cbiAgICByb3RhdGVTaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcmllbnRhdGlvbiA9IHRvZ2dsZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcbiAgICAgIGRpc3BsYXlTaGlwKGxlbmd0aCwgb3JpZW50YXRpb24sIHNoaXAsIG51bWJlcik7XG4gICAgfSk7XG5cbiAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIGdyYWIgdGlsZSBpZCdzIGZyb20gdGlsZXMgY292ZXJpbmcgc2hpcCBsZW5ndGhcbiAgICAgICAgbGV0IHNoaXBBcnJheSA9IGdldFNoaXBEaXNwbGF5KGV2ZW50LnRhcmdldC5pZCwgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG5cbiAgICAgICAgY29sb3JIb3ZlcihzaGlwQXJyYXksIFwidmFyKC0tZnJpZW5kbHktc2hpcC1jb2xvcilcIik7IC8vIGNvbG9yIHRoZW0gYWxsIHRvZ2V0aGVyXG4gICAgICB9O1xuICAgICAgdGlsZS5vbm1vdXNlb3V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBzaGlwQXJyYXkgPSBnZXRTaGlwRGlzcGxheShldmVudC50YXJnZXQuaWQsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICBjb2xvckhvdmVyKHNoaXBBcnJheSwgXCIjZmZmXCIpO1xuICAgICAgfTtcbiAgICAgIHRpbGUub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgY29vcmRzID0gW2V2ZW50LnRhcmdldC5pZFswXSwgZXZlbnQudGFyZ2V0LmlkWzJdXTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gcGxheWVyMVxuICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgLnBsYWNlU2hpcChsZW5ndGgsIGNvb3Jkcywgb3JpZW50YXRpb24pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZSAhPT0gXCJhcmVhIG9jY3VwaWVkXCIpIHtcbiAgICAgICAgICBsZXQgc2hpcEFycmF5ID0gZ2V0U2hpcERpc3BsYXkoZXZlbnQudGFyZ2V0LmlkLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICBjb2xvclBsYWNlZFNoaXAoc2hpcEFycmF5KTtcbiAgICAgICAgICBudW1iZXIrKztcbiAgICAgICAgICBkaXNwbGF5U2hpcChzaGlwW251bWJlcl0sIG9yaWVudGF0aW9uLCBzaGlwLCBudW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FudCBwbGFjZSBzaGlwIGhlcmVcIik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbiAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYWNlXCIpO1xuICBzdGFydEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNUQVJUIEdBTUVcIjtcblxuICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5vbm1vdXNlb3ZlciA9IG51bGw7XG4gICAgdGlsZS5vbmNsaWNrID0gbnVsbDtcbiAgfSk7XG5cbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW5kZXJQYWdlKCk7XG4gIH0pO1xufTtcblxuY29uc3QgY29sb3JQbGFjZWRTaGlwID0gKHNoaXApID0+IHtcbiAgZm9yIChsZXQgY29vcmRpbmF0ZSBvZiBzaGlwKSB7XG4gICAgaWYgKFxuICAgICAgY29vcmRpbmF0ZVswXSA+PSAwICYmXG4gICAgICBjb29yZGluYXRlWzBdIDw9IDkgJiZcbiAgICAgIGNvb3JkaW5hdGVbMV0gPj0gMCAmJlxuICAgICAgY29vcmRpbmF0ZVsxXSA8PSA5XG4gICAgKSB7XG4gICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkaW5hdGUpO1xuICAgICAgdGlsZS5pZCA9IFwicGxhY2VkXCI7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZXRTaGlwRGlzcGxheSA9IChjdXJyZW50VGlsZSwgbGVuZ3RoLCBpc0hvcml6b250YWwpID0+IHtcbiAgbGV0IGFycmF5ID0gW107XG4gIGxldCBpID0gMDtcbiAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgIHBhcnNlSW50KGN1cnJlbnRUaWxlWzBdKSArIGksXG4gICAgICAgIHBhcnNlSW50KGN1cnJlbnRUaWxlWzJdKSxcbiAgICAgIF07XG4gICAgICBhcnJheS5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzSG9yaXpvbnRhbCkge1xuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgIHBhcnNlSW50KGN1cnJlbnRUaWxlWzBdKSxcbiAgICAgICAgcGFyc2VJbnQoY3VycmVudFRpbGVbMl0gLSBpKSxcbiAgICAgIF07XG4gICAgICBhcnJheS5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5jb25zdCBjb2xvckhvdmVyID0gKHNoaXAsIGNvbG9yKSA9PiB7XG4gIGZvciAobGV0IGNvb3JkaW5hdGUgb2Ygc2hpcCkge1xuICAgIGlmIChcbiAgICAgIGNvb3JkaW5hdGVbMF0gIT0gTmFOICYmXG4gICAgICBjb29yZGluYXRlWzFdICE9PSBOYU4gJiZcbiAgICAgIGNvb3JkaW5hdGVbMF0gPj0gMCAmJlxuICAgICAgY29vcmRpbmF0ZVswXSA8PSA5ICYmXG4gICAgICBjb29yZGluYXRlWzFdID49IDAgJiZcbiAgICAgIGNvb3JkaW5hdGVbMV0gPD0gOVxuICAgICkge1xuICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb29yZGluYXRlKTtcbiAgICAgIGlmICh0aWxlICE9PSBudWxsKSB0aWxlLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07YDtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vZG9tc3R1ZmZcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuZXhwb3J0IGxldCBib3RNb3ZpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIGxldCBib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAvLyBTZW5kIGhpdCBmdW5jdGlvblxuICBjb25zdCBzZW5kSGl0ID0gKGVuZW15LCBbY29sLCByb3ddKSA9PiB7XG4gICAgcmV0dXJuIGVuZW15LnRha2VIaXQobmFtZSwgW2NvbCwgcm93XSk7XG4gIH07XG5cbiAgLy8gVGFrZSBoaXQgZnVuY3Rpb25cbiAgY29uc3QgdGFrZUhpdCA9IChlbmVteSwgW2NvbCwgcm93XSkgPT4ge1xuICAgIGxldCByZXNwb25zZSA9IGJvYXJkLnJlY2VpdmVBdHRhY2soZW5lbXksIGNvbCwgcm93KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG5cbiAgY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgICByZW5kZXJQYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgcmVzdGFydCA9ICgpID0+IHtcbiAgICBib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfTtcblxuICByZXR1cm4geyBzZW5kSGl0LCB0YWtlSGl0LCBnZXROYW1lLCBlbmRHYW1lLCByZXN0YXJ0LCBnZXRCb2FyZCB9O1xufTtcblxuLy8gSGFyZGNvZGVkIEZsZWV0IGZvciBub3dcbmV4cG9ydCBjb25zdCBjcmVhdGVGbGVldCA9IChib2FyZCkgPT4ge1xuICBsZXQgY29vcmRpbmF0ZXMgPSBbXG4gICAgWzAsIDBdLFxuICAgIFs5LCA5XSxcbiAgICBbMCwgOF0sXG4gICAgWzEsIDVdLFxuICAgIFs1LCAzXSxcbiAgXTtcbiAgbGV0IG9yaWVudGF0aW9ucyA9IFt0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWVdO1xuICBsZXQgc2l6ZXMgPSBbNSwgNCwgMywgMiwgM107XG5cbiAgZm9yIChsZXQgaSBpbiBjb29yZGluYXRlcykge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaXplc1tpXSwgY29vcmRpbmF0ZXNbaV0sIG9yaWVudGF0aW9uc1tpXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBtb3ZlQUkgPSAocGxheWVyLCBlbmVteSkgPT4ge1xuICAvLyBrZWVwIHRyeWluZyBmb3IgY29vcmRpbmF0ZXMgdW50aWwgdGhleSBjb21lIGJhY2sgbGVnYWxcbiAgbGV0IG1vdmVOb3RMZWdhbCA9IHRydWU7XG4gIHdoaWxlIChtb3ZlTm90TGVnYWwpIHtcbiAgICBsZXQgbW92ZSA9IFtnZXRSYW5kb21JbnQoMTApLCBnZXRSYW5kb21JbnQoMTApXTtcbiAgICBsZXQgcmVzcG9uc2UgPSBwbGF5ZXIuc2VuZEhpdChlbmVteSwgbW92ZSk7XG4gICAgaWYgKHJlc3BvbnNlICE9PSBcIm5vdCBsZWdhbFwiKSB7XG4gICAgICBtb3ZlTm90TGVnYWwgPSBmYWxzZTtcbiAgICAgIC8vIFVQREFURSBGUklFTkRMWSBCT0FSRCBXSVRIIENPTVBVVEVSJ1MgTU9WRVxuICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb3ZlKTtcbiAgICAgIHJldHVybiB7IHRpbGUsIHJlc3BvbnNlIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlVHVybiA9ICgpID0+IHtcbiAgYm90TW92aW5nID0gIWJvdE1vdmluZztcbn07XG5cbmNvbnN0IGdldFJhbmRvbUludCA9IChtYXgpID0+IHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQm9hcmRzIH0gZnJvbSBcIi4vZG9tc3R1ZmZcIjtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkRWxlbWVudCA9IChlbGVtZW50X3R5cGUsIGNsYXNzX25hbWUsIGlkX25hbWUsIGNvbnRlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudF90eXBlKTtcbiAgaWYgKGNsYXNzX25hbWUpIHtcbiAgICBmb3IgKGNvbnN0IG15Q2xhc3MgaW4gY2xhc3NfbmFtZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzX25hbWVbbXlDbGFzc10pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpZF9uYW1lKSBlbGVtZW50LmlkID0gaWRfbmFtZTtcbiAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudDtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCB3aW5XcmFwID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcIndpbm5lci13cmFwXCJdKTtcbiAgY29uc3Qgd2lubmVyID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwid2lubmVyXCIsIFwiR29kIHNwZWVkLCBDYXB0YWluXCIpO1xuXG4gIGNvbnN0IGJvYXJkcyA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBbXCJib2FyZHNcIl0pO1xuXG4gIGNvbnN0IGdhbWVib2FyZDEgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgW1wiZ2FtZWJvYXJkXCJdKTtcbiAgY29uc3QgcGxheWVyMSA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBbXCJwbGF5ZXJcIl0sIG51bGwsIFwiWU9VUiBCT0FSRFwiKTtcbiAgY29uc3QgZnJpZW5kbHlCb2FyZCA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBbXCJmcmllbmRseVwiLCBcImJvYXJkXCJdKTtcbiAgZ2FtZWJvYXJkMS5hcHBlbmQocGxheWVyMSwgZnJpZW5kbHlCb2FyZCk7XG5cbiAgY29uc3QgZ2FtZWJvYXJkMiA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBbXCJnYW1lYm9hcmRcIl0pO1xuICBjb25zdCBwbGF5ZXIyID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFtcInBsYXllclwiXSwgbnVsbCwgXCJFTkVNWSBCT0FSRFwiKTtcbiAgY29uc3QgZW5lbXlCb2FyZCA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBbXCJlbmVteVwiLCBcImJvYXJkXCJdKTtcbiAgZ2FtZWJvYXJkMi5hcHBlbmQocGxheWVyMiwgZW5lbXlCb2FyZCk7XG5cbiAgd2luV3JhcC5hcHBlbmQod2lubmVyKTtcbiAgYm9hcmRzLmFwcGVuZChnYW1lYm9hcmQxLCBnYW1lYm9hcmQyKTtcbiAgbWFpbi5hcHBlbmQod2luV3JhcCwgYm9hcmRzKTtcbn07XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IGhpdHMgPSAwO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cysrO1xuICAgIGNvbnNvbGUubG9nKFwiU2hpcCBoYXMgYmVlbiBoaXRcIik7XG4gICAgaWYgKGhpdHMgPT0gZ2V0TGVuZ3RoKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2hpcCBzdW5rISEhXCIpO1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldExlbmd0aCwgZ2V0SGl0cywgaXNTdW5rLCBoaXQgfTtcbn07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSwgY3JlYXRlQm9hcmRzIH0gZnJvbSBcIi4vYXBwcy9kb21zdHVmZlwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vYXBwcy9wbGF5ZXJcIjtcbmltcG9ydCB7IHJlbmRlclBsYWNlciB9IGZyb20gXCIuL2FwcHMvcGxhY2VTaGlwc1wiO1xuZXhwb3J0IGxldCBwbGF5ZXIxID0gUGxheWVyKFwieW91XCIpO1xuXG5yZW5kZXJQbGFjZXIoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9