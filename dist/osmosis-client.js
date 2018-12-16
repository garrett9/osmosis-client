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
eval("\n\nvar OsmosisClient = function OsmosisClient(product, options) {\n\tvar _this = this;\n\n\tvar closeDialog = function closeDialog() {\n\t\t_this.dialog.classList.remove('osmosis-client-show');\n\t\t_this.backdrop.classList.remove(\"osmosis-client-backdrop-show\");\n\t};\n\n\tthis.root = (options && options.root ? options.root : \"https://osmosis.com\") + \"/products/\" + product + \"?iframe=true#/\";\n\tthis.product = product;\n\tthis.dialog = document.createElement(\"div\");\n\tthis.dialog.classList.add(\"osmosis-client\");\n\tthis.iframe = document.createElement(\"iframe\");\n\tthis.iframe.src = this.root;\n\tthis.backdrop = document.createElement(\"div\");\n\tthis.backdrop.classList.add(\"osmosis-client-backdrop\");\n\tthis.backdrop.addEventListener(\"click\", closeDialog, false);\n\n\tthis.dialog.append(this.iframe);\n\n\tthis.closeButton = document.createElement(\"div\");\n\tthis.closeButton.classList.add(\"osmosis-client-close\");\n\tthis.closeButton.innerHTML = \"&times;\";\n\tthis.closeButton.addEventListener(\"click\", closeDialog, false);\n\n\tthis.dialog.append(this.closeButton);\n\tdocument.body.appendChild(this.dialog);\n\tdocument.body.appendChild(this.backdrop);\n\tdocument.addEventListener(\"keydown\", function (evt) {\n\t\tif (evt.keyCode === 27) {\n\t\t\t_this.close();\n\t\t}\n\t}, true);\n};\n\nOsmosisClient.prototype.open = function (page) {\n\tthis.iframe.src = this.root + page;\n\tthis.dialog.classList.add('osmosis-client-show');\n\tthis.backdrop.classList.add(\"osmosis-client-backdrop-show\");\n};\n\nOsmosisClient.prototype.close = function (page) {\n\tthis.dialog.classList.remove('osmosis-client-show');\n\tthis.backdrop.classList.remove(\"osmosis-client-backdrop-show\");\n};\n\nmodule.exports = OsmosisClient;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvb3Ntb3Npcy1jbGllbnQuanM/ZDBmMCJdLCJuYW1lcyI6WyJPc21vc2lzQ2xpZW50IiwicHJvZHVjdCIsIm9wdGlvbnMiLCJfdGhpcyIsImNsb3NlRGlhbG9nIiwiZGlhbG9nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYmFja2Ryb3AiLCJyb290IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiaWZyYW1lIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZCIsImNsb3NlQnV0dG9uIiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZXZ0Iiwia2V5Q29kZSIsImNsb3NlIiwicHJvdG90eXBlIiwib3BlbiIsInBhZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ2hELEtBQUlDLFFBQVEsSUFBWjs7QUFFQSxLQUFJQyxjQUFjLFNBQWRBLFdBQWMsR0FBVztBQUM1QkQsUUFBTUUsTUFBTixDQUFhQyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixxQkFBOUI7QUFDQUosUUFBTUssUUFBTixDQUFlRixTQUFmLENBQXlCQyxNQUF6QixDQUFnQyw4QkFBaEM7QUFDQSxFQUhEOztBQUtBLE1BQUtFLElBQUwsR0FBWSxDQUFDUCxXQUFXQSxRQUFRTyxJQUFuQixHQUEwQlAsUUFBUU8sSUFBbEMsR0FBeUMscUJBQTFDLElBQW1FLFlBQW5FLEdBQWtGUixPQUFsRixHQUE0RixnQkFBeEc7QUFDQSxNQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxNQUFLSSxNQUFMLEdBQWNLLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLE1BQUtOLE1BQUwsQ0FBWUMsU0FBWixDQUFzQk0sR0FBdEIsQ0FBMEIsZ0JBQTFCO0FBQ0EsTUFBS0MsTUFBTCxHQUFjSCxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxNQUFLRSxNQUFMLENBQVlDLEdBQVosR0FBa0IsS0FBS0wsSUFBdkI7QUFDQSxNQUFLRCxRQUFMLEdBQWdCRSxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0EsTUFBS0gsUUFBTCxDQUFjRixTQUFkLENBQXdCTSxHQUF4QixDQUE0Qix5QkFBNUI7QUFDQSxNQUFLSixRQUFMLENBQWNPLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDWCxXQUF4QyxFQUFxRCxLQUFyRDs7QUFFQSxNQUFLQyxNQUFMLENBQVlXLE1BQVosQ0FBbUIsS0FBS0gsTUFBeEI7O0FBRUEsTUFBS0ksV0FBTCxHQUFtQlAsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLE1BQUtNLFdBQUwsQ0FBaUJYLFNBQWpCLENBQTJCTSxHQUEzQixDQUErQixzQkFBL0I7QUFDQSxNQUFLSyxXQUFMLENBQWlCQyxTQUFqQixHQUE2QixTQUE3QjtBQUNBLE1BQUtELFdBQUwsQ0FBaUJGLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQ1gsV0FBM0MsRUFBd0QsS0FBeEQ7O0FBRUEsTUFBS0MsTUFBTCxDQUFZVyxNQUFaLENBQW1CLEtBQUtDLFdBQXhCO0FBQ0FQLFVBQVNTLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLZixNQUEvQjtBQUNBSyxVQUFTUyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS1osUUFBL0I7QUFDQUUsVUFBU0ssZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBU00sR0FBVCxFQUFjO0FBQ2xELE1BQUdBLElBQUlDLE9BQUosS0FBZ0IsRUFBbkIsRUFBdUI7QUFDdEJuQixTQUFNb0IsS0FBTjtBQUNBO0FBQ0QsRUFKRCxFQUlHLElBSkg7QUFLQSxDQWpDRDs7QUFtQ0F2QixjQUFjd0IsU0FBZCxDQUF3QkMsSUFBeEIsR0FBK0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdDLE1BQUtiLE1BQUwsQ0FBWUMsR0FBWixHQUFrQixLQUFLTCxJQUFMLEdBQVlpQixJQUE5QjtBQUNBLE1BQUtyQixNQUFMLENBQVlDLFNBQVosQ0FBc0JNLEdBQXRCLENBQTBCLHFCQUExQjtBQUNBLE1BQUtKLFFBQUwsQ0FBY0YsU0FBZCxDQUF3Qk0sR0FBeEIsQ0FBNEIsOEJBQTVCO0FBQ0EsQ0FKRDs7QUFNQVosY0FBY3dCLFNBQWQsQ0FBd0JELEtBQXhCLEdBQWdDLFVBQVNHLElBQVQsRUFBZTtBQUM5QyxNQUFLckIsTUFBTCxDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixxQkFBN0I7QUFDQSxNQUFLQyxRQUFMLENBQWNGLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLDhCQUEvQjtBQUNBLENBSEQ7O0FBS0FvQixPQUFPQyxPQUFQLEdBQWlCNUIsYUFBakIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT3Ntb3Npc0NsaWVudCA9IGZ1bmN0aW9uKHByb2R1Y3QsIG9wdGlvbnMpIHtcblx0dmFyIF90aGlzID0gdGhpcztcblx0XG5cdHZhciBjbG9zZURpYWxvZyA9IGZ1bmN0aW9uKCkge1xuXHRcdF90aGlzLmRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdvc21vc2lzLWNsaWVudC1zaG93Jyk7XG5cdFx0X3RoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcIm9zbW9zaXMtY2xpZW50LWJhY2tkcm9wLXNob3dcIik7XG5cdH07XG5cdFxuXHR0aGlzLnJvb3QgPSAob3B0aW9ucyAmJiBvcHRpb25zLnJvb3QgPyBvcHRpb25zLnJvb3QgOiBcImh0dHBzOi8vb3Ntb3Npcy5jb21cIikgKyBcIi9wcm9kdWN0cy9cIiArIHByb2R1Y3QgKyBcIj9pZnJhbWU9dHJ1ZSMvXCI7XG5cdHRoaXMucHJvZHVjdCA9IHByb2R1Y3Q7XG5cdHRoaXMuZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGhpcy5kaWFsb2cuY2xhc3NMaXN0LmFkZChcIm9zbW9zaXMtY2xpZW50XCIpO1xuXHR0aGlzLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cdHRoaXMuaWZyYW1lLnNyYyA9IHRoaXMucm9vdDtcblx0dGhpcy5iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcIm9zbW9zaXMtY2xpZW50LWJhY2tkcm9wXCIpO1xuXHR0aGlzLmJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZURpYWxvZywgZmFsc2UpO1xuXHRcblx0dGhpcy5kaWFsb2cuYXBwZW5kKHRoaXMuaWZyYW1lKTtcblx0XG5cdHRoaXMuY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJvc21vc2lzLWNsaWVudC1jbG9zZVwiKTtcblx0dGhpcy5jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcblx0dGhpcy5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEaWFsb2csIGZhbHNlKTtcblx0XG5cdHRoaXMuZGlhbG9nLmFwcGVuZCh0aGlzLmNsb3NlQnV0dG9uKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRpYWxvZyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZHJvcCk7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdGlmKGV2dC5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH0sIHRydWUpO1xufTtcblxuT3Ntb3Npc0NsaWVudC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKHBhZ2UpIHtcblx0dGhpcy5pZnJhbWUuc3JjID0gdGhpcy5yb290ICsgcGFnZTtcblx0dGhpcy5kaWFsb2cuY2xhc3NMaXN0LmFkZCgnb3Ntb3Npcy1jbGllbnQtc2hvdycpO1xuXHR0aGlzLmJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJvc21vc2lzLWNsaWVudC1iYWNrZHJvcC1zaG93XCIpO1xufTtcblxuT3Ntb3Npc0NsaWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbihwYWdlKSB7XG5cdHRoaXMuZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ29zbW9zaXMtY2xpZW50LXNob3cnKTtcblx0dGhpcy5iYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwib3Ntb3Npcy1jbGllbnQtYmFja2Ryb3Atc2hvd1wiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT3Ntb3Npc0NsaWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb3Ntb3Npcy1jbGllbnQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
});