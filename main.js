// // ----------Task 2------------
// let Name: string = "World";
// console.log(`Hello ${Name}`);
// // ----------Task 3------------
// let MyName: string = "Fahad Memon";
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
// let quote: string =
//   "Jack Prelutsky, Shel Silverstein, Emily Dickinson, Langston Hughes, and more.";
// let auther: string = "A selection of poems kids love by poets like";
// console.log(`${auther} Lewis Carroll, "${quote}"`);
// // ----------Task 6------------
// let Person: string = "\t\n Jhon Doe \n\t";
// console.log("original: ", Person);
// console.log("stripped: ", Person.trim());
// // ----------Task 7 and 8------------
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
// // ----------Task 9------------
// let favoriteNum: number = 5;
// console.log(`My fav number is: ${favoriteNum}`);
// // ----------Task 10------------
// // question answer comment
// // console.log(`My fav number is: 7`);
// // ----------Task 11------------
// let names: string [] = ["Ali", "Ahmed", "Mehak", "Khan"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// // ----------Task 12------------
// let names: string [] = ["Ali", "Ahmed", "Mehak", "Khan"];
// let message: string = "Do you like play circket?"
// console.log(names[0] + " " + message);
// console.log(names[1] + " " + message);
// console.log(names[2] + " " + message);
// console.log(names[3] + " " + message);
// // ----------Task 13------------
// let transports : string [] = ["Hi-Speed", "Honda Civic", "Audi"];
// transports.map((item) => console.log(`I would like to own a ${item}`))
// // ----------Task 14------------
// let guestArr: string [] = ["Ali", "Ahmed", "Mehak"];
// guestArr.map((item) => console.log(`Dear ${item}, You are invited to the dinner.`))
// // ----------Task 15------------
var guestArr = ["Ali", "Ahmed", "Mehak"];
var canNotAttend = "Mehak";
var NewGuest = "Fahad";
guestArr[guestArr.indexOf(canNotAttend)] = NewGuest;
guestArr.map(function (item) { return console.log(item); });
