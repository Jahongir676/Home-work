// function numberSplit(num){
//     return [Math.floor(num/2),Math.ceil(num/2)]
// }
// const number = numberSplit(-9)
// console.log(number)

//                      2-SAVOL:
// function sumofCubes(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += Math.pow(arr[i],3)
//     }
//     return sum
// }
// const arr = []
// console.log(sumofCubes(arr))

//                      3-SAVOL:
// function minMax(arr){
//     let min = arr[0]
//     let max = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return [min,max]
// }
// const arr = [2334454, 5]
// console.log(minMax(arr)) 

//                      4-SAVOL:
// function FindPrimeNumber(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             return arr[i]
//         }
//     }
// }
// const arr = [4, 12, 42, 9,12, 3]
// console.log(FindPrimeNumber(arr))

//                      5-SAVOL:
// function increase(arr){
//     let result = 0
//     for(let i = 0; i < arr[1]; i++){
//         result += arr[0]
//     }
//     return result
// }
// const arr = [3, 4]
// console.log(increase(arr))

//                      6-SAVOL:
// function separateVowelsAndConsonants(arr) {
//     const vowels = 'aeiouAEIOU';
//     const result = [];

//     for (let word of arr) {
//         const wordVowels = [];
//         const wordConsonants = [];

//         for (let char of word) {
//             if (vowels.includes(char)) {
//                 wordVowels.push(char);
//             }
//         }
//         result.push(wordVowels);
//     }

//     return result;
// }
// const arr = ["Assalomu alaykum", "salom", "Najot ta'lim"];
// console.log(separateVowelsAndConsonants(arr));

//                          7-SAVOL:
// function formatPhoneNumber(arr) {
//     if (arr.length !== 10 || !arr.every(num => num >= 0 && num <= 9)) {
//         return "Invalid input";
//     }
//     return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
// }
// const phoneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(formatPhoneNumber(phoneNumbers));

//                          8-SAVOL:
// function spellOutWord(word) {
//     const result = [];
//     for (let i = 1; i <= word.length; i++) {
//         result.push(word.slice(0, i));
//     }
//     return result;
// }
// const word = "bee";
// console.log(spellOutWord(word));

//                          9-SAVOL:    
// function chatroomStatus(users) {
//     const count = users.length;
    
//     if (count === 0) {
//         return "no one online";
//     } else if (count === 1) {
//         return `${users[0]} online`;
//     } else if (count === 2) {
//         return `${users[0]} and ${users[1]} online`;
//     } else {
//         return `${users[0]}, ${users[1]} and ${count - 2} more online`;
//     }
// }
// console.log(chatroomStatus([]));
// console.log(chatroomStatus(["paRIE_to"]));
// console.log(chatroomStatus(["s234f", "mailbox2"]));
// console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));
//                          10-SAVOL:
// function countTrue(arr) {
//     return arr.filter(Boolean).length;
// }

// console.log(countTrue([true, false, false, true, false]));

//                          11-SAVOL:
// function tubSonlarniTopish(arr) {
//     function tubSonmi(num) {
//         if (num < 2) return false;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     }

//     return arr.filter(tubSonmi);
// }
// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(tubSonlarniTopish(sonlar));

//                          12-SAVOL:
// function arrayMultiplier(arr) {
//     return function(num) {
//         return arr.map(item => item * num);
//     };
// }
// const myArray = [1, 2, 3, 4, 5];
// const multiply = arrayMultiplier(myArray);
// console.log(multiply(2));
// console.log(multiply(3));
// console.log(multiply(5));

//                          13-SAVOL:
// function topilmaganRaqam(raqamlar) {
//     const n = raqamlar.length;
//     const kutilganYigindi = (n * (n + 1)) / 2;
//     const haqiqiyYigindi = raqamlar.reduce((sum, num) => sum + num, 0);
//     return kutilganYigindi - haqiqiyYigindi;
// }
// console.log(topilmaganRaqam([9,6,4,2,3,5,7,0,1]));