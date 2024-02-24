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

// let guestArr = ["Ali", "Ahmed", "Mehak", "Almas", "Bilal"];

// let canNotAttend = "Mehak";

// let NewGuest = "Fahad";

// guestArr[guestArr.indexOf(canNotAttend)] = NewGuest;

// console.log(guestArr);

// // guestArr.map((item)=> console.log(`Dear ${item}, I found a bigger dinner table so I am invited more peoples.`));

// // part 2 began

// let guestBeg = "Muizz";

// guestArr.unshift(guestBeg);

// console.log(guestArr);

// // part 3 Middle

// let guestMiddle = "Hamza";

// let MiddleIndex = guestArr.length / 3;

// guestArr.splice(MiddleIndex, 0, guestMiddle);

// console.log(guestArr);

// // part 4 append

// guestArr.push("Zeeshan");

// console.log(guestArr);

// // part 5

// guestArr.map((items) =>
//   console.log(
//     `Dear ${items} you are invited in the more people category on dinner`
//   )
// );

// // ----------Task 17------------

// let guest = ["Ali", "Bilal", "Carry", "Dawood", "Hamza"];

// console.log("Due to limited space, only two people can be invited for dinner.")

// // Removing guest until only two names remain

// while (guest.length > 2){
//   const removeGuest = guest.pop();
//   console.log(`Sorry, ${removeGuest}, you're no longer invited to dinner.`)
// }

// // Print Invitations to the remaining two guest

// let guests = ["Ali", "Bilal"];

// guests.forEach((guests) =>
//   console.log(`Dear ${guests}, you're still invited to dinner.`)
// );

// // Removing the last two names from the list

// guest.pop();
// guest.pop();

// // Print the final list to the confirm it's empty
// console.log("Final guest list: ", guest)

// // ----------Task 18------------

// // Define the array of locations
// let places = ["Tokyo", "Machu Picchu", "Santorini", "Banff", "Venice"];

// // Print the original array
// console.log("Original Order: ", places);

// // Print the array in alphabetical order without modifying the original list
// console.log("\nAlphabetical Order: ", [...places].sort());

// // Show that the original array is still in its original order
// console.log("\nOriginal Order after sorting: ", places);

// // Print the array in reverse alphabetical order without changing the original list
// console.log("\nReverse Alphabetical Order: ", [...places].sort().reverse());

// // Show that the original array is still in its original order
// console.log("\nOriginal Order after reverse sorting: ", places);

// // Reverse the order of the list
// places.reverse();

// // Print the array to show its order has changed
// console.log("\nReversed Order: ", places);

// // Reverse the order of the list again to restore original order
// places.reverse();

// // Print the array to show it's back to its original order
// console.log("\nBack to original Order: ", places);

// // Sort the array in alphabetical order
// places.sort();

// // Print the array to show its order has been changed
// console.log("\nSorted in Alphabetical Order: ", places);

// // Sort the array in reverse alphabetical order
// places.sort((a, b) => b.localeCompare(a));

// // Print the array to show its order has been changed
// console.log("\nSorted in Reverse Alphabetical Order: ", places);

// // ----------Task 19------------

// let guestDinner = ["Ali", "Bilal"];
// let count_invitation = guestDinner.length;

// console.log(count_invitation , "people will come to the dinner.")

// // ----------Task 20------------

// // Array of programming languages
// let programmingLanguages = [
//   "JavaScript",
//   "Python",
//   "Java",
//   "C++",
//   "C#",
//   "Ruby",
//   "Swift",
//   "TypeScript",
//   "PHP",
//   "Go",
//   "Kotlin",
//   "Rust",
// ];

// // Print the array of programming languages
// console.log("Programming Languages: ", programmingLanguages);

// // ----------Task 21------------

// // Define book objects
// let book1 = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   genre: "Fiction",
//   publicationYear: 1960
// };

// let book2 = {
//   title: "1984",
//   author: "George Orwell",
//   genre: "Dystopian",
//   publicationYear: 1949
// };

// let book3 = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   genre: "Classic",
//   publicationYear: 1925
// };

// // Print book objects
// console.log("Book 1: ", book1);
// console.log("\nBook 2: ", book2);
// console.log("\nBook 3: ", book3);

// // ----------Task 22------------

// // Define an array of fruits
// let fruits: string[] = ["Apple", "Banana", "Orange"];

// // Attempt to access an element at an invalid index
// console.log(fruits[3]);

// // Accessing a valid index within the array bounds
// console.log(fruits[1]);

// // ----------Task 23------------

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');

// console.log("\nIs car == 'toyota'? I predict False.");
// console.log(car == 'toyota');

// console.log("\nIs car === 'subaru'? I predict True.");
// console.log(car === 'subaru');

// console.log("\nIs car === 'Subaru'? I predict False.");
// console.log(car === 'Subaru');

// console.log("\nIs car !== 'toyota'? I predict True.");
// console.log(car !== 'toyota');

// console.log("\nIs car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru');

// console.log("\nIs car != 'subaru'? I predict False.");
// console.log(car != 'subaru');

// console.log("\nIs car != 'toyota'? I predict True.");
// console.log(car != 'toyota');

// console.log("\nIs car.toLowerCase() == 'subaru'? I predict True.");
// console.log(car.toLowerCase() == 'subaru');

// console.log("\nIs car.toUpperCase() == 'SUBARU'? I predict True.");
// console.log(car.toUpperCase() == 'SUBARU');

// // ----------Task 24------------

// // Tests for equality and inequality with strings
// let str1 = "apple";
// let str2 = "banana";
// console.log("Equality test with strings: ", str1 === "apple");
// console.log("Inequality test with strings: ", str1 !== str2);

// // Tests using the lower case function
// let str3 = "HELLO";
// console.log("Lowercase test: ", str3.toLowerCase() === "hello");

// // Numerical tests
// let num1 = 10;
// let num2 = 5;
// console.log("Numerical equality test: ", num1 === num2);

// console.log("Numerical inequality test: ", num1 !== num2);

// console.log("Greater than test: ", num1 > num2);

// console.log("Less than test: ", num1 < num2);

// console.log("Greater than or equal to test: ", num1 >= num2);

// console.log("Less than or equal to test: ", num1 <= num2);

// // Tests using "and" and "or" operators
// let bool1 = true;
// let bool2 = false;
// console.log("AND operator test: ", bool1 && bool2);

// console.log("OR operator test: ", bool1 || bool2);

// // Test whether an item is in an array
// let fruits = ["apple", "banana", "orange"];
// fruits.unshift("banana");
// let isInArray = false;
// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "banana") {
//         isInArray = true;
//         break;
//     }
// }
// console.log("Array inclusion test: ", isInArray);


// // Test whether an item is not in an array
// console.log("Array exclusion test: ", !fruits.indexOf("mango"));

// // ----------Task 25------------


// Version 1 
let alien_color1: string = 'green';

if (alien_color1 === 'green') {
    console.log("Version 1: The player just earned 5 points.");
}

// Version 2
let alien_color2: string = 'red';

if (alien_color2 === 'green') {
    console.log("Version 2: The player just earned 5 points.");
}
