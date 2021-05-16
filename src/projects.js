import { isTask } from "./task";
import { } from "./utilities";

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
            if (isTask(arr[i]) === false) {
                return `${arr[i]} is not a task object.  Please input a valid array of task objects`;
            }
        };

        //Pushes each task to the tasks array. In other words we add all the tasks to the project
        arr.forEach(element => {
            tasks.push(element);
        });
    }


    return {
        getTitle,
        getTasks,
        setTitle,
        setTasks
    }
}

export default Project