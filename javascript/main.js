// function isInstanceOf(obj, constructor) {
//   if (obj == null) {
//     return false;
//   }
//   let prototype = Object.getPrototypeOf(obj);
//   while (prototype !== null) {
//     if (prototype === constructor.prototype) {
//       return true;
//     }
//     prototype = Object.getPrototypeOf(prototype);
//   }
//   return false;
// }
// const obj = { name: 'Jony', age: 19 };
// console.log(isInstanceOf(obj, Object));

//`                                                         2-SAvOL:
// function fcalback(str, callback){
//     return callback(str)
// }
// const str = "Jony"
// const callback= function (str){
//     return `Hello ${str}`
// }
// console.log(fcalback(str, callback));

//                                                           3-SAvOL:
// const myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello, My Promise!")
//   }, 2000)
// })
// myPromise.then((message) => {
//   console.log(message)
// })

//                                                           4-SAvOL:
// const json = '{"name":"John", "age":30, "car":null}'
// try{
//     const onj = JSON.parse(json)
//     console.log(onj)
// }catch(e){
//     console.log(`Error at: ${e.message}`)
// }finally{
//     console.log("Success")
// }

//                                                           5-SAvOL:
// const greetDepartMixin = {
//   greet() {
//     console.log(`Salom, men ${this.name}`);
//   },
//   depart() {
//     console.log(`Xayr, men ${this.name}`);
//   }
// };
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Object.assign(Person.prototype, greetDepartMixin);
// const person = new Person("John");
// person.greet();
// person.depart();

//                                                            6-SAvOL:
// function conditionalPromise(condition) {
//   return new Promise((resolve, reject) => {
//     if (condition) {
//       resolve("Shart bajarildi");
//     } else {
//       reject("Shart bajarilmadi");
//     }
//   });
// }
// const condition = true;
// conditionalPromise(condition)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//                                                            7-SAvOL:
// async function bosqich1(son) {
//   if (typeof son !== 'number') {
//     throw new Error("Xato: Son kiritilmadi");
//   }
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   const natija = son * 2;
//   console.log(`Bosqich 1: ${son} * 2 = ${natija}`);
//   return natija;
// }
// async function bosqich2(son) {
//   if (typeof son !== 'number') {
//     throw new Error("Xato: Son kiritilmadi");
//   }
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   const natija = son + 10;
//   console.log(`Bosqich 2: ${son} + 10 = ${natija}`);
//   return natija;
// }
// async function bosqich3(son) {
//   if (typeof son !== 'number') {
//     throw new Error("Xato: Son kiritilmadi");
//   }
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   const natija = son / 2;
//   console.log(`Bosqich 3: ${son} / 2 = ${natija}`);
//   return natija;
// }
// async function hisobKitob() {
//   const boshlangichSon = 5;
//   try {
//     const natija1 = await bosqich1(boshlangichSon);
//     const natija2 = await bosqich2(natija1);
//     const yakuniyNatija = await bosqich3(natija2);
//     console.log(`Yakuniy natija: ${yakuniyNatija}`);
//   } catch (xato) {
//     console.error(`Xatolik yuz berdi: ${xato.message}`);
//   } finally {
//     console.log("Hisob-kitob tugadi");
//   }
// }
// hisobKitob();

//                                                            8-SAvOL:
// async function asyncFunction() {
//   try {
//     const result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Operation completed successfully")
//       }, 1000)
//     })
//     console.log(result)
//   } catch (error) {
//     console.error(error)
//   }
// }
// asyncFunction()

//                                                            9-SAvOL:
// async function apiMalumotOlish(url) {
//   try {
//     const javob = await fetch(url);
//     if (!javob.ok) {
//       throw new Error(`HTTP xato! status: ${javob.status}`);
//     }
//     const data = await javob.json();
//     console.log("Ma'lumot muvaffaqiyatli olindi:", data);
//     return data;
//   } catch (xato) {
//     console.error("Ma'lumot olishda xatolik yuz berdi:", xato.message);
//     throw xato;
//   }
// }
// apiMalumotOlish('https://api.example.com/data')
//   .then(data => {
//     console.log("Ma'lumot muvaffaqiyatli olindi:", data);
//   })
//   .catch(xato => {
//     console.error("Ma'lumot olishda xatolik yuz berdi:", xato.message);
//   });

//                                                            10-SAvOL:
// const GitHubMixin = {
//   async getUser(username) {
//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`);
//       if (!response.ok) {
//         throw new Error(`HTTP xato! status: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error(`Xatolik yuz berdi: ${error.message}`);
//       return null;
//     }
//   }
// };
// class GitHubAPI {
//   constructor() {
//     Object.assign(this, GitHubMixin);
//   }

//   async getUsers(names) {
//     const promises = names.map(name => this.getUser(name));
//     return Promise.all(promises);
//   }
// }
// async function getUsers(names) {
//   const api = new GitHubAPI();
//   return api.getUsers(names);
// }
// getUsers(['user1', 'user2', 'user3'])
//   .then(users => {
//     console.log('Foydalanuvchilar ma\'lumotlari:', users);
//   })
//   .catch(error => {
//     console.error('Xatolik yuz berdi:', error);
//   });


