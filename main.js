/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #89cff0;\n}\n\n:root {\n  --ribbion-color: #ffd700;\n}\n\nh1 {\n  font-size: 3em;\n}\n/* button to open form */\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* popup form - hidden by default */\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n.form-container {\n  display: block;\n  width: 300px;\n  padding: 10px;\n  background-color: white;\n  text-align: center;\n}\n\n/* Full-width input fields */\n.form-container input[type=\"text\"],\n.form-container input[type=\"password\"],\n.form-container input[type=\"number\"] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n.checkbox {\n  display: inline-block;\n  width: 100%;\n  padding: 15px 0 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  text-align: left;\n}\n\ninput[type=\"checkbox\"] {\n  margin-right: 15px;\n}\n\n.btn {\n  background-color: black;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n\n.library-container .un-read {\n  background-color: black;\n}\n\n.form-container .btn {\n  background-color: #4caf50;\n}\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n  background-color: red;\n}\n\n.library-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.book {\n  display: block;\n  margin: 15px;\n  background-color: #f8e6b8;\n  height: 300px;\n  width: 200px;\n  font-size: 1.5em;\n  padding: 15px 10px 10px;\n  border-radius: 10px;\n  border: 2px solid black;\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 1.5fr repeat(3, 1fr);\n  gap: 5px;\n  align-items: center;\n}\n\nbody {\n  text-align: center;\n}\n\n.ribbon {\n  margin: 0;\n  padding: 0;\n  background: var(--ribbion-color);\n  color: white;\n  padding: 0 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translateX(70%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  font-size: 0.6em;\n  min-height: 17px;\n  min-width: 42px;\n}\n.ribbon:before,\n.ribbon:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  margin: 0 -1px; /* tweak */\n  width: 100%;\n  height: 100%;\n  /* width: 40px;\n    height: 20px;\n    border-bottom: 2px solid black; */\n  background: var(--ribbion-color);\n}\n.ribbon:before {\n  right: 100%;\n}\n\n.ribbon:after {\n  left: 100%;\n}\n\n.author,\n.pages {\n  font-size: 0.75em;\n}\n\n.book > div {\n  align-self: start;\n  word-wrap: break-word;\n  overflow: hidden;\n}\n\n#close {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  font-weight: bold;\n  color: red;\n  font-size: 0.8em;\n}\n\n#close:hover {\n  display: inline-block;\n  color: red;\n  cursor: pointer;\n  transform: scale(1.2);\n}\n\n/* input:invalid {\n  background-color: #FDD;\n  border-color: #900;\n  margin-bottom: 0px;\n} */\n\ninput:focus:invalid {\n  outline: none;\n}\n\n.error {\n  width  : 100%;\n  padding: 0;\n\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.3em;\n  margin-bottom: 4px;\n  display: block;\n}\n\ninput.active {\n  margin-bottom: 0px !important;\n  background-color: #FDD !important;\n}\n\n@media only screen and (max-width: 475px) {\n  .library-container {\n    justify-content: center;\n  }\n\n  .form-popup {\n    position: fixed;\n    align-self: center;\n    border: 3px solid #f1f1f1;\n    z-index: 9;\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    transform: translate(-50%, -50%);\n  }\n\n  .wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .open-button {\n    position: initial;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,cAAc;AAChB;AACA,wBAAwB;AACxB;EACE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA,mCAAmC;AACnC;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA,4BAA4B;AAC5B;;;EAGE,WAAW;EACX,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,oBAAoB;EACpB,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,oDAAoD;AACpD;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;EACb,wCAAwC;EACxC,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,uDAAuD;EACvD,0BAA0B;EAC1B,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;AACjB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,cAAc,EAAE,UAAU;EAC1B,WAAW;EACX,YAAY;EACZ;;qCAEmC;EACnC,gCAAgC;AAClC;AACA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,qBAAqB;EACrB,cAAc;EACd,iBAAiB;EACjB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,eAAe;EACf,qBAAqB;AACvB;;AAEA;;;;GAIG;;AAEH;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,UAAU;;EAEV,cAAc;EACd,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;;EAE1B,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,iCAAiC;AACnC;;AAEA;EACE;IACE,uBAAuB;EACzB;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,yBAAyB;IACzB,UAAU;IACV,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,gCAAgC;EAClC;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #89cff0;\n}\n\n:root {\n  --ribbion-color: #ffd700;\n}\n\nh1 {\n  font-size: 3em;\n}\n/* button to open form */\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* popup form - hidden by default */\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n.form-container {\n  display: block;\n  width: 300px;\n  padding: 10px;\n  background-color: white;\n  text-align: center;\n}\n\n/* Full-width input fields */\n.form-container input[type=\"text\"],\n.form-container input[type=\"password\"],\n.form-container input[type=\"number\"] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n.checkbox {\n  display: inline-block;\n  width: 100%;\n  padding: 15px 0 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  text-align: left;\n}\n\ninput[type=\"checkbox\"] {\n  margin-right: 15px;\n}\n\n.btn {\n  background-color: black;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n\n.library-container .un-read {\n  background-color: black;\n}\n\n.form-container .btn {\n  background-color: #4caf50;\n}\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n  background-color: red;\n}\n\n.library-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.book {\n  display: block;\n  margin: 15px;\n  background-color: #f8e6b8;\n  height: 300px;\n  width: 200px;\n  font-size: 1.5em;\n  padding: 15px 10px 10px;\n  border-radius: 10px;\n  border: 2px solid black;\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 1.5fr repeat(3, 1fr);\n  gap: 5px;\n  align-items: center;\n}\n\nbody {\n  text-align: center;\n}\n\n.ribbon {\n  margin: 0;\n  padding: 0;\n  background: var(--ribbion-color);\n  color: white;\n  padding: 0 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translateX(70%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  font-size: 0.6em;\n  min-height: 17px;\n  min-width: 42px;\n}\n.ribbon:before,\n.ribbon:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  margin: 0 -1px; /* tweak */\n  width: 100%;\n  height: 100%;\n  /* width: 40px;\n    height: 20px;\n    border-bottom: 2px solid black; */\n  background: var(--ribbion-color);\n}\n.ribbon:before {\n  right: 100%;\n}\n\n.ribbon:after {\n  left: 100%;\n}\n\n.author,\n.pages {\n  font-size: 0.75em;\n}\n\n.book > div {\n  align-self: start;\n  word-wrap: break-word;\n  overflow: hidden;\n}\n\n#close {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  font-weight: bold;\n  color: red;\n  font-size: 0.8em;\n}\n\n#close:hover {\n  display: inline-block;\n  color: red;\n  cursor: pointer;\n  transform: scale(1.2);\n}\n\n/* input:invalid {\n  background-color: #FDD;\n  border-color: #900;\n  margin-bottom: 0px;\n} */\n\ninput:focus:invalid {\n  outline: none;\n}\n\n.error {\n  width  : 100%;\n  padding: 0;\n\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.3em;\n  margin-bottom: 4px;\n  display: block;\n}\n\ninput.active {\n  margin-bottom: 0px !important;\n  background-color: #FDD !important;\n}\n\n@media only screen and (max-width: 475px) {\n  .library-container {\n    justify-content: center;\n  }\n\n  .form-popup {\n    position: fixed;\n    align-self: center;\n    border: 3px solid #f1f1f1;\n    z-index: 9;\n    left: 50%;\n    top: 50%;\n    bottom: auto;\n    right: auto;\n    transform: translate(-50%, -50%);\n  }\n\n  .wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .open-button {\n    position: initial;\n  }\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");

const openForm = document.querySelector("#newBook")
const closeForm = document.querySelector('#cancel-button')
const submitForm = document.querySelector('#submit-button')
const readButtons = document.querySelector('.library-container');
const closeButtons = document.querySelector('.library-container');
const form = document.querySelector('.form-container');
const inputs = document.querySelectorAll('.form-container input');


let myLibrary = [];
let key = 0;
let saveToLocalStorage = () => {
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

let removeFromLocalStorage = () => {
    localStorage.removeItem('library');
}

let loadFromLocalStorage = () => {
    let library = localStorage.getItem('library')

    if (library) {
        myLibrary = JSON.parse(library);
        listBooks();
    }
    
}


class Book {
    constructor(title, author, pages, read) {
        this.key = key++;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

}

function addBookToLibrary(...args) {
    const title = args[0];
    const author = args[1];
    const pageCount = args[2];
    const read = args[3];

    const newBook = new Book(title, author, Number(pageCount), read);

    myLibrary.push(newBook);
    listBooks();

}

function listBooks() {
    const library = document.querySelector('.library-container');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        const close = document.createElement('span');
        close.id = 'close';
        close.innerHTML = 'x'

        bookDiv.classList.add('book');

        for (let key in book) {
            if (key==='key') {
                bookDiv.setAttribute('data-key', book[key]);
                continue;
            } else if (key == 'read') {
                const ribbon = document.createElement('h4');
                let content = document.createElement('button');
                // ribbon.innerHTML = 'unread'
                ribbon.classList.add('ribbon')

                if (book[key]) {
                    ribbon.style.display = 'none';
                    content.innerHTML = 'Complete';
                } else {
                    ribbon.style.display = 'block';
                    content.classList.add('un-read', 'btn');
                    content.innerHTML = 'Not Read';
                }
                content.classList.add('btn', 'read-button')
                bookDiv.appendChild(content)
                bookDiv.appendChild(ribbon)
                continue;

            }
            let postfix = (typeof book[key] != 'number') ? '' : ' pg';
            let content = document.createElement('div');
            content.classList.add(`${key}`);
            content.innerHTML = book[key] + postfix;
            bookDiv.appendChild(content);
            bookDiv.appendChild(close);
        }

        library.appendChild(bookDiv)

    })

    saveToLocalStorage();

}

function showHideForm(e) {
    const popup = document.querySelector('.form-popup');
    const formData = document.querySelector('form')

    if (this.id === 'newBook') {
        popup.style.display = 'block';
    } else if (this.id === 'cancel-button' || this.id === 'submit-button' ) {
        popup.style.display = 'none';
        formData.reset();
    }
}

function getFormData() {
    const formData = document.querySelector('form')
    if (!formValidation.validateAll(formData)) {
        return
    }

    showHideForm.call(this)
    addBookToLibrary(formData.title.value, formData.author.value, formData['page-count'].value, formData.read.checked)
}

function flipRead(e) {
    if (!e.target.classList.contains('read-button')) return;
    let dataKey = Number(e.target.parentElement.dataset.key);
    let ribbon = e.target.parentElement.lastElementChild;

    if (e.target.classList.contains('un-read')) {
        e.target.classList.remove('un-read')
        e.target.innerHTML = 'Complete'
        ribbon.style.display = 'none';

    } else {
        e.target.classList.add('un-read')
        e.target.innerHTML = 'Not Read'
        ribbon.style.display = 'block'
    }

    for (const  [index, element] of myLibrary.entries()) {
        if (element.key === dataKey) {
            myLibrary[index].read = !myLibrary[index].read
        }
    }

    saveToLocalStorage();
}

function removeBook(e) {
    if (e.target.id != 'close') return;
    let dataKey = Number(e.target.parentElement.dataset.key);

    for (const  [index, element] of myLibrary.entries()) {
        if (element.key === dataKey) {
            myLibrary.splice(index , 1);
        }
    }
    
    listBooks();
    
}

const formValidation = (() => {

    const validateTitle = (element) => {
        const titleError = document.querySelector('[name="title"] + span.error')
        if (element.validity.valid) {
            titleError.textContent = '';
            titleError.className = 'error';
            element.classList.remove('active')
        } else {
            showError(element, titleError)
        }
    }

    const validateAuthor = (element) => {
        const authorError = document.querySelector('[name="author"] + span.error')
        if (element.validity.valid) {
            authorError.textContent = '';
            authorError.className = 'error';
            element.classList.remove('active')
        } else {
            showError(element, authorError)
        }
    }

    const validatePageCount = (element) => {
        const pageError = document.querySelector('[name="page-count"] + span.error')
        if (element.validity.valid) {
            pageError.textContent = '';
            pageError.className = 'error';
            element.classList.remove('active')
        } else {
            showError(element, pageError)
        }
    }

    const validateAll = (form) => {
        const formData = form
        const fields = [formData.title, formData.author, formData['page-count']]
        let valid = true;
        fields.forEach(field => {
            if (!field.validity.valid) {
                const errorSpan = field.nextElementSibling;
                showError(field, errorSpan);
                valid = false;
            }
        })
        
        return valid
    }

    const showError = (field, errorSpan) => {
        if (field.validity.valueMissing) {
            errorSpan.textContent = 'Please enter a value';
        } else if (field.validity.typeMismatch) {
            errorSpan.textContent = 'Value needs to be valid';
        } else if (field.validity.tooShort) {
            errorSpan.textContent = `Field should be at least ${field.minLength} characters`
        } else if (field.validity.rangeUnderflow) {
            errorSpan.textContent = `Every book has at least ${field.min} page`
        }

        errorSpan.classList.add('active')
        field.classList.add('active')

    }

    return {
        validateTitle,
        validateAuthor,
        validatePageCount,
        validateAll,
    }

})();



function validateOnBlur(e) {
    const element = e.target;
    const name = element.name;
    if (name === 'read') return;

    switch(name) {
        case 'title': 
            formValidation.validateTitle(element);
            break;
        case 'author':
            formValidation.validateAuthor(element);
            break;
        case 'page-count':
            formValidation.validatePageCount(element);
            break;
        default:
            console.log('oops')
    }

}

loadFromLocalStorage();

openForm.addEventListener('click', showHideForm);
closeForm.addEventListener('click', showHideForm);
submitForm.addEventListener('click', getFormData);
readButtons.addEventListener('click', flipRead);
closeButtons.addEventListener('click', removeBook);
inputs.forEach(input => input.addEventListener('blur', validateOnBlur))

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDZDQUE2QywyQkFBMkIsR0FBRyxVQUFVLDhCQUE4QixHQUFHLFdBQVcsNkJBQTZCLEdBQUcsUUFBUSxtQkFBbUIsR0FBRywyQ0FBMkMsMkJBQTJCLGlCQUFpQix1QkFBdUIsaUJBQWlCLG9C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QSx1RTs7Ozs7O1VDbFJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODljZmYwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJpYmJpb24tY29sb3I6ICNmZmQ3MDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG4vKiBidXR0b24gdG8gb3BlbiBmb3JtICovXFxuLm9wZW4tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIzcHg7XFxuICByaWdodDogMjhweDtcXG4gIHdpZHRoOiAyODBweDtcXG59XFxuXFxuLyogcG9wdXAgZm9ybSAtIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuLmZvcm0tcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLFxcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDVweCAwIDIycHggMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4O1xcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmxpYnJhcnktY29udGFpbmVyIC51bi1yZWFkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmxpYnJhcnktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib29rIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZTZiODtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgcGFkZGluZzogMTVweCAxMHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJpYmJvbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmliYmlvbi1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3MCUpIHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gIGZvbnQtc2l6ZTogMC42ZW07XFxuICBtaW4taGVpZ2h0OiAxN3B4O1xcbiAgbWluLXdpZHRoOiA0MnB4O1xcbn1cXG4ucmliYm9uOmJlZm9yZSxcXG4ucmliYm9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luOiAwIC0xcHg7IC8qIHR3ZWFrICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGJhY2tncm91bmQ6IHZhcigtLXJpYmJpb24tY29sb3IpO1xcbn1cXG4ucmliYm9uOmJlZm9yZSB7XFxuICByaWdodDogMTAwJTtcXG59XFxuXFxuLnJpYmJvbjphZnRlciB7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cXG4uYXV0aG9yLFxcbi5wYWdlcyB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuXFxuLmJvb2sgPiBkaXYge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4jY2xvc2U6aG92ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogaW5wdXQ6aW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkREO1xcbiAgYm9yZGVyLWNvbG9yOiAjOTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn0gKi9cXG5cXG5pbnB1dDpmb2N1czppbnZhbGlkIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5lcnJvciB7XFxuICB3aWR0aCAgOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGZvbnQtc2l6ZTogODAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmVycm9yLmFjdGl2ZSB7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbnB1dC5hY3RpdmUge1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkREICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc1cHgpIHtcXG4gIC5saWJyYXJ5LWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZvcm0tcG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gICAgei1pbmRleDogOTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgYm90dG9tOiBhdXRvO1xcbiAgICByaWdodDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB9XFxuXFxuICAud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLm9wZW4tYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGluaXRpYWw7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0Esd0JBQXdCO0FBQ3hCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixZ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Q25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWNmZjA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmliYmlvbi1jb2xvcjogI2ZmZDcwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcbi8qIGJ1dHRvbiB0byBvcGVuIGZvcm0gKi9cXG4ub3Blbi1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjNweDtcXG4gIHJpZ2h0OiAyOHB4O1xcbiAgd2lkdGg6IDI4MHB4O1xcbn1cXG5cXG4vKiBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4uZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgei1pbmRleDogOTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweCAwIDE1cHg7XFxuICBtYXJnaW46IDVweCAwIDIycHggMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubGlicmFyeS1jb250YWluZXIgLnVuLXJlYWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciAuYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXFxuLmZvcm0tY29udGFpbmVyIC5jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubGlicmFyeS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvb2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhlNmI4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmliYm9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yaWJiaW9uLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDcwJSkgdHJhbnNsYXRlWSgwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgZm9udC1zaXplOiAwLjZlbTtcXG4gIG1pbi1oZWlnaHQ6IDE3cHg7XFxuICBtaW4td2lkdGg6IDQycHg7XFxufVxcbi5yaWJib246YmVmb3JlLFxcbi5yaWJib246YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBtYXJnaW46IDAgLTFweDsgLyogdHdlYWsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmliYmlvbi1jb2xvcik7XFxufVxcbi5yaWJib246YmVmb3JlIHtcXG4gIHJpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucmliYm9uOmFmdGVyIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbi5hdXRob3IsXFxuLnBhZ2VzIHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbn1cXG5cXG4uYm9vayA+IGRpdiB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNjbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbiNjbG9zZTpob3ZlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBpbnB1dDppbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREQ7XFxuICBib3JkZXItY29sb3I6ICM5MDA7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufSAqL1xcblxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gIHdpZHRoICA6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgZm9udC1zaXplOiA4MCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZXJyb3IuYWN0aXZlIHtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmlucHV0LmFjdGl2ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREQgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzVweCkge1xcbiAgLmxpYnJhcnktY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZm9ybS1wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBib3R0b206IGF1dG87XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIH1cXG5cXG4gIC53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAub3Blbi1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmNvbnN0IG9wZW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdCb29rXCIpXHJcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtYnV0dG9uJylcclxuY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnV0dG9uJylcclxuY29uc3QgcmVhZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlicmFyeS1jb250YWluZXInKTtcclxuY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpYnJhcnktY29udGFpbmVyJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udGFpbmVyIGlucHV0Jyk7XHJcblxyXG5cclxubGV0IG15TGlicmFyeSA9IFtdO1xyXG5sZXQga2V5ID0gMDtcclxubGV0IHNhdmVUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaWJyYXJ5JywgSlNPTi5zdHJpbmdpZnkobXlMaWJyYXJ5KSk7XHJcbn1cclxuXHJcbmxldCByZW1vdmVGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xpYnJhcnknKTtcclxufVxyXG5cclxubGV0IGxvYWRGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgbGV0IGxpYnJhcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlicmFyeScpXHJcblxyXG4gICAgaWYgKGxpYnJhcnkpIHtcclxuICAgICAgICBteUxpYnJhcnkgPSBKU09OLnBhcnNlKGxpYnJhcnkpO1xyXG4gICAgICAgIGxpc3RCb29rcygpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5jbGFzcyBCb29rIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkKSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXkrKztcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xyXG4gICAgICAgIHRoaXMucmVhZCA9IHJlYWQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gYXJnc1swXTtcclxuICAgIGNvbnN0IGF1dGhvciA9IGFyZ3NbMV07XHJcbiAgICBjb25zdCBwYWdlQ291bnQgPSBhcmdzWzJdO1xyXG4gICAgY29uc3QgcmVhZCA9IGFyZ3NbM107XHJcblxyXG4gICAgY29uc3QgbmV3Qm9vayA9IG5ldyBCb29rKHRpdGxlLCBhdXRob3IsIE51bWJlcihwYWdlQ291bnQpLCByZWFkKTtcclxuXHJcbiAgICBteUxpYnJhcnkucHVzaChuZXdCb29rKTtcclxuICAgIGxpc3RCb29rcygpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdEJvb2tzKCkge1xyXG4gICAgY29uc3QgbGlicmFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWJyYXJ5LWNvbnRhaW5lcicpO1xyXG4gICAgd2hpbGUgKGxpYnJhcnkuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGxpYnJhcnkucmVtb3ZlQ2hpbGQobGlicmFyeS5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIG15TGlicmFyeS5mb3JFYWNoKGJvb2sgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvb2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjbG9zZS5pZCA9ICdjbG9zZSc7XHJcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJ3gnXHJcblxyXG4gICAgICAgIGJvb2tEaXYuY2xhc3NMaXN0LmFkZCgnYm9vaycpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYm9vaykge1xyXG4gICAgICAgICAgICBpZiAoa2V5PT09J2tleScpIHtcclxuICAgICAgICAgICAgICAgIGJvb2tEaXYuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGJvb2tba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT0gJ3JlYWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByaWJib24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIC8vIHJpYmJvbi5pbm5lckhUTUwgPSAndW5yZWFkJ1xyXG4gICAgICAgICAgICAgICAgcmliYm9uLmNsYXNzTGlzdC5hZGQoJ3JpYmJvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJvb2tba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJpYmJvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJ0NvbXBsZXRlJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmliYm9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndW4tcmVhZCcsICdidG4nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICdOb3QgUmVhZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2J0bicsICdyZWFkLWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBib29rRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICBib29rRGl2LmFwcGVuZENoaWxkKHJpYmJvbilcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zdGZpeCA9ICh0eXBlb2YgYm9va1trZXldICE9ICdudW1iZXInKSA/ICcnIDogJyBwZyc7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChgJHtrZXl9YCk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYm9va1trZXldICsgcG9zdGZpeDtcclxuICAgICAgICAgICAgYm9va0Rpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgICAgICAgICAgYm9va0Rpdi5hcHBlbmRDaGlsZChjbG9zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaWJyYXJ5LmFwcGVuZENoaWxkKGJvb2tEaXYpXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dIaWRlRm9ybShlKSB7XHJcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBvcHVwJyk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxyXG5cclxuICAgIGlmICh0aGlzLmlkID09PSAnbmV3Qm9vaycpIHtcclxuICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pZCA9PT0gJ2NhbmNlbC1idXR0b24nIHx8IHRoaXMuaWQgPT09ICdzdWJtaXQtYnV0dG9uJyApIHtcclxuICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGZvcm1EYXRhLnJlc2V0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1EYXRhKCkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcclxuICAgIGlmICghZm9ybVZhbGlkYXRpb24udmFsaWRhdGVBbGwoZm9ybURhdGEpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0hpZGVGb3JtLmNhbGwodGhpcylcclxuICAgIGFkZEJvb2tUb0xpYnJhcnkoZm9ybURhdGEudGl0bGUudmFsdWUsIGZvcm1EYXRhLmF1dGhvci52YWx1ZSwgZm9ybURhdGFbJ3BhZ2UtY291bnQnXS52YWx1ZSwgZm9ybURhdGEucmVhZC5jaGVja2VkKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmbGlwUmVhZChlKSB7XHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVhZC1idXR0b24nKSkgcmV0dXJuO1xyXG4gICAgbGV0IGRhdGFLZXkgPSBOdW1iZXIoZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmtleSk7XHJcbiAgICBsZXQgcmliYm9uID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3VuLXJlYWQnKSkge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3VuLXJlYWQnKVxyXG4gICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9ICdDb21wbGV0ZSdcclxuICAgICAgICByaWJib24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3VuLXJlYWQnKVxyXG4gICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9ICdOb3QgUmVhZCdcclxuICAgICAgICByaWJib24uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0ICBbaW5kZXgsIGVsZW1lbnRdIG9mIG15TGlicmFyeS5lbnRyaWVzKCkpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5rZXkgPT09IGRhdGFLZXkpIHtcclxuICAgICAgICAgICAgbXlMaWJyYXJ5W2luZGV4XS5yZWFkID0gIW15TGlicmFyeVtpbmRleF0ucmVhZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQm9vayhlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuaWQgIT0gJ2Nsb3NlJykgcmV0dXJuO1xyXG4gICAgbGV0IGRhdGFLZXkgPSBOdW1iZXIoZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmtleSk7XHJcblxyXG4gICAgZm9yIChjb25zdCAgW2luZGV4LCBlbGVtZW50XSBvZiBteUxpYnJhcnkuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQua2V5ID09PSBkYXRhS2V5KSB7XHJcbiAgICAgICAgICAgIG15TGlicmFyeS5zcGxpY2UoaW5kZXggLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxpc3RCb29rcygpO1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0aW9uID0gKCgpID0+IHtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZVRpdGxlID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXSArIHNwYW4uZXJyb3InKVxyXG4gICAgICAgIGlmIChlbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRpdGxlRXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgdGl0bGVFcnJvci5jbGFzc05hbWUgPSAnZXJyb3InO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0Vycm9yKGVsZW1lbnQsIHRpdGxlRXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlQXV0aG9yID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBhdXRob3JFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYXV0aG9yXCJdICsgc3Bhbi5lcnJvcicpXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgICAgICAgYXV0aG9yRXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgYXV0aG9yRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dFcnJvcihlbGVtZW50LCBhdXRob3JFcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVQYWdlQ291bnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFnZS1jb3VudFwiXSArIHNwYW4uZXJyb3InKVxyXG4gICAgICAgIGlmIChlbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHBhZ2VFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICBwYWdlRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dFcnJvcihlbGVtZW50LCBwYWdlRXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlQWxsID0gKGZvcm0pID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGZvcm1cclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBbZm9ybURhdGEudGl0bGUsIGZvcm1EYXRhLmF1dGhvciwgZm9ybURhdGFbJ3BhZ2UtY291bnQnXV1cclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgaWYgKCFmaWVsZC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JTcGFuID0gZmllbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKGZpZWxkLCBlcnJvclNwYW4pO1xyXG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKGZpZWxkLCBlcnJvclNwYW4pID0+IHtcclxuICAgICAgICBpZiAoZmllbGQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgICAgICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9ICdQbGVhc2UgZW50ZXIgYSB2YWx1ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gJ1ZhbHVlIG5lZWRzIHRvIGJlIHZhbGlkJztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICAgICAgICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IGBGaWVsZCBzaG91bGQgYmUgYXQgbGVhc3QgJHtmaWVsZC5taW5MZW5ndGh9IGNoYXJhY3RlcnNgXHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC52YWxpZGl0eS5yYW5nZVVuZGVyZmxvdykge1xyXG4gICAgICAgICAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBgRXZlcnkgYm9vayBoYXMgYXQgbGVhc3QgJHtmaWVsZC5taW59IHBhZ2VgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlcnJvclNwYW4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbGlkYXRlVGl0bGUsXHJcbiAgICAgICAgdmFsaWRhdGVBdXRob3IsXHJcbiAgICAgICAgdmFsaWRhdGVQYWdlQ291bnQsXHJcbiAgICAgICAgdmFsaWRhdGVBbGwsXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZU9uQmx1cihlKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBuYW1lID0gZWxlbWVudC5uYW1lO1xyXG4gICAgaWYgKG5hbWUgPT09ICdyZWFkJykgcmV0dXJuO1xyXG5cclxuICAgIHN3aXRjaChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSAndGl0bGUnOiBcclxuICAgICAgICAgICAgZm9ybVZhbGlkYXRpb24udmFsaWRhdGVUaXRsZShlbGVtZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXV0aG9yJzpcclxuICAgICAgICAgICAgZm9ybVZhbGlkYXRpb24udmFsaWRhdGVBdXRob3IoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3BhZ2UtY291bnQnOlxyXG4gICAgICAgICAgICBmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZVBhZ2VDb3VudChlbGVtZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29vcHMnKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbm9wZW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0hpZGVGb3JtKTtcclxuY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0hpZGVGb3JtKTtcclxuc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldEZvcm1EYXRhKTtcclxucmVhZEJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwUmVhZCk7XHJcbmNsb3NlQnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUJvb2spO1xyXG5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdmFsaWRhdGVPbkJsdXIpKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=