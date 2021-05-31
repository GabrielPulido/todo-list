import Task from "./task";
import Project from "./projects";
import Subtask from "./subtask";
import { objectSummary } from "./utilities";
import { isTask } from "./task";
import { removeArrayItem } from "./utilities";

//All of your projects are stored in an array
let allProjects = [];

let defaultProject = Project();

let testProj1 = Project('fdsdd');
let testProj2 = Project('2asdf');

allProjects.push(defaultProject);
allProjects.push(testProj1);
allProjects.push(testProj2);

defaultProject.setTitle('Default Project');

let task1 = Task(`Default Task 1`, `This is the Description`, `5/15/21`, `Low`, false);
let task2 = Task(`Start Backend`, `connect to database & find hosting`, `Finished`, `High`, true);
let task3 = Task(`Finish Frontend`, `dom manipulation w/ react/js`, `tomorrow`, `Medium`, false);
let task4 = Task(`Unit Testing`, `test some things`, `Done`, `Low`, true);

defaultProject.setTasks([task1, task2, task3, task4]);

let subtask1 = Subtask('Combine Object Creation Functions', true);
let subtask2 = Subtask('Delete Line 32', false);

task1.addSubtasks([subtask1, subtask2]);

allProjects = removeArrayItem(allProjects, defaultProject);