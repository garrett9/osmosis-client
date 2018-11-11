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
eval("\n\nvar OsmosisClient = function OsmosisClient(product, options) {\n\tvar _this = this;\n\n\tvar closeDialog = function closeDialog() {\n\t\t_this.dialog.classList.remove('osmosis-client-show');\n\t\t_this.backdrop.classList.remove(\"osmosis-client-backdrop-show\");\n\t};\n\n\tthis.root = (options && options.root ? options.root : \"https://osmosis.com\") + \"/docs#/\" + product + \"/\";\n\tthis.product = product;\n\tthis.dialog = document.createElement(\"div\");\n\tthis.dialog.classList.add(\"osmosis-client\");\n\tthis.iframe = document.createElement(\"iframe\");\n\tthis.iframe.src = this.root;\n\tthis.backdrop = document.createElement(\"div\");\n\tthis.backdrop.classList.add(\"osmosis-client-backdrop\");\n\tthis.backdrop.addEventListener(\"click\", closeDialog, false);\n\n\tthis.dialog.append(this.iframe);\n\n\tthis.closeButton = document.createElement(\"div\");\n\tthis.closeButton.classList.add(\"osmosis-client-close\");\n\tthis.closeButton.innerHTML = \"&times;\";\n\tthis.closeButton.addEventListener(\"click\", closeDialog, false);\n\n\tthis.dialog.append(this.closeButton);\n\tdocument.body.appendChild(this.dialog);\n\tdocument.body.appendChild(this.backdrop);\n\tdocument.addEventListener(\"keydown\", function (evt) {\n\t\tif (evt.keyCode === 27) {\n\t\t\t_this.close();\n\t\t}\n\t}, true);\n};\n\nOsmosisClient.prototype.open = function (page) {\n\tthis.iframe.src = this.root + page;\n\tthis.dialog.classList.add('osmosis-client-show');\n\tthis.backdrop.classList.add(\"osmosis-client-backdrop-show\");\n};\n\nOsmosisClient.prototype.close = function (page) {\n\tthis.dialog.classList.remove('osmosis-client-show');\n\tthis.backdrop.classList.remove(\"osmosis-client-backdrop-show\");\n};\n\nmodule.exports = OsmosisClient;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvb3Ntb3Npcy1jbGllbnQuanM/ZDBmMCJdLCJuYW1lcyI6WyJPc21vc2lzQ2xpZW50IiwicHJvZHVjdCIsIm9wdGlvbnMiLCJfdGhpcyIsImNsb3NlRGlhbG9nIiwiZGlhbG9nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYmFja2Ryb3AiLCJyb290IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiaWZyYW1lIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZCIsImNsb3NlQnV0dG9uIiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZXZ0Iiwia2V5Q29kZSIsImNsb3NlIiwicHJvdG90eXBlIiwib3BlbiIsInBhZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ2hELEtBQUlDLFFBQVEsSUFBWjs7QUFFQSxLQUFJQyxjQUFjLFNBQWRBLFdBQWMsR0FBVztBQUM1QkQsUUFBTUUsTUFBTixDQUFhQyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixxQkFBOUI7QUFDQUosUUFBTUssUUFBTixDQUFlRixTQUFmLENBQXlCQyxNQUF6QixDQUFnQyw4QkFBaEM7QUFDQSxFQUhEOztBQUtBLE1BQUtFLElBQUwsR0FBWSxDQUFDUCxXQUFXQSxRQUFRTyxJQUFuQixHQUEwQlAsUUFBUU8sSUFBbEMsR0FBeUMscUJBQTFDLElBQW1FLFNBQW5FLEdBQStFUixPQUEvRSxHQUF5RixHQUFyRztBQUNBLE1BQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE1BQUtJLE1BQUwsR0FBY0ssU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsTUFBS04sTUFBTCxDQUFZQyxTQUFaLENBQXNCTSxHQUF0QixDQUEwQixnQkFBMUI7QUFDQSxNQUFLQyxNQUFMLEdBQWNILFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLE1BQUtFLE1BQUwsQ0FBWUMsR0FBWixHQUFrQixLQUFLTCxJQUF2QjtBQUNBLE1BQUtELFFBQUwsR0FBZ0JFLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxNQUFLSCxRQUFMLENBQWNGLFNBQWQsQ0FBd0JNLEdBQXhCLENBQTRCLHlCQUE1QjtBQUNBLE1BQUtKLFFBQUwsQ0FBY08sZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0NYLFdBQXhDLEVBQXFELEtBQXJEOztBQUVBLE1BQUtDLE1BQUwsQ0FBWVcsTUFBWixDQUFtQixLQUFLSCxNQUF4Qjs7QUFFQSxNQUFLSSxXQUFMLEdBQW1CUCxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0EsTUFBS00sV0FBTCxDQUFpQlgsU0FBakIsQ0FBMkJNLEdBQTNCLENBQStCLHNCQUEvQjtBQUNBLE1BQUtLLFdBQUwsQ0FBaUJDLFNBQWpCLEdBQTZCLFNBQTdCO0FBQ0EsTUFBS0QsV0FBTCxDQUFpQkYsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDWCxXQUEzQyxFQUF3RCxLQUF4RDs7QUFFQSxNQUFLQyxNQUFMLENBQVlXLE1BQVosQ0FBbUIsS0FBS0MsV0FBeEI7QUFDQVAsVUFBU1MsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtmLE1BQS9CO0FBQ0FLLFVBQVNTLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLWixRQUEvQjtBQUNBRSxVQUFTSyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFTTSxHQUFULEVBQWM7QUFDbEQsTUFBR0EsSUFBSUMsT0FBSixLQUFnQixFQUFuQixFQUF1QjtBQUN0Qm5CLFNBQU1vQixLQUFOO0FBQ0E7QUFDRCxFQUpELEVBSUcsSUFKSDtBQUtBLENBakNEOztBQW1DQXZCLGNBQWN3QixTQUFkLENBQXdCQyxJQUF4QixHQUErQixVQUFTQyxJQUFULEVBQWU7QUFDN0MsTUFBS2IsTUFBTCxDQUFZQyxHQUFaLEdBQWtCLEtBQUtMLElBQUwsR0FBWWlCLElBQTlCO0FBQ0EsTUFBS3JCLE1BQUwsQ0FBWUMsU0FBWixDQUFzQk0sR0FBdEIsQ0FBMEIscUJBQTFCO0FBQ0EsTUFBS0osUUFBTCxDQUFjRixTQUFkLENBQXdCTSxHQUF4QixDQUE0Qiw4QkFBNUI7QUFDQSxDQUpEOztBQU1BWixjQUFjd0IsU0FBZCxDQUF3QkQsS0FBeEIsR0FBZ0MsVUFBU0csSUFBVCxFQUFlO0FBQzlDLE1BQUtyQixNQUFMLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLHFCQUE3QjtBQUNBLE1BQUtDLFFBQUwsQ0FBY0YsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsOEJBQS9CO0FBQ0EsQ0FIRDs7QUFLQW9CLE9BQU9DLE9BQVAsR0FBaUI1QixhQUFqQiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPc21vc2lzQ2xpZW50ID0gZnVuY3Rpb24ocHJvZHVjdCwgb3B0aW9ucykge1xuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0dmFyIGNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XG5cdFx0X3RoaXMuZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ29zbW9zaXMtY2xpZW50LXNob3cnKTtcblx0XHRfdGhpcy5iYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwib3Ntb3Npcy1jbGllbnQtYmFja2Ryb3Atc2hvd1wiKTtcblx0fTtcblx0XG5cdHRoaXMucm9vdCA9IChvcHRpb25zICYmIG9wdGlvbnMucm9vdCA/IG9wdGlvbnMucm9vdCA6IFwiaHR0cHM6Ly9vc21vc2lzLmNvbVwiKSArIFwiL2RvY3MjL1wiICsgcHJvZHVjdCArIFwiL1wiO1xuXHR0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuXHR0aGlzLmRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRoaXMuZGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJvc21vc2lzLWNsaWVudFwiKTtcblx0dGhpcy5pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXHR0aGlzLmlmcmFtZS5zcmMgPSB0aGlzLnJvb3Q7XG5cdHRoaXMuYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0aGlzLmJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJvc21vc2lzLWNsaWVudC1iYWNrZHJvcFwiKTtcblx0dGhpcy5iYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEaWFsb2csIGZhbHNlKTtcblx0XG5cdHRoaXMuZGlhbG9nLmFwcGVuZCh0aGlzLmlmcmFtZSk7XG5cdFxuXHR0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGhpcy5jbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3Ntb3Npcy1jbGllbnQtY2xvc2VcIik7XG5cdHRoaXMuY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG5cdHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRGlhbG9nLCBmYWxzZSk7XG5cdFxuXHR0aGlzLmRpYWxvZy5hcHBlbmQodGhpcy5jbG9zZUJ1dHRvbik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaWFsb2cpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmFja2Ryb3ApO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldnQpIHtcblx0XHRpZihldnQua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0fVxuXHR9LCB0cnVlKTtcbn07XG5cbk9zbW9zaXNDbGllbnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihwYWdlKSB7XG5cdHRoaXMuaWZyYW1lLnNyYyA9IHRoaXMucm9vdCArIHBhZ2U7XG5cdHRoaXMuZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ29zbW9zaXMtY2xpZW50LXNob3cnKTtcblx0dGhpcy5iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwib3Ntb3Npcy1jbGllbnQtYmFja2Ryb3Atc2hvd1wiKTtcbn07XG5cbk9zbW9zaXNDbGllbnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24ocGFnZSkge1xuXHR0aGlzLmRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdvc21vc2lzLWNsaWVudC1zaG93Jyk7XG5cdHRoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcIm9zbW9zaXMtY2xpZW50LWJhY2tkcm9wLXNob3dcIik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9zbW9zaXNDbGllbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL29zbW9zaXMtY2xpZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
});