// function sortDrinksByPrice(drinks) {
//     return drinks.sort((a, b) => a.price - b.price);
// }
// const drinks = [
//     {name: 'lemonade', price: 50},
//     {name: 'lime', price: 10}
// ]
// console.log(SortSalarys(drinks));

//                      2-SAVOL:
// function ObjectToArray(object) {
//     return Object.entries(object);
// }
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// console.log(ObjectToArray(person));

//                      3-SAVOL:
// let arr = []
// let users = [
//     { name: "John", email: "john@example.com" },
//     { name: "Jason", email: "jason@example.com" },
//     { name: "Jeremy", email: "jeremy@example.com" },
//     { name: "Jacob", email: "jacob@example.com" }
// ]
// for (let i = 0; i < users.length; i++) {
//     arr.push(users[i].name)
// }
// console.log(arr);

//                      4-SAVOL:
// function AddYears(users){
//     let n = Number(prompt("Istalgan son kiriting: "))
//     return users.map(user => ({...user, age: user.age + n}))
// }
// let users ={
//     name: "John", email: "john@example.com",age: 30, 
//     name: "Jason", email: "jason@example.com",age: 28, 
//     name: "Jeremy", email: "jeremy@example.com",age: 25,
//     name: "Jacob", email: "jacob@example.com",age: 22,
// }
// console.log(AddYears(users));

//                      5-SAVOL:
// const database = {
//     studentsList: {
//         'xamidullo': {
//             name: "xamidullo",
//             age: 33,
//             id: 123,
//             tolov: false
//         }
//     },
//     create(user) {
//         if (!this.studentsList[user.name]) {
//             this.studentsList[user.name] = user;
//         }
//         return this.studentsList;
//     },
//     read(name) {
//         return this.studentsList[name] || "User not found!";
//     },
//     update(name, user) {
//         if (this.studentsList[name]) {
//             this.studentsList[name] = { ...this.studentsList[name], ...user };
//         }
//         return this.studentsList[name] || "User not found!";
//     },
//     delete(name) {
//         if (this.studentsList[name]) {
//             delete this.studentsList[name];
//             return `User ${name} deleted!`;
//         } else {
//             return "User not found!";
//         }
//     }
// }
// database.create({
//     name: "azizbek",
//     age: 21,
//     id: 456,
//     tolov: true
// });
// database.update("xamidullo", {
//     name: "xamidullo",
//     age: 34,
//     tolov: true
// });
// console.log(database.read("xamidullo"));
// database.delete("xamidullo");
// console.log(database.studentsList);

//                      6-SAVOL:
// function dubleStr(str) {
//     let arr = []
//     for (let i = 0; i < str.length; i++) {
//         arr.push(str[i] + str[i])
//     }
//     return arr.join("")
// }
// const str = "String"
// console.log(dubleStr(str))

//                      7-SAVOL:
// function isTitleString(title) {
//     return title.split(' ').every(word => word[0] === word[0].toUpperCase());
// }
// const title = "A Mind Boggling Achievement"
// console.log(isTitleString(title))

