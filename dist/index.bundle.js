"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["index"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/fog_blurred.jpg */ "./src/images/fog_blurred.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/more.svg */ "./src/images/more.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bin.svg */ "./src/images/bin.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-size: 1.8rem;\n}\n\n.backgroundImageBox {\n  position: relative;\n  min-height: 100vh;\n  font-family: sans-serif;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; \n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.todoBox {\n  background-color: white;\n  width: 800px;\n  min-height: 600px;\n  border-radius: 5px;\n  box-shadow: 3px 3px 3px grey;\n  font-size: 16px;\n}\n\np {\n  font-size: 16px;\n}\n\nbutton {\n  font-size: 16px;\n  background-color: white;\n  border: solid 2px white;\n}\n\nbutton:hover {\n  cursor: pointer;\n  border: solid 2px black;\n}\n\n.todoHeader {\n  padding: 30px;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 5px 5px 0 0;\n  background-color: pink;\n  font-size: 22px;\n}\n\n.titleContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: auto;\n  overflow: hidden;\n  padding: 10px 30px;\n  background: linear-gradient(90deg, yellow, white 50px);\n}\n\n.highPriority {\n  background: linear-gradient(90deg, red, white 50px);\n}\n\n.mediumPriority {\n  background: linear-gradient(90deg, orange, white 50px);\n}\n\n.lowPriority {\n  background: linear-gradient(90deg, green, white 50px);\n}\n\n.htmlList {\n  background-color: white;\n}\n\n.itemAndButtons {\n  display: flex;\n}\n\n.formBox {\n  min-width: 350px;\n  position: absolute;\n  background-color: white;\n  padding: 40px;\n  border-radius: 5px;\n  border: solid blue;\n}\n\n.addNewForm {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.dueDateContainer {\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.showMoreButton {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 50% 50%;\n  width: 30px;\n  padding: 20px;\n  background-repeat: no-repeat;\n  background-position: center; \n}\n\n.editButton {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 50% 50%;\n  width: 30px;\n  padding: 20px;\n  background-repeat: no-repeat;\n  background-position: center; \n}\n\n.deleteButton {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 50% 50%;\n  width: 30px;\n  padding: 20px;\n  background-repeat: no-repeat;\n  background-position: center; \n}\n\n.formSubmit {\n  margin-top: 20px;\n}\n\n.detailsBox {\n  position: absolute;\n  background-color: white;\n  max-height: 900px;\n  max-width: 600px;\n  min-width: 350px;\n  position: absolute;\n  background-color: white;\n  padding: 40px;\n  border-radius: 5px;\n  border: solid blue;\n  font-size: 16px;\n}\n\n.detailsBoxHeader {\n  display: flex;\n  justify-content: space-between;\n}\n\n.closeButton {\n  background-color: red;\n  color: white;\n  border-radius: 10px;\n  font-weight: 700;\n  width: 30px;\n  height: 30px;\n}\n\n.closeButton:hover {\n  background-color: white;\n  color: red;\n  border: white;\n}\n\n.hidden {\n  border:0px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,mDAA2C;EAC3C,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,0BAA0B;EAC1B,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,sDAAsD;AACxD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mDAAoC;EACpC,wBAAwB;EACxB,WAAW;EACX,aAAa;EACb,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,mDAAoC;EACpC,wBAAwB;EACxB,WAAW;EACX,aAAa;EACb,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,mDAAmC;EACnC,wBAAwB;EACxB,WAAW;EACX,aAAa;EACb,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,UAAU;AACZ","sourcesContent":["body {\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-size: 1.8rem;\n}\n\n.backgroundImageBox {\n  position: relative;\n  min-height: 100vh;\n  font-family: sans-serif;\n  background: url('./images/fog_blurred.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; \n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.todoBox {\n  background-color: white;\n  width: 800px;\n  min-height: 600px;\n  border-radius: 5px;\n  box-shadow: 3px 3px 3px grey;\n  font-size: 16px;\n}\n\np {\n  font-size: 16px;\n}\n\nbutton {\n  font-size: 16px;\n  background-color: white;\n  border: solid 2px white;\n}\n\nbutton:hover {\n  cursor: pointer;\n  border: solid 2px black;\n}\n\n.todoHeader {\n  padding: 30px;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 5px 5px 0 0;\n  background-color: pink;\n  font-size: 22px;\n}\n\n.titleContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: auto;\n  overflow: hidden;\n  padding: 10px 30px;\n  background: linear-gradient(90deg, yellow, white 50px);\n}\n\n.highPriority {\n  background: linear-gradient(90deg, red, white 50px);\n}\n\n.mediumPriority {\n  background: linear-gradient(90deg, orange, white 50px);\n}\n\n.lowPriority {\n  background: linear-gradient(90deg, green, white 50px);\n}\n\n.htmlList {\n  background-color: white;\n}\n\n.itemAndButtons {\n  display: flex;\n}\n\n.formBox {\n  min-width: 350px;\n  position: absolute;\n  background-color: white;\n  padding: 40px;\n  border-radius: 5px;\n  border: solid blue;\n}\n\n.addNewForm {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.dueDateContainer {\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.showMoreButton {\n  background: url('./images/more.svg');\n  background-size: 50% 50%;\n  width: 30px;\n  padding: 20px;\n  background-repeat: no-repeat;\n  background-position: center; \n}\n\n.editButton {\n  background: url('./images/edit.svg');\n  background-size: 50% 50%;\n  width: 30px;\n  padding: 20px;\n  background-repeat: no-repeat;\n  background-position: center; \n}\n\n.deleteButton {\n  background: url('./images/bin.svg');\n  background-size: 50% 50%;\n  width: 30px;\n  padding: 20px;\n  background-repeat: no-repeat;\n  background-position: center; \n}\n\n.formSubmit {\n  margin-top: 20px;\n}\n\n.detailsBox {\n  position: absolute;\n  background-color: white;\n  max-height: 900px;\n  max-width: 600px;\n  min-width: 350px;\n  position: absolute;\n  background-color: white;\n  padding: 40px;\n  border-radius: 5px;\n  border: solid blue;\n  font-size: 16px;\n}\n\n.detailsBoxHeader {\n  display: flex;\n  justify-content: space-between;\n}\n\n.closeButton {\n  background-color: red;\n  color: white;\n  border-radius: 10px;\n  font-weight: 700;\n  width: 30px;\n  height: 30px;\n}\n\n.closeButton:hover {\n  background-color: white;\n  color: red;\n  border: white;\n}\n\n.hidden {\n  border:0px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/todoItem.js":
/*!************************************!*\
  !*** ./src/components/todoItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoItem)
/* harmony export */ });
function todoItem({
  title,
  project,
  description,
  dueDate,
  priority,
}) {
  // this is backup only since will make title mandatory field
  let chosenTitle = title === '' ? 'Untitled' : title;
  const getTitle = () => chosenTitle;
  const setTitle = (newTitle) => {
    chosenTitle = newTitle;
  };
  let chosenProject = project === '' ? 'None' : project;
  const getProject = () => chosenProject;
  const setProject = (newProject) => {
    chosenProject = newProject;
  };
  let chosenDescription = description === '' ? 'No description' : description;
  const getDescription = () => chosenDescription;
  const setDescription = (newDescription) => {
    chosenDescription = newDescription;
  };
  let chosenDueDate = dueDate === '' ? 'None' : dueDate;
  const getDueDate = () => chosenDueDate;
  const setDueDate = (newDueDate) => {
    chosenDueDate = newDueDate;
  };
  let chosenPriority = priority === '' ? 'None' : priority;
  const getPriority = () => chosenPriority;
  const setPriority = (newChosenPriority) => {
    if (!['None', 'Low', 'Medium', 'High'].includes(newChosenPriority)) {
      return;
    }
    chosenPriority = newChosenPriority;
  };
  let done = false;
  const toggleDone = () => done = !done;
  const getDone = () => done;
  return {
    getTitle,
    setTitle,
    getProject,
    setProject,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    toggleDone,
    getDone,
  };
}


/***/ }),

/***/ "./src/displayControllers/displayAddOrEditForm.js":
/*!********************************************************!*\
  !*** ./src/displayControllers/displayAddOrEditForm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayAddOrEditForm)
/* harmony export */ });
/* harmony import */ var _components_todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/todoItem */ "./src/components/todoItem.js");
/* harmony import */ var _displayTodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodoList */ "./src/displayControllers/displayTodoList.js");



function displayAddOrEditForm(
    todoList, 
    htmlTodoList, 
    formContainer,
    todoItemIndex = null,
  ) {

  const editing = todoItemIndex === null ? false : true;

  const formBox = document.createElement('form');
  formContainer.appendChild(formBox);
  formBox.classList.add('formBox');
  
  const header = document.createElement('div');
  header.classList.add('detailsBoxHeader');
  formBox.appendChild(header);

  const titleElement = document.createElement('h3');
  titleElement.textContent = editing ? 'Edit' : 'Add new to-do';
  header.appendChild(titleElement);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.onclick = () => formContainer.removeChild(formBox);
  closeButton.classList.add('closeButton');
  header.appendChild(closeButton);

  const formAddTodo = document.createElement('form');
  formBox.appendChild(formAddTodo);
  formAddTodo.classList.add('addNewForm');

  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Task (required)';
  formAddTodo.appendChild(titleLabel);

  const titleEntry = document.createElement('input');
  titleEntry.setAttribute('type', 'text');
  titleEntry.setAttribute('required', 'required');
  titleEntry.classList.add('titleEntry');
  formAddTodo.appendChild(titleEntry);

  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'Project';
  formAddTodo.appendChild(projectLabel);

  const projectEntry = document.createElement('input');
  projectEntry.setAttribute('type', 'text');
  titleEntry.classList.add('projectEntry');
  formAddTodo.appendChild(projectEntry);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description';
  formAddTodo.appendChild(descriptionLabel);

  const descriptionEntry = document.createElement('input');
  descriptionEntry.setAttribute('type', 'text');
  titleEntry.classList.add('descriptionEntry');
  formAddTodo.appendChild(descriptionEntry);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due';
  formAddTodo.appendChild(dueDateLabel);

  const dueDateEntry = document.createElement('input');
  dueDateEntry.setAttribute('type', 'text');
  titleEntry.classList.add('dueDateEntry');
  formAddTodo.appendChild(dueDateEntry);

  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority';
  formAddTodo.appendChild(priorityLabel);

  const priorityEntry = document.createElement('select');
  const highPriority = document.createElement('option');
  const noPriority = document.createElement('option');
  noPriority.text = "None";
  highPriority.text = "High";
  const mediumPriority = document.createElement('option');
  mediumPriority.text = "Medium";
  const lowPriority = document.createElement('option');
  lowPriority.text = "Low";
  priorityEntry.appendChild(noPriority);
  priorityEntry.appendChild(highPriority);
  priorityEntry.appendChild(mediumPriority);
  priorityEntry.appendChild(lowPriority);
  priorityEntry.setAttribute('type', 'text');
  titleEntry.classList.add('priorityEntry');
  formAddTodo.appendChild(priorityEntry);

  const formSubmit = document.createElement('button');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.textContent = 'Add task';
  formSubmit.classList.add('formSubmit');
  formAddTodo.appendChild(formSubmit);

  // populate form with data if editing existing todo
  if (editing) {
    const editedTodo = todoList.getListOfTodos()[todoItemIndex];
    titleEntry.value = editedTodo.getTitle();
    projectEntry.value = editedTodo.getProject();
    descriptionEntry.value = editedTodo.getDescription();
    dueDateEntry.value = editedTodo.getDueDate();
    priorityEntry.value = editedTodo.getPriority();
  }

  titleEntry.focus();

  formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (titleEntry.value == '') {
      return;
    }
    // delete original item if editing
    if (editing) {
      todoList.getListOfTodos()[todoItemIndex].setTitle(titleEntry.value);
      todoList.getListOfTodos()[todoItemIndex].setProject(projectEntry.value);
      todoList.getListOfTodos()[todoItemIndex].setDescription(descriptionEntry.value);
      todoList.getListOfTodos()[todoItemIndex].setDueDate(dueDateEntry.value);
      todoList.getListOfTodos()[todoItemIndex].setPriority(priorityEntry.value);
    } else {
      todoList.addTodo((0,_components_todoItem__WEBPACK_IMPORTED_MODULE_0__["default"])({
        title: titleEntry.value,
        project: projectEntry.value,
        description: descriptionEntry.value,
        dueDate: dueDateEntry.value,
        priority: priorityEntry.value,
      }));
    }
    formContainer.removeChild(formBox);
    (0,_displayTodoList__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList, htmlTodoList, formContainer);
  });
}


/***/ }),

/***/ "./src/displayControllers/displayDetails.js":
/*!**************************************************!*\
  !*** ./src/displayControllers/displayDetails.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayDetails)
/* harmony export */ });
function displayDetails(todoItem, detailsContainer) {
  let detailsBox = document.querySelector('.detailsBox');
  if (detailsBox) {
    detailsBox.innerHTML = null;
  } else {
    detailsBox = document.createElement('div');
    detailsContainer.appendChild(detailsBox);
    detailsBox.classList.add('detailsBox');
  }
  detailsBox.classList.remove("hidden");
  
  const header = document.createElement('div');
  header.classList.add('detailsBoxHeader');
  detailsBox.appendChild(header);
  
  const titleElement = document.createElement('h3');
  titleElement.textContent = `${todoItem.getTitle()}`;
  header.appendChild(titleElement);
  
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.onclick = () => {
    detailsBox.innerHTML = null;
    detailsBox.classList.add("hidden");
  }
  closeButton.classList.add('closeButton');
  header.appendChild(closeButton);
  
  const detailsList = document.createElement('ul');
  detailsBox.appendChild(detailsList);
  
  const projectElement = document.createElement('li');
  projectElement.textContent = `Project: ${todoItem.getProject()}`;
  detailsList.appendChild(projectElement);
  
  const descriptionElement = document.createElement('li');
  descriptionElement.textContent = `Description: ${todoItem.getDescription()}`;
  detailsList.appendChild(descriptionElement);
  
  const dueDateElement = document.createElement('li');
  dueDateElement.textContent = `Due date: ${todoItem.getDueDate()}`;
  detailsList.appendChild(dueDateElement);
  
  const priorityElement = document.createElement('li');
  priorityElement.textContent = `Priority: ${todoItem.getPriority()}`;
  detailsList.appendChild(priorityElement);
}


/***/ }),

/***/ "./src/displayControllers/displayTodoList.js":
/*!***************************************************!*\
  !*** ./src/displayControllers/displayTodoList.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTodoList)
/* harmony export */ });
/* harmony import */ var _displayDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayDetails */ "./src/displayControllers/displayDetails.js");
/* harmony import */ var _displayAddOrEditForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayAddOrEditForm */ "./src/displayControllers/displayAddOrEditForm.js");



function displayTodoList(todos, htmlParent, detailsContainer) {
  // eslint-disable-next-line no-param-reassign
  htmlParent.innerHTML = '';
  // basic for loop so can use the index to allow for show more / delete / edit  
  for (let i = 0; i < todos.getListOfTodos().length; i += 1) {
    const todo = todos.getListOfTodos()[i];
    const itemAndButtons = document.createElement('div');
    itemAndButtons.classList.add('itemAndButtons');
    htmlParent.appendChild(itemAndButtons);
    // add title inside container for easy flex placement
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    itemAndButtons.appendChild(titleContainer);
    if (todo.getPriority() === 'High') {
      titleContainer.classList.add('highPriority');
    }
    if (todo.getPriority() === 'Medium') {
      titleContainer.classList.add('mediumPriority');
    }
    if (todo.getPriority() === 'Low') {
      titleContainer.classList.add('lowPriority');
    }
    const title = document.createElement('p');
    title.textContent = todo.getTitle();
    title.classList.add('title');
    titleContainer.appendChild(title);
    // add date inside container for easy flex placement
    const dueDateContainer = document.createElement('div');
    dueDateContainer.classList.add('dueDateContainer');
    itemAndButtons.appendChild(dueDateContainer);
    const dueDate = document.createElement('p');
    dueDate.classList.add('dueDate');
    dueDate.textContent = todo.getDueDate();
    dueDateContainer.appendChild(dueDate);
    // add show more button
    const showMoreButton = document.createElement('button');
    showMoreButton.classList.add('showMoreButton')
    showMoreButton.onclick = () => {
      ;(0,_displayDetails__WEBPACK_IMPORTED_MODULE_0__["default"])(todo, detailsContainer);
    }
    itemAndButtons.appendChild(showMoreButton);
    // add edit button
    const editButton = document.createElement('button');
    editButton.classList.add('editButton')
    editButton.onclick = () => {
      ;(0,_displayAddOrEditForm__WEBPACK_IMPORTED_MODULE_1__["default"])(todos, htmlParent, detailsContainer, i);
    }
    itemAndButtons.appendChild(editButton);
    // add delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton')
    deleteButton.onclick = () => {
      todos.deleteTodo(i);
      displayTodoList(todos, htmlParent, detailsContainer);
    }
    itemAndButtons.appendChild(deleteButton);
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todoItem */ "./src/components/todoItem.js");
/* harmony import */ var _displayControllers_displayAddOrEditForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayControllers/displayAddOrEditForm */ "./src/displayControllers/displayAddOrEditForm.js");
/* harmony import */ var _displayControllers_displayTodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayControllers/displayTodoList */ "./src/displayControllers/displayTodoList.js");





// create main structure in the DOM
const backgroundImageBox = document.createElement('div');
backgroundImageBox.classList.add('backgroundImageBox');
document.body.appendChild(backgroundImageBox);

const todoBox = document.createElement('div');
todoBox.classList.add('todoBox');
backgroundImageBox.appendChild(todoBox);

const todoHeader = document.createElement('div');
todoHeader.classList.add('todoHeader');
todoBox.append(todoHeader);

const todoTitle = document.createElement('div');
todoTitle.classList.add('todoTitle');
todoTitle.textContent = 'Tasks';
todoHeader.append(todoTitle);

const addNewButton = document.createElement('button');
addNewButton.classList.add('addNewButton');
addNewButton.textContent = 'Add new';
todoHeader.appendChild(addNewButton);

const htmlList = document.createElement('div');
htmlList.classList.add('htmlList');
todoBox.appendChild(htmlList);

// can immediately invoke because only need one todo list
const allTodos = (() => {
  const listOfTodos = [];
  const getListOfTodos = () => listOfTodos;
  const projects = [];
  const getProjects = () => projects;
  const addTodo = (newTodo) => {
    listOfTodos.push(newTodo);
    if (!projects.includes(newTodo.getProject())) {
      projects.push(newTodo.getProject());
    }
  };
  const deleteTodo = (index) => listOfTodos.splice(index, 1);
  return { getListOfTodos, getProjects, addTodo, deleteTodo };
})();

addNewButton.addEventListener('click', () => {
  /* display add new form includes the code to add the new item to the 
     todolist supplied. Easier to do it this way since otherwise you have to 
     query-selector all the fields created by the add new form, as well as the 
     button. Ultimately it's just using a function that already exists so 
     still counts as separation of display and application logic I think. */
  (0,_displayControllers_displayAddOrEditForm__WEBPACK_IMPORTED_MODULE_2__["default"])(allTodos, htmlList, backgroundImageBox);
});

// provide user with two examples
allTodos.addTodo((0,_components_todoItem__WEBPACK_IMPORTED_MODULE_1__["default"])({
  title: 'Merge sales and marketing',
  project: 'Project Zeus',
  description: 'You will not be informed of the meaning of Project Zeus until the time is right for you to know the meaning of Project Zeus',
  dueDate: 'Kettering conference',
  priority: 'High',
}));
allTodos.addTodo((0,_components_todoItem__WEBPACK_IMPORTED_MODULE_1__["default"])({
  title: 'Go for a lunchtime pint',
  project: 'Swindon merger',
  description: 'Make sure the best people show up',
  dueDate: 'This lunchtime',
  priority: 'Medium',
}));

(0,_displayControllers_displayTodoList__WEBPACK_IMPORTED_MODULE_3__["default"])(allTodos, htmlList, backgroundImageBox);


/***/ }),

/***/ "./src/images/bin.svg":
/*!****************************!*\
  !*** ./src/images/bin.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bba7f8a90befcbd8f9c0.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9a985514490b0533545.svg";

/***/ }),

/***/ "./src/images/fog_blurred.jpg":
/*!************************************!*\
  !*** ./src/images/fog_blurred.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d1aebe40112172c9fa3.jpg";

/***/ }),

/***/ "./src/images/more.svg":
/*!*****************************!*\
  !*** ./src/images/more.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43ecf751e62ad2cc0518.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEOEM7QUFDRTs7QUFFakM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHVCQUF1QixnRUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxJQUFJLDREQUFlO0FBQ25CLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDdEllO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxzQkFBc0I7QUFDakU7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDBCQUEwQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0JBQXNCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx1QkFBdUI7QUFDcEU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QzhDO0FBQ1k7O0FBRTNDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1DQUFtQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDREQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0VBQW9CO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVEcUI7QUFDd0I7QUFDZ0M7QUFDVjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9GQUFvQjtBQUN0QixDQUFDOztBQUVEO0FBQ0EsaUJBQWlCLGdFQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUJBQWlCLGdFQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELCtFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2NvbXBvbmVudHMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXJzL2Rpc3BsYXlBZGRPckVkaXRGb3JtLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVycy9kaXNwbGF5RGV0YWlscy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlcnMvZGlzcGxheVRvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9mb2dfYmx1cnJlZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9tb3JlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmluLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5iYWNrZ3JvdW5kSW1hZ2VCb3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9kb0JveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggZ3JleTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxucCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxufVxcblxcbi50b2RvSGVhZGVyIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4udGl0bGVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHllbGxvdywgd2hpdGUgNTBweCk7XFxufVxcblxcbi5oaWdoUHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZWQsIHdoaXRlIDUwcHgpO1xcbn1cXG5cXG4ubWVkaXVtUHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBvcmFuZ2UsIHdoaXRlIDUwcHgpO1xcbn1cXG5cXG4ubG93UHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBncmVlbiwgd2hpdGUgNTBweCk7XFxufVxcblxcbi5odG1sTGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLml0ZW1BbmRCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mb3JtQm94IHtcXG4gIG1pbi13aWR0aDogMzUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IHNvbGlkIGJsdWU7XFxufVxcblxcbi5hZGROZXdGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZHVlRGF0ZUNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNob3dNb3JlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XFxuICB3aWR0aDogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlIDUwJTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XFxuICB3aWR0aDogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcXG59XFxuXFxuLmZvcm1TdWJtaXQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmRldGFpbHNCb3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXgtaGVpZ2h0OiA5MDBweDtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCBibHVlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uZGV0YWlsc0JveEhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmNsb3NlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogd2hpdGU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgYm9yZGVyOjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1EQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbURBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtREFBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1EQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uYmFja2dyb3VuZEltYWdlQm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL2ZvZ19ibHVycmVkLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9Cb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogODAwcHg7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IGdyZXk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbn1cXG5cXG4udG9kb0hlYWRlciB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnRpdGxlQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB5ZWxsb3csIHdoaXRlIDUwcHgpO1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmVkLCB3aGl0ZSA1MHB4KTtcXG59XFxuXFxuLm1lZGl1bVByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgb3JhbmdlLCB3aGl0ZSA1MHB4KTtcXG59XFxuXFxuLmxvd1ByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgZ3JlZW4sIHdoaXRlIDUwcHgpO1xcbn1cXG5cXG4uaHRtbExpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5pdGVtQW5kQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZm9ybUJveCB7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCBibHVlO1xcbn1cXG5cXG4uYWRkTmV3Rm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmR1ZURhdGVDb250YWluZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93TW9yZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL21vcmUuc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XFxuICB3aWR0aDogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9lZGl0LnN2ZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXFxufVxcblxcbi5kZWxldGVCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9iaW4uc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XFxuICB3aWR0aDogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcXG59XFxuXFxuLmZvcm1TdWJtaXQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmRldGFpbHNCb3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXgtaGVpZ2h0OiA5MDBweDtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCBibHVlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uZGV0YWlsc0JveEhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmNsb3NlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogd2hpdGU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgYm9yZGVyOjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvSXRlbSh7XG4gIHRpdGxlLFxuICBwcm9qZWN0LFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG59KSB7XG4gIC8vIHRoaXMgaXMgYmFja3VwIG9ubHkgc2luY2Ugd2lsbCBtYWtlIHRpdGxlIG1hbmRhdG9yeSBmaWVsZFxuICBsZXQgY2hvc2VuVGl0bGUgPSB0aXRsZSA9PT0gJycgPyAnVW50aXRsZWQnIDogdGl0bGU7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gY2hvc2VuVGl0bGU7XG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgY2hvc2VuVGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcbiAgbGV0IGNob3NlblByb2plY3QgPSBwcm9qZWN0ID09PSAnJyA/ICdOb25lJyA6IHByb2plY3Q7XG4gIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiBjaG9zZW5Qcm9qZWN0O1xuICBjb25zdCBzZXRQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBjaG9zZW5Qcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgfTtcbiAgbGV0IGNob3NlbkRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gPT09ICcnID8gJ05vIGRlc2NyaXB0aW9uJyA6IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGNob3NlbkRlc2NyaXB0aW9uO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGNob3NlbkRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG4gIGxldCBjaG9zZW5EdWVEYXRlID0gZHVlRGF0ZSA9PT0gJycgPyAnTm9uZScgOiBkdWVEYXRlO1xuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gY2hvc2VuRHVlRGF0ZTtcbiAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XG4gICAgY2hvc2VuRHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH07XG4gIGxldCBjaG9zZW5Qcmlvcml0eSA9IHByaW9yaXR5ID09PSAnJyA/ICdOb25lJyA6IHByaW9yaXR5O1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IGNob3NlblByaW9yaXR5O1xuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdDaG9zZW5Qcmlvcml0eSkgPT4ge1xuICAgIGlmICghWydOb25lJywgJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddLmluY2x1ZGVzKG5ld0Nob3NlblByaW9yaXR5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaG9zZW5Qcmlvcml0eSA9IG5ld0Nob3NlblByaW9yaXR5O1xuICB9O1xuICBsZXQgZG9uZSA9IGZhbHNlO1xuICBjb25zdCB0b2dnbGVEb25lID0gKCkgPT4gZG9uZSA9ICFkb25lO1xuICBjb25zdCBnZXREb25lID0gKCkgPT4gZG9uZTtcbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBzZXRUaXRsZSxcbiAgICBnZXRQcm9qZWN0LFxuICAgIHNldFByb2plY3QsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBzZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFByaW9yaXR5LFxuICAgIHRvZ2dsZURvbmUsXG4gICAgZ2V0RG9uZSxcbiAgfTtcbn1cbiIsImltcG9ydCB0b2RvSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3RvZG9JdGVtJztcbmltcG9ydCBkaXNwbGF5VG9kb0xpc3QgZnJvbSAnLi9kaXNwbGF5VG9kb0xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5QWRkT3JFZGl0Rm9ybShcbiAgICB0b2RvTGlzdCwgXG4gICAgaHRtbFRvZG9MaXN0LCBcbiAgICBmb3JtQ29udGFpbmVyLFxuICAgIHRvZG9JdGVtSW5kZXggPSBudWxsLFxuICApIHtcblxuICBjb25zdCBlZGl0aW5nID0gdG9kb0l0ZW1JbmRleCA9PT0gbnVsbCA/IGZhbHNlIDogdHJ1ZTtcblxuICBjb25zdCBmb3JtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Cb3gpO1xuICBmb3JtQm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Cb3gnKTtcbiAgXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZGV0YWlsc0JveEhlYWRlcicpO1xuICBmb3JtQm94LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gZWRpdGluZyA/ICdFZGl0JyA6ICdBZGQgbmV3IHRvLWRvJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gIGNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBmb3JtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvcm1Cb3gpO1xuICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZUJ1dHRvbicpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIGNvbnN0IGZvcm1BZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtQm94LmFwcGVuZENoaWxkKGZvcm1BZGRUb2RvKTtcbiAgZm9ybUFkZFRvZG8uY2xhc3NMaXN0LmFkZCgnYWRkTmV3Rm9ybScpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgKHJlcXVpcmVkKSc7XG4gIGZvcm1BZGRUb2RvLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG4gIGNvbnN0IHRpdGxlRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUVudHJ5LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlRW50cnkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuICB0aXRsZUVudHJ5LmNsYXNzTGlzdC5hZGQoJ3RpdGxlRW50cnknKTtcbiAgZm9ybUFkZFRvZG8uYXBwZW5kQ2hpbGQodGl0bGVFbnRyeSk7XG5cbiAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xuICBmb3JtQWRkVG9kby5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gIGNvbnN0IHByb2plY3RFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByb2plY3RFbnRyeS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUVudHJ5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RFbnRyeScpO1xuICBmb3JtQWRkVG9kby5hcHBlbmRDaGlsZChwcm9qZWN0RW50cnkpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgZm9ybUFkZFRvZG8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25FbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRlc2NyaXB0aW9uRW50cnkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVFbnRyeS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkVudHJ5Jyk7XG4gIGZvcm1BZGRUb2RvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRW50cnkpO1xuXG4gIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUnO1xuICBmb3JtQWRkVG9kby5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuXG4gIGNvbnN0IGR1ZURhdGVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGR1ZURhdGVFbnRyeS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUVudHJ5LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGVFbnRyeScpO1xuICBmb3JtQWRkVG9kby5hcHBlbmRDaGlsZChkdWVEYXRlRW50cnkpO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgZm9ybUFkZFRvZG8uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgY29uc3QgcHJpb3JpdHlFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3Qgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBub1ByaW9yaXR5LnRleHQgPSBcIk5vbmVcIjtcbiAgaGlnaFByaW9yaXR5LnRleHQgPSBcIkhpZ2hcIjtcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbWVkaXVtUHJpb3JpdHkudGV4dCA9IFwiTWVkaXVtXCI7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGxvd1ByaW9yaXR5LnRleHQgPSBcIkxvd1wiO1xuICBwcmlvcml0eUVudHJ5LmFwcGVuZENoaWxkKG5vUHJpb3JpdHkpO1xuICBwcmlvcml0eUVudHJ5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gIHByaW9yaXR5RW50cnkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuICBwcmlvcml0eUVudHJ5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgcHJpb3JpdHlFbnRyeS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUVudHJ5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5RW50cnknKTtcbiAgZm9ybUFkZFRvZG8uYXBwZW5kQ2hpbGQocHJpb3JpdHlFbnRyeSk7XG5cbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgZm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgdGFzayc7XG4gIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybVN1Ym1pdCcpO1xuICBmb3JtQWRkVG9kby5hcHBlbmRDaGlsZChmb3JtU3VibWl0KTtcblxuICAvLyBwb3B1bGF0ZSBmb3JtIHdpdGggZGF0YSBpZiBlZGl0aW5nIGV4aXN0aW5nIHRvZG9cbiAgaWYgKGVkaXRpbmcpIHtcbiAgICBjb25zdCBlZGl0ZWRUb2RvID0gdG9kb0xpc3QuZ2V0TGlzdE9mVG9kb3MoKVt0b2RvSXRlbUluZGV4XTtcbiAgICB0aXRsZUVudHJ5LnZhbHVlID0gZWRpdGVkVG9kby5nZXRUaXRsZSgpO1xuICAgIHByb2plY3RFbnRyeS52YWx1ZSA9IGVkaXRlZFRvZG8uZ2V0UHJvamVjdCgpO1xuICAgIGRlc2NyaXB0aW9uRW50cnkudmFsdWUgPSBlZGl0ZWRUb2RvLmdldERlc2NyaXB0aW9uKCk7XG4gICAgZHVlRGF0ZUVudHJ5LnZhbHVlID0gZWRpdGVkVG9kby5nZXREdWVEYXRlKCk7XG4gICAgcHJpb3JpdHlFbnRyeS52YWx1ZSA9IGVkaXRlZFRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgfVxuXG4gIHRpdGxlRW50cnkuZm9jdXMoKTtcblxuICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRpdGxlRW50cnkudmFsdWUgPT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZGVsZXRlIG9yaWdpbmFsIGl0ZW0gaWYgZWRpdGluZ1xuICAgIGlmIChlZGl0aW5nKSB7XG4gICAgICB0b2RvTGlzdC5nZXRMaXN0T2ZUb2RvcygpW3RvZG9JdGVtSW5kZXhdLnNldFRpdGxlKHRpdGxlRW50cnkudmFsdWUpO1xuICAgICAgdG9kb0xpc3QuZ2V0TGlzdE9mVG9kb3MoKVt0b2RvSXRlbUluZGV4XS5zZXRQcm9qZWN0KHByb2plY3RFbnRyeS52YWx1ZSk7XG4gICAgICB0b2RvTGlzdC5nZXRMaXN0T2ZUb2RvcygpW3RvZG9JdGVtSW5kZXhdLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uRW50cnkudmFsdWUpO1xuICAgICAgdG9kb0xpc3QuZ2V0TGlzdE9mVG9kb3MoKVt0b2RvSXRlbUluZGV4XS5zZXREdWVEYXRlKGR1ZURhdGVFbnRyeS52YWx1ZSk7XG4gICAgICB0b2RvTGlzdC5nZXRMaXN0T2ZUb2RvcygpW3RvZG9JdGVtSW5kZXhdLnNldFByaW9yaXR5KHByaW9yaXR5RW50cnkudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvTGlzdC5hZGRUb2RvKHRvZG9JdGVtKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlRW50cnkudmFsdWUsXG4gICAgICAgIHByb2plY3Q6IHByb2plY3RFbnRyeS52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uRW50cnkudmFsdWUsXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGVFbnRyeS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5RW50cnkudmFsdWUsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUJveCk7XG4gICAgZGlzcGxheVRvZG9MaXN0KHRvZG9MaXN0LCBodG1sVG9kb0xpc3QsIGZvcm1Db250YWluZXIpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlEZXRhaWxzKHRvZG9JdGVtLCBkZXRhaWxzQ29udGFpbmVyKSB7XG4gIGxldCBkZXRhaWxzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHNCb3gnKTtcbiAgaWYgKGRldGFpbHNCb3gpIHtcbiAgICBkZXRhaWxzQm94LmlubmVySFRNTCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgZGV0YWlsc0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0JveCk7XG4gICAgZGV0YWlsc0JveC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzQm94Jyk7XG4gIH1cbiAgZGV0YWlsc0JveC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzQm94SGVhZGVyJyk7XG4gIGRldGFpbHNCb3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RvZG9JdGVtLmdldFRpdGxlKCl9YDtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gIFxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgY2xvc2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBkZXRhaWxzQm94LmlubmVySFRNTCA9IG51bGw7XG4gICAgZGV0YWlsc0JveC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG4gIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnV0dG9uJyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gIFxuICBjb25zdCBkZXRhaWxzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGRldGFpbHNCb3guYXBwZW5kQ2hpbGQoZGV0YWlsc0xpc3QpO1xuICBcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3RvZG9JdGVtLmdldFByb2plY3QoKX1gO1xuICBkZXRhaWxzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIFxuICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb246ICR7dG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKX1gO1xuICBkZXRhaWxzTGlzdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICBcbiAgY29uc3QgZHVlRGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBkdWVEYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHt0b2RvSXRlbS5nZXREdWVEYXRlKCl9YDtcbiAgZGV0YWlsc0xpc3QuYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsZW1lbnQpO1xuICBcbiAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgcHJpb3JpdHlFbGVtZW50LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvZG9JdGVtLmdldFByaW9yaXR5KCl9YDtcbiAgZGV0YWlsc0xpc3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50KTtcbn1cbiIsImltcG9ydCBkaXNwbGF5RGV0YWlscyBmcm9tICcuL2Rpc3BsYXlEZXRhaWxzJztcbmltcG9ydCBkaXNwbGF5QWRkT3JFZGl0Rm9ybSBmcm9tICcuL2Rpc3BsYXlBZGRPckVkaXRGb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRvZG9MaXN0KHRvZG9zLCBodG1sUGFyZW50LCBkZXRhaWxzQ29udGFpbmVyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBodG1sUGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAvLyBiYXNpYyBmb3IgbG9vcCBzbyBjYW4gdXNlIHRoZSBpbmRleCB0byBhbGxvdyBmb3Igc2hvdyBtb3JlIC8gZGVsZXRlIC8gZWRpdCAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MuZ2V0TGlzdE9mVG9kb3MoKS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRvZG8gPSB0b2Rvcy5nZXRMaXN0T2ZUb2RvcygpW2ldO1xuICAgIGNvbnN0IGl0ZW1BbmRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbUFuZEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnaXRlbUFuZEJ1dHRvbnMnKTtcbiAgICBodG1sUGFyZW50LmFwcGVuZENoaWxkKGl0ZW1BbmRCdXR0b25zKTtcbiAgICAvLyBhZGQgdGl0bGUgaW5zaWRlIGNvbnRhaW5lciBmb3IgZWFzeSBmbGV4IHBsYWNlbWVudFxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGVDb250YWluZXInKTtcbiAgICBpdGVtQW5kQnV0dG9ucy5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgaWYgKHRvZG8uZ2V0UHJpb3JpdHkoKSA9PT0gJ0hpZ2gnKSB7XG4gICAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKTtcbiAgICB9XG4gICAgaWYgKHRvZG8uZ2V0UHJpb3JpdHkoKSA9PT0gJ01lZGl1bScpIHtcbiAgICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XG4gICAgfVxuICAgIGlmICh0b2RvLmdldFByaW9yaXR5KCkgPT09ICdMb3cnKSB7XG4gICAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xuICAgIH1cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAvLyBhZGQgZGF0ZSBpbnNpZGUgY29udGFpbmVyIGZvciBlYXN5IGZsZXggcGxhY2VtZW50XG4gICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZUNvbnRhaW5lcicpO1xuICAgIGl0ZW1BbmRCdXR0b25zLmFwcGVuZENoaWxkKGR1ZURhdGVDb250YWluZXIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlJyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xuICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgLy8gYWRkIHNob3cgbW9yZSBidXR0b25cbiAgICBjb25zdCBzaG93TW9yZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNob3dNb3JlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Nob3dNb3JlQnV0dG9uJylcbiAgICBzaG93TW9yZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZGlzcGxheURldGFpbHModG9kbywgZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgfVxuICAgIGl0ZW1BbmRCdXR0b25zLmFwcGVuZENoaWxkKHNob3dNb3JlQnV0dG9uKTtcbiAgICAvLyBhZGQgZWRpdCBidXR0b25cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0QnV0dG9uJylcbiAgICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBkaXNwbGF5QWRkT3JFZGl0Rm9ybSh0b2RvcywgaHRtbFBhcmVudCwgZGV0YWlsc0NvbnRhaW5lciwgaSk7XG4gICAgfVxuICAgIGl0ZW1BbmRCdXR0b25zLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIC8vIGFkZCBkZWxldGUgYnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUJ1dHRvbicpXG4gICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0b2Rvcy5kZWxldGVUb2RvKGkpO1xuICAgICAgZGlzcGxheVRvZG9MaXN0KHRvZG9zLCBodG1sUGFyZW50LCBkZXRhaWxzQ29udGFpbmVyKTtcbiAgICB9XG4gICAgaXRlbUFuZEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgdG9kb0l0ZW0gZnJvbSAnLi9jb21wb25lbnRzL3RvZG9JdGVtJztcbmltcG9ydCBkaXNwbGF5QWRkT3JFZGl0Rm9ybSBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVycy9kaXNwbGF5QWRkT3JFZGl0Rm9ybSc7XG5pbXBvcnQgZGlzcGxheVRvZG9MaXN0IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXJzL2Rpc3BsYXlUb2RvTGlzdCc7XG5cbi8vIGNyZWF0ZSBtYWluIHN0cnVjdHVyZSBpbiB0aGUgRE9NXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2VCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJhY2tncm91bmRJbWFnZUJveC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kSW1hZ2VCb3gnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltYWdlQm94KTtcblxuY29uc3QgdG9kb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudG9kb0JveC5jbGFzc0xpc3QuYWRkKCd0b2RvQm94Jyk7XG5iYWNrZ3JvdW5kSW1hZ2VCb3guYXBwZW5kQ2hpbGQodG9kb0JveCk7XG5cbmNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRvZG9IZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kb0hlYWRlcicpO1xudG9kb0JveC5hcHBlbmQodG9kb0hlYWRlcik7XG5cbmNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpO1xudG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1Rhc2tzJztcbnRvZG9IZWFkZXIuYXBwZW5kKHRvZG9UaXRsZSk7XG5cbmNvbnN0IGFkZE5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWRkTmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZE5ld0J1dHRvbicpO1xuYWRkTmV3QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBuZXcnO1xudG9kb0hlYWRlci5hcHBlbmRDaGlsZChhZGROZXdCdXR0b24pO1xuXG5jb25zdCBodG1sTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaHRtbExpc3QuY2xhc3NMaXN0LmFkZCgnaHRtbExpc3QnKTtcbnRvZG9Cb3guYXBwZW5kQ2hpbGQoaHRtbExpc3QpO1xuXG4vLyBjYW4gaW1tZWRpYXRlbHkgaW52b2tlIGJlY2F1c2Ugb25seSBuZWVkIG9uZSB0b2RvIGxpc3RcbmNvbnN0IGFsbFRvZG9zID0gKCgpID0+IHtcbiAgY29uc3QgbGlzdE9mVG9kb3MgPSBbXTtcbiAgY29uc3QgZ2V0TGlzdE9mVG9kb3MgPSAoKSA9PiBsaXN0T2ZUb2RvcztcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcbiAgY29uc3QgYWRkVG9kbyA9IChuZXdUb2RvKSA9PiB7XG4gICAgbGlzdE9mVG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICBpZiAoIXByb2plY3RzLmluY2x1ZGVzKG5ld1RvZG8uZ2V0UHJvamVjdCgpKSkge1xuICAgICAgcHJvamVjdHMucHVzaChuZXdUb2RvLmdldFByb2plY3QoKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkZWxldGVUb2RvID0gKGluZGV4KSA9PiBsaXN0T2ZUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICByZXR1cm4geyBnZXRMaXN0T2ZUb2RvcywgZ2V0UHJvamVjdHMsIGFkZFRvZG8sIGRlbGV0ZVRvZG8gfTtcbn0pKCk7XG5cbmFkZE5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLyogZGlzcGxheSBhZGQgbmV3IGZvcm0gaW5jbHVkZXMgdGhlIGNvZGUgdG8gYWRkIHRoZSBuZXcgaXRlbSB0byB0aGUgXG4gICAgIHRvZG9saXN0IHN1cHBsaWVkLiBFYXNpZXIgdG8gZG8gaXQgdGhpcyB3YXkgc2luY2Ugb3RoZXJ3aXNlIHlvdSBoYXZlIHRvIFxuICAgICBxdWVyeS1zZWxlY3RvciBhbGwgdGhlIGZpZWxkcyBjcmVhdGVkIGJ5IHRoZSBhZGQgbmV3IGZvcm0sIGFzIHdlbGwgYXMgdGhlIFxuICAgICBidXR0b24uIFVsdGltYXRlbHkgaXQncyBqdXN0IHVzaW5nIGEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBzbyBcbiAgICAgc3RpbGwgY291bnRzIGFzIHNlcGFyYXRpb24gb2YgZGlzcGxheSBhbmQgYXBwbGljYXRpb24gbG9naWMgSSB0aGluay4gKi9cbiAgZGlzcGxheUFkZE9yRWRpdEZvcm0oYWxsVG9kb3MsIGh0bWxMaXN0LCBiYWNrZ3JvdW5kSW1hZ2VCb3gpO1xufSk7XG5cbi8vIHByb3ZpZGUgdXNlciB3aXRoIHR3byBleGFtcGxlc1xuYWxsVG9kb3MuYWRkVG9kbyh0b2RvSXRlbSh7XG4gIHRpdGxlOiAnTWVyZ2Ugc2FsZXMgYW5kIG1hcmtldGluZycsXG4gIHByb2plY3Q6ICdQcm9qZWN0IFpldXMnLFxuICBkZXNjcmlwdGlvbjogJ1lvdSB3aWxsIG5vdCBiZSBpbmZvcm1lZCBvZiB0aGUgbWVhbmluZyBvZiBQcm9qZWN0IFpldXMgdW50aWwgdGhlIHRpbWUgaXMgcmlnaHQgZm9yIHlvdSB0byBrbm93IHRoZSBtZWFuaW5nIG9mIFByb2plY3QgWmV1cycsXG4gIGR1ZURhdGU6ICdLZXR0ZXJpbmcgY29uZmVyZW5jZScsXG4gIHByaW9yaXR5OiAnSGlnaCcsXG59KSk7XG5hbGxUb2Rvcy5hZGRUb2RvKHRvZG9JdGVtKHtcbiAgdGl0bGU6ICdHbyBmb3IgYSBsdW5jaHRpbWUgcGludCcsXG4gIHByb2plY3Q6ICdTd2luZG9uIG1lcmdlcicsXG4gIGRlc2NyaXB0aW9uOiAnTWFrZSBzdXJlIHRoZSBiZXN0IHBlb3BsZSBzaG93IHVwJyxcbiAgZHVlRGF0ZTogJ1RoaXMgbHVuY2h0aW1lJyxcbiAgcHJpb3JpdHk6ICdNZWRpdW0nLFxufSkpO1xuXG5kaXNwbGF5VG9kb0xpc3QoYWxsVG9kb3MsIGh0bWxMaXN0LCBiYWNrZ3JvdW5kSW1hZ2VCb3gpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9