// Example Exercise (from class)
//Write a JavaScript program that will read in a number and write out its digits

// Reshenie 1:
let number = 586932587;
let digitString = number.toString().split('');

let i = 0;
while (i < digitString.length) {
    digitString[i] = Number(digitString[i]);
    i++;
}

console.log(digitString); 


// // Reshenie 2:

let number = 95421633;
let digitString = number.toString().split('');
let digits = digitString.map(Number);

console.log(digits);