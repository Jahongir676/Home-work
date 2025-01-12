// async function getPlanetNames() {
//   try {
//     const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
//     const planets = await response.json();
//     return planets.map(planet => planet.name);
//   } catch (error) {
//     console.error('Error fetching planet names:', error);
//     return [];
//   }
// }
// getPlanetNames().then(planetNames => {
//   const planetList = document.getElementById('planetList');
//   planetNames.forEach(planetName => {
//     const listItem = document.createElement('li');
//     listItem.textContent = planetName;
//     planetList.appendChild(listItem);
//   });
// });

//                                                      2-SAVOL:
// function findWhoLivedLongest(people) {
//     let longestLived = people[0];
//     let maxAge = 0;
//     for (let person of people) {
//         let age = person.deathYear - person.birthYear;
//         if (age > maxAge) {
//             maxAge = age;
//             longestLived = person;
//         }
//     }
//     return longestLived;
// }
// const people = [
//     { name: "Ali", birthYear: 1900, deathYear: 1980 },
//     { name: "Vali", birthYear: 1920, deathYear: 1995 },
//     { name: "Hasan", birthYear: 1915, deathYear: 2005 },
//     { name: "Husan", birthYear: 1905, deathYear: 1960 }
// ];
// console.log(findWhoLivedLongest(people));

//                                                      3-SAVOL:
// async function getUserInfoAndPosts(userId) {
//   try {
//     const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     const userData = await userResponse.json();

//     const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//     const postsData = await postsResponse.json();

//     const { name, address: { city }, company: { name: companyName } } = userData;
//     const postTitles = postsData.map(post => post.title);

//     console.log(`Author: ${name}`);
//     console.log(`City: ${city}`);
//     console.log(`Company: ${companyName}`);
//     console.log('Post Titles:');
//     postTitles.forEach((title, index) => {
//       console.log(`${index + 1}. ${title}`);
//     });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }
// getUserInfoAndPosts(1);

//                                                          4-SAVOL:
// async function getJustTodos() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const todos = await response.json();
//     const justTodos = todos.filter(todo => todo.completed === false);
//     console.log('Incomplete todos:');
//     justTodos.forEach(todo => {
//       console.log(`ID: ${todo.id}, Title: ${todo.title}`);
//     });
//     return justTodos;
//   } catch (error) {
//     console.error('Error fetching todos:', error);
//   }
// }
// getJustTodos();

//                                                          5-SAVOL:
// const product = {
//   nomi: "Laptop",
//   miqdori: 10,
//   narxi: 1000,
//   get productInfo() {
//     return `Nomi: ${this.nomi}, Miqdori: ${this.miqdori}, Narxi: $${this.narxi}`;
//   },
//   set setPrice(newPrice) {
//     this.narxi = newPrice;
//   }
// };
// const tovar = Object.assign({}, product);
// tovar.setPrice = 1200;
// console.log("Product ma'lumoti:", product.productInfo);
// console.log("Tovar ma'lumoti:", tovar.productInfo);
// function FindAllMethods(obj) {
//   return Object.getOwnPropertyNames(obj).filter(prop => typeof obj[prop] === 'function');
// }
// console.log("Product metodlari:", FindAllMethods(product));
// function InvertKeyValue(obj) {
//   return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
// }
// console.log(InvertKeyValue({red: "qizil", green: "yashil"}));

//                                                           6-SAVOL:
// function isAnagram(word1, word2) {
//   const cleanWord1 = word1.toLowerCase().replace(/\s/g, '');
//   const cleanWord2 = word2.toLowerCase().replace(/\s/g, '');
//   if (cleanWord1.length !== cleanWord2.length) {
//     return false;
//   }
//   const sortedWord1 = cleanWord1.split('').sort().join('');
//   const sortedWord2 = cleanWord2.split('').sort().join('');
//   return sortedWord1 === sortedWord2;
// }
// console.log(isAnagram("tuk", "kut"));

//                                                          7-SAVOL:
// function odamSoni(bekatlar) {
//   let odamlarSoni = 0;
//   for (let bekat of bekatlar) {
//     const [chiqqanlar, tushganlar] = bekat;
//     odamlarSoni += chiqqanlar - tushganlar;
//   }
//   return odamlarSoni;
// }
// console.log(odamSoni([[10, 0], [3, 5], [5, 8]]));
// console.log(odamSoni([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));

//                                                          8-SAVOL:
// async function getTopAuthors() {
//   try {
//     const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/100');
//     const quotes = await response.json();
//     const authorCounts = quotes.reduce((acc, quote) => {
//       acc[quote.author] = (acc[quote.author] || 0) + 1;
//       return acc;
//     }, {});
//     const maxCount = Math.max(...Object.values(authorCounts));
//     const topAuthors = Object.keys(authorCounts).filter(author => authorCounts[author] === maxCount);
//     return topAuthors;
//   } catch (error) {
//     console.error('Xatolik yuz berdi:', error);
//     return [];
//   }
// }
// getTopAuthors().then(topAuthors => {
//   console.log('Eng ko\'p iqtibos keltirilgan mualliflar:', topAuthors);
// });
