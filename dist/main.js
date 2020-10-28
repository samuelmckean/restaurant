/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/home */ \"./src/scripts/home.js\");\n/* harmony import */ var _scripts_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/contact */ \"./src/scripts/contact.js\");\n/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/menu */ \"./src/scripts/menu.js\");\n\r\n\r\n\r\n\r\nconst tabSwitch = (function() {\r\n// write tab-switching logic\r\n\r\n  const content = document.getElementById('content');\r\n\r\n  function _replaceChild(parentNode, newChild) {\r\n    while (parentNode.childElementCount !== 0) {\r\n      parentNode.removeChild(parentNode.lastChild);\r\n    }\r\n    parentNode.append(newChild);\r\n  }\r\n\r\n  const _homeClicked = function() {\r\n    _replaceChild(content, _scripts_home__WEBPACK_IMPORTED_MODULE_0__.home);\r\n  }\r\n\r\n  const _contactClicked = function() {\r\n    _replaceChild(content, _scripts_contact__WEBPACK_IMPORTED_MODULE_1__.contact);\r\n  }\r\n\r\n  const _menuClicked = function() {\r\n    _replaceChild(content, _scripts_menu__WEBPACK_IMPORTED_MODULE_2__.menu);\r\n  }\r\n\r\n  _homeClicked();\r\n\r\n  // wire up eventListeners\r\n  document.getElementById('home-nav').addEventListener('click', _homeClicked);\r\n  document.getElementById('contact-nav').addEventListener('click', _contactClicked);\r\n  document.getElementById('menu-nav').addEventListener('click', _menuClicked);\r\n})();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/*! namespace exports */
/*! export contact [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => /* binding */ contact\n/* harmony export */ });\nconst contact = (function() {\r\n  // creates a div and all the content, appends content to div, and returns div\r\n  const div = document.createElement('div');\r\n  div.id = 'contact';\r\n  \r\n  const h1 = document.createElement('h1');\r\n  h1.innerHTML = 'Contact';\r\n  \r\n  const address = document.createElement('p');\r\n  address.id = 'address';\r\n  address.innerHTML = 'Address: 1000 Restaurant Way, New York, NY';\r\n  \r\n  const email = document.createElement('p');\r\n  email.id = 'email';\r\n  email.innerHTML = 'Email: contact@restaurant.com';\r\n  \r\n  const phone = document.createElement('p');\r\n  phone.id = 'phone';\r\n  phone.innerHTML = 'Phone: (001)234-7589';\r\n  \r\n  div.append(h1, address, email, phone);\r\n\r\n  return div;\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/scripts/contact.js?");

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/*! namespace exports */
/*! export home [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => /* binding */ home\n/* harmony export */ });\nconst home = (function() {\r\n  const div = document.createElement('div');\r\n  div.id = 'homepage-content';\r\n\r\n  const h1 = document.createElement('h1');\r\n  h1.innerHTML = 'Fine Outdoor Dining Experience';\r\n  \r\n  const img = document.createElement('img');\r\n  img.src = \"./assets/restaurant.jpg\"; \r\n  \r\n  const p = document.createElement('p');\r\n  p.innerHTML = 'Please come to our amazing restaurant!';\r\n\r\n  div.append(h1, img, p);\r\n\r\n  return div; \r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/scripts/home.js?");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/*! namespace exports */
/*! export menu [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => /* binding */ menu\n/* harmony export */ });\nconst menu = (function() {\r\n  const div = document.createElement('div');\r\n  div.id = 'menu';\r\n\r\n  const title = document.createElement('h1');\r\n  title.id = 'title';\r\n  title.innerHTML = 'Menu';\r\n\r\n  const appetizersTitle = document.createElement('h2');\r\n  appetizersTitle.innerHTML = 'Appetizers';\r\n  const appetizersPara = document.createElement('p');\r\n  appetizersPara.id = 'appetizers';\r\n  appetizersPara.innerHTML = \r\n  `Mozzarella Sticks\r\n  Fried Jalapeno Poppers\r\n  Cheesy Fries`;\r\n\r\n  const entreesTitle = document.createElement('h2');\r\n  entreesTitle.innerHTML = 'Entrees';\r\n  const entreesPara = document.createElement('p');\r\n  entreesPara.id = 'entrees';\r\n  entreesPara.innerHTML = \r\n  `Filet Mignon\r\n  Pizza\r\n  Chicken Tenders`;\r\n\r\n  const dessertsTitle = document.createElement('h2');\r\n  dessertsTitle.innerHTML = 'Desserts';\r\n  const dessertsPara = document.createElement('p');\r\n  dessertsPara.id = 'desserts';\r\n  dessertsPara.innerHTML = \r\n  `Cheesecake\r\n  Chocolate Cake\r\n  Creme Brulee`;\r\n\r\n  div.append(\r\n    title, \r\n    appetizersTitle, \r\n    appetizersPara, \r\n    entreesTitle, \r\n    entreesPara, \r\n    dessertsTitle, \r\n    dessertsPara\r\n    );\r\n\r\n    return div;\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/scripts/menu.js?");

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
/******/ 			// no module.id needed
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