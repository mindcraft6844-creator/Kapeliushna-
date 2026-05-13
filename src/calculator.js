const Calculator = {
    add(a, b) {
        console.log(`[DEBUG] Adding ${a} + ${b}`);
        return a + b;
    },
    subtract(a, b) {
        console.log(`[DEBUG] Subtracting ${a} - ${b}`);
        return a - b;
    },
    multiply(a, b) {
        console.log(`[DEBUG] Multiplying ${a} * ${b}`);
        return a * b;
    },
    divide(a, b) {
        if (b === 0) throw new Error('Division by zero');
        console.log(`[DEBUG] Dividing ${a} / ${b}`);
        return a / b;
    }
};
module.exports = Calculator;
