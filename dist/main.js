/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");



let Project = (title) => {

    let tasks = [];

    let getTitle = () => {
        return title;
    }

    let getTasks = () => {
        return tasks;
    }

    let setTitle = (x) => {
        title = x;
    }

    //Takes an array of task objects & puts them in the project (tested & verified, it works)
    let setTasks = (arr) => {

        //makes sure user passes an array
        if (Array.isArray(arr) === false) {
            return 'Error: Input is not an array. Please input a valid array of task objects';
        }

        //makes sure every element of the array is an object
        for (let i = 0; i < arr.length; i++) {
            if ((typeof arr[i]) !== 'object') {
                return `${arr[i]} is not an object. Please input a valid array of task objects`;
            }
        };

        //makes sure every element is a task
        for (let i = 0; i < arr.length; i++) {
            if ((0,_task__WEBPACK_IMPORTED_MODULE_0__.isTask)(arr[i]) === false) {
                return `${arr[i]} is not a task object.  Please input a valid array of task objects`;
            }
        };

        //Pushes each task to the tasks array. In other words we add all the tasks to the project
        arr.forEach(element => {
            tasks.push(element);
        });
    }

    //Takes an array of task objects to be deleted
    let removeTasks = (arr) => {
        //makes sure user passes an array
        if (Array.isArray(arr) === false) {
            return 'Error: Input is not an array. Please input a valid array of task objects';
        }

        //makes sure every element of the array is an object
        for (let i = 0; i < arr.length; i++) {
            if ((typeof arr[i]) !== 'object') {
                return `${arr[i]} is not an object. Please input a valid array of task objects`;
            }
        };

        //makes sure every element is a task
        for (let i = 0; i < arr.length; i++) {
            if ((0,_task__WEBPACK_IMPORTED_MODULE_0__.isTask)(arr[i]) === false) {
                return `${arr[i]} is not a task object.  Please input a valid array of task objects`;
            }
        };

        //For each element in the array of tasks to delete, loop through all the tasks in the project and if the task in the array of tasks to be deleted and the task in the tasks array are the same, then delete it
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < tasks.length; j++) {
                if (arr[i] === tasks[j]) {
                    tasks.splice(j, 1);
                }
            }
        }

    }


    return {
        getTitle,
        getTasks,
        setTitle,
        setTasks,
        removeTasks,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/subtask.js":
/*!************************!*\
  !*** ./src/subtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isSubtask": () => (/* binding */ isSubtask)
/* harmony export */ });
let Subtask = (name, done) => {
    let getName = () => {
        return name
    }
    let setName = (x) => {
        name = x;
    }
    let getDone = () => {
        return done;
    }
    let setDone = (x) => {
        done = x;
    }
    return {
        getName,
        setName,
        getDone,
        setDone,
    }
}

//Takes in an object and checks if it's a subtask object
let isSubtask = (x) => {
    //Check if it's an object
    if ((typeof x) !== 'object') {
        return 'Error, this is not an object';
    }

    let subtaskObj = Subtask();
    let subtaskProperties = [];

    for (const prop in subtaskObj) {
        subtaskProperties.push(prop)
    }

    let objProperties = []
    for (const prop in x) {
        objProperties.push(prop);
    }

    for (let i = 0; i < subtaskProperties.length; i++) {
        if (subtaskProperties[i] !== objProperties[i]) {
            return false;
        }
    }
    return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subtask);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isTask": () => (/* binding */ isTask)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _subtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtask */ "./src/subtask.js");



/*Are able to create blank task objects & populate them using set methods
*/
let Task = (name, description, deadline, priority, complete) => {

    let subtasks = [];

    //Getters
    let getSubtasks = () => {
        return subtasks;
    }

    let getName = () => {
        return name;
    }

    let getDescription = () => {
        return description;
    }

    let getDeadline = () => {
        return deadline;
    }

    let getPriority = () => {
        return priority;
    }

    let getCompletionStatus = () => {
        return complete;
    }

    //Setters
    let setName = (x) => {
        name = x;
    }

    let setDescription = (x) => {
        description = x;
    }

    let setDeadline = (x) => {
        deadline = x;
    }

    let setPriority = (x) => {
        priority = x;
    }

    let setCompletionStatus = (x) => {
        complete = x;
    }

    let addSubtasks = (arr) => {
        //makes sure user passes an array
        if (Array.isArray(arr) === false) {
            return 'Error: Input is not an array. Please input a valid array of subtask objects';
        }

        //makes sure every element of the array is an object
        for (let i = 0; i < arr.length; i++) {
            if ((typeof arr[i]) !== 'object') {
                return `${arr[i]} is not an object. Please input a valid array of subtask objects`;
            }
        };

        //makes sure every element is a subtask
        for (let i = 0; i < arr.length; i++) {
            if ((0,_subtask__WEBPACK_IMPORTED_MODULE_1__.isSubtask)(arr[i]) === false) {
                return `${arr[i]} is not a subtask object.  Please input a valid array of subtask objects`;
            }
        };

        arr.forEach(element => {
            subtasks.push(element);
        });
    }

    let removeSubtasks = (arr) => {
        //makes sure user passes an array
        if (Array.isArray(arr) === false) {
            return 'Error: Input is not an array. Please input a valid array of subtask objects';
        }

        //makes sure every element of the array is an object
        for (let i = 0; i < arr.length; i++) {
            if ((typeof arr[i]) !== 'object') {
                return `${arr[i]} is not an object. Please input a valid array of subtask objects`;
            }
        };

        //makes sure every element is a subtask
        for (let i = 0; i < arr.length; i++) {
            if ((0,_subtask__WEBPACK_IMPORTED_MODULE_1__.isSubtask)(arr[i]) === false) {
                return `${arr[i]} is not a subtask object.  Please input a valid array of subtask objects`;
            }
        };

        //For each element in the array of tasks to delete, loop through all the tasks in the project and if the task in the array of tasks to be deleted and the task in the tasks array are the same, then delete it
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < subtasks.length; j++) {
                if (arr[i] === subtasks[j]) {
                    subtasks.splice(j, 1);
                }
            }
        }

    }

    return { getName, getSubtasks, getDescription, getDeadline, getPriority, setName, getCompletionStatus, setDescription, setDeadline, setPriority, setCompletionStatus, addSubtasks, removeSubtasks }
}

//isTask function tested & works 
let isTask = (x) => {
    if ((typeof x) !== 'object') {
        return 'Error, this is not an object';
    }

    let taskObj = Task();
    let taskProperties = [];

    for (const prop in taskObj) {
        taskProperties.push(prop);
    }

    let objProperties = [];
    for (const prop in x) {
        objProperties.push(prop);
    }

    for (let i = 0; i < taskProperties.length; i++) {
        if (taskProperties[i] !== objProperties[i]) {
            return false;
        }
    }
    return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectSummary": () => (/* binding */ objectSummary),
/* harmony export */   "removeSpace": () => (/* binding */ removeSpace)
/* harmony export */ });
//Checks if x is a getter method
let isGetter = (x) => {
    if (x.substring(0, 3) === 'get') {
        return true;
    }
    return false;
}

/*Puts all the object's properties each into an array [Title: 1, Name: 2, ...]
Outputs properties of inputted object by...
 1. Iterating through all the object's enumerable properties/methods
 2. If it starts with 'get', then include it in the output
  - This is done bc the goal is to select the object's properties and this seperates the properties from the methods.  Since we access the properties w/ getters, we know that if the function starts w/ get, then its accessing a property we need to print
 3. returns an array that stores each property in a string
 - This function will cause an error if you pass an object where you have direct access to properties becuase it assumes each property is a function and will invoke it.  If it's an actual property, it can't invoke it. It's like trying to invoke a variable, it'll cause an error
 - If the object's properties are empty but it still has the appropriate getters/setters, it'll show it as being undefined
*/
let objectSummary = (obj) => {
    let arr = [];
    for (const property in obj) {
        if (isGetter(property)) {
            arr.push(`${property.substring(3)}: ${obj[property]()}`);
        }
    }
    return arr;
}

let removeSpace = (str) => {
    let newStr = str.replaceAll(' ', '');
    return newStr;
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _subtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtask */ "./src/subtask.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");






//Create Default Project
let proj = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.default)();

proj.setTitle('Default Project');
console.log(`Project Title: ${proj.getTitle()}`);

//create tasks
let task1 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(`Default Task 1`, `Description`, `5/15/21`, `Low`, false);
let task2 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(`Start Backend`, `connect to database & find hosting`, `Finished`, `High`, true);
let task3 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(`Finish Frontend`, `dom manipulation w/ react/js`, `tomorrow`, `Medium`, false);
let task4 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(`Unit Testing`, `test some things`, `Done`, `Low`, true);

proj.setTasks([task1, task2, task3, task4]);

let subtask1 = (0,_subtask__WEBPACK_IMPORTED_MODULE_2__.default)('Combine Object Creation Functions', true);
let subtask2 = (0,_subtask__WEBPACK_IMPORTED_MODULE_2__.default)('Delete Line 32', false);

task1.addSubtasks([subtask1, subtask2]);

console.log(task1.getSubtasks());
console.log((0,_utilities__WEBPACK_IMPORTED_MODULE_3__.objectSummary)(task1.getSubtasks()[1]));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N1YnRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNGOztBQUU5Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDLGdCQUFnQiw2Q0FBTTtBQUN0QiwwQkFBMEIsT0FBTztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkMsZ0JBQWdCLDZDQUFNO0FBQ3RCLDBCQUEwQixPQUFP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QUk7QUFDaEIsWUFBWSw4Q0FBSTtBQUNoQixZQUFZLDhDQUFJOztBQUVoQjs7QUFFQSxlQUFlLGlEQUFPO0FBQ3RCLGVBQWUsaURBQU87O0FBRXRCOztBQUVBO0FBQ0EsWUFBWSx5REFBYSwwQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxubGV0IFByb2plY3QgPSAodGl0bGUpID0+IHtcblxuICAgIGxldCB0YXNrcyA9IFtdO1xuXG4gICAgbGV0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgbGV0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG4gICAgbGV0IHNldFRpdGxlID0gKHgpID0+IHtcbiAgICAgICAgdGl0bGUgPSB4O1xuICAgIH1cblxuICAgIC8vVGFrZXMgYW4gYXJyYXkgb2YgdGFzayBvYmplY3RzICYgcHV0cyB0aGVtIGluIHRoZSBwcm9qZWN0ICh0ZXN0ZWQgJiB2ZXJpZmllZCwgaXQgd29ya3MpXG4gICAgbGV0IHNldFRhc2tzID0gKGFycikgPT4ge1xuXG4gICAgICAgIC8vbWFrZXMgc3VyZSB1c2VyIHBhc3NlcyBhbiBhcnJheVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICdFcnJvcjogSW5wdXQgaXMgbm90IGFuIGFycmF5LiBQbGVhc2UgaW5wdXQgYSB2YWxpZCBhcnJheSBvZiB0YXNrIG9iamVjdHMnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9tYWtlcyBzdXJlIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGFycmF5IGlzIGFuIG9iamVjdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YgYXJyW2ldKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXJyW2ldfSBpcyBub3QgYW4gb2JqZWN0LiBQbGVhc2UgaW5wdXQgYSB2YWxpZCBhcnJheSBvZiB0YXNrIG9iamVjdHNgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vbWFrZXMgc3VyZSBldmVyeSBlbGVtZW50IGlzIGEgdGFza1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzVGFzayhhcnJbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHthcnJbaV19IGlzIG5vdCBhIHRhc2sgb2JqZWN0LiAgUGxlYXNlIGlucHV0IGEgdmFsaWQgYXJyYXkgb2YgdGFzayBvYmplY3RzYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL1B1c2hlcyBlYWNoIHRhc2sgdG8gdGhlIHRhc2tzIGFycmF5LiBJbiBvdGhlciB3b3JkcyB3ZSBhZGQgYWxsIHRoZSB0YXNrcyB0byB0aGUgcHJvamVjdFxuICAgICAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHRhc2tzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vVGFrZXMgYW4gYXJyYXkgb2YgdGFzayBvYmplY3RzIHRvIGJlIGRlbGV0ZWRcbiAgICBsZXQgcmVtb3ZlVGFza3MgPSAoYXJyKSA9PiB7XG4gICAgICAgIC8vbWFrZXMgc3VyZSB1c2VyIHBhc3NlcyBhbiBhcnJheVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICdFcnJvcjogSW5wdXQgaXMgbm90IGFuIGFycmF5LiBQbGVhc2UgaW5wdXQgYSB2YWxpZCBhcnJheSBvZiB0YXNrIG9iamVjdHMnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9tYWtlcyBzdXJlIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGFycmF5IGlzIGFuIG9iamVjdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YgYXJyW2ldKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXJyW2ldfSBpcyBub3QgYW4gb2JqZWN0LiBQbGVhc2UgaW5wdXQgYSB2YWxpZCBhcnJheSBvZiB0YXNrIG9iamVjdHNgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vbWFrZXMgc3VyZSBldmVyeSBlbGVtZW50IGlzIGEgdGFza1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzVGFzayhhcnJbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHthcnJbaV19IGlzIG5vdCBhIHRhc2sgb2JqZWN0LiAgUGxlYXNlIGlucHV0IGEgdmFsaWQgYXJyYXkgb2YgdGFzayBvYmplY3RzYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL0ZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IG9mIHRhc2tzIHRvIGRlbGV0ZSwgbG9vcCB0aHJvdWdoIGFsbCB0aGUgdGFza3MgaW4gdGhlIHByb2plY3QgYW5kIGlmIHRoZSB0YXNrIGluIHRoZSBhcnJheSBvZiB0YXNrcyB0byBiZSBkZWxldGVkIGFuZCB0aGUgdGFzayBpbiB0aGUgdGFza3MgYXJyYXkgYXJlIHRoZSBzYW1lLCB0aGVuIGRlbGV0ZSBpdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChhcnJbaV0gPT09IHRhc2tzW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGdldFRhc2tzLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0VGFza3MsXG4gICAgICAgIHJlbW92ZVRhc2tzLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImxldCBTdWJ0YXNrID0gKG5hbWUsIGRvbmUpID0+IHtcbiAgICBsZXQgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICB9XG4gICAgbGV0IHNldE5hbWUgPSAoeCkgPT4ge1xuICAgICAgICBuYW1lID0geDtcbiAgICB9XG4gICAgbGV0IGdldERvbmUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkb25lO1xuICAgIH1cbiAgICBsZXQgc2V0RG9uZSA9ICh4KSA9PiB7XG4gICAgICAgIGRvbmUgPSB4O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBnZXREb25lLFxuICAgICAgICBzZXREb25lLFxuICAgIH1cbn1cblxuLy9UYWtlcyBpbiBhbiBvYmplY3QgYW5kIGNoZWNrcyBpZiBpdCdzIGEgc3VidGFzayBvYmplY3RcbmxldCBpc1N1YnRhc2sgPSAoeCkgPT4ge1xuICAgIC8vQ2hlY2sgaWYgaXQncyBhbiBvYmplY3RcbiAgICBpZiAoKHR5cGVvZiB4KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuICdFcnJvciwgdGhpcyBpcyBub3QgYW4gb2JqZWN0JztcbiAgICB9XG5cbiAgICBsZXQgc3VidGFza09iaiA9IFN1YnRhc2soKTtcbiAgICBsZXQgc3VidGFza1Byb3BlcnRpZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBzdWJ0YXNrT2JqKSB7XG4gICAgICAgIHN1YnRhc2tQcm9wZXJ0aWVzLnB1c2gocHJvcClcbiAgICB9XG5cbiAgICBsZXQgb2JqUHJvcGVydGllcyA9IFtdXG4gICAgZm9yIChjb25zdCBwcm9wIGluIHgpIHtcbiAgICAgICAgb2JqUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VidGFza1Byb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN1YnRhc2tQcm9wZXJ0aWVzW2ldICE9PSBvYmpQcm9wZXJ0aWVzW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRhc2tcbmV4cG9ydCB7IGlzU3VidGFzayB9IiwiaW1wb3J0IHsgb2JqZWN0U3VtbWFyeSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgaXNTdWJ0YXNrIH0gZnJvbSBcIi4vc3VidGFza1wiO1xuXG4vKkFyZSBhYmxlIHRvIGNyZWF0ZSBibGFuayB0YXNrIG9iamVjdHMgJiBwb3B1bGF0ZSB0aGVtIHVzaW5nIHNldCBtZXRob2RzXG4qL1xubGV0IFRhc2sgPSAobmFtZSwgZGVzY3JpcHRpb24sIGRlYWRsaW5lLCBwcmlvcml0eSwgY29tcGxldGUpID0+IHtcblxuICAgIGxldCBzdWJ0YXNrcyA9IFtdO1xuXG4gICAgLy9HZXR0ZXJzXG4gICAgbGV0IGdldFN1YnRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3VidGFza3M7XG4gICAgfVxuXG4gICAgbGV0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGxldCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBnZXREZWFkbGluZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlYWRsaW5lO1xuICAgIH1cblxuICAgIGxldCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH1cblxuICAgIGxldCBnZXRDb21wbGV0aW9uU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29tcGxldGU7XG4gICAgfVxuXG4gICAgLy9TZXR0ZXJzXG4gICAgbGV0IHNldE5hbWUgPSAoeCkgPT4ge1xuICAgICAgICBuYW1lID0geDtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGVzY3JpcHRpb24gPSAoeCkgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IHg7XG4gICAgfVxuXG4gICAgbGV0IHNldERlYWRsaW5lID0gKHgpID0+IHtcbiAgICAgICAgZGVhZGxpbmUgPSB4O1xuICAgIH1cblxuICAgIGxldCBzZXRQcmlvcml0eSA9ICh4KSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0geDtcbiAgICB9XG5cbiAgICBsZXQgc2V0Q29tcGxldGlvblN0YXR1cyA9ICh4KSA9PiB7XG4gICAgICAgIGNvbXBsZXRlID0geDtcbiAgICB9XG5cbiAgICBsZXQgYWRkU3VidGFza3MgPSAoYXJyKSA9PiB7XG4gICAgICAgIC8vbWFrZXMgc3VyZSB1c2VyIHBhc3NlcyBhbiBhcnJheVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICdFcnJvcjogSW5wdXQgaXMgbm90IGFuIGFycmF5LiBQbGVhc2UgaW5wdXQgYSB2YWxpZCBhcnJheSBvZiBzdWJ0YXNrIG9iamVjdHMnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9tYWtlcyBzdXJlIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGFycmF5IGlzIGFuIG9iamVjdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YgYXJyW2ldKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXJyW2ldfSBpcyBub3QgYW4gb2JqZWN0LiBQbGVhc2UgaW5wdXQgYSB2YWxpZCBhcnJheSBvZiBzdWJ0YXNrIG9iamVjdHNgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vbWFrZXMgc3VyZSBldmVyeSBlbGVtZW50IGlzIGEgc3VidGFza1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzU3VidGFzayhhcnJbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHthcnJbaV19IGlzIG5vdCBhIHN1YnRhc2sgb2JqZWN0LiAgUGxlYXNlIGlucHV0IGEgdmFsaWQgYXJyYXkgb2Ygc3VidGFzayBvYmplY3RzYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHN1YnRhc2tzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZW1vdmVTdWJ0YXNrcyA9IChhcnIpID0+IHtcbiAgICAgICAgLy9tYWtlcyBzdXJlIHVzZXIgcGFzc2VzIGFuIGFycmF5XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0Vycm9yOiBJbnB1dCBpcyBub3QgYW4gYXJyYXkuIFBsZWFzZSBpbnB1dCBhIHZhbGlkIGFycmF5IG9mIHN1YnRhc2sgb2JqZWN0cyc7XG4gICAgICAgIH1cblxuICAgICAgICAvL21ha2VzIHN1cmUgZXZlcnkgZWxlbWVudCBvZiB0aGUgYXJyYXkgaXMgYW4gb2JqZWN0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBhcnJbaV0pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHthcnJbaV19IGlzIG5vdCBhbiBvYmplY3QuIFBsZWFzZSBpbnB1dCBhIHZhbGlkIGFycmF5IG9mIHN1YnRhc2sgb2JqZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9tYWtlcyBzdXJlIGV2ZXJ5IGVsZW1lbnQgaXMgYSBzdWJ0YXNrXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNTdWJ0YXNrKGFycltpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2FycltpXX0gaXMgbm90IGEgc3VidGFzayBvYmplY3QuICBQbGVhc2UgaW5wdXQgYSB2YWxpZCBhcnJheSBvZiBzdWJ0YXNrIG9iamVjdHNgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vRm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgb2YgdGFza3MgdG8gZGVsZXRlLCBsb29wIHRocm91Z2ggYWxsIHRoZSB0YXNrcyBpbiB0aGUgcHJvamVjdCBhbmQgaWYgdGhlIHRhc2sgaW4gdGhlIGFycmF5IG9mIHRhc2tzIHRvIGJlIGRlbGV0ZWQgYW5kIHRoZSB0YXNrIGluIHRoZSB0YXNrcyBhcnJheSBhcmUgdGhlIHNhbWUsIHRoZW4gZGVsZXRlIGl0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1YnRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycltpXSA9PT0gc3VidGFza3Nbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VidGFza3Muc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0U3VidGFza3MsIGdldERlc2NyaXB0aW9uLCBnZXREZWFkbGluZSwgZ2V0UHJpb3JpdHksIHNldE5hbWUsIGdldENvbXBsZXRpb25TdGF0dXMsIHNldERlc2NyaXB0aW9uLCBzZXREZWFkbGluZSwgc2V0UHJpb3JpdHksIHNldENvbXBsZXRpb25TdGF0dXMsIGFkZFN1YnRhc2tzLCByZW1vdmVTdWJ0YXNrcyB9XG59XG5cbi8vaXNUYXNrIGZ1bmN0aW9uIHRlc3RlZCAmIHdvcmtzIFxubGV0IGlzVGFzayA9ICh4KSA9PiB7XG4gICAgaWYgKCh0eXBlb2YgeCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiAnRXJyb3IsIHRoaXMgaXMgbm90IGFuIG9iamVjdCc7XG4gICAgfVxuXG4gICAgbGV0IHRhc2tPYmogPSBUYXNrKCk7XG4gICAgbGV0IHRhc2tQcm9wZXJ0aWVzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGFza09iaikge1xuICAgICAgICB0YXNrUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgIH1cblxuICAgIGxldCBvYmpQcm9wZXJ0aWVzID0gW107XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHgpIHtcbiAgICAgICAgb2JqUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza1Byb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRhc2tQcm9wZXJ0aWVzW2ldICE9PSBvYmpQcm9wZXJ0aWVzW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tcbmV4cG9ydCB7IGlzVGFzayB9IiwiLy9DaGVja3MgaWYgeCBpcyBhIGdldHRlciBtZXRob2RcbmxldCBpc0dldHRlciA9ICh4KSA9PiB7XG4gICAgaWYgKHguc3Vic3RyaW5nKDAsIDMpID09PSAnZ2V0Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKlB1dHMgYWxsIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzIGVhY2ggaW50byBhbiBhcnJheSBbVGl0bGU6IDEsIE5hbWU6IDIsIC4uLl1cbk91dHB1dHMgcHJvcGVydGllcyBvZiBpbnB1dHRlZCBvYmplY3QgYnkuLi5cbiAxLiBJdGVyYXRpbmcgdGhyb3VnaCBhbGwgdGhlIG9iamVjdCdzIGVudW1lcmFibGUgcHJvcGVydGllcy9tZXRob2RzXG4gMi4gSWYgaXQgc3RhcnRzIHdpdGggJ2dldCcsIHRoZW4gaW5jbHVkZSBpdCBpbiB0aGUgb3V0cHV0XG4gIC0gVGhpcyBpcyBkb25lIGJjIHRoZSBnb2FsIGlzIHRvIHNlbGVjdCB0aGUgb2JqZWN0J3MgcHJvcGVydGllcyBhbmQgdGhpcyBzZXBlcmF0ZXMgdGhlIHByb3BlcnRpZXMgZnJvbSB0aGUgbWV0aG9kcy4gIFNpbmNlIHdlIGFjY2VzcyB0aGUgcHJvcGVydGllcyB3LyBnZXR0ZXJzLCB3ZSBrbm93IHRoYXQgaWYgdGhlIGZ1bmN0aW9uIHN0YXJ0cyB3LyBnZXQsIHRoZW4gaXRzIGFjY2Vzc2luZyBhIHByb3BlcnR5IHdlIG5lZWQgdG8gcHJpbnRcbiAzLiByZXR1cm5zIGFuIGFycmF5IHRoYXQgc3RvcmVzIGVhY2ggcHJvcGVydHkgaW4gYSBzdHJpbmdcbiAtIFRoaXMgZnVuY3Rpb24gd2lsbCBjYXVzZSBhbiBlcnJvciBpZiB5b3UgcGFzcyBhbiBvYmplY3Qgd2hlcmUgeW91IGhhdmUgZGlyZWN0IGFjY2VzcyB0byBwcm9wZXJ0aWVzIGJlY3Vhc2UgaXQgYXNzdW1lcyBlYWNoIHByb3BlcnR5IGlzIGEgZnVuY3Rpb24gYW5kIHdpbGwgaW52b2tlIGl0LiAgSWYgaXQncyBhbiBhY3R1YWwgcHJvcGVydHksIGl0IGNhbid0IGludm9rZSBpdC4gSXQncyBsaWtlIHRyeWluZyB0byBpbnZva2UgYSB2YXJpYWJsZSwgaXQnbGwgY2F1c2UgYW4gZXJyb3JcbiAtIElmIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzIGFyZSBlbXB0eSBidXQgaXQgc3RpbGwgaGFzIHRoZSBhcHByb3ByaWF0ZSBnZXR0ZXJzL3NldHRlcnMsIGl0J2xsIHNob3cgaXQgYXMgYmVpbmcgdW5kZWZpbmVkXG4qL1xubGV0IG9iamVjdFN1bW1hcnkgPSAob2JqKSA9PiB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChpc0dldHRlcihwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGAke3Byb3BlcnR5LnN1YnN0cmluZygzKX06ICR7b2JqW3Byb3BlcnR5XSgpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5cbmxldCByZW1vdmVTcGFjZSA9IChzdHIpID0+IHtcbiAgICBsZXQgbmV3U3RyID0gc3RyLnJlcGxhY2VBbGwoJyAnLCAnJyk7XG4gICAgcmV0dXJuIG5ld1N0cjtcbn1cblxuZXhwb3J0IHsgb2JqZWN0U3VtbWFyeSwgcmVtb3ZlU3BhY2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBTdWJ0YXNrIGZyb20gXCIuL3N1YnRhc2tcIjtcbmltcG9ydCB7IG9iamVjdFN1bW1hcnkgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7IGlzVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuLy9DcmVhdGUgRGVmYXVsdCBQcm9qZWN0XG5sZXQgcHJvaiA9IFByb2plY3QoKTtcblxucHJvai5zZXRUaXRsZSgnRGVmYXVsdCBQcm9qZWN0Jyk7XG5jb25zb2xlLmxvZyhgUHJvamVjdCBUaXRsZTogJHtwcm9qLmdldFRpdGxlKCl9YCk7XG5cbi8vY3JlYXRlIHRhc2tzXG5sZXQgdGFzazEgPSBUYXNrKGBEZWZhdWx0IFRhc2sgMWAsIGBEZXNjcmlwdGlvbmAsIGA1LzE1LzIxYCwgYExvd2AsIGZhbHNlKTtcbmxldCB0YXNrMiA9IFRhc2soYFN0YXJ0IEJhY2tlbmRgLCBgY29ubmVjdCB0byBkYXRhYmFzZSAmIGZpbmQgaG9zdGluZ2AsIGBGaW5pc2hlZGAsIGBIaWdoYCwgdHJ1ZSk7XG5sZXQgdGFzazMgPSBUYXNrKGBGaW5pc2ggRnJvbnRlbmRgLCBgZG9tIG1hbmlwdWxhdGlvbiB3LyByZWFjdC9qc2AsIGB0b21vcnJvd2AsIGBNZWRpdW1gLCBmYWxzZSk7XG5sZXQgdGFzazQgPSBUYXNrKGBVbml0IFRlc3RpbmdgLCBgdGVzdCBzb21lIHRoaW5nc2AsIGBEb25lYCwgYExvd2AsIHRydWUpO1xuXG5wcm9qLnNldFRhc2tzKFt0YXNrMSwgdGFzazIsIHRhc2szLCB0YXNrNF0pO1xuXG5sZXQgc3VidGFzazEgPSBTdWJ0YXNrKCdDb21iaW5lIE9iamVjdCBDcmVhdGlvbiBGdW5jdGlvbnMnLCB0cnVlKTtcbmxldCBzdWJ0YXNrMiA9IFN1YnRhc2soJ0RlbGV0ZSBMaW5lIDMyJywgZmFsc2UpO1xuXG50YXNrMS5hZGRTdWJ0YXNrcyhbc3VidGFzazEsIHN1YnRhc2syXSk7XG5cbmNvbnNvbGUubG9nKHRhc2sxLmdldFN1YnRhc2tzKCkpO1xuY29uc29sZS5sb2cob2JqZWN0U3VtbWFyeSh0YXNrMS5nZXRTdWJ0YXNrcygpWzFdKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==