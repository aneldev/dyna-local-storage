(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-local-storage", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-local-storage"] = factory();
	else
		root["dyna-local-storage"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaLocalStorage_1 = __webpack_require__(2);
exports.DynaLocalStorage = DynaLocalStorage_1.DynaLocalStorage;
var DynaLocalSrorageData_1 = __webpack_require__(1);
exports.DynaLocalStorageData = DynaLocalSrorageData_1.DynaLocalStorageData;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaLocalStorageData = /** @class */ (function () {
    function DynaLocalStorageData(localStorageKey, defaultData) {
        if (defaultData === void 0) { defaultData = {}; }
        this.localStorageKey = localStorageKey;
        this.load();
        if (!this.data)
            this.data = JSON.parse(JSON.stringify(defaultData));
    }
    DynaLocalStorageData.prototype.load = function () {
        this.data = null;
        var storedMemory = localStorage.getItem(this.localStorageKey);
        try {
            this.data = JSON.parse(storedMemory);
        }
        catch (error) {
            // swallow the error, the default values will be applied
        }
    };
    DynaLocalStorageData.prototype.save = function () {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
    };
    return DynaLocalStorageData;
}());
exports.DynaLocalStorageData = DynaLocalStorageData;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaLocalStorage = /** @class */ (function () {
    function DynaLocalStorage(namespace) {
        if (namespace === void 0) { namespace = "dyna-local-storage"; }
        this.namespace = namespace;
    }
    DynaLocalStorage.prototype._getFullStorageKey = function (key) {
        return this.namespace + "/" + key;
    };
    DynaLocalStorage.prototype.setItem = function (key, data) {
        localStorage.setItem(this._getFullStorageKey(key), JSON.stringify(data));
    };
    DynaLocalStorage.prototype.getItem = function (key, defaultValue) {
        var storedDateValue = localStorage.getItem(this._getFullStorageKey(key));
        if (!storedDateValue)
            return defaultValue;
        return JSON.parse(storedDateValue);
    };
    DynaLocalStorage.prototype.setDate = function (key, value) {
        this.setItem(key, Number(new Date(value)));
    };
    DynaLocalStorage.prototype.getDate = function (key, defaultValue) {
        var storedDateValue = this.getItem(key, null);
        var date = storedDateValue != null && new Date(storedDateValue) || defaultValue;
        this.setDate(key, date);
        return date;
    };
    return DynaLocalStorage;
}());
exports.DynaLocalStorage = DynaLocalStorage;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});