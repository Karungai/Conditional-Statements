// Single line comment


//Strings
let myName = 'Carol Karungai';
let firstName = 'Carol';
let lastName = 'Karungai';
// concatination
myName= firstName + ' ' + lastName;
console.log(myName);

//Getting characters
console.log(firstName[0]);
console.log(firstName.length);
console.log(lastName.toUpperCase());
console.log(lastName.indexOf('i'));
console.log(myName.slice (0,4));
console.log(myName.substring(0,4));

//Arrays - a collection of things.
let animals = ['cat', 'dog', 'cow']
console.log(animals);
console.log(animals.length);
console.log(animals.join('donkey', 'mouse', 'horse'));
console.log(animals.concat('donkey', 'mouse', 'horse'));
console.log(animals.push('cat'));

let myAnimals = ['cat', 'dog', 'cow','donkey', 'mouse', 'horse'];
console.log(myAnimals.pop()); 



//Template sting Array - written using ``${}
let myStory ='The quick brown fox jumps over the lazy dog';
let author = 'Carol'
let age = 24; 
blog = `The winning blog of the year is ${myStory} which is written by ${author} at the age of ${age}`;

//Boolean
let myAge = 24;
console.log(age==25);
// true != Loose comparison
// false == strict comprison
let num1=10;
let num2=12;
console.log();


var length = 5;
var width = 10;

var area = length * width;
console.log("Area:" + area);

var perimeter = 2 * (length + width);
console.log("Perimeter:" + perimeter);

// Variables

// DATA TYPES
// Number 0 - 9

//Maths operations [+, -, *, /, **, %]
// [BODMAS] - BIDMAS
//shorthand operations

//Strings


//Arrays - collection of things

// let myStory = 'The quick brown fox jumped over the lazy dog';
// let author = 'Maureen Murugi';
// let age = 24;

// //Template string array - ``${}
// blog = `The winning blog of the year is ${myStory} which is written by ${author} at the age of ${age}`;

// console.log(blog);

//Boolean
let myAge = 24;
console.log(age != 25); 
// ==true != false - loose comparison
// ===true !== false - strict comparison

/*  
    true   true   true
    true   false  false
    false  true   false
    false  false   false
*/

let num1 = 10;
let num2 = 12;

comp = num1 <= num2 ;
console.log(comp);

