/**
 * @param {number} num
 * @return {number}
 */
function countDigits(n) {
    let x = n, count = 0;
  
    while (x > 0) {
      const d = x % 10;          
      if (n % d == 0) count++;  
      x = Math.floor(x / 10);   
    }
    
    return count;
  }

  console.log(countDigits(7));      // 1
  console.log(countDigits(121));    // 2
  console.log(countDigits(1248));   // 4