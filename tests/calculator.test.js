const Calculator = require('../src/calculator');

test('add: 2 + 3 should equal 5 (THIS WILL FAIL)', () => {
    expect(Calculator.add(2, 3)).toBe(99);  // 99 замість 5 - помилка!
});
