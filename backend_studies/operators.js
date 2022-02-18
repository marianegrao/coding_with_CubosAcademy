let x = 16, y = 4;

let sum = x + y;
let subtraction = x - y;
let multiplication = x * y;
let division = x /y;
let rest = x % y;

console.log(sum, subtraction, multiplication, division, rest);

// string template
console.log(`The sum of ${x} and ${y} is ${sum}.`)
console.log(`The subtraction of ${x} and ${y} is ${subtraction}.`)
console.log(`The multiplication of ${x} and ${y} is ${multiplication}.`)
console.log(`The division of ${x} and ${y} is ${division}.`)
console.log(`What's the remainder of ${x} and ${y}? It's ${rest}.`)
console.log(`The square root of ${x} is ${Math.sqrt(x)} 
            and of ${y} is ${Math.sqrt(y)}.`)
 console.log(`The power of ${x} to the power ${y} is ${Math.pow(x,y)}.`)

// simplified operations +=, -=, *=, /=

/* x += 3; console.log(x) = 19;
x -= 3; console.log(x) = 16
x *= 3; console.log(x) = 48
x /= 3; console.log(x) = 16;
*/

// ++x e ++x

  /*  ++x = sum and assign
      x++ = assing and sum */

let m = 10;
let n = m++;  
console.log('M = '+ m);//  then, was added 1 in M and program returned 11. 
console.log('N = ' + n); // first, the program return the 10 was assigned in 'n'.