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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./mrssaintdelafield-regular-webfont.woff */ "./src/mrssaintdelafield-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./mrssaintdelafield-regular-webfont.woff2 */ "./src/mrssaintdelafield-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./food.png */ "./src/food.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MSD\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 100;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, Arial, Helvetica, sans-serif;\n}\n\nbody {\n  background-color: black;\n  color: rgb(215, 215, 215);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n#content {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  margin: 5% 15%;\n}\n\n#top {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  height: 11rem;\n}\n\nheader {\n  color: white;\n}\n\nheader > h1 {\n  font-family: MSD;\n  font-size: 2.5rem;\n}\n\nnav {\n  display: flex;\n  justify-content: space-evenly;\n}\n\nnav div {\n  font-size: 1.2rem;\n  padding: 1rem;\n}\n\nnav div:hover,\n.selected {\n  border-bottom: 0.1rem solid white;\n  color: white;\n}\n\nmain {\n  flex-grow: 1;\n}\n\n#bottom {\n  justify-content: flex-end;\n  font-size: 0.8rem;\n  padding: 1rem;\n}\n\n#top,\n#content,\n#bottom {\n  flex-shrink: 0;\n}\n\n#top,\n#home,\n#menu,\n#contact,\n#bottom {\n  background-color: rgb(0, 0, 0, 0.7);\n}\n\n#contact ul {\n  text-align: left;\n}\n\n#home,\n#menu,\n#contact {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 5% 7%;\n  border-radius: 1rem;\n  align-items: center;\n}\n\n#home,\n#contact {\n  line-height: 1.5;\n}\n\n#menu {\n  line-height: 2;\n}\n\n#home img {\n  width: 40%;\n  min-width: 150px;\n  max-width: 600px;\n  align-self: center;\n  margin: 1rem;\n  border-radius: 50%;\n}\n\n#name {\n  font-style: italic;\n  font-weight: bold;\n}\n\n#come-msg {\n  font-size: 1.2rem;\n}\n\nul {\n  list-style: none;\n}\n\n#menu-text > ul > li {\n  margin-bottom: 1rem;\n}\n\n#menu-content {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n\n#menu-image {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n#menu-image > img {\n  height: 7rem;\n  border-radius: 0.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB;2CACkD;EAClD,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,4EAA4E;AAC9E;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,yDAAmC;EACnC,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf;;AAEA;;EAEE,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;AACf;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;;;;;EAKE,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,cAAc;EACd,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB","sourcesContent":["@font-face {\n  font-family: \"MSD\";\n  src: url(\"./mrssaintdelafield-regular-webfont.woff\"),\n    url(\"./mrssaintdelafield-regular-webfont.woff2\");\n  font-weight: 100;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, Arial, Helvetica, sans-serif;\n}\n\nbody {\n  background-color: black;\n  color: rgb(215, 215, 215);\n  background-image: url(\"./food.png\");\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n#content {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  margin: 5% 15%;\n}\n\n#top {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  height: 11rem;\n}\n\nheader {\n  color: white;\n}\n\nheader > h1 {\n  font-family: MSD;\n  font-size: 2.5rem;\n}\n\nnav {\n  display: flex;\n  justify-content: space-evenly;\n}\n\nnav div {\n  font-size: 1.2rem;\n  padding: 1rem;\n}\n\nnav div:hover,\n.selected {\n  border-bottom: 0.1rem solid white;\n  color: white;\n}\n\nmain {\n  flex-grow: 1;\n}\n\n#bottom {\n  justify-content: flex-end;\n  font-size: 0.8rem;\n  padding: 1rem;\n}\n\n#top,\n#content,\n#bottom {\n  flex-shrink: 0;\n}\n\n#top,\n#home,\n#menu,\n#contact,\n#bottom {\n  background-color: rgb(0, 0, 0, 0.7);\n}\n\n#contact ul {\n  text-align: left;\n}\n\n#home,\n#menu,\n#contact {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 5% 7%;\n  border-radius: 1rem;\n  align-items: center;\n}\n\n#home,\n#contact {\n  line-height: 1.5;\n}\n\n#menu {\n  line-height: 2;\n}\n\n#home img {\n  width: 40%;\n  min-width: 150px;\n  max-width: 600px;\n  align-self: center;\n  margin: 1rem;\n  border-radius: 50%;\n}\n\n#name {\n  font-style: italic;\n  font-weight: bold;\n}\n\n#come-msg {\n  font-size: 1.2rem;\n}\n\nul {\n  list-style: none;\n}\n\n#menu-text > ul > li {\n  margin-bottom: 1rem;\n}\n\n#menu-content {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n\n#menu-image {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n#menu-image > img {\n  height: 7rem;\n  border-radius: 0.2rem;\n}\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
const createContact = (mainElem) => {
  let contact = document.createElement("section");
  contact.id = "contact";
  mainElem.appendChild(contact);

  const contactElem = document.querySelector("#contact");
  let contactHeader = document.createElement("h2");
  contactHeader.textContent = "Contact Us";
  contactElem.appendChild(contactHeader);

  let contactP = document.createElement("p");
  contactP.textContent =
    "Contact us for any questions or to make a reservation.";
  contactElem.appendChild(contactP);

  createContactInfo(contactElem);
};

const createContactInfo = (contactElem) => {
  let info = document.createElement("ul");
  info.id = "contact-info";
  contactElem.appendChild(info);

  const infoElem = document.querySelector("#contact-info");
  let infoContent = [
    "Phone: 555-555-5555",
    "Email: gourmetsdelight@email.com",
    "Address: 123 Main St, Anytown Canada",
  ];
  for (let i = 0; i < infoContent.length; i++) {
    let li = document.createElement("li");
    li.textContent = infoContent[i];
    infoElem.appendChild(li);
  }
};




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef.png */ "./src/chef.png");


const createHome = (mainElem) => {
  let home = document.createElement("section");
  home.id = "home";
  mainElem.appendChild(home);

  const homeElem = document.querySelector("#home");
  createHomeContent(homeElem);
};

const createHomeContent = (homeElem) => {
  let homeHeader = document.createElement("h2");
  homeHeader.textContent = "About Us";

  let span = document.createElement("span");
  span.textContent = "The Gourmet's Delight";
  span.id = "name";

  let p1 = document.createElement("p");
  p1.textContent = "Welcome to ";
  p1.appendChild(span);
  p1.append(
    ", a cozy and intimate French bistro located " +
      "in the heart of downtown. Our menu is inspired " +
      "by classic French cuisine, featuring dishes made " +
      "with only the freshest and highest-quality ingredients."
  );

  const chef = new Image();
  chef.src = _chef_png__WEBPACK_IMPORTED_MODULE_0__;
  chef.alt = "Adam Smith: Our head chef";

  let p2 = document.createElement("p");
  p2.textContent = "Come on down for some delicious cuisine!";
  p2.id = "come-msg";

  homeElem.appendChild(homeHeader);
  homeElem.appendChild(p1);
  homeElem.appendChild(chef);
  homeElem.appendChild(p2);
};




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _food1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food1.png */ "./src/food1.png");
/* harmony import */ var _food2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food2.png */ "./src/food2.png");
/* harmony import */ var _food3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food3.png */ "./src/food3.png");
/* harmony import */ var _food4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food4.png */ "./src/food4.png");





const createMenu = (mainElem) => {
  let menu = document.createElement("section");
  menu.id = "menu";
  mainElem.appendChild(menu);

  const menuElem = document.querySelector("#menu");
  createMenuHeader(menuElem);
  createMenuContent(menuElem);
};

const createMenuHeader = (menuElem) => {
  let menuHeader = document.createElement("h2");
  menuHeader.textContent = "Dinner Menu";
  menuElem.appendChild(menuHeader);
};

const createMenuContent = (menuElem) => {
  let menuContent = document.createElement("div");
  menuContent.id = "menu-content";
  menuElem.appendChild(menuContent);

  const menuContentElem = document.querySelector("#menu-content");
  let menuText = document.createElement("div");
  menuText.id = "menu-text";
  menuContentElem.appendChild(menuText);

  const menuTextElem = document.querySelector("#menu-text");
  createMenuText(menuTextElem);

  let menuImage = document.createElement("div");
  menuImage.id = "menu-image";
  menuContentElem.appendChild(menuImage);

  const menuImageElem = document.querySelector("#menu-image");
  createMenuImage(menuImageElem);
};

const createMenuText = (menuTextElem) => {
  let menuList = document.createElement("ul");
  menuTextElem.appendChild(menuList);

  const menuListElem = document.querySelector("#menu ul");
  let titleArr = ["Appetizers", "Salads", "Entrees", "Desserts"];
  let contentArr = [
    [
      { dish: "Fried Calamari", price: 8 },
      { dish: "Bruschetta", price: 7 },
      { dish: "Crab Cakes", price: 12 },
    ],
    [
      { dish: "Caprese Salad", price: 8 },
      { dish: "Greek Salad", price: 9 },
      { dish: "Spinach Salad", price: 10 },
    ],
    [
      { dish: "Filet Mignon", price: 25 },
      { dish: "Lobster Tail", price: 35 },
      { dish: "Pesto Chicken", price: 20 },
      { dish: "Eggplant Parmesan", price: 18 },
    ],
    [
      { dish: "Chocolate Mousse", price: 7 },
      { dish: "Crème Brulee", price: 8 },
      { dish: "Tiramisu", price: 6 },
    ],
  ];

  for (let i = 0; i < titleArr.length; i++) {
    createMenuList(menuListElem, i, titleArr[i], contentArr[i]);
  }
};

const createMenuList = (menuListElem, index, title, content) => {
  let li = document.createElement("li");
  menuListElem.appendChild(li);
  const liElem = document.querySelector(
    `#menu-text>ul>li:nth-child(${index + 1})`
  );

  let liHeader = document.createElement("h3");
  liHeader.textContent = title;
  liElem.appendChild(liHeader);

  let innerList = document.createElement("ul");
  liElem.appendChild(innerList);

  const innerListElem = document.querySelector(
    `#menu-text>ul>li:nth-child(${index + 1})>ul`
  );
  for (let i = 0; i < content.length; i++) {
    let innerLi = document.createElement("li");
    innerLi.textContent = `${content[i].dish} - $${content[i].price}`;
    innerListElem.appendChild(innerLi);
  }
};

const createMenuImage = (menuImageElem) => {
  const food1 = new Image();
  food1.src = _food1_png__WEBPACK_IMPORTED_MODULE_0__;
  food1.alt = "Fried Calamri";
  const food2 = new Image();
  food2.src = _food2_png__WEBPACK_IMPORTED_MODULE_1__;
  food2.alt = "Greek Salad";
  const food3 = new Image();
  food3.src = _food3_png__WEBPACK_IMPORTED_MODULE_2__;
  food3.alt = "Lobster Tail";
  const food4 = new Image();
  food4.src = _food4_png__WEBPACK_IMPORTED_MODULE_3__;
  food4.alt = "Crème Brulee";
  menuImageElem.appendChild(food1);
  menuImageElem.appendChild(food2);
  menuImageElem.appendChild(food3);
  menuImageElem.appendChild(food4);
};




/***/ }),

/***/ "./src/chef.png":
/*!**********************!*\
  !*** ./src/chef.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f9d28c66ade7c1cea11.png";

/***/ }),

/***/ "./src/food.png":
/*!**********************!*\
  !*** ./src/food.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fa48a6812fb1eb608c0.png";

/***/ }),

/***/ "./src/food1.png":
/*!***********************!*\
  !*** ./src/food1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad2a70b0435c419352ad.png";

/***/ }),

/***/ "./src/food2.png":
/*!***********************!*\
  !*** ./src/food2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f993af4fd0c050f97f77.png";

/***/ }),

/***/ "./src/food3.png":
/*!***********************!*\
  !*** ./src/food3.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a93f50b7b9277ffff9d8.png";

/***/ }),

/***/ "./src/food4.png":
/*!***********************!*\
  !*** ./src/food4.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a4705bfcd4677cedf23.png";

/***/ }),

/***/ "./src/mrssaintdelafield-regular-webfont.woff":
/*!****************************************************!*\
  !*** ./src/mrssaintdelafield-regular-webfont.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1de2eb297e4acf69af91.woff";

/***/ }),

/***/ "./src/mrssaintdelafield-regular-webfont.woff2":
/*!*****************************************************!*\
  !*** ./src/mrssaintdelafield-regular-webfont.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "746d1a3cbfe9573147ce.woff2";

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
/******/ 				scriptUrl = document.currentScript.src
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





function createHeader() {
  const topDiv = document.querySelector("#top");
  let header = document.createElement("header");
  topDiv.appendChild(header);

  const headerElem = document.querySelector("header");
  let title = document.createElement("h1");
  title.textContent = "The Gourmet's Delight";
  headerElem.appendChild(title);
}

function createNav() {
  const topDiv = document.querySelector("#top");
  let nav = document.createElement("nav");
  topDiv.appendChild(nav);

  const navElem = document.querySelector("nav");
  createNavDivs(navElem);
}

function createNavDivs(navElem) {
  let navsArr = [
    { name: "home", text: "Home" },
    { name: "menu", text: "Menu" },
    { name: "contact", text: "Contact Us" },
  ];

  for (let i = 0; i < navsArr.length; i++) {
    let div = document.createElement("div");
    div.id = `${navsArr[i].name}-nav`;
    div.textContent = navsArr[i].text;
    navElem.appendChild(div);
  }

  const homeNav = document.querySelector("#home-nav");
  homeNav.classList.add("selected");
}

function createMain() {
  const contentDiv = document.querySelector("#content");
  let main = document.createElement("main");
  contentDiv.appendChild(main);

  const mainElem = document.querySelector("main");
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)(mainElem);
}

function CreateFooter() {
  const bottomDiv = document.querySelector("#bottom");
  let footer = document.createElement("footer");
  bottomDiv.appendChild(footer);

  const footerElem = document.querySelector("footer");
  let p = document.createElement("p");
  p.textContent = `Copyright \u00A9 2023 Tiffany Chan`;
  footerElem.appendChild(p);
}

function tabSwitch() {
  const main = document.querySelector("main");
  const home = document.querySelector("#home-nav");
  const menu = document.querySelector("#menu-nav");
  const contact = document.querySelector("#contact-nav");

  let funcArr = [_home__WEBPACK_IMPORTED_MODULE_0__.createHome, _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu, _contact__WEBPACK_IMPORTED_MODULE_2__.createContact];
  let tabArr = [home, menu, contact];

  for (let i = 0; i < funcArr.length; i++) {
    tabArr[i].addEventListener("click", () => {
      main.textContent = "";
      funcArr[i](main);
      for (let tab of tabArr) {
        if (tab === tabArr[i]) {
          tab.classList.toggle("selected", true);
        } else {
          tab.classList.toggle("selected", false);
        }
      }
    });
  }
}

createHeader();
createNav();
createMain();
CreateFooter();
tabSwitch();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbXJzc2FpbnRkZWxhZmllbGQtcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL21yc3NhaW50ZGVsYWZpZWxkLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9vZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNU0RcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogNSUgMTUlO1xcbn1cXG5cXG4jdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGhlaWdodDogMTFyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gIGZvbnQtZmFtaWx5OiBNU0Q7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxubmF2IGRpdiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbm5hdiBkaXY6aG92ZXIsXFxuLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNib3R0b20ge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI3RvcCxcXG4jY29udGVudCxcXG4jYm90dG9tIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4jdG9wLFxcbiNob21lLFxcbiNtZW51LFxcbiNjb250YWN0LFxcbiNib3R0b20ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbiNjb250YWN0IHVsIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNob21lLFxcbiNtZW51LFxcbiNjb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBwYWRkaW5nOiA1JSA3JTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZSxcXG4jY29udGFjdCB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4jbWVudSB7XFxuICBsaW5lLWhlaWdodDogMjtcXG59XFxuXFxuI2hvbWUgaW1nIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI25hbWUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjb21lLW1zZyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI21lbnUtdGV4dCA+IHVsID4gbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI21lbnUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI21lbnUtaW1hZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jbWVudS1pbWFnZSA+IGltZyB7XFxuICBoZWlnaHQ6IDdyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEI7MkNBQ2tEO0VBQ2xELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix5REFBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7O0VBS0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNU0RcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vbXJzc2FpbnRkZWxhZmllbGQtcmVndWxhci13ZWJmb250LndvZmZcXFwiKSxcXG4gICAgdXJsKFxcXCIuL21yc3NhaW50ZGVsYWZpZWxkLXJlZ3VsYXItd2ViZm9udC53b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vZm9vZC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDUlIDE1JTtcXG59XFxuXFxuI3RvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBoZWlnaHQ6IDExcmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICBmb250LWZhbWlseTogTVNEO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbm5hdiBkaXYge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5uYXYgZGl2OmhvdmVyLFxcbi5zZWxlY3RlZCB7XFxuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jYm90dG9tIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiN0b3AsXFxuI2NvbnRlbnQsXFxuI2JvdHRvbSB7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuI3RvcCxcXG4jaG9tZSxcXG4jbWVudSxcXG4jY29udGFjdCxcXG4jYm90dG9tIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4jY29udGFjdCB1bCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jaG9tZSxcXG4jbWVudSxcXG4jY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbiAgcGFkZGluZzogNSUgNyU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUsXFxuI2NvbnRhY3Qge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuI21lbnUge1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxufVxcblxcbiNob21lIGltZyB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbiNuYW1lIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY29tZS1tc2cge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNtZW51LXRleHQgPiB1bCA+IGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNtZW51LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtZW51LWltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI21lbnUtaW1hZ2UgPiBpbWcge1xcbiAgaGVpZ2h0OiA3cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlQ29udGFjdCA9IChtYWluRWxlbSkgPT4ge1xuICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb250YWN0LmlkID0gXCJjb250YWN0XCI7XG4gIG1haW5FbGVtLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIGNvbnN0IGNvbnRhY3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuICBsZXQgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICBjb250YWN0RWxlbS5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcblxuICBsZXQgY29udGFjdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdFAudGV4dENvbnRlbnQgPVxuICAgIFwiQ29udGFjdCB1cyBmb3IgYW55IHF1ZXN0aW9ucyBvciB0byBtYWtlIGEgcmVzZXJ2YXRpb24uXCI7XG4gIGNvbnRhY3RFbGVtLmFwcGVuZENoaWxkKGNvbnRhY3RQKTtcblxuICBjcmVhdGVDb250YWN0SW5mbyhjb250YWN0RWxlbSk7XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWN0SW5mbyA9IChjb250YWN0RWxlbSkgPT4ge1xuICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgaW5mby5pZCA9IFwiY29udGFjdC1pbmZvXCI7XG4gIGNvbnRhY3RFbGVtLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IGluZm9FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWluZm9cIik7XG4gIGxldCBpbmZvQ29udGVudCA9IFtcbiAgICBcIlBob25lOiA1NTUtNTU1LTU1NTVcIixcbiAgICBcIkVtYWlsOiBnb3VybWV0c2RlbGlnaHRAZW1haWwuY29tXCIsXG4gICAgXCJBZGRyZXNzOiAxMjMgTWFpbiBTdCwgQW55dG93biBDYW5hZGFcIixcbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGluZm9Db250ZW50W2ldO1xuICAgIGluZm9FbGVtLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29udGFjdCB9O1xuIiwiaW1wb3J0IENoZWYgZnJvbSBcIi4vY2hlZi5wbmdcIjtcblxuY29uc3QgY3JlYXRlSG9tZSA9IChtYWluRWxlbSkgPT4ge1xuICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBob21lLmlkID0gXCJob21lXCI7XG4gIG1haW5FbGVtLmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gIGNvbnN0IGhvbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuICBjcmVhdGVIb21lQ29udGVudChob21lRWxlbSk7XG59O1xuXG5jb25zdCBjcmVhdGVIb21lQ29udGVudCA9IChob21lRWxlbSkgPT4ge1xuICBsZXQgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaG9tZUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcblxuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCJUaGUgR291cm1ldCdzIERlbGlnaHRcIjtcbiAgc3Bhbi5pZCA9IFwibmFtZVwiO1xuXG4gIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwMS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBcIjtcbiAgcDEuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIHAxLmFwcGVuZChcbiAgICBcIiwgYSBjb3p5IGFuZCBpbnRpbWF0ZSBGcmVuY2ggYmlzdHJvIGxvY2F0ZWQgXCIgK1xuICAgICAgXCJpbiB0aGUgaGVhcnQgb2YgZG93bnRvd24uIE91ciBtZW51IGlzIGluc3BpcmVkIFwiICtcbiAgICAgIFwiYnkgY2xhc3NpYyBGcmVuY2ggY3Vpc2luZSwgZmVhdHVyaW5nIGRpc2hlcyBtYWRlIFwiICtcbiAgICAgIFwid2l0aCBvbmx5IHRoZSBmcmVzaGVzdCBhbmQgaGlnaGVzdC1xdWFsaXR5IGluZ3JlZGllbnRzLlwiXG4gICk7XG5cbiAgY29uc3QgY2hlZiA9IG5ldyBJbWFnZSgpO1xuICBjaGVmLnNyYyA9IENoZWY7XG4gIGNoZWYuYWx0ID0gXCJBZGFtIFNtaXRoOiBPdXIgaGVhZCBjaGVmXCI7XG5cbiAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAyLnRleHRDb250ZW50ID0gXCJDb21lIG9uIGRvd24gZm9yIHNvbWUgZGVsaWNpb3VzIGN1aXNpbmUhXCI7XG4gIHAyLmlkID0gXCJjb21lLW1zZ1wiO1xuXG4gIGhvbWVFbGVtLmFwcGVuZENoaWxkKGhvbWVIZWFkZXIpO1xuICBob21lRWxlbS5hcHBlbmRDaGlsZChwMSk7XG4gIGhvbWVFbGVtLmFwcGVuZENoaWxkKGNoZWYpO1xuICBob21lRWxlbS5hcHBlbmRDaGlsZChwMik7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVIb21lIH07XG4iLCJpbXBvcnQgRm9vZDEgZnJvbSBcIi4vZm9vZDEucG5nXCI7XG5pbXBvcnQgRm9vZDIgZnJvbSBcIi4vZm9vZDIucG5nXCI7XG5pbXBvcnQgRm9vZDMgZnJvbSBcIi4vZm9vZDMucG5nXCI7XG5pbXBvcnQgRm9vZDQgZnJvbSBcIi4vZm9vZDQucG5nXCI7XG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAobWFpbkVsZW0pID0+IHtcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbWVudS5pZCA9IFwibWVudVwiO1xuICBtYWluRWxlbS5hcHBlbmRDaGlsZChtZW51KTtcblxuICBjb25zdCBtZW51RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgY3JlYXRlTWVudUhlYWRlcihtZW51RWxlbSk7XG4gIGNyZWF0ZU1lbnVDb250ZW50KG1lbnVFbGVtKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVIZWFkZXIgPSAobWVudUVsZW0pID0+IHtcbiAgbGV0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRpbm5lciBNZW51XCI7XG4gIG1lbnVFbGVtLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xufTtcblxuY29uc3QgY3JlYXRlTWVudUNvbnRlbnQgPSAobWVudUVsZW0pID0+IHtcbiAgbGV0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRlbnQuaWQgPSBcIm1lbnUtY29udGVudFwiO1xuICBtZW51RWxlbS5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG5cbiAgY29uc3QgbWVudUNvbnRlbnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWNvbnRlbnRcIik7XG4gIGxldCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVUZXh0LmlkID0gXCJtZW51LXRleHRcIjtcbiAgbWVudUNvbnRlbnRFbGVtLmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcblxuICBjb25zdCBtZW51VGV4dEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtdGV4dFwiKTtcbiAgY3JlYXRlTWVudVRleHQobWVudVRleHRFbGVtKTtcblxuICBsZXQgbWVudUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUltYWdlLmlkID0gXCJtZW51LWltYWdlXCI7XG4gIG1lbnVDb250ZW50RWxlbS5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xuXG4gIGNvbnN0IG1lbnVJbWFnZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtaW1hZ2VcIik7XG4gIGNyZWF0ZU1lbnVJbWFnZShtZW51SW1hZ2VFbGVtKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVUZXh0ID0gKG1lbnVUZXh0RWxlbSkgPT4ge1xuICBsZXQgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIG1lbnVUZXh0RWxlbS5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG5cbiAgY29uc3QgbWVudUxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51IHVsXCIpO1xuICBsZXQgdGl0bGVBcnIgPSBbXCJBcHBldGl6ZXJzXCIsIFwiU2FsYWRzXCIsIFwiRW50cmVlc1wiLCBcIkRlc3NlcnRzXCJdO1xuICBsZXQgY29udGVudEFyciA9IFtcbiAgICBbXG4gICAgICB7IGRpc2g6IFwiRnJpZWQgQ2FsYW1hcmlcIiwgcHJpY2U6IDggfSxcbiAgICAgIHsgZGlzaDogXCJCcnVzY2hldHRhXCIsIHByaWNlOiA3IH0sXG4gICAgICB7IGRpc2g6IFwiQ3JhYiBDYWtlc1wiLCBwcmljZTogMTIgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHsgZGlzaDogXCJDYXByZXNlIFNhbGFkXCIsIHByaWNlOiA4IH0sXG4gICAgICB7IGRpc2g6IFwiR3JlZWsgU2FsYWRcIiwgcHJpY2U6IDkgfSxcbiAgICAgIHsgZGlzaDogXCJTcGluYWNoIFNhbGFkXCIsIHByaWNlOiAxMCB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgeyBkaXNoOiBcIkZpbGV0IE1pZ25vblwiLCBwcmljZTogMjUgfSxcbiAgICAgIHsgZGlzaDogXCJMb2JzdGVyIFRhaWxcIiwgcHJpY2U6IDM1IH0sXG4gICAgICB7IGRpc2g6IFwiUGVzdG8gQ2hpY2tlblwiLCBwcmljZTogMjAgfSxcbiAgICAgIHsgZGlzaDogXCJFZ2dwbGFudCBQYXJtZXNhblwiLCBwcmljZTogMTggfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHsgZGlzaDogXCJDaG9jb2xhdGUgTW91c3NlXCIsIHByaWNlOiA3IH0sXG4gICAgICB7IGRpc2g6IFwiQ3LDqG1lIEJydWxlZVwiLCBwcmljZTogOCB9LFxuICAgICAgeyBkaXNoOiBcIlRpcmFtaXN1XCIsIHByaWNlOiA2IH0sXG4gICAgXSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlTWVudUxpc3QobWVudUxpc3RFbGVtLCBpLCB0aXRsZUFycltpXSwgY29udGVudEFycltpXSk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVMaXN0ID0gKG1lbnVMaXN0RWxlbSwgaW5kZXgsIHRpdGxlLCBjb250ZW50KSA9PiB7XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbWVudUxpc3RFbGVtLmFwcGVuZENoaWxkKGxpKTtcbiAgY29uc3QgbGlFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgI21lbnUtdGV4dD51bD5saTpudGgtY2hpbGQoJHtpbmRleCArIDF9KWBcbiAgKTtcblxuICBsZXQgbGlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxpSGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIGxpRWxlbS5hcHBlbmRDaGlsZChsaUhlYWRlcik7XG5cbiAgbGV0IGlubmVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGlFbGVtLmFwcGVuZENoaWxkKGlubmVyTGlzdCk7XG5cbiAgY29uc3QgaW5uZXJMaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYCNtZW51LXRleHQ+dWw+bGk6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSk+dWxgXG4gICk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpbm5lckxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGlubmVyTGkudGV4dENvbnRlbnQgPSBgJHtjb250ZW50W2ldLmRpc2h9IC0gJCR7Y29udGVudFtpXS5wcmljZX1gO1xuICAgIGlubmVyTGlzdEVsZW0uYXBwZW5kQ2hpbGQoaW5uZXJMaSk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVJbWFnZSA9IChtZW51SW1hZ2VFbGVtKSA9PiB7XG4gIGNvbnN0IGZvb2QxID0gbmV3IEltYWdlKCk7XG4gIGZvb2QxLnNyYyA9IEZvb2QxO1xuICBmb29kMS5hbHQgPSBcIkZyaWVkIENhbGFtcmlcIjtcbiAgY29uc3QgZm9vZDIgPSBuZXcgSW1hZ2UoKTtcbiAgZm9vZDIuc3JjID0gRm9vZDI7XG4gIGZvb2QyLmFsdCA9IFwiR3JlZWsgU2FsYWRcIjtcbiAgY29uc3QgZm9vZDMgPSBuZXcgSW1hZ2UoKTtcbiAgZm9vZDMuc3JjID0gRm9vZDM7XG4gIGZvb2QzLmFsdCA9IFwiTG9ic3RlciBUYWlsXCI7XG4gIGNvbnN0IGZvb2Q0ID0gbmV3IEltYWdlKCk7XG4gIGZvb2Q0LnNyYyA9IEZvb2Q0O1xuICBmb29kNC5hbHQgPSBcIkNyw6htZSBCcnVsZWVcIjtcbiAgbWVudUltYWdlRWxlbS5hcHBlbmRDaGlsZChmb29kMSk7XG4gIG1lbnVJbWFnZUVsZW0uYXBwZW5kQ2hpbGQoZm9vZDIpO1xuICBtZW51SW1hZ2VFbGVtLmFwcGVuZENoaWxkKGZvb2QzKTtcbiAgbWVudUltYWdlRWxlbS5hcHBlbmRDaGlsZChmb29kNCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNZW51IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCB0b3BEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcFwiKTtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIHRvcERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGhlYWRlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgR291cm1ldCdzIERlbGlnaHRcIjtcbiAgaGVhZGVyRWxlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgdG9wRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3BcIik7XG4gIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICB0b3BEaXYuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBjb25zdCBuYXZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbiAgY3JlYXRlTmF2RGl2cyhuYXZFbGVtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2RGl2cyhuYXZFbGVtKSB7XG4gIGxldCBuYXZzQXJyID0gW1xuICAgIHsgbmFtZTogXCJob21lXCIsIHRleHQ6IFwiSG9tZVwiIH0sXG4gICAgeyBuYW1lOiBcIm1lbnVcIiwgdGV4dDogXCJNZW51XCIgfSxcbiAgICB7IG5hbWU6IFwiY29udGFjdFwiLCB0ZXh0OiBcIkNvbnRhY3QgVXNcIiB9LFxuICBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2c0Fyci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IGAke25hdnNBcnJbaV0ubmFtZX0tbmF2YDtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBuYXZzQXJyW2ldLnRleHQ7XG4gICAgbmF2RWxlbS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG5cbiAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1uYXZcIik7XG4gIGhvbWVOYXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIGNvbnN0IG1haW5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNyZWF0ZUhvbWUobWFpbkVsZW0pO1xufVxuXG5mdW5jdGlvbiBDcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm90dG9tXCIpO1xuICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgZm9vdGVyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IFxcdTAwQTkgMjAyMyBUaWZmYW55IENoYW5gO1xuICBmb290ZXJFbGVtLmFwcGVuZENoaWxkKHApO1xufVxuXG5mdW5jdGlvbiB0YWJTd2l0Y2goKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1uYXZcIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtbmF2XCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LW5hdlwiKTtcblxuICBsZXQgZnVuY0FyciA9IFtjcmVhdGVIb21lLCBjcmVhdGVNZW51LCBjcmVhdGVDb250YWN0XTtcbiAgbGV0IHRhYkFyciA9IFtob21lLCBtZW51LCBjb250YWN0XTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1bmNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0YWJBcnJbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZnVuY0FycltpXShtYWluKTtcbiAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJBcnIpIHtcbiAgICAgICAgaWYgKHRhYiA9PT0gdGFiQXJyW2ldKSB7XG4gICAgICAgICAgdGFiLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWIuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmNyZWF0ZUhlYWRlcigpO1xuY3JlYXRlTmF2KCk7XG5jcmVhdGVNYWluKCk7XG5DcmVhdGVGb290ZXIoKTtcbnRhYlN3aXRjaCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9