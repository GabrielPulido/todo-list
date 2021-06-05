import { removeSpace } from "./utilities";
import Project from "./projects";
import { getTaskContainerID, getProjectDisplayID, getSidebarBtnID, getAddTaskBtnID, getTaskBoxID, getTaskNameID, getEditTaskBtnID, getDeleteTaskBtnID, getTaskDescriptionID, getTaskDeadlineID, getTaskPriorityID, getTaskDoneID, getAddSubtaskBtnID, getSubtaskDoneID, getSubtaskNameID, getDeleteSubtaskBtnID, getDeleteProjectBtnID, getSubtaskContainer } from "./ID";
import { setCurrentProject, currentProject, remove, allProjects, numProjects } from "./index";
import Task from "./task";
import Subtask from "./subtask"

/*
Note there's a bug where it messes up if you name the project something w/ a number at the beginning (ie 5Project)
*/

let container = document.querySelector('#container');
let sidebar = document.querySelector('#sidebar');

//Note this function is going to be long bc it creates unique buttons for all projects then makes event listeners for them
let createProjectDisplay = (project) => {

    //Create the html for project display
    let displayID = getProjectDisplayID(project)
    let projectSkeleton = `
        <div id = "${displayID}">
            <div class="add-task-div">
                <button id="${getAddTaskBtnID(project)}">Add Task +</button>
            </div>

            <div class="task-container" id="${getTaskContainerID(project)}">
            </div>

            <div class="delete-project-div">
                <button id="${getDeleteProjectBtnID(project)}">Delete Project</button>
            </div>
        </div>
        `
    container.insertAdjacentHTML('beforeend', projectSkeleton);

    //Once you create the project display, make sure its not visible right now
    let display = document.querySelector(`#${displayID}`);
    display.style.display = 'none';

    //Create Event Listener for Add Task Button
    let addTaskBtn = document.querySelector(`#${getAddTaskBtnID(project)}`);
    addTaskBtn.addEventListener('click', () => {
        let taskContainer = document.querySelector(`#${getTaskContainerID(project)}`);

        //Note we're not validating these inputs for now, we're assuming the user will type a valid input
        let name = prompt('Name: ');
        let description = prompt('Description: ');
        let deadline = prompt('Deadline: ');
        let priority = prompt('Priority: ');
        let done = prompt('Done? (type yes or no): ');

        let newTask = Task(name, description, deadline, priority, done);
        project.setTasks([newTask]);

        let taskBox = `
        <div class="task-box" id="${getTaskBoxID(project, newTask)}">
            <div class="task-content">
                <span class="task-title-and-delete-task-btn">
                    <h2 class="task-header" id="${getTaskNameID(project, newTask)}">${newTask.getName()}: </h2>
                    <button class="edit-task-btn" id="${getEditTaskBtnID(project, newTask)}">Edit Task</button>
                    <button class="delete-task-btn" id="${getDeleteTaskBtnID(project, newTask)}">Delete Task</button>
                </span>
                <div>
                    <h3 class="task-description-h3">Description:</h3>
                    <p class="task-description" id="${getTaskDescriptionID(project, newTask)}">${newTask.getDescription()}</p>
                </div>
                <div>
                    <h3 class="task-deadline-h3">Deadline:</h3>
                    <p class="task-deadline" id="${getTaskDeadlineID(project, newTask)}">${newTask.getDeadline()}</p>
                </div>
                <div>
                    <h3 class="task-priority-h3">Priority:</h3>
                    <p class="task-priority" id="${getTaskPriorityID(project, newTask)}">${newTask.getPriority()}</p>
                </div>
                    <label for="${getTaskDoneID(project, newTask)}" class="task-done">Done?</label>
                    <input type="checkbox" name="${getTaskDoneID(project, newTask)}" id="${getTaskDoneID(project, newTask)}">
                <div class="subtask-header-and-btn" id="${getSubtaskContainer(project, newTask)}">
                    <h3 class="subtask-header">Subtasks:</h3>
                    <button class="add-subtask-btn" id="${getAddSubtaskBtnID(project, newTask)}">Add Subtask+</button>
                </div>

                        <!-- Subtask Goes Here -->

                <div class="delete-subtask-div">
                    <button id="${getDeleteSubtaskBtnID(project, newTask)}" class="delete-subtask-btn">Delete All Checked Subtasks</button>
                </div>
            </div>
        </div>
        `
        taskContainer.insertAdjacentHTML('beforeend', taskBox);

        // DELETE AFTER DONE
        console.log(project.getTaskNames());

        //Delete Task Event Listener
        let deleteTaskBtn = document.querySelector(`#${getDeleteTaskBtnID(project, newTask)}`);
        deleteTaskBtn.addEventListener('click', () => {
            let taskBox = document.querySelector(`#${getTaskBoxID(project, newTask)}`);
            taskBox.remove();
            project.removeTasks([newTask]);
            // DELETE AFTER DONE
            console.log(project.getTaskNames());
        });

        //Add Subtask Event Listener
        let addSubtaskBtn = document.querySelector(`#${getAddSubtaskBtnID(project, newTask)}`);
        addSubtaskBtn.addEventListener('click', () => {

            let name = prompt('Name: ');
            let done = prompt('Done?: ');

            let subtask = Subtask(name, done);
            newTask.addSubtasks([subtask]);

            let html = `
                <div class="subtask">
                    <input type="checkbox" name="${getSubtaskDoneID(project, newTask, subtask)}" id="${getSubtaskDoneID(project, newTask, subtask)}">
                    <label id="${getSubtaskNameID(project, newTask, subtask)}" for="${getSubtaskDoneID(project, newTask, subtask)}">${subtask.getName()}</label>
                </div>
            `;
            let subtaskContainer = document.querySelector(`#${getSubtaskContainer(project, newTask)}`);

            subtaskContainer.insertAdjacentHTML('afterend', html);
        });
    });


    //Create Eventlistener for Delete Project Button
    let deleteProjectBtn = document.querySelector(`#${getDeleteProjectBtnID(project)}`);
    deleteProjectBtn.addEventListener('click', () => {
        let sidebarBtnID = getSidebarBtnID(project);
        let sidebarBtn = document.querySelector(`#${sidebarBtnID}`);
        sidebarBtn.remove();

        //Delete project from allProjects[] and set currentProject = null
        remove(project);
        setCurrentProject(null);
        display.remove();

    });

}

let createSidebarBtn = (project) => {
    let btn = document.createElement('button');
    btn.className = 'project';
    btn.textContent = project.getTitle();
    btn.id = `${removeSpace(project.getTitle())}-sidebar-btn`;

    const sidebar = document.querySelector('#sidebar');
    sidebar.appendChild(btn);

    btn.addEventListener('click', (e) => {
        //Change header to project title
        const header = document.querySelector('#project-title-header');
        header.textContent = project.getTitle();

        //right now, currentProject isn't the project we clicked on, it's the project that was displayed before we clicked the sidebar button. Take that project, get its id, and set its display attribute to 'none'
        if (currentProject != null) {
            let oldProjectID = getProjectDisplayID(currentProject);
            let oldProjectDisplay = document.querySelector(`#${oldProjectID}`);
            oldProjectDisplay.style.display = 'none'
        }

        //Now the project we clicked is the current project
        setCurrentProject(project);

        //Get the display of the project that belongs to the button you clicked on and display it
        let projectDisplay = document.querySelector(`#${getProjectDisplayID(project)}`);
        projectDisplay.style.display = 'block';
    });
}

export { createProjectDisplay, createSidebarBtn };