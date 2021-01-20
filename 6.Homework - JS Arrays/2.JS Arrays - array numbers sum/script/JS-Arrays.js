//Array homework #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
// If one of the numbers of the array is invalid show an error message instead of a result.

let numbersArray = [12, 32, 95, 157, 654];

function numbersSum(a, b, c, d, e){
    let result = a + b + c + d + e;
    return result;
}

console.log(`The sum of the numbers in the array is ${numbersSum(...numbersArray)}.`); 




//Bonus homework #2

let numbersArray2 = [12, 32, 95, 157, 654, 'Marija', false];
function validateNumber(){
    let counter = 0;
    while (counter < numbersArray2.length){
        if (typeof (numbersArray2[counter]) === 'number'){
            console.log(`This is a valid number`, numbersArray2[counter]);
        }
        else{
            console.log('ERROR');
            counter++;
        }
        counter++;
    }
    return counter;
}

validateNumber();
