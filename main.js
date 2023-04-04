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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #f8fafc;\n  --main-letter-color: #000;\n  --line-color: #0c4a6e;\n  --tile-hover-color: #7dd3fc;\n  --tile-missed-color: #0ea5e9;\n  --tile-hit-color: #ef4444;\n}\n\nhtml {\n  font-family: \"Orbitron\", sans-serif;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--main-letter-color);\n\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  height: 3rem;\n  margin-bottom: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh2 {\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-wrap {\n  flex: 0.5;\n  margin-bottom: 20px;\n  width: clamp(300px, 40%, 600px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#winner {\n  border: 1px solid black;\n  padding: 20px 70px;\n  text-align: center;\n}\n\n.declared {\n  background-color: #000;\n  color: white;\n}\n\n.boards {\n  flex: 6;\n  /* height: 60%; */\n  width: 95%;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameboard {\n  padding: 10px;\n  border: 1px dashed black;\n}\n\n.player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  margin: 20px;\n  margin-top: 10px;\n\n  height: 20em;\n  width: 20em;\n}\n\n.row {\n  height: 10%;\n\n  display: flex;\n}\n\n.tile {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.tile:hover {\n  background-color: var(--tile-hover-color);\n  border: 1px solid var(--tile-hover-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n.missed {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n}\n\n.missed:hover {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n\n  transition: 0.2s;\n}\n\n.hit {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.hit:hover {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\nfooter {\n  height: 3rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 750px) {\n  #winner {\n    padding: 20px 30px;\n  }\n\n  .boards {\n    flex-direction: column;\n  }\n\n  .board {\n    height: 15em;\n    width: 15em;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;EACrB,2BAA2B;EAC3B,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;EACjC,+BAA+B;;EAE/B,SAAS;EACT,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;;EAEnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,OAAO;;EAEP,aAAa;EACb,sBAAsB;;EAEtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,+BAA+B;;EAE/B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,UAAU;;EAEV,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;;EAEhB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;;EAEX,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,OAAO;EACP,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,yCAAyC;EACzC,eAAe;;EAEf,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;EAC1C,0CAA0C;;EAE1C,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;;EAEvC,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;;EAEvC,gBAAgB;AAClB;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;AACF","sourcesContent":[":root {\n  --bg-color: #f8fafc;\n  --main-letter-color: #000;\n  --line-color: #0c4a6e;\n  --tile-hover-color: #7dd3fc;\n  --tile-missed-color: #0ea5e9;\n  --tile-hit-color: #ef4444;\n}\n\nhtml {\n  font-family: \"Orbitron\", sans-serif;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--main-letter-color);\n\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  height: 3rem;\n  margin-bottom: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh2 {\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-wrap {\n  flex: 0.5;\n  margin-bottom: 20px;\n  width: clamp(300px, 40%, 600px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#winner {\n  border: 1px solid black;\n  padding: 20px 70px;\n  text-align: center;\n}\n\n.declared {\n  background-color: #000;\n  color: white;\n}\n\n.boards {\n  flex: 6;\n  /* height: 60%; */\n  width: 95%;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameboard {\n  padding: 10px;\n  border: 1px dashed black;\n}\n\n.player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  margin: 20px;\n  margin-top: 10px;\n\n  height: 20em;\n  width: 20em;\n}\n\n.row {\n  height: 10%;\n\n  display: flex;\n}\n\n.tile {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.tile:hover {\n  background-color: var(--tile-hover-color);\n  border: 1px solid var(--tile-hover-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n.missed {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n}\n\n.missed:hover {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n\n  transition: 0.2s;\n}\n\n.hit {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.hit:hover {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\nfooter {\n  height: 3rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 750px) {\n  #winner {\n    padding: 20px 30px;\n  }\n\n  .boards {\n    flex-direction: column;\n  }\n\n  .board {\n    height: 15em;\n    width: 15em;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/apps/player.js");

let winner = document.getElementById("winner");

let player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)("Player 1");
let computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)("Computer");

const renderPage = () => {
  player1.restart();
  computer.restart();
  createBoards();
  winner.classList.remove("declared");
  winner.innerHTML = "God speed, Captain";
};

const createBoards = () => {
  const friendlyBoard = document.querySelector(".friendly.board");
  const enemyBoard = document.querySelector(".enemy.board");

  renderBoard(player1, computer, friendlyBoard);
  renderBoard(computer, player1, enemyBoard);
};

const renderBoard = (player, enemy, board) => {
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
      }
      row.append(tile);
    }
    board.append(row);
  }
  return board;
};

const takeTurn = (e) => {
  let values = [e.target.dataset.value[0], e.target.dataset.value[2]];

  if (!_player__WEBPACK_IMPORTED_MODULE_0__.botMoving) {
    let response = computer.takeHit(player1.getName(), values);
    if (response !== "not legal") {
      updateTileColor(e.target, response);
      if (response === "game over") {
        declareWinner(player1);
        e.stopImmediatePropagation();
        stopAndListen(player1);
        return;
      }
      // Add end turn function
      (0,_player__WEBPACK_IMPORTED_MODULE_0__.changeTurn)();
      setTimeout(() => {
        let move = (0,_player__WEBPACK_IMPORTED_MODULE_0__.moveAI)(computer, player1);
        updateTileColor(move.tile, move.response);
        if (move.response === "game over") {
          declareWinner(computer);
          e.stopImmediatePropagation();
          stopAndListen(computer);
          return;
        }
        (0,_player__WEBPACK_IMPORTED_MODULE_0__.changeTurn)();
      }, "000");
    }
  }
};

const declareWinner = (player) => {
  winner.classList.add("declared");
  winner.innerHTML = `${player.getName()} has won this round!`;
};

const stopAndListen = (player) => {
  let gameDone = document.querySelector("main");
  gameDone.addEventListener(
    "click",
    () => {
      player.endGame();
    },
    { once: true }
  );
};

// TODO: UPDATE TILE COLORS AS THEYRE BEING HIT
const updateTileColor = (tile, response) => {
  if (response === "shot missed") tile.classList.add("missed");
  if (response === "hit taken!" || response === "game over")
    tile.classList.add("hit");
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
/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domstuff */ "./src/apps/domstuff.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/apps/ship.js");



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
  }
  placeShip = (size, [col, row], isHorizontal) => {
    // create ship
    let newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(size);

    // Check if area occupied by other ship
    if (isOccupied(this.board, newShip.getLength(), [col, row], isHorizontal)) {
      console.log("Area occupied");
      return "Area occupied";
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
  // check if ship is already there
  let i = 0;
  if (isHorizontal) {
    // console.log("horizontal");
    while (i < length) {
      let tile = findTile(board, [col + i, row]);
      if (tile.ship) return true;
      i++;
    }
  } else {
    // console.log("vertical");
    while (i < length) {
      let tile = findTile(board, [col, row - i]);
      if (tile.ship) return true;
      i++;
    }
  }
  return false;
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
/* harmony export */   "moveAI": () => (/* binding */ moveAI)
/* harmony export */ });
/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domstuff */ "./src/apps/domstuff.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/apps/gameboard.js");


let botMoving = false;
let winner = document.getElementById("winner");

const Player = (name) => {
  let board = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard();

  // Create fleet of ships
  createFleet(name, board);

  // Send hit function
  const sendHit = (enemy, [col, row]) => {
    return enemy.takeHit(name, [col, row]);
  };

  // Take hit function
  const takeHit = (enemy, [col, row]) => {
    let response = board.receiveAttack(enemy, col, row);
    // logResponse(response, name, enemy);
    return response;
  };

  const endGame = () => {
    (0,_domstuff__WEBPACK_IMPORTED_MODULE_0__.renderPage)();
  };

  const getName = () => {
    return name;
  };

  const restart = () => {
    board = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
    createFleet(name, board);
  };

  return { sendHit, takeHit, getName, endGame, restart };
};

const logResponse = (response, player, enemy) => {
  // console.log(enemy);
  if (response === "Hit taken!") {
    console.log(`${enemy} has hit ${player} `);
  }
};

// Hardcoded Fleet for now
const createFleet = (name, board) => {
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _apps_domstuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps/domstuff */ "./src/apps/domstuff.js");



(0,_apps_domstuff__WEBPACK_IMPORTED_MODULE_1__.renderPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCOztBQUU3QywwREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHBzL2RvbXN0dWZmLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHBzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogI2Y4ZmFmYztcXG4gIC0tbWFpbi1sZXR0ZXItY29sb3I6ICMwMDA7XFxuICAtLWxpbmUtY29sb3I6ICMwYzRhNmU7XFxuICAtLXRpbGUtaG92ZXItY29sb3I6ICM3ZGQzZmM7XFxuICAtLXRpbGUtbWlzc2VkLWNvbG9yOiAjMGVhNWU5O1xcbiAgLS10aWxlLWhpdC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1sZXR0ZXItY29sb3IpO1xcblxcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndpbm5lci13cmFwIHtcXG4gIGZsZXg6IDAuNTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDQwJSwgNjAwcHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3dpbm5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlY2xhcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgZmxleDogNjtcXG4gIC8qIGhlaWdodDogNjAlOyAqL1xcbiAgd2lkdGg6IDk1JTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcXG59XFxuXFxuLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gIGhlaWdodDogMjBlbTtcXG4gIHdpZHRoOiAyMGVtO1xcbn1cXG5cXG4ucm93IHtcXG4gIGhlaWdodDogMTAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbjogMnB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnRpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlci1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLWhvdmVyLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzZWQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1taXNzZWQtY29sb3IpO1xcbn1cXG5cXG4ubWlzc2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmhpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLWhpdC1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgI3dpbm5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIH1cXG5cXG4gIC5ib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgaGVpZ2h0OiAxNWVtO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLCtCQUErQjs7RUFFL0IsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTzs7RUFFUCxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQiwrQkFBK0I7O0VBRS9CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixVQUFVOztFQUVWLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjs7RUFFaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyx5Q0FBeUM7RUFDekMsZUFBZTs7RUFFZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDBDQUEwQzs7RUFFMUMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHVDQUF1Qzs7RUFFdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHVDQUF1Qzs7RUFFdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmctY29sb3I6ICNmOGZhZmM7XFxuICAtLW1haW4tbGV0dGVyLWNvbG9yOiAjMDAwO1xcbiAgLS1saW5lLWNvbG9yOiAjMGM0YTZlO1xcbiAgLS10aWxlLWhvdmVyLWNvbG9yOiAjN2RkM2ZjO1xcbiAgLS10aWxlLW1pc3NlZC1jb2xvcjogIzBlYTVlOTtcXG4gIC0tdGlsZS1oaXQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tbGV0dGVyLWNvbG9yKTtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53aW5uZXItd3JhcCB7XFxuICBmbGV4OiAwLjU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA0MCUsIDYwMHB4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN3aW5uZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZWNsYXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gIGZsZXg6IDY7XFxuICAvKiBoZWlnaHQ6IDYwJTsgKi9cXG4gIHdpZHRoOiA5NSU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICBoZWlnaHQ6IDIwZW07XFxuICB3aWR0aDogMjBlbTtcXG59XFxuXFxuLnJvdyB7XFxuICBoZWlnaHQ6IDEwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDJweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXItY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1ob3Zlci1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG59XFxuXFxuLm1pc3NlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5oaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogM3JlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICN3aW5uZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICB9XFxuXFxuICAuYm9hcmRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5ib2FyZCB7XFxuICAgIGhlaWdodDogMTVlbTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQbGF5ZXIsIG1vdmVBSSwgYm90TW92aW5nLCBjaGFuZ2VUdXJuIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5sZXQgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5uZXJcIik7XG5cbmxldCBwbGF5ZXIxID0gUGxheWVyKFwiUGxheWVyIDFcIik7XG5sZXQgY29tcHV0ZXIgPSBQbGF5ZXIoXCJDb21wdXRlclwiKTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gIHBsYXllcjEucmVzdGFydCgpO1xuICBjb21wdXRlci5yZXN0YXJ0KCk7XG4gIGNyZWF0ZUJvYXJkcygpO1xuICB3aW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlY2xhcmVkXCIpO1xuICB3aW5uZXIuaW5uZXJIVE1MID0gXCJHb2Qgc3BlZWQsIENhcHRhaW5cIjtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCb2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGZyaWVuZGx5Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyaWVuZGx5LmJvYXJkXCIpO1xuICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmVteS5ib2FyZFwiKTtcblxuICByZW5kZXJCb2FyZChwbGF5ZXIxLCBjb21wdXRlciwgZnJpZW5kbHlCb2FyZCk7XG4gIHJlbmRlckJvYXJkKGNvbXB1dGVyLCBwbGF5ZXIxLCBlbmVteUJvYXJkKTtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKHBsYXllciwgZW5lbXksIGJvYXJkKSA9PiB7XG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgciA9IDk7IHIgPj0gMDsgci0tKSB7XG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5cbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG5cbiAgICAgIC8vIEFkZCB0aGlzIHRvIG1hdGNoIHdpdGggdGlsZSBvYmplY3RzXG4gICAgICB0aWxlLmRhdGFzZXQudmFsdWUgPSBbY29sLCByXTtcblxuICAgICAgaWYgKHBsYXllci5nZXROYW1lKCkgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgICAgICB0aWxlLm9uY2xpY2sgPSB0YWtlVHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbGUuaWQgPSBbY29sLCByXTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQodGlsZSk7XG4gICAgfVxuICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICB9XG4gIHJldHVybiBib2FyZDtcbn07XG5cbmNvbnN0IHRha2VUdXJuID0gKGUpID0+IHtcbiAgbGV0IHZhbHVlcyA9IFtlLnRhcmdldC5kYXRhc2V0LnZhbHVlWzBdLCBlLnRhcmdldC5kYXRhc2V0LnZhbHVlWzJdXTtcblxuICBpZiAoIWJvdE1vdmluZykge1xuICAgIGxldCByZXNwb25zZSA9IGNvbXB1dGVyLnRha2VIaXQocGxheWVyMS5nZXROYW1lKCksIHZhbHVlcyk7XG4gICAgaWYgKHJlc3BvbnNlICE9PSBcIm5vdCBsZWdhbFwiKSB7XG4gICAgICB1cGRhdGVUaWxlQ29sb3IoZS50YXJnZXQsIHJlc3BvbnNlKTtcbiAgICAgIGlmIChyZXNwb25zZSA9PT0gXCJnYW1lIG92ZXJcIikge1xuICAgICAgICBkZWNsYXJlV2lubmVyKHBsYXllcjEpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBzdG9wQW5kTGlzdGVuKHBsYXllcjEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBBZGQgZW5kIHR1cm4gZnVuY3Rpb25cbiAgICAgIGNoYW5nZVR1cm4oKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZSA9IG1vdmVBSShjb21wdXRlciwgcGxheWVyMSk7XG4gICAgICAgIHVwZGF0ZVRpbGVDb2xvcihtb3ZlLnRpbGUsIG1vdmUucmVzcG9uc2UpO1xuICAgICAgICBpZiAobW92ZS5yZXNwb25zZSA9PT0gXCJnYW1lIG92ZXJcIikge1xuICAgICAgICAgIGRlY2xhcmVXaW5uZXIoY29tcHV0ZXIpO1xuICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgc3RvcEFuZExpc3Rlbihjb21wdXRlcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZVR1cm4oKTtcbiAgICAgIH0sIFwiMDAwXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGVjbGFyZVdpbm5lciA9IChwbGF5ZXIpID0+IHtcbiAgd2lubmVyLmNsYXNzTGlzdC5hZGQoXCJkZWNsYXJlZFwiKTtcbiAgd2lubmVyLmlubmVySFRNTCA9IGAke3BsYXllci5nZXROYW1lKCl9IGhhcyB3b24gdGhpcyByb3VuZCFgO1xufTtcblxuY29uc3Qgc3RvcEFuZExpc3RlbiA9IChwbGF5ZXIpID0+IHtcbiAgbGV0IGdhbWVEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGdhbWVEb25lLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgICgpID0+IHtcbiAgICAgIHBsYXllci5lbmRHYW1lKCk7XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApO1xufTtcblxuLy8gVE9ETzogVVBEQVRFIFRJTEUgQ09MT1JTIEFTIFRIRVlSRSBCRUlORyBISVRcbmNvbnN0IHVwZGF0ZVRpbGVDb2xvciA9ICh0aWxlLCByZXNwb25zZSkgPT4ge1xuICBpZiAocmVzcG9uc2UgPT09IFwic2hvdCBtaXNzZWRcIikgdGlsZS5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICBpZiAocmVzcG9uc2UgPT09IFwiaGl0IHRha2VuIVwiIHx8IHJlc3BvbnNlID09PSBcImdhbWUgb3ZlclwiKVxuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbn07XG4iLCJpbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vZG9tc3R1ZmZcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlIHtcbiAgI2hpdCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHJvdywgY29sdW1uKSB7XG4gICAgdGhpcy5jb29yZGluYXRlID0gW3JvdywgY29sdW1uXTtcbiAgICB0aGlzLmZyZWUgPSB0cnVlO1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gIH1cblxuICBpc0hpdCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy4jaGl0O1xuICB9O1xuXG4gIHRha2VIaXQgPSAoKSA9PiB7XG4gICAgdGhpcy4jaGl0ID0gdHJ1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMuc2hpcENvdW50ID0gMDtcbiAgfVxuICBwbGFjZVNoaXAgPSAoc2l6ZSwgW2NvbCwgcm93XSwgaXNIb3Jpem9udGFsKSA9PiB7XG4gICAgLy8gY3JlYXRlIHNoaXBcbiAgICBsZXQgbmV3U2hpcCA9IFNoaXAoc2l6ZSk7XG5cbiAgICAvLyBDaGVjayBpZiBhcmVhIG9jY3VwaWVkIGJ5IG90aGVyIHNoaXBcbiAgICBpZiAoaXNPY2N1cGllZCh0aGlzLmJvYXJkLCBuZXdTaGlwLmdldExlbmd0aCgpLCBbY29sLCByb3ddLCBpc0hvcml6b250YWwpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFyZWEgb2NjdXBpZWRcIik7XG4gICAgICByZXR1cm4gXCJBcmVhIG9jY3VwaWVkXCI7XG4gICAgfVxuXG4gICAgLy8gcHV0IHN0YXJ0IG9mIHNoaXAgb24gY29vcmRpbmF0ZSB0aWxlIGFuZCB1c2Ugc2hpcHMgbGVuZ3RoXG4gICAgLy8gdG8gYWxzbyBwdXQgc2hpcCBvbiB0aWxlcyBmb2xsb3dpbmcgaXRcbiAgICBsZXQgaSA9IDA7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgd2hpbGUgKGkgPCBuZXdTaGlwLmdldExlbmd0aCgpKSB7XG4gICAgICAgIGxldCB0aWxlID0gZmluZFRpbGUodGhpcy5ib2FyZCwgW2NvbCArIGksIHJvd10pO1xuICAgICAgICB0aWxlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChpIDwgbmV3U2hpcC5nZXRMZW5ndGgoKSkge1xuICAgICAgICBsZXQgdGlsZSA9IGZpbmRUaWxlKHRoaXMuYm9hcmQsIFtjb2wsIHJvdyAtIGldKTtcbiAgICAgICAgdGlsZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNoaXBDb3VudCsrO1xuICB9O1xuXG4gIHJlY2VpdmVBdHRhY2sgPSAoZW5lbXksIGNvbCwgcm93KSA9PiB7XG4gICAgbGV0IHRpbGUgPSBmaW5kVGlsZSh0aGlzLmJvYXJkLCBbY29sLCByb3ddKTtcbiAgICBpZiAodGlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk91dCBvZiBib3VuZHNcIik7XG4gICAgICByZXR1cm4gXCJub3QgbGVnYWxcIjtcbiAgICB9XG4gICAgaWYgKHRpbGUuaXNIaXQoKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJBbHJlYWR5IGhpdFwiKTtcbiAgICAgIHJldHVybiBcIm5vdCBsZWdhbFwiO1xuICAgIH1cbiAgICBpZiAoIXRpbGUuc2hpcCkge1xuICAgICAgdGlsZS50YWtlSGl0KCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNob3QgbWlzc2VkIVwiKTtcbiAgICAgIHJldHVybiBcInNob3QgbWlzc2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbGUudGFrZUhpdCgpO1xuICAgICAgdGlsZS5zaGlwLmhpdCgpO1xuICAgICAgaWYgKHRpbGUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICB0aGlzLnNoaXBDb3VudC0tO1xuICAgICAgICBpZiAodGhpcy5zaGlwQ291bnQgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gXCJnYW1lIG92ZXJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGBoaXQgdGFrZW4hYDtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbXTtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBib2FyZC5wdXNoKG5ldyBUaWxlKGNvbCwgcm93KSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib2FyZDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kVGlsZSA9IChib2FyZCwgW2NvbCwgcm93XSkgPT4ge1xuICBmb3IgKGxldCB0aWxlIG9mIGJvYXJkKSB7XG4gICAgaWYgKHRpbGUuY29vcmRpbmF0ZVswXSA9PSBjb2wgJiYgdGlsZS5jb29yZGluYXRlWzFdID09IHJvdykge1xuICAgICAgcmV0dXJuIHRpbGU7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBpc09jY3VwaWVkID0gKGJvYXJkLCBsZW5ndGgsIFtjb2wsIHJvd10sIGlzSG9yaXpvbnRhbCkgPT4ge1xuICAvLyBjaGVjayBpZiBzaGlwIGlzIGFscmVhZHkgdGhlcmVcbiAgbGV0IGkgPSAwO1xuICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJob3Jpem9udGFsXCIpO1xuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICBsZXQgdGlsZSA9IGZpbmRUaWxlKGJvYXJkLCBbY29sICsgaSwgcm93XSk7XG4gICAgICBpZiAodGlsZS5zaGlwKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ2ZXJ0aWNhbFwiKTtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgbGV0IHRpbGUgPSBmaW5kVGlsZShib2FyZCwgW2NvbCwgcm93IC0gaV0pO1xuICAgICAgaWYgKHRpbGUuc2hpcCkgcmV0dXJuIHRydWU7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJpbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vZG9tc3R1ZmZcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuZXhwb3J0IGxldCBib3RNb3ZpbmcgPSBmYWxzZTtcbmxldCB3aW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbm5lclwiKTtcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIGxldCBib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAvLyBDcmVhdGUgZmxlZXQgb2Ygc2hpcHNcbiAgY3JlYXRlRmxlZXQobmFtZSwgYm9hcmQpO1xuXG4gIC8vIFNlbmQgaGl0IGZ1bmN0aW9uXG4gIGNvbnN0IHNlbmRIaXQgPSAoZW5lbXksIFtjb2wsIHJvd10pID0+IHtcbiAgICByZXR1cm4gZW5lbXkudGFrZUhpdChuYW1lLCBbY29sLCByb3ddKTtcbiAgfTtcblxuICAvLyBUYWtlIGhpdCBmdW5jdGlvblxuICBjb25zdCB0YWtlSGl0ID0gKGVuZW15LCBbY29sLCByb3ddKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gYm9hcmQucmVjZWl2ZUF0dGFjayhlbmVteSwgY29sLCByb3cpO1xuICAgIC8vIGxvZ1Jlc3BvbnNlKHJlc3BvbnNlLCBuYW1lLCBlbmVteSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9O1xuXG4gIGNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gICAgcmVuZGVyUGFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgY29uc3QgcmVzdGFydCA9ICgpID0+IHtcbiAgICBib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBjcmVhdGVGbGVldChuYW1lLCBib2FyZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2VuZEhpdCwgdGFrZUhpdCwgZ2V0TmFtZSwgZW5kR2FtZSwgcmVzdGFydCB9O1xufTtcblxuY29uc3QgbG9nUmVzcG9uc2UgPSAocmVzcG9uc2UsIHBsYXllciwgZW5lbXkpID0+IHtcbiAgLy8gY29uc29sZS5sb2coZW5lbXkpO1xuICBpZiAocmVzcG9uc2UgPT09IFwiSGl0IHRha2VuIVwiKSB7XG4gICAgY29uc29sZS5sb2coYCR7ZW5lbXl9IGhhcyBoaXQgJHtwbGF5ZXJ9IGApO1xuICB9XG59O1xuXG4vLyBIYXJkY29kZWQgRmxlZXQgZm9yIG5vd1xuY29uc3QgY3JlYXRlRmxlZXQgPSAobmFtZSwgYm9hcmQpID0+IHtcbiAgbGV0IGNvb3JkaW5hdGVzID0gW1xuICAgIFswLCAwXSxcbiAgICBbOSwgOV0sXG4gICAgWzAsIDhdLFxuICAgIFsxLCA1XSxcbiAgICBbNSwgM10sXG4gIF07XG4gIGxldCBvcmllbnRhdGlvbnMgPSBbdHJ1ZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlXTtcbiAgbGV0IHNpemVzID0gWzUsIDQsIDMsIDIsIDNdO1xuXG4gIGZvciAobGV0IGkgaW4gY29vcmRpbmF0ZXMpIHtcbiAgICBib2FyZC5wbGFjZVNoaXAoc2l6ZXNbaV0sIGNvb3JkaW5hdGVzW2ldLCBvcmllbnRhdGlvbnNbaV0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbW92ZUFJID0gKHBsYXllciwgZW5lbXkpID0+IHtcbiAgLy8ga2VlcCB0cnlpbmcgZm9yIGNvb3JkaW5hdGVzIHVudGlsIHRoZXkgY29tZSBiYWNrIGxlZ2FsXG4gIGxldCBtb3ZlTm90TGVnYWwgPSB0cnVlO1xuICB3aGlsZSAobW92ZU5vdExlZ2FsKSB7XG4gICAgbGV0IG1vdmUgPSBbZ2V0UmFuZG9tSW50KDEwKSwgZ2V0UmFuZG9tSW50KDEwKV07XG4gICAgbGV0IHJlc3BvbnNlID0gcGxheWVyLnNlbmRIaXQoZW5lbXksIG1vdmUpO1xuICAgIGlmIChyZXNwb25zZSAhPT0gXCJub3QgbGVnYWxcIikge1xuICAgICAgbW92ZU5vdExlZ2FsID0gZmFsc2U7XG4gICAgICAvLyBVUERBVEUgRlJJRU5ETFkgQk9BUkQgV0lUSCBDT01QVVRFUidTIE1PVkVcbiAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW92ZSk7XG4gICAgICByZXR1cm4geyB0aWxlLCByZXNwb25zZSB9O1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVR1cm4gPSAoKSA9PiB7XG4gIGJvdE1vdmluZyA9ICFib3RNb3Zpbmc7XG59O1xuXG5jb25zdCBnZXRSYW5kb21JbnQgPSAobWF4KSA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufTtcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgaGl0cyA9IDA7XG4gIGxldCBzdW5rID0gZmFsc2U7XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHN1bms7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzKys7XG4gICAgY29uc29sZS5sb2coXCJTaGlwIGhhcyBiZWVuIGhpdFwiKTtcbiAgICBpZiAoaGl0cyA9PSBnZXRMZW5ndGgoKSkge1xuICAgICAgY29uc29sZS5sb2coXCJTaGlwIHN1bmshISFcIik7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0TGVuZ3RoLCBnZXRIaXRzLCBpc1N1bmssIGhpdCB9O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vYXBwcy9kb21zdHVmZlwiO1xuXG5yZW5kZXJQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=