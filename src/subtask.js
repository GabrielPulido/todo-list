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