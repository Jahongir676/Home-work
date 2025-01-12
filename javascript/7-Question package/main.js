const {filterArray,sortArray} = require('./src/index.js');
const {convertToASCII,changeCase} = require('./stringOperations/index.js')
function main() {
  const arr = [5, 2, 8, 1, 9, 3];
  console.log("Original array:", arr);

  const filteredArray = filterArray(arr, (num) => num % 2 === 0);
  console.log("Filtered array (even numbers):", filteredArray);


  const sortedArray = sortArray(arr);

  console.log("Sorted array (ascending):", sortedArray);


  const str = "Hello, World!";

  console.log("Original string:", str);

  const asciiString = convertToASCII(str);

  console.log("ASCII representation:", asciiString);

  
  const changedCaseString = changeCase(str, "upper");

  console.log("Changed case string:", changedCaseString);
}
main();