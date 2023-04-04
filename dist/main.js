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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #f8fafc;\n  --main-letter-color: #000;\n  --line-color: #0c4a6e;\n  --tile-hover-color: #25dbf7c7;\n  --tile-missed-color: #7dd3fc;\n  --tile-hit-color: #ff5454cb;\n}\n\nhtml {\n  font-family: \"Orbitron\", sans-serif;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--main-letter-color);\n\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  height: 3rem;\n  margin-bottom: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh2 {\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-wrap {\n  flex: 0.5;\n  margin-bottom: 20px;\n  width: clamp(300px, 40%, 600px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#winner {\n  border: 1px solid black;\n  padding: 20px 70px;\n  text-align: center;\n}\n\n.declared {\n  background-color: #000;\n  color: white;\n}\n\n.boards {\n  flex: 6;\n  width: 95%;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameboard {\n  padding: 10px;\n}\n\n.player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  margin: 20px;\n  margin-top: 10px;\n\n  height: 20em;\n  width: 20em;\n}\n\n.row {\n  height: 10%;\n\n  display: flex;\n}\n\n.tile {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.tile:hover {\n  background-color: var(--tile-hover-color);\n  border: 1px solid var(--tile-hover-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n.missed {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n}\n\n.missed:hover {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n\n  transition: 0.2s;\n}\n\n.hit {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.hit:hover {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\nfooter {\n  height: 3rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 750px) {\n  #winner {\n    padding: 20px 30px;\n  }\n\n  .boards {\n    flex-direction: column;\n  }\n\n  .board {\n    height: 15em;\n    width: 15em;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;EACrB,6BAA6B;EAC7B,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;EACjC,+BAA+B;;EAE/B,SAAS;EACT,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;;EAEnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,OAAO;;EAEP,aAAa;EACb,sBAAsB;;EAEtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,+BAA+B;;EAE/B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,UAAU;;EAEV,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;;EAEhB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;;EAEX,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,OAAO;EACP,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,yCAAyC;EACzC,eAAe;;EAEf,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;EAC1C,0CAA0C;AAC5C;;AAEA;EACE,0CAA0C;EAC1C,0CAA0C;;EAE1C,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;;EAEvC,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;;EAEvC,gBAAgB;AAClB;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;AACF","sourcesContent":[":root {\n  --bg-color: #f8fafc;\n  --main-letter-color: #000;\n  --line-color: #0c4a6e;\n  --tile-hover-color: #25dbf7c7;\n  --tile-missed-color: #7dd3fc;\n  --tile-hit-color: #ff5454cb;\n}\n\nhtml {\n  font-family: \"Orbitron\", sans-serif;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--main-letter-color);\n\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  height: 3rem;\n  margin-bottom: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh2 {\n  font-weight: 400;\n  letter-spacing: 2px;\n}\n\nmain {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-wrap {\n  flex: 0.5;\n  margin-bottom: 20px;\n  width: clamp(300px, 40%, 600px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#winner {\n  border: 1px solid black;\n  padding: 20px 70px;\n  text-align: center;\n}\n\n.declared {\n  background-color: #000;\n  color: white;\n}\n\n.boards {\n  flex: 6;\n  width: 95%;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameboard {\n  padding: 10px;\n}\n\n.player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  margin: 20px;\n  margin-top: 10px;\n\n  height: 20em;\n  width: 20em;\n}\n\n.row {\n  height: 10%;\n\n  display: flex;\n}\n\n.tile {\n  border: 1px solid var(--line-color);\n  background-color: #fff;\n  flex: 1;\n  margin: 2px;\n  transition: 0.2s;\n}\n\n.tile:hover {\n  background-color: var(--tile-hover-color);\n  border: 1px solid var(--tile-hover-color);\n  cursor: pointer;\n\n  transition: 0.2s;\n}\n\n.missed {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n}\n\n.missed:hover {\n  background-color: var(--tile-missed-color);\n  border: 1px solid var(--tile-missed-color);\n\n  transition: 0.2s;\n}\n\n.hit {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\n.hit:hover {\n  background-color: var(--tile-hit-color);\n  border: 1px solid var(--tile-hit-color);\n\n  transition: 0.2s;\n}\n\nfooter {\n  height: 3rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media only screen and (max-width: 750px) {\n  #winner {\n    padding: 20px 30px;\n  }\n\n  .boards {\n    flex-direction: column;\n  }\n\n  .board {\n    height: 15em;\n    width: 15em;\n  }\n}\n"],"sourceRoot":""}]);
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

let player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)("You");
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
  player.getName() === "Computer"
    ? (winner.innerHTML = `${player.getName()}  wins this round!`)
    : (winner.innerHTML = `${player.getName()}  win this round!`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3Qjs7QUFFN0MsMERBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwcy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHBzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmctY29sb3I6ICNmOGZhZmM7XFxuICAtLW1haW4tbGV0dGVyLWNvbG9yOiAjMDAwO1xcbiAgLS1saW5lLWNvbG9yOiAjMGM0YTZlO1xcbiAgLS10aWxlLWhvdmVyLWNvbG9yOiAjMjVkYmY3Yzc7XFxuICAtLXRpbGUtbWlzc2VkLWNvbG9yOiAjN2RkM2ZjO1xcbiAgLS10aWxlLWhpdC1jb2xvcjogI2ZmNTQ1NGNiO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWxldHRlci1jb2xvcik7XFxuXFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2lubmVyLXdyYXAge1xcbiAgZmxleDogMC41O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNDAlLCA2MDBweCk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jd2lubmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMjBweCA3MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGVjbGFyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICBmbGV4OiA2O1xcbiAgd2lkdGg6IDk1JTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG4gIGhlaWdodDogMjBlbTtcXG4gIHdpZHRoOiAyMGVtO1xcbn1cXG5cXG4ucm93IHtcXG4gIGhlaWdodDogMTAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRpbGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbjogMnB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnRpbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlci1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLWhvdmVyLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzZWQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1taXNzZWQtY29sb3IpO1xcbn1cXG5cXG4ubWlzc2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmhpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLWhpdC1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgI3dpbm5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIH1cXG5cXG4gIC5ib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgaGVpZ2h0OiAxNWVtO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLCtCQUErQjs7RUFFL0IsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTzs7RUFFUCxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQiwrQkFBK0I7O0VBRS9CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLFVBQVU7O0VBRVYsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7O0VBRWhCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMseUNBQXlDO0VBQ3pDLGVBQWU7O0VBRWYsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQywwQ0FBMEM7O0VBRTFDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx1Q0FBdUM7O0VBRXZDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx1Q0FBdUM7O0VBRXZDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjZjhmYWZjO1xcbiAgLS1tYWluLWxldHRlci1jb2xvcjogIzAwMDtcXG4gIC0tbGluZS1jb2xvcjogIzBjNGE2ZTtcXG4gIC0tdGlsZS1ob3Zlci1jb2xvcjogIzI1ZGJmN2M3O1xcbiAgLS10aWxlLW1pc3NlZC1jb2xvcjogIzdkZDNmYztcXG4gIC0tdGlsZS1oaXQtY29sb3I6ICNmZjU0NTRjYjtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1sZXR0ZXItY29sb3IpO1xcblxcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndpbm5lci13cmFwIHtcXG4gIGZsZXg6IDAuNTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDQwJSwgNjAwcHgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3dpbm5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlY2xhcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgZmxleDogNjtcXG4gIHdpZHRoOiA5NSU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICBoZWlnaHQ6IDIwZW07XFxuICB3aWR0aDogMjBlbTtcXG59XFxuXFxuLnJvdyB7XFxuICBoZWlnaHQ6IDEwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDJweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi50aWxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXItY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1ob3Zlci1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG59XFxuXFxuLm1pc3NlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLW1pc3NlZC1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtaGl0LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5oaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGlsZS1oaXQtY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogM3JlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICN3aW5uZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICB9XFxuXFxuICAuYm9hcmRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5ib2FyZCB7XFxuICAgIGhlaWdodDogMTVlbTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQbGF5ZXIsIG1vdmVBSSwgYm90TW92aW5nLCBjaGFuZ2VUdXJuIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5sZXQgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5uZXJcIik7XG5cbmxldCBwbGF5ZXIxID0gUGxheWVyKFwiWW91XCIpO1xubGV0IGNvbXB1dGVyID0gUGxheWVyKFwiQ29tcHV0ZXJcIik7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICBwbGF5ZXIxLnJlc3RhcnQoKTtcbiAgY29tcHV0ZXIucmVzdGFydCgpO1xuICBjcmVhdGVCb2FyZHMoKTtcbiAgd2lubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWNsYXJlZFwiKTtcbiAgd2lubmVyLmlubmVySFRNTCA9IFwiR29kIHNwZWVkLCBDYXB0YWluXCI7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQm9hcmRzID0gKCkgPT4ge1xuICBjb25zdCBmcmllbmRseUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mcmllbmRseS5ib2FyZFwiKTtcbiAgY29uc3QgZW5lbXlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5lbXkuYm9hcmRcIik7XG5cbiAgcmVuZGVyQm9hcmQocGxheWVyMSwgY29tcHV0ZXIsIGZyaWVuZGx5Qm9hcmQpO1xuICByZW5kZXJCb2FyZChjb21wdXRlciwgcGxheWVyMSwgZW5lbXlCb2FyZCk7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZCA9IChwbGF5ZXIsIGVuZW15LCBib2FyZCkgPT4ge1xuICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGZvciAobGV0IHIgPSA5OyByID49IDA7IHItLSkge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJ0aWxlXCIpO1xuXG4gICAgICAvLyBBZGQgdGhpcyB0byBtYXRjaCB3aXRoIHRpbGUgb2JqZWN0c1xuICAgICAgdGlsZS5kYXRhc2V0LnZhbHVlID0gW2NvbCwgcl07XG5cbiAgICAgIGlmIChwbGF5ZXIuZ2V0TmFtZSgpID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICAgICAgdGlsZS5vbmNsaWNrID0gdGFrZVR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlLmlkID0gW2NvbCwgcl07XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKHRpbGUpO1xuICAgIH1cbiAgICBib2FyZC5hcHBlbmQocm93KTtcbiAgfVxuICByZXR1cm4gYm9hcmQ7XG59O1xuXG5jb25zdCB0YWtlVHVybiA9IChlKSA9PiB7XG4gIGxldCB2YWx1ZXMgPSBbZS50YXJnZXQuZGF0YXNldC52YWx1ZVswXSwgZS50YXJnZXQuZGF0YXNldC52YWx1ZVsyXV07XG5cbiAgaWYgKCFib3RNb3ZpbmcpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBjb21wdXRlci50YWtlSGl0KHBsYXllcjEuZ2V0TmFtZSgpLCB2YWx1ZXMpO1xuICAgIGlmIChyZXNwb25zZSAhPT0gXCJub3QgbGVnYWxcIikge1xuICAgICAgdXBkYXRlVGlsZUNvbG9yKGUudGFyZ2V0LCByZXNwb25zZSk7XG4gICAgICBpZiAocmVzcG9uc2UgPT09IFwiZ2FtZSBvdmVyXCIpIHtcbiAgICAgICAgZGVjbGFyZVdpbm5lcihwbGF5ZXIxKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgc3RvcEFuZExpc3RlbihwbGF5ZXIxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQWRkIGVuZCB0dXJuIGZ1bmN0aW9uXG4gICAgICBjaGFuZ2VUdXJuKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IG1vdmUgPSBtb3ZlQUkoY29tcHV0ZXIsIHBsYXllcjEpO1xuICAgICAgICB1cGRhdGVUaWxlQ29sb3IobW92ZS50aWxlLCBtb3ZlLnJlc3BvbnNlKTtcbiAgICAgICAgaWYgKG1vdmUucmVzcG9uc2UgPT09IFwiZ2FtZSBvdmVyXCIpIHtcbiAgICAgICAgICBkZWNsYXJlV2lubmVyKGNvbXB1dGVyKTtcbiAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHN0b3BBbmRMaXN0ZW4oY29tcHV0ZXIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VUdXJuKCk7XG4gICAgICB9LCBcIjAwMFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRlY2xhcmVXaW5uZXIgPSAocGxheWVyKSA9PiB7XG4gIHdpbm5lci5jbGFzc0xpc3QuYWRkKFwiZGVjbGFyZWRcIik7XG4gIHBsYXllci5nZXROYW1lKCkgPT09IFwiQ29tcHV0ZXJcIlxuICAgID8gKHdpbm5lci5pbm5lckhUTUwgPSBgJHtwbGF5ZXIuZ2V0TmFtZSgpfSAgd2lucyB0aGlzIHJvdW5kIWApXG4gICAgOiAod2lubmVyLmlubmVySFRNTCA9IGAke3BsYXllci5nZXROYW1lKCl9ICB3aW4gdGhpcyByb3VuZCFgKTtcbn07XG5cbmNvbnN0IHN0b3BBbmRMaXN0ZW4gPSAocGxheWVyKSA9PiB7XG4gIGxldCBnYW1lRG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBnYW1lRG9uZS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICAoKSA9PiB7XG4gICAgICBwbGF5ZXIuZW5kR2FtZSgpO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH1cbiAgKTtcbn07XG5cbi8vIFRPRE86IFVQREFURSBUSUxFIENPTE9SUyBBUyBUSEVZUkUgQkVJTkcgSElUXG5jb25zdCB1cGRhdGVUaWxlQ29sb3IgPSAodGlsZSwgcmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlc3BvbnNlID09PSBcInNob3QgbWlzc2VkXCIpIHRpbGUuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgaWYgKHJlc3BvbnNlID09PSBcImhpdCB0YWtlbiFcIiB8fCByZXNwb25zZSA9PT0gXCJnYW1lIG92ZXJcIilcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL2RvbXN0dWZmXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgVGlsZSB7XG4gICNoaXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihyb3csIGNvbHVtbikge1xuICAgIHRoaXMuY29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl07XG4gICAgdGhpcy5mcmVlID0gdHJ1ZTtcbiAgICB0aGlzLnNoaXAgPSBudWxsO1xuICB9XG5cbiAgaXNIaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdDtcbiAgfTtcblxuICB0YWtlSGl0ID0gKCkgPT4ge1xuICAgIHRoaXMuI2hpdCA9IHRydWU7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLnNoaXBDb3VudCA9IDA7XG4gIH1cbiAgcGxhY2VTaGlwID0gKHNpemUsIFtjb2wsIHJvd10sIGlzSG9yaXpvbnRhbCkgPT4ge1xuICAgIC8vIGNyZWF0ZSBzaGlwXG4gICAgbGV0IG5ld1NoaXAgPSBTaGlwKHNpemUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYXJlYSBvY2N1cGllZCBieSBvdGhlciBzaGlwXG4gICAgaWYgKGlzT2NjdXBpZWQodGhpcy5ib2FyZCwgbmV3U2hpcC5nZXRMZW5ndGgoKSwgW2NvbCwgcm93XSwgaXNIb3Jpem9udGFsKSkge1xuICAgICAgY29uc29sZS5sb2coXCJBcmVhIG9jY3VwaWVkXCIpO1xuICAgICAgcmV0dXJuIFwiQXJlYSBvY2N1cGllZFwiO1xuICAgIH1cblxuICAgIC8vIHB1dCBzdGFydCBvZiBzaGlwIG9uIGNvb3JkaW5hdGUgdGlsZSBhbmQgdXNlIHNoaXBzIGxlbmd0aFxuICAgIC8vIHRvIGFsc28gcHV0IHNoaXAgb24gdGlsZXMgZm9sbG93aW5nIGl0XG4gICAgbGV0IGkgPSAwO1xuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIHdoaWxlIChpIDwgbmV3U2hpcC5nZXRMZW5ndGgoKSkge1xuICAgICAgICBsZXQgdGlsZSA9IGZpbmRUaWxlKHRoaXMuYm9hcmQsIFtjb2wgKyBpLCByb3ddKTtcbiAgICAgICAgdGlsZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoaSA8IG5ld1NoaXAuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgICAgbGV0IHRpbGUgPSBmaW5kVGlsZSh0aGlzLmJvYXJkLCBbY29sLCByb3cgLSBpXSk7XG4gICAgICAgIHRpbGUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zaGlwQ291bnQrKztcbiAgfTtcblxuICByZWNlaXZlQXR0YWNrID0gKGVuZW15LCBjb2wsIHJvdykgPT4ge1xuICAgIGxldCB0aWxlID0gZmluZFRpbGUodGhpcy5ib2FyZCwgW2NvbCwgcm93XSk7XG4gICAgaWYgKHRpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJPdXQgb2YgYm91bmRzXCIpO1xuICAgICAgcmV0dXJuIFwibm90IGxlZ2FsXCI7XG4gICAgfVxuICAgIGlmICh0aWxlLmlzSGl0KCkpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBoaXRcIik7XG4gICAgICByZXR1cm4gXCJub3QgbGVnYWxcIjtcbiAgICB9XG4gICAgaWYgKCF0aWxlLnNoaXApIHtcbiAgICAgIHRpbGUudGFrZUhpdCgpO1xuICAgICAgY29uc29sZS5sb2coXCJTaG90IG1pc3NlZCFcIik7XG4gICAgICByZXR1cm4gXCJzaG90IG1pc3NlZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWxlLnRha2VIaXQoKTtcbiAgICAgIHRpbGUuc2hpcC5oaXQoKTtcbiAgICAgIGlmICh0aWxlLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgdGhpcy5zaGlwQ291bnQtLTtcbiAgICAgICAgaWYgKHRoaXMuc2hpcENvdW50ID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIFwiZ2FtZSBvdmVyXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBgaGl0IHRha2VuIWA7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgbGV0IGJvYXJkID0gW107XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgYm9hcmQucHVzaChuZXcgVGlsZShjb2wsIHJvdykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm9hcmQ7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZFRpbGUgPSAoYm9hcmQsIFtjb2wsIHJvd10pID0+IHtcbiAgZm9yIChsZXQgdGlsZSBvZiBib2FyZCkge1xuICAgIGlmICh0aWxlLmNvb3JkaW5hdGVbMF0gPT0gY29sICYmIHRpbGUuY29vcmRpbmF0ZVsxXSA9PSByb3cpIHtcbiAgICAgIHJldHVybiB0aWxlO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaXNPY2N1cGllZCA9IChib2FyZCwgbGVuZ3RoLCBbY29sLCByb3ddLCBpc0hvcml6b250YWwpID0+IHtcbiAgLy8gY2hlY2sgaWYgc2hpcCBpcyBhbHJlYWR5IHRoZXJlXG4gIGxldCBpID0gMDtcbiAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaG9yaXpvbnRhbFwiKTtcbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgbGV0IHRpbGUgPSBmaW5kVGlsZShib2FyZCwgW2NvbCArIGksIHJvd10pO1xuICAgICAgaWYgKHRpbGUuc2hpcCkgcmV0dXJuIHRydWU7XG4gICAgICBpKys7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGNvbnNvbGUubG9nKFwidmVydGljYWxcIik7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIGxldCB0aWxlID0gZmluZFRpbGUoYm9hcmQsIFtjb2wsIHJvdyAtIGldKTtcbiAgICAgIGlmICh0aWxlLnNoaXApIHJldHVybiB0cnVlO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL2RvbXN0dWZmXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmV4cG9ydCBsZXQgYm90TW92aW5nID0gZmFsc2U7XG5sZXQgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5uZXJcIik7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBsZXQgYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgLy8gQ3JlYXRlIGZsZWV0IG9mIHNoaXBzXG4gIGNyZWF0ZUZsZWV0KG5hbWUsIGJvYXJkKTtcblxuICAvLyBTZW5kIGhpdCBmdW5jdGlvblxuICBjb25zdCBzZW5kSGl0ID0gKGVuZW15LCBbY29sLCByb3ddKSA9PiB7XG4gICAgcmV0dXJuIGVuZW15LnRha2VIaXQobmFtZSwgW2NvbCwgcm93XSk7XG4gIH07XG5cbiAgLy8gVGFrZSBoaXQgZnVuY3Rpb25cbiAgY29uc3QgdGFrZUhpdCA9IChlbmVteSwgW2NvbCwgcm93XSkgPT4ge1xuICAgIGxldCByZXNwb25zZSA9IGJvYXJkLnJlY2VpdmVBdHRhY2soZW5lbXksIGNvbCwgcm93KTtcbiAgICAvLyBsb2dSZXNwb25zZShyZXNwb25zZSwgbmFtZSwgZW5lbXkpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfTtcblxuICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICAgIHJlbmRlclBhZ2UoKTtcbiAgfTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuXG4gIGNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgY3JlYXRlRmxlZXQobmFtZSwgYm9hcmQpO1xuICB9O1xuXG4gIHJldHVybiB7IHNlbmRIaXQsIHRha2VIaXQsIGdldE5hbWUsIGVuZEdhbWUsIHJlc3RhcnQgfTtcbn07XG5cbmNvbnN0IGxvZ1Jlc3BvbnNlID0gKHJlc3BvbnNlLCBwbGF5ZXIsIGVuZW15KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGVuZW15KTtcbiAgaWYgKHJlc3BvbnNlID09PSBcIkhpdCB0YWtlbiFcIikge1xuICAgIGNvbnNvbGUubG9nKGAke2VuZW15fSBoYXMgaGl0ICR7cGxheWVyfSBgKTtcbiAgfVxufTtcblxuLy8gSGFyZGNvZGVkIEZsZWV0IGZvciBub3dcbmNvbnN0IGNyZWF0ZUZsZWV0ID0gKG5hbWUsIGJvYXJkKSA9PiB7XG4gIGxldCBjb29yZGluYXRlcyA9IFtcbiAgICBbMCwgMF0sXG4gICAgWzksIDldLFxuICAgIFswLCA4XSxcbiAgICBbMSwgNV0sXG4gICAgWzUsIDNdLFxuICBdO1xuICBsZXQgb3JpZW50YXRpb25zID0gW3RydWUsIGZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZV07XG4gIGxldCBzaXplcyA9IFs1LCA0LCAzLCAyLCAzXTtcblxuICBmb3IgKGxldCBpIGluIGNvb3JkaW5hdGVzKSB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNpemVzW2ldLCBjb29yZGluYXRlc1tpXSwgb3JpZW50YXRpb25zW2ldKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1vdmVBSSA9IChwbGF5ZXIsIGVuZW15KSA9PiB7XG4gIC8vIGtlZXAgdHJ5aW5nIGZvciBjb29yZGluYXRlcyB1bnRpbCB0aGV5IGNvbWUgYmFjayBsZWdhbFxuICBsZXQgbW92ZU5vdExlZ2FsID0gdHJ1ZTtcbiAgd2hpbGUgKG1vdmVOb3RMZWdhbCkge1xuICAgIGxldCBtb3ZlID0gW2dldFJhbmRvbUludCgxMCksIGdldFJhbmRvbUludCgxMCldO1xuICAgIGxldCByZXNwb25zZSA9IHBsYXllci5zZW5kSGl0KGVuZW15LCBtb3ZlKTtcbiAgICBpZiAocmVzcG9uc2UgIT09IFwibm90IGxlZ2FsXCIpIHtcbiAgICAgIG1vdmVOb3RMZWdhbCA9IGZhbHNlO1xuICAgICAgLy8gVVBEQVRFIEZSSUVORExZIEJPQVJEIFdJVEggQ09NUFVURVInUyBNT1ZFXG4gICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vdmUpO1xuICAgICAgcmV0dXJuIHsgdGlsZSwgcmVzcG9uc2UgfTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VUdXJuID0gKCkgPT4ge1xuICBib3RNb3ZpbmcgPSAhYm90TW92aW5nO1xufTtcblxuY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn07XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IGhpdHMgPSAwO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cysrO1xuICAgIGNvbnNvbGUubG9nKFwiU2hpcCBoYXMgYmVlbiBoaXRcIik7XG4gICAgaWYgKGhpdHMgPT0gZ2V0TGVuZ3RoKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2hpcCBzdW5rISEhXCIpO1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldExlbmd0aCwgZ2V0SGl0cywgaXNTdW5rLCBoaXQgfTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL2FwcHMvZG9tc3R1ZmZcIjtcblxucmVuZGVyUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9