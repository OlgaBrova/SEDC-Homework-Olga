//Homework #4
// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstNames = ['Elena', 'Marija', 'Martin', 'Mariela', 'Aleksandar'];
let lastNames = ['Mihajlova', 'Penovska', 'Murovski', 'Anastasova', 'Brova'];
let fullNames = [];   

function fullNamesFunction(){
    let i = 0; 
    listNum = 1;
    
    while (i < firstNames.length){
        fullNames.push(`${listNum}. ${firstNames[i]} ${lastNames[i]}`);
        listNum++;
        i++;
    }
}

fullNamesFunction();
console.log(fullNames);