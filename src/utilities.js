//Checks if x is a getter method
let isGetter = (x) => {
    if (x.substring(0, 3) === 'get') {
        return true;
    }
    return false;
}

/*Puts all the object's properties each into an array [Title: 1, Name: 2, ...]
Outputs properties of inputted object by...
 1. Iterating through all the object's enumerable properties/methods
 2. If it starts with 'get', then include it in the output
  - This is done bc the goal is to select the object's properties and this seperates the properties from the methods.  Since we access the properties w/ getters, we know that if the function starts w/ get, then its accessing a property we need to print
 3. returns an array that stores each property in a string
 - This function will cause an error if you pass an object where you have direct access to properties becuase it assumes each property is a function and will invoke it.  If it's an actual property, it can't invoke it. It's like trying to invoke a variable, it'll cause an error
 - If the object's properties are empty but it still has the appropriate getters/setters, it'll show it as being undefined
*/
let objectSummary = (obj) => {
    let arr = [];
    for (const property in obj) {
        if (isGetter(property)) {
            arr.push(`${property.substring(3)}: ${obj[property]()}`);
        }
    }
    return arr;
}

let removeSpace = (str) => {
    let newStr = str.replaceAll(' ', '');
    return newStr;
}

//removes a specific item from an array and returns a new array without that item
let removeArrayItem = (array, item) => {
    let index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

//Takes 2 parameters, the type of object we're checking for, and the one we want to test.
// ex) objectTest(Project(), defaultProject);
//  - this would check if defaultProject is a Project() object.
//Return true if the inputted object is of the same type as the desiredObject and false if it isn't
let objectTest = (desiredObject, obj) => {
    //checks if it's even an object
    if ((typeof obj) !== 'object') {
        return false;
    }

    //Put all of desiredObject's properties into an array
    let desiredObjProperties = [];
    for (const prop in desiredObject) {
        desiredObjProperties.push(prop);
    }

    //put all of the test object's properties in an array
    let objProperties = []
    for (const prop in obj) {
        objProperties.push(prop);
    }

    //loop through the desiredObject's properties and make sure the test object has all those properties
    for (let i = 0; i < desiredObjProperties.length; i++) {
        if (desiredObjProperties[i] !== objProperties[i]) {
            return false;
        }
    }
    return true;
}

let projectTaskSubtaskTests = (project, task, subtask) => {
    //Store the results of all tests in one array so if one fails, we know which one
    let allResults = [];

    let projectTestResult = objectTest(Project(), project);
    allResults.push(projectTestResult);

    let taskTestResult = objectTest(Task(), task);
    allResults.push(taskTestResult);

    let subtaskTestResult = objectTest(Subtask(), subtask);
    allResults.push(subtaskTestResult);

    for (let i = 0; i < allResults.length; i++) {
        if (allResults[i] === false) {
            return false;
        }
    }

    return true;
}

export { objectSummary, removeSpace, removeArrayItem, objectTest, projectTaskSubtaskTests };