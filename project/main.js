// const phoneBook = {
//     contacts: [],

//     add: function() {
//         const name = prompt("Ism: ");
//         const phone = prompt("Telefon: ");

//         if (!/^\d{9,12}$/.test(phone)) {
//             console.log("Telefon raqami noto'g'ri formatda. Qaytadan urinib ko'ring.");
//             return;
//         }

//         this.contacts.push({ name: name, phone: phone });
//         console.log("Kontakt muvaffaqiyatli qo'shildi!");
//     },

//     search: function() {
//         const searchTerm = prompt("Qidiriladigan kontakt raqami: ");
//         if (!/^\d{9,12}$/.test(searchTerm)) {
//             console.log("Qidiriladigan kontakt ismi yoki raqami noto'g'ri formatda. Qaytadan urinib ko'ring.");
//             return;
//     }

//         const foundContacts = this.contacts.filter(contact => contact.phone.includes(searchTerm));

//         if (foundContacts.length === 0) {
//             console.log("Mos keladigan kontakt topilmadi.");
//         } else {
//             console.log("Topilgan kontaktlar:");
//             foundContacts.forEach(contact => console.log(`${contact.name}: ${contact.phone}`));
//         }
//     },

//     delete: function() {
//         const input = prompt("O'chiriladigan kontakt ismi yoki raqami: ");
//         const initialLength = this.contacts.length;

//         this.contacts = this.contacts.filter(contact => contact.name !== input && contact.phone !== input);

//         if (this.contacts.length === initialLength) {
//             console.log("Mos keladigan kontakt topilmadi.");
//         } else {
//             console.log("Kontakt muvaffaqiyatli o'chirildi!");
//         }
//     },

//     list: function() {
//         if (this.contacts.length === 0) {
//             console.log("Telefon kitobi bo'sh.");
//         } else {
//             console.log("Barcha kontaktlar:");
//             this.contacts.forEach(contact => console.log(`${contact.name}: ${contact.phone}`));
//         }
//     },

//     help: function() {
//         console.log(`Mavjud komandalar:
//         - add: Yangi kontakt qo'shish
//         - search: Kontaktni qidirish
//         - delete: Kontaktni o'chirish
//         - list: Barcha kontaktlarni ko'rsatish
//         - help: Mavjud komandalarni ko'rsatish
//         - exit: Dasturdan chiqish`);
//     },

//     exit: function() {
//         console.log("Dasturdan chiqish...");
//     }
// };

// let running = true;

// while (running) {
//     const command = prompt("Komanda kiriting (help - komandalarni ko'rish): ");

//     switch (command) {
//         case "add":
//             phoneBook.add();
//             break;
//         case "search":
//             phoneBook.search();
//             break;
//         case "delete":
//             phoneBook.delete();
//             break;
//         case "list":
//             phoneBook.list();
//             break;
//         case "help":
//             phoneBook.help();
//             break;
//         case "exit":
//             phoneBook.exit();
//             running = false;
//             break;
//         default:
//             console.log("Noto'g'ri komanda. Qaytadan urinib ko'ring.");
//     }
// }
