... вміст ...

function isInRange(number, min, max) {
    if (number < min || number > max) {
        throw new Error(`Number must be between ${min} and ${max}`);
    }
    return true;
}
