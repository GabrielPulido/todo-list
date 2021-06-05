let promptWithCharLimit = (message, limit) => {
    let output = '';
    do {
        output = prompt(message);
    } while (output.length > limit || !isNaN(output))
    return output;
}

export { promptWithCharLimit }