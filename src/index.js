import Task from "./task";
import Project from "./projects";
import Subtask from "./subtask";
import { isTask } from "./task";
import { removeArrayItem, removeSpace, objectSummary } from "./utilities";
import { promptWithCharLimit } from "./dom";
import { createSidebarBtn, createProjectDisplay } from "./projectDOM"
import { getSubtaskNameID } from "./ID";

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

//Create Default Project & add it to list of projects
let defaultProject = Project('Default Project');
allProjects.push(defaultProject);

//This is the project we're currently looking at on the page
let currentProject = defaultProject;


createProjectDisplay(defaultProject);
createSidebarBtn(defaultProject);


//DOM Stuff
const container = document.querySelector('#container');
const addProjectBtn = document.querySelector('#add-project-btn');

addProjectBtn.addEventListener('click', () => {

    let limit = 50
    let name = promptWithCharLimit(`Project name (less than ${limit} characters) (can't be a number): `, limit);

    let newProject = Project(name);
    allProjects.push(newProject);

    createProjectDisplay(newProject);
    createSidebarBtn(newProject);
});

export { numProjects, allProjects, setCurrentProject, currentProject, remove }