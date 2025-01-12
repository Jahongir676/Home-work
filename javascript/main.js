// const ToDoList = {
//     tasks: [],
    
//     addTask(task) {
//         this.tasks.push(task);
//     },
    
//     removeTask(index) {
//         if (index >= 0 && index < this.tasks.length) {
//             this.tasks.splice(index, 1);
//         }
//     },
    
//     printTasks() {
//         this.tasks.forEach((task, index) => {
//             console.log(`${index + 1}. ${task}`);
//         });
//     }
// };

// let bool = true;
// let choose;
// while(bool){
//     choose = prompt("1. Add task\n2. Remove task\n3. Print tasks\n4. Exit");
//     switch(choose){
//         case "1":
//             task = prompt("Enter task");
//             ToDoList.addTask(task);
//             break;
//         case "2":
//             index = prompt("Enter index");
//             ToDoList.removeTask(index);
//             break;
//         case "3":
//             console.log("Tasks:");
//             ToDoList.printTasks();
//             break;
//         case "4":
//             bool = false;
//             break;
//         default:
//             alert("Invalid choice");
//             choose = prompt("choice one of them:1. Add task\n2. Remove task\n3. Print tasks\n4. Exit");
//             break;
//     }
// }

//                              2-SAVOL:
// let Expenses = {
//     water: 0,
//     gas: 0,
//     electricity: 0,
    
//     addExpense: function(type, amount) {
//         if (this.hasOwnProperty(type)) {
//             this[type] += amount;
//         } else {
//             console.log("Noto'g'ri xarajat turi");
//         }
//     },
    
//     removeExpense: function(type, amount) {
//         if (this.hasOwnProperty(type)) {
//             if (this[type] >= amount) {
//                 this[type] -= amount;
//             } else {
//                 console.log("Olib tashlanadigan summa mavjud summadan ko'p");
//             }
//         } else {
//             console.log("Noto'g'ri xarajat turi");
//         }
//     },
    
//     printMonthlyReport: function() {
//         console.log(`Suv uchun oylik xarajat: ${this.water}`);
//         console.log(`Gaz uchun oylik xarajat: ${this.gas}`);
//         console.log(`Elektr energiyasi uchun oylik xarajat: ${this.electricity}`);
//     }
// };

// let bool = true;
// while(bool){
//     let choose = prompt("1. Add expense\n2. Remove expense\n3. Print monthly report\n4. Exit");
//     switch(choose){
//         case "1":
//             type = prompt("Enter expense type (water, gas, electricity)");
//             amount = prompt("Enter expense amount");
//             Expenses.addExpense(type, amount);
//             break;
//         case "2":
//             type = prompt("Enter expense type (water, gas, electricity)");
//             amount = prompt("Enter expense amount");
//             Expenses.removeExpense(type, amount);
//             break;
//         case "3":
//             Expenses.printMonthlyReport();
//             break;
//         case "4":
//             bool = false;
//             break;
//         default:
//             alert("Invalid choice");
//             choose = prompt("choice one of them:1. Add expense\n2. Remove expense\n3. Print monthly report\n4. Exit");
//             break;
//     }
// }

//                              3-SAVOL:
// function countAll(str) {
//     let result = { "HARFLAR": 0, "RAQAMLAR": 0 };
    
//     for (let char of str) {
//         if (/[a-zA-Z]/.test(char)) {
//             result.HARFLAR++;
//         } else if (/[0-9]/.test(char)) {
//             result.RAQAMLAR++;
//         }
//     }
    
//     return result;
// }
// console.log(countAll("Hello World"));     
// console.log(countAll("149990"));

//                              4-SAVOL:
// function checkout(items) {
//     const TAX_RATE = 0.06;
//     let total = 0;

//     for (let item of items) {
//         let itemTotal = item.prc * item.qty;
//         if (item.taxable) {
//             itemTotal += itemTotal * TAX_RATE;
//         }
//         total += itemTotal;
//     }

//     return Number(total.toFixed(2));
// }
// console.log(checkout([
//     { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
//     { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
//     { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
// ]));

//                              5-SAVOL:
// function numInStr(arr) {
//     return arr.filter(str => /\d/.test(str));
// }
// console.log(numInStr(["1a", "a", "2b", "b"]));

//                              6-SAVOL:
// let bool = true;
// while(bool){
//     let choose = prompt("1. Create student\n2. Read student\n3. Update student\n4. Delete student\n5. Exit");
//     switch(choose){
//         case "1":
//             name = prompt("Enter student name");
//             data = {
//                 age: prompt("Enter student age"),
//                 grade: prompt("Enter student grade")
//             };
//             console.log(createStudent(name, data));
//             break;
//         case "2":
//             name = prompt("Enter student name");
//             console.log(readStudent(name));
//             break;
//         case "3":
//             name = prompt("Enter student name");
//             data = {
//                 age: prompt("Enter student age"),
//                 grade: prompt("Enter student grade")
//             };
//             console.log(updateStudent(name, data));
//             break;
//         case "4":
//             name = prompt("Enter student name");
//             console.log(deleteStudent(name));
//             break;
//         case "5":
//             bool = false;
//             break;
//         default:
//             alert("Invalid choice");
//             choose = prompt("choice one of them:1. Create student\n2. Read student\n3. Update student\n4. Delete student\n5. Exit");
//             break;
//     }
// }
// let studentsList = new Map();
// function createStudent(name, data) {
//     if (studentsList.has(name)) {
//         return "Xatolik: Bu nom bilan foydalanuvchi allaqachon mavjud";
//     }
//     studentsList.set(name, data);
//     return studentsList;
// }
// function readStudent(name) {
//     if (studentsList.has(name)) {
//         return studentsList.get(name);
//     }
//     return "Foydalanuvchi topilmadi";
// }
// function updateStudent(name, newData) {
//     if (studentsList.has(name)) {
//         let currentData = studentsList.get(name);
//         let updatedData = { ...currentData, ...newData };
//         studentsList.set(name, updatedData);
//         return updatedData;
//     }
//     return "Xatolik: Foydalanuvchi topilmadi";
// }
// function deleteStudent(name) {
//     if (studentsList.has(name)) {
//         studentsList.delete(name);
//         return "Foydalanuvchi o'chirildi";
//     }
//     return "Foydalanuvchi topilmadi";
// }