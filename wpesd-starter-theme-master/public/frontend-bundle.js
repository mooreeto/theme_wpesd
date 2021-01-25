/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/navigation */ \"./src/js/libs/navigation.js\");\n/* harmony import */ var _libs_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/main */ \"./src/js/libs/main.js\");\n/* harmony import */ var _libs_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_main__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/Y2FmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbGlicy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9saWJzL21haW4nOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/libs/main.js":
/*!*****************************!*\
  !*** ./src/js/libs/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGlicy9tYWluLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/libs/main.js\n");

/***/ }),

/***/ "./src/js/libs/navigation.js":
/*!***********************************!*\
  !*** ./src/js/libs/navigation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * File navigation.js.\r\n *\r\n * Handles toggling the navigation menu for small screens and enables TAB key\r\n * navigation support for dropdown menus.\r\n */\n(function () {\n  const siteNavigation = document.getElementById('site-navigation'); // Return early if the navigation don't exist.\n\n  if (!siteNavigation) {\n    return;\n  }\n\n  const button = siteNavigation.getElementsByTagName('button')[0]; // Return early if the button don't exist.\n\n  if ('undefined' === typeof button) {\n    return;\n  }\n\n  const menu = siteNavigation.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.\n\n  if ('undefined' === typeof menu) {\n    button.style.display = 'none';\n    return;\n  }\n\n  if (!menu.classList.contains('nav-menu')) {\n    menu.classList.add('nav-menu');\n  } // Toggle the .toggled class and the aria-expanded value each time the button is clicked.\n\n\n  button.addEventListener('click', function () {\n    siteNavigation.classList.toggle('toggled');\n\n    if (button.getAttribute('aria-expanded') === 'true') {\n      button.setAttribute('aria-expanded', 'false');\n    } else {\n      button.setAttribute('aria-expanded', 'true');\n    }\n  }); // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.\n\n  document.addEventListener('click', function (event) {\n    const isClickInside = siteNavigation.contains(event.target);\n\n    if (!isClickInside) {\n      siteNavigation.classList.remove('toggled');\n      button.setAttribute('aria-expanded', 'false');\n    }\n  }); // Get all the link elements within the menu.\n\n  const links = menu.getElementsByTagName('a'); // Get all the link elements with children within the menu.\n\n  const linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a'); // Toggle focus each time a menu link is focused or blurred.\n\n  for (const link of links) {\n    link.addEventListener('focus', toggleFocus, true);\n    link.addEventListener('blur', toggleFocus, true);\n  } // Toggle focus each time a menu link with children receive a touch event.\n\n\n  for (const link of linksWithChildren) {\n    link.addEventListener('touchstart', toggleFocus, false);\n  }\n  /**\r\n   * Sets or removes .focus class on an element.\r\n   */\n\n\n  function toggleFocus() {\n    if (event.type === 'focus' || event.type === 'blur') {\n      let self = this; // Move up through the ancestors of the current link until we hit .nav-menu.\n\n      while (!self.classList.contains('nav-menu')) {\n        // On li elements toggle the class .focus.\n        if ('li' === self.tagName.toLowerCase()) {\n          self.classList.toggle('focus');\n        }\n\n        self = self.parentNode;\n      }\n    }\n\n    if (event.type === 'touchstart') {\n      const menuItem = this.parentNode;\n      event.preventDefault();\n\n      for (const link of menuItem.parentNode.children) {\n        if (menuItem !== link) {\n          link.classList.remove('focus');\n        }\n      }\n\n      menuItem.classList.toggle('focus');\n    }\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGlicy9uYXZpZ2F0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYnMvbmF2aWdhdGlvbi5qcz9kODgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBGaWxlIG5hdmlnYXRpb24uanMuXHJcbiAqXHJcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XHJcbiAqIG5hdmlnYXRpb24gc3VwcG9ydCBmb3IgZHJvcGRvd24gbWVudXMuXHJcbiAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2l0ZU5hdmlnYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1uYXZpZ2F0aW9uJyk7IC8vIFJldHVybiBlYXJseSBpZiB0aGUgbmF2aWdhdGlvbiBkb24ndCBleGlzdC5cblxuICBpZiAoIXNpdGVOYXZpZ2F0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYnV0dG9uID0gc2l0ZU5hdmlnYXRpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpWzBdOyAvLyBSZXR1cm4gZWFybHkgaWYgdGhlIGJ1dHRvbiBkb24ndCBleGlzdC5cblxuICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBidXR0b24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBtZW51ID0gc2l0ZU5hdmlnYXRpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylbMF07IC8vIEhpZGUgbWVudSB0b2dnbGUgYnV0dG9uIGlmIG1lbnUgaXMgZW1wdHkgYW5kIHJldHVybiBlYXJseS5cblxuICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBtZW51KSB7XG4gICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFtZW51LmNsYXNzTGlzdC5jb250YWlucygnbmF2LW1lbnUnKSkge1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2LW1lbnUnKTtcbiAgfSAvLyBUb2dnbGUgdGhlIC50b2dnbGVkIGNsYXNzIGFuZCB0aGUgYXJpYS1leHBhbmRlZCB2YWx1ZSBlYWNoIHRpbWUgdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuXG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHNpdGVOYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQnKTtcblxuICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJykge1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB9XG4gIH0pOyAvLyBSZW1vdmUgdGhlIC50b2dnbGVkIGNsYXNzIGFuZCBzZXQgYXJpYS1leHBhbmRlZCB0byBmYWxzZSB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBuYXZpZ2F0aW9uLlxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgaXNDbGlja0luc2lkZSA9IHNpdGVOYXZpZ2F0aW9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cbiAgICBpZiAoIWlzQ2xpY2tJbnNpZGUpIHtcbiAgICAgIHNpdGVOYXZpZ2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZWQnKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG4gIH0pOyAvLyBHZXQgYWxsIHRoZSBsaW5rIGVsZW1lbnRzIHdpdGhpbiB0aGUgbWVudS5cblxuICBjb25zdCBsaW5rcyA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTsgLy8gR2V0IGFsbCB0aGUgbGluayBlbGVtZW50cyB3aXRoIGNoaWxkcmVuIHdpdGhpbiB0aGUgbWVudS5cblxuICBjb25zdCBsaW5rc1dpdGhDaGlsZHJlbiA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAucGFnZV9pdGVtX2hhc19jaGlsZHJlbiA+IGEnKTsgLy8gVG9nZ2xlIGZvY3VzIGVhY2ggdGltZSBhIG1lbnUgbGluayBpcyBmb2N1c2VkIG9yIGJsdXJyZWQuXG5cbiAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRvZ2dsZUZvY3VzLCB0cnVlKTtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0b2dnbGVGb2N1cywgdHJ1ZSk7XG4gIH0gLy8gVG9nZ2xlIGZvY3VzIGVhY2ggdGltZSBhIG1lbnUgbGluayB3aXRoIGNoaWxkcmVuIHJlY2VpdmUgYSB0b3VjaCBldmVudC5cblxuXG4gIGZvciAoY29uc3QgbGluayBvZiBsaW5rc1dpdGhDaGlsZHJlbikge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZUZvY3VzLCBmYWxzZSk7XG4gIH1cbiAgLyoqXHJcbiAgICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxyXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRm9jdXMoKSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdmb2N1cycgfHwgZXZlbnQudHlwZSA9PT0gJ2JsdXInKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7IC8vIE1vdmUgdXAgdGhyb3VnaCB0aGUgYW5jZXN0b3JzIG9mIHRoZSBjdXJyZW50IGxpbmsgdW50aWwgd2UgaGl0IC5uYXYtbWVudS5cblxuICAgICAgd2hpbGUgKCFzZWxmLmNsYXNzTGlzdC5jb250YWlucygnbmF2LW1lbnUnKSkge1xuICAgICAgICAvLyBPbiBsaSBlbGVtZW50cyB0b2dnbGUgdGhlIGNsYXNzIC5mb2N1cy5cbiAgICAgICAgaWYgKCdsaScgPT09IHNlbGYudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgc2VsZi5jbGFzc0xpc3QudG9nZ2xlKCdmb2N1cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZiA9IHNlbGYucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGZvciAoY29uc3QgbGluayBvZiBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChtZW51SXRlbSAhPT0gbGluaykge1xuICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW51SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdmb2N1cycpO1xuICAgIH1cbiAgfVxufSkoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/libs/navigation.js\n");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zYWM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/style.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/sass/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });