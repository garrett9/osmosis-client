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
eval("\n\nvar OsmosisClient = function OsmosisClient(product, options) {\n\tvar _this = this;\n\n\tvar closeDialog = function closeDialog() {\n\t\t_this.dialog.classList.remove('osmosis-client-show');\n\t\t_this.backdrop.classList.remove(\"osmosis-client-backdrop-show\");\n\t};\n\n\tvar domain = options && options.root ? options.root : \"https://osmosissoftware.com\";\n\n\tthis.root = domain + \"/products/\" + product + \"?iframe=true#/\";\n\tthis.product = product;\n\tthis.dialog = document.createElement(\"div\");\n\tthis.dialog.classList.add(\"osmosis-client\");\n\tthis.iframe = document.createElement(\"iframe\");\n\tthis.iframe.src = this.root;\n\tthis.backdrop = document.createElement(\"div\");\n\tthis.backdrop.classList.add(\"osmosis-client-backdrop\");\n\tthis.backdrop.addEventListener(\"click\", closeDialog, false);\n\n\tthis.dialog.append(this.iframe);\n\n\tthis.closeButton = document.createElement(\"div\");\n\tthis.closeButton.classList.add(\"osmosis-client-close\");\n\tthis.closeButton.innerHTML = \"&times;\";\n\tthis.closeButton.addEventListener(\"click\", closeDialog, false);\n\n\tthis.dialog.append(this.closeButton);\n\tdocument.body.appendChild(this.dialog);\n\tdocument.body.appendChild(this.backdrop);\n\tdocument.addEventListener(\"keydown\", function (evt) {\n\t\tif (evt.keyCode === 27) {\n\t\t\t_this.close();\n\t\t}\n\t}, true);\n\n\tthis.pages = {};\n\n\tvar req = new XMLHttpRequest();\n\treq.open(\"GET\", domain + \"/api/v1/products/\" + product);\n\treq.setRequestHeader(\"Content-Type\", \"application/json\");\n\treq.onload = function () {\n\t\tvar product = JSON.parse(req.responseText);\n\t\tfor (var i in product.parent_pages) {\n\t\t\tvar parentPage = product.parent_pages[i];\n\t\t\tvar parentPageTitle = parentPage.title.toLowerCase();\n\t\t\t_this.pages[parentPageTitle] = parentPage.id;\n\n\t\t\tfor (var j in parentPage.pages) {\n\t\t\t\tvar page = parentPage.pages[j];\n\t\t\t\t_this.pages[parentPageTitle + '/' + page.title.toLowerCase()] = page.id;\n\t\t\t}\n\t\t}\n\t};\n\treq.send();\n};\n\nOsmosisClient.prototype.open = function (page) {\n\n\tvar pagePath = null;\n\tif (typeof page === 'string') {\n\t\tvar key = page.replace(/^\\/|\\/$/g, '');\n\t\tif (this.pages[key]) {\n\t\t\tpagePath = this.pages[key];\n\t\t} else {\n\t\t\tconsole.error(\"Could not find existing page path, \\\"\" + key + \"\\\"!\");\n\t\t}\n\t} else {\n\t\tpagePath = page;\n\t}\n\n\tif (pagePath !== null) {\n\t\tthis.iframe.src = this.root + pagePath;\n\t\tthis.dialog.classList.add('osmosis-client-show');\n\t\tthis.backdrop.classList.add(\"osmosis-client-backdrop-show\");\n\t}\n};\n\nOsmosisClient.prototype.close = function (page) {\n\tthis.dialog.classList.remove('osmosis-client-show');\n\tthis.backdrop.classList.remove(\"osmosis-client-backdrop-show\");\n};\n\nmodule.exports = OsmosisClient;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvb3Ntb3Npcy1jbGllbnQuanM/ZDBmMCJdLCJuYW1lcyI6WyJPc21vc2lzQ2xpZW50IiwicHJvZHVjdCIsIm9wdGlvbnMiLCJfdGhpcyIsImNsb3NlRGlhbG9nIiwiZGlhbG9nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYmFja2Ryb3AiLCJkb21haW4iLCJyb290IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiaWZyYW1lIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZCIsImNsb3NlQnV0dG9uIiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZXZ0Iiwia2V5Q29kZSIsImNsb3NlIiwicGFnZXMiLCJyZXEiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaSIsInBhcmVudF9wYWdlcyIsInBhcmVudFBhZ2UiLCJwYXJlbnRQYWdlVGl0bGUiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaWQiLCJqIiwicGFnZSIsInNlbmQiLCJwcm90b3R5cGUiLCJwYWdlUGF0aCIsImtleSIsInJlcGxhY2UiLCJjb25zb2xlIiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQ2hELEtBQUlDLFFBQVEsSUFBWjs7QUFFQSxLQUFJQyxjQUFjLFNBQWRBLFdBQWMsR0FBVztBQUM1QkQsUUFBTUUsTUFBTixDQUFhQyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixxQkFBOUI7QUFDQUosUUFBTUssUUFBTixDQUFlRixTQUFmLENBQXlCQyxNQUF6QixDQUFnQyw4QkFBaEM7QUFDQSxFQUhEOztBQUtBLEtBQUlFLFNBQVNQLFdBQVdBLFFBQVFRLElBQW5CLEdB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QWdCLFFBQW5CLEVBQTZCO0FBQzVCLE1BQUlJLE1BQU1KLEtBQUtLLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEVBQXpCLENBQVY7QUFDQSxNQUFHLEtBQUt0QixLQUFMLENBQVdxQixHQUFYLENBQUgsRUFBb0I7QUFDbkJELGNBQVcsS0FBS3BCLEtBQUwsQ0FBV3FCLEdBQVgsQ0FBWDtBQUNBLEdBRkQsTUFFTztBQUNORSxXQUFRQyxLQUFSLENBQWMsMENBQTBDSCxHQUExQyxHQUFnRCxLQUE5RDtBQUNBO0FBQ0QsRUFQRCxNQU9PO0FBQ05ELGFBQVdILElBQVg7QUFDQTs7QUFFRCxLQUFHRyxhQUFhLElBQWhCLEVBQXNCO0FBQ3JCLE9BQUsvQixNQUFMLENBQVlDLEdBQVosR0FBa0IsS0FBS0wsSUFBTCxHQUFZbUMsUUFBOUI7QUFDQSxPQUFLeEMsTUFBTCxDQUFZQyxTQUFaLENBQXNCTyxHQUF0QixDQUEwQixxQkFBMUI7QUFDQSxPQUFLTCxRQUFMLENBQWNGLFNBQWQsQ0FBd0JPLEdBQXhCLENBQTRCLDhCQUE1QjtBQUNBO0FBQ0QsQ0FuQkQ7O0FBcUJBYixjQUFjNEMsU0FBZCxDQUF3QnBCLEtBQXhCLEdBQWdDLFVBQVNrQixJQUFULEVBQWU7QUFDOUMsTUFBS3JDLE1BQUwsQ0FBWUMsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIscUJBQTdCO0FBQ0EsTUFBS0MsUUFBTCxDQUFjRixTQUFkLENBQXdCQyxNQUF4QixDQUErQiw4QkFBL0I7QUFDQSxDQUhEOztBQUtBMkMsT0FBT0MsT0FBUCxHQUFpQm5ELGFBQWpCIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE9zbW9zaXNDbGllbnQgPSBmdW5jdGlvbihwcm9kdWN0LCBvcHRpb25zKSB7XG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHR2YXIgY2xvc2VEaWFsb2cgPSBmdW5jdGlvbigpIHtcblx0XHRfdGhpcy5kaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnb3Ntb3Npcy1jbGllbnQtc2hvdycpO1xuXHRcdF90aGlzLmJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoXCJvc21vc2lzLWNsaWVudC1iYWNrZHJvcC1zaG93XCIpO1xuXHR9O1xuXHRcblx0dmFyIGRvbWFpbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5yb290ID8gb3B0aW9ucy5yb290IDogXCJodHRwczovL29zbW9zaXNzb2Z0d2FyZS5jb21cIjtcblx0XG5cdHRoaXMucm9vdCA9IGRvbWFpbiArIFwiL3Byb2R1Y3RzL1wiICsgcHJvZHVjdCArIFwiP2lmcmFtZT10cnVlIy9cIjtcblx0dGhpcy5wcm9kdWN0ID0gcHJvZHVjdDtcblx0dGhpcy5kaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0aGlzLmRpYWxvZy5jbGFzc0xpc3QuYWRkKFwib3Ntb3Npcy1jbGllbnRcIik7XG5cdHRoaXMuaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblx0dGhpcy5pZnJhbWUuc3JjID0gdGhpcy5yb290O1xuXHR0aGlzLmJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGhpcy5iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwib3Ntb3Npcy1jbGllbnQtYmFja2Ryb3BcIik7XG5cdHRoaXMuYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRGlhbG9nLCBmYWxzZSk7XG5cdFxuXHR0aGlzLmRpYWxvZy5hcHBlbmQodGhpcy5pZnJhbWUpO1xuXHRcblx0dGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRoaXMuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcIm9zbW9zaXMtY2xpZW50LWNsb3NlXCIpO1xuXHR0aGlzLmNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuXHR0aGlzLmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZURpYWxvZywgZmFsc2UpO1xuXHRcblx0dGhpcy5kaWFsb2cuYXBwZW5kKHRoaXMuY2xvc2VCdXR0b24pO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGlhbG9nKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJhY2tkcm9wKTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZ0KSB7XG5cdFx0aWYoZXZ0LmtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHRfdGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fSwgdHJ1ZSk7XG5cdFxuXHR0aGlzLnBhZ2VzID0ge307XG5cdFxuXHR2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdHJlcS5vcGVuKFwiR0VUXCIsIGRvbWFpbiArIFwiL2FwaS92MS9wcm9kdWN0cy9cIiArIHByb2R1Y3QpO1xuXHRyZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cdHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgcHJvZHVjdCA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG5cdFx0Zm9yKHZhciBpIGluIHByb2R1Y3QucGFyZW50X3BhZ2VzKSB7XG5cdFx0XHR2YXIgcGFyZW50UGFnZSA9IHByb2R1Y3QucGFyZW50X3BhZ2VzW2ldO1xuXHRcdFx0dmFyIHBhcmVudFBhZ2VUaXRsZSA9IHBhcmVudFBhZ2UudGl0bGUudG9Mb3dlckNhc2UoKTtcblx0XHRcdF90aGlzLnBhZ2VzW3BhcmVudFBhZ2VUaXRsZV0gPSBwYXJlbnRQYWdlLmlkO1xuXHRcdFx0XG5cdFx0XHRmb3IodmFyIGogaW4gcGFyZW50UGFnZS5wYWdlcykge1xuXHRcdFx0XHR2YXIgcGFnZSA9IHBhcmVudFBhZ2UucGFnZXNbal07XG5cdFx0XHRcdF90aGlzLnBhZ2VzW3BhcmVudFBhZ2VUaXRsZSArICcvJyArIHBhZ2UudGl0bGUudG9Mb3dlckNhc2UoKV0gPSBwYWdlLmlkO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmVxLnNlbmQoKTtcbn07XG5cbk9zbW9zaXNDbGllbnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihwYWdlKSB7XG5cdFxuXHR2YXIgcGFnZVBhdGggPSBudWxsO1xuXHRpZih0eXBlb2YgcGFnZSA9PT0gJ3N0cmluZycpIHtcblx0XHR2YXIga2V5ID0gcGFnZS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgJycpO1xuXHRcdGlmKHRoaXMucGFnZXNba2V5XSkge1xuXHRcdFx0cGFnZVBhdGggPSB0aGlzLnBhZ2VzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZmluZCBleGlzdGluZyBwYWdlIHBhdGgsIFxcXCJcIiArIGtleSArIFwiXFxcIiFcIik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHBhZ2VQYXRoID0gcGFnZTtcblx0fVxuXHRcblx0aWYocGFnZVBhdGggIT09IG51bGwpIHtcblx0XHR0aGlzLmlmcmFtZS5zcmMgPSB0aGlzLnJvb3QgKyBwYWdlUGF0aDtcblx0XHR0aGlzLmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdvc21vc2lzLWNsaWVudC1zaG93Jyk7XG5cdFx0dGhpcy5iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwib3Ntb3Npcy1jbGllbnQtYmFja2Ryb3Atc2hvd1wiKTtcblx0fVxufTtcblxuT3Ntb3Npc0NsaWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbihwYWdlKSB7XG5cdHRoaXMuZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ29zbW9zaXMtY2xpZW50LXNob3cnKTtcblx0dGhpcy5iYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwib3Ntb3Npcy1jbGllbnQtYmFja2Ryb3Atc2hvd1wiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT3Ntb3Npc0NsaWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvb3Ntb3Npcy1jbGllbnQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
});