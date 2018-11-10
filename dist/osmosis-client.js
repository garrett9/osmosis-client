(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("OsmosisClient", [], factory);
	else if(typeof exports === 'object')
		exports["OsmosisClient"] = factory();
	else
		root["OsmosisClient"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar OsmosisClient = function OsmosisClient(product, options) {\n\tvar _this = this;\n\n\tvar closeDialog = function closeDialog() {\n\t\t_this.dialog.classList.remove('osmosis-client-show');\n\t\t_this.backdrop.classList.remove(\"osmosis-client-backdrop-show\");\n\t};\n\n\tthis.root = (options && options.root ? options.root : \"https://osmosis.com\") + \"/docs?iframe=true#\" + product + \"/\";\n\tthis.product = product;\n\tthis.dialog = document.createElement(\"div\");\n\tthis.dialog.classList.add(\"osmosis-client\");\n\tthis.iframe = document.createElement(\"iframe\");\n\tthis.iframe.src = this.root;\n\tthis.backdrop = document.createElement(\"div\");\n\tthis.backdrop.classList.add(\"osmosis-client-backdrop\");\n\tthis.backdrop.addEventListener(\"click\", closeDialog, false);\n\n\tthis.dialog.append(this.iframe);\n\n\tthis.closeButton = document.createElement(\"div\");\n\tthis.closeButton.classList.add(\"osmosis-client-close\");\n\tthis.closeButton.innerHTML = \"&times;\";\n\tthis.closeButton.addEventListener(\"click\", closeDialog, false);\n\n\tthis.dialog.append(this.closeButton);\n\tdocument.body.appendChild(this.dialog);\n\tdocument.body.appendChild(this.backdrop);\n\tdocument.addEventListener(\"keydown\", function (evt) {\n\t\tif (evt.keyCode === 27) {\n\t\t\t_this.close();\n\t\t}\n\t}, true);\n};\n\nOsmosisClient.prototype.open = function (page) {\n\tthis.iframe.src = this.root + page;\n\tthis.dialog.classList.add('osmosis-client-show');\n\tthis.backdrop.classList.add(\"osmosis-client-backdrop-show\");\n};\n\nOsmosisClient.prototype.close = function (page) {\n\tthis.dialog.classList.remove('osmosis-client-show');\n\tthis.backdrop.classList.remove(\"osmosis-client-backdrop-show\");\n};\n\nmodule.exports = OsmosisClient;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvb3Ntb3Npcy1jbGllbnQuanM/ZDBmMCJdLCJuYW1lcyI6WyJPc21vc2lzQ2xpZW50IiwicHJvZHVjdCIsIm9wdGlvbnMiLCJfdGhpcyIsImNsb3NlRGlhbG9nIiwiZGlhbG9nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYmFja2Ryb3AiLCJyb290IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiaWZyYW1lIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZCIsImNsb3NlQnV0dG9uIiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZXZ0Iiwia2V5Q29kZSIsImNsb3NlIiwicHJvdG90eXBlIiwib3BlbiIsInBhZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ2hELEtBQUlDLFFBQVEsSUFBWjs7QUFFQSxLQUFJQyxjQUFjLFNBQWRBLFdBQWMsR0FBVztBQUM1QkQsUUFBTUUsTUFBTixDQUFhQyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixxQkFBOUI7QUFDQUosUUFBTUssUUFBTixDQUFlRixTQUFmLENBQXlCQyxNQUF6QixDQUFnQyw4QkFBaEM7QUFDQSxFQUhEOztBQUtBLE1BQUtFLElBQUwsR0FBWSxDQUFDUCxXQUFXQSxRQUFRTyxJQUFuQixHQUEwQlAsUUFBUU8sSUFBbEMsR0FBeUMscUJBQTFDLElBQW1FLG9CQUFuRSxHQUEwRlIsT0FBMUYsR0FBb0csR0FBaEg7QUFDQSxNQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxNQUFLSSxNQUFMLEdBQWNLLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLE1BQUtOLE1BQUwsQ0FBWUMsU0FBWixDQUFzQk0sR0FBdEIsQ0FBMEIsZ0JBQTFCO0FBQ0EsTUFBS0MsTUFBTCxHQUFjSCxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxNQUFLRSxNQUFMLENBQVlDLEdBQVosR0FBa0IsS0FBS0wsSUFBdkI7QUFDQSxNQUFLRCxRQUFMLEdBQWdCRSxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0EsTUFBS0gsUUFBTCxDQUFjRixTQUFkLENBQXdCTSxHQUF4QixDQUE0Qix5QkFBNUI7QUFDQSxNQUFLSixRQUFMLENBQWNPLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDWCxXQUF4QyxFQUFxRCxLQUFyRDs7QUFFQSxNQUFLQyxNQUFMLENBQVlXLE1BQVosQ0FBbUIsS0FBS0gsTUFBeEI7O0FBRUEsTUFBS0ksV0FBTCxHQUFtQlAsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLE1BQUtNLFdBQUwsQ0FBaUJYLFNBQWpCLENBQTJCTSxHQUEzQixDQUErQixzQkFBL0I7QUFDQSxNQUFLSyxXQUFMLENBQWlCQyxTQUFqQixHQUE2QixTQUE3QjtBQUNBLE1BQUtELFdBQUwsQ0FBaUJGLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQ1gsV0FBM0MsRUFBd0QsS0FBeEQ7O0FBRUEsTUFBS0MsTUFBTCxDQUFZVyxNQUFaLENBQW1CLEtBQUtDLFdBQXhCO0FBQ0FQLFVBQVNTLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLZixNQUEvQjtBQUNBSyxVQUFTUyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS1osUUFBL0I7QUFDQUUsVUFBU0ssZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBU00sR0FBVCxFQUFjO0FBQ2xELE1BQUdBLElBQUlDLE9BQUosS0FBZ0IsRUFBbkIsRUFBdUI7QUFDdEJuQixTQUFNb0IsS0FBTjtBQUNBO0FBQ0QsRUFKRCxFQUlHLElBSkg7QUFLQSxDQWpDRDs7QUFtQ0F2QixjQUFjd0IsU0FBZCxDQUF3QkMsSUFBeEIsR0FBK0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdDLE1BQUtiLE1BQUwsQ0FBWUMsR0FBWixHQUFrQixLQUFLTCxJQUFMLEdBQVlpQixJQUE5QjtBQUNBLE1BQUtyQixNQUFMLENBQVlDLFNBQVosQ0FBc0JNLEdBQXRCLENBQTBCLHFCQUExQjtBQUNBLE1BQUtKLFFBQUwsQ0FBY0YsU0FBZCxDQUF3Qk0sR0FBeEIsQ0FBNEIsOEJBQTVCO0FBQ0EsQ0FKRDs7QUFNQVosY0FBY3dCLFNBQWQsQ0FBd0JELEtBQXhCLEdBQWdDLFVBQVNHLElBQVQsRUFBZTtBQUM5QyxNQUFLckIsTUFBTCxDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixxQkFBN0I7QUFDQSxNQUFLQyxRQUFMLENBQWNGLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLDhCQUEvQjtBQUNBLENBSEQ7O0FBS0FvQixPQUFPQyxPQUFQLEdBQWlCNUIsYUFBakIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT3Ntb3Npc0NsaWVudCA9IGZ1bmN0aW9uKHByb2R1Y3QsIG9wdGlvbnMpIHtcblx0dmFyIF90aGlzID0gdGhpcztcblx0XG5cdHZhciBjbG9zZURpYWxvZyA9IGZ1bmN0aW9uKCkge1xuXHRcdF90aGlzLmRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdvc21vc2lzLWNsaWVudC1zaG93Jyk7XG5cdFx0X3RoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcIm9zbW9zaXMtY2xpZW50LWJhY2tkcm9wLXNob3dcIik7XG5cdH07XG5cdFxuXHR0aGlzLnJvb3QgPSAob3B0aW9ucyAmJiBvcHRpb25zLnJvb3QgPyBvcHRpb25zLnJvb3QgOiBcImh0dHBzOi8vb3Ntb3Npcy5jb21cIikgKyBcIi9kb2NzP2lmcmFtZT10cnVlI1wiICsgcHJvZHVjdCArIFwiL1wiO1xuXHR0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuXHR0aGlzLmRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRoaXMuZGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJvc21vc2lzLWNsaWVudFwiKTtcblx0dGhpcy5pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXHR0aGlzLmlmcmFtZS5zcmMgPSB0aGlzLnJvb3Q7XG5cdHRoaXMuYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0aGlzLmJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJvc21vc2lzLWNsaWVudC1iYWNrZHJvcFwiKTtcblx0dGhpcy5iYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEaWFsb2csIGZhbHNlKTtcblx0XG5cdHRoaXMuZGlhbG9nLmFwcGVuZCh0aGlzLmlmcmFtZSk7XG5cdFxuXHR0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGhpcy5jbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3Ntb3Npcy1jbGllbnQtY2xvc2VcIik7XG5cdHRoaXMuY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG5cdHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRGlhbG9nLCBmYWxzZSk7XG5cdFxuXHR0aGlzLmRpYWxvZy5hcHBlbmQodGhpcy5jbG9zZUJ1dHRvbik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaWFsb2cpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmFja2Ryb3ApO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldnQpIHtcblx0XHRpZihldnQua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0fVxuXHR9LCB0cnVlKTtcbn07XG5cbk9zbW9zaXNDbGllbnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihwYWdlKSB7XG5cdHRoaXMuaWZyYW1lLnNyYyA9IHRoaXMucm9vdCArIHBhZ2U7XG5cdHRoaXMuZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ29zbW9zaXMtY2xpZW50LXNob3cnKTtcblx0dGhpcy5iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwib3Ntb3Npcy1jbGllbnQtYmFja2Ryb3Atc2hvd1wiKTtcbn07XG5cbk9zbW9zaXNDbGllbnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24ocGFnZSkge1xuXHR0aGlzLmRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdvc21vc2lzLWNsaWVudC1zaG93Jyk7XG5cdHRoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcIm9zbW9zaXMtY2xpZW50LWJhY2tkcm9wLXNob3dcIik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9zbW9zaXNDbGllbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29zbW9zaXMtY2xpZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
});