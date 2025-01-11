// function minRemoveToMakeValid(s) {
//     const arr = s.split('');
//     let openCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '(') {
//             openCount++;
//         } else if (arr[i] === ')') {
//             if (openCount === 0) {
//                 arr[i] = '';
//             } else {
//                 openCount--;
//             }
//         }
//     }
//     openCount = 0;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === ')') {
//             openCount++;
//         } else if (arr[i] === '(') {
//             if (openCount === 0) {
//                 arr[i] = '';
//             } else {
//                 openCount--;
//             }
//         }
//     }

//     return arr.join('');
// }

// console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
// console.log(minRemoveToMakeValid("a)b(c)d"));  
// console.log(minRemoveToMakeValid("))(("));

//                  2-SAVOL:
// function romanToInt(s) {
//     const romanMap = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let total = 0;
//     for (let i = 0; i < s.length; i++) {
//         let current = romanMap[s[i]];
//         let next = romanMap[s[i + 1]];

//         if (next && current < next) {
//             total -= current;
//         } else {
//             total += current;
//         }
//     }

//     return total;
// }

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));

// //                  3-SAVOL:
// function containsNearbyDuplicate(nums, k) {
//     const map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
//             return true;
//         }
//         map.set(nums[i], i);
//     }

//     return false;
// }

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

//                      4-SAVOL:
// function splitWord(word) {
//     if (word.length > 10) {
//         let mid = Math.floor(word.length / 2);
//         if (word.length % 2 !== 0) mid += 1;
//         return word.slice(0, mid) + '-' + word.slice(mid);
//     }
//     return word;
// }

// function splitTextByHyphen(text) {
//     return text.split(' ').map(splitWord).join(' ');
// }

// let testCases = [
//     "Assalomu Alaykum Javohir",
//     "Robocontest contest",
//     "Bilmasvoyta'tilda"
// ];

// let results = testCases.map(splitTextByHyphen);
// console.log(results);

//                          5-SAVOL:
// function getAsciiCode(input) {
//     if (typeof input === 'string' && input.length === 1) {
//         return input.charCodeAt(0);
//     } else if (typeof input === 'number') {
//         return input.toString().charCodeAt(0);
//     } else {
//         return 'Iltimos, bitta belgi yoki raqam kiriting.';
//     }
// }

// console.log(getAsciiCode('A'));
// console.log(getAsciiCode(5));
// console.log(getAsciiCode('9'));

//                          6-SAVOL:
// function insertSpace(str) {
//     return str.replace(/([a-z])([A-Z])/g, '$1 $2');
// }

// console.log(insertSpace("helloWorld"));
// console.log(insertSpace("thisIsAString"));

//                          7-SAVOL:
function solveEquation(equation) {
    const [left, right] = equation.split('=');
    const leftResult = simplify(left);
    const rightResult = simplify(right);

    const coefficient = leftResult.coefficient - rightResult.coefficient;
    const constant = rightResult.constant - leftResult.constant;

    if (coefficient === 0) {
        return constant === 0 ? "Infinite solutions" : "No solution";
    } else {
        return `x=${constant / coefficient}`;
    }
}

// function simplify(expr) {
//     let coefficient = 0;
//     let constant = 0;
//     const n = expr.length;
//     let i = 0;

//     while (i < n) {
//         if (expr[i] === 'x') {
//             coefficient += 1;
//             i++;
//         } else if (expr[i] === '-') {
//             if (i + 1 < n && expr[i + 1] === 'x') {
//                 coefficient -= 1;
//                 i += 2;
//             } else {
//                 const numStart = i + 1;
//                 while (i + 1 < n && !isNaN(expr[i + 1])) {
//                     i++;
//                 }
//                 constant -= parseInt(expr.substring(numStart, i + 1));
//                 i++;
//             }
//         } else if (expr[i] === '+') {
//             if (i + 1 < n && expr[i + 1] === 'x') {
//                 coefficient += 1;
//                 i += 2;
//             } else {
//                 const numStart = i + 1;
//                 while (i + 1 < n && !isNaN(expr[i + 1])) {
//                     i++;
//                 }
//                 constant += parseInt(expr.substring(numStart, i + 1));
//                 i++;
//             }
//         } else {
//             i++;
//         }
//     }

//     return { coefficient, constant };
// }

// // Example test cases
// console.log(solveEquation("x+5-3+x=6+x-2"));
// console.log(solveEquation("x=x"));
// console.log(solveEquation("2x=x"));
