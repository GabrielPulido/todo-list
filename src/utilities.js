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

export { objectSummary, removeSpace };
