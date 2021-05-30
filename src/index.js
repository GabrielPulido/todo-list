import Task from "./task";
import Project from "./projects";
import { objectSummary } from "./utilities";
import { isTask } from "./task";

//Create Default Project
let proj = Project(); 

proj.setTitle('Default Project');
console.log(`Project Title: ${proj.getTitle()}`);

//create tasks
let task1 = Task(`Build UI`, `implement html & css`, `5/15/21`, `Low`, false);
let task2 = Task(`Start Backend`, `connect to database & find hosting`, `Finished`, `High`, true);
let task3 = Task(`Finish Frontend`, `dom manipulation w/ react/js`, `tomorrow`, `Medium`, false);
let task4 = Task(`Unit Testing`, `test some things`, `Done`, `Low`, true);

proj.setTasks([task1, task2, task3, task4]);



//Create dom element
let para = document.createElement('p');
para.textContent = '100:3912:39';
para.className = 'test';
document.body.append(para);