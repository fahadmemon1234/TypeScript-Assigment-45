// ----------Task 2------------
var Name = "World";
console.log("Hello ".concat(Name));
// ----------Task 3------------
var MyName = "Fahad Memon";
//LowerCase
console.log("Lowercase:", MyName.toLowerCase());
//UpperCase
console.log("Uppercase:", MyName.toUpperCase());
//TitleCase
console.log(
  "TitleCase:",
  MyName.replace(/\b\w/g, function (c) {
    return c.toUpperCase();
  })
);
// ----------Task 4------------
var quote =
  "Jack Prelutsky, Shel Silverstein, Emily Dickinson, Langston Hughes, and more.";
var auther = "A selection of poems kids love by poets like";
console.log("".concat(auther, ' Lewis Carroll, "').concat(quote, '"'));
// ----------Task 6------------
var Person = "\t\n Jhon Doe \n\t";
console.log("original: ", Person);
console.log("stripped: ", Person.trim());
