/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const str = String(x);
    const reversedStr = str.split('').reverse().join('');

    return reversedStr === str;
};