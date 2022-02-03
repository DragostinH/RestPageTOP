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

/***/ "./src/addClickEventListener.js":
/*!**************************************!*\
  !*** ./src/addClickEventListener.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addClickEvenListener)\n/* harmony export */ });\nfunction addClickEvenListener(element, parent, imgURL){\n    element.addEventListener('click', ()=>{\n        parent.style.backgroundImage = `url(${imgURL})`;\n    })\n}\n\n//# sourceURL=webpack://repos/./src/addClickEventListener.js?");

/***/ }),

/***/ "./src/anchorTag.js":
/*!**************************!*\
  !*** ./src/anchorTag.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAnchor)\n/* harmony export */ });\n\n\nfunction createAnchor() {\n    const anchor = document.createElement('a');\n\n    return anchor;\n}\n\n//# sourceURL=webpack://repos/./src/anchorTag.js?");

/***/ }),

/***/ "./src/article.js":
/*!************************!*\
  !*** ./src/article.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createArticle)\n/* harmony export */ });\nfunction createArticle(param) {\n\n    const article = document.createElement('article');\n    const headline = document.createElement('h1');\n    const section = document.createElement('section');\n    article.appendChild(headline);\n    article.appendChild(section);\n    param.appendChild(article);\n    return { article, headline, section };\n\n}\n\n//# sourceURL=webpack://repos/./src/article.js?");

/***/ }),

/***/ "./src/div.js":
/*!********************!*\
  !*** ./src/div.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createDiv)\n/* harmony export */ });\nfunction createDiv() {\n    const div = document.createElement('div');\n    return div;\n}\n\n//# sourceURL=webpack://repos/./src/div.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createFooter)\n/* harmony export */ });\n/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/github.png */ \"./src/img/github.png\");\n\n\nfunction createFooter(param) {\n    const footer = document.createElement('footer');\n    const linkElement = document.createElement('a');\n    const gitHubIcon = new Image();\n    const span = document.createElement('span');\n    span.innerText = 'Created By DragostinH ';\n    gitHubIcon.src = _img_github_png__WEBPACK_IMPORTED_MODULE_0__;\n    linkElement.href = 'https://github.com/DragostinH';\n    \n    linkElement.appendChild(gitHubIcon);\n\n    footer.appendChild(span);\n    footer.classList.add('page-footer');\n    footer.appendChild(linkElement);\n    param.appendChild(footer);\n\n    return footer ;\n}\n\n//# sourceURL=webpack://repos/./src/footer.js?");

/***/ }),

/***/ "./src/imagesArray.js":
/*!****************************!*\
  !*** ./src/imagesArray.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getImagesArray)\n/* harmony export */ });\n\nfunction getImagesArray(...images) {\n    return images;\n}\n\n//# sourceURL=webpack://repos/./src/imagesArray.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ \"./src/article.js\");\n/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./div */ \"./src/div.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _imagesArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagesArray */ \"./src/imagesArray.js\");\n/* harmony import */ var _img_Menu_ramen_menu_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/Menu/ramen-menu.png */ \"./src/img/Menu/ramen-menu.png\");\n/* harmony import */ var _img_Menu_drinks_menu_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/Menu/drinks-menu.png */ \"./src/img/Menu/drinks-menu.png\");\n/* harmony import */ var _img_Menu_desserts_menu_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/Menu/desserts-menu.png */ \"./src/img/Menu/desserts-menu.png\");\n/* harmony import */ var _img_Menu_sushi_menu_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/Menu/sushi-menu.png */ \"./src/img/Menu/sushi-menu.png\");\n/* harmony import */ var _img_Menu_ramen_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/Menu/ramen-icon.png */ \"./src/img/Menu/ramen-icon.png\");\n/* harmony import */ var _img_Menu_sushi_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/Menu/sushi-icon.png */ \"./src/img/Menu/sushi-icon.png\");\n/* harmony import */ var _img_Menu_coffee_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/Menu/coffee-icon.png */ \"./src/img/Menu/coffee-icon.png\");\n/* harmony import */ var _img_Menu_dessert_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/Menu/dessert-icon.png */ \"./src/img/Menu/dessert-icon.png\");\n/* harmony import */ var _anchorTag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./anchorTag */ \"./src/anchorTag.js\");\n/* harmony import */ var _addClickEventListener__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addClickEventListener */ \"./src/addClickEventListener.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction menu(content, mainContentDiv) {\n    // Image div for the left hand side image\n    const imageDiv = (0,_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    imageDiv.id = 'menu-image';\n    \n    content.insertBefore(imageDiv, content.firstChild);\n\n    const article = (0,_article__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mainContentDiv); //Wrapper for text inside main-content-div\n    article.article.id = 'menu-article';\n    const footer = (0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mainContentDiv);\n\n    const menuButtonContainer = (0,_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    menuButtonContainer.id = 'menu-item-div';\n\n    const images = (0,_imagesArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n    // Create each button for changing the menu on the left side:\n    const ramenMenuButton = createMenuButton(imageDiv,_img_Menu_ramen_menu_png__WEBPACK_IMPORTED_MODULE_4__, _img_Menu_ramen_icon_png__WEBPACK_IMPORTED_MODULE_8__);\n    const sushimenuButton = createMenuButton(imageDiv,_img_Menu_sushi_menu_png__WEBPACK_IMPORTED_MODULE_7__, _img_Menu_sushi_icon_png__WEBPACK_IMPORTED_MODULE_9__)\n    const drinksMenuButton = createMenuButton(imageDiv,_img_Menu_drinks_menu_png__WEBPACK_IMPORTED_MODULE_5__, _img_Menu_coffee_icon_png__WEBPACK_IMPORTED_MODULE_10__)\n    const dessertsMenuButton = createMenuButton(imageDiv, _img_Menu_desserts_menu_png__WEBPACK_IMPORTED_MODULE_6__, _img_Menu_dessert_icon_png__WEBPACK_IMPORTED_MODULE_11__)\n\n\n\n    multipleAppends(menuButtonContainer, ramenMenuButton, sushimenuButton, drinksMenuButton, dessertsMenuButton);\n\n    \n    \n    \n    \n    article.article.appendChild(menuButtonContainer);\n    \n    \n    return { menu };\n}\nfunction createMenuButton(menuImageDiv, menuImage ,foodIcon){\n    const div = (0,_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    div.id = 'menu-icon-div';\n    div.style.backgroundImage = `url(${foodIcon})`\n\n    div.addEventListener('click', ()=>{\n        menuImageDiv.style.backgroundImage = `url(${menuImage})`\n    });\n\n\n   return div;\n}\n\nfunction multipleAppends(parent, ...children) {\n    children.forEach(element => {\n        parent.appendChild(element);\n    });\n    return parent;\n}\n\nfunction changeBackgroundImage(target, image) {\n    target.style.backgroundImage = `url(${image})`\n}\n\n//# sourceURL=webpack://repos/./src/menu.js?");

/***/ }),

/***/ "./src/img/Menu/coffee-icon.png":
/*!**************************************!*\
  !*** ./src/img/Menu/coffee-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f9e8ef71165ad20f15f.png\";\n\n//# sourceURL=webpack://repos/./src/img/Menu/coffee-icon.png?");

/***/ }),

/***/ "./src/img/Menu/dessert-icon.png":
/*!***************************************!*\
  !*** ./src/img/Menu/dessert-icon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"63093110f9c36b94cbb0.png\";\n\n//# sourceURL=webpack://repos/./src/img/Menu/dessert-icon.png?");

/***/ }),

/***/ "./src/img/Menu/desserts-menu.png":
/*!****************************************!*\
  !*** ./src/img/Menu/desserts-menu.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd68757e949d1652dd83.png\";\n\n//# sourceURL=webpack://repos/./src/img/Menu/desserts-menu.png?");

/***/ }),

/***/ "./src/img/Menu/drinks-menu.png":
/*!**************************************!*\
  !*** ./src/img/Menu/drinks-menu.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"972d42a84a8942e29a3e.png\";\n\n//# sourceURL=webpack://repos/./src/img/Menu/drinks-menu.png?");

/***/ }),

/***/ "./src/img/Menu/ramen-icon.png":
/*!*************************************!*\
  !*** ./src/img/Menu/ramen-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9156d82e11d6a98cf63.png\";\n\n//# sourceURL=webpack://repos/./src/img/Menu/ramen-icon.png?");

/***/ }),

/***/ "./src/img/Menu/ramen-menu.png":
/*!*************************************!*\
  !*** ./src/img/Menu/ramen-menu.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c1c04139565e5d60825.png\";\n\n//# sourceURL=webpack://repos/./src/img/Menu/ramen-menu.png?");

/***/ }),

/***/ "./src/img/Menu/sushi-icon.png":
/*!*************************************!*\
  !*** ./src/img/Menu/sushi-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dcc209621e28f06cfe0b.png\";\n\n//# sourceURL=webpack://repos/./src/img/Menu/sushi-icon.png?");

/***/ }),

/***/ "./src/img/Menu/sushi-menu.png":
/*!*************************************!*\
  !*** ./src/img/Menu/sushi-menu.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"38586026e4ba4a5f325e.png\";\n\n//# sourceURL=webpack://repos/./src/img/Menu/sushi-menu.png?");

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce02960dedca82adba6e.png\";\n\n//# sourceURL=webpack://repos/./src/img/github.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;