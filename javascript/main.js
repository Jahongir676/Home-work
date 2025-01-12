// const fs = require('fs');

// function writeNumbers() {
//   let numbers = '';
//   for (let i = 0; i < 100; i++) {
//     numbers += Math.floor(Math.random() * 1000) + '\n';
//   }
//   fs.writeFileSync('sonlar.txt', numbers);
// }

// function readNumbers() {
//   const data = fs.readFileSync('sonlar.txt', 'utf8');
//   return data.trim().split('\n').map(Number);
// }

// writeNumbers();
// const numbersArray = readNumbers();
// console.log(numbersArray);

//                                                  2-SAVOL:
// const fs = require('fs');

// function writeNumbers() {
//   let numbers = '';
//   for (let i = 0; i < 100; i++) {
//     numbers += Math.floor(Math.random() * 100 + 1) + '\n';
//   }
//   fs.writeFileSync('sonlar.txt', numbers);
// }

// function readNumbers() {
//   const data = fs.readFileSync('sonlar.txt', 'utf8');
//   return data.trim().split('\n').map(Number);
// }

// writeNumbers();
// const numbersArray = readNumbers();
// console.log(numbersArray);

//                                                  3-SAVOL:
// const fs = require('fs');
// const path = require('path');

// const dirName = 'my_nodejs_files';
// fs.mkdirSync(dirName, { recursive: true });

// const fileName = 'hello_world.txt';
// const filePath = path.join(dirName, fileName);
// fs.writeFileSync(filePath, 'Hello, world!');

// const fileContent = fs.readFileSync(filePath, 'utf8');
// console.log('Fayl tarkibi:');
// console.log(fileContent);

// const currentDateTime = new Date().toLocaleString();
// fs.appendFileSync(filePath, `\n${currentDateTime}`);

// console.log('\nFaylga yangi ma\'lumot qo\'shildi. Yangilangan tarkib:');
// console.log(fs.readFileSync(filePath, 'utf8'));

//                                                  4-SAVOL:
// const os = require('os');

// const hostName = os.hostname();
// console.log('Kompyuter host nomi:', hostName);

// const userName = os.userInfo().username;
// console.log('Foydalanuvchi nomi:', userName);

//                                                  5-SAVOL:
// const fs = require('fs');
// const path = require('path');

// const currentDir = process.cwd();
// console.log('Joriy ishchi katalog:', currentDir);

// const relativePath = path.join('docs', 'readme.md');
// console.log('Nisbiy yo\'l:', relativePath);

// const docsDir = path.join(currentDir, 'docs');
// if (!fs.existsSync(docsDir)) {
//   fs.mkdirSync(docsDir);
//   console.log('"docs" katalogi yaratildi');
// }

// const readmePath = path.join(docsDir, 'readme.md');
// fs.writeFileSync(readmePath, 'Bu readme fayli');
// console.log('"readme.md" fayli yaratildi');

// console.log('Yaratilgan faylning to\'liq yo\'li:', readmePath);

//                                                  6-SAVOL:
// const EventEmitter = require('events');
// const readline = require('readline');

// class DataEmitter extends EventEmitter {}

// const dataEmitter = new DataEmitter();

// dataEmitter.on('dataReceived', (data) => {
//   console.log('Qabul qilingan ma\'lumot:', data);
// });

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// console.log('Ma\'lumot kiriting (chiqish uchun Ctrl+C bosing):');

// rl.on('line', (input) => {
//   dataEmitter.emit('dataReceived', input);
// });

// rl.on('close', () => {
//   console.log('Dastur tugatildi.');
//   process.exit(0);
// });

//                                                  7-SAVOL:
// const fs = require('fs');

// const filePath = process.argv[2];

// if (!filePath) {
//   console.log("Iltimos, fayl yo'lini ko'rsating.");
//   process.exit(1);
// }

// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     if (err.code === 'ENOENT') {
//       console.log(`Xatolik: "${filePath}" fayli topilmadi.`);
//     } else {
//       console.log(`Xatolik yuz berdi: ${err.message}`);
//     }
//   } else {
//     console.log("Fayl tarkibi:");
//     console.log(data);
//   }
// });

//                                                  8-SAVOL:
// const fs = require('fs');

// const fileName = 'message.txt';
// const content = 'Hello World!';

// try {
//   fs.writeFileSync(fileName, content);
//   console.log(`Fayl "${fileName}" muvaffaqiyatli yozildi.`);
// } catch (err) {
//   console.error(`Xatolik yuz berdi: ${err.message}`);
// }

//                                                      9-SAVOL:
// const appendContent = " This is appended content.";

// fs.appendFile(fileName, appendContent, (err) => {
//   if (err) {
//     console.error(`Qo'shimcha qilishda xatolik yuz berdi: ${err.message}`);
//   } else {
//     console.log(`"${fileName}" fayliga muvaffaqiyatli qo'shimcha qilindi.`);
//   }
// });

//                                                      10-SAVOL:
// const fs = require('fs');

// fs.readdir('.', (err, files) => {
//   if (err) {
//     console.error(`Katalogni o'qishda xatolik yuz berdi: ${err.message}`);
//   } else {
//     console.log("Joriy katalog tarkibi:");
//     files.forEach(file => {
//       console.log(file);
//     });
//   }
// });

//                                                          11-SAVOL:
// const fs = require('fs');
// const path = require('path');

// const fileName = 'fresh.txt';
// const filePath = path.join('files', fileName);
// const content = 'I am fresh and young';

// fs.writeFile(filePath, content, { flag: 'wx' }, (err) => {
//   if (err) {
//     if (err.code === 'EEXIST') {
//       console.error('FS operation failed');
//     } else {
//       console.error(`Xatolik yuz berdi: ${err.message}`);
//     }
//   } else {
//     console.log(`"${fileName}" fayli muvaffaqiyatli yaratildi.`);
//   }
// });

//                                                          12-SAVOL:
// const fs = require('fs');
// const path = require('path');

// function copyDirectory(source, destination) {
//   return new Promise((resolve, reject) => {
//     fs.access(source, fs.constants.F_OK, (err) => {
//       if (err) {
//         reject(new Error('FS operation failed'));
//         return;
//       }

//       fs.access(destination, fs.constants.F_OK, (err) => {
//         if (!err) {
//           reject(new Error('FS operation failed'));
//           return;
//         }

//         fs.mkdir(destination, { recursive: true }, (err) => {
//           if (err) {
//             reject(err);
//             return;
//           }

//           fs.readdir(source, { withFileTypes: true }, (err, entries) => {
//             if (err) {
//               reject(err);
//               return;
//             }

//             let completed = 0;
//             const total = entries.length;

//             if (total === 0) {
//               resolve();
//               return;
//             }

//             entries.forEach((entry) => {
//               const srcPath = path.join(source, entry.name);
//               const destPath = path.join(destination, entry.name);

//               if (entry.isDirectory()) {
//                 copyDirectory(srcPath, destPath)
//                   .then(() => {
//                     completed++;
//                     if (completed === total) resolve();
//                   })
//                   .catch(reject);
//               } else {
//                 fs.copyFile(srcPath, destPath, (err) => {
//                   if (err) {
//                     reject(err);
//                     return;
//                   }
//                   completed++;
//                   if (completed === total) resolve();
//                 });
//               }
//             });
//           });
//         });
//       });
//     });
//   });
// }

// const sourcePath = 'files';
// const destinationPath = 'files_copy';

// copyDirectory(sourcePath, destinationPath)
//   .then(() => {
//     console.log('Nusxalash muvaffaqiyatli yakunlandi.');
//   })
//   .catch((err) => {
//     if (err.message === 'FS operation failed') {
//       console.error('FS operation failed');
//     } else {
//       console.error(`Xatolik yuz berdi: ${err.message}`);
//     }
//   });

//                                                      13-SAVOL:
// const fs = require('fs');
// const path = require('path');

// function renameFile(oldName, newName) {
//   return new Promise((resolve, reject) => {
//     const oldPath = path.join(__dirname, oldName);
//     const newPath = path.join(__dirname, newName);

//     fs.access(oldPath, fs.constants.F_OK, (err) => {
//       if (err) {
//         reject(new Error('FS operation failed'));
//         return;
//       }

//       fs.access(newPath, fs.constants.F_OK, (err) => {
//         if (!err) {
//           reject(new Error('FS operation failed'));
//           return;
//         }

//         fs.rename(oldPath, newPath, (err) => {
//           if (err) {
//             reject(new Error('FS operation failed'));
//           } else {
//             resolve();
//           }
//         });
//       });
//     });
//   });
// }

// renameFile('wrongFilename.txt', 'properFilename.md')
//   .then(() => {
//     console.log('Fayl muvaffaqiyatli qayta nomlandi.');
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

//                                                      14-SAVOL:
// const fs = require('fs');
// const path = require('path');

// function deleteFile(fileName) {
//   return new Promise((resolve, reject) => {
//     const filePath = path.join(__dirname, fileName);

//     fs.unlink(filePath, (err) => {
//       if (err) {
//         if (err.code === 'ENOENT') {
//           reject(new Error('FS operation failed'));
//         } else {
//           reject(err);
//         }
//       } else {
//         resolve();
//       }
//     });
//   });
// }

// deleteFile('fileToRemove.txt')
//   .then(() => {
//     console.log('Fayl muvaffaqiyatli o\'chirildi.');
//   })
//   .catch((err) => {
//     if (err.message === 'FS operation failed') {
//       console.error('FS operation failed');
//     } else {
//       console.error(`Xatolik yuz berdi: ${err.message}`);
//     }
//   });

//                                                      15-SAVOL:
// const fs = require('fs');
// const path = require('path');

// function listFiles() {
//   return new Promise((resolve, reject) => {
//     const directoryPath = path.join(__dirname, 'files');

//     fs.readdir(directoryPath, (err, files) => {
//       if (err) {
//         if (err.code === 'ENOENT') {
//           reject(new Error('FS operation failed'));
//         } else {
//           reject(err);
//         }
//       } else {
//         resolve(files);
//       }
//     });
//   });
// }

// listFiles()
//   .then((files) => {
//     console.log('Files papkasidagi fayllar:');
//     files.forEach(file => {
//       console.log(file);
//     });
//   })
//   .catch((err) => {
//     if (err.message === 'FS operation failed') {
//       console.error('FS operation failed');
//     } else {
//       console.error(`Xatolik yuz berdi: ${err.message}`);
//     }
//   });

//                                                  16-SAVOL:
// const fs = require('fs');
// const path = require('path');

// function readFile(filename) {
//   return new Promise((resolve, reject) => {
//     const filePath = path.join(__dirname, filename);

//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         if (err.code === 'ENOENT') {
//           reject(new Error('FS operation failed'));
//         } else {
//           reject(err);
//         }
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// readFile('fileToRead.txt')
//   .then((content) => {
//     console.log('fileToRead.txt faylining tarkibi:');
//     console.log(content);
//   })
//   .catch((err) => {
//     if (err.message === 'FS operation failed') {
//       console.error('FS operation failed');
//     } else {
//       console.error(`Xatolik yuz berdi: ${err.message}`);
//     }
//   });
