const Calculator = require('../src/calculator');

describe('Calculator Tests', () => {
    test('add: 2 + 3 should equal 5', () => {
        expect(Calculator.add(2, 3)).toBe(5);
    });

    test('subtract: 5 - 3 should equal 2', () => {
        expect(Calculator.subtract(5, 3)).toBe(2);
    });

    test('multiply: 4 * 3 should equal 12', () => {
        expect(Calculator.multiply(4, 3)).toBe(12);
    });
});
