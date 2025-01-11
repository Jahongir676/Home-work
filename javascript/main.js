// function calc(n){
//     return function(m){
//         let arr= []
//         for(let i=1;i<=n;i++){
//             arr.push(m*i)
//         }
//         return arr;
//     }
// }
// const num = calc(5)(10);
// console.log(num);

//                   2-SAVOL:
// function primeSum(n) {
//     return function(m) {
//         let sum = 0;
//         function isPrime(num) {
//             if (num < 2) return false;
//             for (let i = 2; i <= Math.sqrt(num); i++) {
//                 if (num % i === 0) return false;
//             }
//             return true;
//         }
//         for (let i = n; i <= m; i++) {
//             if (isPrime(i)) {
//                 sum += i;
//             }
//         }
//         return sum;
//     }
// }
// const closure = primeSum(1);
// const result = closure(10);
// console.log(result);

//                   3-SAVOL:
// function hasExactCommonLetters(str1) {
//     return function(str2) {
//         if (str1.length !== str2.length) return false;
//         let set1 = new Set(str1);
//         let set2 = new Set(str2);
//         if (set1.size !== set2.size) return false;
//         for (let char of set1) {
//             if (!set2.has(char)) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// const closure = hasExactCommonLetters("apple");
// const result = closure("elppa");
// console.log(result);

//                  4-SAVOL:
// function fibonacci(n) {
//     if (n <= 0) return 0;
//     if (n === 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// const result = fibonacci(5);
// console.log(result);

//                  5-SAVOL:
// function findClosest(n) {
//     return function(m) {
//         let closest = n[0];
//         let minDiff = Math.abs(m - closest);

//         for (let i = 1; i < n.length; i++) {
//             const diff = Math.abs(m - n[i]);
//             if (diff < minDiff) {
//                 minDiff = diff;
//                 closest = n[i];
//             }
//         }

//         return closest;
//     }
// }
// const closure = findClosest([1, 3, 7, 10, 15]);
// const result = closure(8);
// console.log(result);

//                  6-SAVOL:
// function generateMultiples(num, length) {
//     const multiples = [];
//     for (let i = 1; multiples.length < length; i++) {
//         multiples.push(num * i);
//     }
//     return multiples;
// }

// const result = generateMultiples(3, 5);
// console.log(result);

//                 7-SAVOL:
// function reverseWords(str) {
//     return str.split(' ').reverse().join(' ');
// }

// const result = reverseWords("Hello World from Jahongir");
// console.log(result);

//                 8-SAVOL:
// function calculateBurglary(stolenItems) {
//     const total = Object.values(stolenItems).reduce((sum, value) => sum + value, 0);
//     return total > 0 ? total : "Lucky you!";
// }

// const stolen = {
//     jewelry: 5000,
//     electronics: 3000,
//     art: 7000
// };

// const result = calculateBurglary(stolen);
// console.log(result);

//                 9-SAVOL:
// function removeABC(str) {
//     const modified = str.replace(/[abc]/gi, '');
//     return modified.length < str.length ? modified : null;
// }

// const result = removeABC("abcdefg");
// console.log(result);

//                 10-SAVOL:
// function capitalizeNames(names) {
//     return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// }

// const result = capitalizeNames(["alice", "bob", "charlie"]);
// console.log(result);

//                 11-SAVOL:    
// function uniquePositiveNumbers(arr) {
//     const uniquePositives = [...new Set(arr.filter(num => num > 0))];
//     return uniquePositives;
// }

// const result = uniquePositiveNumbers([1, -1, 2, 2, 3, 4, -2, 3, 5]);
// console.log(result);

//                 12-SAVOL:
// function doubleFactorial(num) {
//     if (num < 0) return undefined;
//     if (num === 0 || num === 1) return 1;
//     return num * doubleFactorial(num - 2);
// }

// const result = doubleFactorial(7);
// console.log(result);

//                 13-SAVOL:    
// function productOfNumbers(str) {
//     const numbers = str.split(', ').map(Number);
//     return numbers.reduce((product, num) => product * num, 1);
// }

// const result = productOfNumbers("2, 3, 4");
// console.log(result);

//                 14-SAVOL:
// function range(start, end) {
//     const result = [];
//     for (let i = start; i <= end; i++) {
//         result.push(i);
//     }
//     return result;
// }

// const result = range(5, 10);
// console.log(result);

//                 15-SAVOL:
// function findFactors(num) {
//     const factors = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }
//     return factors;
// }

// const result = findFactors(12);
// console.log(result);
