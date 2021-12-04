/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  background-color: rgb(230, 230, 230);\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n}\\n\\n/* Header styles */\\n.page__header {\\n  top: 0;\\n  width: 100%;\\n  z-index: 5;\\n  padding: 1rem;\\n}\\n\\n.page__header .navbar__menu {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 30px;\\n}\\n\\n/* Main styles */\\n.page__main {\\n  flex: auto;\\n  display: flex;\\n  gap: 5rem;\\n  flex: auto;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n@media (max-width: 1023px) {\\n  .page__main {\\n    flex-direction: column;\\n  }\\n}\\n\\n.left,\\n.right {\\n  display: grid;\\n  width: 30rem;\\n  height: 30rem;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n}\\n\\n@media (max-width: 1025px) {\\n  .left,\\n  .right {\\n    width: 28rem;\\n    height: 28rem;\\n  }\\n}\\n\\n@media (max-width: 767px) {\\n  .left,\\n  .right {\\n    width: 20rem;\\n    height: 20rem;\\n  }\\n}\\n\\n/* Footer styles */\\n.page__footer {\\n  display: flex;\\n\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  padding: 1rem;\\n  font-size: 20px;\\n  margin-top: auto;\\n}\\n\\n.page__footer .fa-github {\\n  color: #24292f;\\n  cursor: pointer;\\n  transition: all 1s ease-in-out;\\n}\\n\\n.page__footer .fa-github:hover {\\n  transform: rotate(360deg);\\n}\\n.board-cell {\\n  display: flex;\\n  border: 1px solid rgb(34, 34, 34);\\n  cursor: crosshair;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.board-cell:hover {\\n  background-color: beige;\\n}\\n\\n.headline {\\n  display: block;\\n  position: absolute;\\n  margin: auto;\\n  top: 15rem;\\n  font-size: 50px;\\n  color: black;\\n}\\n\\n.start-game-btn {\\n  display: block;\\n  position: absolute;\\n  margin: auto;\\n  padding: 1.5rem 5rem;\\n  border-radius: 50px;\\n  outline: none;\\n  border: none;\\n  font-size: 35px;\\n  background-color: cadetblue;\\n  color: white;\\n  font-weight: bolder;\\n  cursor: pointer;\\n  transition: all 0.3s ease-in-out;\\n}\\n\\n.start-game-btn:focus {\\n  transform: scale(0.8);\\n}\\n\\n.start-game-btn.hidden,\\n.headline.hidden {\\n  display: none;\\n}\\n\\n.board-cell.disabled {\\n  background-color: rgba(197, 197, 197, 0.493);\\n  cursor: not-allowed;\\n}\\n\\n.board-cell.ship-hit {\\n  cursor: not-allowed;\\n  background-color: rgb(231, 76, 76);\\n}\\n\\n.board-cell.sunk-ship {\\n  cursor: not-allowed;\\n  background-color: rgb(89, 91, 236);\\n}\\n\\n.board-cell.missed-shot {\\n  cursor: not-allowed;\\n  background-color: rgb(82, 218, 161);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-game/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _modules_gameDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameDOM */ \"./src/modules/gameDOM.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\nlet startBtn = document.querySelector(\".start-game-btn\");\nlet headline = document.querySelector(\".headline\");\n\nlet playerGameBoard = new _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet computerGameBoard = new _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nlet gameDom = new _modules_gameDOM__WEBPACK_IMPORTED_MODULE_2__[\"default\"](playerGameBoard, computerGameBoard);\nlet game = new _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gameDom);\n\nstartBtn.addEventListener(\"click\", () => {\n  game.startGame();\n  startBtn.classList.toggle(\"hidden\");\n  headline.classList.toggle(\"hidden\");\n});\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _gameDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameDOM */ \"./src/modules/gameDOM.js\");\n\n\nclass Game {\n  constructor(gameDom) {\n    this.gameover = false;\n    this.gameDom = gameDom;\n  }\n  startGame() {\n    this.gameDom.startGame();\n  }\n\n  restartGame() {\n    this.gameover = false;\n  }\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/gameDOM.js":
/*!********************************!*\
  !*** ./src/modules/gameDOM.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameDOM)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\n\nconst SIZE = 10;\n\nclass GameDOM {\n  /*\n   *TODO:\n      1- GameDOM comments \n      2- Allow drag & drop of ships \n   */\n\n  // Constructor, querying both boards, setting current player var, @params: players GameBoards\n  constructor(playerGameBoard, computerGameBoard) {\n    this.pBoard = document.querySelector(\".left\");\n    this.cBoard = document.querySelector(\".right\");\n    this.currentPlayer = null;\n    this.playerGameBoard = playerGameBoard;\n    this.computerGameBoard = computerGameBoard;\n  }\n\n  // Initializing both boards visuals with divs, allowing computer board to recieve click event with playerAttack\n  // setting coordinates as data-coord \"dataset\" on each div\n  initializeBoards() {\n    this.cBoard.addEventListener(\"click\", (e) => {\n      this.currentPlayer == \"player\" ? this.playerAttack(e) : null;\n    });\n\n    this.pBoard.textContent = \"\";\n    this.cBoard.textContent = \"\";\n\n    for (let row = 0; row < SIZE; row++) {\n      for (let col = 0; col < SIZE; col++) {\n        let div = document.createElement(\"div\");\n        div.setAttribute(\"data-coord\", `${row}-${col}`);\n        div.classList.add(\"board-cell\");\n        if (this.playerGameBoard.board[row][col] !== null) {\n          div.textContent = \"S\";\n        }\n\n        let div2 = document.createElement(\"div\");\n        div2.setAttribute(\"data-coord\", `${row}-${col}`);\n        div2.classList.add(\"board-cell\");\n\n        this.pBoard.appendChild(div);\n        this.cBoard.appendChild(div2);\n      }\n    }\n  }\n\n  // Helper Function:: switching active board to recieve attack based on current player turn\n  switchBoard() {\n    switch (this.currentPlayer) {\n      case \"player\":\n        this.disableFields(this.pBoard);\n        this.enableFields(this.cBoard);\n        break;\n      case \"computer\":\n        this.disableFields(this.cBoard);\n        this.enableFields(this.pBoard);\n        break;\n      default:\n        break;\n    }\n  }\n\n  // Helper Function:: disabling board if won't recieve attack \"for visualization only\", @params: targeted board\n  disableFields(board) {\n    let elementNodes = [...board.children];\n    elementNodes.forEach((node) => {\n      node.classList.add(\"disabled\");\n    });\n  }\n\n  // Helper Function:: enabling board to recieve attack \"for visualization only\" , @params: targeted board\n  enableFields(board) {\n    let elementNodes = [...board.children];\n    elementNodes.forEach((node) => {\n      node.classList.remove(\"disabled\");\n    });\n  }\n\n  // Helper Function:: switching player turn by setting currentPlayer variable as well as playing computerAttack on it's turn\n  switchTurn() {\n    if (this.currentPlayer === \"player\") {\n      this.currentPlayer = \"computer\";\n      this.computerAttack();\n    } else {\n      this.currentPlayer = \"player\";\n    }\n  }\n\n  // computer attack by generating random coordinates with recursive call till a successful or missed shot.\n  // checking if all ships sunk to gameover as well as switching turns & boards on missed shots\n  computerAttack() {\n    let row = Math.floor(Math.random() * SIZE);\n    let col = Math.floor(Math.random() * SIZE);\n    let coords = `${row}-${col}`;\n\n    let outcome = this.playerGameBoard.recieveAttack(coords);\n\n    if (this.successfulShot(outcome, this.pBoard, coords)) {\n      this.checkGameOver(this.playerGameBoard);\n      this.computerAttack();\n    } else if (this.MissedShot(outcome, this.pBoard, coords)) {\n      this.switchTurn();\n      this.switchBoard();\n    } else {\n      this.computerAttack();\n    }\n  }\n\n  // player attack on board click event, @params: coordinates from targeted element dataset \"data-coord\"\n  // checking if all ships sunk to gameover as well as switching turns & boards on missed shots\n  playerAttack(e) {\n    let coords = e.target.dataset.coord;\n    let outcome = this.computerGameBoard.recieveAttack(coords);\n    if (this.successfulShot(outcome, this.cBoard, coords)) {\n      this.checkGameOver(this.computerGameBoard);\n    } else if (this.MissedShot(outcome, this.cBoard, coords)) {\n      this.switchTurn();\n      this.switchBoard();\n    }\n  }\n\n  // Helper Function: checking if shot was successful by checking if outcome is a Ship instance as well as checking if ship is sunk or not\n  // highlights the ship hit or the ship if sunk\n  // @params: outcome: recieveAttack function return, targeted board, coordinates hit\n  successfulShot(outcome, board, coords) {\n    if (outcome instanceof _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      outcome.isSunk()\n        ? this.highlightSunkShip(outcome, board)\n        : this.highlightShipHit(board, coords);\n      return true;\n    }\n    return false;\n  }\n\n  //checking if shot was a missed shot if outcome param is true to highlight the cell\n  // @params: outcome: recieveAttack function return, targeted board, coordinates hit\n  MissedShot(outcome, board, coords) {\n    if (outcome === true) {\n      this.highlightMissedShot(board, coords);\n      return true;\n    }\n\n    return false;\n  }\n\n  // Helper Function: highlighting the ship hit by setting class on the cell\n  // @params: targeted board, coordinates\n  highlightShipHit(board, coords) {\n    board.querySelector(`[data-coord=\"${coords}\"]`).classList.add(\"ship-hit\");\n  }\n\n  // Helper Function: highlighting the missed shot by setting class on the cell\n  // @params: targeted board, coordinates\n  highlightMissedShot(board, coords) {\n    board\n      .querySelector(`[data-coord=\"${coords}\"]`)\n      .classList.add(\"missed-shot\");\n  }\n\n  // Helper Function: highlighting the sunk ship by setting class on the ship cells placement\n  // @params: ship object, targeted board\n  highlightSunkShip(ship, board) {\n    ship.coordinatesHit.forEach((coord) => {\n      board\n        .querySelector(`[data-coord=\"${coord[0]}-${coord[1]}\"]`)\n        .classList.remove(\"ship-hit\");\n      board\n        .querySelector(`[data-coord=\"${coord[0]}-${coord[1]}\"]`)\n        .classList.add(\"sunk-ship\");\n    });\n  }\n\n  // Helper Function: checking if game is over by checking if all ships on targeted board are sunk\n  // @params: targeted board\n  checkGameOver(board) {\n    if (board.AllShipsSunk()) {\n      let startBtn = document.querySelector(\".start-game-btn\");\n      let headline = document.querySelector(\".headline\");\n\n      headline.textContent = `Winner is: ${this.currentPlayer}`;\n      headline.classList.toggle(\"hidden\");\n\n      startBtn.textContent = \"Let's Play Again\";\n      startBtn.classList.toggle(\"hidden\");\n\n      this.resetGame();\n      return;\n    }\n  }\n\n  // start game function to initialize the board and setting the starting current player\n  startGame() {\n    this.initializeBoards();\n    this.currentPlayer = \"player\";\n    this.switchBoard();\n  }\n\n  // reset game function to reset all boards as well as player's game boards\n  resetGame() {\n    this.pBoard.textContent = \"\";\n    this.cBoard.textContent = \"\";\n    this.playerGameBoard.resetBoard();\n    this.computerGameBoard.resetBoard();\n  }\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/gameDOM.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\nconst SIZE = 10;\n\nclass Gameboard {\n  // Class Constructor @params: board, missedShots\n  constructor() {\n    this.board = [];\n    this.missedShots = [];\n    this.initializeBoard();\n    this.ships = [];\n    this.placeRandomShips();\n  }\n\n  // Initializing the board 2D array with null values & missed shots with false value\n  initializeBoard() {\n    for (let i = 0; i < SIZE; i++) {\n      this.board[i] = [];\n      this.missedShots[i] = [];\n      for (let j = 0; j < SIZE; j++) {\n        this.board[i][j] = null;\n        this.missedShots[i][j] = false;\n      }\n    }\n  }\n\n  // Add new ship on the board if position is allowed vertically or horizontally\n  addShip(ship, position, alignment) {\n    let pos = this.transformPosition(position);\n    switch (alignment) {\n      case \"horizontal\":\n        if (\n          this.possiblePlacementHorizontal(pos[0], pos[1], ship.getLength())\n        ) {\n          this.placeShipHorizontal(ship, pos[0], pos[1]);\n          this.ships.push(ship);\n          return true;\n        } else {\n          return false;\n        }\n        break;\n      case \"vertical\":\n        if (this.possiblePlacementVertical(pos[0], pos[1], ship.getLength())) {\n          this.placeShipVertical(ship, pos[0], pos[1]);\n          this.ships.push(ship);\n          return true;\n        } else {\n          return false;\n        }\n        break;\n      default:\n        break;\n    }\n  }\n\n  // Helper function to add ship in positions on board horizontally\n  placeShipHorizontal(ship, row, column) {\n    for (let i = 0; i < ship.getLength(); i++) {\n      this.board[row][column + i] = ship;\n    }\n  }\n\n  // Helper function to add ship in positions on board vertically\n  placeShipVertical(ship, row, column) {\n    for (let i = 0; i < ship.getLength(); i++) {\n      this.board[row + i][column] = ship;\n    }\n  }\n\n  // Helper Function\n  // transform String position to array of row & column\n  transformPosition(position) {\n    let [row, column] = position.split(\"-\");\n    return [Number(row), Number(column)];\n  }\n\n  // Checking possible placement for horizontal axis\n  possiblePlacementHorizontal(row, column, length) {\n    // Checking if position exceeds the board edges 'invalid position'\n    if (row < 0 || column < 0 || row > SIZE - 1 || column > SIZE - 1)\n      return false;\n\n    // Checking if the ship length exceeds the positions\n    if (column + length > SIZE) return false;\n\n    // Checking if placement positions are not empty\n    for (let i = 0; i < length; i++) {\n      if (this.board[row][column + i] !== null) return false;\n    }\n\n    /*\n     * Checking for neighbours to disallow placment unless 1 position away each direction including diagonal\n     */\n\n    // Checking row above\n    if (row > 0) {\n      for (let i = 0; i < length; i++) {\n        if (this.board[row - 1][column + i] !== null) return false;\n      }\n    }\n\n    // Checking row below\n    if (row < SIZE - 1) {\n      for (let i = 0; i < length; i++) {\n        if (this.board[row + 1][column + i] !== null) return false;\n      }\n    }\n\n    //checking block left\n    if (column > 0) {\n      if (this.board[row][column - 1] !== null) return false;\n    }\n\n    //checking block right\n    if (column + length <= SIZE - 1) {\n      if (this.board[row][column + length] !== null) return false;\n    }\n\n    // Checking digonal left side\n    if (column > 0) {\n      if (row > 0) {\n        if (this.board[row - 1][column - 1] !== null) return false;\n      }\n\n      if (row < SIZE - 1) {\n        if (this.board[row + 1][column - 1] !== null) return false;\n      }\n    }\n\n    // Checking digonal right side\n    if (column + length <= SIZE - 1) {\n      if (row > 0) {\n        if (this.board[row - 1][column + length] !== null) return false;\n      }\n      if (row < SIZE - 1) {\n        if (this.board[row + 1][column + length] !== null) return false;\n      }\n    }\n\n    return true;\n  }\n\n  // Checking possible placement for vertical axis\n  possiblePlacementVertical(row, column, length) {\n    // Checking if position exceeds the board edges 'invalid position'\n    if (row < 0 || column < 0 || row > SIZE - 1 || column > SIZE - 1)\n      return false;\n\n    // Checking if the ship length exceeds the positions\n    if (row + length > SIZE) return false;\n\n    // Checking if placement positions are not empty\n    for (let i = 0; i < length; i++) {\n      if (this.board[row + i][column] !== null) return false;\n    }\n\n    /*\n     * Checking for neighbours to disallow placment unless 1 position away each direction including diagonal\n     */\n\n    //checking column right\n    if (column < SIZE - 1) {\n      for (let i = 0; i < length; i++) {\n        if (this.board[row + i][column + 1] !== null) return false;\n      }\n    }\n\n    //checking column left\n    if (column > 0) {\n      for (let i = 0; i < length; i++) {\n        if (this.board[row + i][column - 1] !== null) return false;\n      }\n    }\n\n    // Checking block above\n    if (row > 0) {\n      if (this.board[row - 1][column] !== null) return false;\n    }\n\n    // Checking block below\n    if (row + length <= SIZE - 1) {\n      if (this.board[row + length][column] !== null) return false;\n    }\n\n    // Checking digonal above\n    if (row > 0) {\n      if (column > 0) {\n        if (this.board[row - 1][column - 1] !== null) return false;\n      }\n      if (column < SIZE - 1) {\n        if (this.board[row - 1][column + 1] !== null) return false;\n      }\n    }\n\n    // Checking digonal below\n    if (row + length <= SIZE - 1) {\n      if (column > 0) {\n        if (this.board[row + length][column - 1] !== null) return false;\n      }\n      if (column < SIZE - 1) {\n        if (this.board[row + length][column + 1] !== null) return false;\n      }\n    }\n\n    return true;\n  }\n\n  // Recieve Attack function based on clicked position, and adds it as true to missedShots if empty location\n  recieveAttack(pos) {\n    let position = this.transformPosition(pos);\n    if (this.board[position[0]][position[1]] !== null) {\n      let targetedShip = this.board[position[0]][position[1]];\n      if (targetedShip.hit(position)) {\n        return targetedShip;\n      } else {\n        return false;\n      }\n    } else if (!this.missedShots[position[0]][position[1]] === true) {\n      this.missedShots[position[0]][position[1]] = true;\n      return true;\n    }\n    return false;\n  }\n\n  // Checks if all ships have been sunk\n  AllShipsSunk() {\n    return this.ships.every((ship) => ship.isSunk());\n  }\n\n  // Printing board visualization\n  printBoard() {\n    let output = \"\";\n    for (let i = 0; i < SIZE; i++) {\n      output += \"[\";\n      for (let j = 0; j < SIZE; j++) {\n        output += this.board[i][j] + \" , \";\n      }\n      output += \"]\\n\";\n    }\n\n    console.log(output);\n  }\n\n  placeRandomShips() {\n    let i = 0;\n    let shipsLength = [5, 4, 3, 3, 2];\n    while (shipsLength.length > 0) {\n      let row = Math.floor(Math.random() * SIZE);\n      let col = Math.floor(Math.random() * SIZE);\n      let outcome = this.addShip(\n        new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](shipsLength[i], row, col, \"horizontal\"),\n        `${row}-${col}`,\n        \"horizontal\"\n      );\n      if (outcome) {\n        shipsLength.shift();\n      }\n    }\n  }\n\n  resetBoard() {\n    this.board = [];\n    this.missedShots = [];\n    this.initializeBoard();\n    this.ships = [];\n    this.placeRandomShips();\n  }\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length, startRow, startCol, alignment) {\n    this.length = length; // Ship length\n    this.hits = []; // Tracks positions been hit in the ship\n    this.startRow = startRow;\n    this.startCol = startCol;\n    this.alignment = alignment;\n    this.coordinatesHit = [];\n  }\n\n  // adds the position hit to the hits list if matches the critiera, coordinates: \"1-2\" (\"row-column\")\n  hit(coordinates) {\n    let position = null;\n    switch (this.alignment) {\n      case \"horizontal\":\n        position = coordinates[1] - this.startCol;\n        break;\n      case \"vertical\":\n        position = coordinates[0] - this.startRow;\n        break;\n      default:\n        break;\n    }\n\n    if (\n      this.hits.includes(position) ||\n      position < 0 ||\n      position >= this.length\n    ) {\n      return false;\n    }\n    this.hits.push(position);\n    this.coordinatesHit.push(coordinates);\n    return true;\n  }\n\n  // returns true or false if all hits positions in the ship matches the length\n  isSunk() {\n    return this.hits.length === this.length;\n  }\n\n  // Returns ship's length\n  getLength() {\n    return this.length;\n  }\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/ship.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;