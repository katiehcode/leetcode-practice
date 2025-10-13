/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    
    while (n > 0) {
        const digit = n % 10;

        sum += digit;
        product *= digit;

        n = Math.trunc(n / 10);
    }

    return product - sum;     
};

console.log(subtractProductAndSum(234));   // expect 15
console.log(subtractProductAndSum(4421));  // expect 21