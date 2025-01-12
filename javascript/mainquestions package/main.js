// class CaesarCipher {
//   constructor(shift) {
//     this.shift = shift % 26;
//   }
//   encode(text) {
//     return this.processText(text, this.shift);
//   }
//   decode(text) {
//     return this.processText(text, -this.shift);
//   }
//   processText(text, shift) {
//     return text.split('').map(char => this.shiftChar(char, shift)).join('');
//   }
//   shiftChar(char, shift) {
//     if (!char.match(/[a-zA-Z]/)) return char;
//     const code = char.charCodeAt(0);
//     const isUpperCase = code >= 65 && code <= 90;
//     const baseCode = isUpperCase ? 65 : 97;
//     return String.fromCharCode((code - baseCode + shift + 26) % 26 + baseCode);
//   }
// }
// const c = new CaesarCipher(5);
// console.log(c.encode('Codewars'));
// console.log(c.decode('BFKKQJX'));

//                                                  2-SAVOL:
global.globalVariable = "Hello from global";
module.exports = {globalVariable};

//                                                  3-SAVOL:
// const args = process.argv.slice(2);
// if (args.length !== 3) {
//   console.log("Xato: Uchta argument kiritilishi kerak (son1 amal son2)");
//   process.exit(1);
// }
// const num1 = parseFloat(args[0]);
// const operator = args[1];
// const num2 = parseFloat(args[2]);
// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Xato: Kiritilgan sonlar to'g'ri formatda emas");
//   process.exit(1);
// }
// let result;
// switch (operator) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     if (num2 === 0) {
//       console.log("Xato: Nolga bo'lish mumkin emas");
//       process.exit(1);
//     }
//     result = num1 / num2;
//     break;
//   default:
//     console.log("Xato: Noto'g'ri amal belgisi kiritildi");
//     process.exit(1);
// }
// console.log(`Natija: ${result}`);

//                                                  4-SAVOL:
// const os = require('os');

// const args = process.argv.slice(2);

// if (args.length === 0 || args[0] !== 'check-memory') {
//   console.log("No command provided");
//   process.exit(1);
// }
// if (args[0] === 'check-memory') {
//   const freeMemoryBytes = os.freemem();
//   const freeMemoryMB = Math.round(freeMemoryBytes / (1024 * 1024));
//   const freeMemoryGB = (freeMemoryBytes / (1024 * 1024 * 1024)).toFixed(2);

//   console.log(`Free memory: ${freeMemoryMB} MB`);
//   console.log(`Free memory: ${freeMemoryGB} GB`);
// }
//                                                  5-SAVOL:
// const getSystemInfo = require('./index.js');
// async function main() {
//   try {
//     const systemInfo = await getSystemInfo();
//     console.log('Tizim ma\'lumotlari:');
//     console.log('Bo\'sh xotira:', systemInfo.freeMemory);
//     console.log('Jarayon ma\'lumotlari:', systemInfo.processInfo);
//     console.log('Tizim ish vaqti:', systemInfo.uptime);
//   } catch (error) {
//     console.error('Xatolik yuz berdi:', error.message);
//   }
// }
// main();
