function parseNumber(value) {
    const num = Number(value);
    if (isNaN(num)) {
        throw new Error(`Invalid number: ${value}`);
    }
    return num;
}

function validateOperation(operation) {
    const validOps = ['add', 'subtract', 'multiply'];
    if (!validOps.includes(operation)) {
        throw new Error(`Invalid operation: ${operation}`);
    }
    return operation;
}

function parseCommandLine() {
    const args = process.argv.slice(2);
    return {
        operation: args[0],
        a: args[1],
        b: args[2]
    };
}

module.exports = { parseNumber, validateOperation, parseCommandLine };
