1. Variables are data structures that store values
   - let - updates the variable
   - const - doesn't change the variable
- Naming convention - camelCase
- Variable naming does not start with numbers
- Reserved keywords do not create the names
- Make the name meaningful
Methods - fxns associated with a particular data type

DECISION STATEMENTS
1. if (condition) 
code to be executed if the condition is true
   let num = 10;
   if (num > 0) 
  console.log("The number is positive.");

2. if....else statement 
   - if (condition) 
   code to be executed if the condition is true 
   - else 
Example:
   code to be executed if the condition is false
   let num = -5;
   if (num > 0) {
  console.log("The number is positive.");
   else 
  console.log("The number is non-positive.");
  }

3. Switch statement
switch (expression) 
  case value1:
     code to be executed if expression matches value1
    break;
  case value2:
     code to be executed if expression matches value2
    break;
  ...
  default:
     code to be executed if expression doesn't match any value
Example
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the first day of the week.");
    break;
  case "Friday":
    console.log("It's the last day of the week.");
    break;
  default:
    console.log("It's neither Monday nor Friday.");
}

4. Ternary operator
(condition) ? expression1 : expression2;
Example
let num = 5;
 l  et result = (num % 2 === 0) ? "Even number" : "Odd number";
 Console.log(result);



 STRUCTURES and LOOPS
 1. Block statments
 Used to group multiple statement together.
 Denoted by {}
 Often used with decision statements and loops
 Example:
 {
  // Statements 1
  // Statements 2
  // ...
}

2. Loop
Used to execute a block of code repeatedly for a specific number of times. 
Consists of three parts: initialization, condition and incriment/decrement.
- for (initialization; condition; increment/decrement) { 
   // code to be executed in each iteration
}
example
for (let i = 0; i < 5; i++) {
  console.log(i);
}

3. While loop
used to execite a block of code repeatedly as long as a specified condition it true. Only has a condition that is checked before each iteration.
while (condition) {
  // code to be executed in each iteration
}
Example
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

4. Do...while loop
Similar to while loop but the condition is after each iteration. This gurantees that the code block is executed at least once.
do {
  // code to be executed in each iteration
} while (condition);
Example
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

5. For...in loop
Used to iterate over the properties of an object.
Can be used to loop through keys of an object or the indices of an array.
for (variable in object) {
  // code to be executed in each iteration
}
Example
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

For...of loop
Used to iterate over the iterable objects such as arrays, strings and other collections.
Provides an easier way to loop through elements of and iterable.
for (variable of iterable) {
  // code to be executed in each iteration
}
Example
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

<br> <br> (double break) This is when you want to introduce a break in a long paragraph.