const Calculator = require('./src/calculator');
const { parseNumber, validateOperation, parseCommandLine } = require('./src/input');
const { isPositive, isInteger } = require('./src/validate');

function runCalculator(operation, a, b) {
    const num1 = parseNumber(a);
    const num2 = parseNumber(b);
    
    isPositive(num1);
    isPositive(num2);
    isInteger(num1);
    isInteger(num2);
    
    const op = validateOperation(operation);
    
    let result;
    switch(op) {
        case 'add':
            result = Calculator.add(num1, num2);
            break;
        case 'subtract':
            result = Calculator.subtract(num1, num2);
            break;
        case 'multiply':
            result = Calculator.multiply(num1, num2);
            break;
        default:
            throw new Error('Unknown operation');
    }
    return result;
}

if (require.main === module) {
    const { operation, a, b } = parseCommandLine();
    const result = runCalculator(operation, a, b);
    console.log(`Result: ${result}`);
}

module.exports = { runCalculator };
