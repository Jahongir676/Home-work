//              1-SAVOL:
// function returner1word(word){
//     let word1 = word.split(" ")
//     return word1[0]
// }
// let word = "Hello world"
// console.log(returner1word(word))

//                2-SAVOL:
// function returnereveners(nums){
//     let eveners = []
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] % 2 === 0){
//             eveners.push(nums[i])
//         }
//     }
//     return eveners
// }
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(returnereveners(nums))

//                3-SAVOL:
// function incrementItems(array){
//     for(let i = 0; i < array.length; i++){
//         array[i] += 1
//     }
//     return array
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(incrementItems(array))

//                4-SAVOL:
// function getLastItem(array){
//     return array[array.length - 1]
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(getLastItem(array))

//                5-SAVOL:
// function sumArray(array){
//     let counter = 0;
//     for(let i = 0; i < array.length; i++){
//         counter += array[i]
//     }
//     return counter
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(sumArray(array))

//                6-SAVOL:
// function fiftyThirtyTwenty(num){
//     let fifty = num * 0.5
//     let thirty = num * 0.3
//     let twenty = num * 0.2
//     let obj = {
//         "ilm": fifty,
//         "harajat": thirty,
//         "kelajak": twenty
//     }
//     return obj
// }
// let num = 10000
// console.log(fiftyThirtyTwenty(num))

//                7-SAVOL:
// function arrBetween(num1, num2, array){
//     let counter = []
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > num1 && array[i] < num2){
//             counter.push(array[i])
//         }
//     }
//     return counter
// }
// let num1 = 3
// let num2 = 8
// let array = [1, 5, 95, 0, 4, 7]
// console.log(arrBetween(num1, num2, array))

//                8-SAVOL:
// function check(arr, num){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//             return true
//         }
//     }
//     return false
// }
// let arr = [1, 1, 2, 1, 1]
// let num = 3
// console.log(check(arr, num))

//                9-SAVOL:
// function arrayValuesTypes(arr){
//     let counter = []
//     for(let i = 0; i < arr.length; i++){
//         counter[i] = typeof arr[i]
//     }
//     return counter
// }
// let arr = [1, 2, "null"]
// console.log(arrayValuesTypes(arr))

//                10-SAVOL:
// function yarating(arr) {
//     return arr.map(item => typeof item);
// }
// let arr = [1, 2, "null"]
// console.log(yarating(arr))

//                11-SAVOL:
// function indeksYigindisi(arr) {
//     let juftSum = 0;
//     let toqSum = 0;
  
//     arr.forEach((item, index) => {
//       if (index % 2 === 0) {
//         juftSum += item;
//       } else {
//         toqSum += item;
//       }
//     });
  
//     return { juftSum, toqSum };
//   }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(indeksYigindisi(arr));

//                12-SAVOL:
// function removeSpaces(str) {
//     return str.replace(/\s+/g, '');
// }
// let str = "Hello world"
// console.log(removeSpaces(str))

//                13-SAVOL:
// function arrayOfMultiples(num, length) {
//     return Array.from({ length }, (_, i) => num * (i + 1));
// }
// let num = 7
// let length = 5
// console.log(arrayOfMultiples(num, length))

//                14-SAVOL:
// function reverseInput(input) {
//     if (typeof input === 'number') {
//       return parseFloat(input.toString().split('').reverse().join('')) * Math.sign(input);
//     } else if (typeof input === 'string') {
//       return input.split(' ').reverse().join(' ');
//     } else {
//       return 'Invalid input';
//     }
// }
// let input = "Hello World"
// console.log(reverseInput(input))

//                15-SAVOL:
// function calculateBurglaryTotal(stolenItems) {
//     const total = Object.values(stolenItems).reduce((sum, value) => sum + value, 0);
//     return total > 0 ? total : "Lucky you!";
// }
// const stolenItems = {
//     tv: 30,
//     skate: 20,
//     stereo: 50,
// };
// console.log(calculateBurglaryTotal(stolenItems));

//                16-SAVOL:
// function removeABC(str) {
//     if (!/[abc]/.test(str)) {
//       return null;
//     }
//     return str.replace(/[abc]/g, '');
// }
// let str = "Hello world"
// console.log(removeABC(str))

//                17-SAVOL:
// function capitalizeFirstLetter(names) {
//     return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// }
// let names = ["alice", "bob", "charlie"];
// console.log(capitalizeFirstLetter(names));

//                18-SAVOL:
// function uniquePositiveNumbers(arr) {
//     return [...new Set(arr.filter(num => num > 0))];
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(uniquePositiveNumbers(arr));

//                19-SAVOL:
// function doubleFactorial(num) {
//     if (num < 0) return undefined;
//     if (num === 0 || num === 1) return 1;
  
//     let result = 1;
//     for (let i = num; i > 0; i -= 2) {
//       result *= i;
//     }
//     return result;
// }
// let num = 5
// console.log(doubleFactorial(num))

//                20-SAVOL:
// function productOfNumbers(str) {
//     const numberStrings = str.split(', ');
//     const numbers = numberStrings.map(numStr => {
//       return Number(numStr);
//     });
//     let product = 1;
//     for (let i = 0; i < numbers.length; i++) {
//       product *= numbers[i];
//     }
//     return product;
// }
// let str = "1, 2, 3, 4, 5";
// console.log(productOfNumbers(str));  

//                21-SAVOL:
// function range(start, end) {
//     const result = [];
//     for (let i = start; i <= end; i++) {
//       result.push(i);
//     }
//     return result;
// }
// let start = 1
// let end = 5
// console.log(range(start, end))

//                22-SAVOL:
// function findFactors(num) {
//     const factors = [];
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) {
//         factors.push(i);
//       }
//     }
//     return factors;
// }
// let num = 12
// console.log(findFactors(num))


//                23-SAVOL:
// function replaceFirstLetter(text, oldLetter, newLetter) {
//     if (text.charAt(0).toLowerCase() === oldLetter.toLowerCase()) {
//         return newLetter + text.slice(1);
//     }
//     return text;
// }

// let text = "Hello World";
// let oldLetter = "H";
// let newLetter = "J";
// console.log(replaceFirstLetter(text, oldLetter, newLetter));


//                24-SAVOL:
// function removeDuplicates(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;
//         for (let j = 0; j < result.length; j++) {
//             if (arr[i] === result[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if (!isDuplicate) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// let testArray = [1,3,4,1,5,4,3];
// console.log(removeDuplicates(testArray));

// let testStringArray = ["key", 16,true,"key",null,false,true];
// console.log(removeDuplicates(testStringArray));

// function groupElements(arr) {
//     const result = [];
//     const uniqueElements = new Set(arr);

//     uniqueElements.forEach(element => {
//         const group = arr.filter(item => item === element);
//         result.push(group);
//     });

//     let  result1= []
//     result1.push(result)
//     return result1
// }

// let testArray = [7,1,3,4,1,5,4,3,3];
// console.log(groupElements(testArray));



