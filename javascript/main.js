// class BookList {
//     constructor() {
//         this.books = [];
//         this.favoriteBook = '';
//     }
//     addBook(title, author) {
//         this.books.push({ title, author });
//     }
//     setFavoriteBook(title) {
//         this.favoriteBook = title;
//     }
//     getBooksList() {
//         this.books.forEach(book => {
//             console.log(`Kitob nomi: ${book.title}, muallif: ${book.author}`);
//         });
//     }

//     getFavoriteBook() {
//         console.log(this.favoriteBook);
//     }
// }
// const bookList = new BookList([{name: 'Seas', author: "Jony"}]);

//                              2-SAVOL:
// function paskalUchburchagi(n) {
//     for (let i = 0; i < n; i++) {
//         let qator = [];
//         for (let j = 0; j <= i; j++) {
//             if (j === 0 || j === i) {
//                 qator.push(1);
//             } else {
//                 qator.push(oldingiqator[j-1] + oldingiqator[j]);
//             }
//         }
//         console.log(qator.join(' '));
//         oldingiqator = qator;
//     }
// }
// paskalUchburchagi(5);

//                              3-SAVOL:
// class Magic {
//     replace(str, oldValue, newValue) {
//         return str.split(oldValue).join(newValue);
//     }
//     length(data) {
//         return String(data).length;
//     }
//     toUpperCase(str) {
//         const upperCaseMap = {
//             'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H',
//             'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P',
//             'q': 'Q', 'r': 'R', 's': 'S', 't': 'T', 'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X',
//             'y': 'Y', 'z': 'Z'
//         };
//         return str.split('').map(char => upperCaseMap[char] || char).join('');
//     }
//     repeat(data, n) {
//         return Array(n).fill(data).join(' ');
//     }
//     count(str) {
//         const result = {};
//         for (let char of str) {
//             result[char] = (result[char] || 0) + 1;
//         }
//         return result;
//     }
// }
// const magic = new Magic();

//                              4-SAVOL:
// class BankAccount {
//     constructor(ownerName, accountNumber, balance = 0) {
//         this.ownerName = ownerName;
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`${amount} so'm mablag' qo'shildi. Yangi balans: ${this.balance} so'm`);
//         } else {
//             console.log("Noto'g'ri summa kiritildi.");
//         }
//     }
//     withdraw(amount) {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             console.log(`${amount} so'm mablag' yechildi. Yangi balans: ${this.balance} so'm`);
//         } else if (amount > this.balance) {
//             console.log("Hisobingizda yetarli mablag' mavjud emas.");
//         } else {
//             console.log("Noto'g'ri summa kiritildi.");
//         }
//     }
//     showBalance() {
//         console.log(`${this.ownerName}ning joriy balansi: ${this.balance} so'm`);
//     }
// }
// const user1 = new BankAccount("Alisher Zokirov", "1234567890");
// const user2 = new BankAccount("Malika Karimova", "0987654321");
// console.log("User1 amallari:");
// user1.showBalance();
// user1.deposit(100000);
// user1.withdraw(30000);
// user1.showBalance();
// console.log("\nUser2 amallari:");
// user2.showBalance();
// user2.deposit(500000);
// user2.withdraw(200000);
// user2.showBalance();
// console.log("\nXato holatlarni tekshirish:");
// user1.deposit(-10000);
// user1.withdraw(1000000);

//                              5-SAVOL:
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     getArea() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// }
// const circle1 = new Circle(5);
// console.log("Circle 1:");
// console.log("Radius:", circle1.radius);
// console.log("Area:", circle1.getArea());
// console.log("Perimeter:", circle1.getPerimeter());

//                              6-SAVOL:
// function squareNumber(n) {
//     return parseInt(n.toString().split('').map(digit => Math.pow(parseInt(digit), 2)).join(''));
// }
// console.log(squareNumber(3221));

//                              7-SAVOL:
// class Box {
//     constructor(length, width, height) {
//         this.length = length;
//         this.width = width;
//         this.height = height;
//     }

//     getVolume() {
//         return this.length * this.width * this.height;
//     }
// }
// function totalVolume(...boxes) {
//     return boxes.reduce((total, box) => total + box.getVolume(), 0);
// }
// const box1 = new Box(2, 3, 4);
// const box2 = new Box(1, 2, 3);
// const box3 = new Box(5, 5, 5);
// console.log("Box 1 hajmi:", box1.getVolume());
// console.log("Box 2 hajmi:", box2.getVolume());
// console.log("Box 3 hajmi:", box3.getVolume());
// console.log("Umumiy hajm:", totalVolume(box1, box2, box3));

//                                  8-SAVOL:
// Object yordamida Todo List
// const todoList = {
//     tasks: [],
//     addTask(task) {
//         this.tasks.push(task);
//     },
//     removeTask(index) {
//         if (index >= 0 && index < this.tasks.length) {
//             this.tasks.splice(index, 1);
//         }
//     },
//     displayTasks() {
//         console.log("Todo List:");
//         this.tasks.forEach((task, index) => {
//             console.log(`${index + 1}. ${task}`);
//         });
//     }
// };

// todoList.addTask('Breakfast at 8:00 AM');
// todoList.addTask('Meeting at 12:00 PM');
// todoList.displayTasks();
// todoList.removeTask(0);
// todoList.displayTasks();

//                                  9-SAVOL:
// class TodoList {
//     constructor() {
//         this.tasks = [];
//     }
//     addTask(task) {
//         this.tasks.push(task);
//     }
//     removeTask(index) {
//         if (index >= 0 && index < this.tasks.length) {
//             this.tasks.splice(index, 1);
//         }
//     }
//     displayTasks() {
//         console.log("Todo List:");
//         this.tasks.forEach((task, index) => {
//             console.log(`${index + 1}. ${task}`);
//         });
//     }
// }
// const myTodoList = new TodoList();
// myTodoList.addTask('Breakfast at 8:00 AM');
// myTodoList.addTask('Meeting at 12:00 PM');
// myTodoList.displayTasks();
// myTodoList.removeTask(0);
// myTodoList.displayTasks();

