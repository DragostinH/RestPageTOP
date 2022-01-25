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

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createNav)\n/* harmony export */ });\nfunction createNav(param) {\n    const nav = document.createElement('nav');\n\n    // Creating the Nav buttons and assigning a class to each one\n    const homeBtn = document.createElement('button');\n    homeBtn.classList.add('home-button');\n\n    const aboutUsBtn = document.createElement('button');\n    aboutUsBtn.classList.add('about-us-button');\n\n    const ourServicesBtn = document.createElement('button');\n    ourServicesBtn.classList.add('our-services-button');\n\n    const contactUsBtn = document.createElement('button');\n    contactUsBtn.classList.add('contact-us-button');\n\n    // Adding text in button boxes\n    homeBtn.innerText = 'HOME';\n    aboutUsBtn.innerText = 'ABOUT US';\n    ourServicesBtn.innerText = 'OUR SERVICES';\n    contactUsBtn.innerText = 'CONTACT US';\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(aboutUsBtn);\n    nav.appendChild(ourServicesBtn);\n    nav.appendChild(contactUsBtn);\n\n    param.appendChild(nav);\n\n    return  nav ;\n\n}\n\n//# sourceURL=webpack://repos/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/nav.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;