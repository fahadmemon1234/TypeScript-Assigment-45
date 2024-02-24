// // ----------Task 1------------

// console.log("Hello World");

// let message = "Hello World";

// console.log(message);

// // ----------Task 2------------

// let Name = "World";
// console.log(`Hello ${Name}`);

// // ----------Task 3------------

// let MyName = "Fahad Memon";

// //LowerCase
// console.log("Lowercase:", MyName.toLowerCase());

// //UpperCase
// console.log("Uppercase:", MyName.toUpperCase());

// //TitleCase
// console.log(
//   "TitleCase:",
//   MyName.replace(/\b\w/g, (c) => c.toUpperCase())
// );

// // ----------Task 4 and 5------------

// let quote =
//   "Jack Prelutsky, Shel Silverstein, Emily Dickinson, Langston Hughes, and more.";
// let auther = "A selection of poems kids love by poets like";

// console.log(`${auther} Lewis Carroll, "${quote}"`);

// // ----------Task 6------------

// let Person = "\t\n Jhon Doe \n\t";

// console.log("original: ", Person);

// console.log("stripped: ", Person.trim());

// // ----------Task 7 and 8------------

// console.log(5 + 3);

// console.log(10 - 2);

// console.log(4 * 2);

// console.log(16 / 2);

// // ----------Task 9------------

// let favoriteNum = 5;

// console.log(`My fav number is: ${favoriteNum}`);

// // ----------Task 10------------

// // question answer comment
// // console.log(`My fav number is: 7`);

// // ----------Task 11------------

// let names = ["Ali", "Ahmed", "Mehak", "Khan"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// // ----------Task 12------------

// let names = ["Ali", "Ahmed", "Mehak", "Khan"];

// let message = "Do you like play circket?"

// console.log(names[0] + " " + message);
// console.log(names[1] + " " + message);
// console.log(names[2] + " " + message);
// console.log(names[3] + " " + message);

// // ----------Task 13------------

// let transports = ["Hi-Speed", "Honda Civic", "Audi"];
// transports.map((item) => console.log(`I would like to own a ${item}`))

// // ----------Task 14------------

// let guestArr = ["Ali", "Ahmed", "Mehak"];
// guestArr.map((item) => console.log(`Dear ${item}, You are invited to the dinner.`))

// // ----------Task 15------------

// let guestArr = ["Ali", "Ahmed", "Mehak"];
// let canNotAttend = "Mehak";

// let NewGuest = "Fahad";

// guestArr [guestArr.indexOf(canNotAttend)] = NewGuest;

// guestArr.map((item)=> console.log(item));

// // ----------Task 16------------

let guestArr = ["Ali", "Ahmed", "Mehak", "Almas", "Bilal"];

let canNotAttend = "Mehak";

let NewGuest = "Fahad";

guestArr[guestArr.indexOf(canNotAttend)] = NewGuest;

console.log(guestArr);

// guestArr.map((item)=> console.log(`Dear ${item}, I found a bigger dinner table so I am invited more peoples.`));

// part 2 began

let guestBeg = "Muizz";

guestArr.unshift(guestBeg);

console.log(guestArr);

// part 3 Middle

let guestMiddle = "Hamza";

let MiddleIndex = guestArr.length / 3;

guestArr.splice(MiddleIndex, 0, guestMiddle);

console.log(guestArr);

// part 4 append

guestArr.push("Zeeshan");

console.log(guestArr);

// part 5

guestArr.map((items) =>
  console.log(
    `Dear ${items} you are invited in the more people category on dinner`
  )
);
