import { objectSummary } from "./utilities";

/*Are able to create blank task objects & populate them using set methods
*/
let Task = (name, description, deadline, priority, complete) => {

    let subtasks = [];

    //Getters
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

    return { getName, getDescription, getDeadline, getPriority, setName, getCompletionStatus, setDescription, setDeadline, setPriority, setCompletionStatus }
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

export default Task
export { isTask }