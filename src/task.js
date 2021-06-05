import { objectSummary } from "./utilities";
import { isSubtask } from "./subtask";

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
            if (isSubtask(arr[i]) === false) {
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
            if (isSubtask(arr[i]) === false) {
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

    return { getName, getSubtasks, getDescription, getDeadline, getPriority, setName, getCompletionStatus, setDescription, setDeadline, setPriority, setCompletionStatus, addSubtasks, removeSubtasks, getNumSubtasks, }
}

export default Task