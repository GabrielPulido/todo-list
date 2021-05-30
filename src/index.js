import Task from "./task";
import Project from "./projects";
import Subtask from "./subtask";
import { objectSummary } from "./utilities";
import { isTask } from "./task";

//Create Default Project
let proj = Project();

proj.setTitle('Default Project');
console.log(`Project Title: ${proj.getTitle()}`);

//create tasks
let task1 = Task(`Default Task 1`, `Description`, `5/15/21`, `Low`, false);
let task2 = Task(`Start Backend`, `connect to database & find hosting`, `Finished`, `High`, true);
let task3 = Task(`Finish Frontend`, `dom manipulation w/ react/js`, `tomorrow`, `Medium`, false);
let task4 = Task(`Unit Testing`, `test some things`, `Done`, `Low`, true);

proj.setTasks([task1, task2, task3, task4]);

let subtask1 = Subtask('Combine Object Creation Functions', true);
let subtask2 = Subtask('Delete Line 32', false);

task1.addSubtasks([subtask1, subtask2]);

console.log(task1.getSubtasks());
console.log(objectSummary(task1.getSubtasks()[1]));