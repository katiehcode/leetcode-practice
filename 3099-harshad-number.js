/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sumOfDigits = 0, n = x;

    while (n > 0) {
        sumOfDigits += n % 10;   // use n % 10 to get each digit
        n = Math.trunc(n / 10);
    }

    return (x % sumOfDigits === 0) ? sumOfDigits : -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(18));
console.log(sumOfTheDigitsOfHarshadNumber(23));