// function transformString(input) {
//   return input.split(' ').map(word => {
//     if (word.length >= 3) {
//       return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
//     }
//     return word;
//   }).join(' ');
// }
// const input = "Every developer likes to mix kubernetes and javascript";
// const result = transformString(input);
// console.log(result);

//                              2-SAVOL:
// const students = new Set([
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "Jack", scores: [100, 100, 100] }
// ]);

// function findHighestAverageStudents(students) {
//   let highestAverage = -Infinity;
//   let highestAverageStudents = [];

//   students.forEach(student => {
//     const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    
//     if (average > highestAverage) {
//       highestAverage = average;
//       highestAverageStudents = [{ name: student.name, average: average }];
//     } else if (average === highestAverage) {
//       highestAverageStudents.push({ name: student.name, average: average });
//     }
//   });

//   return highestAverageStudents;
// }

// const result = findHighestAverageStudents(students);
// console.log(result);

//                                  3-SAVOL:
// function compareDepartmentSalaries(employees) {
//   if (employees.size === 0) {
//     return "Error: The employees set is empty.";
//   }

//   let hrSalarySum = 0;
//   let itSalarySum = 0;
//   let hrCount = 0;
//   let itCount = 0;

//   employees.forEach(employee => {
//     if (employee.department === "HR") {
//       hrSalarySum += employee.salary;
//       hrCount++;
//     } else if (employee.department === "IT") {
//       itSalarySum += employee.salary;
//       itCount++;
//     }
//   });

//   const hrAverage = hrCount > 0 ? hrSalarySum / hrCount : 0;
//   const itAverage = itCount > 0 ? itSalarySum / itCount : 0;

//   if (hrAverage > itAverage) {
//     return {
//       department: "HR",
//       averageSalary: hrAverage,
//       totalSalary: hrSalarySum,
//       employeeCount: hrCount
//     };
//   } else {
//     return {
//       department: "IT",
//       averageSalary: itAverage,
//       totalSalary: itSalarySum,
//       employeeCount: itCount
//     };
//   }
// }

// const employees = new Set([
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ]);

// const result = compareDepartmentSalaries(employees);
// console.log(result);

//                                4-SAVOL:
// function mostSpokenLanguages(countries, n) {
//   const languageCounts = Array.from(countries).reduce((acc, country) => {
//     const [language, count] = Object.entries(country)[0];
//     acc[language] = (acc[language] || 0) + count;
//     return acc;
//   }, {});

//   return Object.entries(languageCounts)
//     .map(([language, count]) => ({ [language]: count }))
//     .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
//     .slice(0, n);
// }

// let countries = new Set([
//   { Russian: 9 },
//   { English: 91 },
//   { French: 45 },
//   { Spanish: 24 },
//   { Portuguese: 9 },
//   { Dutch: 8 },
//   { German: 7 },
//   { Arabic: 25 },
//   { Chinese: 5 },
//   { Swahili: 4 },
//   { Serbian: 4 }
// ]);

// console.log(mostSpokenLanguages(countries, 3));

//                              5-SAVOL:
// const createBookCollection = () => {
//   let books = new Map();
//   let currentId = 1;

//   return {
//     create: (book) => {
//       const id = currentId++;
//       books.set(id, { ...book, id });
//       return id;
//     },

//     findOne: (id) => {
//       return books.get(id);
//     },

//     findAll: () => {
//       return Array.from(books.values());
//     },

//     filterByAuthor: (author) => {
//       return Array.from(books.values()).filter(book => book.author === author);
//     },

//     filterByreaded: () => {
//       return Array.from(books.values()).filter(book => book.read);
//     },

//     deleteOne: (id) => {
//       return books.delete(id);
//     },

//     deleteMany: () => {
//       books.clear();
//     }
//   };
// };

// const bookCollection = createBookCollection();

// const book1Id = bookCollection.create({ title: 'The Hobbit', author: 'J.R.R. Tolkien', read: false });
// const book2Id = bookCollection.create({ title: '1984', author: 'George Orwell', read: true });
// const book3Id = bookCollection.create({ title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', read: true });

// console.log('All books:', bookCollection.findAll());

// console.log('Find book by ID:', bookCollection.findOne(book1Id));

// console.log('Books by J.R.R. Tolkien:', bookCollection.filterByAuthor('J.R.R. Tolkien'));

// console.log('Read books:', bookCollection.filterByreaded());

// bookCollection.deleteOne(book2Id);
// console.log('After deleting a book:', bookCollection.findAll());

// bookCollection.deleteMany();
// console.log('After deleting all books:', bookCollection.findAll());

//                              6-SAVOL:
// function afterNYears(people, n) {
//   const updatedPeople = {};
//   const years = Math.abs(n);

//   for (const [name, age] of Object.entries(people)) {
//     updatedPeople[name] = age + years;
//   }

//   return updatedPeople;
// }

// console.log(afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1));

// console.log(afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19));

// console.log(afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5));

//                              7-SAVOL:
// function removeEntry(obj, itemToRemove) {
//   const entries = new Map(Object.entries(obj));
//   entries.delete(itemToRemove);
//   return Object.fromEntries(entries);
// }

// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));
// console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"));

//                              8-SAVOL:
// const scores = new Map([
//     ["A", 100], ["B", 14], ["C", 9], ["D", 28], ["E", 145], ["F", 12],
//     ["G", 3], ["H", 10], ["I", 200], ["J", 100], ["K", 114], ["L", 100],
//     ["M", 25], ["N", 450], ["O", 80], ["P", 2], ["Q", 12], ["R", 400],
//     ["S", 113], ["T", 405], ["U", 11], ["V", 10], ["W", 10], ["X", 3],
//     ["Y", 210], ["Z", 23]
// ]);

// function nameScore(name) {
//     const totalScore = name.toUpperCase().split('').reduce((sum, char) => sum + (scores.get(char) || 0), 0);

//     if (totalScore <= 60) return "NOT TOO GOOD";
//     if (totalScore <= 300) return "PRETTY GOOD";
//     if (totalScore <= 599) return "VERY GOOD";
//     return "THE BEST";
// }

// console.log(nameScore("MUBASHIR"));

//                                  9-SAVOL:
// function determineWinnerOfFight(map) {
//     let myWins = 0;
//     let spouseWins = 0;

//     for (let [round, scores] of map) {
//         if (scores.me > scores.spouse) {
//             myWins++;
//         } else if (scores.spouse > scores.me) {
//             spouseWins++;
//         }
//     }

//     if (myWins > spouseWins) {
//         return "MEN!";
//     } else if (spouseWins > myWins) {
//         return "TURMUSH O'RTOG'IM!";
//     } else {
//         return "HECH KIM!";
//     }
// }

// let map1 = new Map([
//     ["round1", { me: 10, spouse: 5 }],
//     ["round2", { me: 5, spouse: 20 }],
//     ["round3", { me: 10, spouse: 10 }],
// ]);

// let map2 = new Map([
//     ["round1", { me: 40, spouse: 5 }],
//     ["round2", { me: 9, spouse: 10 }],
//     ["round3", { me: 9, spouse: 10 }],
// ]);

// console.log(determineWinnerOfFight(map1));
