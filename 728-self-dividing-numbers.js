/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const selfDividingNums = [];

    for (let n = left; n <= right; n++) {
        if (isSelfDividingNumber(n)) {
            selfDividingNums.push(n);
        }
    }

    return selfDividingNums; 
};

function isSelfDividingNumber(n) {
    let x = n;

    while (x > 0) {
        const digit = x % 10;

        if (digit === 0 || n % digit !== 0) return false;

        x = Math.trunc(x / 10);
    }

    return true;
};