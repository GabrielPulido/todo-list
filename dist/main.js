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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\n\n\n\n\nlet proj = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nproj.setTitle('Virtual Library');\nconsole.log(`Project Title: ${proj.getTitle()}`);\n\n//create tasks\nlet task1 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(`Build UI`, `implement html & css`, `5/15/21`, `Low`, false);\nlet task2 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(`Start Backend`, `connect to database & find hosting`, `Finished`, `High`, true);\nlet task3 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(`Finish Frontend`, `dom manipulation w/ react/js`, `tomorrow`, `Medium`, false);\nlet task4 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(`Unit Testing`, `test some things`, `Done`, `Low`, true);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\n\n\nlet Project = (title) => {\n\n    let tasks = [];\n\n    let getTitle = () => {\n        return title;\n    }\n\n    let getTasks = () => {\n        return tasks;\n    }\n\n    let setTitle = (x) => {\n        title = x;\n    }\n\n    //Takes an array of task objects & puts them in the project (tested & verified, it works)\n    let setTasks = (arr) => {\n\n        //makes sure user passes an array\n        if (Array.isArray(arr) === false) {\n            return 'Error: Input is not an array. Please input a valid array of task objects';\n        }\n\n        //makes sure every element of the array is an object\n        for (let i = 0; i < arr.length; i++) {\n            if ((typeof arr[i]) !== 'object') {\n                return `${arr[i]} is not an object. Please input a valid array of task objects`;\n            }\n        };\n\n        //makes sure every element is a task\n        for (let i = 0; i < arr.length; i++) {\n            if ((0,_task__WEBPACK_IMPORTED_MODULE_0__.isTask)(arr[i]) === false) {\n                return `${arr[i]} is not a task object.  Please input a valid array of task objects`;\n            }\n        };\n\n        //Pushes each task to the tasks array. In other words we add all the tasks to the project\n        arr.forEach(element => {\n            tasks.push(element);\n        });\n    }\n\n\n    return {\n        getTitle,\n        getTasks,\n        setTitle,\n        setTasks\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isTask\": () => (/* binding */ isTask)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\n\n/*Are able to create blank task objects & populate them using set methods\n*/\nlet Task = (name, description, deadline, priority, complete) => {\n\n    //Getters\n    let getName = () => {\n        return name;\n    }\n\n    let getDescription = () => {\n        return description;\n    }\n\n    let getDeadline = () => {\n        return deadline;\n    }\n\n    let getPriority = () => {\n        return priority;\n    }\n\n    let getCompletionStatus = () => {\n        return complete;\n    }\n\n    //Setters\n    let setName = (x) => {\n        name = x;\n    }\n\n    let setDescription = (x) => {\n        description = x;\n    }\n\n    let setDeadline = (x) => {\n        deadline = x;\n    }\n\n    let setPriority = (x) => {\n        priority = x;\n    }\n\n    let setCompletionStatus = (x) => {\n        complete = x;\n    }\n\n    return { getName, getDescription, getDeadline, getPriority, setName, getCompletionStatus, setDescription, setDeadline, setPriority, setCompletionStatus }\n}\n\n//isTask function tested & works\nlet isTask = (x) => {\n    if ((typeof x) !== 'object') {\n        return 'Error, this is not an object';\n    }\n\n    let taskObj = Task();\n    let taskProperties = [];\n\n    for (const prop in taskObj) {\n        taskProperties.push(prop);\n    }\n\n    let objProperties = [];\n    for (const prop in x) {\n        objProperties.push(prop);\n    }\n\n    for (let i = 0; i < taskProperties.length; i++) {\n        if (taskProperties[i] !== objProperties[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"objectSummary\": () => (/* binding */ objectSummary)\n/* harmony export */ });\n//Checks if x is a getter method\nlet isGetter = (x) => {\n    if (x.substring(0, 3) === 'get') {\n        return true;\n    }\n    return false;\n}\n\n/*Puts all the object's properties each into an array [Title: 1, Name: 2, ...]\nOutputs properties of inputted object by...\n 1. Iterating through all the object's enumerable properties/methods\n 2. If it starts with 'get', then include it in the output\n  - This is done bc the goal is to select the object's properties and this seperates the properties from the methods.  Since we access the properties w/ getters, we know that if the function starts w/ get, then its accessing a property we need to print\n 3. returns an array that stores each property in a string\n - This function will cause an error if you pass an object where you have direct access to properties becuase it assumes each property is a function and will invoke it.  If it's an actual property, it can't invoke it. It's like trying to invoke a variable, it'll cause an error\n - If the object's properties are empty but it still has the appropriate getters/setters, it'll show it as being undefined\n*/\nlet objectSummary = (obj) => {\n    let arr = [];\n    for (const property in obj) {\n        if (isGetter(property)) {\n            arr.push(`${property.substring(3)}: ${obj[property]()}`);\n        }\n    }\n    return arr;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/utilities.js?");

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