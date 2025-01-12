// function sortKeys(obj){
//     var keys = Object.keys(obj);
//     keys.sort();
//     return keys;
// }
// const obj = {
//     b: 2,
//     a: 1,
//     c: 3
// };
// console.log(sortKeys(obj));

//                                                      2-SAVOL:
// function uniqueConcat(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (result.indexOf(arr[i]) === -1) {
//             result.push(arr[i]);
//         }
//     }
//     return result.toString().join(");
// }
// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd']));

//                                                      3-SAVOL:
// function findDuplicates(arr) {
//     let duplicates = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j] && duplicates.indexOf(arr[i]) === -1) {
//                 duplicates.push(arr[i]);
//             }
//         }
//     }
//     return duplicates;
// }
// console.log(findDuplicates([1, 2, 3, 1, 2, 4])); 

//                                                      4-SAVOL:
// function sumObjectValues(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             sum += obj[key];
//         } else if (typeof obj[key] === 'object' && obj[key] !== null) {
//             sum += sumObjectValues(obj[key]);
//         }
//     }
//     return sum;
// }
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };
// console.log(sumObjectValues(obj));

//                                                      5-SAVOL:
// function rotateArrayLeft(arr, n) {
//     const rotations = n % arr.length;
//     return [...arr.slice(rotations), ...arr.slice(0, rotations)];
// }
// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));

//                                                      6-SAVOL:
// function removeDigits(str) {
//     return str.replace(/\d/g, '');
// }
// console.log(removeDigits("abc123def456"));

//                                                      7-SAVOL:
// function oddIndexedElements(arr) {
//     return arr.filter((_, index) => index % 2 !== 0);
// }
// console.log(oddIndexedElements([1, 2, 3, 4, 5, 6]));

//                                                      8-SAVOL:
// function doubleValues(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         } else if (typeof obj[key] === 'object' && obj[key] !== null) {
//             doubleValues(obj[key]);
//         }
//     }
//     return obj;
// }
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };
// console.log(doubleValues(obj));

//                                                      9-SAVOL:
// function objectToArray(obj) {
//     return Object.entries(obj);
// }
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(objectToArray(obj));

//                                                      10-SAVOL:
// function sortKeysByValue(obj) {
//     return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
// }
// const obj = {
//     a: 3,
//     b: 1,
//     c: 2
// };
// console.log(sortKeysByValue(obj));
