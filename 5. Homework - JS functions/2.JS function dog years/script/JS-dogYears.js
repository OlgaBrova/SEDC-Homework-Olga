let userInput = prompt("Enter your dog's birth year:");
let birthYear = Number(userInput);
let b = birthYear;

let todayYear = new Date();
let a = todayYear.getFullYear();

function dogYearsOld(a, b){
    let result = (a - b) * 7;
    return result;
}

let humanYearsOld = dogYearsOld(a, b) / 7;

console.log(`Your dog is ${dogYearsOld(a, b)} years old  in dog years, or ${humanYearsOld} years old in human years.`);