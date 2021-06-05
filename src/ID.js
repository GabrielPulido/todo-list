import Project from "./projects";
import Task from "./task";
import { isTask } from "./task";
import Subtask from "./subtask";
import { removeSpace, projectTaskSubtaskTests, objectTest } from "./utilities";
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
            x = objectTest(Project(), project);
            testResults.push(x);
            break;
        case 1:
            x = objectTest(Project(), project);
            y = objectTest(Task(), array[0]);
            testResults.push(x, y);
            break;
        case 2:
            x = objectTest(Project(), project);
            y = objectTest(Task(), array[0]);
            z = objectTest(Subtask(), array[1]);
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
    let projectID = removeSpace(project.getTitle());
    let taskID = '';
    let subtaskID = '';


    switch (array.length) {
        case 0:
            id = `${projectID}`;
            break;
        case 1:
            taskID = removeSpace(array[0].getName());
            id = `${projectID}-${taskID}`;
            break;
        case 2:
            taskID = removeSpace(array[0].getName());
            subtaskID = removeSpace(array[1].getName());
            id = `${projectID}-${taskID}-${subtaskID}`;
            break;
    }

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

export { getTaskContainerID, getProjectDisplayID, getSidebarBtnID, getAddTaskBtnID, getTaskBoxID, getTaskNameID, getEditTaskBtnID, getDeleteTaskBtnID, getTaskDescriptionID, getTaskDeadlineID, getTaskPriorityID, getTaskDoneID, getAddSubtaskBtnID, getSubtaskDoneID, getSubtaskNameID, getDeleteSubtaskBtnID, getDeleteProjectBtnID, getSubtaskContainer }