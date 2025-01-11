//                  1-SAVOL:
// let num = Number(prompt("Enter a positive number: "))
// if (num >= 100){
//     alert("Tog'")
// } else {
//     alert("Tekis") 
// }

//                  2-SAVOL:
// let num = Number(prompt("Enter a positive number: "))
// if (num % 2 === 0){
//     alert("Juft")
// } else {
//     alert("Toq")
// }

//                  3-SAVOL:
// let num = Number(prompt("Enter a number betwen 1 and 5: "))
// switch(num){
    //     case 1:
//         alert("Qoniqarli")
//     break;
//     case 2:
//         alert("Qoniqarli")
//     break;
//     case 3:
//         alert("Qoniqarli")
//     break;
//     case 4:
//         alert("Yaxshi")
//     break;
//     case 5:
//         alert("ALo")
//     break;
//     default:
//         alert("Iltimos 1 va 5 sonlari orasidagi sonlarni kiriting!")
// }

//                  4-SAVOL:
// let num = Number(prompt("Enter a number betwen 1 and 12: "))
// switch(num){
    //     case 1:
//     case 2:
//         alert("Qish")
//     break;
//     case 3:
//     case 4:
//     case 5:
//         alert("Bahor")
//     break;
//     case 6:
//     case 7:
//     case 8:
//         alert("Yoz")
//     break;
//     case 9:
//     case 10:
//     case 11:
//         alert("Kuz")
//     break;
//     case 12:
//         alert("Qish")
//     break;
//     default:
//         alert("Iltimos 1 va 12 sonlari orasidagi sonlarni kiriting!")
//         break;
// }

//                  5-SAVOL:
// let num1 = Number(prompt("Enter a number 1: "))
// let num2 = Number(prompt("Enter a number 2: "))
// if (num1 !== num2){
//     alert("Har xil sonlar")
// } else{
//     alert("Bir xil sonlar")
// }

//                  6-SAVOL:
// let num = prompt("Enter a number like(123) this: ")
// let reversed = +num.split("").reverse().join("")
// alert(reversed)

//                  7-SAVOL:
// let num1 = Number(prompt("Enter a number 1: "))
// let num2 = Number(prompt("Enter a number 2: "))
// if (num1 % num2 === 0){
//     alert("Bo'linadi")
// } else {
//     alert("Bo'linmaydi")
// }

//                  8-SAVOL:
// let num = Number(prompt("Enter a number betwen 0 and 24: "))
// if (num >= 9 && num <= 18){
//     alert("Ish vaqti")
// }else{
//     alert("Dam olish vaqti")
// }

//                  9-SAVOL:
// for(let i = 1; i<= 10; i++){
//     console.log(i)
// }

//                  10-SAVOL:
// for(let i = 1; i<= 20; i++){
//     if (i % 2 ===0){
//         console.log(i)
//     }
// }

//                  11-SAVOL:
// for (let i = 1; i<=100; i++){
//     if (i * i * i >= 100){
//         console.dog(i * i * i)
//     }
// }

//                  12-SAVOL:
// for (let i = 1; i<= 50; i++){
//     if (i % 5 === 0){
//         console.log(i)
//     }
// }   

//                  13-SAVOL:
// let num = Number(prompt("Enter a number: "))
// for (let i = 1; i<= num; i++){
//     console.log(num)
// }

//                  14-SAVOL:
// let num1 = Number(prompt("Enter a number 1: "))
// let num2 = Number(prompt("Enter a number 2: "))
// let result = num1 + num2
// console.log(result)

//                  15-SAVOL:
// let uname = prompt("Pleace enter your name: ")
// let reversed = uname.split("").reverse().join("")
// console.log(reversed)

//                  16-SAVOL:
// let num1 = Number(prompt("Enter a number 1: "))
// let num2 = Number(prompt("Enter a number 2: "))
// let num3 = Number(prompt("Enter a number 3: "))
// if (num1 > num2 && num1 > num3){
//     alert(num1)
// }else if (num2 > num1 && num2 > num3){
//     alert(num2)
// }else if (num3 > num1 && num3 > num2){
//     alert(num3)
// }

//                  17-SAVOL:
// let num = prompt("Son kiriting: ")
// let str = toString(num)
// for (let i = 0; i < str.length; ){
//     console.log(+str[i])
// }

//                  18-SAVOL:
// let a = 0, b = 1, next;

// console.log(a);
// console.log(b);

// for (let i = 2; i < 10; i++) {
//     next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
// }

//                  19-SAVOL:
// let uname = prompt("Iltimos ismingizni kiriting: ")
// let usurname = prompt("Iltimos familiyangizni kiriting: ")
// let bol = true
// for (let i = 0; i < uname.length; i++){
//     if (uname[i] !== usurname[i]){
//         bol = false
//     }
// }
// if (bol){
//     console.log("Ism va familiyangiz bir xil")
// } else {
//     console.log("Har xil")
// }

//                  20-MASOL:
// let num1 = Number(prompt("Enter a number: "))
// let num2 = Number(prompt("Enter a number: "))
// let sym = prompt("Enter a symbol like this(+ - * %): ")
// if (sym === "+"){
//     console.log(num1 + num2)
// }else if (sym === "-"){
//     console.log(num1 - num2)
// }else if (sym === "*"){
//     console.log(num1 * num2)
// }else if (sym === "%"){
//     console.log(num1 % num2)
// }

//                  21-SAVOL:
// let number = prompt("Iltimos, uch xonali son kiriting:");
// if (number.length === 3 && !isNaN(number)) {
//     let yuz = Math.floor(number / 100);       
//     let on = Math.floor((number % 100) / 10);
//     let bir = number % 10;                   

//     console.log("Yuzlar xonasi: " + yuz);
//     console.log("O'nliklar xonasi: " + on);
//     console.log("Birliklar xonasi: " + bir);

//     let sum = yuz + on + bir;
//     console.log("Raqamlar yig'indisi: " + sum);
// } else {
//     console.log("Iltimos, to'g'ri uch xonali son kiriting!");
// }

//                  22-SAVOL:
// let number = prompt("Iltimos, uch xonali son kiriting:");
// let yuz = Math.floor(number / 100);       
// let on = Math.floor((number % 100) / 10);
// let bir = number % 10;                   
// if(yuz % 2 === 0){
// console.log("Yuzlar xonasi: " + yuz);
// }
// if (on % 2 === 0){
// console.log("O'nliklar xonasi: " + on);
// }
// if (bir % 2 === 0){ 
// console.log("Birliklar xonasi: " + bir);
// }

//                  23-SAVOL:
// let base = Number(prompt("Iltimos, birinchi sonni kiriting:"));
// let exponent = Number(prompt("Iltimos, ikkinchi sonni kiriting:"));
// let result = Math.pow(base, exponent);
// console.log(`${base} ning ${exponent} darajasi: ${result}`);

//                  24-SAVOL:
// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// let num = Number(prompt("Iltimos, sonni kiriting:"));
// console.log(factorial(num));

//                  25-SAVOL:
// let input = prompt("Matn kiriting (raqamlar va harflar bo'lishi mumkin):");
// let raqamlar = input.replace(/\D/g, '');
// console.log("Matndagi raqamlar: " + raqamlar);

//                  26-SAVOL:
// let nums = Number(prompt("Iltimos sonlarni kiriting:"));
// let numberArray = Array.from(String(nums), Number);
// let counter = 0;
// for (let i = 0; i < numberArray.length; i++) {
//     console.log(numberArray[i]);
//     counter++;
// }
// console.log("Raqamlar soni: " + counter);

//                  27-SAVOL:
// let input = prompt("Son kiriting:");
// let digits = Array.from(String(input), Number);
// let result = [];
// for (let i = 1; i < digits.length; i++) {
//     result.push(digits[i-1] - digits[i]);
// }
// console.log("Raqamlar orasidagi ayirma: " + result.join(', '));

//                  28-SAVOL:
// let number = prompt("Son kiriting:");
// let stars = '*'.repeat(number);
// console.log(stars);

//                  29-SAVOL:
// function evenFactorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i += 2) {
//         result *= i;
//     }
//     return result;
// }
// function oddFactorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i += 2) {
//         result *= i;
//     }
//     return result;
// }
// let number = prompt("Son kiriting:");
// let evenFact = evenFactorial(number);
// let oddFact = oddFactorial(number);
// console.log("Juft faktorial: " + evenFact);
// console.log("Toq faktorial: " + oddFact);

//                  30-SAVOL:
// let firstNumber = prompt("Birinchi sonni kiriting:");
// let secondNumber = prompt("Ikkinchi sonni kiriting:");
// firstNumber = Number(firstNumber);
// secondNumber = Number(secondNumber);
// let difference = firstNumber - secondNumber;
// console.log("Ikkala sonning farqi: " + difference);

//                  31-SAVOL:
// let numbers = [];
// for (let i = 0; i < 5; i++) {
//     let number = prompt(`Son ${i + 1} ni kiriting:`);
//     numbers.push(Number(number));
// }
// let maxNumber = Math.max(...numbers);
// let minNumber = Math.min(...numbers);
// console.log("Eng katta son: " + maxNumber);
// console.log("Eng kichik son: " + minNumber);

//                  32-SAVOL:
// let text = prompt("Matn kiriting:");
// let words = text.split(' ');
// words.forEach(word => console.log(word));

//                  33-SAVOL:
// let number = prompt("Son kiriting:");
// let squareRoot = Math.sqrt(Number(number));
// console.log("Kvadrat ildiz: " + squareRoot);

//                  34-SAVOL:
// let input = prompt("Raqamlarni kiriting (qator qilib, bo'sh joy bilan ajrating):");
// let numbers = input.split(' ').map(Number);
// let positiveNumbers = numbers.filter(num => num > 0);
// console.log("Musbat raqamlar: " + positiveNumbers.join(' '));

//                  35-SAVOL:
// for (let i = 1; i <= 10; i++) {
//     console.log(i * i);
// }

//                  36-SAVOL:
// function gcd(a, b) {
//     while (b) {
//         [a, b] = [b, a % b];
//     }
//     return a;
// }
// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }
// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let ebob = gcd(num1, num2);
// let ekuk = lcm(num1, num2);
// console.log("EBOB: " + ebob);
// console.log("EKUK: " + ekuk);

// //                  37-SAVOL:
// let text = prompt("Matn kiriting:");
// let reversedText = text.split('').reverse().join('');
// console.log("Teskari matn: " + reversedText);

//                  38-SAVOL:
// let text = prompt("Matn kiriting:");
// let digits = text.replace(/\D/g, '');
// console.log("Matndagi raqamlar: " + digits);

//                  39-SAVOL:
// let input = prompt("Qator raqamlarni kiriting (bo'sh joy bilan ajrating):");
// let numbers = input.split(' ').map(Number);
// let maxDifference = Math.max(...numbers) - Math.min(...numbers);
// console.log("Eng katta farq: " + maxDifference);

//                  40-SAVOL:
// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let num3 = Number(prompt("Uchinchi sonni kiriting:"));
// let maxNumber = Math.max(num1, num2, num3);
// let minNumber = Math.min(num1, num2, num3);
// console.log("Eng katta son: " + maxNumber);
// console.log("Eng kichik son: " + minNumber);

//                  41-SAVOL:
// let expression = prompt("Matematik ifodani kiriting:");
// let result = eval(expression);
// console.log("Natija: " + result);

//                  42-SAVOL:
// let number = prompt("Ikki xonali son kiriting:");
// let swappedNumber = number.split('').reverse().join('');
// console.log("O'rni almashtirilgan son: " + swappedNumber);

//                  43-SAVOL:
// let text = prompt("Matn kiriting:");
// let numbers = text.match(/\d+/g).map(Number);
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("Raqamlarning yig'indisi: " + sum);

//                  44-SAVOL:
// let number;
// do {
//     number = prompt("Son kiriting:");
// } while (isNaN(number) || number.trim() === '');
// number = Number(number);
// console.log("Kiritilgan son: " + number);

//                    45-SAVOL:
// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let product = num1 * num2;
// console.log("Ko'paytma: " + product);

//                    46-SAVOL:
// let correctLogin = "user";
// let correctPassword = "pass";
// let login = prompt("Loginni kiriting:");
// let password = prompt("Parolni kiriting:");
// if (login === correctLogin && password === correctPassword) {
//     console.log("Kirish muvaffaqiyatli");
// } else {
//     console.log("Noto'g'ri login yoki parol");
// }

//                    47-SAVOL:
// const secretNumber = 7;
// let guess;
// do {
//     guess = Number(prompt("Sonni taxmin qiling:"));
//     if (guess !== secretNumber) {
//         console.log("Noto'g'ri. Iltimos, yana urinib ko'ring.");
//     }
// } while (guess !== secretNumber);
// console.log("Tabriklaymiz! Siz to'g'ri taxmin qildingiz.");

//                    48-SAVOL:
// let correctValue = "right";
// let userInput;
// do {
//     userInput = prompt("Qiymatni kiriting:");
//     if (userInput !== correctValue) {
//         console.log("Noto'g'ri qiymat. Iltimos, yana urinib ko'ring.");
//     }
// } while (userInput !== correctValue);
// console.log("To'g'ri qiymat kiritildi.");

//                    49-SAVOL:
// let input = prompt("Sonlar qatorini kiriting (bo'sh joy bilan ajrating):");
// let numbers = input.split(' ').map(Number);
// let maxNumber = Math.max(...numbers);
// let minNumber = Math.min(...numbers);
// let difference = maxNumber - minNumber;
// console.log("Eng katta va eng kichik sonlar orasidagi farq: " + difference);

//                    50-SAVOL:
// let number = Number(prompt("Sonni kiriting:"));
// if (isNaN(number)) {
//     console.log("Yaroqsiz qiymat kiritildi.");
// } else {
//     let parity = number % 2 === 0 ? 'juft' : 'toq';
//     let sign = number > 0 ? 'musbat' : number < 0 ? 'manfiy' : 'nol';

//     console.log("Son: " + number);
//     console.log("Paritet: " + parity);
//     console.log("Belgi: " + sign);
// }