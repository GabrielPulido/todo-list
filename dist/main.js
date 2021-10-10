/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ID.js":
/*!*******************!*\
  !*** ./src/ID.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTaskContainerID": () => (/* binding */ getTaskContainerID),
/* harmony export */   "getProjectDisplayID": () => (/* binding */ getProjectDisplayID),
/* harmony export */   "getSidebarBtnID": () => (/* binding */ getSidebarBtnID),
/* harmony export */   "getAddTaskBtnID": () => (/* binding */ getAddTaskBtnID),
/* harmony export */   "getTaskBoxID": () => (/* binding */ getTaskBoxID),
/* harmony export */   "getTaskNameID": () => (/* binding */ getTaskNameID),
/* harmony export */   "getEditTaskBtnID": () => (/* binding */ getEditTaskBtnID),
/* harmony export */   "getDeleteTaskBtnID": () => (/* binding */ getDeleteTaskBtnID),
/* harmony export */   "getTaskDescriptionID": () => (/* binding */ getTaskDescriptionID),
/* harmony export */   "getTaskDeadlineID": () => (/* binding */ getTaskDeadlineID),
/* harmony export */   "getTaskPriorityID": () => (/* binding */ getTaskPriorityID),
/* harmony export */   "getTaskDoneID": () => (/* binding */ getTaskDoneID),
/* harmony export */   "getAddSubtaskBtnID": () => (/* binding */ getAddSubtaskBtnID),
/* harmony export */   "getSubtaskDoneID": () => (/* binding */ getSubtaskDoneID),
/* harmony export */   "getSubtaskNameID": () => (/* binding */ getSubtaskNameID),
/* harmony export */   "getDeleteSubtaskBtnID": () => (/* binding */ getDeleteSubtaskBtnID),
/* harmony export */   "getDeleteProjectBtnID": () => (/* binding */ getDeleteProjectBtnID),
/* harmony export */   "getSubtaskContainer": () => (/* binding */ getSubtaskContainer),
/* harmony export */   "getSubtaskID": () => (/* binding */ getSubtaskID),
/* harmony export */   "getProjectNameID": () => (/* binding */ getProjectNameID)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _subtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtask */ "./src/subtask.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");





/*
For all these functions, make sure you run a function on each one that does the following
1. Makes sure that the user enters what they're supposed to 
 - ex) if the parameters are (project, task, subtask), then make sure project is a valid project, task is a valid task, and subtask is a valid subtask
 2. Make sure that all the parameters correspond to each other. 
  - ex) if the parameters are project, task, subtask, make sure that the task they input is inside the project they input and the subtask they input is inside of that task.
*/


/*
//1st parameter = project, 2nd = task, 3rd = subtask
Ideally this function should return a generic id based on what's entered
Project -> [project name]
Project & Task -> [project name]-[task name]
Project, Task, and Subtask -> [project name]-[task name]-[subtask-name]
*/
let getGenericID = (project, ...args) => {
    let array = Array.from(args);

    let testResults = [];
    let x, y, z;

    switch (array.length) {
        case 0:
            x = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.objectTest)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)(), project);
            testResults.push(x);
            break;
        case 1:
            x = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.objectTest)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)(), project);
            y = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.objectTest)((0,_task__WEBPACK_IMPORTED_MODULE_1__.default)(), array[0]);
            testResults.push(x, y);
            break;
        case 2:
            x = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.objectTest)((0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)(), project);
            y = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.objectTest)((0,_task__WEBPACK_IMPORTED_MODULE_1__.default)(), array[0]);
            z = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.objectTest)((0,_subtask__WEBPACK_IMPORTED_MODULE_2__.default)(), array[1]);
            testResults.push(x, y, z);
            break;
        default:
            console.log(`You put in too many parameters`);
            return;
    }

    //Loops through the testResults[] array and checks if any tests failed
    for (let i = 0; i < testResults.length; i++) {
        if (!testResults[i]) {
            console.log(`One or more tests failed`);
            return;
        }
    }

    let id = '';
    let projectID = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.removeSpace)(project.getTitle());
    let taskID = '';
    let subtaskID = '';


    switch (array.length) {
        case 0:
            id = `${projectID}`;
            break;
        case 1:
            taskID = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.removeSpace)(array[0].getName());
            id = `${projectID}-${taskID}`;
            break;
        case 2:
            taskID = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.removeSpace)(array[0].getName());
            subtaskID = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.removeSpace)(array[1].getName());
            id = `${projectID}-${taskID}-${subtaskID}`;
            break;
    }

    return id;
}

let getProjectNameID = (project) => {
    let genericID = getGenericID(project);

    let id = `${genericID}-name`;
    return id;
}

let getTaskContainerID = (project) => {
    let genericID = getGenericID(project);

    let id = `${genericID}-task-container`;
    return id;
}

let getProjectDisplayID = (project) => {
    let genericID = getGenericID(project);

    let id = `${genericID}-display`;

    return id;
}

let getSidebarBtnID = (project) => {
    let genericID = getGenericID(project);
    let id = `${genericID}-sidebar-btn`;
    return id;
}

let getAddTaskBtnID = (project) => {
    let genericID = getGenericID(project);
    let id = `${genericID}-add-task-btn`;
    return id;
}

let getTaskBoxID = (project, task) => {
    let genericID = getGenericID(project, task);

    let id = `${genericID}`;
    return id;
}

let getTaskNameID = (project, task) => {
    let genericID = getGenericID(project, task);

    let id = `${genericID}-name`;
    return id;
}

let getEditTaskBtnID = (project, task) => {
    let genericID = getGenericID(project, task);

    let id = `${genericID}-edit-task-btn`
    return id;
}

let getDeleteTaskBtnID = (project, task) => {
    let genericID = getGenericID(project, task);

    let id = `${genericID}-delete-task-btn`
    return id;
}

let getTaskDescriptionID = (project, task) => {
    let genericID = getGenericID(project, task);

    let id = `${genericID}-description`;
    return id;
}

let getTaskDeadlineID = (project, task) => {
    let genericID = getGenericID(project, task);

    let id = `${genericID}-deadline`;
    return id;
}

let getTaskPriorityID = (project, task) => {
    let genericID = getGenericID(project, task);

    let id = `${genericID}-priority`;
    return id;
}

let getTaskDoneID = (project, task) => {
    let genericID = getGenericID(project, task);

    let id = `${genericID}-done`;
    return id;
}

let getAddSubtaskBtnID = (project, task) => {
    let genericID = getGenericID(project, task);

    let id = `${genericID}-add-subtask-btn`;
    return id;
}

let getSubtaskDoneID = (project, task, subtask) => {
    let genericID = getGenericID(project, task, subtask);

    let id = `${genericID}-done`;
    return id;
}

let getSubtaskNameID = (project, task, subtask) => {
    let genericID = getGenericID(project, task, subtask);

    let id = `${genericID}-name`;
    return id;
}

let getDeleteSubtaskBtnID = (project, task) => {
    let genericID = getGenericID(project, task);
    let id = `${genericID}-delete-subtask-btn`;
    return id;

}

let getDeleteProjectBtnID = (project) => {
    let genericID = getGenericID(project);
    let id = `${genericID}-delete-project-btn`;
    return id;
}

let getSubtaskContainer = (project, task) => {
    let genericID = getGenericID(project, task);
    let id = `${genericID}-subtask-container`;
    return id;
}

let getSubtaskID = (project, task, subtask) => {
    let genericID = getGenericID(project, task, subtask);
    let id = `${genericID}`;
    return id;
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promptWithCharLimit": () => (/* binding */ promptWithCharLimit)
/* harmony export */ });
let promptWithCharLimit = (message, limit) => {
    let output = '';
    do {
        output = prompt(message);
    } while (output.length > limit || !isNaN(output))
    return output;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numProjects": () => (/* binding */ numProjects),
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "setCurrentProject": () => (/* binding */ setCurrentProject),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");




//All of your projects are stored in an array
let allProjects = [];

//removes a specific item from an array and returns a new array without that item
let remove = (item) => {
    let index = allProjects.indexOf(item);
    if (index > -1) {
        allProjects.splice(index, 1);
    }
}

//Returns the total # of projects
let numProjects = () => {
    return allProjects.length;
}

let setCurrentProject = (project) => {
    currentProject = project;
}

//Open all projects in local storage
let openProjects = () => {

}

//Create Default Project & add it to list of projects
let defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)('Default Project');
allProjects.push(defaultProject);

//This is the project we're currently looking at on the page
let currentProject = defaultProject;


(0,_projectDOM__WEBPACK_IMPORTED_MODULE_2__.createProjectDisplay)(defaultProject);
(0,_projectDOM__WEBPACK_IMPORTED_MODULE_2__.createSidebarBtn)(defaultProject);


//DOM Stuff
const container = document.querySelector('#container');
const addProjectBtn = document.querySelector('#add-project-btn');

addProjectBtn.addEventListener('click', () => {

    let limit = 50
    let name = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.promptWithCharLimit)(`Project name (less than ${limit} characters) (can't be a number): `, limit);

    let newProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)(name);
    allProjects.push(newProject);

    (0,_projectDOM__WEBPACK_IMPORTED_MODULE_2__.createProjectDisplay)(newProject);
    (0,_projectDOM__WEBPACK_IMPORTED_MODULE_2__.createSidebarBtn)(newProject);
});



/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/projectDOM.js":
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectDisplay": () => (/* binding */ createProjectDisplay),
/* harmony export */   "createSidebarBtn": () => (/* binding */ createSidebarBtn)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _ID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ID */ "./src/ID.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _subtask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subtask */ "./src/subtask.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_localStorage__WEBPACK_IMPORTED_MODULE_6__);








/*
Note there's a bug where it messes up if you name the project something w/ a number at the beginning (ie 5Project)
*/

let container = document.querySelector('#container');
let sidebar = document.querySelector('#sidebar');

//Note this function is going to be long bc it creates unique buttons for all projects then makes event listeners for them
let createProjectDisplay = (project) => {

    //Create the html for project display
    let displayID = (0,_ID__WEBPACK_IMPORTED_MODULE_2__.getProjectDisplayID)(project)
    let projectSkeleton = `
        <div id = "${displayID}">
            <div class="add-task-div">
                <button id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getAddTaskBtnID)(project)}">Add Task +</button>
            </div>

            <div class="task-container" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskContainerID)(project)}">
            </div>

            <div class="delete-project-div">
                <button id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getDeleteProjectBtnID)(project)}">Delete Project</button>
            </div>
        </div>
        `
    container.insertAdjacentHTML('beforeend', projectSkeleton);

    //Once you create the project display, make sure its not visible right now
    let display = document.querySelector(`#${displayID}`);
    display.style.display = 'none';

    //Create Event Listener for Add Task Button
    let addTaskBtn = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getAddTaskBtnID)(project)}`);
    addTaskBtn.addEventListener('click', () => {
        let taskContainer = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskContainerID)(project)}`);

        //Note we're not validating these inputs for now, we're assuming the user will type a valid input
        let name = prompt('Name: ');
        let description = prompt('Description: ');
        let deadline = prompt('Deadline: ');
        let priority = prompt('Priority: ');
        let done = prompt('Done? (type yes or no): ');

        let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_4__.default)(name, description, deadline, priority, done);
        project.setTasks([newTask]);

        let taskBox = `
        <div class="task-box" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskBoxID)(project, newTask)}">
            <div class="task-content">
                <span class="task-title-and-delete-task-btn">
                    <h2 class="task-header" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskNameID)(project, newTask)}">${newTask.getName()}: </h2>
                    <button class="edit-task-btn" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getEditTaskBtnID)(project, newTask)}">Edit Task</button>
                    <button class="delete-task-btn" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getDeleteTaskBtnID)(project, newTask)}">Delete Task</button>
                </span>
                <div>
                    <h3 class="task-description-h3">Description:</h3>
                    <p class="task-description" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskDescriptionID)(project, newTask)}">${newTask.getDescription()}</p>
                </div>
                <div>
                    <h3 class="task-deadline-h3">Deadline:</h3>
                    <p class="task-deadline" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskDeadlineID)(project, newTask)}">${newTask.getDeadline()}</p>
                </div>
                <div>
                    <h3 class="task-priority-h3">Priority:</h3>
                    <p class="task-priority" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskPriorityID)(project, newTask)}">${newTask.getPriority()}</p>
                </div>
                    <label for="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskDoneID)(project, newTask)}" class="task-done">Done?</label>
                    <input type="checkbox" name="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskDoneID)(project, newTask)}" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskDoneID)(project, newTask)}">
                <div class="subtask-header-and-btn" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSubtaskContainer)(project, newTask)}">
                    <h3 class="subtask-header">Subtasks:</h3>
                    <button class="add-subtask-btn" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getAddSubtaskBtnID)(project, newTask)}">Add Subtask+</button>
                </div>

                        <!-- Subtask Goes Here -->

                <div class="delete-subtask-div">
                    <button id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getDeleteSubtaskBtnID)(project, newTask)}" class="delete-subtask-btn">Delete All Checked Subtasks</button>
                </div>
            </div>
        </div>
        `
        taskContainer.insertAdjacentHTML('beforeend', taskBox);

        //Delete Task Event Listener
        let deleteTaskBtn = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getDeleteTaskBtnID)(project, newTask)}`);
        deleteTaskBtn.addEventListener('click', () => {
            let taskBox = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getTaskBoxID)(project, newTask)}`);
            taskBox.remove();
            project.removeTasks([newTask]);
        });

        //Add Subtask Event Listener
        let addSubtaskBtn = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getAddSubtaskBtnID)(project, newTask)}`);
        addSubtaskBtn.addEventListener('click', () => {

            let name = prompt('Name: ');
            let done = prompt('Done?: ');

            let subtask = (0,_subtask__WEBPACK_IMPORTED_MODULE_5__.default)(name, done);
            newTask.addSubtasks([subtask]);

            let html = `
                <div class="subtask" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSubtaskID)(project, newTask, subtask)}">
                    <input type="checkbox" name="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSubtaskDoneID)(project, newTask, subtask)}" id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSubtaskDoneID)(project, newTask, subtask)}">
                    <label id="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSubtaskNameID)(project, newTask, subtask)}" for="${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSubtaskDoneID)(project, newTask, subtask)}">${subtask.getName()}</label>
                </div>
            `;
            let subtaskContainer = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSubtaskContainer)(project, newTask)}`);

            subtaskContainer.insertAdjacentHTML('afterend', html);
        });

        //Delete Subtask Listener
        let deleteSubtask = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getDeleteSubtaskBtnID)(project, newTask)}`);
        deleteSubtask.addEventListener('click', () => {
            let subtaskList = newTask.getSubtasks();

            let erase = [];

            for (let i = 0; i < subtaskList.length; i++) {
                let checkboxID = (0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSubtaskDoneID)(project, newTask, subtaskList[i]);
                let checkbox = document.querySelector(`#${checkboxID}`);
                if (checkbox.checked === true) {
                    erase.push(subtaskList[i]);
                    let subtaskDisplay = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSubtaskID)(project, newTask, subtaskList[i])}`);
                    subtaskDisplay.remove();
                }
            }
            newTask.removeSubtasks(erase);
        });

    });


    //Create Eventlistener for Delete Project Button
    let deleteProjectBtn = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getDeleteProjectBtnID)(project)}`);
    deleteProjectBtn.addEventListener('click', () => {
        let sidebarBtnID = (0,_ID__WEBPACK_IMPORTED_MODULE_2__.getSidebarBtnID)(project);
        let sidebarBtn = document.querySelector(`#${sidebarBtnID}`);
        sidebarBtn.remove();

        //Delete project from allProjects[] and set currentProject = null
        (0,_index__WEBPACK_IMPORTED_MODULE_3__.remove)(project);
        (0,_index__WEBPACK_IMPORTED_MODULE_3__.setCurrentProject)(null);
        display.remove();

    });


}

let createSidebarBtn = (project) => {
    let btn = document.createElement('button');
    btn.className = 'project';
    btn.textContent = project.getTitle();
    btn.id = `${(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeSpace)(project.getTitle())}-sidebar-btn`;

    const sidebar = document.querySelector('#sidebar');
    sidebar.appendChild(btn);

    btn.addEventListener('click', (e) => {
        //Change header to project title
        const header = document.querySelector('#project-title-header');
        header.textContent = project.getTitle();

        //right now, currentProject isn't the project we clicked on, it's the project that was displayed before we clicked the sidebar button. Take that project, get its id, and set its display attribute to 'none'
        if (_index__WEBPACK_IMPORTED_MODULE_3__.currentProject != null) {
            let oldProjectID = (0,_ID__WEBPACK_IMPORTED_MODULE_2__.getProjectDisplayID)(_index__WEBPACK_IMPORTED_MODULE_3__.currentProject);
            let oldProjectDisplay = document.querySelector(`#${oldProjectID}`);
            oldProjectDisplay.style.display = 'none'
        }

        //Now the project we clicked is the current project
        (0,_index__WEBPACK_IMPORTED_MODULE_3__.setCurrentProject)(project);

        //Get the display of the project that belongs to the button you clicked on and display it
        let projectDisplay = document.querySelector(`#${(0,_ID__WEBPACK_IMPORTED_MODULE_2__.getProjectDisplayID)(project)}`);
        projectDisplay.style.display = 'block';
    });
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



let Project = (title) => {

    let tasks = [];

    let getNumTasks = () => {
        return tasks.length;
    }

    let getTitle = () => {
        return title;
    }

    let getTasks = () => {
        return tasks;
    }

    let getTaskNames = () => {
        let names = [];
        for (let i = 0; i < tasks.length; i++) {
            names.push(tasks[i].getName());
        }
        return names;
    }

    let setTitle = (x) => {
        title = x;
    }

    //Takes an array of task objects & puts them in the project (tested & verified, it works)
    let setTasks = (arr) => {

        //makes sure user passes an array
        if (Array.isArray(arr) === false) {
            console.log('Error: Input is not an array. Please input a valid array of task objects');
            return;
        }

        //makes sure every element of the array is an object
        for (let i = 0; i < arr.length; i++) {
            if ((typeof arr[i]) !== 'object') {
                console.log(`${arr[i]} is not an object. Please input a valid array of task objects`);
                return;
            }
        };

        //makes sure every element is a task
        for (let i = 0; i < arr.length; i++) {
            if ((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.objectTest)((0,_task__WEBPACK_IMPORTED_MODULE_1__.default)(), arr[i]) === false) {
                console.log(`${arr[i]} is not a task object.  Please input a valid array of task objects`);
                return;
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
            if ((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.objectTest)((0,_task__WEBPACK_IMPORTED_MODULE_1__.default)(), arr[i]) === false) {
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
        getNumTasks,
        getTaskNames,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/subtask.js":
/*!************************!*\
  !*** ./src/subtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _subtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtask */ "./src/subtask.js");



/*Are able to create blank task objects & populate them using set methods
*/
let Task = (name, description, deadline, priority, complete) => {

    let subtasks = [];

    //Getters

    let getNumSubtasks = () => {
        return subtasks.length;
    }

    let getSubtasks = () => {
        return subtasks;
    }

    /*
        let removeSubtasks = (arr) => {
            for (let j = 0; j < arr.length; j++) {
                let index = subtasks.indexOf(arr[j]);
                if (index > -1) {
                    subtasks.splice(index, 1);
                }
            }
        }
    */

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

    return { getName, getSubtasks, getDescription, getDeadline, getPriority, setName, getCompletionStatus, setDescription, setDeadline, setPriority, setCompletionStatus, addSubtasks, removeSubtasks, getNumSubtasks }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectSummary": () => (/* binding */ objectSummary),
/* harmony export */   "removeSpace": () => (/* binding */ removeSpace),
/* harmony export */   "removeArrayItem": () => (/* binding */ removeArrayItem),
/* harmony export */   "objectTest": () => (/* binding */ objectTest),
/* harmony export */   "projectTaskSubtaskTests": () => (/* binding */ projectTaskSubtaskTests)
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

//removes a specific item from an array and returns a new array without that item
let removeArrayItem = (array, item) => {
    let index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

//Takes 2 parameters, the type of object we're checking for, and the one we want to test.
// ex) objectTest(Project(), defaultProject);
//  - this would check if defaultProject is a Project() object.
//Return true if the inputted object is of the same type as the desiredObject and false if it isn't
let objectTest = (desiredObject, obj) => {
    //checks if it's even an object
    if ((typeof obj) !== 'object') {
        return false;
    }

    //Put all of desiredObject's properties into an array
    let desiredObjProperties = [];
    for (const prop in desiredObject) {
        desiredObjProperties.push(prop);
    }

    //put all of the test object's properties in an array
    let objProperties = []
    for (const prop in obj) {
        objProperties.push(prop);
    }

    //loop through the desiredObject's properties and make sure the test object has all those properties
    for (let i = 0; i < desiredObjProperties.length; i++) {
        if (desiredObjProperties[i] !== objProperties[i]) {
            return false;
        }
    }
    return true;
}

let projectTaskSubtaskTests = (project, task, subtask) => {
    //Store the results of all tests in one array so if one fails, we know which one
    let allResults = [];

    let projectTestResult = objectTest(Project(), project);
    allResults.push(projectTestResult);

    let taskTestResult = objectTest(Task(), task);
    allResults.push(taskTestResult);

    let subtaskTestResult = objectTest(Subtask(), subtask);
    allResults.push(subtaskTestResult);

    for (let i = 0; i < allResults.length; i++) {
        if (allResults[i] === false) {
            return false;
        }
    }

    return true;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvSUQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdWJ0YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNQO0FBQ007QUFDQTtBQUMrQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixzREFBVSxDQUFDLGtEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGdC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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlDQUFpQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBpc1Rhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgU3VidGFzayBmcm9tIFwiLi9zdWJ0YXNrXCI7XG5pbXBvcnQgeyByZW1vdmVTcGFjZSwgcHJvamVjdFRhc2tTdWJ0YXNrVGVzdHMsIG9iamVjdFRlc3QgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbi8qXG5Gb3IgYWxsIHRoZXNlIGZ1bmN0aW9ucywgbWFrZSBzdXJlIHlvdSBydW4gYSBmdW5jdGlvbiBvbiBlYWNoIG9uZSB0aGF0IGRvZXMgdGhlIGZvbGxvd2luZ1xuMS4gTWFrZXMgc3VyZSB0aGF0IHRoZSB1c2VyIGVudGVycyB3aGF0IHRoZXkncmUgc3VwcG9zZWQgdG8gXG4gLSBleCkgaWYgdGhlIHBhcmFtZXRlcnMgYXJlIChwcm9qZWN0LCB0YXNrLCBzdWJ0YXNrKSwgdGhlbiBtYWtlIHN1cmUgcHJvamVjdCBpcyBhIHZhbGlkIHByb2plY3QsIHRhc2sgaXMgYSB2YWxpZCB0YXNrLCBhbmQgc3VidGFzayBpcyBhIHZhbGlkIHN1YnRhc2tcbiAyLiBNYWtlIHN1cmUgdGhhdCBhbGwgdGhlIHBhcmFtZXRlcnMgY29ycmVzcG9uZCB0byBlYWNoIG90aGVyLiBcbiAgLSBleCkgaWYgdGhlIHBhcmFtZXRlcnMgYXJlIHByb2plY3QsIHRhc2ssIHN1YnRhc2ssIG1ha2Ugc3VyZSB0aGF0IHRoZSB0YXNrIHRoZXkgaW5wdXQgaXMgaW5zaWRlIHRoZSBwcm9qZWN0IHRoZXkgaW5wdXQgYW5kIHRoZSBzdWJ0YXNrIHRoZXkgaW5wdXQgaXMgaW5zaWRlIG9mIHRoYXQgdGFzay5cbiovXG5cblxuLypcbi8vMXN0IHBhcmFtZXRlciA9IHByb2plY3QsIDJuZCA9IHRhc2ssIDNyZCA9IHN1YnRhc2tcbklkZWFsbHkgdGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgZ2VuZXJpYyBpZCBiYXNlZCBvbiB3aGF0J3MgZW50ZXJlZFxuUHJvamVjdCAtPiBbcHJvamVjdCBuYW1lXVxuUHJvamVjdCAmIFRhc2sgLT4gW3Byb2plY3QgbmFtZV0tW3Rhc2sgbmFtZV1cblByb2plY3QsIFRhc2ssIGFuZCBTdWJ0YXNrIC0+IFtwcm9qZWN0IG5hbWVdLVt0YXNrIG5hbWVdLVtzdWJ0YXNrLW5hbWVdXG4qL1xubGV0IGdldEdlbmVyaWNJRCA9IChwcm9qZWN0LCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IGFycmF5ID0gQXJyYXkuZnJvbShhcmdzKTtcblxuICAgIGxldCB0ZXN0UmVzdWx0cyA9IFtdO1xuICAgIGxldCB4LCB5LCB6O1xuXG4gICAgc3dpdGNoIChhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgeCA9IG9iamVjdFRlc3QoUHJvamVjdCgpLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIHRlc3RSZXN1bHRzLnB1c2goeCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgeCA9IG9iamVjdFRlc3QoUHJvamVjdCgpLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIHkgPSBvYmplY3RUZXN0KFRhc2soKSwgYXJyYXlbMF0pO1xuICAgICAgICAgICAgdGVzdFJlc3VsdHMucHVzaCh4LCB5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB4ID0gb2JqZWN0VGVzdChQcm9qZWN0KCksIHByb2plY3QpO1xuICAgICAgICAgICAgeSA9IG9iamVjdFRlc3QoVGFzaygpLCBhcnJheVswXSk7XG4gICAgICAgICAgICB6ID0gb2JqZWN0VGVzdChTdWJ0YXNrKCksIGFycmF5WzFdKTtcbiAgICAgICAgICAgIHRlc3RSZXN1bHRzLnB1c2goeCwgeSwgeik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgcHV0IGluIHRvbyBtYW55IHBhcmFtZXRlcnNgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL0xvb3BzIHRocm91Z2ggdGhlIHRlc3RSZXN1bHRzW10gYXJyYXkgYW5kIGNoZWNrcyBpZiBhbnkgdGVzdHMgZmFpbGVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0UmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRlc3RSZXN1bHRzW2ldKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgT25lIG9yIG1vcmUgdGVzdHMgZmFpbGVkYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaWQgPSAnJztcbiAgICBsZXQgcHJvamVjdElEID0gcmVtb3ZlU3BhY2UocHJvamVjdC5nZXRUaXRsZSgpKTtcbiAgICBsZXQgdGFza0lEID0gJyc7XG4gICAgbGV0IHN1YnRhc2tJRCA9ICcnO1xuXG5cbiAgICBzd2l0Y2ggKGFycmF5Lmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZCA9IGAke3Byb2plY3RJRH1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRhc2tJRCA9IHJlbW92ZVNwYWNlKGFycmF5WzBdLmdldE5hbWUoKSk7XG4gICAgICAgICAgICBpZCA9IGAke3Byb2plY3RJRH0tJHt0YXNrSUR9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0YXNrSUQgPSByZW1vdmVTcGFjZShhcnJheVswXS5nZXROYW1lKCkpO1xuICAgICAgICAgICAgc3VidGFza0lEID0gcmVtb3ZlU3BhY2UoYXJyYXlbMV0uZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgIGlkID0gYCR7cHJvamVjdElEfS0ke3Rhc2tJRH0tJHtzdWJ0YXNrSUR9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBpZDtcbn1cblxubGV0IGdldFByb2plY3ROYW1lSUQgPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCBnZW5lcmljSUQgPSBnZXRHZW5lcmljSUQocHJvamVjdCk7XG5cbiAgICBsZXQgaWQgPSBgJHtnZW5lcmljSUR9LW5hbWVgO1xuICAgIHJldHVybiBpZDtcbn1cblxubGV0IGdldFRhc2tDb250YWluZXJJRCA9IChwcm9qZWN0KSA9PiB7XG4gICAgbGV0IGdlbmVyaWNJRCA9IGdldEdlbmVyaWNJRChwcm9qZWN0KTtcblxuICAgIGxldCBpZCA9IGAke2dlbmVyaWNJRH0tdGFzay1jb250YWluZXJgO1xuICAgIHJldHVybiBpZDtcbn1cblxubGV0IGdldFByb2plY3REaXNwbGF5SUQgPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCBnZW5lcmljSUQgPSBnZXRHZW5lcmljSUQocHJvamVjdCk7XG5cbiAgICBsZXQgaWQgPSBgJHtnZW5lcmljSUR9LWRpc3BsYXlgO1xuXG4gICAgcmV0dXJuIGlkO1xufVxuXG5sZXQgZ2V0U2lkZWJhckJ0bklEID0gKHByb2plY3QpID0+IHtcbiAgICBsZXQgZ2VuZXJpY0lEID0gZ2V0R2VuZXJpY0lEKHByb2plY3QpO1xuICAgIGxldCBpZCA9IGAke2dlbmVyaWNJRH0tc2lkZWJhci1idG5gO1xuICAgIHJldHVybiBpZDtcbn1cblxubGV0IGdldEFkZFRhc2tCdG5JRCA9IChwcm9qZWN0KSA9PiB7XG4gICAgbGV0IGdlbmVyaWNJRCA9IGdldEdlbmVyaWNJRChwcm9qZWN0KTtcbiAgICBsZXQgaWQgPSBgJHtnZW5lcmljSUR9LWFkZC10YXNrLWJ0bmA7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5sZXQgZ2V0VGFza0JveElEID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICBsZXQgZ2VuZXJpY0lEID0gZ2V0R2VuZXJpY0lEKHByb2plY3QsIHRhc2spO1xuXG4gICAgbGV0IGlkID0gYCR7Z2VuZXJpY0lEfWA7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5sZXQgZ2V0VGFza05hbWVJRCA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgbGV0IGdlbmVyaWNJRCA9IGdldEdlbmVyaWNJRChwcm9qZWN0LCB0YXNrKTtcblxuICAgIGxldCBpZCA9IGAke2dlbmVyaWNJRH0tbmFtZWA7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5sZXQgZ2V0RWRpdFRhc2tCdG5JRCA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgbGV0IGdlbmVyaWNJRCA9IGdldEdlbmVyaWNJRChwcm9qZWN0LCB0YXNrKTtcblxuICAgIGxldCBpZCA9IGAke2dlbmVyaWNJRH0tZWRpdC10YXNrLWJ0bmBcbiAgICByZXR1cm4gaWQ7XG59XG5cbmxldCBnZXREZWxldGVUYXNrQnRuSUQgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgIGxldCBnZW5lcmljSUQgPSBnZXRHZW5lcmljSUQocHJvamVjdCwgdGFzayk7XG5cbiAgICBsZXQgaWQgPSBgJHtnZW5lcmljSUR9LWRlbGV0ZS10YXNrLWJ0bmBcbiAgICByZXR1cm4gaWQ7XG59XG5cbmxldCBnZXRUYXNrRGVzY3JpcHRpb25JRCA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgbGV0IGdlbmVyaWNJRCA9IGdldEdlbmVyaWNJRChwcm9qZWN0LCB0YXNrKTtcblxuICAgIGxldCBpZCA9IGAke2dlbmVyaWNJRH0tZGVzY3JpcHRpb25gO1xuICAgIHJldHVybiBpZDtcbn1cblxubGV0IGdldFRhc2tEZWFkbGluZUlEID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICBsZXQgZ2VuZXJpY0lEID0gZ2V0R2VuZXJpY0lEKHByb2plY3QsIHRhc2spO1xuXG4gICAgbGV0IGlkID0gYCR7Z2VuZXJpY0lEfS1kZWFkbGluZWA7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5sZXQgZ2V0VGFza1ByaW9yaXR5SUQgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgIGxldCBnZW5lcmljSUQgPSBnZXRHZW5lcmljSUQocHJvamVjdCwgdGFzayk7XG5cbiAgICBsZXQgaWQgPSBgJHtnZW5lcmljSUR9LXByaW9yaXR5YDtcbiAgICByZXR1cm4gaWQ7XG59XG5cbmxldCBnZXRUYXNrRG9uZUlEID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICBsZXQgZ2VuZXJpY0lEID0gZ2V0R2VuZXJpY0lEKHByb2plY3QsIHRhc2spO1xuXG4gICAgbGV0IGlkID0gYCR7Z2VuZXJpY0lEfS1kb25lYDtcbiAgICByZXR1cm4gaWQ7XG59XG5cbmxldCBnZXRBZGRTdWJ0YXNrQnRuSUQgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgIGxldCBnZW5lcmljSUQgPSBnZXRHZW5lcmljSUQocHJvamVjdCwgdGFzayk7XG5cbiAgICBsZXQgaWQgPSBgJHtnZW5lcmljSUR9LWFkZC1zdWJ0YXNrLWJ0bmA7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5sZXQgZ2V0U3VidGFza0RvbmVJRCA9IChwcm9qZWN0LCB0YXNrLCBzdWJ0YXNrKSA9PiB7XG4gICAgbGV0IGdlbmVyaWNJRCA9IGdldEdlbmVyaWNJRChwcm9qZWN0LCB0YXNrLCBzdWJ0YXNrKTtcblxuICAgIGxldCBpZCA9IGAke2dlbmVyaWNJRH0tZG9uZWA7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5sZXQgZ2V0U3VidGFza05hbWVJRCA9IChwcm9qZWN0LCB0YXNrLCBzdWJ0YXNrKSA9PiB7XG4gICAgbGV0IGdlbmVyaWNJRCA9IGdldEdlbmVyaWNJRChwcm9qZWN0LCB0YXNrLCBzdWJ0YXNrKTtcblxuICAgIGxldCBpZCA9IGAke2dlbmVyaWNJRH0tbmFtZWA7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5sZXQgZ2V0RGVsZXRlU3VidGFza0J0bklEID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICBsZXQgZ2VuZXJpY0lEID0gZ2V0R2VuZXJpY0lEKHByb2plY3QsIHRhc2spO1xuICAgIGxldCBpZCA9IGAke2dlbmVyaWNJRH0tZGVsZXRlLXN1YnRhc2stYnRuYDtcbiAgICByZXR1cm4gaWQ7XG5cbn1cblxubGV0IGdldERlbGV0ZVByb2plY3RCdG5JRCA9IChwcm9qZWN0KSA9PiB7XG4gICAgbGV0IGdlbmVyaWNJRCA9IGdldEdlbmVyaWNJRChwcm9qZWN0KTtcbiAgICBsZXQgaWQgPSBgJHtnZW5lcmljSUR9LWRlbGV0ZS1wcm9qZWN0LWJ0bmA7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5sZXQgZ2V0U3VidGFza0NvbnRhaW5lciA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgbGV0IGdlbmVyaWNJRCA9IGdldEdlbmVyaWNJRChwcm9qZWN0LCB0YXNrKTtcbiAgICBsZXQgaWQgPSBgJHtnZW5lcmljSUR9LXN1YnRhc2stY29udGFpbmVyYDtcbiAgICByZXR1cm4gaWQ7XG59XG5cbmxldCBnZXRTdWJ0YXNrSUQgPSAocHJvamVjdCwgdGFzaywgc3VidGFzaykgPT4ge1xuICAgIGxldCBnZW5lcmljSUQgPSBnZXRHZW5lcmljSUQocHJvamVjdCwgdGFzaywgc3VidGFzayk7XG4gICAgbGV0IGlkID0gYCR7Z2VuZXJpY0lEfWA7XG4gICAgcmV0dXJuIGlkO1xufVxuXG5leHBvcnQgeyBnZXRUYXNrQ29udGFpbmVySUQsIGdldFByb2plY3REaXNwbGF5SUQsIGdldFNpZGViYXJCdG5JRCwgZ2V0QWRkVGFza0J0bklELCBnZXRUYXNrQm94SUQsIGdldFRhc2tOYW1lSUQsIGdldEVkaXRUYXNrQnRuSUQsIGdldERlbGV0ZVRhc2tCdG5JRCwgZ2V0VGFza0Rlc2NyaXB0aW9uSUQsIGdldFRhc2tEZWFkbGluZUlELCBnZXRUYXNrUHJpb3JpdHlJRCwgZ2V0VGFza0RvbmVJRCwgZ2V0QWRkU3VidGFza0J0bklELCBnZXRTdWJ0YXNrRG9uZUlELCBnZXRTdWJ0YXNrTmFtZUlELCBnZXREZWxldGVTdWJ0YXNrQnRuSUQsIGdldERlbGV0ZVByb2plY3RCdG5JRCwgZ2V0U3VidGFza0NvbnRhaW5lciwgZ2V0U3VidGFza0lELCBnZXRQcm9qZWN0TmFtZUlEIH0iLCJsZXQgcHJvbXB0V2l0aENoYXJMaW1pdCA9IChtZXNzYWdlLCBsaW1pdCkgPT4ge1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBkbyB7XG4gICAgICAgIG91dHB1dCA9IHByb21wdChtZXNzYWdlKTtcbiAgICB9IHdoaWxlIChvdXRwdXQubGVuZ3RoID4gbGltaXQgfHwgIWlzTmFOKG91dHB1dCkpXG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IHsgcHJvbXB0V2l0aENoYXJMaW1pdCB9IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHByb21wdFdpdGhDaGFyTGltaXQgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGNyZWF0ZVNpZGViYXJCdG4sIGNyZWF0ZVByb2plY3REaXNwbGF5IH0gZnJvbSBcIi4vcHJvamVjdERPTVwiO1xuXG4vL0FsbCBvZiB5b3VyIHByb2plY3RzIGFyZSBzdG9yZWQgaW4gYW4gYXJyYXlcbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG4vL3JlbW92ZXMgYSBzcGVjaWZpYyBpdGVtIGZyb20gYW4gYXJyYXkgYW5kIHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aG91dCB0aGF0IGl0ZW1cbmxldCByZW1vdmUgPSAoaXRlbSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGFsbFByb2plY3RzLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbi8vUmV0dXJucyB0aGUgdG90YWwgIyBvZiBwcm9qZWN0c1xubGV0IG51bVByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBhbGxQcm9qZWN0cy5sZW5ndGg7XG59XG5cbmxldCBzZXRDdXJyZW50UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xufVxuXG4vL09wZW4gYWxsIHByb2plY3RzIGluIGxvY2FsIHN0b3JhZ2VcbmxldCBvcGVuUHJvamVjdHMgPSAoKSA9PiB7XG5cbn1cblxuLy9DcmVhdGUgRGVmYXVsdCBQcm9qZWN0ICYgYWRkIGl0IHRvIGxpc3Qgb2YgcHJvamVjdHNcbmxldCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xuYWxsUHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbi8vVGhpcyBpcyB0aGUgcHJvamVjdCB3ZSdyZSBjdXJyZW50bHkgbG9va2luZyBhdCBvbiB0aGUgcGFnZVxubGV0IGN1cnJlbnRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3Q7XG5cblxuY3JlYXRlUHJvamVjdERpc3BsYXkoZGVmYXVsdFByb2plY3QpO1xuY3JlYXRlU2lkZWJhckJ0bihkZWZhdWx0UHJvamVjdCk7XG5cblxuLy9ET00gU3R1ZmZcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnRuJyk7XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBsZXQgbGltaXQgPSA1MFxuICAgIGxldCBuYW1lID0gcHJvbXB0V2l0aENoYXJMaW1pdChgUHJvamVjdCBuYW1lIChsZXNzIHRoYW4gJHtsaW1pdH0gY2hhcmFjdGVycykgKGNhbid0IGJlIGEgbnVtYmVyKTogYCwgbGltaXQpO1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuICAgIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgICBjcmVhdGVQcm9qZWN0RGlzcGxheShuZXdQcm9qZWN0KTtcbiAgICBjcmVhdGVTaWRlYmFyQnRuKG5ld1Byb2plY3QpO1xufSk7XG5cbmV4cG9ydCB7IG51bVByb2plY3RzLCBhbGxQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QsIGN1cnJlbnRQcm9qZWN0LCByZW1vdmUgfSIsImltcG9ydCB7IHJlbW92ZVNwYWNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZ2V0VGFza0NvbnRhaW5lcklELCBnZXRQcm9qZWN0RGlzcGxheUlELCBnZXRTaWRlYmFyQnRuSUQsIGdldEFkZFRhc2tCdG5JRCwgZ2V0VGFza0JveElELCBnZXRUYXNrTmFtZUlELCBnZXRFZGl0VGFza0J0bklELCBnZXREZWxldGVUYXNrQnRuSUQsIGdldFRhc2tEZXNjcmlwdGlvbklELCBnZXRUYXNrRGVhZGxpbmVJRCwgZ2V0VGFza1ByaW9yaXR5SUQsIGdldFRhc2tEb25lSUQsIGdldEFkZFN1YnRhc2tCdG5JRCwgZ2V0U3VidGFza0RvbmVJRCwgZ2V0U3VidGFza05hbWVJRCwgZ2V0RGVsZXRlU3VidGFza0J0bklELCBnZXREZWxldGVQcm9qZWN0QnRuSUQsIGdldFN1YnRhc2tDb250YWluZXIsIGdldFN1YnRhc2tJRCB9IGZyb20gXCIuL0lEXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdCwgY3VycmVudFByb2plY3QsIHJlbW92ZSwgYWxsUHJvamVjdHMsIG51bVByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBTdWJ0YXNrIGZyb20gXCIuL3N1YnRhc2tcIlxuaW1wb3J0IHsgc3RvcmVUYXNrIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbi8qXG5Ob3RlIHRoZXJlJ3MgYSBidWcgd2hlcmUgaXQgbWVzc2VzIHVwIGlmIHlvdSBuYW1lIHRoZSBwcm9qZWN0IHNvbWV0aGluZyB3LyBhIG51bWJlciBhdCB0aGUgYmVnaW5uaW5nIChpZSA1UHJvamVjdClcbiovXG5cbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5sZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG5cbi8vTm90ZSB0aGlzIGZ1bmN0aW9uIGlzIGdvaW5nIHRvIGJlIGxvbmcgYmMgaXQgY3JlYXRlcyB1bmlxdWUgYnV0dG9ucyBmb3IgYWxsIHByb2plY3RzIHRoZW4gbWFrZXMgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGVtXG5sZXQgY3JlYXRlUHJvamVjdERpc3BsYXkgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgLy9DcmVhdGUgdGhlIGh0bWwgZm9yIHByb2plY3QgZGlzcGxheVxuICAgIGxldCBkaXNwbGF5SUQgPSBnZXRQcm9qZWN0RGlzcGxheUlEKHByb2plY3QpXG4gICAgbGV0IHByb2plY3RTa2VsZXRvbiA9IGBcbiAgICAgICAgPGRpdiBpZCA9IFwiJHtkaXNwbGF5SUR9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stZGl2XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7Z2V0QWRkVGFza0J0bklEKHByb2plY3QpfVwiPkFkZCBUYXNrICs8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jb250YWluZXJcIiBpZD1cIiR7Z2V0VGFza0NvbnRhaW5lcklEKHByb2plY3QpfVwiPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUtcHJvamVjdC1kaXZcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtnZXREZWxldGVQcm9qZWN0QnRuSUQocHJvamVjdCl9XCI+RGVsZXRlIFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHByb2plY3RTa2VsZXRvbik7XG5cbiAgICAvL09uY2UgeW91IGNyZWF0ZSB0aGUgcHJvamVjdCBkaXNwbGF5LCBtYWtlIHN1cmUgaXRzIG5vdCB2aXNpYmxlIHJpZ2h0IG5vd1xuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGlzcGxheUlEfWApO1xuICAgIGRpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIC8vQ3JlYXRlIEV2ZW50IExpc3RlbmVyIGZvciBBZGQgVGFzayBCdXR0b25cbiAgICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dldEFkZFRhc2tCdG5JRChwcm9qZWN0KX1gKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dldFRhc2tDb250YWluZXJJRChwcm9qZWN0KX1gKTtcblxuICAgICAgICAvL05vdGUgd2UncmUgbm90IHZhbGlkYXRpbmcgdGhlc2UgaW5wdXRzIGZvciBub3csIHdlJ3JlIGFzc3VtaW5nIHRoZSB1c2VyIHdpbGwgdHlwZSBhIHZhbGlkIGlucHV0XG4gICAgICAgIGxldCBuYW1lID0gcHJvbXB0KCdOYW1lOiAnKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gcHJvbXB0KCdEZXNjcmlwdGlvbjogJyk7XG4gICAgICAgIGxldCBkZWFkbGluZSA9IHByb21wdCgnRGVhZGxpbmU6ICcpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoJ1ByaW9yaXR5OiAnKTtcbiAgICAgICAgbGV0IGRvbmUgPSBwcm9tcHQoJ0RvbmU/ICh0eXBlIHllcyBvciBubyk6ICcpO1xuXG4gICAgICAgIGxldCBuZXdUYXNrID0gVGFzayhuYW1lLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCBkb25lKTtcbiAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhbbmV3VGFza10pO1xuXG4gICAgICAgIGxldCB0YXNrQm94ID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3hcIiBpZD1cIiR7Z2V0VGFza0JveElEKHByb2plY3QsIG5ld1Rhc2spfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10aXRsZS1hbmQtZGVsZXRlLXRhc2stYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRhc2staGVhZGVyXCIgaWQ9XCIke2dldFRhc2tOYW1lSUQocHJvamVjdCwgbmV3VGFzayl9XCI+JHtuZXdUYXNrLmdldE5hbWUoKX06IDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRhc2stYnRuXCIgaWQ9XCIke2dldEVkaXRUYXNrQnRuSUQocHJvamVjdCwgbmV3VGFzayl9XCI+RWRpdCBUYXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtdGFzay1idG5cIiBpZD1cIiR7Z2V0RGVsZXRlVGFza0J0bklEKHByb2plY3QsIG5ld1Rhc2spfVwiPkRlbGV0ZSBUYXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24taDNcIj5EZXNjcmlwdGlvbjo8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIiBpZD1cIiR7Z2V0VGFza0Rlc2NyaXB0aW9uSUQocHJvamVjdCwgbmV3VGFzayl9XCI+JHtuZXdUYXNrLmdldERlc2NyaXB0aW9uKCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRhc2stZGVhZGxpbmUtaDNcIj5EZWFkbGluZTo8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stZGVhZGxpbmVcIiBpZD1cIiR7Z2V0VGFza0RlYWRsaW5lSUQocHJvamVjdCwgbmV3VGFzayl9XCI+JHtuZXdUYXNrLmdldERlYWRsaW5lKCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRhc2stcHJpb3JpdHktaDNcIj5Qcmlvcml0eTo8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stcHJpb3JpdHlcIiBpZD1cIiR7Z2V0VGFza1ByaW9yaXR5SUQocHJvamVjdCwgbmV3VGFzayl9XCI+JHtuZXdUYXNrLmdldFByaW9yaXR5KCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiJHtnZXRUYXNrRG9uZUlEKHByb2plY3QsIG5ld1Rhc2spfVwiIGNsYXNzPVwidGFzay1kb25lXCI+RG9uZT88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIiR7Z2V0VGFza0RvbmVJRChwcm9qZWN0LCBuZXdUYXNrKX1cIiBpZD1cIiR7Z2V0VGFza0RvbmVJRChwcm9qZWN0LCBuZXdUYXNrKX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VidGFzay1oZWFkZXItYW5kLWJ0blwiIGlkPVwiJHtnZXRTdWJ0YXNrQ29udGFpbmVyKHByb2plY3QsIG5ld1Rhc2spfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJzdWJ0YXNrLWhlYWRlclwiPlN1YnRhc2tzOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtc3VidGFzay1idG5cIiBpZD1cIiR7Z2V0QWRkU3VidGFza0J0bklEKHByb2plY3QsIG5ld1Rhc2spfVwiPkFkZCBTdWJ0YXNrKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFN1YnRhc2sgR29lcyBIZXJlIC0tPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZS1zdWJ0YXNrLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtnZXREZWxldGVTdWJ0YXNrQnRuSUQocHJvamVjdCwgbmV3VGFzayl9XCIgY2xhc3M9XCJkZWxldGUtc3VidGFzay1idG5cIj5EZWxldGUgQWxsIENoZWNrZWQgU3VidGFza3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICB0YXNrQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGFza0JveCk7XG5cbiAgICAgICAgLy9EZWxldGUgVGFzayBFdmVudCBMaXN0ZW5lclxuICAgICAgICBsZXQgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dldERlbGV0ZVRhc2tCdG5JRChwcm9qZWN0LCBuZXdUYXNrKX1gKTtcbiAgICAgICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z2V0VGFza0JveElEKHByb2plY3QsIG5ld1Rhc2spfWApO1xuICAgICAgICAgICAgdGFza0JveC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVGFza3MoW25ld1Rhc2tdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9BZGQgU3VidGFzayBFdmVudCBMaXN0ZW5lclxuICAgICAgICBsZXQgYWRkU3VidGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dldEFkZFN1YnRhc2tCdG5JRChwcm9qZWN0LCBuZXdUYXNrKX1gKTtcbiAgICAgICAgYWRkU3VidGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgbGV0IG5hbWUgPSBwcm9tcHQoJ05hbWU6ICcpO1xuICAgICAgICAgICAgbGV0IGRvbmUgPSBwcm9tcHQoJ0RvbmU/OiAnKTtcblxuICAgICAgICAgICAgbGV0IHN1YnRhc2sgPSBTdWJ0YXNrKG5hbWUsIGRvbmUpO1xuICAgICAgICAgICAgbmV3VGFzay5hZGRTdWJ0YXNrcyhbc3VidGFza10pO1xuXG4gICAgICAgICAgICBsZXQgaHRtbCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VidGFza1wiIGlkPVwiJHtnZXRTdWJ0YXNrSUQocHJvamVjdCwgbmV3VGFzaywgc3VidGFzayl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiJHtnZXRTdWJ0YXNrRG9uZUlEKHByb2plY3QsIG5ld1Rhc2ssIHN1YnRhc2spfVwiIGlkPVwiJHtnZXRTdWJ0YXNrRG9uZUlEKHByb2plY3QsIG5ld1Rhc2ssIHN1YnRhc2spfVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCIke2dldFN1YnRhc2tOYW1lSUQocHJvamVjdCwgbmV3VGFzaywgc3VidGFzayl9XCIgZm9yPVwiJHtnZXRTdWJ0YXNrRG9uZUlEKHByb2plY3QsIG5ld1Rhc2ssIHN1YnRhc2spfVwiPiR7c3VidGFzay5nZXROYW1lKCl9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBsZXQgc3VidGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dldFN1YnRhc2tDb250YWluZXIocHJvamVjdCwgbmV3VGFzayl9YCk7XG5cbiAgICAgICAgICAgIHN1YnRhc2tDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0RlbGV0ZSBTdWJ0YXNrIExpc3RlbmVyXG4gICAgICAgIGxldCBkZWxldGVTdWJ0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z2V0RGVsZXRlU3VidGFza0J0bklEKHByb2plY3QsIG5ld1Rhc2spfWApO1xuICAgICAgICBkZWxldGVTdWJ0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHN1YnRhc2tMaXN0ID0gbmV3VGFzay5nZXRTdWJ0YXNrcygpO1xuXG4gICAgICAgICAgICBsZXQgZXJhc2UgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJ0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveElEID0gZ2V0U3VidGFza0RvbmVJRChwcm9qZWN0LCBuZXdUYXNrLCBzdWJ0YXNrTGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2hlY2tib3hJRH1gKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBlcmFzZS5wdXNoKHN1YnRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1YnRhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z2V0U3VidGFza0lEKHByb2plY3QsIG5ld1Rhc2ssIHN1YnRhc2tMaXN0W2ldKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc3VidGFza0Rpc3BsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VGFzay5yZW1vdmVTdWJ0YXNrcyhlcmFzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxuICAgIC8vQ3JlYXRlIEV2ZW50bGlzdGVuZXIgZm9yIERlbGV0ZSBQcm9qZWN0IEJ1dHRvblxuICAgIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z2V0RGVsZXRlUHJvamVjdEJ0bklEKHByb2plY3QpfWApO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBzaWRlYmFyQnRuSUQgPSBnZXRTaWRlYmFyQnRuSUQocHJvamVjdCk7XG4gICAgICAgIGxldCBzaWRlYmFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2lkZWJhckJ0bklEfWApO1xuICAgICAgICBzaWRlYmFyQnRuLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vRGVsZXRlIHByb2plY3QgZnJvbSBhbGxQcm9qZWN0c1tdIGFuZCBzZXQgY3VycmVudFByb2plY3QgPSBudWxsXG4gICAgICAgIHJlbW92ZShwcm9qZWN0KTtcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QobnVsbCk7XG4gICAgICAgIGRpc3BsYXkucmVtb3ZlKCk7XG5cbiAgICB9KTtcblxuXG59XG5cbmxldCBjcmVhdGVTaWRlYmFyQnRuID0gKHByb2plY3QpID0+IHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgICBidG4udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgYnRuLmlkID0gYCR7cmVtb3ZlU3BhY2UocHJvamVjdC5nZXRUaXRsZSgpKX0tc2lkZWJhci1idG5gO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy9DaGFuZ2UgaGVhZGVyIHRvIHByb2plY3QgdGl0bGVcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcblxuICAgICAgICAvL3JpZ2h0IG5vdywgY3VycmVudFByb2plY3QgaXNuJ3QgdGhlIHByb2plY3Qgd2UgY2xpY2tlZCBvbiwgaXQncyB0aGUgcHJvamVjdCB0aGF0IHdhcyBkaXNwbGF5ZWQgYmVmb3JlIHdlIGNsaWNrZWQgdGhlIHNpZGViYXIgYnV0dG9uLiBUYWtlIHRoYXQgcHJvamVjdCwgZ2V0IGl0cyBpZCwgYW5kIHNldCBpdHMgZGlzcGxheSBhdHRyaWJ1dGUgdG8gJ25vbmUnXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgb2xkUHJvamVjdElEID0gZ2V0UHJvamVjdERpc3BsYXlJRChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBsZXQgb2xkUHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtvbGRQcm9qZWN0SUR9YCk7XG4gICAgICAgICAgICBvbGRQcm9qZWN0RGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIH1cblxuICAgICAgICAvL05vdyB0aGUgcHJvamVjdCB3ZSBjbGlja2VkIGlzIHRoZSBjdXJyZW50IHByb2plY3RcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgLy9HZXQgdGhlIGRpc3BsYXkgb2YgdGhlIHByb2plY3QgdGhhdCBiZWxvbmdzIHRvIHRoZSBidXR0b24geW91IGNsaWNrZWQgb24gYW5kIGRpc3BsYXkgaXRcbiAgICAgICAgbGV0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z2V0UHJvamVjdERpc3BsYXlJRChwcm9qZWN0KX1gKTtcbiAgICAgICAgcHJvamVjdERpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3REaXNwbGF5LCBjcmVhdGVTaWRlYmFyQnRuIH07IiwiaW1wb3J0IHsgb2JqZWN0VGVzdCB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5sZXQgUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuXG4gICAgbGV0IHRhc2tzID0gW107XG5cbiAgICBsZXQgZ2V0TnVtVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgbGV0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgbGV0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG4gICAgbGV0IGdldFRhc2tOYW1lcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5hbWVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2godGFza3NbaV0uZ2V0TmFtZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZXM7XG4gICAgfVxuXG4gICAgbGV0IHNldFRpdGxlID0gKHgpID0+IHtcbiAgICAgICAgdGl0bGUgPSB4O1xuICAgIH1cblxuICAgIC8vVGFrZXMgYW4gYXJyYXkgb2YgdGFzayBvYmplY3RzICYgcHV0cyB0aGVtIGluIHRoZSBwcm9qZWN0ICh0ZXN0ZWQgJiB2ZXJpZmllZCwgaXQgd29ya3MpXG4gICAgbGV0IHNldFRhc2tzID0gKGFycikgPT4ge1xuXG4gICAgICAgIC8vbWFrZXMgc3VyZSB1c2VyIHBhc3NlcyBhbiBhcnJheVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBJbnB1dCBpcyBub3QgYW4gYXJyYXkuIFBsZWFzZSBpbnB1dCBhIHZhbGlkIGFycmF5IG9mIHRhc2sgb2JqZWN0cycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9tYWtlcyBzdXJlIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGFycmF5IGlzIGFuIG9iamVjdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YgYXJyW2ldKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHthcnJbaV19IGlzIG5vdCBhbiBvYmplY3QuIFBsZWFzZSBpbnB1dCBhIHZhbGlkIGFycmF5IG9mIHRhc2sgb2JqZWN0c2ApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL21ha2VzIHN1cmUgZXZlcnkgZWxlbWVudCBpcyBhIHRhc2tcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvYmplY3RUZXN0KFRhc2soKSwgYXJyW2ldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHthcnJbaV19IGlzIG5vdCBhIHRhc2sgb2JqZWN0LiAgUGxlYXNlIGlucHV0IGEgdmFsaWQgYXJyYXkgb2YgdGFzayBvYmplY3RzYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vUHVzaGVzIGVhY2ggdGFzayB0byB0aGUgdGFza3MgYXJyYXkuIEluIG90aGVyIHdvcmRzIHdlIGFkZCBhbGwgdGhlIHRhc2tzIHRvIHRoZSBwcm9qZWN0XG4gICAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgdGFza3MucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9UYWtlcyBhbiBhcnJheSBvZiB0YXNrIG9iamVjdHMgdG8gYmUgZGVsZXRlZFxuICAgIGxldCByZW1vdmVUYXNrcyA9IChhcnIpID0+IHtcbiAgICAgICAgLy9tYWtlcyBzdXJlIHVzZXIgcGFzc2VzIGFuIGFycmF5XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0Vycm9yOiBJbnB1dCBpcyBub3QgYW4gYXJyYXkuIFBsZWFzZSBpbnB1dCBhIHZhbGlkIGFycmF5IG9mIHRhc2sgb2JqZWN0cyc7XG4gICAgICAgIH1cblxuICAgICAgICAvL21ha2VzIHN1cmUgZXZlcnkgZWxlbWVudCBvZiB0aGUgYXJyYXkgaXMgYW4gb2JqZWN0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBhcnJbaV0pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHthcnJbaV19IGlzIG5vdCBhbiBvYmplY3QuIFBsZWFzZSBpbnB1dCBhIHZhbGlkIGFycmF5IG9mIHRhc2sgb2JqZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9tYWtlcyBzdXJlIGV2ZXJ5IGVsZW1lbnQgaXMgYSB0YXNrXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0VGVzdChUYXNrKCksIGFycltpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2FycltpXX0gaXMgbm90IGEgdGFzayBvYmplY3QuICBQbGVhc2UgaW5wdXQgYSB2YWxpZCBhcnJheSBvZiB0YXNrIG9iamVjdHNgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vRm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgb2YgdGFza3MgdG8gZGVsZXRlLCBsb29wIHRocm91Z2ggYWxsIHRoZSB0YXNrcyBpbiB0aGUgcHJvamVjdCBhbmQgaWYgdGhlIHRhc2sgaW4gdGhlIGFycmF5IG9mIHRhc2tzIHRvIGJlIGRlbGV0ZWQgYW5kIHRoZSB0YXNrIGluIHRoZSB0YXNrcyBhcnJheSBhcmUgdGhlIHNhbWUsIHRoZW4gZGVsZXRlIGl0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycltpXSA9PT0gdGFza3Nbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3Muc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgZ2V0VGFza3MsXG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBzZXRUYXNrcyxcbiAgICAgICAgcmVtb3ZlVGFza3MsXG4gICAgICAgIGdldE51bVRhc2tzLFxuICAgICAgICBnZXRUYXNrTmFtZXMsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwibGV0IFN1YnRhc2sgPSAobmFtZSwgZG9uZSkgPT4ge1xuICAgIGxldCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZVxuICAgIH1cbiAgICBsZXQgc2V0TmFtZSA9ICh4KSA9PiB7XG4gICAgICAgIG5hbWUgPSB4O1xuICAgIH1cbiAgICBsZXQgZ2V0RG9uZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvbmU7XG4gICAgfVxuICAgIGxldCBzZXREb25lID0gKHgpID0+IHtcbiAgICAgICAgZG9uZSA9IHg7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIHNldE5hbWUsXG4gICAgICAgIGdldERvbmUsXG4gICAgICAgIHNldERvbmUsXG4gICAgfVxufVxuXG4vL1Rha2VzIGluIGFuIG9iamVjdCBhbmQgY2hlY2tzIGlmIGl0J3MgYSBzdWJ0YXNrIG9iamVjdFxubGV0IGlzU3VidGFzayA9ICh4KSA9PiB7XG4gICAgLy9DaGVjayBpZiBpdCdzIGFuIG9iamVjdFxuICAgIGlmICgodHlwZW9mIHgpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gJ0Vycm9yLCB0aGlzIGlzIG5vdCBhbiBvYmplY3QnO1xuICAgIH1cblxuICAgIGxldCBzdWJ0YXNrT2JqID0gU3VidGFzaygpO1xuICAgIGxldCBzdWJ0YXNrUHJvcGVydGllcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBwcm9wIGluIHN1YnRhc2tPYmopIHtcbiAgICAgICAgc3VidGFza1Byb3BlcnRpZXMucHVzaChwcm9wKVxuICAgIH1cblxuICAgIGxldCBvYmpQcm9wZXJ0aWVzID0gW11cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4geCkge1xuICAgICAgICBvYmpQcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJ0YXNrUHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3VidGFza1Byb3BlcnRpZXNbaV0gIT09IG9ialByb3BlcnRpZXNbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VidGFza1xuZXhwb3J0IHsgaXNTdWJ0YXNrIH0iLCJpbXBvcnQgeyBvYmplY3RTdW1tYXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBpc1N1YnRhc2sgfSBmcm9tIFwiLi9zdWJ0YXNrXCI7XG5cbi8qQXJlIGFibGUgdG8gY3JlYXRlIGJsYW5rIHRhc2sgb2JqZWN0cyAmIHBvcHVsYXRlIHRoZW0gdXNpbmcgc2V0IG1ldGhvZHNcbiovXG5sZXQgVGFzayA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCBjb21wbGV0ZSkgPT4ge1xuXG4gICAgbGV0IHN1YnRhc2tzID0gW107XG5cbiAgICAvL0dldHRlcnNcblxuICAgIGxldCBnZXROdW1TdWJ0YXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1YnRhc2tzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBsZXQgZ2V0U3VidGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdWJ0YXNrcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBsZXQgcmVtb3ZlU3VidGFza3MgPSAoYXJyKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHN1YnRhc2tzLmluZGV4T2YoYXJyW2pdKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJ0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICovXG5cbiAgICBsZXQgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgbGV0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgbGV0IGdldERlYWRsaW5lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVhZGxpbmU7XG4gICAgfVxuXG4gICAgbGV0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgbGV0IGdldENvbXBsZXRpb25TdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZTtcbiAgICB9XG5cbiAgICAvL1NldHRlcnNcbiAgICBsZXQgc2V0TmFtZSA9ICh4KSA9PiB7XG4gICAgICAgIG5hbWUgPSB4O1xuICAgIH1cblxuICAgIGxldCBzZXREZXNjcmlwdGlvbiA9ICh4KSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0geDtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGVhZGxpbmUgPSAoeCkgPT4ge1xuICAgICAgICBkZWFkbGluZSA9IHg7XG4gICAgfVxuXG4gICAgbGV0IHNldFByaW9yaXR5ID0gKHgpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSB4O1xuICAgIH1cblxuICAgIGxldCBzZXRDb21wbGV0aW9uU3RhdHVzID0gKHgpID0+IHtcbiAgICAgICAgY29tcGxldGUgPSB4O1xuICAgIH1cblxuICAgIGxldCBhZGRTdWJ0YXNrcyA9IChhcnIpID0+IHtcbiAgICAgICAgLy9tYWtlcyBzdXJlIHVzZXIgcGFzc2VzIGFuIGFycmF5XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0Vycm9yOiBJbnB1dCBpcyBub3QgYW4gYXJyYXkuIFBsZWFzZSBpbnB1dCBhIHZhbGlkIGFycmF5IG9mIHN1YnRhc2sgb2JqZWN0cyc7XG4gICAgICAgIH1cblxuICAgICAgICAvL21ha2VzIHN1cmUgZXZlcnkgZWxlbWVudCBvZiB0aGUgYXJyYXkgaXMgYW4gb2JqZWN0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBhcnJbaV0pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHthcnJbaV19IGlzIG5vdCBhbiBvYmplY3QuIFBsZWFzZSBpbnB1dCBhIHZhbGlkIGFycmF5IG9mIHN1YnRhc2sgb2JqZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9tYWtlcyBzdXJlIGV2ZXJ5IGVsZW1lbnQgaXMgYSBzdWJ0YXNrXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNTdWJ0YXNrKGFycltpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2FycltpXX0gaXMgbm90IGEgc3VidGFzayBvYmplY3QuICBQbGVhc2UgaW5wdXQgYSB2YWxpZCBhcnJheSBvZiBzdWJ0YXNrIG9iamVjdHNgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgc3VidGFza3MucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZVN1YnRhc2tzID0gKGFycikgPT4ge1xuICAgICAgICAvL21ha2VzIHN1cmUgdXNlciBwYXNzZXMgYW4gYXJyYXlcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnRXJyb3I6IElucHV0IGlzIG5vdCBhbiBhcnJheS4gUGxlYXNlIGlucHV0IGEgdmFsaWQgYXJyYXkgb2Ygc3VidGFzayBvYmplY3RzJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbWFrZXMgc3VyZSBldmVyeSBlbGVtZW50IG9mIHRoZSBhcnJheSBpcyBhbiBvYmplY3RcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgodHlwZW9mIGFycltpXSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2FycltpXX0gaXMgbm90IGFuIG9iamVjdC4gUGxlYXNlIGlucHV0IGEgdmFsaWQgYXJyYXkgb2Ygc3VidGFzayBvYmplY3RzYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvL21ha2VzIHN1cmUgZXZlcnkgZWxlbWVudCBpcyBhIHN1YnRhc2tcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpc1N1YnRhc2soYXJyW2ldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXJyW2ldfSBpcyBub3QgYSBzdWJ0YXNrIG9iamVjdC4gIFBsZWFzZSBpbnB1dCBhIHZhbGlkIGFycmF5IG9mIHN1YnRhc2sgb2JqZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9Gb3IgZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSBvZiB0YXNrcyB0byBkZWxldGUsIGxvb3AgdGhyb3VnaCBhbGwgdGhlIHRhc2tzIGluIHRoZSBwcm9qZWN0IGFuZCBpZiB0aGUgdGFzayBpbiB0aGUgYXJyYXkgb2YgdGFza3MgdG8gYmUgZGVsZXRlZCBhbmQgdGhlIHRhc2sgaW4gdGhlIHRhc2tzIGFycmF5IGFyZSB0aGUgc2FtZSwgdGhlbiBkZWxldGUgaXRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3VidGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyW2ldID09PSBzdWJ0YXNrc1tqXSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJ0YXNrcy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXROYW1lLCBnZXRTdWJ0YXNrcywgZ2V0RGVzY3JpcHRpb24sIGdldERlYWRsaW5lLCBnZXRQcmlvcml0eSwgc2V0TmFtZSwgZ2V0Q29tcGxldGlvblN0YXR1cywgc2V0RGVzY3JpcHRpb24sIHNldERlYWRsaW5lLCBzZXRQcmlvcml0eSwgc2V0Q29tcGxldGlvblN0YXR1cywgYWRkU3VidGFza3MsIHJlbW92ZVN1YnRhc2tzLCBnZXROdW1TdWJ0YXNrcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2siLCIvL0NoZWNrcyBpZiB4IGlzIGEgZ2V0dGVyIG1ldGhvZFxubGV0IGlzR2V0dGVyID0gKHgpID0+IHtcbiAgICBpZiAoeC5zdWJzdHJpbmcoMCwgMykgPT09ICdnZXQnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qUHV0cyBhbGwgdGhlIG9iamVjdCdzIHByb3BlcnRpZXMgZWFjaCBpbnRvIGFuIGFycmF5IFtUaXRsZTogMSwgTmFtZTogMiwgLi4uXVxuT3V0cHV0cyBwcm9wZXJ0aWVzIG9mIGlucHV0dGVkIG9iamVjdCBieS4uLlxuIDEuIEl0ZXJhdGluZyB0aHJvdWdoIGFsbCB0aGUgb2JqZWN0J3MgZW51bWVyYWJsZSBwcm9wZXJ0aWVzL21ldGhvZHNcbiAyLiBJZiBpdCBzdGFydHMgd2l0aCAnZ2V0JywgdGhlbiBpbmNsdWRlIGl0IGluIHRoZSBvdXRwdXRcbiAgLSBUaGlzIGlzIGRvbmUgYmMgdGhlIGdvYWwgaXMgdG8gc2VsZWN0IHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzIGFuZCB0aGlzIHNlcGVyYXRlcyB0aGUgcHJvcGVydGllcyBmcm9tIHRoZSBtZXRob2RzLiAgU2luY2Ugd2UgYWNjZXNzIHRoZSBwcm9wZXJ0aWVzIHcvIGdldHRlcnMsIHdlIGtub3cgdGhhdCBpZiB0aGUgZnVuY3Rpb24gc3RhcnRzIHcvIGdldCwgdGhlbiBpdHMgYWNjZXNzaW5nIGEgcHJvcGVydHkgd2UgbmVlZCB0byBwcmludFxuIDMuIHJldHVybnMgYW4gYXJyYXkgdGhhdCBzdG9yZXMgZWFjaCBwcm9wZXJ0eSBpbiBhIHN0cmluZ1xuIC0gVGhpcyBmdW5jdGlvbiB3aWxsIGNhdXNlIGFuIGVycm9yIGlmIHlvdSBwYXNzIGFuIG9iamVjdCB3aGVyZSB5b3UgaGF2ZSBkaXJlY3QgYWNjZXNzIHRvIHByb3BlcnRpZXMgYmVjdWFzZSBpdCBhc3N1bWVzIGVhY2ggcHJvcGVydHkgaXMgYSBmdW5jdGlvbiBhbmQgd2lsbCBpbnZva2UgaXQuICBJZiBpdCdzIGFuIGFjdHVhbCBwcm9wZXJ0eSwgaXQgY2FuJ3QgaW52b2tlIGl0LiBJdCdzIGxpa2UgdHJ5aW5nIHRvIGludm9rZSBhIHZhcmlhYmxlLCBpdCdsbCBjYXVzZSBhbiBlcnJvclxuIC0gSWYgdGhlIG9iamVjdCdzIHByb3BlcnRpZXMgYXJlIGVtcHR5IGJ1dCBpdCBzdGlsbCBoYXMgdGhlIGFwcHJvcHJpYXRlIGdldHRlcnMvc2V0dGVycywgaXQnbGwgc2hvdyBpdCBhcyBiZWluZyB1bmRlZmluZWRcbiovXG5sZXQgb2JqZWN0U3VtbWFyeSA9IChvYmopID0+IHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGlzR2V0dGVyKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgYXJyLnB1c2goYCR7cHJvcGVydHkuc3Vic3RyaW5nKDMpfTogJHtvYmpbcHJvcGVydHldKCl9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxubGV0IHJlbW92ZVNwYWNlID0gKHN0cikgPT4ge1xuICAgIGxldCBuZXdTdHIgPSBzdHIucmVwbGFjZUFsbCgnICcsICcnKTtcbiAgICByZXR1cm4gbmV3U3RyO1xufVxuXG4vL3JlbW92ZXMgYSBzcGVjaWZpYyBpdGVtIGZyb20gYW4gYXJyYXkgYW5kIHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aG91dCB0aGF0IGl0ZW1cbmxldCByZW1vdmVBcnJheUl0ZW0gPSAoYXJyYXksIGl0ZW0pID0+IHtcbiAgICBsZXQgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cblxuLy9UYWtlcyAyIHBhcmFtZXRlcnMsIHRoZSB0eXBlIG9mIG9iamVjdCB3ZSdyZSBjaGVja2luZyBmb3IsIGFuZCB0aGUgb25lIHdlIHdhbnQgdG8gdGVzdC5cbi8vIGV4KSBvYmplY3RUZXN0KFByb2plY3QoKSwgZGVmYXVsdFByb2plY3QpO1xuLy8gIC0gdGhpcyB3b3VsZCBjaGVjayBpZiBkZWZhdWx0UHJvamVjdCBpcyBhIFByb2plY3QoKSBvYmplY3QuXG4vL1JldHVybiB0cnVlIGlmIHRoZSBpbnB1dHRlZCBvYmplY3QgaXMgb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGUgZGVzaXJlZE9iamVjdCBhbmQgZmFsc2UgaWYgaXQgaXNuJ3RcbmxldCBvYmplY3RUZXN0ID0gKGRlc2lyZWRPYmplY3QsIG9iaikgPT4ge1xuICAgIC8vY2hlY2tzIGlmIGl0J3MgZXZlbiBhbiBvYmplY3RcbiAgICBpZiAoKHR5cGVvZiBvYmopICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9QdXQgYWxsIG9mIGRlc2lyZWRPYmplY3QncyBwcm9wZXJ0aWVzIGludG8gYW4gYXJyYXlcbiAgICBsZXQgZGVzaXJlZE9ialByb3BlcnRpZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGVzaXJlZE9iamVjdCkge1xuICAgICAgICBkZXNpcmVkT2JqUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgIH1cblxuICAgIC8vcHV0IGFsbCBvZiB0aGUgdGVzdCBvYmplY3QncyBwcm9wZXJ0aWVzIGluIGFuIGFycmF5XG4gICAgbGV0IG9ialByb3BlcnRpZXMgPSBbXVxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgb2JqUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgIH1cblxuICAgIC8vbG9vcCB0aHJvdWdoIHRoZSBkZXNpcmVkT2JqZWN0J3MgcHJvcGVydGllcyBhbmQgbWFrZSBzdXJlIHRoZSB0ZXN0IG9iamVjdCBoYXMgYWxsIHRob3NlIHByb3BlcnRpZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc2lyZWRPYmpQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkZXNpcmVkT2JqUHJvcGVydGllc1tpXSAhPT0gb2JqUHJvcGVydGllc1tpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5sZXQgcHJvamVjdFRhc2tTdWJ0YXNrVGVzdHMgPSAocHJvamVjdCwgdGFzaywgc3VidGFzaykgPT4ge1xuICAgIC8vU3RvcmUgdGhlIHJlc3VsdHMgb2YgYWxsIHRlc3RzIGluIG9uZSBhcnJheSBzbyBpZiBvbmUgZmFpbHMsIHdlIGtub3cgd2hpY2ggb25lXG4gICAgbGV0IGFsbFJlc3VsdHMgPSBbXTtcblxuICAgIGxldCBwcm9qZWN0VGVzdFJlc3VsdCA9IG9iamVjdFRlc3QoUHJvamVjdCgpLCBwcm9qZWN0KTtcbiAgICBhbGxSZXN1bHRzLnB1c2gocHJvamVjdFRlc3RSZXN1bHQpO1xuXG4gICAgbGV0IHRhc2tUZXN0UmVzdWx0ID0gb2JqZWN0VGVzdChUYXNrKCksIHRhc2spO1xuICAgIGFsbFJlc3VsdHMucHVzaCh0YXNrVGVzdFJlc3VsdCk7XG5cbiAgICBsZXQgc3VidGFza1Rlc3RSZXN1bHQgPSBvYmplY3RUZXN0KFN1YnRhc2soKSwgc3VidGFzayk7XG4gICAgYWxsUmVzdWx0cy5wdXNoKHN1YnRhc2tUZXN0UmVzdWx0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYWxsUmVzdWx0c1tpXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgeyBvYmplY3RTdW1tYXJ5LCByZW1vdmVTcGFjZSwgcmVtb3ZlQXJyYXlJdGVtLCBvYmplY3RUZXN0LCBwcm9qZWN0VGFza1N1YnRhc2tUZXN0cyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=