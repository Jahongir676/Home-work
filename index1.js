//              1-MISOL:
// let num = 1 //bu yerda let keybordan foydalanib valuesi number bolgan ozgaruvchi ozchyapmiz
// const  num1 = 2 //bu yerda ozgarmas qiymat yani const ochyapmiz
// var num2 = 2 //bu yerda esa var keybordidan foydalanib number valuesiga ega o'zgaruvchi ochdik
// num1 = 4 //bu yerda hato beradi chunki biz javascripda bu ozgaruvchini const yani ozgarmas qiymat dep ochganmiz
// num = num1 //bu yerda biz num ozgaruvchini qiymatini num1 ozgaruvchisi qiymatiga tenglab qoydik
// num2 = num //bu yerda biz num2 ozgaruvchisi qiymatini num ozgaruvchisining qiymatiga tenglab qoydik
// console.log(num,num1,num2) //bu yerda biz console.log orqali num,num1,num2 ozgaruvchilarini chiqarib berdik

//              2-MISOL:
// let num = 1 //bu yerda let keybordan foydalanib valuesi number bolgan ozgaruvchi ozchyapmiz
// let str = '1' // bu yerda esa string qiymatiga ega ozgaruvchi ochdik
// let result = num + str //bu yerda biz num ozgaruvchisini str ozgaruvchisiga qoshib result ozgaruvchisiga yozib qoydik
// console.log(result) //bu yerda biz console.log orqali result ozgaruvchisini chiqarib berdik

//              3-MISOL:
// let num = 1 //bu yerda let keybordan foydalanib valuesi number bolgan ozgaruvchi ozchyapmiz
// let strNum= num.toString() //bu yerda biz num ozgaruvchisini string qiymatiga ozgarish uchun toString() metodidan foydalandik va strNum ozgaruvchisiga yozib qoydik
// console.log(typeof strNum) //bu yerda biz console.log orqali strNum ozgaruvchisini typeni chiqarib berdik
// let bollean = Boolean(num) //bu yerda biz num ozgaruvchisini boolean qiymatiga ozgarish uchun Boolean() metodidan foydalandik va bollean ozgaruvchisiga yozib qoydik
// console.log(typeof bollean) //bu yerda biz console.log orqali bollean ozgaruvchisini typeni chiqarib berdik

//              4-MISOL:
// let undefi //bu yerda let keybordan foydalanib undefiend bolgan ozgaruvchi ozchyapmiz
// let str = '1' //bu yerda esa string qiymatiga ega ozgaruvchi ochdik
// undefi = str //bu yerda biz undefi ozgaruvchisini str ozgaruvchisiga tenglab qoydik
// console.log(undefi) //bu yerda biz console.log orqali undefi ozgaruvchisini chiqarib berdik

//              5-MISOL:
// let str = "10";
// let num = Number(str); // stringni raqamga o'zgartirish
// console.log(num + 5); // 15

//              6-MISOL:
// let str2 = "10";
// let result = str2 + 5; // "10" + 5 = "105"
// console.log(result); // "105"

//              7-MISOL:
// let text = "hello";
// let upperText = text.toUpperCase(); // Katta harflarga o'zgartirish
// console.log(upperText); // "HELLO"
// let combined = upperText + 123;
// console.log(combined); // "HELLO123"

//              8-MISOL:
// let numberVar = 20;
// let stringVar = "Hello";
// let boolVar = true;

// // Raqamni stringga o'zgartirish
// let numToStr = String(numberVar);
// console.log(numToStr); // "20"

// // Stringni raqamga o'zgartirish
// let strToNum = Number(stringVar); // NaN (Not a Number)
// console.log(strToNum); // NaN

// // Booleanni raqamga o'zgartirish
// let boolToNum = Number(boolVar); // true => 1
// console.log(boolToNum); // 1

//              9-MISOL:
// let mixedString = "123abc";
// let parsedNum = parseInt(mixedString); // "123abc" => 123
// console.log(parsedNum + 10); // 133

//              10-MISOL:
// const PI = 3.14;
// PI = 3.14159; // Bu xato beradi, const qiymati o'zgartirilmaydi o'zgartirilsa const kerak bolmay qoladi

//              11-MISOL:
// let input1 = prompt("Birinchi raqamni kiriting:");
// let input2 = prompt("Ikkinchi raqamni kiriting:");

// let num1 = Number(input1);
// let num2 = Number(input2);

// let sum = num1 + num2;
// console.log("Yig'indi: " + String(sum)); // Yig'indini string shaklida chiqarish

//              12-MISOL:
// let str3 = "15";
// let bool3 = true;
// let num3 = 5;

// let result1 = str3 + bool3; // "15" + true = "15true"
// let result2 = str3 - num3; // "15" - 5 = 10

// console.log(result1); // "15true"
// console.log(result2); // 10

//              13-MISOL:
// let boolVal1 = true;
// let boolVal2 = false;

// // Booleanni raqamga o'zgartirish
// let boolToNum1 = Number(boolVal1); // true => 1
// let boolToNum2 = Number(boolVal2); // false => 0

// console.log(boolToNum1); // 1
// console.log(boolToNum2); // 0

// // Booleanni stringga o'zgartirish
// let boolToStr1 = String(boolVal1); // true => "true"
// let boolToStr2 = String(boolVal2); // false => "false"

// console.log(boolToStr1); // "true"
// console.log(boolToStr2); // "false"

//              14-MISOL:
// "15" + true
// let result1 = "15" + true; // "15true"

// // "text" - 3
// let result2 = "text" - 3; // NaN

// // 10 + false
// let result3 = 10 + false; // 10 (false converts to 0)

// // true + "5"
// let result4 = true + "5"; // "true5"

// // "20" * true
// let result5 = "20" * true; // 20 (true converts to 1)

// // "text" + null
// let result6 = "text" + null; // "textnull"

// // 10 / undefined
// let result7 = 10 / undefined; // NaN

// // null + 5
// let result8 = null + 5; // 5 (null converts to 0)

//              15-MISOL:      
// let str = "123";
// let num = 456;

// // Stringni raqamga o'zgartirish
// let strToNum = Number(str);
// console.log(strToNum); // 123

// // Raqamni stringga o'zgartirish
// let numToStr = String(num);
// console.log(numToStr); // "456"

//              16-MISOL:
// let result = "text" + 123; // "text123"
// let result = "123" - 10; // 113
// let result = "text" - 10; // NaN
// let result = "10" * 2; // 20
// let result = "5" / 2; // 2.5

//              17-MISOL:
// Har xil turlardagi o'zgaruvchilar
// let num = 10;
// let str = "5";
// let bool = true;
// let nullVar = null;
// let undefinedVar;

// // 1. Raqam va string qo'shish
// let result1 = num + str; // 10 + "5" => "105"
// console.log(result1); // "105"

// // Stringni raqamga o'zgartirish va keyin qo'shish
// let result2 = num + Number(str); // 10 + 5 => 15
// console.log(result2); // 15

// // 2. Raqam va boolean qo'shish
// let result3 = num + bool; // 10 + true => 10 + 1 = 11
// console.log(result3); // 11

// // Booleanni stringga o'zgartirish va biriktirish
// let result4 = String(bool) + str; // "true" + "5" => "true5"
// console.log(result4); // "true5"

// // 3. Stringni raqamdan ayirish
// let result5 = str - num; // "5" - 10 => 5 - 10 = -5
// console.log(result5); // -5

// // 4. Raqam va null bilan qo'shish
// let result6 = num + nullVar; // 10 + null => 10 + 0 = 10
// console.log(result6); // 10

// // 5. Raqam va undefined bilan operatsiya
// let result7 = num + undefinedVar; // 10 + undefined => NaN
// console.log(result7); // NaN

// // 6. Stringni booleanga qo'shish
// let result8 = str + bool; // "5" + true => "5true"
// console.log(result8); // "5true"

// // 7. Booleanni raqamga o'zgartirib ko'paytirish
// let result9 = num * Number(bool); // 10 * 1 => 10
// console.log(result9); // 10

// // 8. Stringni raqamga aylantirib, boolean qo'shish
// let result10 = Number(str) + bool; // 5 + true => 5 + 1 = 6
// console.log(result10); // 6

// // 9. Undefinedni stringga o'zgartirish va biriktirish
// let result11 = String(undefinedVar) + str; // "undefined" + "5" => "undefined5"
// console.log(result11); // "undefined5"

//              18-MISOL:
// let nullValue = null;
// let undefinedValue = undefined;

// // 1. null va undefined bilan qo'shish
// let addResult = nullValue + undefinedValue; // NaN
// console.log("null + undefined:", addResult);

// // 2. null va undefined bilan arifmetik amallar
// let subtractResult = nullValue - 5; // -5
// console.log("null - 5:", subtractResult);

// let multiplyResult = undefinedValue * 10; // NaN
// console.log("undefined * 10:", multiplyResult);

// let divideResult = nullValue / 2; // 0
// console.log("null / 2:", divideResult);

// // 3. null va undefined bilan string qo'shish
// let stringAddResult = nullValue + "text"; // "nulltext"
// console.log("null + 'text':", stringAddResult);

// let undefinedStringAddResult = undefinedValue + "text"; // "undefinedtext"
// console.log("undefined + 'text':", undefinedStringAddResult);

// // 4. null va undefined qiymatlarini Number() va String() bilan o'zgartirish
// let numberNull = Number(nullValue); // 0
// let numberUndefined = Number(undefinedValue); // NaN
// console.log("Number(null):", numberNull);
// console.log("Number(undefined):", numberUndefined);

// let stringNull = String(nullValue); // "null"
// let stringUndefined = String(undefinedValue); // "undefined"
// console.log("String(null):", stringNull);
// console.log("String(undefined):", stringUndefined);

// // 5. null va undefined bilan boolean amallar
// let booleanNull = Boolean(nullValue); // false
// let booleanUndefined = Boolean(undefinedValue); // false
// console.log("Boolean(null):", booleanNull);
// console.log("Boolean(undefined):", booleanUndefined);

//              19-MISOL:
// O'zgaruvchilar
// let num = 42;
// let str = "58";

// // 1. Stringni raqamga o'zgartirish va matematik amal
// let strToNum = Number(str); // "58" => 58
// let sumResult = num + strToNum; // 42 + 58 => 100
// console.log("Stringni raqamga o'zgartirib qo'shish:", sumResult);

// // 2. Raqamni stringga o'zgartirish va string amal
// let numToStr = String(num); // 42 => "42"
// let concatenationResult = numToStr + str; // "42" + "58" => "4258"
// console.log("Raqamni stringga o'zgartirib qo'shish:", concatenationResult);

// // 3. Raqam va stringni arifmetik amalda ishlatish
// let stringSubtractionResult = Number(str) - num; // 58 - 42 => 16
// console.log("Stringni raqamga o'zgartirib ayirish:", stringSubtractionResult);

// // 4. String va raqamni arifmetik amalda ishlatish
// let numToStrConcat = num + str; // 42 + "58" => "4258"
// console.log("Raqamni string bilan qo'shish:", numToStrConcat);

// // 5. Raqamni stringga o'zgartirish va matematik amal
// let strToNumMultiplication = Number(numToStr) * 2; // 42 * 2 => 84
// console.log("Stringni raqamga o'zgartirib ko'paytirish:", strToNumMultiplication);

// // 6. Stringni raqamga o'zgartirish va bo'lish
// let strDivisionResult = strToNum / 2; // 58 / 2 => 29
// console.log("Stringni raqamga o'zgartirib bo'lish:", strDivisionResult);

//                20-MISOL:
// O'zgaruvchilar
// let num = 30;
// let str = "20";

// // 1. Stringni raqamga o'zgartirish va qo'shish
// let strToNum = Number(str); // "20" => 20
// let additionResult = num + strToNum; // 30 + 20 => 50
// console.log("Stringni raqamga o'zgartirib qo'shish:", additionResult);

// // 2. Stringni raqamga o'zgartirish va ayirish
// let subtractionResult = strToNum - num; // 20 - 30 => -10
// console.log("Stringni raqamga o'zgartirib ayirish:", subtractionResult);

// // 3. Stringni raqamga o'zgartirish va ko'paytirish
// let multiplicationResult = strToNum * 2; // 20 * 2 => 40
// console.log("Stringni raqamga o'zgartirib ko'paytirish:", multiplicationResult);

// // 4. Stringni raqamga o'zgartirish va bo'lish
// let divisionResult = strToNum / 2; // 20 / 2 => 10
// console.log("Stringni raqamga o'zgartirib bo'lish:", divisionResult);

// // 5. String va raqamni birlashtirib qo'shish
// let concatenationResult = str + num; // "20" + 30 => "2030"
// console.log("String va raqamni birlashtirib qo'shish:", concatenationResult);

//                  21-MISOL:
// let userInput = prompt("Iltimos, raqam kiriting:");
// // Foydalanuvchi inputini raqamga o'zgartirish
// let number = Number(userInput);

// // Agar kiritilgan qiymat raqam bo'lmasa
// while (isNaN(number)) {
// alert("Xato! Iltimos, haqiqiy raqam kiriting.");
// userInput = prompt("Iltimos, raqam kiriting:");
// number = Number(userInput);
// console.log("Kiritilgan raqam:", number);

//                  22-MISOL:
// O'zgaruvchilar
// let str = "10";
// let bool = true;
// let num = 5;

// // 1. Stringni raqamga o'zgartirib ayirish
// let stringMinusBoolean = Number(str) - bool; // 10 - 1 => 9
// console.log("Stringni raqamga o'zgartirib ayirish:", stringMinusBoolean);

// // 2. Booleanni raqamga o'zgartirib ko'paytirish
// let booleanTimesNumber = Number(bool) * num; // 1 * 5 => 5
// console.log("Booleanni raqamga o'zgartirib ko'paytirish:", booleanTimesNumber);

// // 3. String va boolean qo'shish
// let stringPlusBoolean = str + bool; // "10" + true => "10true"
// console.log("String va boolean qo'shish:", stringPlusBoolean);

// // 4. Boolean va stringni raqamga o'zgartirib bo'lish
// let booleanDividedByString = Number(bool) / Number(str); // 1 / 10 => 0.1
// console.log("Boolean va stringni raqamga o'zgartirib bo'lish:", booleanDividedByString);

// // 5. Booleanni stringga o'zgartirib qo'shish
// let booleanToStringPlusNumber = String(bool) + num; // "true" + 5 => "true5"
// console.log("Booleanni stringga o'zgartirib qo'shish:", booleanToStringPlusNumber);

// // 6. String va raqamni ko'paytirish
// let stringTimesNumber = Number(str) * num; // 10 * 5 => 50
// console.log("Stringni raqamga o'zgartirib ko'paytirish:", stringTimesNumber);

//                  23-MISOL:
// Foydalanuvchidan ma'lumot olish
// let userInput = prompt("Iltimos, ma'lumot kiriting:");
// // Ma'lumot turini aniqlash
// let typeOfInput = typeof userInput;
// // Natijani konsolga chiqarish
// if (typeOfInput === "string") {
//     // Stringlarni raqam sifatida tekshirish
//     let numberInput = Number(userInput);
//     if (!isNaN(numberInput)) {
//         console.log("Siz raqam kiritdingiz:", numberInput);
//     } else {
//         console.log("Siz matn kiritdingiz:", userInput);
//     }
// } else {
//     console.log("Kiritilgan qiymat:", userInput, "Turi:", typeOfInput);
// }

//                  24-MISOL:
// O'zgaruvchi
// let mixedString = "123abc";

// // Raqamlarni ajratib olish
// let numbersOnly = mixedString.replace(/\D/g, ''); // "123" (faqat raqamlar qoldiriladi)
// let number = Number(numbersOnly); // 123

// // Matnlarni ajratib olish
// let textOnly = mixedString.replace(/\d/g, ''); // "abc" (faqat matn qoldiriladi)

// // Matematik operatsiyalar
// let resultAdd = number + 10; // 123 + 10 => 133
// let resultMultiply = number * 2; // 123 * 2 => 246

// // Natijalarni chiqarish
// console.log("Raqamlar:", number);
// console.log("Matn:", textOnly);
// console.log("Raqamga 10 qo'shish:", resultAdd);
// console.log("Raqamni 2 ga ko'paytirish:", resultMultiply);

//                  25-MISOL:
// O'zgaruvchilar
// let nullValue = null;
// let undefinedValue = undefined;
// let nanValue = NaN;

// // 1. null va undefined bilan qo'shish
// let addNullUndefined = nullValue + undefinedValue; // NaN
// console.log("null + undefined:", addNullUndefined);

// // 2. null va NaN bilan qo'shish
// let addNullNaN = nullValue + nanValue; // NaN
// console.log("null + NaN:", addNullNaN);

// // 3. undefined va NaN bilan qo'shish
// let addUndefinedNaN = undefinedValue + nanValue; // NaN
// console.log("undefined + NaN:", addUndefinedNaN);

// // 4. null va raqam bilan qo'shish
// let addNullNumber = nullValue + 10; // 0 + 10 => 10
// console.log("null + 10:", addNullNumber);

// // 5. undefined va raqam bilan qo'shish
// let addUndefinedNumber = undefinedValue + 10; // NaN
// console.log("undefined + 10:", addUndefinedNumber);

// // 6. NaN va raqam bilan qo'shish
// let addNaNNumber = nanValue + 10; // NaN
// console.log("NaN + 10:", addNaNNumber);

// // 7. null va raqam bilan ko'paytirish
// let multiplyNullNumber = nullValue * 10; // 0 * 10 => 0
// console.log("null * 10:", multiplyNullNumber);

// // 8. undefined va raqam bilan ko'paytirish
// let multiplyUndefinedNumber = undefinedValue * 10; // NaN
// console.log("undefined * 10:", multiplyUndefinedNumber);

// // 9. NaN va raqam bilan ko'paytirish
// let multiplyNaNNumber = nanValue * 10; // NaN
// console.log("NaN * 10:", multiplyNaNNumber);

// // 10. null va raqam bilan bo'lish
// let divideNullNumber = nullValue / 10; // 0 / 10 => 0
// console.log("null / 10:", divideNullNumber);

// // 11. undefined va raqam bilan bo'lish
// let divideUndefinedNumber = undefinedValue / 10; // NaN
// console.log("undefined / 10:", divideUndefinedNumber);

// // 12. NaN va raqam bilan bo'lish
// let divideNaNNumber = nanValue / 10; // NaN
// console.log("NaN / 10:", divideNaNNumber);

//                  26-MISOL:
// O'zgaruvchilar
// let number = 42;         // Raqam
// let text = "10";         // String
// let bool = false;        // Boolean

// // 1. Raqamni stringga aylantirib qo'shish
// let numberToString = String(number); // "42"
// let resultAddString = numberToString + text; // "42" + "10" => "4210"
// console.log("Raqamni stringga aylantirib qo'shish:", resultAddString);

// // 2. Stringni raqamga aylantirib qo'shish
// let textToNumber = Number(text); // 10
// let resultAddNumber = number + textToNumber; // 42 + 10 => 52
// console.log("Stringni raqamga aylantirib qo'shish:", resultAddNumber);

// // 3. Booleanni raqamga aylantirib qo'shish
// let boolToNumber = Number(bool); // 0
// let resultAddBoolean = number + boolToNumber; // 42 + 0 => 42
// console.log("Booleanni raqamga aylantirib qo'shish:", resultAddBoolean);

// // 4. Booleanni stringga aylantirib qo'shish
// let boolToString = String(bool); // "false"
// let resultAddBoolString = text + boolToString; // "10" + "false" => "10false"
// console.log("Booleanni stringga aylantirib qo'shish:", resultAddBoolString);

// // 5. Raqamni string bilan ko'paytirish
// let resultMultiplyString = number * textToNumber; // 42 * 10 => 420
// console.log("Raqamni string bilan ko'paytirish:", resultMultiplyString);

// // 6. Booleanni raqam bilan ko'paytirish
// let resultMultiplyBoolean = number * boolToNumber; // 42 * 0 => 0
// console.log("Booleanni raqam bilan ko'paytirish:", resultMultiplyBoolean);

// // 7. Raqamni boolean bilan bo'lish
// let resultDivideBoolean = number / boolToNumber; // 42 / 0 => Infinity (bo'lish mumkin emas)
// console.log("Raqamni boolean bilan bo'lish:", resultDivideBoolean);


//                  27-MISOL:
// O'zgaruvchi
// let complexString = "abc123def456ghi789";

// // Stringni bo'lish (slice) va qismlarini ajratib olish (substring)
// let part1 = complexString.slice(3, 6); // "123"
// let part2 = complexString.substring(9, 12); // "456"
// let part3 = complexString.slice(-3); // "789"

// // Raqamlarni ajratib olish
// let number1 = Number(part1); // 123
// let number2 = Number(part2); // 456
// let number3 = Number(part3); // 789

// // Matematik operatsiyalar
// let sum = number1 + number2 + number3; // 123 + 456 + 789 => 1368
// let product = number1 * number2 * number3; // 123 * 456 * 789 => 45608484

// // Natijalarni chiqarish
// console.log("Qismlar:", part1, part2, part3);
// console.log("Raqamlar:", number1, number2, number3);
// console.log("Yig'indi:", sum);
// console.log("Ko'paytma:", product);

//                  28-MISOL:
// Foydalanuvchidan matn kiritishni so'rang
// let userInput = prompt("Iltimos, raqam kiriting:");
// // Kiritilgan matnni raqamga aylantirish
// let number = Number(userInput);
// // Agar kiritilgan matn raqam bo'lsa, matematik amallar bajariladi
// if (!isNaN(number) && userInput.trim() !== "") {
//     // Matematik amallar
//     let resultAdd = number + 10; // Misol uchun: raqamga 10 qo'shish
//     let resultMultiply = number * 2; // Misol uchun: raqamni 2 ga ko'paytirish
    
//     console.log("Kiritilgan raqam:", number);
//     console.log("Raqamga 10 qo'shish:", resultAdd);
//     console.log("Raqamni 2 ga ko'paytirish:", resultMultiply);
// } else {
//     // Agar kiritilgan matn raqam bo'lmasa, qayta so'rov yuborish
//     console.log("Xato: Iltimos, haqiqiy raqam kiriting.");
//     getNumberFromUser(); // Rekursiya orqali qayta so'rov
// }

//                  29-MISOL:
// Boshlang'ich o'zgaruvchi
// let variable = "42"; // Boshlang'ich qiymat: string

// // Stringdan raqamga aylantirish
// let toNumber = Number(variable); // 42
// console.log("Stringdan raqamga aylantirish:", toNumber);
// console.log("Turi:", typeof toNumber); // 'number'

// // Raqamni boolean qiymatiga aylantirish
// let toBoolean = Boolean(toNumber); // true
// console.log("Raqamni boolean qiymatiga aylantirish:", toBoolean);
// console.log("Turi:", typeof toBoolean); // 'boolean'

// // Boolean qiymatni stringga aylantirish
// let toString = String(toBoolean); // "true"
// console.log("Boolean qiymatni stringga aylantirish:", toString);
// console.log("Turi:", typeof toString); // 'string'

// // Boolean qiymatni raqamga aylantirish
// let toNumberFromBoolean = Number(toBoolean); // 1
// console.log("Boolean qiymatni raqamga aylantirish:", toNumberFromBoolean);
// console.log("Turi:", typeof toNumberFromBoolean); // 'number'

// // Raqamni stringga qayta aylantirish
// let backToString = String(toNumberFromBoolean); // "1"
// console.log("Raqamni stringga qayta aylantirish:", backToString);
// console.log("Turi:", typeof backToString); // 'string'

// // Raqamni boolean qiymatiga aylantirish
// let finalBoolean = Boolean(toNumberFromBoolean); // true
// console.log("Raqamni boolean qiymatiga aylantirish:", finalBoolean);
// console.log("Turi:", typeof finalBoolean); // 'boolean'

//                  30-MISOL:
// O'zgaruvchilar
// let stringValue = "15";   // String
// let numberValue = 5;      // Raqam
// let booleanValue = true;  // Boolean
// let textValue = "text";   // String

// // 1. String va raqamni biriktirish
// let resultConcat = stringValue + numberValue; // "15" + 5 => "155"
// console.log("String va raqamni biriktirish:", resultConcat);

// // 2. Stringdan raqamga aylantirib qo'shish
// let resultSubtraction = Number(stringValue) - numberValue; // 15 - 5 => 10
// console.log("Stringdan raqamga aylantirib qo'shish:", resultSubtraction);

// // 3. Boolean qiymatni string bilan qo'shish
// let resultBooleanConcat = booleanValue + textValue; // true + "text" => "truetext"
// console.log("Boolean qiymatni string bilan qo'shish:", resultBooleanConcat);

// // 4. Boolean qiymatni raqamga aylantirib qo'shish
// let resultBooleanToNumber = Number(booleanValue) + numberValue; // 1 + 5 => 6
// console.log("Boolean qiymatni raqamga aylantirib qo'shish:", resultBooleanToNumber);

// // 5. Raqamni string bilan qo'shish
// let resultNumberConcat = numberValue + textValue; // 5 + "text" => "5text"
// console.log("Raqamni string bilan qo'shish:", resultNumberConcat);

// // 6. Raqamni stringga aylantirib qo'shish
// let resultStringToNumber = Number(textValue) + numberValue; // NaN + 5 => NaN
// console.log("Stringni raqamga aylantirib qo'shish:", resultStringToNumber);

// // 7. Boolean qiymatni stringga aylantirib qo'shish
// let resultBooleanToString = String(booleanValue) + textValue; // "true" + "text" => "truetext"
// console.log("Boolean qiymatni stringga aylantirib qo'shish:", resultBooleanToString);

