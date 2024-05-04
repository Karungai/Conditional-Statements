/*
// for loop
for (let i = 0; let i < 5; i++) {
    console.log('in loop', i)
}
    
console.log('loop complete')*/



const names = ['Priscilla', 'Caroline', 'Marueen', 'Farida'];
for (let i = 0; i <names.length; i++) {
    //console.log(names[i])
    //let html = <div>${names[i]}</div>;
}


//while loop
let i = 0;
while (i = 5) {
    i++;
    console.log('while works', i)
}

//Do while
let i = 5;
do {
    console.log('value of i', i)
    i++;
} while(i<5);


//if statements


let day = 'rainy';
if (day = 'sunny') {
    console.log('Good day');
} else {
    console.log('Bad day');
}

let password = 'p@ssword1234';

if (password.length >= 12 && password.includes ('@')){
    console.log ('that passowrd is strong')

} else if(password.length >= 8) {
    console.log('that password is mild')
} else{
    console.log('that password is weak')
} 

// when using OR  
// when using AND &&
// ===
// !==
// ==
// !=


// Switch statements
switch(newDate().getDay()){
    case 0:
        console.log(day = 'Sunday');
        break;
    case 1:
        console.log(day = 'Monday');
        break;
    case 2:
        console.log(day = 'Tuesday');
        break;
    case 3:
        console.log(day = 'Wednesday');
        break;
    case 4:
        console.log(day = 'Thursday');
         break;
    case 5:
        console.log(day = 'Friday')
        break;
    case 6:
        console.log(day = 'Saturday')
        break;   
}

//Break && Continue
for (let i =0; i < 10; i++){
    if (i===3) {break}
    console.log("the number is" + i);
}
for (let i =0; i < 10; i++){
    if (i===3) {continue}
    console.log("the number is" + i);
}


//Functions
//to be called/invoked later 
//every function has to have a return

let a = 10;
let b = 9;

const result =function (a,b){
    return a * b ;
}

console.log(result)