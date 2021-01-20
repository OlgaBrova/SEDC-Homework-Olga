//Homework #3
//Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers

// Reshenie 1- bez Loop
let numberArray = [102, 66, 13, 24, 45, 36, 257, 338, 887, 400, 750, 600, 201, 806, 567];
let maxNumber = Math.max(...numberArray);
let minNumber = Math.min(...numberArray);

function sum(minNumber, maxNumber){
    
    let result = minNumber + maxNumber;
    return result;
}
console.log(`The max-number of the array is ${maxNumber}.`);
console.log(`The max-number of the array is ${minNumber}.`);
console.log(`The sum of max-number and min-number is ${sum(minNumber, maxNumber)}.`);



// Reshenie 2- so Loop

let numberArray = [102, 66, 13, 24, 45, 36, 257, 338, 887, 400, 750, 600, 201, 806, 567];

let maxNumber = numberArray[0];
for(let i = 0; i < numberArray.length; i++) {

    if (numberArray[i] > maxNumber) {
        maxNumber = numberArray[i];
    }
}

let minNumber = numberArray[0];
for(let i=0; i < numberArray.length; i++){
    if(numberArray[i] < minNumber){
        minNumber = numberArray[i];   
    }
}

function sum(minNumber, maxNumber){
    let result = minNumber + maxNumber;
    return result;
}

console.log(`The max-number of the array is ${maxNumber}.`);
console.log(`The max-number of the array is ${minNumber}.`);
console.log(`The sum of max-number and min-number is ${sum(minNumber, maxNumber)}.`);